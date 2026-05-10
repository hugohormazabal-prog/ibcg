import type { Metadata } from "next";
import SermonCatalog from "./SermonCatalog";
import { getSermons, getTopics } from "./data";

export const metadata: Metadata = {
  title: "Sermones | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Catálogo de predicaciones dominicales con audio, referencias bíblicas y transcripciones completas.",
};

export const revalidate = 3600;

export default async function SermonesPage() {
  const nextSermons = await getSermons();
  const topics = getTopics(nextSermons);

  return <SermonCatalog sermons={nextSermons} topics={topics} />;
}
