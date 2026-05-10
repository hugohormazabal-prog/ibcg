"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { Sermon } from "./types";

type SermonCatalogProps = {
  sermons: readonly Sermon[];
  topics: string[];
};

const allTopicsLabel = "Todos";

export default function SermonCatalog({ sermons, topics }: SermonCatalogProps) {
  const [selectedTopic, setSelectedTopic] = useState(allTopicsLabel);
  const [query, setQuery] = useState("");
  const [activeTranscript, setActiveTranscript] = useState<Sermon | null>(null);

  const visibleSermons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sermons.filter((sermon) => {
      const matchesTopic =
        selectedTopic === allTopicsLabel || sermon.topics.includes(selectedTopic);
      const searchable = [
        sermon.title,
        sermon.theme,
        sermon.summary,
        sermon.references.join(" "),
        sermon.topics.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesTopic && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [query, selectedTopic, sermons]);

  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <header className="border-b border-[#dedbd5] bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 text-[0.8rem] font-semibold leading-4 text-[#0f1d33]"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white p-1 ring-1 ring-[#dedbd5] sm:h-9 sm:w-9">
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="max-w-44 sm:max-w-56">
              Iglesia Bíblica Comunidad de la Gracia
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-4 text-[0.82rem] font-semibold text-[#4d5562]">
            <Link className="text-link hidden sm:inline" href="/">
              Inicio
            </Link>
            <Link className="text-link hidden sm:inline" href="/recursos">
              Recursos
            </Link>
            <Link className="text-link hidden sm:inline" href="/en-vivo">
              En vivo
            </Link>
            <span className="text-[#8a6d35]">Sermones</span>
          </div>
        </nav>
      </header>

      <section className="border-b border-[#e4e1dc] bg-[#fbfaf7] px-4 py-7 sm:px-6 lg:py-9">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Biblioteca de sermones
              </p>
              <h1 className="mt-3 max-w-md text-[1.35rem] font-bold leading-tight text-[#111827] sm:text-[1.62rem]">
                Predicaciones para escuchar, leer y estudiar.
              </h1>
              <p className="mt-3 max-w-md text-[0.86rem] leading-6 text-[#5e636b]">
                Audio original, pasajes principales y transcripción revisada en
                una vista compacta para encontrar rápido el mensaje correcto.
              </p>
            </div>

            <div className="grid gap-4 border border-[#dedbd5] bg-white p-4">
              <label className="grid gap-1.5">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                  Buscar
                </span>
                <input
                  className="min-h-10 border border-[#dedbd5] bg-white px-3 text-[0.86rem] text-[#111827] outline-none transition placeholder:text-[#8d939c] focus:border-[#bda36a] focus:ring-2 focus:ring-[#bda36a]/20"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Título, tema o cita bíblica"
                  type="search"
                  value={query}
                />
              </label>

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                  Temas
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[allTopicsLabel, ...topics].map((topic) => {
                    const active = topic === selectedTopic;

                    return (
                      <button
                        className={`border px-2.5 py-1.5 text-[0.74rem] font-semibold transition ${
                          active
                            ? "border-[#0f1d33] bg-[#0f1d33] text-white"
                            : "border-[#dedbd5] bg-[#fbfaf7] text-[#4d5562] hover:border-[#bda36a] hover:text-[#0f1d33]"
                        }`}
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        type="button"
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-4 border-b border-[#dedbd5] pb-3">
            <h2 className="text-[1rem] font-bold text-[#0f1d33]">
              {visibleSermons.length} predicaciones
            </h2>
            <p className="hidden text-[0.78rem] font-semibold text-[#6b7280] sm:block">
              Ordenadas por fecha de carga
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleSermons.map((sermon) => (
              <SermonCard
                key={sermon.id}
                onOpenTranscript={() => setActiveTranscript(sermon)}
                sermon={sermon}
              />
            ))}
          </div>

          {visibleSermons.length === 0 ? (
            <div className="mt-5 border border-[#dedbd5] bg-[#fbfaf7] p-5 text-[0.9rem] leading-6 text-[#5e636b]">
              No hay sermones disponibles para este filtro.
            </div>
          ) : null}
        </div>
      </section>

      {activeTranscript ? (
        <TranscriptModal
          onClose={() => setActiveTranscript(null)}
          sermon={activeTranscript}
        />
      ) : null}
    </main>
  );
}

function SermonCard({
  onOpenTranscript,
  sermon,
}: {
  onOpenTranscript: () => void;
  sermon: Sermon;
}) {
  return (
    <article
      className="quiet-card flex min-h-[24rem] flex-col border border-[#dedbd5] bg-white"
      id={`sermon-${sermon.id}`}
    >
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
            Predicación {sermon.number}
          </span>
          <span className="border border-[#dedbd5] px-2 py-1 text-[0.68rem] font-semibold text-[#5e636b]">
            {sermon.duration}
          </span>
        </div>

        <h3 className="mt-3 text-[1.02rem] font-bold leading-snug text-[#0f1d33]">
          {sermon.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.82rem] leading-5 text-[#5e636b]">
          {sermon.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {sermon.references.slice(0, 3).map((reference) => (
            <span
              className="bg-[#f6f5f2] px-2 py-1 text-[0.7rem] font-semibold text-[#4d5562]"
              key={reference}
            >
              {reference}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <audio className="w-full" controls preload="metadata" src={sermon.audio}>
            Tu navegador no puede reproducir este audio.
          </audio>
        </div>
      </div>

      <div className="border-t border-[#dedbd5] bg-[#fbfaf7] p-3">
        <button
          className="button-lift focus-ring inline-flex min-h-9 w-full items-center justify-center border border-[#dedbd5] bg-white px-3 text-[0.8rem] font-semibold text-[#0f1d33] hover:border-[#bda36a]"
          onClick={onOpenTranscript}
          type="button"
        >
          Leer transcripción
        </button>
      </div>
    </article>
  );
}

function TranscriptModal({
  onClose,
  sermon,
}: {
  onClose: () => void;
  sermon: Sermon;
}) {
  const paragraphs = sermon.transcript.split(/\n{2,}/).filter(Boolean);
  const sectionByStart = new Map(
    sermon.transcriptSections.map((section) => [section.start, section.title]),
  );
  const sectionId = (start: number) => `sermon-${sermon.id}-section-${start}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      aria-labelledby="transcript-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-[#080f1b]/72 px-4 py-6"
      role="dialog"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        onClick={onClose}
      />
      <section className="relative grid max-h-[88vh] w-full max-w-3xl grid-rows-[auto_1fr] border border-[#dedbd5] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        <header className="border-b border-[#dedbd5] bg-[#fbfaf7] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                Transcripción
              </p>
              <h2
                className="mt-2 text-[1.15rem] font-bold leading-tight text-[#0f1d33] sm:text-[1.35rem]"
                id="transcript-title"
              >
                {sermon.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {sermon.references.map((reference) => (
                  <span
                    className="bg-white px-2 py-1 text-[0.7rem] font-semibold text-[#4d5562] ring-1 ring-[#dedbd5]"
                    key={reference}
                  >
                    {reference}
                  </span>
                ))}
              </div>
            </div>
            <button
              aria-label="Cerrar transcripción"
              className="focus-ring grid h-9 w-9 shrink-0 place-items-center border border-[#dedbd5] bg-white text-[1.15rem] leading-none text-[#0f1d33] hover:border-[#bda36a]"
              onClick={onClose}
              type="button"
            >
              ×
            </button>
          </div>
        </header>

        <div className="overflow-y-auto px-4 py-5 sm:px-7">
          <div className="mx-auto mb-5 max-w-2xl border border-[#dedbd5] bg-[#fbfaf7] p-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
              Guía de lectura
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {sermon.transcriptSections.map((section) => (
                <button
                  className="focus-ring bg-white px-2 py-1 text-left text-[0.7rem] font-semibold text-[#4d5562] ring-1 ring-[#dedbd5] transition hover:text-[#0f1d33] hover:ring-[#bda36a]"
                  key={`${sermon.id}-${section.start}`}
                  onClick={() => {
                    document
                      .getElementById(sectionId(section.start))
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  type="button"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl gap-4 text-[0.92rem] leading-7 text-[#323842]">
            {paragraphs.map((paragraph, index) => {
              const sectionTitle = sectionByStart.get(index);

              return (
                <div className="grid gap-3" key={`${sermon.id}-modal-${index}`}>
                  {sectionTitle ? (
                    <h3
                      className="scroll-mt-4 border-l-2 border-[#bda36a] bg-[#fbfaf7] px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#8a6d35]"
                      id={sectionId(index)}
                    >
                      {sectionTitle}
                    </h3>
                  ) : null}
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}
