import type { Disease } from '../types'

const GR = 'gr:polr3'

export const polr3: Disease = {
  id: 'polr3',
  name: 'POLR3-related Leukodystrophy',
  short: 'POLR3-HLD',
  color: '#4f9a3a',
  synonyms: ['4H leukodystrophy (hypomyelination, hypodontia, hypogonadotropic hypogonadism)', 'POLR3-HLD', 'HLD7 (POLR3A)', 'HLD8 (POLR3B)', 'HLD11 (POLR1C)'],
  classification: 'Hypomyelinating leukodystrophy; disorder of RNA polymerase III',
  inheritance: 'Autosomal recessive',
  genes: ['POLR3A', 'POLR3B', 'POLR1C', 'POLR3K', 'POLR3GL'],
  tagline: 'Hypomorphic RNA polymerase III → altered small-RNA transcription → hypomyelination with dental & endocrine features.',
  identifiers: [
    { label: 'OMIM', value: '607694 / 614381', url: 'https://www.omim.org/entry/607694' },
    { label: 'Orphanet', value: 'ORPHA:289494', url: 'https://www.orpha.net/en/disease/detail/289494' },
    { label: 'GeneReviews', value: 'NBK99167', url: 'https://www.ncbi.nlm.nih.gov/books/NBK99167/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=4H%20leukodystrophy' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic variants in POLR3A, POLR3B, POLR1C, and rarely POLR3K or POLR3GL — subunits of RNA polymerase III.', ev: 'established', src: ['lit:bernard2011', 'lit:tetreault2011', 'lit:thiffault2015', GR] },
    { label: 'Clinical triad', text: '"4H": Hypomyelination, Hypodontia, Hypogonadotropic Hypogonadism; myopia is also common.', ev: 'established', src: ['lit:wolf2014'] },
    { label: 'Disease class', text: 'Hypomyelinating leukodystrophy with cerebellar involvement.', ev: 'established', src: [GR] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Usually early childhood (often before 6 years); adolescent and adult onset reported.', ev: 'established', src: ['lit:wolf2014'] },
    { label: 'Neurological features', text: 'Cerebellar ataxia, tremor, dysarthria, later spasticity; cognitive involvement variable.', ev: 'established', src: ['lit:wolf2014'] },
    { label: 'Non-neurological', text: 'Delayed/abnormal dentition, hypogonadotropic hypogonadism (delayed puberty), short stature, myopia.', ev: 'established', src: ['lit:wolf2014'] },
    { label: 'Progression', text: 'Slowly progressive motor decline.', ev: 'strong', src: [GR] },
    { label: 'Phenotypic variation', text: 'Some individuals lack non-neurological features; POLR3A hypomorphic alleles can cause spastic ataxia without hypomyelination.', ev: 'strong', src: ['lit:minnerop2017'] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Considered one of the most common hypomyelinating leukodystrophies; population prevalence unknown.', ev: 'unknown', src: [GR] },
    { label: 'Gene distribution', text: 'POLR3A and POLR3B account for most cases; POLR1C a smaller share.', ev: 'established', src: ['lit:wolf2014'] },
    { label: 'Recurrent variants', text: 'POLR3B c.1568T>A p.(Val523Glu) is recurrent, particularly in European cohorts.', ev: 'strong', src: ['lit:wolf2014'] },
  ],
  variants: [
    { id: 'polr3b-v523e', disease: 'polr3', gene: 'POLR3B', transcript: 'NM_018082.6', hgvsc: 'c.1568T>A', hgvsp: 'p.(Val523Glu)', build: 'GRCh38', type: 'Missense', consequence: 'Hypomorphic Pol III', clinvar: 'Pathogenic', popFreq: 'Recurrent allele', phenotype: 'Often milder POLR3B-related phenotype', functional: 'Mouse knock-in models', ev: 'strong', why: 'Recurrent across cohorts.', src: ['lit:wolf2014', 'db:clinvar:POLR3B'] },
    { id: 'polr3a-intronic', disease: 'polr3', gene: 'POLR3A', transcript: 'NM_007055.4', hgvsc: 'c.1909+22G>A', build: 'GRCh38', type: 'Deep intronic / splice', consequence: 'Partial aberrant splicing (hypomorph)', clinvar: 'Pathogenic', popFreq: 'Relatively frequent in Europeans for a pathogenic allele', phenotype: 'Spastic ataxia ± mild WM changes (not classic 4H)', functional: 'Leaky splicing defect', ev: 'strong', why: 'Large cohort study.', src: ['lit:minnerop2017', 'db:clinvar:POLR3A'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'POLR3A-related disease tends to be more severe and later-progressing than POLR3B-related disease.', ev: 'strong', src: ['lit:wolf2014'] },
    { aspect: 'MRI phenotype', finding: 'POLR3B patients more often show cerebellar atrophy with relative myelin preservation.', ev: 'emerging', src: ['lit:wolf2014'] },
    { aspect: 'Clinical phenotype', finding: 'Hypomorphic POLR3A splice alleles → spastic ataxia rather than 4H.', ev: 'strong', src: ['lit:minnerop2017'] },
    { aspect: 'Survival / outcome', finding: 'Long-term outcome by genotype is not defined.', ev: 'unknown', src: [GR] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'POLR3A / POLR3B / POLR1C', detail: 'Biallelic hypomorphic variants.', ev: 'established', src: ['lit:bernard2011', 'lit:tetreault2011'] },
    { stage: 'Protein', label: 'RNA polymerase III', detail: 'Reduced assembly, nuclear import or catalytic activity.', ev: 'strong', src: ['lit:thiffault2015'] },
    { stage: 'Molecular function', label: 'Reduced small-RNA transcription', detail: 'Altered tRNA, 5S rRNA, 7SK and BC200 levels.', ev: 'emerging', src: ['lit:dorboz2018', 'lit:merheb2021'] },
    { stage: 'Pathway', label: 'Translation capacity during myelination', detail: 'Proposed bottleneck of protein synthesis in myelinating oligodendrocytes.', ev: 'proposed', src: ['lit:merheb2021'] },
    { stage: 'Cellular consequence', label: 'Oligodendrocyte maturation defect', detail: 'Hypomyelination; developmental effects on teeth and pituitary.', ev: 'emerging', src: ['lit:merheb2021'] },
    { stage: 'Phenotype', label: '4H leukodystrophy', detail: 'Ataxia, hypodontia, hypogonadism, myopia.', ev: 'established', src: ['lit:wolf2014'] },
  ],
  relations: [
    { from: ['gene', 'POLR3A'], to: ['pathway', 'Pol III transcription'], label: 'reduces', ev: 'strong', why: 'Patient cell and structural data.', src: ['lit:bernard2011'] },
    { from: ['gene', 'POLR3B'], to: ['pathway', 'Pol III transcription'], label: 'reduces', ev: 'strong', why: 'Patient cell data.', src: ['lit:tetreault2011'] },
    { from: ['gene', 'POLR1C'], to: ['pathway', 'Pol III transcription'], label: 'impairs assembly', ev: 'strong', why: 'Shown that POLR1C variants affecting Pol III, not Pol I, cause HLD.', src: ['lit:thiffault2015'] },
    { from: ['pathway', 'Pol III transcription'], to: ['cell', 'Oligodendrocytes'], label: 'required for myelination (proposed)', ev: 'proposed', why: 'Mouse model shows hypomyelination; mechanism unclear.', src: ['lit:merheb2021'] },
    { from: ['gene', 'POLR3A'], to: ['phenotype', 'Spastic ataxia'], label: 'hypomorphic alleles cause', ev: 'strong', why: 'Large cohort.', src: ['lit:minnerop2017'] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Hypomyelination.', ev: 'strong', src: ['lit:merheb2021'] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Cerebellar (Purkinje) involvement and atrophy.', ev: 'emerging', src: ['lit:wolf2014'] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Dental development; pituitary gonadotropes.', ev: 'established', src: ['lit:wolf2014'] },
  ],
  regions: [
    { region: 'Diffuse cerebral white matter', finding: 'Hypomyelination.', src: [GR] },
    { region: 'Relative T2 hypointensity', finding: 'Preserved signal of ventrolateral thalamus, optic radiations, globus pallidus, dentate nucleus and corticospinal tracts at the posterior limb of the internal capsule.', src: ['lit:wolf2014'] },
    { region: 'Cerebellum', finding: 'Cerebellar atrophy; thin corpus callosum.', src: ['lit:wolf2014'] },
  ],
  biomarkers: [
    { name: 'Characteristic MRI pattern', category: 'Imaging', significance: 'Pattern recognition strongly suggests POLR3-HLD.', sample: 'In vivo brain', assay: 'MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Pattern may be incomplete.', ev: 'established', src: ['lit:wolf2014'] },
    { name: 'Dental radiography', category: 'Imaging', significance: 'Hypodontia / abnormal dentition.', sample: 'Teeth', assay: 'Panoramic radiograph', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Not universal.', ev: 'established', src: ['lit:wolf2014'] },
    { name: 'LH / FSH / sex steroids', category: 'Endocrine', significance: 'Hypogonadotropic hypogonadism.', sample: 'Serum', assay: 'Immunoassay', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: '—', ev: 'established', src: [GR] },
    { name: 'Pol III transcript levels', category: 'Biochemical', significance: 'Functional readout of Pol III activity.', sample: 'Fibroblasts / blood', assay: 'RNA quantification', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Research only.', ev: 'proposed', src: ['lit:dorboz2018'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Child with ataxia plus dental anomalies, delayed puberty or myopia.', src: ['lit:wolf2014'] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Hypomyelination with characteristic relative T2 hypointensities and cerebellar atrophy.', src: ['lit:wolf2014'] },
    { phase: 'Investigation', category: 'Endocrine', method: 'Endocrine & dental evaluation', detail: 'Gonadotropins, growth; dental radiographs.', src: [GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Leukodystrophy panel / exome (incl. intronic POLR3A)', detail: 'Biallelic variants in POLR3A, POLR3B, POLR1C, POLR3K or POLR3GL.', src: [GR] },
  ],
  differential: ['Pelizaeus–Merzbacher disease', 'TUBB4A-related hypomyelination (H-ABC)', 'Other hypomyelinating leukodystrophies', 'Spinocerebellar ataxias (adult)'],
  phenotypes: {
    applicable: false,
    note: 'The literature describes a severity spectrum (with or without non-neurological features) rather than a discrete typical/atypical split; GeneMap therefore does not impose one.',
    forms: [],
  },
  management: [
    { category: 'Symptomatic', text: 'Hormone replacement to induce puberty in hypogonadotropic hypogonadism.', src: [GR] },
    { category: 'Supportive', text: 'Dental care and prosthetics; correction of myopia; physiotherapy.', src: [GR] },
    { category: 'Monitoring', text: 'Endocrine, ophthalmological, dental and swallowing surveillance.', src: [GR, 'nord:polr3'] },
  ],
  therapies: [
    { id: 'polr3-gt', name: 'AAV gene replacement (POLR3B / POLR3A)', modality: 'Gene therapy', target: 'POLR3B / POLR3A', mechanism: 'Restore Pol III subunit expression in oligodendrocytes.', delivery: 'CNS (model)', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Discovery / preclinical', ev: 'proposed', why: 'Mouse models only recently established.', src: ['lit:merheb2021'] },
  ],
  trials: [],
  milestones: [
    { year: 2011, label: 'POLR3A and POLR3B identified', stage: 'Discovery', src: ['lit:bernard2011', 'lit:tetreault2011'] },
    { year: 2014, label: 'Clinical spectrum defined', stage: 'Discovery', src: ['lit:wolf2014'] },
    { year: 2015, label: 'POLR1C identified', stage: 'Discovery', src: ['lit:thiffault2015'] },
    { year: 2017, label: 'POLR3A hypomorphs cause spastic ataxia', stage: 'Discovery', src: ['lit:minnerop2017'] },
    { year: 2021, label: 'Leukodystrophic mouse model', stage: 'Animal studies', src: ['lit:merheb2021'] },
  ],
  gaps: [
    { text: 'Why ubiquitous Pol III dysfunction selectively affects myelin, teeth and pituitary.', ev: 'unknown', src: ['lit:merheb2021'] },
    { text: 'No disease-modifying therapies in development beyond preclinical stage.', ev: 'established', src: [GR] },
    { text: 'Which Pol III transcripts are rate-limiting in oligodendrocytes.', ev: 'proposed', src: ['lit:dorboz2018', 'lit:merheb2021'] },
  ],
}
