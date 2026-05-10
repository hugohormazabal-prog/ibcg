import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const heroImage =
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=82&w=1800";

const doctrinePillars = [
  {
    title: "La Biblia",
    text: "Creemos que la Escritura es inspirada por Dios, suficiente, clara en lo necesario para la salvación y autoridad final para fe, adoración y vida.",
  },
  {
    title: "Dios trino",
    text: "Confesamos a un solo Dios vivo y verdadero, Padre, Hijo y Espíritu Santo, digno de toda gloria, adoración y obediencia.",
  },
  {
    title: "Cristo y el evangelio",
    text: "La salvación descansa en la persona y obra de Jesucristo: su encarnación, obediencia, muerte sustitutiva, resurrección y señorío.",
  },
  {
    title: "Gracia soberana",
    text: "El pecador es salvado por gracia, mediante la fe, no por obras ni mérito humano, sino por la misericordia de Dios en Cristo.",
  },
];

const solas = [
  "Sola Scriptura",
  "Solus Christus",
  "Sola Fide",
  "Sola Gratia",
  "Soli Deo Gloria",
];

const heritage = [
  {
    period: "Siglo XVI",
    title: "La Reforma recuperó la autoridad de la Palabra",
    text: "Los reformadores llamaron a la iglesia a volver a la Escritura, al evangelio de la gracia y a Cristo como único mediador.",
  },
  {
    period: "Siglo XVII",
    title: "Confesiones para ordenar la doctrina",
    text: "Las iglesias reformadas expresaron su fe en confesiones, no para reemplazar la Biblia, sino para resumir con claridad lo que creen que ella enseña.",
  },
  {
    period: "1689",
    title: "Identidad bautista reformada",
    text: "La Confesión Bautista de Londres de 1689 sirve como una exposición histórica y ordenada de doctrina bíblica para enseñanza y cuidado pastoral.",
  },
];

const doctrineMap = [
  {
    title: "Autoridad",
    heading: "La Biblia gobierna la fe y la adoración",
    text: "La iglesia no se define por preferencias, tendencias o tradición humana. Toda enseñanza, práctica y exhortación debe ser examinada a la luz de la Palabra de Dios.",
    references: ["2 Timoteo 3:16-17", "Hechos 17:11", "Isaías 8:20"],
  },
  {
    title: "Evangelio",
    heading: "Cristo es suficiente para salvar",
    text: "El centro de nuestra predicación es la persona y obra de Jesucristo: su vida perfecta, su muerte sustitutiva, su resurrección y su señorío presente.",
    references: ["1 Corintios 15:3-4", "Hebreos 10:14", "Juan 14:6"],
  },
  {
    title: "Iglesia",
    heading: "La doctrina debe producir vida visible",
    text: "La verdad bíblica no termina en información religiosa. Debe formar adoradores humildes, discípulos obedientes y una comunidad que camina en santidad y amor.",
    references: ["Tito 2:11-14", "Efesios 4:11-16", "1 Pedro 2:9"],
  },
];

export const metadata: Metadata = {
  title: "Qué creemos | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Doctrina, base bíblica, herencia reformada y convicciones bautistas reformadas de Iglesia Bíblica Comunidad de la Gracia.",
};

