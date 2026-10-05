import { createContext, useContext } from 'react'
import type { EvidenceLevel } from '../data/types'

export type InspectorContent =
  | { kind: 'evidence'; title: string; level: EvidenceLevel; why?: string; src: string[] }
  | { kind: 'sources'; title: string; src: string[] }
  | { kind: 'variant'; id: string }

export const InspectorContext = createContext<(c: InspectorContent) => void>(() => {})

export const useInspector = () => useContext(InspectorContext)
