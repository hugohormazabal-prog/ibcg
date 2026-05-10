import Link from "next/link";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import type { ResourceArticle } from "./_content";
import { articles } from "./_content";

export function ResourceHeader({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader active="recursos" />
      <section className="border-b border-[#e4e1dc] bg-[#0b1220] text-white">
        <div className="reveal mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d8c08a]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-bold leading-tight tracking-normal sm:text-[2.3rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.94rem] leading-7 text-white/74">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}

export function TableOfContents({ article }: { article: ResourceArticle }) {
  return (
    <aside className="interactive-card border border-[#dedbd5] bg-[#fbfaf7] p-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8a6d35]">
        Índice
      </p>
      <ol className="mt-4 grid gap-3 text-sm leading-6 text-[#4d5562]">
        {article.sections.map((section) => (
          <li key={section.id}>
            <a className="text-link transition hover:text-[#0f1d33]" href={`#${section.id}`}>
              {section.title.replace(/^\d+\.\s*/, "")}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function ScriptureQuoteBlock({
  reference,
  text,
}: {
  reference: string;
  text: string;
}) {
  return (
    <figure className="draw-line my-7 border-l-2 border-[#8a6d35] pl-5">
      <blockquote className="text-[1.05rem] font-bold leading-7 text-[#111827]">
        “{text}”
      </blockquote>
      <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
        {reference}
      </figcaption>
    </figure>
  );
}

export function RelatedResources({ currentSlug }: { currentSlug: string }) {
  const related = articles.filter((article) => article.slug !== currentSlug);

  return (
    <section className="border-t border-[#e4e1dc] bg-[#f6f5f2] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">
          Seguir leyendo
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((article) => (
            <Link
              className="interactive-card border border-[#dedbd5] bg-white p-5"
              href={`/recursos/${article.slug}`}
              key={article.slug}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6d35]">
                {article.eyebrow}
              </p>
              <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-[#111827]">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5e636b]">
                {article.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticleLayout({ article }: { article: ResourceArticle }) {
  return (
    <main className="min-h-screen bg-white text-[#17191d]">
      <ResourceHeader
        eyebrow={article.eyebrow}
        title={article.title}
        description={article.description}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-20">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <TableOfContents article={article} />
          <Link
            className="button-lift focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-[#cfc8ba] px-5 text-sm font-semibold text-[#0f1d33] transition hover:bg-[#f6f5f2]"
            href="/recursos"
          >
            Volver a recursos
          </Link>
        </div>

        <article className="reveal max-w-3xl">
          <p className="border-b border-[#e4e1dc] pb-6 text-sm leading-7 text-[#5e636b]">
            {article.summary}
          </p>

          <div className="mt-8 grid gap-12">
            {article.sections.map((section) => (
              <section className="reveal" id={section.id} key={section.id}>
                <h2 className="text-[1.35rem] font-bold leading-tight text-[#111827] sm:text-[1.65rem]">
                  {section.title}
                </h2>
                {section.quote ? (
                  <ScriptureQuoteBlock
                    reference={section.quote.reference}
                    text={section.quote.text}
                  />
                ) : null}
                <div className="grid gap-5 text-[0.96rem] leading-8 text-[#3f4650]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="interactive-card mt-14 border border-[#dedbd5] bg-[#fbfaf7] p-6">
            <h2 className="text-[1.3rem] font-bold text-[#111827]">
              Aplicaciones pastorales
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-[#4d5562]">
              {article.applications.map((application) => (
                <li className="border-b border-[#dedbd5] pb-3 last:border-b-0" key={application}>
                  {application}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <RelatedResources currentSlug={article.slug} />
      <SiteFooter />
    </main>
  );
}
