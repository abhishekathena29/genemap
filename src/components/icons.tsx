// Small stroke-icon set. Icons inherit `currentColor`, so colour them via CSS.

const PATHS = {
  disease: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 7v5l3 2',
  dna: 'M7 3c0 6 10 6 10 9s-10 3-10 9 M17 3c0 6-10 6-10 9s10 3 10 9 M8 7h8 M8 17h8',
  gene: 'M4 7h16 M4 12h10 M4 17h13 M18 10l3 2-3 2',
  mechanism: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M12 2v3 M12 19v3 M4.9 4.9l2.1 2.1 M17 17l2.1 2.1 M2 12h3 M19 12h3 M4.9 19.1 7 17 M17 7l2.1-2.1',
  person: 'M12 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z M5 21c0-4 3-7 7-7s7 3 7 7',
  diagnosis: 'M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 18l-5-9V3 M8 3h8 M7 14h10',
  therapy: 'M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7Z M7 7l7 7',
  research: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z M16 16l5 5 M8 11h6 M11 8v6',
  book: 'M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7Z',
  question: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14 M12 17h.01',
  layers: 'M12 3 3 8l9 5 9-5Z M3 13l9 5 9-5 M3 17.5 12 22l9-4.5',
  sparkle: 'M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z M19 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1Z',
  rocket: 'M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5Z M9 11l-4 1-2 3 4 1 M13 15l-1 4-3 2-1-4 M15 9h.01',
  refresh: 'M20 11a8 8 0 0 0-14.8-4M4 4v4h4 M4 13a8 8 0 0 0 14.8 4M20 20v-4h-4',
  pathway: 'M5 5a2 2 0 1 0 0 .1Z M19 5a2 2 0 1 0 0 .1Z M12 19a2 2 0 1 0 0 .1Z M7 5h10 M6 7l5 10 M18 7l-5 10',
  trial: 'M8 3h8v4H8Z M6 5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1 M8 13l2.5 2.5L16 10',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z M12 8v5 M12 16h.01',
  calendar: 'M4 6h16v14H4Z M4 10h16 M8 3v5 M16 3v5',
  compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z',
  chart: 'M4 20V4 M4 20h16 M8 16l4-5 3 3 5-6',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  compare: 'M4 6h7v14H4Z M13 4h7v14h-7Z',
  variant: 'M5 4h14 M5 20h14 M8 4c0 5 8 5 8 8s-8 3-8 8 M16 4c0 2-1 3-2.5 3.6',
  evidence: 'M9 12l2 2 4-4 M12 3l2.4 1.8 3 .1.9 2.8 2.4 1.8-.9 2.8.9 2.8-2.4 1.8-.9 2.8-3 .1L12 21l-2.4-1.8-3-.1-.9-2.8L3.3 14.5l.9-2.8-.9-2.8 2.4-1.8.9-2.8 3-.1Z',
  sources: 'M6 3h9l4 4v14H6Z M15 3v4h4 M9 12h7 M9 16h7',
  cell: 'M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  info: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 11v6 M12 7.5h.01',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  quote: 'M7 7h4v4c0 3-1.5 5-4 6 M14 7h4v4c0 3-1.5 5-4 6',
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name, size = 18, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name]} />
    </svg>
  )
}

/** Icon in a soft tinted rounded tile — the visual anchor for cards and steps. */
export function IconTile({ name, tone = 'blue', size = 40 }: { name: IconName; tone?: 'blue' | 'violet' | 'orange' | 'green' | 'pink' | 'teal'; size?: number }) {
  return (
    <span className={`itile itile-${tone}`} style={{ width: size, height: size }}>
      <Icon name={name} size={Math.round(size * 0.5)} />
    </span>
  )
}
