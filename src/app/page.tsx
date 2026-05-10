import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { getSermons } from "./sermones/data";

const images = {
  hero:
    "https://images.unsplash.com/photo-1763996668109-f540f3346cc2?auto=format&fit=crop&q=82&w=2200",
  congregation:
    "https://images.unsplash.com/photo-1763996668109-f540f3346cc2?auto=format&fit=crop&q=82&w=1400",
  lectern:
    "https://images.unsplash.com/photo-1742650103852-df4e0734cc39?auto=format&fit=crop&q=82&w=1400",
};

export const revalidate = 3600;

const solas = [
  {
    title: "Sola Scriptura",
    text: "La Escritura es nuestra autoridad final para la doctrina, la adoración y la vida de la iglesia.",
  },
  {
    title: "Solus Christus",
    text: "Cristo es el único mediador, cabeza de la iglesia y centro de toda nuestra esperanza.",
  },
  {
    title: "Sola Fide",
    text: "La justificación es recibida solo por la fe, descansando en la obra suficiente de Cristo.",
  },
  {
    title: "Sola Gratia",
    text: "La salvación procede de la gracia soberana de Dios, no de mérito humano.",
  },
  {
    title: "Soli Deo Gloria",
    text: "Toda la vida cristiana, personal y ministerial, existe para la gloria de Dios.",
  },
];

const congregationalLife = [
  {
    title: "Adoración reverente",
    text: "Lectura bíblica, oración, canto y predicación bajo la autoridad de Dios.",
  },
  {
    title: "Acompañamiento pastoral",
    text: "Orientación bíblica para quienes desean recibir enseñanza, oración y cuidado en la fe.",
  },
  {
    title: "Discipulado serio",
    text: "Formación paciente en la Escritura para crecer en santidad, servicio y perseverancia.",
  },
];

const remoteAccess = [
  {
    title: "Domingo en vivo",
    text: "Reunión transmitida por YouTube con predicación expositiva.",
  },
  {
    title: "Biblioteca",
    text: "Mensajes y series disponibles para escuchar durante la semana.",
  },
  {
    title: "Acompañamiento",
    text: "Contacto pastoral para oración, orientación y primeros pasos.",
  },
];

const resources = [
  {
    label: "Para comenzar",
    title: "Fundamentos de la fe cristiana",
    text: "Una introducción ordenada a las verdades centrales del evangelio y la vida cristiana.",
    href: "/recursos/fundamentos-fe-cristiana",
  },
  {
    label: "Doctrina",
    title: "Introducción a las doctrinas de la gracia",
    text: "Un recorrido bíblico por la salvación, la soberanía de Dios y la obra de Cristo.",
    href: "/recursos/doctrinas-de-la-gracia",
  },
  {
    label: "Estudio bíblico",
    title: "Guía para estudiar la Escritura",
    text: "Herramientas prácticas para leer, interpretar y aplicar la Palabra con fidelidad.",
    href: "/recursos/como-estudiar-la-biblia",
  },
  {
    label: "Lectura guiada",
    title: "Lecturas para crecer en la Palabra",
    text: "Material recomendado para acompañar la devoción personal y el discipulado.",
    href: "/recursos/lecturas-crecimiento-espiritual",
  },
];

