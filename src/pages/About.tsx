import { useEffect } from 'react'
import { Icon, IconTile, type IconName } from '../components/icons'
import { ALL_TRIALS, ALL_VARIANTS, DISEASES, EVIDENCE, EVIDENCE_ITEMS, GENES, SOURCES } from '../data'
import { Link } from '../lib/Link'

type Tone = 'blue' | 'violet' | 'orange' | 'green' | 'pink' | 'teal'

// ── How to use ─────────────────────────────────────────────────────────────
// The path through the atlas, with Canavan disease as the worked example.
const HOW_STEPS: { icon: IconName; tone: Tone; title: string; text: string; to: string; cta: string }[] = [
  { icon: 'disease', tone: 'violet', title: 'Disease', text: 'Start from a disorder: identity, clinical summary and who it affects.', to: '/disease/canavan', cta: 'Canavan disease' },
  { icon: 'dna', tone: 'blue', title: 'Gene', text: 'Open the causal gene, its protein, normal function and variants.', to: '/gene/ASPA', cta: 'ASPA gene hub' },
  { icon: 'mechanism', tone: 'teal', title: 'Molecular mechanism', text: 'Follow gene → protein → pathway → cellular consequence.', to: '/disease/canavan?s=mechanism', cta: 'Mechanism chain' },
  { icon: 'person', tone: 'pink', title: 'Phenotype', text: 'See how the mechanism shows up clinically, typical and atypical.', to: '/disease/canavan?s=phenotypes', cta: 'Phenotypes' },
  { icon: 'diagnosis', tone: 'orange', title: 'Diagnosis', text: 'Trace suspicion → investigation → confirmation, with biomarkers.', to: '/disease/canavan?s=diagnosis', cta: 'Diagnostic path' },
  { icon: 'therapy', tone: 'green', title: 'Therapy & research', text: 'End at treatments, trials, the pipeline and open research gaps.', to: '/disease/canavan?s=therapeutics', cta: 'Therapeutics' },
]

export function HowToUse() {
  return (
    <section className="block" id="how-to-use">
      <div className="block-head">
        <h2>How to use GeneMap</h2>
        <p className="muted">Every disease module follows the same path, so you can move from a disease all the way to its therapies. Try it with Canavan disease.</p>
      </div>
      <ol className="howto">
        {HOW_STEPS.map((s, i) => (
          <li key={s.title} className="howto-step">
            <div className="howto-top">
              <IconTile name={s.icon} tone={s.tone} size={46} />
              <span className="howto-n">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <Link to={s.to} className="howto-link">
              {s.cta} <Icon name="arrow" size={14} />
            </Link>
          </li>
        ))}
      </ol>
      <div className="howto-tips">
        <span><Icon name="evidence" size={15} /> Click any evidence label to see why it was assigned</span>
        <span><Icon name="sources" size={15} /> Click a citation count to open its sources</span>
        <span><Icon name="research" size={15} /> Press <kbd>Ctrl K</kbd> to search anywhere</span>
      </div>
    </section>
  )
}

// ── Future directions ──────────────────────────────────────────────────────
const FUTURE: { icon: IconName; tone: Tone; title: string; text: string }[] = [
  { icon: 'layers', tone: 'violet', title: 'Expanding the disease set', text: 'Add further leukodystrophies within the same standardised framework.' },
  { icon: 'dna', tone: 'blue', title: 'Adding more genes', text: 'A broader range of genes with their associated genetic and molecular information.' },
  { icon: 'trial', tone: 'green', title: 'Integrating new trials', text: 'Bring newly registered and updated clinical trials into each disease module.' },
  { icon: 'pathway', tone: 'teal', title: 'Pathway visualization', text: 'Visual analytics showing how genes and pathways connect across disorders.' },
  { icon: 'refresh', tone: 'orange', title: 'Automated literature updating', text: 'Identify and integrate newly published research as it appears.' },
]

