import type { Disease } from '../types'

const GR = 'gr:pmd'

export const pmd: Disease = {
  id: 'pmd',
  name: 'Pelizaeus–Merzbacher Disease',
  short: 'PMD',
  color: '#1f9e8a',
  synonyms: ['PLP1-related disorders', 'Hypomyelinating leukodystrophy 1 (HLD1)', 'PLP1 null syndrome (allelic)', 'SPG2 (allelic)'],
  classification: 'Hypomyelinating leukodystrophy',
  inheritance: 'X-linked',
  genes: ['PLP1'],
  tagline: 'PLP1 dosage or misfolding → oligodendrocyte stress → failure of CNS myelination.',
  identifiers: [
    { label: 'OMIM', value: '312080', url: 'https://www.omim.org/entry/312080' },
    { label: 'Orphanet', value: 'ORPHA:280', url: 'https://www.orpha.net/en/disease/detail/280' },
    { label: 'GeneReviews', value: 'NBK1182', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1182/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=Pelizaeus-Merzbacher%20disease' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Duplication, point mutation or deletion of PLP1 on Xq22.', ev: 'established', src: ['lit:inoue2005', GR] },
    { label: 'Disease class', text: 'Prototype hypomyelinating (rather than demyelinating) leukodystrophy.', ev: 'established', src: [GR] },
    { label: 'Primary cell type', text: 'Oligodendrocytes (myelinating glia).', ev: 'established', src: ['lit:woodward2008'] },
    { label: 'Hallmark sign', text: 'Nystagmus in early infancy with hypotonia, later spasticity and ataxia.', ev: 'established', src: [GR] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Classic PMD: first months of life; connatal PMD: neonatal.', ev: 'established', src: [GR] },
    { label: 'Neurological features', text: 'Pendular nystagmus, head titubation, hypotonia evolving to spasticity, ataxia, choreoathetosis, cognitive impairment.', ev: 'established', src: [GR] },
    { label: 'Progression', text: 'Motor milestones are delayed; slow progression or plateau, with deterioration often in adolescence.', ev: 'strong', src: [GR] },
    { label: 'Prognosis', text: 'Classic PMD: survival into mid-adulthood is common; connatal: often death in childhood.', ev: 'strong', src: [GR] },
    { label: 'Allelic spectrum', text: 'PLP1 null syndrome (milder, with peripheral neuropathy) and SPG2 (spastic paraplegia) lie at the mild end.', ev: 'established', src: ['lit:garbern2002', 'lit:inoue2005'] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Estimated roughly 1 in 200,000–500,000 males; data are limited.', ev: 'emerging', why: 'Population estimates come from few regional studies.', src: [GR, 'orpha:280'] },
    { label: 'Sex distribution', text: 'Almost exclusively males; carrier females are usually unaffected but may show mild signs, especially with point mutations.', ev: 'established', src: [GR] },
    { label: 'Ancestry', text: 'Pan-ethnic; no founder effect.', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'plp1-dup', disease: 'pmd', gene: 'PLP1', transcript: 'NM_000533.5', hgvsc: 'Whole-gene duplication (Xq22.2)', build: 'GRCh38', type: 'Copy-number gain', consequence: 'PLP1 overexpression', clinvar: 'Pathogenic', popFreq: '~50–75% of PMD', phenotype: 'Classic PMD', functional: 'Excess PLP accumulates in ER/late endosomes', ev: 'established', why: 'Most common mechanism in all large series.', src: ['lit:inoue2005', GR] },
    { id: 'plp1-trip', disease: 'pmd', gene: 'PLP1', transcript: 'NM_000533.5', hgvsc: 'Triplication / higher-order gain', build: 'GRCh38', type: 'Copy-number gain', consequence: 'Greater overexpression', clinvar: 'Pathogenic', popFreq: 'Rare', phenotype: 'More severe (often connatal) PMD', functional: 'Dose-dependent toxicity', ev: 'strong', src: ['lit:inoue2005'] },
    { id: 'plp1-missense', disease: 'pmd', gene: 'PLP1', transcript: 'NM_000533.5', hgvsc: 'Missense (various)', build: 'GRCh38', type: 'Missense', consequence: 'Misfolded PLP/DM20 retained in ER', clinvar: 'Pathogenic (many)', popFreq: '~10–25% of PMD', phenotype: 'Connatal to classic PMD; some SPG2', functional: 'UPR activation; oligodendrocyte apoptosis', ev: 'established', src: ['lit:woodward2008', 'db:clinvar:PLP1'] },
    { id: 'plp1-null', disease: 'pmd', gene: 'PLP1', transcript: 'NM_000533.5', hgvsc: 'Deletion / null alleles', build: 'GRCh38', type: 'Loss of function', consequence: 'Absent PLP', clinvar: 'Pathogenic', popFreq: 'Rare', phenotype: 'PLP1 null syndrome — milder, length-dependent axonopathy', functional: 'Compact myelin formed; axonal degeneration', ev: 'established', src: ['lit:garbern2002'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Misfolding missense variants (especially in shared PLP/DM20 regions) → most severe connatal forms.', ev: 'strong', src: ['lit:inoue2005', 'lit:woodward2008'] },
    { aspect: 'Clinical phenotype', finding: 'Duplications → classic PMD; null alleles → PLP1 null syndrome with neuropathy.', ev: 'established', src: ['lit:inoue2005', 'lit:garbern2002'] },
    { aspect: 'Severity', finding: 'Higher copy number (triplication) → more severe phenotype.', ev: 'strong', src: ['lit:inoue2005'] },
    { aspect: 'Clinical phenotype', finding: 'Variants affecting PLP1-specific exon 3B region → milder SPG2.', ev: 'strong', src: ['lit:inoue2005'] },
    { aspect: 'MRI phenotype', finding: 'Degree of hypomyelination on MRI roughly parallels clinical severity.', ev: 'emerging', src: [GR] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'PLP1 (Xq22.2)', detail: 'Dosage gain, misfolding missense or null.', ev: 'established', src: ['lit:inoue2005'] },
    { stage: 'Protein', label: 'PLP / DM20', detail: 'Major myelin tetraspan protein overexpressed or misfolded.', ev: 'established', src: ['db:uniprot:PLP1'] },
    { stage: 'Molecular function', label: 'Myelin compaction disrupted', detail: 'Abnormal PLP trafficking; cholesterol / lipid raft dysregulation.', ev: 'strong', src: ['lit:woodward2008'] },
    { stage: 'Pathway', label: 'ER stress / UPR', detail: 'Misfolded PLP triggers the unfolded protein response.', ev: 'strong', src: ['lit:woodward2008', 'lit:nevin2017'] },
    { stage: 'Cellular consequence', label: 'Oligodendrocyte death / failure to myelinate', detail: 'Hypomyelination with secondary axonal damage.', ev: 'strong', src: ['lit:nevin2017'] },
    { stage: 'Phenotype', label: 'Hypomyelinating leukodystrophy', detail: 'Nystagmus, spasticity, ataxia.', ev: 'established', src: [GR] },
  ],
  relations: [
    { from: ['gene', 'PLP1'], to: ['cell', 'Oligodendrocytes'], label: 'dosage/misfolding stresses', ev: 'established', why: 'Human genetics, iPSC models and animal models agree.', src: ['lit:inoue2005', 'lit:nevin2017'] },
    { from: ['gene', 'PLP1'], to: ['pathway', 'Unfolded protein response'], label: 'activates', ev: 'strong', why: 'Shown in rodent and iPSC-oligodendrocyte models.', src: ['lit:woodward2008', 'lit:nevin2017'] },
    { from: ['pathway', 'Unfolded protein response'], to: ['phenotype', 'Hypomyelination'], label: 'drives', ev: 'strong', why: 'Severity tracks UPR activation in models.', src: ['lit:nevin2017'] },
    { from: ['gene', 'PLP1'], to: ['cell', 'Neurons / axons'], label: 'supports (axonal integrity)', ev: 'established', why: 'PLP1 null causes axonopathy without demyelination.', src: ['lit:garbern2002'] },
    { from: ['therapy', 'PLP1 suppression (ASO / CRISPR)'], to: ['gene', 'PLP1'], label: 'reduces', ev: 'emerging', why: 'Rescue in jimpy mice; no human data.', src: ['lit:elitt2020'] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'ER stress, apoptosis, failure of myelin production.', ev: 'established', src: ['lit:woodward2008'] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axonal degeneration from lack of glial support.', ev: 'strong', src: ['lit:garbern2002'] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Gliosis.', ev: 'emerging', src: [GR] },
    { cell: 'Schwann cells', role: 'secondary', detail: 'Peripheral neuropathy only in PLP1 null syndrome.', ev: 'strong', src: ['lit:garbern2002'] },
  ],
  regions: [
    { region: 'Diffuse cerebral white matter', finding: 'Diffuse hypomyelination (T2 hyperintense, T1 iso/hyper).', src: [GR] },
    { region: 'Internal capsule & optic radiations', finding: 'Variable early myelination.', src: [GR] },
    { region: 'Brainstem & cerebellum', finding: 'Involvement correlates with nystagmus and ataxia.', src: [GR] },
  ],
  biomarkers: [
    { name: 'MRI hypomyelination pattern', category: 'Imaging', significance: 'Defines hypomyelinating disorder.', sample: 'In vivo brain', assay: 'MRI (T1/T2)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Shared by many hypomyelinating disorders.', ev: 'established', src: [GR] },
    { name: 'PLP1 copy number', category: 'Genetic', significance: 'Detects duplications (most common cause).', sample: 'Blood DNA', assay: 'MLPA / array CGH / qPCR', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Point mutations need sequencing.', ev: 'established', src: [GR] },
    { name: 'Brainstem auditory evoked potentials', category: 'Imaging', significance: 'Absent waves III–V support CNS hypomyelination.', sample: 'In vivo', assay: 'BAEP', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Non-specific.', ev: 'strong', src: [GR] },
    { name: 'Quantitative myelin imaging / MRS', category: 'Imaging', significance: 'Potential trial endpoint.', sample: 'In vivo brain', assay: 'Myelin water / MRS', purpose: ['Treatment response'], status: 'Experimental', limitations: 'Not validated.', ev: 'proposed', src: [GR] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Male infant with early nystagmus and hypotonia.', src: [GR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Diffuse hypomyelination; serial MRI shows lack of progress.', src: [GR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Evoked potentials', detail: 'Abnormal BAEP / VEP.', src: [GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'PLP1 copy-number analysis, then sequencing', detail: 'Duplication in majority; sequencing for point mutations.', src: [GR, 'db:clinvar:PLP1'] },
  ],
  differential: ['Pelizaeus–Merzbacher-like disease (GJC2)', 'POLR3-related leukodystrophy', 'Allan–Herndon–Dudley syndrome (SLC16A2)', 'Other hypomyelinating leukodystrophies (TUBB4A, etc.)'],
  phenotypes: {
    applicable: true,
    note: 'Severity classes (connatal / transitional / classic) plus allelic disorders are well described.',
    forms: [
      { name: 'Connatal PMD', onset: 'Neonatal', severity: 'Severe', progression: 'Little motor gain; early death common', genetics: 'Severe missense, triplications', markers: 'Profound hypomyelination', src: [GR] },
      { name: 'Classic PMD', onset: 'First months', severity: 'Moderate', progression: 'Slow; adolescent decline', genetics: 'Duplications (most)', markers: 'Diffuse hypomyelination', src: [GR] },
      { name: 'PLP1 null syndrome', onset: 'Infancy / childhood', severity: 'Mild', progression: 'Slow; neuropathy', genetics: 'Null alleles', markers: 'Milder MRI; neuropathy', src: ['lit:garbern2002'] },
      { name: 'SPG2', onset: 'Childhood–adult', severity: 'Mild', progression: 'Slow spastic paraplegia', genetics: 'Mild missense / exon 3B', markers: 'Mild WM changes', src: ['lit:inoue2005'] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Spasticity management (oral agents, botulinum toxin), seizure management.', src: [GR] },
    { category: 'Supportive', text: 'Physiotherapy, orthotics, communication and feeding support.', src: [GR, 'nord:pmd'] },
    { category: 'Monitoring', text: 'Orthopaedic (scoliosis, hip), respiratory and nutritional surveillance.', src: [GR] },
  ],
  therapies: [
    { id: 'pmd-aso', name: 'PLP1 suppression (ASO / CRISPR)', modality: 'Antisense / RNA', target: 'PLP1', mechanism: 'Reduce PLP1 expression to relieve toxic gain/overexpression.', delivery: 'Intracerebroventricular (model)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical; clinical programmes in development (verify)', ev: 'emerging', why: 'Robust rescue in jimpy mice (Elitt 2020).', src: ['lit:elitt2020'] },
    { id: 'pmd-cell', name: 'Neural stem cell transplantation', modality: 'Cell therapy', target: 'Myelinating cell replacement', mechanism: 'Transplanted cells generate myelinating oligodendrocytes.', delivery: 'Intracerebral', stage: 'Early human trials', evidenceBase: 'Human + animal', status: 'Phase 1 completed (safety); programme discontinued', ev: 'emerging', why: 'Four-patient study with MRI signal changes, no efficacy claim.', src: ['lit:gupta2012'] },
    { id: 'pmd-chol', name: 'Cholesterol / UPR modulation', modality: 'Small molecule', target: 'Myelin lipid / ER stress', mechanism: 'Dietary cholesterol or chemical chaperones to relieve PLP retention.', delivery: 'Oral (model)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical', ev: 'proposed', why: 'Model data only.', src: ['lit:woodward2008'] },
  ],
  trials: [],
  milestones: [
    { year: 1989, label: 'PLP1 point mutations linked to PMD', stage: 'Discovery', src: ['lit:inoue2005'] },
    { year: 1999, label: 'PLP1 duplication identified as most common cause', stage: 'Discovery', src: ['lit:inoue2005'] },
    { year: 2012, label: 'Neural stem cell phase 1 in PMD', stage: 'Early human trials', src: ['lit:gupta2012'] },
    { year: 2017, label: 'iPSC oligodendrocyte disease models', stage: 'Preclinical (cellular)', src: ['lit:nevin2017'] },
    { year: 2020, label: 'PLP1 suppression rescues jimpy mice', stage: 'Animal studies', src: ['lit:elitt2020'] },
  ],
  gaps: [
    { text: 'No disease-modifying therapy in clinical use.', ev: 'established', src: [GR] },
    { text: 'Validated outcome measures and natural-history data for trials.', ev: 'unknown', src: [GR] },
    { text: 'Whether PLP1 suppression is safe given PLP1 role in axonal support.', ev: 'proposed', src: ['lit:garbern2002', 'lit:elitt2020'] },
  ],
}
