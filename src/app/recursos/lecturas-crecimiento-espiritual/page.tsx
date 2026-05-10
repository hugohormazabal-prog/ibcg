import { ArticleLayout } from "../_components";
import { getArticle } from "../_content";

const article = getArticle("lecturas-crecimiento-espiritual");

export const metadata = {
  title: "Lecturas para crecer en la Palabra | Recursos doctrinales",
  description:
    "Recurso curado sobre lecturas, confesiones, catecismos y criterios para crecer con la Biblia como centro.",
};

export default function LecturasCrecimientoEspiritualPage() {
  if (!article) return null;

  return <ArticleLayout article={article} />;
}