export function FutureDirections({ compact = false }: { compact?: boolean }) {
  return (
    <section className="block" id="future">
      <div className="block-head">
        <h2>Future directions</h2>
        {compact && (
          <Link to="/about?s=future" className="more">
            Read more →
          </Link>
        )}
        <p className="muted">
          {compact
            ? 'Where GeneMap is heading: from a static resource to a continually updated research tool.'
            : 'Future development of GeneMap will focus on expanding the disease set and incorporating a broader range of genes and their associated genetic and molecular information.'}
        </p>
      </div>
      <ol className="roadmap">
        {FUTURE.map((f) => (
          <li key={f.title}>
            <IconTile name={f.icon} tone={f.tone} size={42} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </li>
        ))}
      </ol>
      {!compact && (
        <div className="callout">
          <IconTile name="rocket" tone="violet" size={44} />
          <p>
            As the atlas grows, I hope to make it increasingly comprehensive while maintaining a clear, structured framework for comparing disorders. Eventually, I would
            like to explore automated literature updating, allowing newly published research to be identified and integrated more efficiently so that GeneMap can evolve
            from a static resource into a <b>continually updated research tool</b>.
          </p>
        </div>
      )}
    </section>
  )
}

// ── About page ─────────────────────────────────────────────────────────────
const JOURNEY: { icon: IconName; tone: Tone; where: string; text: string }[] = [
  {
    icon: 'book',
    tone: 'violet',
    where: 'Neurobiology of Everyday Life · Prof. Peggy Mason',
    text: 'Learning about disorders such as Alzheimer’s and Huntington’s made me particularly interested in the genetic and molecular basis underlying neurological disease.',
  },
  {
    icon: 'diagnosis',
    tone: 'orange',
    where: 'Research with Dr. Usha Dave',
    text: 'Through exposure to genetic counselling and my project on N-acetylaspartate detection in Canavan disease, I saw how a change in a single gene, ASPA, can have profound consequences for neurological development — and how understanding that molecular basis can inform diagnosis and potential treatment.',
  },
  {
    icon: 'cell',
    tone: 'blue',
    where: 'Internship · IIT Bombay',
    text: 'Working with single-cell genomic data, I encountered the idea of constructing biological atlases, and began thinking about how a similar approach could be applied to leukodystrophies.',
  },
]

const SCATTERED: [IconName, string][] = [
  ['diagnosis', 'Clinical resources'],
  ['layers', 'Databases'],
  ['book', 'Research papers'],
  ['therapy', 'Therapeutic studies'],
]

const DIMENSIONS = ['Disease-causing genes', 'Inheritance', 'Molecular mechanisms', 'Clinical manifestations', 'Biomarkers', 'Diagnostics', 'Therapeutic development']

const CONTRIBUTES: { icon: IconName; tone: Tone; title: string; text: string }[] = [
  { icon: 'layers', tone: 'violet', title: 'One structured framework', text: 'Genetic, molecular, clinical and therapeutic dimensions viewed together, not across scattered sources.' },
  { icon: 'compare', tone: 'blue', title: 'Comparison across disorders', text: 'Identical modules make it possible to compare like with like and spot patterns across genes and pathways.' },
  { icon: 'link', tone: 'teal', title: 'Mechanism to therapy', text: 'Shows how molecular mechanisms connect to therapeutic strategies and clinical trials.' },
  { icon: 'evidence', tone: 'green', title: 'Transparent evidence', text: 'Every statement is graded for evidence strength and traceable to its source.' },
]

