import Image from "next/image";
import Link from "next/link";

const contactEmail = "iglesiabgracia@gmail.com";
const phoneDisplay = "+56 9 7856 2489";
const phoneHref = "tel:+56978562489";
const whatsappHref = "https://wa.me/56978562489";

const footerLinks = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Qué creemos", href: "/que-creemos" },
  { label: "Sermones", href: "/sermones" },
  { label: "Desde otro lugar", href: "/en-vivo" },
  { label: "Recursos", href: "/recursos" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1e304d] bg-[#08111f] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center bg-white p-1.5 ring-1 ring-white/12">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-[0.95rem] font-semibold leading-snug">
                Iglesia Bíblica Comunidad de la Gracia
              </p>
              <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#d8c08a]">
                Bautista reformada
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-[0.84rem] leading-7 text-white/62">
            Ministerio centrado en Cristo, sujeto a la Escritura y dedicado a la
            predicación expositiva, el cuidado pastoral y la formación de una fe
            bíblica para la vida diaria.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
            Contacto pastoral
          </p>
          <div className="mt-4 grid gap-2 text-[0.86rem] text-white/72">
            <p className="font-semibold text-white">Pastor Fernando Herrera</p>
            <a className="text-link w-fit" href={phoneHref}>
              {phoneDisplay}
            </a>
            <a className="text-link w-fit" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <a
              className="button-lift focus-ring mt-2 inline-flex min-h-10 w-fit items-center justify-center bg-white px-4 text-[0.82rem] font-semibold text-[#0f1d33] transition hover:bg-[#f1ede4]"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <nav aria-label="Navegación inferior">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
            Sitio
          </p>
          <div className="mt-4 grid gap-2 text-[0.84rem] text-white/66">
            {footerLinks.map((link) => (
              <Link className="text-link w-fit" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-9 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-5 text-[0.76rem] text-white/46 sm:flex-row sm:items-center sm:justify-between">
        <p>Predicación bíblica, adoración reverente y cuidado pastoral.</p>
        <p>Iglesia Bíblica Comunidad de la Gracia</p>
      </div>
    </footer>
  );
}
