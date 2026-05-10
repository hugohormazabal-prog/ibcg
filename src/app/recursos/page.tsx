import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { ResourceHeader } from "./_components";
import { articles } from "./_content";

export const metadata = {
  title: "Recursos doctrinales | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Biblioteca doctrinal con recursos sobre la fe cristiana, las doctrinas de la gracia, el estudio bíblico y lecturas para crecer en la Palabra.",
};

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <ResourceHeader
        eyebrow="Biblioteca doctrinal"
        title="Recursos para profundizar en la verdad de la Escritura, crecer en discernimiento y fortalecer una fe centrada en Cristo."
        description="Esta biblioteca reúne enseñanzas introductorias y pastorales para quienes desean estudiar la Palabra con reverencia, doctrina sana y esperanza en el evangelio."
      />

      <section className="border-b border-[#e4e1dc] bg-[#f6f5f2] px-5 py-14 sm:px-8 lg:px-10">
        <div className="reveal mx-auto max-w-7xl">
          <p className="max-w-3xl text-[0.94rem] leading-7 text-[#565b63]">
            Estos recursos no buscan reemplazar la lectura directa de la Biblia
            ni la predicación fiel. Su propósito es servir como acompañamiento
            doctrinal para miembros, visitantes y personas de distintos lugares
            que siguen la enseñanza transmitida por la iglesia.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              className="interactive-card group border border-[#dedbd5] bg-[#fbfaf7] p-6"
              href={`/recursos/${article.slug}`}
              key={article.slug}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8a6d35]">
                {article.eyebrow}
              </p>
              <h2 className="mt-4 text-[1.15rem] font-bold leading-tight text-[#111827]">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5e636b]">
                {article.summary}
              </p>
              <p className="text-link mt-6 inline-block text-sm font-semibold text-[#0f1d33]">
                Leer recurso
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e4e1dc] bg-[#0b1220] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/68">
            La verdad bíblica debe conducir a adoración, humildad y obediencia.
            Vuelve al inicio para escuchar las transmisiones y predicaciones.
          </p>
          <Link
            href="/"
            className="button-lift focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 text-sm font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4]"
          >
            Volver al inicio
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
