import type { Disease, Gene, Source } from '../types'
import { geneDb, omim, orpha, pmid, lit } from '../cite'

const OMIM = 'omim:612233'
const ORPHA = 'orpha:137775'

export const habcSources: Source[] = [
  omim('612233', 'Hypomyelination with atrophy of the basal ganglia and cerebellum (TUBB4A-related)'),
  orpha('137775', 'Hypomyelination with atrophy of the basal ganglia and cerebellum'),
  lit('lit:habc:simons2013', 'Simons C, Wolf NI, McNeil N, et al.', 2013, 'A de novo mutation in the β-tubulin gene TUBB4A results in the leukoencephalopathy hypomyelination with atrophy of the basal ganglia and cerebellum', 'Am J Hum Genet'),
  lit('lit:habc:hersheson2013', 'Hersheson J, Mencacci NE, Davis M, et al.', 2013, 'Mutations in the autoregulatory domain of β-tubulin 4a cause hereditary dystonia', 'Ann Neurol'),
  lit('lit:habc:lohmann2013', 'Lohmann K, Wilcox RA, Winkler S, et al.', 2013, 'Whispering dysphonia (DYT4 dystonia) is caused by a mutation in the TUBB4 gene', 'Ann Neurol'),
  pmid('lit:habc:shimojima2014', '24461888', 'Shimojima K et al.', 2014, 'Loss-of-function mutations of TUBB4A associated with leukodystrophy with hypomyelination and atrophy of the basal ganglia and cerebellum', 'Hum Genet'),
  pmid('lit:habc:sferra2016', '26912458', 'Sferra A et al.', 2016, 'TUBB4A mutations controlling assembly of microtubules and severity of leukodystrophy', 'Brain'),
  pmid('lit:habc:vanderknaap2017', '28572582', 'van der Knaap MS, Bugiani M', 2017, 'Leukodystrophies: a proposed classification system based on pathological changes and pathogenetic mechanisms', 'Acta Neuropathol', 'review'),
]

export const habcGenes: Gene[] = [
  {
    symbol: 'TUBB4A',
    name: 'Tubulin beta 4A class IVa',
    protein: 'Beta-tubulin isotype 4A, 444 aa, partner of alpha-tubulin in the heterodimer',
    location: '19p13.3',
    function:
      'Beta-tubulin isotype highly expressed in oligodendrocytes and neurons; polymerises with alpha-tubulin (mainly TUBA1A) into microtubules needed for myelin membrane elaboration, axon wrapping and axonal transport.',
    pathway: 'Microtubule assembly and dynamics',
    transcript: 'NM_006087.4',
    uniprot: 'P04350',
    ncbiGene: '10382',
    variantTypes: ['Missense (vast majority; dominant negative)', 'De novo dominant missense', 'Rare recessive hypomorphic alleles'],
    diseases: ['habc'],
    ev: 'established',
    src: ['lit:habc:simons2013', 'lit:habc:sferra2016', OMIM, ...geneDb('TUBB4A')],
  },
]

