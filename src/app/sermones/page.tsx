import type { Metadata } from "next";
import SermonCatalog from "./SermonCatalog";
import type { Sermon } from "./types";

export const metadata: Metadata = {
  title: "Sermones | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Catálogo de predicaciones dominicales con audio, referencias bíblicas y transcripciones completas.",
};

export const revalidate = 3600;

type SermonRow = {
  slug: string;
  number: number;
  title: string;
  date_label: string;
  duration: string;
  theme: string;
  tone: string;
  topics: string[];
  bible_references: string[];
  audio_url: string;
  summary: string;
  description: string;
  transcript: string;
  transcript_sections: Sermon["transcriptSections"];
};

async function getSermons(): Promise<readonly Sermon[]> {
  const supabaseUrl = process.env.ibcgstorage_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_ibcgstorage_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return [];
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/sermons?select=slug,number,title,date_label,duration,theme,tone,topics,bible_references,audio_url,summary,description,transcript,transcript_sections&order=number.asc`,
      {
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
        },
        next: { revalidate },
      },
    );

    if (!response.ok) {
      return [];
    }

    const rows = (await response.json()) as SermonRow[];

    return rows.map((row) => ({
      id: String(row.number).padStart(2, "0"),
      number: row.number,
      slug: row.slug,
      title: row.title,
      date: row.date_label,
      duration: row.duration,
      theme: row.theme,
      tone: row.tone,
      topics: row.topics,
      references: row.bible_references,
      audio: row.audio_url,
      summary: row.summary,
      description: row.description,
      transcript: row.transcript,
      transcriptSections: row.transcript_sections ?? [],
    }));
  } catch {
    return [];
  }
}

function getTopics(nextSermons: readonly Sermon[]) {
  return Array.from(new Set(nextSermons.flatMap((sermon) => sermon.topics)));
}

export default async function SermonesPage() {
  const nextSermons = await getSermons();
  const topics = getTopics(nextSermons);

  return <SermonCatalog sermons={nextSermons} topics={topics} />;
}
