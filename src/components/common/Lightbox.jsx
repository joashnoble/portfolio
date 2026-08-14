import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function Lightbox({ project, zoom, onZoomIn, onZoomOut, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button onClick={(e) => { e.stopPropagation(); onZoomOut(); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Zoom out">
          <ZoomOut size={20} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); onZoomIn(); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Zoom in">
          <ZoomIn size={20} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Close">
          <X size={20} />
        </button>
      </div>
      <div className="w-full h-full overflow-auto flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          onClick={(e) => e.stopPropagation()}
          className="max-w-none transition-transform duration-150 cursor-zoom-in"
          style={{
            transform: `scale(${zoom})`,
            maxHeight: zoom === 1 ? "90vh" : "none",
            maxWidth: zoom === 1 ? "90vw" : "none",
          }}
        />
      </div>
    </div>
  );
}
