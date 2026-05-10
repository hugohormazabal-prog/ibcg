import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const youtubeStreamsUrl = "https://www.youtube.com/@IglesiaB%C3%ADblicaCG/streams";
const whatsappUrl = "https://wa.me/56978562489";
const liveVideoId = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID?.trim();
const youtubeChannelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID?.trim();

const embedUrl = liveVideoId
  ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(liveVideoId)}?rel=0&modestbranding=1`
  : youtubeChannelId
    ? `https://www.youtube-nocookie.com/embed/live_stream?channel=${encodeURIComponent(
        youtubeChannelId,
      )}&rel=0&modestbranding=1`
    : "";

const meetingDetails = [
  {
    label: "Horario",
    value: "Domingo, 11:00 hrs",
  },
  {
    label: "Lugar digital",
    value: "Sitio web y canal de YouTube",
  },
  {
    label: "Después del culto",
    value: "Archivo en sermones",
  },
];

const broadcastSteps = [
  {
    title: "Señal principal",
    text: "El computador envía la transmisión a YouTube Studio usando OBS.",
  },
  {
    title: "Audio cuidado",
    text: "La prioridad es que la predicación se escuche clara y estable.",
  },
  {
    title: "Respaldo pastoral",
    text: "Si la transmisión falla, el contacto por WhatsApp queda disponible.",
  },
  {
    title: "Archivo semanal",
    text: "La predicación puede quedar luego en el catálogo para escuchar y leer.",
  },
];

export const metadata: Metadata = {
  title: "En vivo | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Transmisión dominical de Iglesia Bíblica Comunidad de la Gracia con acceso al culto en vivo, respaldo por YouTube y contacto pastoral.",
};

export default function EnVivoPage() {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <header className="border-b border-[#e4e1dc] bg-[#0b1220] text-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 text-[0.8rem] font-semibold leading-4"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/92 p-1 ring-1 ring-white/24 sm:h-9 sm:w-9">
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
          <div className="hidden items-center gap-5 text-[0.82rem] text-white/74 md:flex">
            <Link className="nav-link transition hover:text-white" href="/">
              Inicio
            </Link>
            <Link className="nav-link transition hover:text-white" href="/sermones">
              Sermones
            </Link>
            <Link className="nav-link transition hover:text-white" href="/recursos">
              Recursos
            </Link>
            <Link className="nav-link transition hover:text-white" href="/#contacto">
              Contacto pastoral
            </Link>
          </div>
          <details className="group relative md:hidden">
            <summary className="button-lift focus-ring flex min-h-8 cursor-pointer list-none items-center border border-white/24 px-3 text-[0.76rem] font-semibold text-white/88 transition hover:border-white/50 hover:bg-white/8 [&::-webkit-details-marker]:hidden">
              Menú
            </summary>
            <div className="absolute right-0 top-10 z-30 grid min-w-48 gap-1 border border-white/12 bg-[#0b1220] p-2 text-[0.82rem] text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
              <Link className="px-3 py-2 transition hover:bg-white/8" href="/">
                Inicio
              </Link>
              <Link className="px-3 py-2 transition hover:bg-white/8" href="/sermones">
                Sermones
              </Link>
              <Link className="px-3 py-2 transition hover:bg-white/8" href="/recursos">
                Recursos
              </Link>
              <Link className="px-3 py-2 transition hover:bg-white/8" href="/#contacto">
                Contacto pastoral
              </Link>
            </div>
          </details>
        </nav>
      </header>

      <section className="border-b border-[#e4e1dc] bg-[#fbfaf7] px-4 py-8 sm:px-6 lg:py-11">
        <div className="reveal mx-auto grid max-w-5xl gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
              Transmisión dominical
            </p>
            <h1 className="mt-3 max-w-md text-[1.45rem] font-bold leading-tight text-[#111827] sm:text-[1.85rem]">
              Reunión en vivo para escuchar la Palabra juntos.
            </h1>
            <p className="mt-3 max-w-md text-[0.88rem] leading-6 text-[#5e636b]">
              Acceso preparado para la transmisión dominical desde computador
              mediante YouTube, sin depender de la transmisión móvil.
            </p>
          </div>

          <div className="grid gap-px border border-[#dedbd5] bg-[#dedbd5] sm:grid-cols-3">
            {meetingDetails.map((detail) => (
              <div className="bg-white p-4" key={detail.label}>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                  {detail.label}
                </p>
                <p className="mt-2 text-[0.88rem] font-semibold leading-5 text-[#0f1d33]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1fr_18rem]">
          <section className="overflow-hidden border border-[#dedbd5] bg-[#0b1220]">
            <div className="flex items-center justify-between gap-3 border-b border-white/12 px-4 py-3 text-white">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#d8c08a]">
                  En vivo
                </p>
                <h2 className="mt-1 text-[0.96rem] font-semibold">
                  Iglesia Bíblica Comunidad de la Gracia
                </h2>
              </div>
              <span className="shrink-0 border border-[#d8c08a]/35 px-2.5 py-1 text-[0.68rem] font-semibold text-[#ead9ad]">
                Domingo 11:00
              </span>
            </div>

            <div className="aspect-video bg-[#070b12]">
              {embedUrl ? (
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={embedUrl}
                  title="Transmisión en vivo de Iglesia Bíblica Comunidad de la Gracia"
                />
              ) : (
                <div className="grid h-full place-items-center px-5 text-center">
                  <div className="max-w-md">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
                      Reproductor preparado
                    </p>
                    <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-white">
                      La transmisión aparecerá aquí cuando el equipo conecte el
                      vivo de YouTube al sitio.
                    </p>
                    <a
                      className="button-lift focus-ring mt-5 inline-flex min-h-10 items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4]"
                      href={youtubeStreamsUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Abrir canal de YouTube
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="grid gap-4">
            <div className="border border-[#dedbd5] bg-[#fbfaf7] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                Estado
              </p>
              <h2 className="mt-2 text-[1.05rem] font-bold leading-snug text-[#0f1d33]">
                Canal listo para la reunión dominical.
              </h2>
              <p className="mt-3 text-[0.82rem] leading-6 text-[#5e636b]">
                Si el reproductor no carga durante el culto, el acceso directo
                al canal queda disponible como respaldo.
              </p>
              <div className="mt-4 grid gap-2">
                <a
                  className="button-lift focus-ring inline-flex min-h-10 items-center justify-center bg-[#0f1d33] px-4 text-[0.82rem] font-semibold text-white transition hover:bg-[#172b4a]"
                  href={youtubeStreamsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver en YouTube
                </a>
                <a
                  className="button-lift focus-ring inline-flex min-h-10 items-center justify-center border border-[#dedbd5] bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:border-[#bda36a]"
                  href={whatsappUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Pedir ayuda por WhatsApp
                </a>
              </div>
            </div>

            <Link
              className="quiet-card border border-[#dedbd5] bg-white p-4"
              href="/sermones"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                Biblioteca
              </p>
              <h2 className="mt-2 text-[1rem] font-bold leading-snug text-[#0f1d33]">
                Escuchar predicaciones anteriores
              </h2>
              <p className="mt-2 text-[0.8rem] leading-5 text-[#5e636b]">
                Audio, referencias bíblicas y transcripciones revisadas.
              </p>
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#e4e1dc] bg-[#f6f5f2] px-4 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Operación de transmisión
              </p>
              <h2 className="mt-2 max-w-xl text-[1.2rem] font-bold leading-tight text-[#111827] sm:text-[1.45rem]">
                Flujo simple para salir por OBS y mantener una experiencia
                estable en el sitio.
              </h2>
            </div>
            <a
              className="text-link w-fit text-[0.82rem] font-semibold text-[#0f1d33]"
              href={youtubeStreamsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Abrir respaldo YouTube →
            </a>
          </div>

          <div className="mt-6 grid gap-px border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-4">
            {broadcastSteps.map((step, index) => (
              <article className="bg-white p-4" key={step.title}>
                <p className="text-[0.68rem] font-semibold text-[#8a6d35]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[0.92rem] font-bold text-[#0f1d33]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-5 text-[#5e636b]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1220] px-4 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
              Contacto pastoral
            </p>
            <p className="mt-2 text-[0.9rem] font-semibold">
              Pastor Fernando Herrera
            </p>
            <a className="text-link mt-1 inline-block text-[0.82rem] text-white/68" href="tel:+56978562489">
              +56 9 7856 2489
            </a>
          </div>
          <Link
            className="button-lift focus-ring inline-flex min-h-10 items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4]"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
