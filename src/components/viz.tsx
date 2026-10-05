import { useState } from 'react'
import { EVIDENCE_BY_LEVEL } from '../data/evidence'
import { NODE_TYPE_LABEL } from '../data'
import { STAGES, type EvidenceLevel, type MechStep, type Milestone, type NodeType, type Relation, type Stage } from '../data/types'
import { useInspector } from '../lib/inspector-context'
import { Cites, EvidenceBadge } from './ui'

// ── Mechanism chain ────────────────────────────────────────────────────
export function MechanismChain({ steps }: { steps: MechStep[] }) {
  return (
    <ol className="chain">
      {steps.map((s, i) => (
        <li key={i} className="chain-step">
          <div className="chain-stage">{s.stage}</div>
          <div className="chain-label">{s.label}</div>
          <p className="chain-detail">{s.detail}</p>
          <div className="chain-meta">
            <EvidenceBadge level={s.ev} src={s.src} title={`${s.stage}: ${s.label}`} compact />
            <Cites src={s.src} title={`${s.stage}: ${s.label}`} />
          </div>
        </li>
      ))}
    </ol>
  )
}

// ── Generic column network ─────────────────────────────────────────────
export interface GNode {
  id: string
  label: string
  col: number
  kind: string
  color?: string
}
export interface GEdge {
  from: string
  to: string
  ev?: EvidenceLevel
  label?: string
  onClick?: () => void
}

const NODE_W = 150
const NODE_H = 40
const ROW_GAP = 16

function wrap(label: string, max = 22): string[] {
  const words = label.split(/\s+/)
  const lines: string[] = ['']
  for (const w of words) {
    const cur = lines[lines.length - 1]
    if ((cur + ' ' + w).trim().length > max && cur) lines.push(w)
    else lines[lines.length - 1] = (cur + ' ' + w).trim()
  }
  if (lines.length > 2) return [lines[0], lines.slice(1).join(' ').slice(0, max - 1) + '…']
  return lines
}

