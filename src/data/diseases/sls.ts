import type { Disease, Gene, Source } from '../types'
import { geneDb, genereviews, lit, nord, omim, orpha, pmid, query } from '../cite'

/** Pin a literature source to its DOI landing page. */
const doi = (s: Source, d: string): Source => ({ ...s, url: `https://doi.org/${d}` })

const GR = 'gr:sls'
const RIZZO07 = 'lit:sls:rizzo2007'
const RIZZO16 = 'lit:sls:rizzo2016'
const BINDU = 'lit:sls:bindu2020'
const GANEMO = 'lit:sls:ganemo2009'
const ABDEL = 'lit:sls:abdelhamid2019'
const CHO = 'lit:sls:cho2018'
const FOUZDAR = 'lit:sls:fouzdarjain2019'
const AUADA = 'lit:sls:auada2006'
const DIDONA = 'lit:sls:didona2007'
const AMR = 'lit:sls:amr2019'
const GLOERICH = 'lit:sls:gloerich2006'
const HAUG = 'lit:sls:haug2006'
const FERNANDEZ = 'lit:sls:fernandez2022'
const SARRET = 'lit:sls:sarret2017'
const YAMAGUCHI = 'lit:sls:yamaguchi2024'
const TAVASOLI = 'lit:sls:tavasoli2016'
const PAPA = 'lit:sls:papathemeli2017'
const TANTELES = 'lit:sls:tanteles2015'
const SINGH = 'lit:sls:singh2002'

