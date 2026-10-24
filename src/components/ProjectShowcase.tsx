'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent, PointerEvent } from 'react';
import { projects, projectFilters } from '@/data/projects';

type Project = (typeof projects)[number];

const CARD_WIDTH = 'w-[82%] sm:w-[66%] lg:w-[58%] max-w-4xl';
const CARD_STEP = 0.68; // horizontal gap between card centres, as a fraction of card width
const EASE = 'duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none';

const pad = (value: number) => String(value).padStart(2, '0');

const categoryLabel = (category: string) =>
  projectFilters.find((filter) => filter.id === category)?.label ?? category;

const externalLink = (project: Project) => project.live || project.github;

// Distance from the active card, wrapped so the carousel loops
function getOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

// Position is fractional while dragging, so every value here interpolates smoothly
function getCardStyle(position: number) {
  const distance = Math.abs(position);
  const direction = Math.sign(position);
  const near = Math.min(distance, 1);
  const far = Math.min(Math.max(distance - 1, 0), 1);

  return {
    transform: `translateX(-50%) translateX(${direction * (near * CARD_STEP * 100 + far * 30)}%) scale(${1 - near * 0.2 - far * 0.1}) rotateY(${-direction * near * 12}deg)`,
    opacity: distance <= 1 ? 1 : Math.max(0, 2 - distance),
    zIndex: 30 - Math.round(distance * 10),
  };
}

