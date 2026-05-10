import { ArticleLayout } from "../_components";
import { getArticle } from "../_content";

const article = getArticle("como-estudiar-la-biblia");

export const metadata = {
  title: "Guía para estudiar la Escritura | Recursos doctrinales",
  description:
    "Guía pastoral para leer la Biblia con contexto, oración, interpretación sana y aplicación fiel.",
};

export default function ComoEstudiarLaBibliaPage() {
  if (!article) return null;

  return <ArticleLayout article={article} />;
}
