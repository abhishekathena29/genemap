import { useEffect, useRef, useState, type ReactNode } from 'react'
import { search } from '../data'
import { Icon } from './icons'
import { Link } from '../lib/Link'
import { navigate, useRoute } from '../lib/router'

const NAV = [
  ['/diseases', 'Diseases'],
  ['/genes', 'Genes'],
  ['/variants', 'Variants'],
  ['/therapeutics', 'Therapeutics'],
  ['/compare', 'Compare'],
  ['/evidence', 'Evidence'],
  ['/sources', 'Sources'],
  ['/about', 'About'],
] as const

export function Layout({ children }: { children: ReactNode }) {
  const route = useRoute()
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route.path])
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand" aria-label="GeneMap home">
            <Logo />
            <span>GENEMAP</span>
          </Link>
          <nav className={`nav${menu ? ' open' : ''}`}>
            {NAV.map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setMenu(false)} className={route.path.startsWith(to) || (to === '/diseases' && route.path.startsWith('/disease/')) || (to === '/genes' && route.path.startsWith('/gene/')) ? 'on' : ''}>
                {label}
              </Link>
            ))}
          </nav>
          <SearchBox />
          <ThemeToggle />
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
            ☰
          </button>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer-brand">
          <Logo />
          <div>
            <strong>GeneMap</strong>
            <div className="muted">An integrated research atlas of genetic leukodystrophies · by Amaara Subramaniam</div>
          </div>
          <nav className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/about?s=future">Future directions</Link>
            <Link to="/?s=how-to-use">How to use</Link>
            <Link to="/sources">Sources</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')
  const flip = () => {
    const next = !dark
    setDark(next)
    if (next) document.documentElement.dataset.theme = 'dark'
    else delete document.documentElement.dataset.theme
    try {
      localStorage.setItem('gm-theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }
  return (
    <button type="button" className="theme-btn" onClick={flip} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Light theme' : 'Dark theme'}>
      <Icon name={dark ? 'sun' : 'moon'} size={17} />
    </button>
  )
}

function Logo() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden>
      <path d="M9 3c0 7 14 7 14 13S9 22 9 29" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M23 3c0 7-14 7-14 13s14 6 14 13" fill="none" stroke="var(--ink-2)" strokeWidth="2.4" strokeLinecap="round" />
      {[8, 16, 24].map((y) => (
        <circle key={y} cx="16" cy={y} r="2.2" fill="var(--accent)" />
      ))}
    </svg>
  )
}

export function SearchBox({ big = false, autoFocus = false }: { big?: boolean; autoFocus?: boolean }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [sel, setSel] = useState(0)
  const ref = useRef<HTMLInputElement>(null)
  const results = search(q).slice(0, 10)

  useEffect(() => {
    if (big) return
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        ref.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [big])

  const go = (to: string) => {
    setOpen(false)
    setQ('')
    ref.current?.blur()
    navigate(to)
  }

  return (
    <div className={`search${big ? ' search-big' : ''}`}>
      <svg className="search-ico" viewBox="0 0 16 16" width="15" height="15" aria-hidden>
        <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <input
        ref={ref}
        autoFocus={autoFocus}
        value={q}
        placeholder={big ? 'Search a disease, gene, protein, variant, biomarker, therapy, trial or pathway — e.g. ASPA' : 'Search atlas'}
        onChange={(e) => {
          setQ(e.target.value)
          setSel(0)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') setSel((s) => Math.min(s + 1, results.length - 1))
          else if (e.key === 'ArrowUp') setSel((s) => Math.max(s - 1, 0))
          else if (e.key === 'Enter') {
            if (results[sel] && !e.shiftKey) go(results[sel].route)
            else if (q.trim()) go(`/search?q=${encodeURIComponent(q)}`)
          } else if (e.key === 'Escape') ref.current?.blur()
        }}
        aria-label="Search the atlas"
      />
      {!big && <kbd className="search-kbd">Ctrl K</kbd>}
      {open && q.trim() && (
        <div className="search-pop">
          {results.length === 0 && <div className="search-none">No matches for “{q}”</div>}
          {results.map((r, i) => (
            <button key={r.type + r.label + r.route} className={`search-hit${i === sel ? ' sel' : ''}`} onMouseDown={() => go(r.route)} onMouseEnter={() => setSel(i)}>
              <span className={`stype stype-${r.type.replace(/\s/g, '')}`}>{r.type}</span>
              <span className="search-label">{r.label}</span>
              <span className="search-sub">{r.sub}</span>
            </button>
          ))}
          <button className="search-all" onMouseDown={() => go(`/search?q=${encodeURIComponent(q)}`)}>
            All results for “{q}” →
          </button>
        </div>
      )}
    </div>
  )
}