export function NetworkGraph({ nodes, edges, columns }: { nodes: GNode[]; edges: GEdge[]; columns: string[] }) {
  const [hover, setHover] = useState<string | null>(null)
  const nCols = columns.length
  const colGap = 64
  const width = nCols * NODE_W + (nCols - 1) * colGap
  const byCol = columns.map((_, c) => nodes.filter((n) => n.col === c))
  const maxRows = Math.max(1, ...byCol.map((c) => c.length))
  const height = 32 + maxRows * (NODE_H + ROW_GAP)

  const pos: Record<string, { x: number; y: number }> = {}
  byCol.forEach((col, c) => {
    const colH = col.length * (NODE_H + ROW_GAP) - ROW_GAP
    const top = 32 + (height - 32 - colH) / 2
    col.forEach((n, r) => {
      pos[n.id] = { x: c * (NODE_W + colGap), y: top + r * (NODE_H + ROW_GAP) }
    })
  })

  const linked = (id: string) =>
    !hover || id === hover || edges.some((e) => (e.from === hover && e.to === id) || (e.to === hover && e.from === id))

  return (
    <div className="graph-wrap">
      <svg className="graph" viewBox={`-4 0 ${width + 8} ${height}`} style={{ minWidth: Math.min(width, 640), maxWidth: width * 1.15 }} role="img" aria-label="Relationship network">
        {columns.map((c, i) => (
          <text key={c} x={i * (NODE_W + colGap) + NODE_W / 2} y={14} className="graph-col">
            {c}
          </text>
        ))}
        {edges.map((e, i) => {
          const a = pos[e.from]
          const b = pos[e.to]
          if (!a || !b) return null
          const forward = a.x <= b.x
          const x1 = forward ? a.x + NODE_W : a.x
          const x2 = forward ? b.x : b.x + NODE_W
          const y1 = a.y + NODE_H / 2
          const y2 = b.y + NODE_H / 2
          const same = a.x === b.x
          const mx = same ? a.x + NODE_W + 40 : (x1 + x2) / 2
          const d = same
            ? `M${a.x + NODE_W},${y1} C${mx},${y1} ${mx},${y2} ${b.x + NODE_W},${y2}`
            : `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`
          const dim = hover && !(e.from === hover || e.to === hover)
          return (
            <g key={i} className={`edge edge-${e.ev ?? 'plain'}${dim ? ' dim' : ''}${e.onClick ? ' clickable' : ''}`} onClick={e.onClick}>
              <path d={d} className="edge-hit" />
              <path d={d} className="edge-line" />
              <title>{`${e.label ?? ''}${e.ev ? ` — ${EVIDENCE_BY_LEVEL[e.ev].label}` : ''}`}</title>
            </g>
          )
        })}
        {nodes.map((n) => {
          const p = pos[n.id]
          const lines = wrap(n.label)
          return (
            <g
              key={n.id}
              className={`node node-${n.kind}${linked(n.id) ? '' : ' dim'}`}
              transform={`translate(${p.x},${p.y})`}
              onMouseEnter={() => setHover(n.id)}
              onMouseLeave={() => setHover(null)}
            >
              <rect width={NODE_W} height={NODE_H} rx={8} style={n.color ? { stroke: n.color } : undefined} />
              {n.color && <rect width={4} height={NODE_H - 12} x={6} y={6} rx={2} style={{ fill: n.color }} />}
              <text x={NODE_W / 2} y={lines.length === 1 ? NODE_H / 2 + 4 : NODE_H / 2 - 3}>
                {lines.map((l, i) => (
                  <tspan key={i} x={NODE_W / 2} dy={i === 0 ? 0 : 13}>
                    {l}
                  </tspan>
                ))}
              </text>
              <title>{n.label}</title>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

const REL_COLS: Record<NodeType, number> = {
  therapy: 0,
  gene: 1,
  protein: 1,
  metabolite: 2,
  pathway: 2,
  cell: 3,
  region: 3,
  biomarker: 4,
  phenotype: 4,
  disease: 4,
}

export function RelationGraph({ relations }: { relations: Relation[] }) {
  const open = useInspector()
  const nodes = new Map<string, GNode>()
  for (const r of relations)
    for (const [t, l] of [r.from, r.to]) {
      const id = `${t}:${l}`
      if (!nodes.has(id)) nodes.set(id, { id, label: l, col: REL_COLS[t], kind: t })
    }
  const edges: GEdge[] = relations.map((r) => ({
    from: `${r.from[0]}:${r.from[1]}`,
    to: `${r.to[0]}:${r.to[1]}`,
    ev: r.ev,
    label: `${r.from[1]} ${r.label} ${r.to[1]}`,
    onClick: () => open({ kind: 'evidence', title: `${r.from[1]} → ${r.label} → ${r.to[1]}`, level: r.ev, why: r.why, src: r.src }),
  }))
  return (
    <>
      <NetworkGraph nodes={[...nodes.values()]} edges={edges} columns={['Therapy', 'Gene / protein', 'Metabolite / pathway', 'Cell / region', 'Biomarker / phenotype']} />
      <div className="graph-key">
        <span className="muted">Edge style = evidence level · click an edge for rationale & sources · node types:</span>
        {(['gene', 'metabolite', 'pathway', 'cell', 'biomarker', 'phenotype', 'therapy'] as NodeType[]).map((t) => (
          <span key={t} className={`nk nk-${t}`}>
            {NODE_TYPE_LABEL[t]}
          </span>
        ))}
      </div>
    </>
  )
}

// ── Therapeutic pipeline ───────────────────────────────────────────────
export interface PipelineRow {
  id: string
  name: string
  sub: string
  stage: Stage
  color: string
  ev: EvidenceLevel
  why?: string
  src: string[]
}

export function Pipeline({ rows }: { rows: PipelineRow[] }) {
  const idx = (s: Stage) => STAGES.indexOf(s)
  return (
    <div className="pipe">
      <div className="pipe-head">
        <div />
        {STAGES.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
      {rows.map((r) => (
        <div className="pipe-row" key={r.id}>
          <div className="pipe-name">
            <strong>
              {r.name} <EvidenceBadge level={r.ev} why={r.why} src={r.src} title={r.name} compact />
            </strong>
            <span className="muted">{r.sub}</span>
          </div>
          <div className="pipe-track" style={{ gridColumn: `2 / span ${STAGES.length}` }}>
            <div className="pipe-bar" style={{ width: `calc(${((idx(r.stage) + 1) / STAGES.length) * 100}% - 12px)`, background: r.color }}>
              <span className="pipe-end" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function MilestoneTimeline({ milestones, color }: { milestones: Milestone[]; color: string }) {
  const sorted = [...milestones].sort((a, b) => a.year - b.year)
  return (
    <ol className="timeline">
      {sorted.map((m, i) => (
        <li key={i}>
          <span className="tl-year">{m.year}</span>
          <span className="tl-dot" style={{ background: color }} />
          <div className="tl-body">
            <div>{m.label}</div>
            <div className="tl-meta">
              <span className="tl-stage">{m.stage}</span>
              <Cites src={m.src} title={m.label} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function StackBar({ counts, total }: { counts: Partial<Record<EvidenceLevel, number>>; total: number }) {
  return (
    <div className="stack" title={Object.entries(counts).map(([k, v]) => `${EVIDENCE_BY_LEVEL[k as EvidenceLevel].label}: ${v}`).join('\n')}>
      {(Object.keys(EVIDENCE_BY_LEVEL) as EvidenceLevel[]).map((l) =>
        counts[l] ? <span key={l} className={`stack-seg seg-${l}`} style={{ width: `${(counts[l]! / total) * 100}%` }} /> : null,
      )}
    </div>
  )
}
