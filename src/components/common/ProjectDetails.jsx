import { useEffect, useState } from "react";
import { ExternalLink, X, ZoomIn } from "lucide-react";

function DetailList({ title, items, c }) {
  if (!items?.length) return null;

  return (
    <div>
      <h4 className="text-xs font-mono uppercase tracking-wide mb-2">
        {title}
      </h4>

      <ul className={`space-y-1.5 text-sm leading-relaxed ${c.muted}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={c.accent}>▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetails({
  project,
  c,
  onClose,
  onOpenLightbox,
}) {
  const [activeImage, setActiveImage] = useState(project?.image);

  useEffect(() => {
    setActiveImage(project?.image);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery?.length
    ? project.gallery
    : [project.image];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        className={`relative w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-xl border ${c.border} ${c.cardBg} shadow-2xl`}
      >
        {/* =========================
            STICKY PROJECT HEADER
        ========================== */}
        <div
          className={`sticky top-0 z-20 ${c.cardBg} border-b ${c.border} px-5 sm:px-7 lg:px-8 py-4`}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`font-mono text-xs ${c.accent}`}>
                  /project
                </span>

                {project.featured && (
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${c.accentBg} ${c.accent}`}
                  >
                    Featured
                  </span>
                )}
              </div>

              <h2
                id="project-details-title"
                className="text-lg sm:text-xl font-bold truncate pr-2"
              >
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project details"
              className={`shrink-0 p-2 rounded-full border ${c.border} ${c.hoverAccent} transition-colors`}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* =========================
            IMAGE / GALLERY
        ========================== */}
        <div className="p-4 sm:p-6 lg:p-8 pb-0">
          <div className="relative group rounded-lg overflow-hidden border border-black/10">
            <img
              src={activeImage}
              alt={project.title}
              className="w-full max-h-[60vh] object-contain bg-black/5"
            />

            <button
              onClick={() =>
                onOpenLightbox({
                  ...project,
                  image: activeImage,
                })
              }
              className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/75 text-white text-xs font-mono opacity-90 hover:opacity-100 transition-opacity"
            >
              <ZoomIn size={14} />
              Open image
            </button>
          </div>

          {/* Gallery thumbnails */}
          {gallery.length > 1 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
              {gallery.map((image) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`rounded-md overflow-hidden border-2 transition-colors ${
                    activeImage === image
                      ? "border-emerald-500"
                      : c.border
                  }`}
                  aria-label={`View ${project.title} screenshot`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full aspect-[4/3] object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* =========================
            PROJECT DETAILS
        ========================== */}
        <div className="p-5 sm:p-7 lg:p-8 space-y-7">
          {/* Description */}
          <div>
            <p className={`text-sm leading-relaxed ${c.muted}`}>
              {project.description}
            </p>
          </div>

          {/* Role / Ownership */}
          <div className={`rounded-lg border ${c.border} p-4 sm:p-5`}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wide mb-1">
                  My role
                </h4>

                <p className="text-sm leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wide mb-1">
                  Ownership
                </h4>

                <p className={`text-sm leading-relaxed ${c.muted}`}>
                  {project.ownership}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <DetailList
            title="Key features"
            items={project.features}
            c={c}
          />

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wide mb-2">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-mono px-2 py-1 rounded ${c.accentBg} ${c.accent}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <DetailList
            title="Integrations / APIs"
            items={project.integrations}
            c={c}
          />

          {/* Architecture */}
          <DetailList
            title="Architecture / technical approach"
            items={
              project.architecture
                ? [project.architecture]
                : []
            }
            c={c}
          />

          {/* Problems */}
          <DetailList
            title="Problems solved"
            items={project.challenges}
            c={c}
          />

          {/* Impact */}
          <DetailList
            title="Impact / results"
            items={project.impact}
            c={c}
          />

          {/* Project URL */}
          {project.url && (
            <div className={`pt-2 border-t ${c.border}`}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.accent} ${c.hoverAccent}`}
              >
                View project
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}