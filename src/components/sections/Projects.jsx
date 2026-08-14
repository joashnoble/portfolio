import { ExternalLink, ZoomIn } from "lucide-react";
import Reveal from "../common/Reveal";
import { projects } from "../../data/site";

export default function Projects({ c, onOpenLightbox }) {
  return (
    <section id="projects" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/projects</p>
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <div
              className={`
                rounded-lg
                border
                ${c.border}
                overflow-hidden
                ${c.cardBg}
              `}
            >
              <button
                onClick={() => onOpenLightbox(project)}
                className="block w-full group relative"
                aria-label={`View ${project.title} image`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    aspect-[4/3]
                    object-cover
                    grayscale
                    brightness-90
                    contrast-90
                    transition-all
                    duration-300
                    group-hover:grayscale-[80%]
                    group-hover:brightness-100
                    group-hover:contrast-100
                  "
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn
                    size={22}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </button>

              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="font-semibold text-sm">{project.title}</h3>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-mono ${c.accent} flex items-center gap-1 flex-shrink-0`}
                    >
                      view <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                <p className={`text-sm mb-3 ${c.muted}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono px-2 py-0.5 rounded ${c.accentBg} ${c.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}