export default function ProjectShowcase() {
  const total = projects.length;
  const [active, setActive] = useState(0);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sizerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pointer = useRef<{ id: number; x: number; y: number } | null>(null);
  const didDrag = useRef(false);
  const focusActiveCard = useRef(false);

  const step = (delta: number) => setActive((current) => (((current + delta) % total) + total) % total);
  const stepWidth = () => (sizerRef.current?.offsetWidth ?? 600) * CARD_STEP;

  // Keep keyboard focus on the visible card after arrowing through
  useEffect(() => {
    if (!focusActiveCard.current) return;
    focusActiveCard.current = false;
    cardRefs.current[active]?.focus({ preventScroll: true });
  }, [active]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    focusActiveCard.current = (event.target as HTMLElement).hasAttribute('data-card');
    step(event.key === 'ArrowRight' ? 1 : -1);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    didDrag.current = false;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointer.current;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;

    if (!didDrag.current) {
      if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(event.clientY - start.y)) return;
      didDrag.current = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDragProgress(dx / stepWidth());
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointer.current;
    if (!start || start.id !== event.pointerId) return;
    pointer.current = null;
    if (!didDrag.current) return;

    const dx = event.clientX - start.x;
    const width = stepWidth();
    if (Math.abs(dx) > Math.min(80, width * 0.2)) {
      const steps = Math.min(total - 1, Math.max(1, Math.round(Math.abs(dx) / width)));
      step(dx < 0 ? steps : -steps);
    }
    setDragProgress(0);
    setIsDragging(false);
    // The click that follows this pointerup must not open a card
    setTimeout(() => {
      didDrag.current = false;
    }, 0);
  };

  const handlePointerCancel = () => {
    pointer.current = null;
    didDrag.current = false;
    setDragProgress(0);
    setIsDragging(false);
  };

  const handleCardClick = (event: MouseEvent<HTMLAnchorElement>, index: number, project: Project) => {
    if (didDrag.current || index !== active) {
      event.preventDefault();
      if (!didDrag.current) setActive(index);
      return;
    }
    // Fall back to the projects section if a filter has hidden this card
    if (!externalLink(project) && !document.getElementById(`project-${project.id}`)) {
      event.preventDefault();
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = projects[active];
  const currentLink = externalLink(current);

  return (
    <section id="showcase" className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-20 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 h-2/3 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_65%)]"
      />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
              Featured <span className="font-serif italic font-normal">projects.</span>
            </h2>
          </div>
          <div className="text-sm md:text-right max-w-xs">
            <p className="text-neutral-600">A selection of my recent work</p>
            <p className="text-neutral-400 mt-1">Drag, swipe or use the arrows to explore.</p>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          onKeyDown={handleKeyDown}
        >
          <div
            className="relative select-none touch-pan-y cursor-grab active:cursor-grabbing"
            style={{ perspective: '1600px' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {/* Invisible copy of the active card that gives the stage its height */}
            <div ref={sizerRef} aria-hidden="true" className={`invisible mx-auto aspect-[4/3] sm:aspect-[16/10] ${CARD_WIDTH}`} />

            {projects.map((project, index) => {
              const position = getOffset(index, active, total) + dragProgress;
              const distance = Math.abs(position);
              const isActive = index === active;
              const link = externalLink(project);
              const cover = project.screenshots[0];

              return (
                <a
                  key={project.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  href={link || `#project-${project.id}`}
                  target={link && isActive ? '_blank' : undefined}
                  rel={link ? 'noopener noreferrer' : undefined}
                  draggable={false}
                  data-card
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={isActive ? undefined : true}
                  aria-roledescription="slide"
                  onClick={(event) => handleCardClick(event, index, project)}
                  style={getCardStyle(position)}
                  className={`group absolute top-0 left-1/2 h-full ${CARD_WIDTH} rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-2xl shadow-black/15 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                    isDragging ? '' : `transition-[transform,opacity] ${EASE}`
                  } ${distance > 1.5 ? 'pointer-events-none' : ''}`}
                >
                  {cover ? (
                    <>
                      {/* Colour on the active card, greyscale on the others to match the theme */}
                      <Image
                        src={cover.src}
                        alt=""
                        fill
                        loading="eager"
                        draggable={false}
                        sizes="(min-width: 1024px) 58vw, (min-width: 640px) 66vw, 82vw"
                        className={`object-cover object-top transition-[filter,scale] duration-700 group-hover:scale-[1.03] ${isActive ? '' : 'grayscale'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 via-35% to-transparent to-70%" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-white" />
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px)',
                          backgroundSize: '40px 40px',
                        }}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -right-4 -bottom-8 sm:-right-6 sm:-bottom-12 text-[9rem] sm:text-[13rem] lg:text-[16rem] leading-none opacity-10 grayscale transition-transform duration-700 group-hover:scale-105"
                      >
                        {project.image}
                      </span>
                    </>
                  )}

                  <div className="relative h-full flex flex-col justify-between p-5 sm:p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-xs bg-black text-white px-2 py-1 rounded">{pad(index + 1)}</span>
                      <span
                        className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] ${
                          cover ? 'bg-white/90 text-black px-2 py-1 rounded' : 'text-neutral-600'
                        }`}
                      >
                        {categoryLabel(project.category)}
                      </span>
                    </div>

                    <div>
                      {!cover && (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-3 sm:mb-5 rounded-xl lg:rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-xl sm:text-2xl lg:text-4xl grayscale">
                          {project.image}
                        </div>
                      )}
                      <h3 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black tracking-tight leading-[1.1] line-clamp-2 sm:line-clamp-3">
                        {project.title}
                      </h3>
                      <div className="hidden lg:flex flex-wrap gap-2 mt-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-xs border border-black/15 text-neutral-700 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fades the cards either side of the active one */}
                  <div
                    className={`absolute inset-0 bg-white pointer-events-none ${isDragging ? '' : `transition-opacity ${EASE}`}`}
                    style={{ opacity: Math.min(distance, 1) * 0.55 }}
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-neutral-200 text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show project ${index + 1} of ${total}: ${project.title}`}
                  aria-current={index === active ? 'true' : undefined}
                  className="p-1.5 group/dot"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      index === active ? 'w-8 bg-black' : 'w-1.5 bg-neutral-300 group-hover/dot:bg-neutral-600'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-neutral-200 text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            key={current.id}
            aria-live="polite"
            className={`mx-auto mt-10 ${CARD_WIDTH} flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 animate-fade-up motion-reduce:animate-none`}
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                {pad(active + 1)} / {pad(total)} · {categoryLabel(current.category)}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">{current.title}</h3>
              <p className="text-sm text-neutral-600 mt-2">{current.meta}</p>
            </div>
            <a
              href={currentLink || `#project-${current.id}`}
              target={currentLink ? '_blank' : undefined}
              rel={currentLink ? 'noopener noreferrer' : undefined}
              className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-black hover:bg-black hover:text-white hover:border-black transition"
            >
              {currentLink ? 'Open project ↗' : 'View details →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
