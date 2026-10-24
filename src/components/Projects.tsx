'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';
import { projects, projectFilters as filters } from '@/data/projects';
import type { Project } from '@/data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-neutral-600">A selection of my recent work</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg transition ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="scroll-mt-24 bg-neutral-100 rounded-lg overflow-hidden hover:shadow-xl transition">
              {project.screenshots.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setLightbox({ project, index: 0 })}
                  aria-label={`View ${project.screenshots.length} screenshots of ${project.title}`}
                  className="group relative block w-full h-48 bg-neutral-200 overflow-hidden"
                >
                  <Image
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/80 text-white text-xs px-3 py-1">
                    {project.screenshots.length} screenshots
                  </span>
                </button>
              ) : (
                <div className="h-48 bg-neutral-200 flex items-center justify-center text-4xl grayscale">
                  {project.image}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-1">{project.title}</h3>
                <p className="text-black text-sm mb-3">{project.meta}</p>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-neutral-200 text-black px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.screenshots.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-5">
                    {project.screenshots.slice(1).map((screenshot, i) => (
                      <button
                        key={screenshot.src}
                        type="button"
                        onClick={() => setLightbox({ project, index: i + 1 })}
                        aria-label={`View screenshot: ${screenshot.caption}`}
                        className="relative aspect-[16/10] rounded-md overflow-hidden border border-neutral-200 bg-neutral-200 hover:border-black transition"
                      >
                        <Image
                          src={screenshot.src}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-cover object-left-top"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {(project.github || project.live) && (
                  <div className="flex gap-4 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-black rounded-lg transition text-sm"
                      >
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-lg transition text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/cakuwar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-neutral-200 hover:bg-neutral-300 text-black rounded-lg transition">
            More on GitHub
          </a>
        </div>
      </div>

      {lightbox && (
        <ScreenshotLightbox
          title={lightbox.project.title}
          screenshots={lightbox.project.screenshots}
          index={lightbox.index}
          onChange={(index) => setLightbox({ ...lightbox, index })}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