export const slsSources: Source[] = [
  genereviews('sls', 'NBK1146', 'Sjögren-Larsson Syndrome'),
  omim('270200', 'Sjögren-Larsson syndrome'),
  orpha('816', 'Sjögren-Larsson syndrome'),
  nord('sls', 'sjogren-larsson-syndrome', 'Sjögren-Larsson Syndrome'),
  {
    id: 'reg:sls:ctgov',
    title: 'ClinicalTrials.gov search: Sjögren-Larsson syndrome',
    venue: 'ClinicalTrials.gov',
    kind: 'registry',
    url: 'https://clinicaltrials.gov/search?term=Sjogren-Larsson+syndrome',
  },
  query('q:sls:mct', 'Dietary fat modification in Sjögren-Larsson syndrome', 'Sjogren-Larsson syndrome diet medium-chain triglyceride'),
  pmid(RIZZO07, '16996289', 'Rizzo WB', 2007, 'Sjögren-Larsson syndrome: molecular genetics and biochemical pathogenesis of fatty aldehyde dehydrogenase deficiency', 'Mol Genet Metab', 'review'),
  doi(lit(RIZZO16, 'Rizzo WB', 2016, 'Genetics and prospective therapeutic targets for Sjögren-Larsson syndrome', 'Expert Opin Orphan Drugs', 'review'), '10.1517/21678707.2016.1154453'),
  doi(lit(BINDU, 'Bindu PS', 2020, 'Sjogren-Larsson syndrome: mechanisms and management', 'Appl Clin Genet', 'review'), '10.2147/TACG.S193969'),
  doi(lit(GANEMO, 'Gånemo A, Jagell S, Vahlquist A', 2009, 'Sjögren-Larsson syndrome: a study of clinical symptoms and dermatological treatment in 34 Swedish patients', 'Acta Derm Venereol'), '10.2340/00015555-0561'),
  doi(lit(ABDEL, 'Abdelhamid M, Issa MY, Elbendary HM, et al.', 2019, 'Phenotypic and mutational spectrum of thirty-five patients with Sjögren-Larsson syndrome: identification of eleven novel ALDH3A2 mutations and founder effects', 'J Hum Genet'), '10.1038/S10038-019-0637-X'),
  doi(lit(CHO, 'Cho KH, Shim SH, Kim MY', 2018, 'Clinical, biochemical, and genetic aspects of Sjögren-Larsson syndrome', 'Clin Genet', 'review'), '10.1111/CGE.13058'),
  doi(lit(FOUZDAR, 'Fouzdar-Jain S, Suh DW, Rizzo WB', 2019, 'Sjögren-Larsson syndrome: a complex metabolic disease with a distinctive ocular phenotype', 'Ophthalmic Genet'), '10.1080/13816810.2019.1660379'),
  doi(lit(AUADA, 'Auada MP, Puzzi MB, Cintra ML, et al.', 2006, 'Sjögren-Larsson syndrome in Brazil is caused by a common c.1108-1G>C splice-site mutation in the ALDH3A2 gene', 'Br J Dermatol'), '10.1111/J.1365-2133.2006.07135.X'),
  doi(lit(DIDONA, 'Didona B, Codispoti A, Bertini E, et al.', 2007, 'Novel and recurrent ALDH3A2 mutations in Italian patients with Sjögren-Larsson syndrome', 'J Hum Genet'), '10.1007/S10038-007-0180-Z'),
  doi(lit(AMR, 'Amr K, El-Bassyouni HT, Ismail S, et al.', 2019, 'Genetic assessment of ten Egyptian patients with Sjögren-Larsson syndrome', 'Arch Dermatol Res'), '10.1007/S00403-019-01953-6'),
  pmid(GLOERICH, '16837225', 'Gloerich J, Ijlst L, Wanders RJ, Ferdinandusse S', 2006, 'Bezafibrate induces FALDH in human fibroblasts; implications for Sjögren-Larsson syndrome', 'Mol Genet Metab'),
  doi(lit(HAUG, 'Haug S, Braun-Falco M', 2006, 'Restoration of fatty aldehyde dehydrogenase deficiency in Sjögren-Larsson syndrome', 'Gene Ther'), '10.1038/SJ.GT.3302743'),
  doi(lit(FERNANDEZ, 'Fernández J', 2022, 'Sjögren-Larsson syndrome: a biochemical rationale for using aldehyde-reactive therapeutic agents', 'Mol Genet Metab Rep'), '10.1016/j.ymgmr.2021.100839'),
  doi(lit(SARRET, 'Sarret C, Pichard S, Afenjar A, Boespflug-Tanguy O', 2017, "Lack of long-term neurologic efficacy of zileuton in Sjögren-Larsson's syndrome", 'Neuropediatrics'), '10.1055/S-0037-1601856'),
  doi(lit(YAMAGUCHI, 'Yamaguchi Y, Okuno H, Tokuoka SM, et al.', 2024, 'Accumulation of ether phospholipids in induced pluripotent stem cells and oligodendrocyte-lineage cells established from patients with Sjögren-Larsson syndrome', 'Congenit Anom'), '10.1111/cga.12587'),
  doi(lit(TAVASOLI, 'Tavasoli A, Sayyahfar S, Behnam B', 2016, 'A rare case of Sjogren-Larsson syndrome with recurrent pneumonia and asthma', 'Korean J Pediatr'), '10.3345/KJP.2016.59.6.276'),
  doi(lit(PAPA, 'Papathemeli D, Mataftsi A, Patsatsi A, et al.', 2017, 'Atypical presentation of Sjögren-Larsson syndrome', 'Case Rep Pediatr'), '10.1155/2017/7981750'),
  doi(lit(TANTELES, 'Tanteles GA, Nicolaou M, Patsia N, et al.', 2015, 'A rare cause of pruritic ichthyosis: Sjögren-Larsson syndrome in the first reported patients of Cypriot descent', 'Eur J Dermatol'), '10.1684/EJD.2015.2615'),
  doi(lit(SINGH, 'Singh AR, Singh JR, Kaur H, et al.', 2002, 'Genetics of Sjögren Larsson syndrome and a case report from India', 'Int J Hum Genet'), '10.1080/09723757.2002.11885810'),
]

export const slsGenes: Gene[] = [
  {
    symbol: 'ALDH3A2',
    name: 'Aldehyde dehydrogenase 3 family member A2',
    protein: 'Fatty aldehyde dehydrogenase (FALDH), microsomal (ER-associated), 485 aa',
    location: '17p11.2',
    function:
      'NAD+-dependent oxidation of medium- and long-chain (C8–C20) fatty aldehydes to fatty acids, from fatty alcohol, ether glycerolipid, LTB4 and sphingolipid metabolism.',
    pathway: 'Fatty alcohol cycle; ether lipid (plasmalogen) catabolism; LTB4 omega-oxidation',
    uniprot: 'P51648',
    ncbiGene: '224',
    variantTypes: ['Missense (most common)', 'Nonsense', 'Frameshift indels', 'Splice-site (incl. intronic)', 'Small in-frame deletions'],
    diseases: ['sls'],
    ev: 'established',
    src: [RIZZO07, GR, 'omim:270200', ...geneDb('ALDH3A2')],
  },
]

