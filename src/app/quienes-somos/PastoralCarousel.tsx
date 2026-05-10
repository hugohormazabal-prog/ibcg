"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/0.png",
    alt: "Fotografía pastoral 0",
  },
  {
    src: "/1.jpeg",
    alt: "Fotografía pastoral 1",
  },
  {
    src: "/2.jpeg",
    alt: "Fotografía pastoral 2",
  },
  {
    src: "/3.jpeg",
    alt: "Fotografía pastoral 3",
  },
];

export function PastoralCarousel() {
  const [index, setIndex] = useState(0);
  const current = images[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value === images.length - 1 ? 0 : value + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="self-center border border-[#dedbd5] bg-white p-3">
      <div className="relative h-[360px] overflow-hidden bg-[#f6f5f2]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-contain"
        />
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
            Foto pastoral
          </p>
          <p className="mt-2 text-sm font-semibold text-[#111827]">
            Pastor Fernando Herrera y familia
          </p>
        </div>
        <p className="text-sm text-[#6a7078]">
          {index + 1} / {images.length}
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        {images.map((image, imageIndex) => (
          <button
            aria-label={`Mostrar fotografía ${imageIndex + 1}`}
            className="focus-ring flex min-h-9 flex-1 items-center rounded-full transition"
            key={image.src}
            onClick={() => setIndex(imageIndex)}
            type="button"
          >
            <span
              className={`h-1.5 w-full rounded-full ${
                imageIndex === index ? "bg-[#0f1d33]" : "bg-[#dedbd5]"
              }`}
            />
          </button>
        ))}
      </div>
    </aside>
  );
}
