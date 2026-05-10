import { ArticleLayout } from "../_components";
import { getArticle } from "../_content";

const article = getArticle("fundamentos-fe-cristiana");

export const metadata = {
  title: "Fundamentos de la fe cristiana | Recursos doctrinales",
  description:
    "Recurso doctrinal sobre Dios, la Trinidad, la Escritura, el pecado, Cristo, la gracia, la iglesia y la esperanza futura.",
};

export default function FundamentosFeCristianaPage() {
  if (!article) return null;

  return <ArticleLayout article={article} />;
}