export const sls: Disease = {
  id: 'sls',
  name: 'Sjögren-Larsson Syndrome',
  short: 'SLS',
  lastUpdated: '2026-10-08',
  color: '#5b6bbf',
  synonyms: [
    'Fatty aldehyde dehydrogenase (FALDH) deficiency',
    'Ichthyosis, spasticity and oligophrenia syndrome',
  ],
  classification: 'Neurocutaneous leukodystrophy; inborn error of fatty aldehyde / ether lipid metabolism',
  inheritance: 'Autosomal recessive',
  genes: ['ALDH3A2'],
  tagline: 'Loss of fatty aldehyde dehydrogenase → fatty aldehyde and ether lipid accumulation → ichthyosis, spasticity and white matter disease.',
  identifiers: [
    { label: 'OMIM', value: '270200', url: 'https://www.omim.org/entry/270200' },
    { label: 'Orphanet', value: 'ORPHA:816', url: 'https://www.orpha.net/en/disease/detail/816' },
    { label: 'GeneReviews', value: 'NBK1146', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1146/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=Sjogren-Larsson%20syndrome' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function ALDH3A2 variants cause deficient fatty aldehyde dehydrogenase (FALDH).', ev: 'established', src: [RIZZO07, GR, 'omim:270200'] },
    { label: 'Clinical triad', text: 'Congenital pruritic ichthyosis, spastic di/tetraplegia and intellectual disability.', ev: 'established', src: [BINDU, GANEMO] },
    { label: 'Hallmark signs', text: 'Perifoveal glistening white dots and an abnormal white matter lipid peak at ~1.3 ppm on MRS.', ev: 'strong', why: 'Highly characteristic when present but not universal.', src: [FOUZDAR, BINDU] },
    { label: 'Primary cell types', text: 'Keratinocytes (skin) and oligodendrocyte-lineage cells (myelin), with retinal involvement.', ev: 'emerging', why: 'Oligodendroglial involvement supported by iPSC models; human neuropathology limited.', src: [YAMAGUCHI, RIZZO07] },
  ],
  clinical: [
    { label: 'Skin', text: 'Generalised lamellar or collodion-type ichthyosis from birth with prominent pruritus.', ev: 'established', src: [GANEMO] },
    { label: 'Motor', text: 'Lower-limb predominant spasticity in the first 1–2 years with progressive contractures; most patients are wheelchair-bound or severely limited.', ev: 'established', src: [GANEMO, CHO] },
    { label: 'Cognition & speech', text: 'Mild to moderate intellectual disability; speech often disproportionately impaired; some patients have near-normal intelligence.', ev: 'established', src: [GANEMO] },
    { label: 'Eyes', text: 'Perifoveal crystalline maculopathy in most patients; photophobia is common.', ev: 'established', src: [FOUZDAR] },
    { label: 'Other features', text: 'Epilepsy in ~40%; recurrent pneumonia or asthma reported in some patients.', ev: 'emerging', why: 'Seizure frequency from one cohort; respiratory features from case reports.', src: [GANEMO, TAVASOLI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Worldwide <1 per 1,000,000; ~0.6 per 100,000 in Sweden and ~4 per 100,000 in Västerbotten.', ev: 'established', why: 'Swedish figures well established; global estimate approximate.', src: [RIZZO07, GANEMO, 'orpha:816'] },
    { label: 'Founder effects', text: 'Swedish founder allele; c.1108-1G>C founder allele in Brazil; local recurrent alleles in an Egyptian cohort.', ev: 'established', src: [AUADA, ABDEL, GANEMO] },
    { label: 'Distribution', text: 'Reported in European, Middle Eastern, North African, South and East Asian and Latin American populations.', ev: 'established', src: [ABDEL, AUADA, DIDONA, TANTELES, SINGH] },
    { label: 'Sex distribution', text: 'Equal sex distribution (autosomal recessive).', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'sls-c1108', disease: 'sls', gene: 'ALDH3A2', transcript: 'Not stated in source', hgvsc: 'c.1108-1G>C', build: 'Not stated', type: 'Splice-site', consequence: 'Canonical acceptor splice disruption (intron 8)', clinvar: 'Verify in ClinVar', popFreq: 'Majority of alleles in Brazilian patients (founder)', phenotype: 'Typical SLS', functional: 'Not specified in source', ev: 'established', why: 'Founder allele with consistent findings across a national cohort.', src: [AUADA, 'db:clinvar:ALDH3A2'] },
    { id: 'sls-c798', disease: 'sls', gene: 'ALDH3A2', transcript: 'Not stated in source', hgvsc: 'c.798+5G>A', build: 'Not stated', type: 'Splice-site', consequence: 'Donor splice-region change', clinvar: 'Verify in ClinVar', popFreq: 'Recurrent in an Egyptian cohort', phenotype: 'SLS', functional: 'Not specified in source', ev: 'strong', why: 'Single cohort with recurrent alleles.', src: [ABDEL, 'db:clinvar:ALDH3A2'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Alleles with measurable residual FALDH activity may associate with milder disease, but this is not consistent across cohorts.', ev: 'emerging', why: 'Allelic heterogeneity and private variants limit analysis.', src: [GR, CHO] },
    { aspect: 'Clinical phenotype', finding: 'Normal intelligence, isolated ichthyosis or later neurological onset reported, often with one milder allele.', ev: 'emerging', src: [PAPA, GANEMO] },
    { aspect: 'Progression', finding: 'Marked intrafamilial variability with identical variants suggests modifying factors.', ev: 'emerging', src: [GANEMO, AMR] },
    { aspect: 'Clinical phenotype', finding: 'Absence of retinal glistening dots in a minority is not explained by genotype.', ev: 'emerging', src: [AMR, ABDEL] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based outcome predictor.', ev: 'unknown', src: [CHO] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'ALDH3A2 (17p11.2)', detail: 'Biallelic loss-of-function variants (>70 reported).', ev: 'established', src: [RIZZO07, ABDEL] },
    { stage: 'Protein', label: 'Fatty aldehyde dehydrogenase', detail: 'ER-associated FALDH is absent or severely reduced.', ev: 'established', src: [RIZZO07, 'db:uniprot:ALDH3A2'] },
    { stage: 'Molecular function', label: 'Fatty aldehyde oxidation fails', detail: 'C8–C20 aldehydes from the fatty alcohol cycle, plasmalogen catabolism, sphingolipids and LTB4 are not oxidised.', ev: 'established', src: [RIZZO07] },
    { stage: 'Pathway', label: 'Lipid and LTB4 accumulation', detail: 'Fatty aldehydes, fatty alcohols and ether phospholipids accumulate; LTB4 clearance is impaired.', ev: 'strong', src: [RIZZO07, YAMAGUCHI, TAVASOLI] },
    { stage: 'Cellular consequence', label: 'Membrane disruption', detail: 'Aldehyde-PE Schiff-base adducts and abnormal lipids disrupt stratum corneum lamellae and myelin.', ev: 'strong', src: [FERNANDEZ, YAMAGUCHI, BINDU] },
    { stage: 'Phenotype', label: 'Neurocutaneous leukodystrophy', detail: 'Ichthyosis, spastic di/tetraplegia, intellectual disability and crystalline maculopathy.', ev: 'established', src: [BINDU, GANEMO] },
  ],
  relations: [
    { from: ['gene', 'ALDH3A2'], to: ['protein', 'Fatty aldehyde dehydrogenase'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: ['db:uniprot:ALDH3A2'] },
    { from: ['protein', 'Fatty aldehyde dehydrogenase'], to: ['metabolite', 'Fatty aldehydes / alcohols'], label: 'deficiency raises', ev: 'established', why: 'Core biochemical defect.', src: [RIZZO07] },
    { from: ['metabolite', 'Fatty aldehydes / alcohols'], to: ['metabolite', 'Ether phospholipids'], label: 'leads to accumulation of', ev: 'emerging', why: 'Shown in patient iPSC-derived oligodendrocyte-lineage cells.', src: [YAMAGUCHI] },
    { from: ['metabolite', 'Ether phospholipids'], to: ['cell', 'Oligodendrocytes'], label: 'impairs', ev: 'emerging', why: 'Cell-model data; human neuropathology limited.', src: [YAMAGUCHI] },
    { from: ['protein', 'Fatty aldehyde dehydrogenase'], to: ['metabolite', 'Leukotriene B4'], label: 'deficiency raises', ev: 'strong', why: 'FALDH oxidises the LTB4 omega-aldehyde; elevated LTB4 reported.', src: [RIZZO07, TAVASOLI] },
    { from: ['metabolite', 'Fatty aldehydes / alcohols'], to: ['phenotype', 'Ichthyosis'], label: 'disrupts skin barrier', ev: 'strong', why: 'Biochemical and dermatological studies.', src: [RIZZO07, GANEMO] },
    { from: ['metabolite', 'Fatty aldehydes / alcohols'], to: ['biomarker', 'MRS lipid peak (1.3 ppm)'], label: 'detected as', ev: 'strong', why: 'MRS peak reflects abnormal white matter lipids.', src: [BINDU] },
    { from: ['therapy', 'Zileuton (5-lipoxygenase inhibitor)'], to: ['metabolite', 'Leukotriene B4'], label: 'reduces', ev: 'controversial', why: 'No long-term neurological efficacy in clinical reports.', src: [SARRET] },
    { from: ['therapy', 'ADX-102 (aldehyde trap)'], to: ['metabolite', 'Fatty aldehydes / alcohols'], label: 'traps', ev: 'emerging', why: 'Cell-model data only.', src: [FERNANDEZ] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Ether phospholipid accumulation in patient iPSC oligodendrocyte-lineage cells; impaired myelin synthesis and maintenance.', ev: 'emerging', src: [YAMAGUCHI, BINDU] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Keratinocytes: lipid accumulation disrupts lamellar body processing, causing ichthyosis.', ev: 'established', src: [RIZZO07, GANEMO] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'LTB4-driven inflammation is proposed to contribute to skin and possibly CNS disease.', ev: 'proposed', src: [TAVASOLI, SARRET] },
  ],
  regions: [
    { region: 'Periventricular & deep white matter', finding: 'Symmetric confluent T2/FLAIR hyperintensity, often posterior / parieto-occipital predominant.', src: [BINDU] },
    { region: 'White matter (MRS)', finding: 'Abnormal lipid peaks at 1.3 and 0.9 ppm.', src: [BINDU] },
    { region: 'Cortex & basal ganglia', finding: 'Generally preserved early; atrophy in some older patients.', src: [BINDU, AMR] },
    { region: 'Retina (perifoveal)', finding: 'Glistening white dots; cellular basis (Müller or ganglion cells) not established.', src: [FOUZDAR] },
  ],
  biomarkers: [
    { name: 'FALDH activity (fibroblasts)', category: 'Enzymatic', significance: 'Absent or severely reduced activity confirms the biochemical defect.', sample: 'Cultured skin fibroblasts (also amniocytes / chorionic villi)', assay: 'FALDH enzyme assay', purpose: ['Diagnosis', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Leukocyte assay is unreliable due to other aldehyde dehydrogenases.', ev: 'established', src: [GR, HAUG, GLOERICH] },
    { name: 'MRS white matter lipid peak (1.3 ppm)', category: 'Imaging', significance: 'Near-pathognomonic when present.', sample: 'In vivo brain', assay: 'Long-echo proton MRS', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Not present in all patients.', ev: 'strong', src: [BINDU] },
    { name: 'White matter leukoencephalopathy (MRI)', category: 'Imaging', significance: 'Supports diagnosis; less specific than MRS.', sample: 'In vivo brain', assay: 'MRI (T2/FLAIR)', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Non-specific in isolation.', ev: 'established', src: [BINDU] },
    { name: 'Perifoveal glistening dots', category: 'Imaging', significance: 'Pathognomonic retinal sign.', sample: 'Retina', assay: 'Fundoscopy', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Absent in a minority.', ev: 'established', src: [FOUZDAR] },
    { name: 'Fatty alcohols / aldehydes', category: 'Biochemical', significance: 'Direct readout of the metabolic block.', sample: 'Tissue, plasma or patient cells', assay: 'Research lipid analysis', purpose: ['Research'], status: 'Experimental', limitations: 'Not standardised as a clinical assay.', ev: 'emerging', src: [RIZZO07] },
    { name: 'Ether phospholipids (lipidomics)', category: 'Biochemical', significance: 'Disease-relevant cellular phenotype.', sample: 'iPSC-derived cells', assay: 'Lipidomic profiling', purpose: ['Research'], status: 'Experimental', limitations: 'Cell-model only.', ev: 'emerging', src: [YAMAGUCHI] },
    { name: 'Urinary LTB4 metabolites', category: 'Biochemical', significance: 'Elevated LTB4 underlies the zileuton rationale.', sample: 'Urine', assay: 'Not standardised', purpose: ['Research'], status: 'Experimental', limitations: 'No validated assay or normative ranges.', ev: 'unknown', src: [RIZZO07, SARRET] },
    { name: 'Biallelic ALDH3A2 variants', category: 'Genetic', significance: 'Definitive diagnosis; enables family testing.', sample: 'Blood (DNA)', assay: 'Sequencing of coding exons and splice sites; CNV analysis', purpose: ['Diagnosis', 'Carrier testing', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Promoter or deep intronic variants may be missed.', ev: 'established', src: [ABDEL, GR] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant or child with congenital ichthyosis plus spasticity and developmental delay.', src: [BINDU, GR] },
    { phase: 'Investigation', category: 'Ophthalmology', method: 'Fundoscopy', detail: 'Perifoveal glistening white dots.', src: [FOUZDAR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI with proton MRS', detail: 'Periventricular / deep white matter signal with a 1.3 ppm lipid peak.', src: [BINDU] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Metabolic screening', detail: 'Exclude other leukodystrophies and metabolic disorders.', src: [BINDU, GR] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'FALDH activity in cultured fibroblasts', detail: 'Absent or markedly reduced activity (3 mm punch biopsy).', src: [GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'ALDH3A2 sequencing / leukodystrophy panel', detail: 'Biallelic variants; add promoter, deep intronic and CNV analysis if negative.', src: [ABDEL, GR, 'db:clinvar:ALDH3A2'] },
  ],
  differential: [
    'Neutral lipid storage disease with ichthyosis (ABHD5)',
    'Refsum disease (PHYH)',
    'Conradi-Hünermann-Happle syndrome',
    'Hypomyelinating leukodystrophies without ichthyosis (PMD, PMLD, POLR3)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Typical SLS is well characterised; milder or atypical forms come from small series and single case reports.',
    forms: [
      { name: 'Typical SLS', onset: 'Birth (ichthyosis); spasticity in first 1–2 years', severity: 'Severe motor disability; mild-moderate ID', progression: 'Progressive contractures; wheelchair use in majority', genetics: 'Biallelic null or severe alleles', markers: 'FALDH <5% residual; MRS 1.3 ppm peak; glistening dots', src: [GANEMO, BINDU, FOUZDAR] },
      { name: 'Atypical / mild SLS', onset: 'Variable; ichthyosis may be late or partial', severity: 'Mild spasticity; preserved ambulation; normal or near-normal cognition', progression: 'Slower', genetics: 'Compound heterozygote with a partial-function allele', markers: 'MRS peak present; milder MRI lesions; dots may be absent', src: [PAPA, AMR] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Emollients several times daily, topical keratolytics (urea, lactic acid, propylene glycol) and antipruritics.', src: [GANEMO, BINDU] },
    { category: 'Symptomatic', text: 'Oral acitretin for severe ichthyosis in older patients; does not affect neurological features.', src: [GANEMO] },
    { category: 'Symptomatic', text: 'Spasticity: physiotherapy, orthoses, oral or intrathecal baclofen, botulinum toxin; anti-seizure medication as needed.', src: [BINDU, CHO] },
    { category: 'Supportive', text: 'Speech therapy and AAC, special education, occupational therapy and orthopaedic care (hips, scoliosis).', src: [BINDU, 'nord:sls'] },
    { category: 'Monitoring', text: 'Neurology, dermatology and ophthalmology review every 6–12 months; spine radiographs in non-ambulant patients; growth monitoring.', src: [BINDU, FOUZDAR] },
    { category: 'Supportive', text: 'Genetic counselling (25% recurrence); prenatal and preimplantation testing available.', src: [GR] },
  ],
  therapies: [
    { id: 'sls-zileuton', name: 'Zileuton (5-lipoxygenase inhibitor)', modality: 'Small molecule', target: 'LTB4 synthesis (5-lipoxygenase)', mechanism: 'Reduce elevated LTB4 and inflammation.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Small case series; no controlled trial', ev: 'controversial', why: 'Short-term symptomatic improvement in some patients but no long-term neurological efficacy.', src: [SARRET, CHO] },
    { id: 'sls-adx102', name: 'ADX-102 (aldehyde trap)', modality: 'Small molecule', target: 'Reactive fatty aldehydes', mechanism: 'Traps aldehydes, reducing toxic N-alkyl-PE adducts.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Preclinical; no human trial', ev: 'emerging', why: 'Protects FALDH-deficient cell models.', src: [FERNANDEZ] },
    { id: 'sls-bezafibrate', name: 'Bezafibrate (PPAR agonist)', modality: 'Small molecule', target: 'ALDH3A2 expression', mechanism: 'PPAR activation induces FALDH in cells with residual-activity alleles.', delivery: 'Oral (proposed)', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro; allele-dependent', ev: 'emerging', why: 'FALDH induction in patient fibroblasts only.', src: [GLOERICH] },
    { id: 'sls-aav', name: 'AAV-ALDH3A2 gene therapy', modality: 'Gene therapy', target: 'ALDH3A2', mechanism: 'Viral delivery restores FALDH activity.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro proof of concept; no animal data', ev: 'emerging', why: 'Restored activity in patient keratinocytes in vitro.', src: [HAUG] },
    { id: 'sls-diet', name: 'Dietary fat modification (MCT)', modality: 'Other', target: 'Substrate load', mechanism: 'Reduce substrate for FALDH.', delivery: 'Oral / dietary', stage: 'Discovery', evidenceBase: 'Human', status: 'Discussed; no trial evidence', ev: 'unknown', why: 'No clinical trial evidence identified.', src: ['q:sls:mct'] },
  ],
  trials: [],
  milestones: [
    { year: 1957, label: 'Syndrome described by Sjögren and Larsson', stage: 'Discovery', src: [BINDU] },
    { year: 2006, label: 'AAV-FALDH restores activity in patient keratinocytes', stage: 'Preclinical (cellular)', src: [HAUG] },
    { year: 2006, label: 'Bezafibrate induces FALDH in patient fibroblasts', stage: 'Preclinical (cellular)', src: [GLOERICH] },
    { year: 2017, label: 'Zileuton shows no long-term neurological efficacy', stage: 'Early human trials', src: [SARRET] },
    { year: 2022, label: 'Rationale for aldehyde-reactive agents (ADX-102)', stage: 'Preclinical (cellular)', src: [FERNANDEZ] },
    { year: 2024, label: 'Patient iPSC oligodendrocyte-lineage model', stage: 'Preclinical (cellular)', src: [YAMAGUCHI] },
  ],
  gaps: [
    { text: 'No registered interventional trial and no animal model or IND-enabling studies reported.', ev: 'unknown', src: ['reg:sls:ctgov', RIZZO16] },
    { text: 'No validated biomarker panel (lipids, LTB4 metabolites, imaging endpoints) for trials.', ev: 'unknown', src: [RIZZO07, BINDU] },
    { text: 'Natural history infrastructure is lacking; human neuropathology is limited.', ev: 'unknown', src: [BINDU] },
    { text: 'Relative contribution of aldehyde toxicity, ether lipid accumulation and LTB4 inflammation to white matter disease is unresolved.', ev: 'emerging', src: [RIZZO07, YAMAGUCHI, SARRET] },
  ],
}
