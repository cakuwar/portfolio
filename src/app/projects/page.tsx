import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  return (
    <main className="min-h-screen bg-neutral-100 text-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8 text-black">My Projects</h1>
        <p className="text-neutral-700 text-lg mb-12">
          A collection of my recent projects showcasing my skills and experience
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-200 rounded-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="relative h-64 bg-gradient-to-br from-neutral-300 to-neutral-100 flex items-center justify-center">
                <span className="text-black text-center text-xl font-semibold">
                  {project.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-700 mb-4">{project.description}</p>

                <div className="mb-6">
                  <p className="text-neutral-600 text-sm mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-neutral-300 text-black px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-neutral-300 hover:bg-neutral-400 text-black rounded-lg transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-lg transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
