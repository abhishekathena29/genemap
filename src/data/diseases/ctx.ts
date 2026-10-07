import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, nord, omim, orpha, query } from '../cite'

/** Pin a literature source to its DOI landing page. */
const doi = (s: Source, d: string): Source => ({ ...s, url: `https://doi.org/${d}` })

const NIE = 'lit:ctx:nie2014'
const KOYAMA = 'lit:ctx:koyama2021'
const NOBREGA = 'lit:ctx:nobrega2022'
const MIG16 = 'lit:ctx:mignarri2016'
const MIG12 = 'lit:ctx:mignarri2012'
const CATARINO = 'lit:ctx:catarino2018'
const WATTS = 'lit:ctx:watts1996'
const DEGRASSI = 'lit:ctx:degrassi2020'
const LUMBRERAS = 'lit:ctx:lumbreras2021'
const AHMUD = 'lit:ctx:ahmud2025'
const JALAL = 'lit:ctx:jalal2025'
const DEBARBER = 'lit:ctx:debarber2024'
const MANDRILE = 'lit:ctx:mandrile2014'
const VARGA = 'lit:ctx:varga2014'
const YADAV = 'lit:ctx:yadav2014'
const FDA = 'fda:ctx:ctexli'

export const ctxSources: Source[] = [
  omim('213700', 'Cerebrotendinous xanthomatosis'),
  orpha('909', 'Cerebrotendinous xanthomatosis'),
  nord('ctx', 'cerebrotendinous-xanthomatosis', 'Cerebrotendinous Xanthomatosis'),
  {
    id: FDA,
    title: 'Ctexli (chenodiol) for cerebrotendinous xanthomatosis: FDA drug approvals',
    venue: 'U.S. Food and Drug Administration',
    year: 2025,
    kind: 'regulatory',
    url: 'https://www.fda.gov/drugs/drug-approvals-and-databases/drug-approvals',
  },
  {
    id: 'reg:ctx:ctgov',
    title: 'ClinicalTrials.gov search: cerebrotendinous xanthomatosis',
    venue: 'ClinicalTrials.gov',
    kind: 'registry',
    url: 'https://clinicaltrials.gov/ct2/results?cond=cerebrotendinous+xanthomatosis',
  },
  query('q:ctx:nbs', 'Newborn screening for cerebrotendinous xanthomatosis', 'cerebrotendinous xanthomatosis newborn screening'),
  doi(lit(NIE, 'Nie S, et al.', 2014, 'Cerebrotendinous xanthomatosis: a comprehensive review of pathogenesis, clinical manifestations, diagnosis, and management', 'Orphanet J Rare Dis', 'review'), '10.1186/S13023-014-0179-4'),
  doi(lit(KOYAMA, 'Koyama S, et al.', 2021, 'Cerebrotendinous xanthomatosis: molecular pathogenesis, clinical spectrum, diagnosis, and disease-modifying treatments', 'J Atheroscler Thromb', 'review'), '10.5551/JAT.RV17055'),
  doi(lit(NOBREGA, 'Nóbrega PR, et al.', 2022, 'Cerebrotendinous xanthomatosis: a practice review of pathophysiology, diagnosis, and treatment', 'Front Neurol', 'review'), '10.3389/fneur.2022.1049850'),
  doi(lit(MIG16, 'Mignarri A, et al.', 2016, 'Evaluation of cholesterol metabolism in cerebrotendinous xanthomatosis', 'J Inherit Metab Dis'), '10.1007/S10545-015-9873-1'),
  doi(lit(MIG12, 'Mignarri A, et al.', 2012, 'Cerebrotendinous xanthomatosis with progressive cerebellar vacuolation: six-year MRI follow-up', 'Neuroradiology'), '10.1007/S00234-012-1026-8'),
  doi(lit(CATARINO, 'Catarino CB, et al.', 2018, 'Brain diffusion tensor imaging changes in cerebrotendinous xanthomatosis reversed with treatment', 'J Neurol'), '10.1007/S00415-017-8711-9'),
  doi(lit(WATTS, 'Watts GF, et al.', 1996, 'Cerebrotendinous xanthomatosis: a family study of sterol 27-hydroxylase mutations and pharmacotherapy', 'QJM'), '10.1093/OXFORDJOURNALS.QJMED.A030138'),
  doi(lit(DEGRASSI, 'Degrassi I, et al.', 2020, 'Early treatment with chenodeoxycholic acid in cerebrotendinous xanthomatosis presenting as neonatal cholestasis', 'Front Pediatr'), '10.3389/FPED.2020.00382'),
  doi(lit(LUMBRERAS, 'Lumbreras S, et al.', 2021, 'Gene supplementation of CYP27A1 in the liver restores bile acid metabolism in a mouse model of cerebrotendinous xanthomatosis', 'Mol Ther Methods Clin Dev'), '10.1016/J.OMTM.2021.07.002'),
  doi(lit(AHMUD, 'Ahmud MW, et al.', 2025, 'Ctexli approved for cerebrotendinous xanthomatosis', 'Int J Basic Clin Pharmacol'), '10.18203/2319-2003.ijbcp20251852'),
  doi(lit(JALAL, 'Jalal L, et al.', 2025, 'FDA approves first targeted treatment for cerebrotendinous xanthomatosis', 'Health Sci Rep'), '10.1002/hsr2.71549'),
  doi(lit(DEBARBER, 'DeBarber AE, et al.', 2024, 'RESTORE: phase 3 trial of chenodeoxycholic acid in adults with cerebrotendinous xanthomatosis (abstract)', 'Genet Med Open'), '10.1016/j.gimo.2024.101039'),
  doi(lit(MANDRILE, 'Mandrile G, et al.', 2014, 'Cerebrotendinous xanthomatosis: recurrence of the CYP27A1 p.Arg479Cys mutation in Sardinia', 'Neurol Sci'), '10.1007/S10072-014-1696-6'),
  doi(lit(VARGA, 'Varga VE, et al.', 2014, 'Laboratory diagnosis of cerebrotendinous xanthomatosis', 'Orv Hetil'), '10.1556/OH.2014.29887'),
  doi(lit(YADAV, 'Yadav RK, et al.', 2014, 'Cerebrotendinous xanthomatosis presented as neuropsychiatric manifestation', 'J Evol Med Dent Sci'), '10.14260/JEMDS/2014/3563'),
]

