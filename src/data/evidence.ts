import type { EvidenceLevel } from './types'

export interface EvidenceDef {
  level: EvidenceLevel
  label: string
  short: string
  definition: string
}

// Order matters: strongest to weakest, used for sorting and legends.
export const EVIDENCE: EvidenceDef[] = [
  {
    level: 'established',
    label: 'Established',
    short: 'EST',
    definition:
      'Replicated across independent human studies and reflected in diagnostic practice, reference databases or guidelines.',
  },
  {
    level: 'strong',
    label: 'Strongly supported',
    short: 'STR',
    definition:
      'Consistent human and/or model-system evidence from multiple groups, not yet universally codified.',
  },
  {
    level: 'emerging',
    label: 'Emerging',
    short: 'EMG',
    definition:
      'Recent or limited data (single cohorts, single model systems) pointing in a consistent direction.',
  },
  {
    level: 'proposed',
    label: 'Proposed / investigational',
    short: 'PRP',
    definition:
      'Hypothesis or therapeutic rationale under active investigation; not yet demonstrated in humans.',
  },
  {
    level: 'controversial',
    label: 'Controversial',
    short: 'CTV',
    definition: 'Published studies disagree, or findings have not replicated.',
  },
  {
    level: 'unknown',
    label: 'Unknown / insufficient',
    short: 'UNK',
    definition: 'Not enough evidence to support or refute the relationship.',
  },
]

export const EVIDENCE_BY_LEVEL = Object.fromEntries(EVIDENCE.map((e) => [e.level, e])) as Record<
  EvidenceLevel,
  EvidenceDef
>

export const evidenceRank = (l: EvidenceLevel) => EVIDENCE.findIndex((e) => e.level === l)
