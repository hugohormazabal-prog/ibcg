export type Sermon = {
  id: string;
  number: number;
  slug: string;
  title: string;
  date: string;
  duration: string;
  theme: string;
  tone: string;
  topics: string[];
  references: string[];
  audio: string;
  summary: string;
  description: string;
  transcript: string;
  transcriptSections: { start: number; title: string }[];
};