export const ctxGenes: Gene[] = [
  {
    symbol: 'CYP27A1',
    name: 'Cytochrome P450 family 27 subfamily A member 1',
    protein: 'Sterol 27-hydroxylase (CYP27A1; EC 1.14.15.15), mitochondrial cytochrome P450, 531 aa',
    location: '2q35',
    function:
      'C-27 hydroxylation of cholesterol and bile acid intermediates in primary bile acid (CDCA, cholic acid) synthesis; generates 27-hydroxycholesterol in peripheral tissues.',
    pathway: 'Primary bile acid synthesis (neutral and acidic pathways)',
    transcript: 'NM_000784.4',
    uniprot: 'P33240',
    ncbiGene: '1593',
    variantTypes: ['Missense', 'Nonsense', 'Splice-site', '>100 distinct pathogenic variants'],
    diseases: ['ctx'],
    ev: 'established',
    src: [NIE, KOYAMA, 'omim:213700', ...geneDb('CYP27A1')],
  },
]

export const ctx: Disease = {
  id: 'ctx',
  name: 'Cerebrotendinous Xanthomatosis',
  short: 'CTX',
  lastUpdated: '2026-10-08',
  color: '#c78a1f',
  synonyms: [
    'Sterol 27-hydroxylase deficiency',
    'Cerebrotendinous cholesterinosis',
    'Cholestanol storage disease',
    'Van Bogaert-Scherer-Epstein disease (historical)',
  ],
  classification: 'Inborn error of bile acid synthesis / lipid storage disorder with secondary leukodystrophy',
  inheritance: 'Autosomal recessive',
  genes: ['CYP27A1'],
  tagline: 'Loss of sterol 27-hydroxylase → CDCA deficiency → cholestanol and bile alcohol deposition in brain, tendons and lens; treatable with CDCA.',
  identifiers: [
    { label: 'OMIM', value: '213700', url: 'https://www.omim.org/entry/213700' },
    { label: 'Orphanet', value: 'ORPHA:909', url: 'https://www.orpha.net/en/disease/detail/909' },
    { label: 'MONDO', value: 'MONDO:0007997', url: 'https://monarchinitiative.org/MONDO:0007997' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function CYP27A1 variants abolish mitochondrial sterol 27-hydroxylase activity.', ev: 'established', src: [NIE, KOYAMA, 'omim:213700'] },
    { label: 'Hallmark metabolites', text: 'Elevated plasma cholestanol and urinary bile alcohol glucuronides; low or absent 27-hydroxycholesterol.', ev: 'established', src: [MIG16, VARGA] },
    { label: 'Core pathology', text: 'Cholestanol and cholesterol deposition in cerebellar white matter, dentate nuclei, tendons, lens and vessel walls.', ev: 'established', src: [NIE, KOYAMA] },
    { label: 'Treatability', text: 'One of few leukodystrophies with an approved disease-modifying therapy (CDCA; Ctexli approved by FDA in 2025).', ev: 'established', src: [AHMUD, JALAL, FDA] },
  ],
  clinical: [
    { label: 'Systemic features', text: 'Chronic infantile diarrhoea, juvenile bilateral cataracts and tendon xanthomas (especially Achilles).', ev: 'established', src: [NIE, KOYAMA] },
    { label: 'Neurological features', text: 'Cerebellar ataxia, spastic paraparesis, cognitive decline, epilepsy and peripheral neuropathy.', ev: 'established', src: [NIE, KOYAMA, NOBREGA] },
    { label: 'Neuropsychiatric features', text: 'Psychosis and mood disorders; psychosis can be the presenting feature.', ev: 'strong', why: 'Documented in reviews and case reports.', src: [NOBREGA, YADAV] },
    { label: 'Timeline', text: 'Diarrhoea at 0–2 years, cataracts in childhood, xanthomas in the 2nd–3rd decade, neurological decline in the 2nd–4th decade.', ev: 'established', src: [NIE] },
    { label: 'Other features', text: 'Osteoporosis and premature atherosclerosis add to disease burden; neonatal cholestasis is a rare early presentation.', ev: 'strong', src: [KOYAMA, DEGRASSI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Estimated <5 per 100,000; true prevalence unknown because of under-diagnosis.', ev: 'strong', why: 'Estimates from reviews rather than population screening.', src: [NIE, 'orpha:909'] },
    { label: 'Diagnostic delay', text: 'Mean ~16 years from symptom onset; mean age at diagnosis ~35 years; often misdiagnosed as MS, hereditary ataxia or psychiatric disease.', ev: 'strong', src: [NIE, KOYAMA] },
    { label: 'Founder variants', text: 'p.Arg479Cys recurs in Sardinia; p.Arg362Cys is relatively common in Caucasian patients; Moroccan Jewish founder alleles reported.', ev: 'strong', src: [MANDRILE, NIE] },
    { label: 'Distribution', text: 'Pan-ethnic: Europe, Middle East, Japan, Israel, the Americas, India and China.', ev: 'established', src: [KOYAMA, NOBREGA] },
  ],
  variants: [
    { id: 'ctx-r362c', disease: 'ctx', gene: 'CYP27A1', transcript: 'NM_000784.4', hgvsc: 'c.1084C>T', hgvsp: 'p.(Arg362Cys)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Substitution in the heme-binding region; loss of activity', clinvar: 'Verify in ClinVar', popFreq: 'Among the most common alleles in European / Caucasian patients', phenotype: 'Classic CTX', functional: 'Not specified in source', ev: 'established', src: [NIE, 'db:clinvar:CYP27A1'] },
    { id: 'ctx-r479c', disease: 'ctx', gene: 'CYP27A1', transcript: 'NM_000784.4', hgvsc: 'c.1435C>T', hgvsp: 'p.(Arg479Cys)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Loss of sterol 27-hydroxylase activity', clinvar: 'Verify in ClinVar', popFreq: 'Sardinian founder allele', phenotype: 'Classic CTX with cerebellar/pyramidal signs and xanthomas (homozygous)', functional: 'Not specified in source', ev: 'established', src: [MANDRILE, 'db:clinvar:CYP27A1'] },
    { id: 'ctx-r94q', disease: 'ctx', gene: 'CYP27A1', transcript: 'NM_000784.4', hgvsc: 'c.281G>A', hgvsp: 'p.(Arg94Gln)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Loss of sterol 27-hydroxylase activity', clinvar: 'Verify in ClinVar', popFreq: 'UK / European pedigrees', phenotype: 'Classic CTX', functional: 'Not specified in source', ev: 'strong', why: 'Family study; limited independent replication cited.', src: [WATTS, 'db:clinvar:CYP27A1'] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'All confirmed biallelic variants cause CTX; no neurological-only or systemic-only variant class is documented.', ev: 'strong', src: [KOYAMA, NIE] },
    { aspect: 'Severity', finding: 'Neurological severity depends more on age at treatment and untreated duration than on genotype.', ev: 'strong', why: 'Consistent observation across reviews; no formal genotype-stratified cohorts.', src: [KOYAMA] },
    { aspect: 'Progression', finding: 'Large inter- and intrafamilial variability, even among homozygotes for the same variant.', ev: 'emerging', src: [KOYAMA, NIE] },
    { aspect: 'Biomarker levels', finding: 'Biochemical pattern is similar across clinical subtypes and does not predict phenotype.', ev: 'emerging', src: [NIE, KOYAMA] },
    { aspect: 'Survival / outcome', finding: 'Early CDCA (e.g. after neonatal cholestasis) prevents neurological progression; late treatment gives incomplete neurological recovery.', ev: 'strong', why: 'Case reports and series rather than controlled trials.', src: [DEGRASSI, MIG12] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'CYP27A1 (2q35)', detail: 'Biallelic loss-of-function variants.', ev: 'established', src: [NIE] },
    { stage: 'Protein', label: 'Sterol 27-hydroxylase', detail: 'Mitochondrial cytochrome P450 is absent or inactive.', ev: 'established', src: [NIE, 'db:uniprot:CYP27A1'] },
    { stage: 'Molecular function', label: 'CDCA synthesis fails', detail: 'Loss of CDCA feedback de-represses CYP7A1, driving flux through alternative 12α-hydroxylation.', ev: 'established', src: [NIE, KOYAMA] },
    { stage: 'Pathway', label: 'Cholestanol and bile alcohol excess', detail: '7α-hydroxy-4-cholesten-3-one is diverted to cholestanol; bile alcohols are excreted as glucuronides; 27-OHC is lost.', ev: 'established', src: [MIG16, KOYAMA] },
    { stage: 'Cellular consequence', label: 'Myelin and neuronal injury', detail: 'Cholestanol incorporation into myelin, BBB compromise, mitochondrial dysfunction and impaired 27-OHC-mediated cholesterol efflux.', ev: 'strong', src: [KOYAMA, NIE] },
    { stage: 'Phenotype', label: 'Leukodystrophy with systemic xanthomatosis', detail: 'Ataxia, spasticity, cognitive decline, cataracts, tendon xanthomas and diarrhoea.', ev: 'established', src: [NIE, KOYAMA] },
  ],
  relations: [
    { from: ['gene', 'CYP27A1'], to: ['protein', 'Sterol 27-hydroxylase'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: ['db:uniprot:CYP27A1'] },
    { from: ['protein', 'Sterol 27-hydroxylase'], to: ['pathway', 'Primary bile acid synthesis'], label: 'catalyses', ev: 'established', why: 'Core biochemical step in CDCA synthesis.', src: [NIE, KOYAMA] },
    { from: ['pathway', 'Primary bile acid synthesis'], to: ['metabolite', 'Cholestanol'], label: 'block raises', ev: 'established', why: 'Elevated cholestanol is the cardinal diagnostic finding.', src: [MIG16, VARGA] },
    { from: ['pathway', 'Primary bile acid synthesis'], to: ['metabolite', 'Bile alcohol glucuronides'], label: 'block raises', ev: 'established', why: 'Diagnostic urinary marker.', src: [MIG16, DEGRASSI] },
    { from: ['metabolite', 'Cholestanol'], to: ['cell', 'Oligodendrocytes'], label: 'disrupts myelin of', ev: 'strong', why: 'Pathology and mechanistic reviews; direct causal data limited.', src: [KOYAMA, NIE] },
    { from: ['metabolite', 'Cholestanol'], to: ['phenotype', 'Dentate & cerebellar white matter disease'], label: 'deposits in', ev: 'established', why: 'Characteristic MRI and neuropathology.', src: [NIE, MIG12] },
    { from: ['metabolite', 'Cholestanol'], to: ['phenotype', 'Tendon xanthomas & cataract'], label: 'deposits in', ev: 'established', why: 'Consistent systemic findings.', src: [NIE] },
    { from: ['metabolite', 'Cholestanol'], to: ['biomarker', 'Plasma cholestanol'], label: 'measured as', ev: 'established', why: 'Standard diagnostic and monitoring assay.', src: [VARGA, MIG16] },
    { from: ['therapy', 'Chenodiol (CDCA; Ctexli)'], to: ['metabolite', 'Cholestanol'], label: 'normalises', ev: 'established', why: 'Restores CYP7A1 feedback; approved therapy with consistent biochemical response.', src: [KOYAMA, AHMUD, FDA] },
    { from: ['therapy', 'AAV-CYP27A1 liver gene therapy'], to: ['gene', 'CYP27A1'], label: 'restores', ev: 'emerging', why: 'Biochemical rescue in Cyp27a1 knockout mice only.', src: [LUMBRERAS] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Myelin disruption by cholestanol incorporation and impaired membrane fluidity; demyelination with secondary axonal loss.', ev: 'strong', src: [KOYAMA, NIE] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Purkinje cell loss in cerebellar cortex; impaired cholesterol efflux and mitochondrial dysfunction proposed.', ev: 'strong', src: [KOYAMA, NIE] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Reactive astrocytosis in affected white matter.', ev: 'strong', src: [NIE] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Microgliosis in affected white matter.', ev: 'strong', src: [NIE] },
    { cell: 'Vascular / endothelial cells', role: 'secondary', detail: 'Blood-brain barrier disruption proposed to accelerate CNS cholestanol deposition; premature atherosclerosis.', ev: 'emerging', src: [KOYAMA] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Liver is the main site of CYP27A1 expression and bile acid synthesis; deposits in tendons and lens.', ev: 'established', src: [NIE, 'db:hpa:CYP27A1'] },
  ],
  regions: [
    { region: 'Dentate nuclei', finding: 'Bilateral T2/FLAIR hyperintensity; most characteristic finding, may precede symptoms.', src: [NIE, KOYAMA] },
    { region: 'Cerebellar white matter', finding: 'Confluent signal change; progressive vacuolation in some patients despite CDCA.', src: [MIG12] },
    { region: 'Supratentorial white matter', finding: 'Periventricular and deep leukoencephalopathy in a subset.', src: [NIE] },
    { region: 'Corticospinal tracts', finding: 'Reduced fractional anisotropy on DTI, partly reversible with CDCA.', src: [CATARINO] },
    { region: 'Cerebellar & cerebral cortex', finding: 'Atrophy in advanced disease.', src: [NIE] },
  ],
  biomarkers: [
    { name: 'Plasma cholestanol', category: 'Biochemical', significance: 'Cardinal marker; typically 5–10× normal (normal ~1.0–2.5 mg/L).', sample: 'Plasma (fasting)', assay: 'GC-MS or LC-MS/MS', purpose: ['Diagnosis', 'Monitoring', 'Treatment response'], status: 'Established clinical', limitations: 'Normalisation does not guarantee neurological stabilisation in late-treated patients.', ev: 'established', src: [VARGA, MIG16] },
    { name: 'Urine bile alcohol glucuronides', category: 'Biochemical', significance: 'Markedly elevated; reflects aberrant bile acid synthesis.', sample: 'Urine', assay: 'GC-MS', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Specialised laboratories.', ev: 'established', src: [DEGRASSI, MIG16] },
    { name: 'Plasma 7α-hydroxy-4-cholesten-3-one (7α-C4)', category: 'Biochemical', significance: 'Reflects CYP7A1-driven flux; possibly more sensitive to disease activity than cholestanol.', sample: 'Plasma', assay: 'Mass spectrometry', purpose: ['Diagnosis', 'Monitoring'], status: 'Clinical adjunct', limitations: 'Less widely available; thresholds not standardised in source.', ev: 'strong', src: [MIG16] },
    { name: 'Plasma 27-hydroxycholesterol', category: 'Biochemical', significance: 'Low or undetectable, reflecting loss of CYP27A1 activity.', sample: 'Plasma', assay: 'Mass spectrometry', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Interpret in clinical context.', ev: 'established', src: [MIG16] },
    { name: 'Dentate nucleus T2 hyperintensity', category: 'Imaging', significance: 'Highly characteristic MRI sign.', sample: 'In vivo brain', assay: 'MRI (T2/FLAIR)', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'MRI may be normal early.', ev: 'established', src: [NIE, KOYAMA] },
    { name: 'DTI metrics (FA, tract density)', category: 'Imaging', significance: 'Sensitive to early change; partial reversal after CDCA.', sample: 'In vivo brain', assay: 'Diffusion tensor imaging', purpose: ['Monitoring', 'Treatment response'], status: 'Experimental', limitations: 'Single-centre data; not validated as a trial endpoint.', ev: 'emerging', src: [CATARINO] },
    { name: 'Biallelic CYP27A1 variants', category: 'Genetic', significance: 'Definitive confirmation.', sample: 'Blood (DNA)', assay: 'Gene sequencing ± deletion/duplication analysis', purpose: ['Diagnosis', 'Carrier testing'], status: 'Established clinical', limitations: 'Single-variant results need del/dup analysis when biochemistry is typical.', ev: 'established', src: [NIE, 'db:clinvar:CYP27A1'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Chronic infantile diarrhoea, juvenile cataracts, Achilles xanthomas, adult ataxia or spastic paraparesis, early cognitive or psychiatric decline, or neonatal cholestasis.', src: [NIE, KOYAMA, NOBREGA] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Plasma cholestanol, urine bile alcohols, 27-OHC, 7α-C4', detail: 'Elevated cholestanol and bile alcohols with low 27-OHC strongly support CTX.', src: [MIG16, VARGA] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain and spinal MRI (± DTI, MRS)', detail: 'Dentate nucleus signal change, cerebellar white matter disease and vacuolation.', src: [NIE, MIG12] },
    { phase: 'Investigation', category: 'Ancillary', method: 'Slit-lamp, tendon ultrasound, NCS/EMG, neuropsychology, DEXA', detail: 'Cataracts, xanthomas, neuropathy, cognitive profile and osteoporosis.', src: [NIE, KOYAMA] },
    { phase: 'Confirmation', category: 'Genetic', method: 'CYP27A1 sequencing (panel or exome)', detail: 'Biallelic pathogenic variants; del/dup analysis if only one variant found.', src: [NIE, 'db:clinvar:CYP27A1'] },
  ],
  differential: [
    'Multiple sclerosis',
    'Hereditary ataxias (SCA, Friedreich ataxia)',
    'Adult-onset leukodystrophies (ADLD, CSF1R, CLCN2)',
    'Refsum disease (PHYH, PEX7)',
    'Abetalipoproteinaemia',
    'Familial hypercholesterolaemia (xanthomas without cholestanol elevation)',
    'Adult polyglucosan body disease (GBE1)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Reviews contrast the classic multisystem course with atypical presentations; biochemistry is the same in both.',
    forms: [
      { name: 'Typical CTX', onset: 'Infancy (diarrhoea) → childhood (cataracts) → adulthood (neurological)', severity: 'Progressive disability if untreated', progression: 'Stabilises best with early CDCA', genetics: 'Biallelic CYP27A1 variants', markers: '↑ cholestanol, ↑ urine bile alcohols; dentate T2 signal', src: [NIE, KOYAMA] },
      { name: 'Atypical CTX', onset: 'Variable; neonatal cholestasis or neurological onset without classic features', severity: 'Variable', progression: 'Predominantly cognitive/psychiatric, neuropathic or MS-like relapsing courses', genetics: 'Biallelic CYP27A1 variants', markers: 'Same biochemical pattern; MRI may be normal or supratentorial-predominant', src: [DEGRASSI, YADAV, NOBREGA] },
    ],
  },
  management: [
    { category: 'Established disease-modifying', text: 'Oral chenodeoxycholic acid (chenodiol; Ctexli), typically 250 mg three times daily in adults; normalises cholestanol and bile alcohols.', src: [KOYAMA, NOBREGA, AHMUD, FDA] },
    { category: 'Established disease-modifying', text: 'Early initiation (pre-neurological) gives the best outcomes; late treatment yields biochemical but incomplete neurological response.', src: [DEGRASSI, MIG12, KOYAMA] },
    { category: 'Symptomatic', text: 'Statin added to CDCA for additive cholestanol and cholesterol lowering; statin monotherapy is insufficient.', src: [WATTS, KOYAMA] },
    { category: 'Symptomatic', text: 'Cataract surgery; anti-seizure medication; baclofen and physiotherapy for spasticity; neuropathic pain and psychiatric care.', src: [KOYAMA] },
    { category: 'Supportive', text: 'Calcium, vitamin D and bisphosphonates for osteoporosis; cardiovascular risk management.', src: [KOYAMA, 'nord:ctx'] },
    { category: 'Monitoring', text: 'Plasma cholestanol every 6–12 months, periodic urine bile alcohols, liver function on CDCA, annual neurology and periodic MRI.', src: [KOYAMA, MIG16] },
  ],
  therapies: [
    { id: 'ctx-cdca', name: 'Chenodiol (CDCA; Ctexli)', modality: 'Small molecule', target: 'Bile acid pool / CYP7A1 feedback', mechanism: 'Replaces deficient CDCA, restoring CYP7A1 feedback inhibition and suppressing aberrant cholestanol and bile alcohol production.', delivery: 'Oral', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'FDA-approved 2025 (Ctexli)', ev: 'established', why: 'Long clinical experience, phase 3 RESTORE data and regulatory approval.', src: [KOYAMA, AHMUD, JALAL, DEBARBER, FDA] },
    { id: 'ctx-statin', name: 'CDCA + statin combination', modality: 'Small molecule', target: 'HMG-CoA reductase', mechanism: 'Statin adds cholesterol and cholestanol lowering to CDCA.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Case series; no RCT', ev: 'strong', why: 'Additive biochemical benefit in case series; no controlled trial.', src: [WATTS, KOYAMA] },
    { id: 'ctx-udca', name: 'Ursodeoxycholic acid (UDCA)', modality: 'Small molecule', target: 'Bile acid pool', mechanism: 'Alternative bile acid supplementation where CDCA is unavailable.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Case use; no controlled trial', ev: 'emerging', why: 'Less effective than CDCA at normalising CTX biochemistry.', src: [KOYAMA] },
    { id: 'ctx-aav', name: 'AAV-CYP27A1 liver gene therapy', modality: 'Gene therapy', target: 'CYP27A1', mechanism: 'Liver-directed AAV restores hepatocyte sterol 27-hydroxylase activity.', delivery: 'Systemic (liver-directed AAV)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical; no human trial', ev: 'emerging', why: 'Cholestanol normalisation in Cyp27a1 knockout mice; mouse neurological phenotype is milder than human.', src: [LUMBRERAS] },
  ],
  trials: [],
  milestones: [
    { year: 1996, label: 'Family study of CYP27A1 mutations and CDCA + statin pharmacotherapy', stage: 'Early human trials', src: [WATTS] },
    { year: 2020, label: 'Neonatal-cholestasis case treated early with CDCA', stage: 'Approved / standard of care', src: [DEGRASSI] },
    { year: 2021, label: 'AAV-CYP27A1 restores bile acid metabolism in mice', stage: 'Animal studies', src: [LUMBRERAS] },
    { year: 2024, label: 'RESTORE phase 3 CDCA trial results presented', stage: 'Later-stage trials', src: [DEBARBER] },
    { year: 2025, label: 'FDA approves Ctexli (chenodiol) for CTX', stage: 'Approved / standard of care', src: [AHMUD, JALAL, FDA] },
  ],
  gaps: [
    { text: 'Mean ~16-year diagnostic delay; no national newborn screening programme confirmed despite treatability.', ev: 'strong', src: [NIE, DEGRASSI, 'q:ctx:nbs'] },
    { text: 'Cerebellar vacuolation can progress despite biochemical control; mechanism of treatment-resistant neurodegeneration is unclear.', ev: 'emerging', src: [MIG12] },
    { text: 'No validated CSF or fluid biomarker (e.g. NfL thresholds) for neurological monitoring.', ev: 'unknown', src: [KOYAMA] },
    { text: 'RESTORE trial NCT identifier and full publication not confirmed; registry verification needed.', ev: 'unknown', src: [DEBARBER, 'reg:ctx:ctgov'] },
    { text: 'Genotype-phenotype correlations are not established.', ev: 'emerging', src: [KOYAMA] },
  ],
}
