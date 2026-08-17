import { ArrowRight, ExternalLink, ZoomIn } from "lucide-react";
import Reveal from "../common/Reveal";
import { projects } from "../../data/site";

function ProjectCard({ project, c, index, onOpenDetails, onOpenLightbox }) {
  return (
    <Reveal delay={index * 70}>
      <article
        className={`group h-full rounded-lg border ${c.border} overflow-hidden ${c.cardBg} transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/60 hover:shadow-lg`}
      >
        <div className="relative">
          <button
            onClick={() => onOpenDetails(project)}
            className="block w-full text-left"
            aria-label={`Open ${project.title} project`}
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
                group-hover:grayscale-[70%]
                group-hover:brightness-100
                group-hover:contrast-100
              "
            />
          </button>

          <button
            onClick={() => onOpenLightbox(project)}
            className="absolute bottom-3 right-3 p-2 rounded-md bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`View ${project.title} screenshot`}
          >
            <ZoomIn size={15} />
          </button>

          {project.featured && (
            <span className={`absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded ${c.accentBg} ${c.accent} backdrop-blur-sm`}>
              Featured
            </span>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-sm leading-snug">{project.title}</h3>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className={`text-xs font-mono ${c.accent} flex items-center gap-1 flex-shrink-0`}
              >
                view <ExternalLink size={11} />
              </a>
            )}
          </div>

          <p className={`text-sm leading-relaxed mb-3 ${c.muted}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-mono px-2 py-0.5 rounded ${c.accentBg} ${c.accent}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpenDetails(project)}
            className={`inline-flex items-center gap-1.5 text-xs font-mono ${c.accent} ${c.hoverAccent}`}
          >
            View Project <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects({ c, onOpenLightbox, onOpenDetails }) {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/projects</p>
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className={`text-sm max-w-2xl leading-relaxed ${c.muted} mb-8`}>
          A selection of systems I've built, maintained, and improved, highlighting my technical ownership, architecture, integrations, and the problems I solved.
        </p>
      </Reveal>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <h3 className="font-semibold">Featured Projects</h3>
          <span className={`text-xs font-mono ${c.muted}`}>/ most relevant</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              c={c}
              index={i}
              onOpenDetails={onOpenDetails}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </div>

      {additionalProjects.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="font-semibold">More Projects</h3>
            <span className={`text-xs font-mono ${c.muted}`}>/ additional experience</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                c={c}
                index={i}
                onOpenDetails={onOpenDetails}
                onOpenLightbox={onOpenLightbox}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