export default function QueCreemosPage() {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <SiteHeader active="que-creemos" />

      <section className="border-b border-[#e4e1dc] bg-[#0b1220] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
          <div className="reveal">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
              Qué creemos
            </p>
            <h1 className="mt-4 max-w-xl text-[1.8rem] font-bold leading-tight sm:text-[2.35rem]">
              Fe bíblica, herencia reformada y vida de iglesia centrada en
              Cristo.
            </h1>
            <p className="mt-5 max-w-xl text-[0.94rem] leading-7 text-white/72">
              Nuestra doctrina nace de la Escritura y se expresa con ayuda de la
              tradición confesional bautista reformada. No buscamos novedad
              religiosa, sino fidelidad al evangelio recibido por la iglesia de
              Cristo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {solas.map((sola) => (
                <span
                  className="border border-[#d8c08a]/35 px-2.5 py-1 text-[0.68rem] font-semibold text-[#ead9ad]"
                  key={sola}
                >
                  {sola}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[18rem] overflow-hidden border border-white/12 lg:min-h-[25rem]">
            <Image
              src={heroImage}
              alt="Biblia abierta sobre una mesa de estudio"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,18,32,0.5))]" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-[#fbfaf7] px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
            Fundamento doctrinal
          </p>
          <div className="mt-5 grid gap-px border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-2 lg:grid-cols-4">
            {doctrinePillars.map((pillar, index) => (
              <article className="bg-white p-5" key={pillar.title}>
                <p className="text-[0.68rem] font-semibold text-[#8a6d35]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-[1rem] font-bold leading-snug text-[#0f1d33]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-[0.82rem] leading-6 text-[#5e636b]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-white px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 border-y border-[#dedbd5] py-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
                Herencia reformada
              </p>
              <h2 className="mt-3 max-w-xl text-[1.45rem] font-bold leading-tight text-[#111827] sm:text-[1.75rem]">
                Una historia que llama a volver a la Palabra, no a una
                tradición vacía.
              </h2>
            </div>
            <p className="max-w-2xl text-[0.9rem] leading-7 text-[#5e636b] lg:justify-self-end">
              Cuando hablamos de “reformado”, no hablamos de una etiqueta para
              discutir, sino de una convicción: la iglesia debe ser reformada
              continuamente por la Escritura, humillada por la gracia y
              gobernada por Cristo.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-start">
            {heritage.map((item, index) => (
              <article
                className={`interactive-card relative min-h-[15rem] overflow-hidden border border-[#dedbd5] bg-[#fbfaf7] p-5 ${
                  index === 1 ? "lg:mt-8" : index === 2 ? "lg:mt-16" : ""
                }`}
                key={item.title}
              >
                <span className="absolute right-4 top-2 font-serif text-[4.5rem] font-bold leading-none text-[#bda36a]/12">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="relative text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                  {item.period}
                </p>
                <h3 className="relative mt-8 max-w-xs text-[1.05rem] font-bold leading-snug text-[#0f1d33]">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-[0.84rem] leading-6 text-[#5e636b]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1dc] bg-[#0f1d33] px-4 py-10 text-white sm:px-6 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
                Marco de enseñanza
              </p>
              <h2 className="mt-3 max-w-2xl text-[1.45rem] font-bold leading-tight sm:text-[1.75rem]">
                Convicciones que ordenan cómo predicamos, oramos y servimos.
              </h2>
            </div>
            <p className="max-w-md text-[0.86rem] leading-6 text-white/62">
              Una síntesis para reconocer el marco doctrinal desde donde se
              predica, se corrige, se acompaña y se sirve.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="grid min-h-[21rem] border border-white/12 bg-white text-[#17191d] sm:grid-cols-[0.78fr_1.22fr]">
              <div className="flex flex-col justify-between border-b border-[#dedbd5] bg-[#fbfaf7] p-5 sm:border-b-0 sm:border-r">
                <div>
                  <p className="text-[0.68rem] font-semibold text-[#8a6d35]">
                    01
                  </p>
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#4d5562]">
                    {doctrineMap[0].title}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {doctrineMap[0].references.map((reference) => (
                    <span
                      className="bg-white px-2 py-1 text-[0.68rem] font-semibold text-[#4d5562] ring-1 ring-[#dedbd5]"
                      key={reference}
                    >
                      {reference}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-7">
                <h3 className="max-w-lg text-[1.28rem] font-bold leading-tight text-[#0f1d33] sm:text-[1.55rem]">
                  {doctrineMap[0].heading}
                </h3>
                <p className="mt-4 max-w-xl text-[0.9rem] leading-7 text-[#4d5562]">
                  {doctrineMap[0].text}
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              {doctrineMap.slice(1).map((item, index) => (
                <article
                  className="dark-quiet-card border border-white/12 bg-[#142744] p-5"
                  key={item.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold text-[#d8c08a]">
                        {String(index + 2).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/54">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex max-w-[11rem] flex-wrap justify-end gap-1.5">
                      {item.references.slice(0, 2).map((reference) => (
                        <span
                          className="border border-white/12 px-2 py-1 text-[0.65rem] font-semibold text-white/70"
                          key={reference}
                        >
                          {reference}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-5 text-[1.05rem] font-bold leading-snug text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-[0.84rem] leading-6 text-white/66">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-4 py-9 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[0.9rem] leading-7 text-white/70">
            Esta página resume nuestra identidad doctrinal. Para estudiar temas
            específicos con más calma, revisa la biblioteca de recursos.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              className="button-lift focus-ring inline-flex min-h-10 items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33]"
              href="/recursos"
            >
              Ver recursos
            </Link>
            <Link
              className="button-lift focus-ring inline-flex min-h-10 items-center justify-center border border-white/18 px-4 text-[0.82rem] font-semibold text-white hover:bg-white/8"
              href="/sermones"
            >
              Escuchar sermones
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
