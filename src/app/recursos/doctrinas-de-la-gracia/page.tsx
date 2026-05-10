import { ArticleLayout } from "../_components";
import { getArticle } from "../_content";

const article = getArticle("doctrinas-de-la-gracia");

export const metadata = {
  title: "Introducción a las doctrinas de la gracia | Recursos doctrinales",
  description:
    "Una introducción pastoral a la depravación humana, elección, redención en Cristo, llamado eficaz y perseverancia.",
};

export default function DoctrinasDeLaGraciaPage() {
  if (!article) return null;

  return <ArticleLayout article={article} />;
}