export default async function Home() {
  const sermons = await getSermons();
  const sermonPreviews = sermons.slice(-3).reverse();

  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <section className="relative isolate overflow-hidden border-b border-[#e4e1dc] bg-[#14233a] text-white">
        <Image
          src={images.hero}
          alt="Personas reunidas alrededor de una Biblia abierta"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-82"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,28,0.8)_0%,rgba(12,22,38,0.58)_48%,rgba(12,22,38,0.24)_100%)]" />

        <SiteHeader active="inicio" variant="hero" />

        <div
          id="inicio"
          className="mx-auto grid min-h-[440px] max-w-5xl items-center px-4 py-10 sm:min-h-[500px] sm:px-6 lg:min-h-[520px]"
        >
          <div className="reveal max-w-[42rem]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
              Iglesia bautista reformada
            </p>
            <h1 className="mt-4 max-w-[39rem] text-[1.5rem] font-bold leading-[1.12] tracking-normal sm:text-[1.95rem] lg:text-[2.18rem]">
              Proclamando fielmente el evangelio de Jesucristo por medio de la
              enseñanza bíblica transmitida.
            </h1>
            <p className="mt-4 max-w-[36rem] text-sm leading-6 text-white/78">
              Un ministerio bautista reformado bajo la autoridad de la
              Escritura, con predicación expositiva, adoración reverente y
              reuniones transmitidas por internet para quienes desean escuchar
              la Palabra desde cualquier lugar.
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/en-vivo"
                className="button-lift focus-ring inline-flex min-h-10 items-center justify-center rounded-sm bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4] focus-ring"
              >
                Ver transmisión en vivo
              </Link>
              <Link
                href="/sermones"
                className="button-lift focus-ring inline-flex min-h-10 items-center justify-center rounded-sm border border-white/32 px-4 text-[0.82rem] font-semibold text-white transition hover:border-white/60 hover:bg-white/8 focus-ring"
              >
                Escuchar predicaciones
              </Link>
              <Link
                href="/quienes-somos"
                className="button-lift focus-ring hidden min-h-10 items-center justify-center rounded-sm border border-[#d8c08a]/45 px-4 text-[0.82rem] font-semibold text-[#ead9ad] transition hover:bg-[#d8c08a]/10 focus-ring sm:inline-flex"
              >
                Conocer nuestra iglesia
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-px border border-white/14 bg-white/14 sm:grid-cols-3">
              {[
                ["Reunión dominical", "Domingo 11:00 hrs"],
                ["Biblioteca", sermons.length ? `${sermons.length} predicaciones` : "Catálogo activo"],
                ["Contacto pastoral", "+56 9 7856 2489"],
              ].map(([label, value]) => (
                <div className="bg-[#0b1220]/44 px-4 py-3 backdrop-blur-sm" key={label}>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[#d8c08a]">
                    {label}
                  </p>
                  <p className="mt-1 text-[0.82rem] font-semibold text-white/88">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="creemos" className="border-b border-[#e4e1dc] bg-white px-4 py-12 sm:px-6 lg:py-16">
        <div className="reveal mx-auto max-w-5xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
            Qué creemos
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2 className="max-w-2xl text-[1.7rem] font-bold leading-tight text-[#111827] sm:text-[2rem]">
                Una iglesia bautista reformada, sujeta a la Escritura y centrada
                en Cristo.
              </h2>
              <p className="mt-5 max-w-2xl text-[0.94rem] leading-7 text-[#4d5562]">
                Reconocemos a las Escrituras como nuestra única regla de fe y a
                la Confesión Bautista de Londres de 1689 como una exposición
                sistematizada de sus doctrinas. Esta convicción da forma a la
                predicación, la adoración y el cuidado pastoral.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="button-lift focus-ring inline-flex min-h-10 items-center border border-[#bda36a] px-4 text-[0.82rem] font-semibold text-[#0f1d33]"
                  href="/que-creemos"
                >
                  Leer qué creemos
                </Link>
                <Link
                  className="button-lift focus-ring inline-flex min-h-10 items-center border border-[#dedbd5] px-4 text-[0.82rem] font-semibold text-[#0f1d33]"
                  href="/recursos"
                >
                  Recursos doctrinales
                </Link>
              </div>
            </div>

            <div className="border-y border-[#dedbd5]">
              {solas.map((item, index) => (
                <details
                  className="group border-b border-[#dedbd5] last:border-b-0"
                  key={item.title}
                  open={index === 0}
                >
                  <summary className="grid cursor-pointer list-none grid-cols-[2rem_1fr_auto] items-center gap-3 py-3.5 [&::-webkit-details-marker]:hidden">
                    <span className="text-[0.7rem] font-semibold text-[#8a6d35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] font-semibold text-[#0f1d33]">
                      {item.title}
                    </span>
                    <span className="text-[#8a6d35] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-4 pl-8 text-[0.84rem] leading-6 text-[#5e636b]">
                    {item.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="predicacion"
        className="border-b border-[#e4e1dc] bg-[#f6f5f2] px-4 py-12 sm:px-6 lg:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="bg-[#0f1d33] px-5 py-6 text-white sm:px-7 sm:py-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
                Transmisión dominical
              </p>
              <h2 className="mt-4 text-[1.55rem] font-bold leading-tight sm:text-[1.85rem]">
                Escritura abierta. Cristo anunciado. Iglesia edificada.
              </h2>
              <p className="mt-4 max-w-md text-[0.86rem] leading-6 text-white/68">
                Reunión transmitida por YouTube cada domingo, con lectura
                bíblica, oración, canto y predicación expositiva.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link
                  className="button-lift focus-ring inline-flex min-h-10 items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33]"
                  href="/en-vivo"
                >
                  Ver en vivo
                </Link>
                <Link
                  className="button-lift focus-ring inline-flex min-h-10 items-center justify-center border border-white/18 px-4 text-[0.82rem] font-semibold text-white hover:bg-white/8"
                  href="/sermones"
                >
                  Ver sermones
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Predicación y cuidado
              </p>
              <h3 className="mt-3 max-w-xl text-[1.35rem] font-bold leading-tight text-[#111827] sm:text-[1.6rem]">
                Enseñanza para quienes se reúnen cerca y para quienes acompañan
                desde lejos.
              </h3>
              <div className="mt-6 grid gap-3">
                {remoteAccess.map((item, index) => (
                  <div className="border-l-2 border-[#bda36a] bg-white px-4 py-3" key={item.title}>
                    <p className="text-[0.68rem] font-semibold text-[#8a6d35]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-1 text-[0.92rem] font-semibold text-[#0f1d33]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[0.82rem] leading-5 text-[#5e636b]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-white px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Últimas predicaciones
              </p>
              <h2 className="mt-3 max-w-xl text-[1.35rem] font-bold leading-tight text-[#111827] sm:text-[1.6rem]">
                Mensajes recientes para escuchar y continuar estudiando durante
                la semana.
              </h2>
            </div>
            <Link
              className="text-link inline-flex min-h-8 w-fit items-center text-[0.82rem] font-semibold text-[#0f1d33]"
              href="/sermones"
            >
              Abrir catálogo →
            </Link>
          </div>

          <div className="mt-7 grid gap-px border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-3">
            {(sermonPreviews.length ? sermonPreviews : []).map((sermon) => (
              <Link
                className="group bg-[#fbfaf7] p-4 transition hover:bg-white"
                href="/sermones"
                key={sermon.id}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[#8a6d35]">
                    Predicación {sermon.number}
                  </span>
                  <span className="text-[0.68rem] font-semibold text-[#6b7280]">
                    {sermon.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-[1rem] font-bold leading-snug text-[#0f1d33]">
                  {sermon.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[0.82rem] leading-5 text-[#5e636b]">
                  {sermon.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sermon.references.slice(0, 2).map((reference) => (
                    <span
                      className="bg-white px-2 py-1 text-[0.68rem] font-semibold text-[#4d5562] ring-1 ring-[#dedbd5]"
                      key={reference}
                    >
                      {reference}
                    </span>
                  ))}
                </div>
                <p className="text-link mt-4 inline-flex text-[0.78rem] font-semibold text-[#0f1d33]">
                  Escuchar y leer →
                </p>
              </Link>
            ))}
          </div>

          {sermonPreviews.length === 0 ? (
            <div className="mt-7 border border-[#dedbd5] bg-[#fbfaf7] p-5 text-[0.88rem] leading-6 text-[#5e636b]">
              La biblioteca se está cargando desde Supabase. Si no aparece,
              revisa el catálogo de sermones directamente.
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-white px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Vida y discipulado
              </p>
              <h2 className="mt-3 max-w-md text-[1.45rem] font-bold leading-tight text-[#111827] sm:text-[1.7rem]">
                Una vida cristiana formada por adoración, cuidado y enseñanza.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {congregationalLife.map((item) => (
                <article className="quiet-card border-t-2 border-[#0f1d33] bg-[#fbfaf7] p-5" key={item.title}>
                  <h3 className="text-[0.95rem] font-bold text-[#0f1d33]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-5 text-[#5e636b]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-[#fbfaf7] px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Recursos doctrinales
              </p>
              <h2 className="mt-3 max-w-xl text-[1.35rem] font-bold leading-tight text-[#111827] sm:text-[1.55rem]">
                Material para aprender, examinar la Escritura y crecer en
                discipulado.
              </h2>
            </div>
            <Link
              className="text-link inline-flex min-h-8 w-fit items-center text-[0.82rem] font-semibold text-[#0f1d33]"
              href="/recursos"
            >
              Ver biblioteca completa →
            </Link>
          </div>
          <div className="mt-7 grid gap-px border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-2">
            {resources.map((resource, index) => (
              <Link
                className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 bg-white p-4 transition hover:bg-[#fbfaf7]"
                href={resource.href}
                key={resource.href}
              >
                <span className="text-[0.68rem] font-semibold text-[#8a6d35]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[#8a6d35]">
                    {resource.label}
                  </span>
                  <span className="mt-1 block text-[0.95rem] font-semibold text-[#0f1d33]">
                    {resource.title}
                  </span>
                  <span className="mt-2 block text-[0.82rem] leading-5 text-[#5e636b]">
                    {resource.text}
                  </span>
                </span>
                <span className="text-[#8a6d35] transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[#0f1d33] px-4 py-12 text-white sm:px-6 lg:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
            Invitación pastoral
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <blockquote className="text-[1.35rem] font-bold leading-tight sm:text-[1.65rem]">
              Cristo crucificado y resucitado es suficiente para salvar, formar
              y sostener a su pueblo.
            </blockquote>
            <div>
              <p className="text-[0.86rem] leading-6 text-white/68">
                Acompáñanos en la enseñanza transmitida y busca, delante del
                Señor, caminar en comunidad cristiana fiel.
              </p>
              <div className="mt-5 grid gap-2">
                <p className="border border-white/12 px-4 py-3 text-sm text-white/76">
                  Domingo, 11:00 hrs
                </p>
                <div className="border border-white/12 px-4 py-3 text-sm text-white/76">
                  <p className="font-semibold text-white/88">
                    Pastor Fernando Herrera
                  </p>
                  <a
                    className="text-link mt-1 inline-flex min-h-8 items-center"
                    href="tel:+56978562489"
                  >
                    +56 9 7856 2489
                  </a>
                </div>
                <a
                  className="button-lift focus-ring inline-flex min-h-10 items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4]"
                  href="https://wa.me/56978562489"
                  rel="noreferrer"
                  target="_blank"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
