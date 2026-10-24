'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { TouchEvent } from 'react';
import type { Screenshot } from '@/data/projects';

type Props = {
  title: string;
  screenshots: Screenshot[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ScreenshotLightbox({ title, screenshots, index, onChange, onClose }: Props) {
  const total = screenshots.length;
  const current = screenshots[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => onChange((index + delta + total) % total);

  // Lock page scroll while open, and hand focus back to the opener on close
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % total);
      if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index, total, onChange, onClose]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-sm animate-fade-up motion-reduce:animate-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-white" onClick={(event) => event.stopPropagation()}>
        <p className="text-sm sm:text-base font-semibold truncate">{title}</p>
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-xs text-neutral-400">
            {index + 1} / {total}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close screenshots"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20">
        <Image
          key={current.src}
          src={current.src}
          alt={current.caption}
          width={1600}
          height={1000}
          sizes="100vw"
          onClick={(event) => event.stopPropagation()}
          className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-up motion-reduce:animate-none"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(-1);
              }}
              aria-label="Previous screenshot"
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-black/40 text-white items-center justify-center hover:bg-white hover:text-black transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(1);
              }}
              aria-label="Next screenshot"
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-black/40 text-white items-center justify-center hover:bg-white hover:text-black transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="px-4 sm:px-6 py-5 text-center" onClick={(event) => event.stopPropagation()}>
        <p className="text-sm text-neutral-300">{current.caption}</p>
        {total > 1 && (
          <div className="mt-4 flex items-center justify-center">
            {screenshots.map((screenshot, i) => (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => onChange(i)}
                aria-label={`Show screenshot ${i + 1} of ${total}`}
                aria-current={i === index ? 'true' : undefined}
                className="p-1.5"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/30'}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