export const habc: Disease = {
  id: 'habc',
  name: 'Hypomyelination with Atrophy of the Basal Ganglia and Cerebellum',
  short: 'H-ABC',
  lastUpdated: '2026-10-08',
  color: '#7a5cc7',
  synonyms: [
    'H-ABC syndrome',
    'TUBB4A-related hypomyelinating leukodystrophy',
    'Hypomyelinating leukodystrophy 4 (HLD4)',
    'Leukodystrophy with dystonia',
    'TUBB4A leukodystrophy',
  ],
  classification: 'Hypomyelinating leukodystrophy with grey-matter neurodegeneration; tubulinopathy',
  inheritance: 'Autosomal dominant (mostly de novo)',
  genes: ['TUBB4A'],
  tagline: 'Dominant-negative beta-tubulin 4A → faulty microtubules in oligodendrocytes and neurons → hypomyelination with basal ganglia and cerebellar atrophy.',
  identifiers: [
    { label: 'OMIM', value: '612233', url: 'https://www.omim.org/entry/612233' },
    { label: 'Orphanet', value: 'ORPHA:137775', url: 'https://www.orpha.net/en/disease/detail/137775' },
    { label: 'MONDO', value: 'MONDO:0011964', url: 'https://monarchinitiative.org/MONDO:0011964' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous, usually de novo, pathogenic TUBB4A missense variants impair microtubule assembly.', ev: 'established', why: 'Gene identified in 2013 and replicated in multiple cohorts with functional studies.', src: ['lit:habc:simons2013', 'lit:habc:shimojima2014', OMIM] },
    { label: 'Core pathology', text: 'Combined white-matter hypomyelination and progressive grey-matter atrophy of the putamen, caudate and cerebellum.', ev: 'established', src: ['lit:habc:simons2013', 'lit:habc:vanderknaap2017'] },
    { label: 'Primary cell types', text: 'Oligodendrocytes (myelination failure) and neurons (secondary degeneration).', ev: 'strong', why: 'Supported by expression data and cell models; human cell-level pathology limited.', src: ['lit:habc:sferra2016'] },
    { label: 'Inheritance', text: 'Mostly autosomal dominant de novo; rare autosomal recessive families reported.', ev: 'established', why: 'Recessive inheritance itself is emerging (small series).', src: [OMIM] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typically 6 months to 3 years; congenital or neonatal onset in severe, often fatal cases.', ev: 'established', src: [OMIM, 'lit:habc:simons2013'] },
    { label: 'Movement disorder', text: 'Dystonia is a dominant and often presenting feature, focal or generalised, sometimes with dystonic storms; cerebellar ataxia coexists.', ev: 'established', src: [OMIM, 'lit:habc:shimojima2014'] },
    { label: 'Other features', text: 'Global developmental delay, variable intellectual disability, dysarthria or anarthria, variable spasticity and nystagmus in a subset.', ev: 'established', src: [OMIM] },
    { label: 'Progression', text: 'Chronic progressive: static hypomyelination with evolving basal ganglia and cerebellar atrophy on serial MRI.', ev: 'established', src: ['lit:habc:simons2013'] },
    { label: 'Prognosis', text: 'Severely reduced life expectancy in severe early-onset forms; milder forms may survive into adulthood.', ev: 'strong', why: 'Case-series data; no prospective natural history.', src: [OMIM] },
    { label: 'Mild adult form', text: 'At the mild end of the TUBB4A spectrum, the dominantly inherited p.Arg2Gly allele causes adult-onset whispering dysphonia (DYT4 dystonia).', ev: 'established', src: ['lit:habc:hersheson2013', 'lit:habc:lohmann2013'] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Very rare (Orphanet <1 in 1,000,000); more than 100 cases published by 2022.', ev: 'unknown', why: 'No population-based studies.', src: [ORPHA] },
    { label: 'Founder population', text: 'None identified; most cases are de novo with no geographic clustering.', ev: 'established', src: [ORPHA, OMIM] },
    { label: 'Familial transmission', text: 'Parent-to-child transmission is documented for the mild DYT4 allele p.Arg2Gly; recessive cases occur in consanguineous families.', ev: 'emerging', src: ['lit:habc:hersheson2013', 'lit:habc:lohmann2013', 'lit:habc:simons2013'] },
    { label: 'Sex distribution', text: 'No reported sex bias.', ev: 'established', src: [OMIM] },
  ],
  variants: [
    { id: 'habc-r2g', disease: 'habc', gene: 'TUBB4A', transcript: 'NM_006087.4', hgvsc: 'See ClinVar', hgvsp: 'p.(Arg2Gly)', build: 'GRCh38', type: 'Missense', consequence: 'Alters the autoregulatory MREI motif of beta-tubulin', clinvar: 'Pathogenic', popFreq: 'Dominantly inherited (familial)', phenotype: 'DYT4 whispering dysphonia (mild end of the TUBB4A spectrum)', functional: 'Autoregulatory-domain variant', ev: 'established', why: 'Identified independently by two groups in the original DYT4 family.', src: ['lit:habc:hersheson2013', 'lit:habc:lohmann2013', 'db:clinvar:TUBB4A'] },
    { id: 'habc-r2s', disease: 'habc', gene: 'TUBB4A', transcript: 'NM_006087.4', hgvsc: 'c.4G>A', hgvsp: 'p.(Arg2Ser)', build: 'GRCh38', type: 'Missense', consequence: 'Dominant tubulin dysfunction', clinvar: 'Pathogenic', popFreq: 'De novo', phenotype: 'Classic H-ABC; the recurrent de novo variant', functional: 'Not detailed in dossier', ev: 'established', why: 'Recurrent de novo variant in the original H-ABC gene-discovery cohort.', src: ['lit:habc:simons2013', 'db:clinvar:TUBB4A'] },
    { id: 'habc-d249n', disease: 'habc', gene: 'TUBB4A', transcript: 'NM_006087.4', hgvsc: 'c.745G>A', hgvsp: 'p.(Asp249Asn)', build: 'GRCh38', type: 'Missense', consequence: 'Dominant tubulin dysfunction', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'De novo', phenotype: 'Classic H-ABC; the recurrent de novo variant', functional: 'Not detailed in dossier', ev: 'established', why: 'Recurrent de novo variant in the original H-ABC gene-discovery cohort.', src: ['lit:habc:simons2013', 'db:clinvar:TUBB4A'] },
    { id: 'habc-r282c', disease: 'habc', gene: 'TUBB4A', transcript: 'NM_006087.4', hgvsc: 'c.844C>T', hgvsp: 'p.(Arg282Cys)', build: 'GRCh38', type: 'Missense', consequence: 'Alters the GTP-binding domain', clinvar: 'Pathogenic', popFreq: 'Not stated', phenotype: 'Dominant H-ABC', functional: 'Not detailed in dossier', ev: 'strong', src: ['db:clinvar:TUBB4A'] },
    { id: 'habc-e410k', disease: 'habc', gene: 'TUBB4A', transcript: 'NM_006087.4', hgvsc: 'c.1228G>A', hgvsp: 'p.(Glu410Lys)', build: 'GRCh38', type: 'Missense', consequence: 'Not stated', clinvar: 'Likely pathogenic', popFreq: 'Not stated', phenotype: 'Not stated', functional: 'Not reported', ev: 'emerging', why: 'Likely pathogenic without phenotype or functional data in source.', src: ['db:clinvar:TUBB4A'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Genotype strongly predicts severity: structurally disruptive de novo missense variants cause severe infantile H-ABC; mild alleles cause a mild course.', ev: 'strong', why: 'Multiple case series plus microtubule-assembly assays.', src: ['lit:habc:sferra2016', 'lit:habc:simons2013'] },
    { aspect: 'Age of onset', finding: 'p.Arg2Gly is associated with adult-onset DYT4 dystonia and slow progression, while p.Asp249Asn is the recurrent variant in classic H-ABC.', ev: 'established', src: ['lit:habc:hersheson2013', 'lit:habc:lohmann2013', 'lit:habc:simons2013'] },
    { aspect: 'MRI phenotype', finding: 'Severity of basal ganglia and cerebellar atrophy on MRI correlates with clinical severity.', ev: 'established', src: ['lit:habc:simons2013'] },
    { aspect: 'Clinical phenotype', finding: 'Rare recessive hypomorphic alleles cause milder childhood hypomyelination.', ev: 'emerging', why: 'Small case series.', src: [OMIM] },
    { aspect: 'Survival / outcome', finding: 'Severe early-onset forms progress rapidly with early death; no validated quantitative predictor.', ev: 'strong', src: [OMIM] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'TUBB4A', detail: 'Heterozygous (mostly de novo) missense variants; rare recessive alleles.', ev: 'established', src: ['lit:habc:simons2013', 'lit:habc:shimojima2014'] },
    { stage: 'Protein', label: 'Beta-tubulin 4A', detail: 'Mutant tubulin with altered polymerisation dynamics incorporates into heterodimers.', ev: 'strong', src: ['lit:habc:sferra2016', 'db:uniprot:TUBB4A'] },
    { stage: 'Molecular function', label: 'Dominant-negative microtubule poisoning', detail: 'Abnormal subunits poison the microtubule lattice, impairing assembly and stability.', ev: 'strong', src: ['lit:habc:sferra2016'] },
    { stage: 'Pathway', label: 'Microtubule-dependent transport and process extension', detail: 'Defective oligodendrocyte process extension and axon wrapping; impaired neuronal axonal transport.', ev: 'strong', src: ['lit:habc:sferra2016', 'lit:habc:simons2013'] },
    { stage: 'Cellular consequence', label: 'Hypomyelination + neurodegeneration', detail: 'Insufficient myelin deposition plus degeneration of striatal neurons and cerebellar Purkinje/granule cells.', ev: 'strong', src: ['lit:habc:simons2013', 'lit:habc:sferra2016'] },
    { stage: 'Phenotype', label: 'H-ABC', detail: 'Dystonia (basal ganglia), ataxia (cerebellum), developmental delay and hypomyelination on MRI.', ev: 'established', src: [OMIM] },
  ],
  relations: [
    { from: ['gene', 'TUBB4A'], to: ['cell', 'Oligodendrocytes'], label: 'highly expressed in', ev: 'established', why: 'TUBB4A is among the top beta-tubulin isotypes in oligodendrocytes, explaining myelin specificity.', src: ['lit:habc:simons2013', 'db:hpa:TUBB4A'] },
    { from: ['gene', 'TUBB4A'], to: ['cell', 'Neurons / axons'], label: 'expressed in', ev: 'established', why: 'High expression in cerebellar Purkinje and granule cells, cortex and basal ganglia neurons.', src: ['db:hpa:TUBB4A'] },
    { from: ['protein', 'Beta-tubulin 4A'], to: ['pathway', 'Microtubule assembly'], label: 'dominant-negative disruption of', ev: 'strong', why: 'Functional studies in Xenopus and cell models.', src: ['lit:habc:sferra2016'] },
    { from: ['pathway', 'Microtubule assembly'], to: ['phenotype', 'Hypomyelination'], label: 'failure causes', ev: 'strong', why: 'Oligodendrocyte process extension depends on microtubules; supported by cell models.', src: ['lit:habc:sferra2016'] },
    { from: ['pathway', 'Microtubule assembly'], to: ['region', 'Putamen & caudate'], label: 'failure drives atrophy of', ev: 'strong', why: 'Progressive atrophy on serial MRI; mechanism inferred from axonal transport defects.', src: ['lit:habc:simons2013'] },
    { from: ['region', 'Putamen & caudate'], to: ['phenotype', 'Dystonia'], label: 'dysfunction causes', ev: 'established', why: 'Consistent clinical-imaging correlation.', src: ['lit:habc:simons2013'] },
    { from: ['region', 'Cerebellum'], to: ['phenotype', 'Ataxia'], label: 'atrophy causes', ev: 'established', why: 'Consistent clinical-imaging correlation.', src: ['lit:habc:simons2013'] },
    { from: ['therapy', 'Deep brain stimulation'], to: ['phenotype', 'Dystonia'], label: 'may reduce', ev: 'emerging', why: 'Case reports only.', src: [OMIM] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'High TUBB4A expression; impaired process extension and myelination.', ev: 'strong', src: ['lit:habc:sferra2016', 'lit:habc:simons2013'] },
    { cell: 'Neurons / axons', role: 'primary', detail: 'Striatal and cerebellar Purkinje/granule neuron degeneration via impaired axonal transport.', ev: 'strong', src: ['lit:habc:simons2013', 'lit:habc:sferra2016'] },
  ],
  regions: [
    { region: 'Cerebral white matter', finding: 'Diffuse, relatively symmetric hypomyelination (T1 hypointense, T2 hyperintense).', src: ['lit:habc:simons2013'] },
    { region: 'Putamen & caudate', finding: 'Progressive atrophy (putamen > caudate) with putaminal T2 signal change.', src: ['lit:habc:simons2013'] },
    { region: 'Cerebellum', finding: 'Progressive vermian and hemispheric atrophy; thin cerebellar cortex.', src: ['lit:habc:simons2013'] },
    { region: 'Brainstem', finding: 'Mild tegmental involvement in some.', src: [OMIM] },
    { region: 'Spinal cord', finding: 'Lateral corticospinal tract T2 signal in some cases.', src: [OMIM] },
  ],
  biomarkers: [
    { name: 'MRI hypomyelination pattern', category: 'Imaging', significance: 'Failure of myelin deposition.', sample: 'In vivo brain', assay: 'MRI (T1/T2)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Shared with other hypomyelinating disorders.', ev: 'established', src: ['lit:habc:simons2013'] },
    { name: 'Basal ganglia atrophy (MRI)', category: 'Imaging', significance: 'Neurodegeneration of putamen and caudate.', sample: 'In vivo brain', assay: 'Serial MRI', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Mild and late in mild forms.', ev: 'established', src: ['lit:habc:simons2013'] },
    { name: 'Cerebellar atrophy (MRI)', category: 'Imaging', significance: 'Cerebellar neurodegeneration.', sample: 'In vivo brain', assay: 'Serial MRI', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Not specific in isolation.', ev: 'established', src: ['lit:habc:simons2013'] },
    { name: 'TUBB4A genetic testing', category: 'Genetic', significance: 'Molecular confirmation.', sample: 'Blood DNA', assay: 'Sequencing + CNV analysis; parental testing', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Novel missense variants may need functional or segregation evidence.', ev: 'established', src: [OMIM, 'db:clinvar:TUBB4A'] },
    { name: 'MRS NAA', category: 'Imaging', significance: 'Reduced NAA reflects axonal/neuronal loss.', sample: 'In vivo brain', assay: 'Proton MRS', purpose: ['Research'], status: 'Experimental', limitations: 'Not clinically validated.', ev: 'emerging', src: [] },
    { name: 'Neurofilament light chain (NfL)', category: 'Fluid (neuro-glial injury)', significance: 'Axonal injury marker.', sample: 'Serum / CSF', assay: 'Immunoassay', purpose: ['Research', 'Monitoring'], status: 'Experimental', limitations: 'Not validated for H-ABC.', ev: 'emerging', src: [] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant or young child with dystonia, motor regression and developmental delay; or adult with whispering dysphonia and white-matter change.', src: [OMIM, 'lit:habc:simons2013'] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI (serial)', detail: 'Hypomyelination with putamen/caudate and cerebellar atrophy that progresses over time.', src: ['lit:habc:simons2013'] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Metabolic screen and CSF', detail: 'Lysosomal enzymes, VLCFA, organic acids and CSF are normal; no specific biochemical marker.', src: [OMIM] },
    { phase: 'Confirmation', category: 'Genetic', method: 'TUBB4A sequencing + CNV; parental testing', detail: 'First-tier given the characteristic MRI; parental testing confirms de novo status.', src: [OMIM, 'db:clinvar:TUBB4A'] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Hypomyelination panel / WES / WGS', detail: 'For unsolved cases; panels include TUBB4A, GJC2 and PLP1.', src: [OMIM] },
    { phase: 'Confirmation', category: 'Reproductive', method: 'Prenatal testing', detail: 'Targeted testing possible; recurrence after a de novo variant is low but germline mosaicism is possible. No newborn screening.', src: [OMIM] },
  ],
  differential: [
    'Pelizaeus-Merzbacher disease (PLP1)',
    'Pelizaeus-Merzbacher-like disease 1 (GJC2)',
    'Other hypomyelinating leukodystrophies lacking basal ganglia atrophy',
  ],
  phenotypes: {
    applicable: true,
    note: 'Severe infantile H-ABC and a mild adult-onset form (whispering dysphonia) are described, with rare recessive childhood forms.',
    forms: [
      { name: 'Severe infantile H-ABC', onset: '6 months–3 years (congenital in some)', severity: 'Severe', progression: 'Rapid; early death in severe cases', genetics: 'De novo dominant missense at structurally critical positions', markers: 'Hypomyelination + prominent early basal ganglia and cerebellar atrophy', src: ['lit:habc:simons2013', 'lit:habc:sferra2016'] },
      { name: 'Mild adult form', onset: 'Adulthood (20–50 years)', severity: 'Mild', progression: 'Slow, over decades', genetics: 'p.Arg2Gly (DYT4; dominant, can be inherited)', markers: 'Whispering dysphonia; mild T2 white-matter change; mild, late atrophy', src: ['lit:habc:hersheson2013', 'lit:habc:lohmann2013'] },
      { name: 'Recessive childhood form', onset: 'Childhood', severity: 'Moderate', progression: 'Not well defined', genetics: 'Rare biallelic hypomorphic alleles', markers: 'Milder hypomyelination', src: [OMIM] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Dystonia: trihexyphenidyl, levodopa/carbidopa (limited efficacy), clonazepam, baclofen; botulinum toxin for focal dystonia.', src: [OMIM] },
    { category: 'Symptomatic', text: 'Spasticity: oral or intrathecal baclofen, physiotherapy, orthoses; anti-seizure medication if seizures occur.', src: [OMIM] },
    { category: 'Supportive', text: 'Physiotherapy, occupational therapy, AAC for anarthria, gastrostomy for severe dysphagia, special education and multidisciplinary care.', src: [OMIM] },
    { category: 'Monitoring', text: 'Serial clinical and MRI follow-up of dystonia, swallowing and atrophy. No disease-modifying therapy is approved.', src: [OMIM, ORPHA] },
  ],
  therapies: [
    { id: 'habc-dbs', name: 'Deep brain stimulation', modality: 'Other', target: 'Basal ganglia circuits (dystonia)', mechanism: 'Neuromodulation for refractory dystonia.', delivery: 'Surgical implantation', stage: 'Discovery', evidenceBase: 'Human', status: 'Case reports only; not standard of care', ev: 'emerging', why: 'Case reports in H-ABC and related tubulinopathy dystonia; no trials.', src: [] },
    { id: 'habc-gt', name: 'Oligodendrocyte-targeted TUBB4A gene therapy', modality: 'Gene therapy', target: 'TUBB4A', mechanism: 'Deliver wild-type TUBB4A to oligodendrocytes; may not overcome the dominant-negative allele.', delivery: 'Viral vector (conceptual)', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Proposed / early preclinical', ev: 'proposed', why: 'Conceptual; no published efficacy data.', src: [] },
    { id: 'habc-aso', name: 'Allele-specific TUBB4A silencing (ASO / RNAi)', modality: 'Antisense / RNA', target: 'Mutant TUBB4A allele', mechanism: 'Silence the dominant-negative allele.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Proposed', ev: 'proposed', why: 'Suggested as possibly required given the dominant-negative mechanism; no data.', src: [] },
    { id: 'habc-mts', name: 'Microtubule stabilisers (e.g. epothilone)', modality: 'Small molecule', target: 'Microtubules', mechanism: 'Stabilise microtubule dynamics.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Proposed; no H-ABC data', ev: 'proposed', why: 'Proof of concept only in other neurodegeneration and tubulinopathy models.', src: [] },
    { id: 'habc-remyel', name: 'Remyelination agents (e.g. clemastine)', modality: 'Small molecule', target: 'Oligodendrocyte differentiation', mechanism: 'Promote myelination (muscarinic antagonists, thyroid hormone analogues, LINGO-1 inhibitors).', delivery: 'Oral / systemic', stage: 'Discovery', evidenceBase: 'Human', status: 'Not evaluated in H-ABC', ev: 'proposed', why: 'Studied in MS and other disorders, not in H-ABC.', src: [] },
  ],
  trials: [],
  milestones: [
    { year: 2013, label: 'TUBB4A identified as the H-ABC gene', stage: 'Discovery', src: ['lit:habc:simons2013'] },
    { year: 2014, label: 'TUBB4A variants confirmed in H-ABC cohorts', stage: 'Discovery', src: ['lit:habc:shimojima2014'] },
    { year: 2016, label: 'Variant effects on microtubule assembly linked to severity', stage: 'Preclinical (cellular)', src: ['lit:habc:sferra2016'] },
  ],
  gaps: [
    { text: 'No interventional trials registered and no approved disease-modifying therapy.', ev: 'unknown', src: [ORPHA] },
    { text: 'Dominant-negative mechanism makes simple gene replacement potentially insufficient; allele-specific approaches are untested.', ev: 'proposed', src: ['lit:habc:sferra2016'] },
    { text: 'Animal models are only partially characterised; a natural-history study and validated biomarkers (NfL, MRS) are lacking.', ev: 'unknown', src: [] },
    { text: 'Inheritance and phenotype of rare recessive TUBB4A alleles are poorly defined.', ev: 'emerging', src: [OMIM] },
  ],
}