export function About({ section }: { section?: string | null }) {
  useEffect(() => {
    if (section) setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [section])

  const method: { icon: IconName; title: string; text: string }[] = [
    { icon: 'target', title: 'Select', text: `${DISEASES.length} genetic leukodystrophies spanning different genes, inheritance patterns and mechanisms.` },
    { icon: 'layers', title: 'Standardise', text: 'Every disease is curated into the same 16 sections in the same order, from identity to research gaps.' },
    { icon: 'book', title: 'Curate', text: 'Information drawn from public resources — reviews, primary literature, GeneReviews, OMIM, ClinVar and ClinicalTrials.gov.' },
    { icon: 'evidence', title: 'Grade', text: `Each statement receives one of ${EVIDENCE.length} evidence levels, with a rationale and linked sources.` },
    { icon: 'link', title: 'Connect', text: 'Genes, variants, cells, biomarkers, therapies and trials are linked so relationships across diseases become visible.' },
  ]

  return (
    <div className="page about">
      <section className="about-hero">
        <div className="about-hero-text">
          <div className="kicker">About the project</div>
          <h1>Bringing scattered knowledge on leukodystrophies into one atlas</h1>
          <p>
            GeneMap is an interactive atlas that organises the genetic, molecular, clinical and therapeutic dimensions of leukodystrophies — so the connections between them
            become visible.
          </p>
        </div>
        <div className="author">
          <div className="author-avatar" aria-hidden>
            AS
          </div>
          <div>
            <div className="author-name">Amaara Subramaniam</div>
            <div className="author-role">Creator · Grade 12 A-Level student</div>
          </div>
          <div className="chips">
            {['Genetics', 'Molecular biology', 'Precision therapeutics'].map((t) => (
              <span key={t} className="soft-chip">
                {t}
              </span>
            ))}
          </div>
          <p className="author-bio">
            I’m interested in genetics, molecular biology, and developing more precise approaches to treating disease. I hope to eventually work at the intersection of
            understanding disease at the molecular level and translating that knowledge into therapeutic strategies.
          </p>
        </div>
      </section>

      <nav className="about-nav" aria-label="On this page">
        {[
          ['why', 'Why leukodystrophies'],
          ['question', 'Research question'],
          ['method', 'Methodology'],
          ['contribution', 'Contribution'],
          ['future', 'Future directions'],
        ].map(([id, label], i) => (
          <button key={id} type="button" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <span>{i + 1}</span>
            {label}
          </button>
        ))}
      </nav>

      <section className="block" id="why">
        <div className="block-head">
          <span className="step-n">01</span>
          <h2>Why leukodystrophies</h2>
          <p className="muted">My interest in leukodystrophies grew through three experiences, each making it more concrete.</p>
        </div>
        <ol className="journey">
          {JOURNEY.map((j) => (
            <li key={j.where}>
              <IconTile name={j.icon} tone={j.tone} size={44} />
              <div>
                <h3>{j.where}</h3>
                <p>{j.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" id="question">
        <div className="block-head">
          <span className="step-n">02</span>
          <h2>Research question</h2>
        </div>
        <div className="question-grid">
          <div className="card pad scatter">
            <h3 className="sub">The problem</h3>
            <p>Although extensive information exists on these disorders, it is scattered across:</p>
            <div className="scatter-items">
              {SCATTERED.map(([icon, label]) => (
                <span key={label}>
                  <Icon name={icon} size={16} />
                  {label}
                </span>
              ))}
            </div>
            <p className="muted sm">…making it difficult to see connections across diseases.</p>
          </div>
          <blockquote className="question">
            <Icon name="quote" size={30} />
            <p>
              Could these disparate pieces be brought together into a <b>single, structured framework</b> that allows the genetic, molecular, clinical and therapeutic
              dimensions of leukodystrophies to be viewed together?
            </p>
          </blockquote>
        </div>
      </section>

      <section className="block" id="method">
        <div className="block-head">
          <span className="step-n">03</span>
          <h2>Methodology</h2>
          <p className="muted">How each disease module is built.</p>
        </div>
        <ol className="method">
          {method.map((m, i) => (
            <li key={m.title}>
              <span className="method-n">{i + 1}</span>
              <Icon name={m.icon} size={22} />
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
        <div className="card pad">
          <h3 className="sub">Dimensions captured for every disorder</h3>
          <div className="dims">
            {DIMENSIONS.map((d, i) => (
              <span key={d}>
                {d}
                {i < DIMENSIONS.length - 1 && <Icon name="arrow" size={13} />}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="contribution">
        <div className="block-head">
          <span className="step-n">04</span>
          <h2>What GeneMap contributes</h2>
        </div>
        <dl className="about-stats">
          {(
            [
              [DISEASES.length, 'diseases'],
              [GENES.length, 'genes'],
              [ALL_VARIANTS.length, 'variants'],
              [ALL_TRIALS.length, 'trials'],
              [EVIDENCE_ITEMS.length, 'graded statements'],
              [Object.keys(SOURCES).length, 'sources'],
            ] as const
          ).map(([n, l]) => (
            <div key={l}>
              <dt>{n}</dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
        <div className="feature-grid">
          {CONTRIBUTES.map((c) => (
            <div key={c.title} className="feature">
              <IconTile name={c.icon} tone={c.tone} size={42} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="callout">
          <IconTile name="sparkle" tone="blue" size={44} />
          <p>
            Rather than simply creating an educational resource, I hope GeneMap can develop into a <b>researcher-oriented platform</b> for comparing disorders,
            identifying patterns across genes and pathways, and understanding how molecular mechanisms connect to therapeutic strategies.
          </p>
        </div>
      </section>

      <FutureDirections />
      <p className="muted about-closing">
        In the future, I hope to expand the atlas to additional leukodystrophies and incorporate more structured datasets and visual analytics, ultimately building a tool
        that helps bridge genetic information, molecular understanding, and therapeutic discovery.
      </p>

    </div>
  )
}
