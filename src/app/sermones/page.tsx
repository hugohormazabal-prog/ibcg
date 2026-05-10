import type { Metadata } from "next";
import SermonCatalog from "./SermonCatalog";
import { sermons, sermonTopics } from "./_data";

export const metadata: Metadata = {
  title: "Sermones | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Catálogo de predicaciones dominicales con audio, referencias bíblicas y transcripciones completas.",
};

export default function SermonesPage() {
  return <SermonCatalog sermons={sermons} topics={sermonTopics} />;
}
