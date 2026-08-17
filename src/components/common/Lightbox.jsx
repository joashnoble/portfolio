import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Lightbox({
  project,
  zoom,
  onZoomIn,
  onZoomReset,
  onClose,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });
  const hasDragged = useRef(false);

  useEffect(() => {
    if (zoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);

  if (!project) return null;

  const handleImageClick = (e) => {
    e.stopPropagation();

    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }

    if (zoom >= 3) {
      onZoomReset();
      setPosition({ x: 0, y: 0 });
      return;
    }

    onZoomIn();
  };

  const handlePointerDown = (e) => {
    if (zoom <= 1) return;

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    setIsDragging(true);
    hasDragged.current = false;

    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };

    positionStart.current = {
      x: position.x,
      y: position.y,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasDragged.current = true;
    }

    setPosition({
      x: positionStart.current.x + deltaX,
      y: positionStart.current.y + deltaY,
    });
  };

  const handlePointerUp = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    setIsDragging(false);
  };

  const handlePointerCancel = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    setIsDragging(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/10 shadow-lg transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div
        className="w-full h-full overflow-hidden flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          draggable={false}
          onClick={handleImageClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className={`max-w-none select-none touch-none ${
            zoom > 1
              ? isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
              : "cursor-zoom-in"
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isDragging ? "none" : "transform 300ms ease-out",
            maxHeight: zoom === 1 ? "90vh" : "none",
            maxWidth: zoom === 1 ? "90vw" : "none",
          }}
        />
      </div>
    </div>
  );
}
