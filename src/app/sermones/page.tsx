import type { Metadata } from "next";
import SermonCatalog from "./SermonCatalog";
import type { Sermon } from "./types";

export const metadata: Metadata = {
  title: "Sermones | Iglesia Bíblica Comunidad de la Gracia",
  description:
    "Catálogo de predicaciones dominicales con audio, referencias bíblicas y transcripciones completas.",
};

export const revalidate = 3600;

const fallbackSupabaseUrl = "https://vmxolnsyvxgghizmcllk.supabase.co";
const fallbackSupabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZteG9sbnN5dnhnZ2hpem1jbGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Mjc4ODcsImV4cCI6MjA5NDAwMzg4N30.QqCrjXx8mE7TxEDkO3EKWfojxeEdya5BdhfRXzw0vWU";

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
  const supabaseUrl =
    process.env.ibcgstorage_SUPABASE_URL ??
    process.env.NEXT_PUBLIC_ibcgstorage_SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.SUPABASE_URL ??
    fallbackSupabaseUrl;
  const anonKey =
    process.env.NEXT_PUBLIC_ibcgstorage_SUPABASE_ANON_KEY ??
    process.env.ibcgstorage_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    fallbackSupabaseAnonKey;

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
