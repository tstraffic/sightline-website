"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectDrawing } from "@content/pages/projects";

export function ProjectGallery({ title, images }: { title: string; images: ProjectDrawing[] }) {
  const [active, setActive] = useState(0);
  const image = images[active];

  function move(direction: number) {
    setActive((current) => (current + direction + images.length) % images.length);
  }

  return (
    <div className="project-gallery">
      <div className="project-gallery-toolbar">
        <div>
          <span className="project-gallery-ref">Drawing preview</span>
          <span className="project-gallery-title" aria-live="polite">{image.label}</span>
        </div>
        <div className="project-gallery-controls">
          <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => move(-1)} aria-label="Previous drawing">←</button>
              <button type="button" onClick={() => move(1)} aria-label="Next drawing">→</button>
            </>
          )}
        </div>
      </div>

      <a
        className="project-drawing-stage"
        href={image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full drawing: ${image.label}`}
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 68vw"
          className="project-drawing-image"
          priority={active === 0}
        />
        <span className="project-drawing-open">Open full drawing ↗</span>
      </a>

      {images.length > 1 && (
        <div className="project-thumbnails" aria-label={`${title} drawing sheets`}>
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show ${item.label}`}
              aria-pressed={index === active}
            >
              <span className="project-thumbnail-image">
                <Image src={item.src} alt="" fill sizes="120px" className="project-drawing-image" />
              </span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
