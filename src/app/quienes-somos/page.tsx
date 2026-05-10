import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { PastoralCarousel } from "./PastoralCarousel";

export const metadata = {
  title: "Quiénes somos | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Iglesia Bíblica Comunidad de la Gracia, congregación bautista reformada que reconoce las Escrituras como única regla de fe.",
};

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <SiteHeader active="quienes-somos" />

      <section className="border-b border-[#e4e1dc] bg-[#f6f5f2]">
        <div className="reveal mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-16">
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
              Quiénes somos
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-normal text-[#111827] sm:text-4xl">
              Una obra nacida para servir a Cristo mediante la predicación fiel
              de su Palabra.
            </h1>
            <div className="mt-6 grid gap-4 text-base leading-8 text-[#565b63]">
              <p>
                Iglesia Bíblica Comunidad de la Gracia fue fundada hace
                aproximadamente veinte años con el deseo de proclamar el
                evangelio de Jesucristo con fidelidad bíblica, convicción
                doctrinal y cuidado pastoral.
              </p>
              <p>
                Su pastor, Fernando Herrera, ha servido esta obra procurando que
                la Escritura sea enseñada con claridad y que Cristo sea
                presentado como suficiente Salvador, Señor y esperanza de su
                pueblo.
              </p>
              <p>
                En esta etapa, las reuniones y enseñanzas se transmiten por
                internet, permitiendo que personas en distintos lugares puedan
                escuchar la Palabra, acceder a predicaciones y escribir para
                recibir orientación pastoral.
              </p>
            </div>

            <p className="mt-6 max-w-xl border-l-2 border-[#bda36a] bg-white px-4 py-3 text-sm leading-7 text-[#4d5562]">
              Somos una congregación bautista-reformada. Para conocer con más
              detalle nuestra base doctrinal, puedes revisar los recursos y
              textos confesionales preparados para estudio.
            </p>
          </div>

          <PastoralCarousel />
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row">
          <Link
            href="/recursos"
            className="button-lift focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[#bda36a] px-5 text-sm font-semibold text-[#0f1d33] transition hover:bg-[#f6f1e6]"
          >
            Ver recursos doctrinales
          </Link>
          <Link
            href="/en-vivo"
            className="button-lift focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[#0f1d33] px-5 text-sm font-semibold text-white transition hover:bg-[#172b4a]"
          >
            Ver transmisión en vivo
          </Link>
          <Link
            href="/#contacto"
            className="button-lift focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[#cfc8ba] px-5 text-sm font-semibold text-[#0f1d33] transition hover:bg-[#f6f5f2]"
          >
            Contacto pastoral
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
