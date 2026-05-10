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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
              Herencia reformada
            </p>
            <h2 className="mt-3 max-w-md text-[1.45rem] font-bold leading-tight text-[#111827] sm:text-[1.75rem]">
              Una historia que llama a volver a la Palabra, no a una tradición
              vacía.
            </h2>
            <p className="mt-4 text-[0.9rem] leading-7 text-[#5e636b]">
              Cuando hablamos de “reformado”, no hablamos de una etiqueta para
              discutir, sino de una convicción: la iglesia debe ser reformada
              continuamente por la Escritura, humillada por la gracia y
              gobernada por Cristo.
            </p>
          </div>

          <div className="grid gap-3">
            {heritage.map((item) => (
              <article
                className="grid gap-3 border-l-2 border-[#bda36a] bg-[#fbfaf7] px-4 py-4 sm:grid-cols-[5rem_1fr]"
                key={item.title}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#8a6d35]">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-[0.98rem] font-bold text-[#0f1d33]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[#5e636b]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
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
