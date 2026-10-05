import { InspectorProvider } from './components/Inspector'
import { Layout } from './components/Layout'
import { Empty } from './components/ui'
import { useRoute } from './lib/router'
import { Compare } from './pages/Compare'
import { DiseasePage } from './pages/DiseasePage'
import { Diseases } from './pages/Diseases'
import { Evidence } from './pages/Evidence'
import { GenePage, Genes } from './pages/Genes'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Sources } from './pages/Sources'
import { Therapeutics } from './pages/Therapeutics'
import { Variants } from './pages/Variants'

function Page() {
  const { segments: [head, arg], query, path } = useRoute()
  // `key` remounts pages when their query-driven initial state changes.
  switch (head) {
    case undefined:
      return <Home />
    case 'diseases':
      return <Diseases />
    case 'disease':
      return <DiseasePage key={arg} id={arg} section={query.get('s')} />
    case 'genes':
      return <Genes />
    case 'gene':
      return <GenePage key={arg} symbol={arg} />
    case 'variants':
      return <Variants key={query.toString()} diseaseId={query.get('d')} variantId={query.get('id')} />
    case 'therapeutics':
      return <Therapeutics key={query.toString()} diseaseId={query.get('d')} tab={query.get('tab')} />
    case 'compare':
      return <Compare key={query.toString()} view={query.get('v')} />
    case 'evidence':
      return <Evidence key={query.toString()} diseaseId={query.get('d')} level={query.get('ev')} />
    case 'search':
      return <Search q={query.get('q') ?? ''} />
    case 'sources':
      return <Sources />
    default:
      return <Empty>Page not found: {path}</Empty>
  }
}

export default function App() {
  return (
    <InspectorProvider>
      <Layout>
        <Page />
      </Layout>
    </InspectorProvider>
  )
}
