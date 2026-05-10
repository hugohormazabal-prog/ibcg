create table if not exists public.sermons (
  slug text primary key,
  number integer not null,
  title text not null,
  date_label text not null,
  duration text not null,
  theme text not null,
  tone text not null,
  topics text[] not null default '{}',
  bible_references text[] not null default '{}',
  audio_url text not null,
  summary text not null,
  description text not null,
  transcript text not null,
  transcript_sections jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.sermons enable row level security;

drop policy if exists "Public sermons are readable" on public.sermons;

create policy "Public sermons are readable"
  on public.sermons
  for select
  to anon, authenticated
  using (true);

grant usage on schema public to anon, authenticated;
grant select on public.sermons to anon, authenticated;
