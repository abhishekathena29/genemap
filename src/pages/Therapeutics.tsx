import { useState } from 'react'
import { DiseaseChip, EvidenceBadge, PageHead, Tabs } from '../components/ui'
import { Pipeline } from '../components/viz'
import { ALL_THERAPIES, ALL_TRIALS, DISEASE_BY_ID, DISEASES } from '../data'
import { evidenceRank } from '../data/evidence'
import { MODALITIES, STAGES } from '../data/types'
import { TrialTable } from './DiseasePage'


type Tab = 'pipeline' | 'trials' | 'landscape'

export function Therapeutics({ diseaseId, tab: tab0 }: { diseaseId?: string | null; tab?: string | null }) {
  const [tab, setTab] = useState<Tab>((tab0 as Tab) ?? 'pipeline')
  const [d, setD] = useState(diseaseId ?? 'all')
  const [mod, setMod] = useState('all')

  const therapies = ALL_THERAPIES.filter((t) => (d === 'all' || t.diseaseId === d) && (mod === 'all' || t.modality === mod))
  const trials = ALL_TRIALS.filter((t) => d === 'all' || t.diseaseId === d)

  return (
    <div className="page">
      <PageHead icon="therapy" kicker="Therapeutics" title="Therapeutic landscape">
        Therapies organised by target, mechanism, delivery, development stage and evidence base — with a time-stamped clinical-trial register.
      </PageHead>
      <Tabs<Tab>
        value={tab}
        onChange={setTab}
        tabs={[
          { id: 'pipeline', label: 'Pipeline', count: therapies.length },
          { id: 'trials', label: 'Clinical trials', count: trials.length },
          { id: 'landscape', label: 'Modality × disease' },
        ]}
      />
      {tab !== 'landscape' && (
        <div className="filters">
          <label>
            Disease
            <select value={d} onChange={(e) => setD(e.target.value)}>
              <option value="all">All</option>
              {DISEASES.map((x) => <option key={x.id} value={x.id}>{x.short}</option>)}
            </select>
          </label>
          {tab === 'pipeline' && (
            <label>
              Modality
              <select value={mod} onChange={(e) => setMod(e.target.value)}>
                <option value="all">All</option>
                {MODALITIES.map((m) => <option key={m}>{m}</option>)}
              </select>
            </label>
          )}
        </div>
      )}

      {tab === 'pipeline' && (
        <>
          <Pipeline
            rows={[...therapies]
              .sort((a, b) => STAGES.indexOf(b.stage) - STAGES.indexOf(a.stage) || evidenceRank(a.ev) - evidenceRank(b.ev))
              .map((t) => ({
                id: t.id,
                name: t.name,
                sub: `${DISEASE_BY_ID[t.diseaseId].short} · ${t.modality} · ${t.target} · ${t.evidenceBase} evidence`,
                stage: t.stage,
                color: DISEASE_BY_ID[t.diseaseId].color,
                ev: t.ev,
                why: t.why,
                src: t.src,
              }))}
          />
          <p className="muted sm">Bar length = furthest development stage reached. Colour = disease. Badge = evidence level for efficacy.</p>
        </>
      )}

      {tab === 'trials' && (
        <>
          <TrialTable trials={trials} showDisease />
        </>
      )}

      {tab === 'landscape' && <Landscape />}
    </div>
  )
}

export function Landscape() {
  return (
    <div className="table-wrap">
      <table className="tbl matrix">
        <thead>
          <tr>
            <th>Modality</th>
            {DISEASES.map((d) => <th key={d.id}><DiseaseChip id={d.id} /></th>)}
          </tr>
        </thead>
        <tbody>
          {MODALITIES.map((m) => (
            <tr key={m}>
              <th>{m}</th>
              {DISEASES.map((d) => {
                const ts = d.therapies.filter((t) => t.modality === m)
                if (!ts.length) return <td key={d.id} className="cell-empty">—</td>
                const best = ts.reduce((a, b) => (STAGES.indexOf(b.stage) > STAGES.indexOf(a.stage) ? b : a))
                const lvl = STAGES.indexOf(best.stage)
                return (
                  <td key={d.id} className={`stage-cell sc-${lvl}`} title={ts.map((t) => `${t.name} — ${t.stage}`).join('\n')}>
                    <div className="sc-stage">{best.stage}</div>
                    <div className="sc-name">{ts.length > 1 ? `${ts.length} approaches` : best.name}</div>
                    <EvidenceBadge level={best.ev} why={best.why} src={best.src} title={best.name} compact />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
