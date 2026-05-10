import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

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

export const metadata: Metadata = {
  title: "En vivo | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Transmisión dominical de Iglesia Bíblica Comunidad de la Gracia con acceso al culto en vivo, respaldo por YouTube y contacto pastoral.",
};

export default function EnVivoPage() {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <SiteHeader active="en-vivo" />

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
              Acompaña la reunión dominical desde otro lugar, escucha la
              predicación y mantén a mano los accesos de respaldo.
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
                      La transmisión aparecerá aquí cuando esté disponible.
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

      <SiteFooter />
    </main>
  );
}
