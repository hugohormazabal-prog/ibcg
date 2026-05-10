"use client";

import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  active?:
    | "inicio"
    | "quienes-somos"
    | "que-creemos"
    | "sermones"
    | "en-vivo"
    | "recursos";
  variant?: "dark" | "hero";
};

const navItems = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "quienes-somos", label: "Quiénes somos", href: "/quienes-somos" },
  { key: "que-creemos", label: "Qué creemos", href: "/que-creemos" },
  { key: "sermones", label: "Sermones", href: "/sermones" },
  { key: "en-vivo", label: "Desde otro lugar", href: "/en-vivo" },
  { key: "recursos", label: "Recursos", href: "/recursos" },
  { key: "contacto", label: "Contacto pastoral", href: "/#contacto" },
] as const;

export function SiteHeader({ active, variant = "dark" }: SiteHeaderProps) {
  const isHero = variant === "hero";

  return (
    <header
      className={
        isHero
          ? "border-b border-white/12"
          : "border-b border-[#e4e1dc] bg-[#0b1220] text-white"
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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

        <div className="hidden items-center gap-4 text-[0.78rem] text-white/74 lg:flex xl:gap-5 xl:text-[0.82rem]">
          {navItems.map((item) => (
            <Link
              className={`nav-link transition hover:text-white ${
                active === item.key ? "text-white" : ""
              }`}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <details className="group relative lg:hidden">
          <summary className="button-lift focus-ring flex min-h-8 cursor-pointer list-none items-center border border-white/24 px-3 text-[0.76rem] font-semibold text-white/88 transition hover:border-white/50 hover:bg-white/8 [&::-webkit-details-marker]:hidden">
            Menú
          </summary>
          <div className="absolute right-0 top-10 z-30 grid min-w-48 gap-1 border border-white/12 bg-[#0b1220] p-2 text-[0.82rem] text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
            {navItems.map((item) => (
              <Link
                className={`px-3 py-2 transition hover:bg-white/8 ${
                  active === item.key ? "bg-white/8 text-white" : ""
                }`}
                href={item.href}
                key={item.key}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
