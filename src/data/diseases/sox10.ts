import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, nord, omim, orpha } from '../cite'

const OMIM = 'omim:609136'
const WS4C = 'omim:613266'
const WS2E = 'omim:611584'
const ORPHA = 'orpha:48662'
const INOUE99 = 'lit:sox10:inoue1999'
const PING00 = 'lit:sox10:pingault2000'
const INOUE02 = 'lit:sox10:inoue2002'
const INOUE07 = 'lit:sox10:inoue2007'
const JONES = 'lit:sox10:jones2007'
const LEBLANC = 'lit:sox10:leblanc2007'
const FINZSCH = 'lit:sox10:finzsch2010'
const OSAKA = 'lit:sox10:osaka2010'
const CHAOUI = 'lit:sox10:chaoui2011'
const FROB = 'lit:sox10:frob2012'
const BOND = 'lit:sox10:bondurand2012'
const PARTHEY = 'lit:sox10:parthey2012'
const FOGARTY = 'lit:sox10:fogarty2016'
const FALAH = 'lit:sox10:falah2017'
const WANG = 'lit:sox10:wang2017'
const TRUCH = 'lit:sox10:truch2018'
const AKUTSU = 'lit:sox10:akutsu2018'
const BURKE = 'lit:sox10:burke2020'
const THONG = 'lit:sox10:thongpradit2020'
const PING21 = 'lit:sox10:pingault2021'
const FROLOVA = 'lit:sox10:frolova2021'

export const sox10Sources: Source[] = [
  lit(INOUE99, 'Inoue K, Tanabe Y, Lupski JR', 1999, 'Myelin deficiencies in both the central and the peripheral nervous systems associated with a SOX10 mutation', 'Ann Neurol'),
  lit(PING00, 'Pingault V, et al.', 2000, 'Peripheral neuropathy with hypomyelination, chronic intestinal pseudo-obstruction and deafness: a developmental neural crest syndrome related to a SOX10 mutation', 'Ann Neurol'),
  lit(INOUE02, 'Inoue K, et al.', 2002, 'Congenital hypomyelinating neuropathy, central dysmyelination, and Waardenburg-Hirschsprung disease: phenotypes linked by SOX10 mutation', 'Ann Neurol'),
  lit(INOUE07, 'Inoue K, et al.', 2007, "Translation of SOX10 3' untranslated region causes a complex severe neurocristopathy by generation of a deleterious functional domain", 'Hum Mol Genet'),
  lit(JONES, 'Jones EA, et al.', 2007, 'Interactions of Sox10 and Egr2 in myelin gene regulation', 'Neuron Glia Biol'),
  lit(LEBLANC, 'LeBlanc SE, Ward RM, Svaren J', 2007, 'Neuropathy-associated Egr2 mutants disrupt cooperative activation of myelin protein zero by Egr2 and Sox10', 'Mol Cell Biol'),
  lit(FINZSCH, 'Finzsch M, et al.', 2010, 'Sox10 is required for Schwann cell identity and progression beyond the immature Schwann cell stage', 'J Cell Biol'),
  lit(OSAKA, 'Osaka H, et al.', 2010, 'Disrupted SOX10 regulation of GJC2 transcription causes Pelizaeus-Merzbacher-like disease', 'Ann Neurol'),
  lit(CHAOUI, 'Chaoui A, et al.', 2011, 'Identification and functional analysis of SOX10 missense mutations in different subtypes of Waardenburg syndrome', 'Hum Mutat'),
  lit(FROB, 'Fröb F, et al.', 2012, 'Establishment of myelinating Schwann cells and barrier integrity between central and peripheral nervous systems depend on Sox10', 'Glia'),
  lit(BOND, 'Bondurand N, et al.', 2012, 'Alu-mediated deletion of SOX10 regulatory elements in Waardenburg syndrome type 4', 'Eur J Hum Genet'),
  lit(PARTHEY, 'Parthey K, et al.', 2012, 'SOX10 mutation with peripheral amyelination and developmental disturbance of axons', 'Muscle Nerve'),
  lit(FOGARTY, 'Fogarty EA, et al.', 2016, 'SOX10 regulates an alternative promoter at the Charcot-Marie-Tooth disease locus MTMR2', 'Hum Mol Genet'),
  lit(FALAH, 'Falah N, et al.', 2017, '22q11.2q13 duplication including SOX10 causes sex-reversal and peripheral demyelinating neuropathy, central dysmyelinating leukodystrophy, Waardenburg syndrome, and Hirschsprung disease', 'Am J Med Genet A'),
  lit(WANG, 'Wang X, et al.', 2017, 'A de novo deletion mutation in SOX10 in a Chinese family with Waardenburg syndrome type 4', 'Sci Rep'),
  lit(TRUCH, 'Truch K, et al.', 2018, 'Analysis of the human SOX10 mutation Q377X in mice and its implications for genotype-phenotype correlation in SOX10-related human disease', 'Hum Mol Genet'),
  lit(AKUTSU, 'Akutsu Y, et al.', 2018, 'A patient with peripheral demyelinating neuropathy, central dysmyelinating leukodystrophy, Waardenburg syndrome, and severe hypoganglionosis associated with a novel SOX10 mutation', 'Am J Med Genet A'),
  lit(BURKE, 'Burke EA, et al.', 2020, 'A novel frameshift mutation in SOX10 causes Waardenburg syndrome with peripheral demyelinating neuropathy, visual impairment and the absence of Hirschsprung disease', 'Am J Med Genet A'),
  lit(THONG, 'Thongpradit S, et al.', 2020, 'Novel SOX10 mutations in Waardenburg syndrome: functional characterization and genotype-phenotype analysis', 'Front Genet'),
  lit(PING21, 'Pingault V, Zerad L, Bertani-Torres W, Bondurand N', 2021, 'SOX10: 20 years of phenotypic plurality and current understanding of its developmental function', 'J Med Genet', 'review'),
  lit(FROLOVA, 'Frolova EB, et al.', 2021, 'Kallmann syndrome in monozygous twins as an isolated manifestation of the SOX10 gene defect', 'Probl Endokrinol'),
  omim('609136', 'Peripheral demyelinating neuropathy, central dysmyelination, Waardenburg syndrome, and Hirschsprung disease (PCWH)'),
  omim('613266', 'Waardenburg syndrome, type 4C'),
  omim('611584', 'Waardenburg syndrome, type 2E'),
  orpha('48662', 'PCWH syndrome'),
  orpha('77790', 'Waardenburg syndrome type 4C'),
  nord('sox10', 'waardenburg-syndrome', 'Waardenburg Syndrome'),
]

export const sox10Genes: Gene[] = [
  {
    symbol: 'SOX10',
    name: 'SRY-box transcription factor 10',
    protein: 'SOX10 (466 aa), group E SOX HMG-box transcription factor',
    location: '22q13.1',
    function:
      'Master transcriptional regulator of neural crest derivatives (melanocytes, enteric neurons, peripheral glia), Schwann cell maturation and oligodendrocyte myelination. Binds (A/T)ACAAT motifs via the HMG box; the C-terminal transactivation domain activates targets such as MPZ, MBP, MAG, EGR2, GJC2 and MTMR2.',
    pathway: 'Neural crest and myelinating glia transcriptional programme (SOX10 / EGR2 myelin gene network)',
    transcript: 'NM_006941.4',
    uniprot: 'P56693',
    ncbiGene: '6663',
    variantTypes: [
      'Last-exon nonsense / frameshift (NMD-escaping)',
      'Early truncating (NMD-susceptible)',
      'Stop-loss (3′-UTR extension)',
      'Missense',
      'Splice-site',
      'Whole-gene / exon deletions',
      'Regulatory (enhancer) deletions',
      'Duplications',
    ],
    diseases: ['sox10'],
    ev: 'established',
    src: [INOUE99, INOUE02, PING21, ...geneDb('SOX10')],
  },
]

export const sox10: Disease = {
  id: 'sox10',
  name: 'SOX10-Related Leukodystrophy (PCWH Spectrum)',
  short: 'SOX10 / PCWH',
  lastUpdated: '2026-10-08',
  color: '#c4572e',
  synonyms: [
    'PCWH syndrome',
    'SOX10-related PCWH',
    'Peripheral demyelinating neuropathy, central dysmyelinating leukodystrophy, Waardenburg syndrome and Hirschsprung disease',
    'PCW syndrome (without Hirschsprung disease)',
    'Waardenburg syndrome type 4C (WS4C)',
    'Waardenburg syndrome type 2E (WS2E)',
  ],
  classification: 'Hypomyelinating leukodystrophy with peripheral hypomyelinating neuropathy; neurocristopathy',
  inheritance: 'Autosomal dominant (mostly de novo)',
  genes: ['SOX10'],
  tagline: 'Heterozygous SOX10 variants disrupt a master glial and neural crest transcription factor → central and peripheral hypomyelination with Waardenburg and Hirschsprung features.',
  identifiers: [
    { label: 'OMIM', value: '609136', url: 'https://www.omim.org/entry/609136' },
    { label: 'OMIM (WS4C)', value: '613266', url: 'https://www.omim.org/entry/613266' },
    { label: 'OMIM (WS2E)', value: '611584', url: 'https://www.omim.org/entry/611584' },
    { label: 'Orphanet', value: 'ORPHA:48662', url: 'https://www.orpha.net/en/disease/detail/48662' },
    { label: 'MONDO (WS4C)', value: 'MONDO:0010813', url: 'https://monarchinitiative.org/disease/MONDO:0010813' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous pathogenic SOX10 variants (point variants or copy-number changes) cause the PCWH spectrum.', ev: 'established', why: 'Multiple independent cohorts, functional genomics and mouse models over more than 25 years.', src: [INOUE99, INOUE02, PING21] },
    { label: 'Cardinal domains', text: 'Peripheral demyelinating (often congenital hypomyelinating) neuropathy, central dysmyelinating leukodystrophy, Waardenburg features (hearing loss, pigmentary anomalies) and Hirschsprung disease.', ev: 'established', src: [INOUE02, PING21, OMIM, ORPHA, 'nord:sox10'] },
    { label: 'Partial forms', text: 'Not all domains are required: PCW lacks Hirschsprung disease, WS4C lacks CNS involvement and WS2E has only deafness and pigmentary features.', ev: 'established', src: [INOUE02, PING21] },
    { label: 'Mechanistic classes', text: 'Haploinsufficiency (NMD-susceptible alleles), dominant-negative (NMD-escaping last-exon truncations) and toxic gain-of-function (stop-loss 3′-UTR extensions).', ev: 'strong', why: 'Supported by in vitro assays and a knock-in mouse model; human genotype–phenotype data are case-based.', src: [INOUE07, TRUCH] },
    { label: 'Primary cell types', text: 'Schwann cells and oligodendrocytes, plus neural crest lineages (melanocytes, enteric neurons).', ev: 'established', src: [FINZSCH, OSAKA, PING21] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Severe forms are congenital or present in the first months; Hirschsprung disease presents neonatally; hearing loss is congenital or early-childhood onset.', ev: 'established', src: [INOUE02, PING00] },
    { label: 'Peripheral neuropathy', text: 'Congenital hypomyelinating neuropathy with severely reduced or absent conduction velocities; nerve biopsy shows amyelination with relatively preserved axons.', ev: 'established', src: [INOUE02, PARTHEY] },
    { label: 'Central leukodystrophy', text: 'Diffuse hypomyelination on MRI with developmental delay / intellectual disability in severe cases.', ev: 'established', src: [INOUE99, INOUE02] },
    { label: 'Waardenburg features', text: 'Profound bilateral sensorineural hearing loss; heterochromia iridis, white forelock, skin patches and dystopia canthorum.', ev: 'established', src: [PING21] },
    { label: 'Enteric involvement', text: 'Hirschsprung aganglionosis, or hypoganglionosis / chronic intestinal pseudo-obstruction; absent in PCW.', ev: 'established', src: [PING00, AKUTSU, BURKE] },
    { label: 'Rare features', text: 'Visual impairment (one frameshift case), Kallmann-like hypogonadotropic hypogonadism (isolated presentation) and sex reversal with a 22q duplication.', ev: 'emerging', why: 'Single case reports.', src: [BURKE, FROLOVA, FALAH] },
    { label: 'Management', text: 'No disease-modifying therapy; care is supportive and multidisciplinary.', ev: 'established', src: [PING21] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'PCWH is considered ultra-rare (below 1 in 1,000,000); no registry-based point prevalence exists.', ev: 'unknown', why: 'No systematic population studies.', src: [PING21] },
    { label: 'Waardenburg context', text: 'All Waardenburg syndrome is estimated at about 1 in 40,000–42,000 births; SOX10 accounts for a minority (most WS4 is due to EDNRB or EDN3).', ev: 'strong', src: [PING21] },
    { label: 'De novo rate', text: 'Most PCWH cases are de novo; familial transmission with variable expressivity occurs mainly in milder forms (WS2E).', ev: 'established', src: [THONG, FALAH] },
    { label: 'Geographic distribution', text: 'Reported worldwide (European, Japanese, Chinese, Thai, Russian, American) without a founder effect.', ev: 'strong', src: [THONG, WANG, AKUTSU, BURKE, FROLOVA] },
    { label: 'Sex distribution', text: 'No sex difference identified for the core phenotype.', ev: 'emerging', src: [PING21] },
    { label: 'Ascertainment', text: 'Patients may be ascertained via leukodystrophy, neuropathy, Hirschsprung or Waardenburg clinics, likely causing under-recognition of the full spectrum.', ev: 'proposed', why: 'Curator inference stated in dossier.', src: [PING21] },
  ],
  variants: [
    { id: 'sox10-q250x', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'c.748C>T', hgvsp: 'p.(Gln250Ter)', build: 'Not specified (transcript-based)', type: 'Nonsense (last exon)', consequence: 'Escapes NMD; truncated protein lacking transactivation domain', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'Full PCWH with congenital hypomyelinating neuropathy', functional: 'Dominant-negative truncated SOX10', ev: 'established', why: 'Index PCWH allele; mechanism supported by later mouse modelling of last-exon truncation.', src: [INOUE02, TRUCH, 'db:clinvar:SOX10'] },
    { id: 'sox10-q377x', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'Not stated in dossier', hgvsp: 'p.(Gln377Ter)', build: 'Not specified (transcript-based)', type: 'Nonsense (last exon)', consequence: 'Escapes NMD; truncated protein', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'Human SOX10 allele; knock-in mice show severe peripheral and central neuropathy', functional: 'Mouse model recapitulates PCWH (species-qualified)', ev: 'strong', why: 'Validated in knock-in mice; human data limited.', src: [TRUCH] },
    { id: 'sox10-stoploss', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'Various (stop codon)', hgvsp: 'p.(*466ext) (e.g. Trp, Gly)', build: 'Not specified (transcript-based)', type: 'Stop-loss', consequence: 'Translation into 3′-UTR adds a novel C-terminal peptide', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'Severe PCWH / complex neurocristopathy', functional: 'Markedly reduced target transactivation in vitro (toxic gain-of-function)', ev: 'strong', why: 'In vitro functional data with case reports.', src: [INOUE07, INOUE99] },
    { id: 'sox10-fs', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'Various de novo frameshifts', build: 'Not specified (transcript-based)', type: 'Frameshift', consequence: 'NMD-escaping when in last exon', clinvar: 'Not stated in dossier', popFreq: 'De novo', phenotype: 'PCWH without Hirschsprung disease, with visual impairment (one case)', functional: 'Not characterised in dossier', ev: 'emerging', why: 'Single case report.', src: [BURKE] },
    { id: 'sox10-del', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'Exon-level deletion (coordinates not stated)', build: 'Not specified', type: 'CNV deletion', consequence: 'Haploinsufficiency', clinvar: 'Not stated in dossier', popFreq: 'De novo', phenotype: 'WS4C in a Chinese family', functional: 'Loss of one SOX10 copy', ev: 'strong', src: [WANG] },
    { id: 'sox10-dup', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: '22q11.2–q13 duplication including SOX10', build: 'Not specified', type: 'CNV duplication', consequence: 'Overexpression plus contiguous gene effects', clinvar: 'Not stated in dossier', popFreq: 'Single case', phenotype: 'PCWH with sex reversal', functional: 'Attribution to SOX10 alone uncertain', ev: 'emerging', why: 'Single case; contiguous gene effects complicate attribution.', src: [FALAH] },
    { id: 'sox10-reg', disease: 'sox10', gene: 'SOX10', transcript: 'NM_006941.4', hgvsc: 'Alu-mediated upstream regulatory deletion', build: 'Not specified', type: 'Non-coding CNV', consequence: 'Reduced SOX10 expression without coding change', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'WS4 (variable)', functional: 'Loss of cis-regulatory elements', ev: 'strong', why: 'Requires specialised testing beyond exon sequencing.', src: [BOND] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Last-exon (NMD-escaping) truncations are the strongest single predictor of full PCWH with peripheral and central neuropathy.', ev: 'strong', why: 'Human case series plus Q377X knock-in mouse validation.', src: [INOUE02, TRUCH] },
    { aspect: 'Severity', finding: 'Stop-loss alleles with a toxic C-terminal extension are among the most severe, exceeding simple last-exon truncations in vitro.', ev: 'strong', why: 'In vitro transactivation assays and case reports.', src: [INOUE07] },
    { aspect: 'Clinical phenotype', finding: 'Early truncating (NMD-susceptible) alleles and deletions cause haploinsufficiency with WS2E or WS4C rather than PCWH.', ev: 'strong', src: [TRUCH, WANG] },
    { aspect: 'Clinical phenotype', finding: 'Missense variants usually cause WS2E or WS4C (rarely PCW); reduced transactivation correlates with severity, and none caused full PCWH in a systematic series.', ev: 'strong', src: [CHAOUI] },
    { aspect: 'Clinical phenotype', finding: 'Regulatory deletions cause variable WS4; duplications have caused PCWH with additional features.', ev: 'emerging', why: 'Few reported cases.', src: [BOND, FALAH] },
    { aspect: 'Progression', finding: 'Variable expressivity within allele classes and families suggests uncharacterised modifier loci.', ev: 'proposed', src: [PING21] },
    { aspect: 'Age of onset', finding: 'Severe alleles produce congenital neuropathy and central dysmyelination.', ev: 'established', src: [INOUE02] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based survival data.', ev: 'unknown', src: [PING21] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'SOX10 (22q13.1)', detail: 'Heterozygous point variants, deletions, regulatory deletions or duplications; mostly de novo in PCWH.', ev: 'established', src: [INOUE02, THONG] },
    { stage: 'Protein', label: 'SOX10 transcription factor', detail: 'HMG-box DNA-binding protein with dimerisation and C-terminal transactivation domains; truncated, extended or reduced in dosage.', ev: 'established', src: [INOUE07, TRUCH, 'db:uniprot:SOX10'] },
    { stage: 'Molecular function', label: 'Loss of myelin gene transactivation', detail: 'Haploinsufficiency, dominant-negative occupation of target promoters, or toxic C-terminal extension reduces activation of MPZ, MBP, MAG, EGR2, GJC2 and MTMR2.', ev: 'strong', src: [JONES, LEBLANC, OSAKA, FOGARTY, TRUCH, INOUE07] },
    { stage: 'Pathway', label: 'Glial and neural crest programmes fail', detail: 'SOX10/EGR2 myelin network in Schwann cells, GJC2-dependent central myelination, and neural crest specification are disrupted; myelination appears more dosage-sensitive than pigment and enteric lineages.', ev: 'strong', src: [JONES, OSAKA, TRUCH, PING21] },
    { stage: 'Cellular consequence', label: 'Immature Schwann cell arrest; oligodendrocyte hypomyelination', detail: 'Schwann cells fail to progress beyond the immature stage (mouse); amyelinated nerves with preserved axons in patients; melanocyte and enteric neuron defects.', ev: 'strong', src: [FINZSCH, FROB, PARTHEY, INOUE02] },
    { stage: 'Phenotype', label: 'PCWH spectrum', detail: 'Congenital hypomyelinating neuropathy, central dysmyelination, deafness, pigmentary anomalies and Hirschsprung disease.', ev: 'established', src: [INOUE02, PING21] },
  ],
  relations: [
    { from: ['gene', 'SOX10'], to: ['gene', 'MPZ'], label: 'co-activates with EGR2', ev: 'strong', why: 'Cooperative activation via an intronic enhancer; neuropathy-associated EGR2 mutants disrupt it (cell/model systems).', src: [LEBLANC, JONES] },
    { from: ['gene', 'SOX10'], to: ['gene', 'EGR2'], label: 'co-regulates', ev: 'strong', why: 'Composite regulatory module analysis.', src: [JONES] },
    { from: ['gene', 'SOX10'], to: ['gene', 'GJC2'], label: 'activates transcription', ev: 'strong', why: 'Disruption of a SOX10-binding GJC2 element caused PMLD-like disease in a patient.', src: [OSAKA] },
    { from: ['gene', 'SOX10'], to: ['gene', 'MTMR2'], label: 'regulates alternative promoter', ev: 'emerging', why: 'Single study in Schwann cell systems.', src: [FOGARTY] },
    { from: ['gene', 'SOX10'], to: ['cell', 'Schwann cells'], label: 'required for identity of', ev: 'established', why: 'Conditional mouse deletion plus concordant human nerve pathology.', src: [FINZSCH, PARTHEY] },
    { from: ['gene', 'SOX10'], to: ['cell', 'Oligodendrocytes'], label: 'drives myelination in', ev: 'strong', why: 'Supported by target-gene data (GJC2); no direct human single-cell data.', src: [OSAKA, PING21] },
    { from: ['cell', 'Schwann cells'], to: ['phenotype', 'Congenital hypomyelinating neuropathy'], label: 'failure causes', ev: 'established', why: 'Amyelination on nerve biopsy with severely reduced NCVs.', src: [INOUE02, PARTHEY] },
    { from: ['cell', 'Oligodendrocytes'], to: ['phenotype', 'Central hypomyelination'], label: 'failure causes', ev: 'strong', why: 'MRI hypomyelination in PCWH; cellular pathway inferred.', src: [INOUE99, OSAKA] },
    { from: ['gene', 'SOX10'], to: ['phenotype', 'Waardenburg / Hirschsprung features'], label: 'neural crest loss causes', ev: 'established', why: 'Consistent across cohorts.', src: [PING21] },
    { from: ['phenotype', 'Congenital hypomyelinating neuropathy'], to: ['biomarker', 'Nerve conduction studies'], label: 'measured as', ev: 'established', why: 'Standard diagnostic electrophysiology.', src: [INOUE02, PARTHEY] },
  ],
  cells: [
    { cell: 'Schwann cells', role: 'primary', detail: 'Cell-autonomous failure to mature into myelinating cells; amyelination with preserved axons.', ev: 'established', src: [FINZSCH, PARTHEY, INOUE02] },
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Reduced expression of CNS myelin genes such as GJC2 contributes to central hypomyelination.', ev: 'strong', src: [OSAKA, PING21] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Neural crest lineages: melanocytes (pigmentation, inner ear) and enteric neurons (Hirschsprung disease).', ev: 'established', src: [PING21] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axons largely preserved early; secondary denervation possible with chronic hypomyelination.', ev: 'emerging', src: [PARTHEY] },
  ],
  regions: [
    { region: 'Cerebral white matter', finding: 'Diffuse T2/FLAIR hyperintensity with reduced T1 signal, consistent with hypomyelination.', src: [INOUE99, INOUE02] },
    { region: 'Cerebellar white matter', finding: 'May be affected.', src: [INOUE02] },
    { region: 'Corpus callosum & cerebellum', finding: 'Thin corpus callosum, small cerebellum and reduced supratentorial volume in the most severe cases.', src: [PING00] },
    { region: 'Peripheral nerves', finding: 'Amyelination or severe hypomyelination with Schwann cells around unmyelinated axons.', src: [INOUE02, PARTHEY] },
  ],
  biomarkers: [
    { name: 'Nerve conduction studies', category: 'Imaging', significance: 'Severely reduced or absent velocities and CMAPs from birth indicate hypomyelinating neuropathy.', sample: 'Peripheral nerve', assay: 'Electrophysiology (NCS/EMG)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Not specific to SOX10.', ev: 'established', src: [INOUE02, PARTHEY] },
    { name: 'Brain MRI hypomyelination', category: 'Imaging', significance: 'Confirms central leukodystrophy component.', sample: 'In vivo brain', assay: 'MRI (T2/FLAIR, T1)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Shared with other hypomyelinating leukodystrophies; DTI and MRS not characterised.', ev: 'established', src: [INOUE99, INOUE02] },
    { name: 'Auditory brainstem response / audiology', category: 'Imaging', significance: 'Characterises sensorineural hearing loss.', sample: 'In vivo', assay: 'ABR, audiometry, ASSR, otoacoustic emissions', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Does not distinguish SOX10 from other causes of deafness.', ev: 'established', src: [WANG] },
    { name: 'Nerve biopsy', category: 'Imaging', significance: 'Amyelination with preserved axons gives pathological confirmation.', sample: 'Sural nerve', assay: 'Histopathology', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Generally unnecessary given genetic testing.', ev: 'strong', src: [PARTHEY] },
    { name: 'Rectal suction biopsy', category: 'Imaging', significance: 'Diagnoses Hirschsprung disease or hypoganglionosis.', sample: 'Rectal mucosa', assay: 'Acetylcholinesterase histochemistry / full-thickness biopsy', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Enteric component only.', ev: 'established', src: [AKUTSU] },
    { name: 'Visual evoked potentials', category: 'Imaging', significance: 'Abnormal in a case with visual impairment.', sample: 'In vivo', assay: 'VEP', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Single case report.', ev: 'emerging', src: [BURKE] },
    { name: 'Pathogenic SOX10 variant', category: 'Genetic', significance: 'Molecular confirmation; NMD position predicts mechanism and severity.', sample: 'DNA (blood)', assay: 'Sequencing, microarray, regulatory-element analysis', purpose: ['Diagnosis', 'Prognosis', 'Genetic counselling'], status: 'Established clinical', limitations: 'Regulatory deletions need specialised assays.', ev: 'established', src: [TRUCH, BOND, 'db:clinvar:SOX10'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Multisystem assessment', detail: 'Features from at least two domains: central hypomyelination, demyelinating neuropathy, deafness / pigmentary anomalies, Hirschsprung disease or enteric neuropathy. No formal consensus criteria exist.', src: [PING21, INOUE02] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Diffuse hypomyelination / dysmyelination.', src: [INOUE99, INOUE02] },
    { phase: 'Investigation', category: 'Electrophysiology', method: 'Nerve conduction studies / EMG', detail: 'Congenital-onset severely slowed conduction suggests hypomyelinating neuropathy.', src: [INOUE02, PARTHEY] },
    { phase: 'Investigation', category: 'Audiology / GI', method: 'ABR, audiometry; rectal biopsy', detail: 'Characterise hearing loss and enteric involvement.', src: [WANG, AKUTSU] },
    { phase: 'Confirmation', category: 'Genetic', method: 'SOX10 sequencing, then chromosomal microarray', detail: 'First tier: targeted SOX10 sequencing; if negative, microarray for deletions / duplications. Assess whether a premature stop lies in the last exon.', src: [TRUCH, WANG, FALAH] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Regulatory-element analysis, exome, RNA studies', detail: 'Long-range PCR for Alu-mediated enhancer deletions, exome sequencing, or RNA analysis for cryptic splicing / NMD.', src: [BOND] },
    { phase: 'Confirmation', category: 'Genetic counselling', method: 'Parental testing', detail: 'Clarifies de novo status and recurrence risk; prenatal and preimplantation testing available for known variants.', src: [THONG] },
  ],
  differential: [
    'Pelizaeus-Merzbacher disease (PLP1; X-linked, no neuropathy or Waardenburg features)',
    'Congenital hypomyelinating neuropathy (EGR2, MPZ, PMP22; no CNS hypomyelination)',
    'Waardenburg syndrome due to MITF, PAX3, EDNRB or EDN3 (no leukodystrophy)',
    'Isolated Hirschsprung disease (RET, EDNRB)',
    'PMLD / GJC2-related leukodystrophy (no Waardenburg or Hirschsprung features)',
    'Kallmann syndrome (KAL1, FGFR1; SOX10 testing in atypical cases)',
  ],
  phenotypes: {
    applicable: true,
    note: 'A severity gradient from full PCWH to partial forms correlates, imperfectly, with allele class and position.',
    forms: [
      { name: 'PCWH (full)', onset: 'Congenital / neonatal', severity: 'Severe', progression: 'Congenital neuropathy and central dysmyelination with developmental delay', genetics: 'Last-exon truncation (NMD-escaping) or stop-loss; usually de novo', markers: 'Absent / severely slowed NCV; diffuse MRI hypomyelination; deafness; aganglionosis', src: [INOUE02, INOUE07, TRUCH] },
      { name: 'PCW', onset: 'Congenital / infancy', severity: 'Severe', progression: 'As PCWH without Hirschsprung disease', genetics: 'Last-exon truncation / frameshift; rarely missense', markers: 'Neuropathy, MRI hypomyelination, Waardenburg features', src: [BURKE, CHAOUI] },
      { name: 'WS4C', onset: 'Neonatal (Hirschsprung) / congenital deafness', severity: 'Moderate', progression: 'No central leukodystrophy', genetics: 'Early truncating, missense, deletion or regulatory deletion', markers: 'Deafness, pigmentary anomalies, Hirschsprung disease', src: [WANG, BOND, CHAOUI, WS4C, 'orpha:77790'] },
      { name: 'WS2E', onset: 'Congenital', severity: 'Mild', progression: 'Non-progressive; preserved cognition', genetics: 'Missense or NMD-susceptible truncation; may be familial', markers: 'Deafness and pigmentary features only', src: [CHAOUI, THONG, WS2E] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Physical and occupational therapy, ankle-foot orthoses and mobility aids for peripheral neuropathy.', src: [PING21] },
    { category: 'Symptomatic', text: 'Spasticity management (physiotherapy, baclofen, botulinum toxin) and standard anti-seizure drugs if seizures occur.', src: [PING21] },
    { category: 'Supportive', text: 'Early intervention, developmental and educational support, neuropsychological assessment.', src: [PING21] },
    { category: 'Symptomatic', text: 'Hearing aids or cochlear implantation for profound sensorineural hearing loss; speech and language therapy.', src: [WANG] },
    { category: 'Symptomatic', text: 'Pull-through surgery or colostomy for Hirschsprung disease; nutritional support and prokinetics for hypoganglionosis / pseudo-obstruction.', src: [AKUTSU, PING00] },
    { category: 'Symptomatic', text: 'Endocrine evaluation and hormone replacement for hypogonadotropic hypogonadism when present.', src: [FROLOVA] },
    { category: 'Monitoring', text: 'Formal audiological assessment from infancy; ophthalmological and dermatological monitoring.', src: [PING21, WANG] },
    { category: 'Supportive', text: 'Genetic counselling with parental testing; prenatal and preimplantation testing for known variants.', src: [THONG] },
  ],
  therapies: [
    { id: 'sox10-aso', name: 'ASO suppression of dominant-negative SOX10 transcripts', modality: 'Antisense / RNA', target: 'Mutant SOX10 mRNA (last-exon alleles)', mechanism: 'Suppress production of NMD-escaping dominant-negative protein.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Conceptual; no programme identified', ev: 'proposed', why: 'Mechanistic rationale from the Q377X mouse model only.', src: [TRUCH] },
    { id: 'sox10-gene', name: 'SOX10 gene augmentation / editing', modality: 'Gene therapy', target: 'SOX10', mechanism: 'AAV delivery of wild-type SOX10 or base / prime editing of the variant.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Long-term goal; no programme identified', ev: 'proposed', why: 'Dominant-negative alleles complicate simple gene addition.', src: [PING21] },
    { id: 'sox10-dosage', name: 'SOX10 dosage restoration (small molecule)', modality: 'Small molecule', target: 'SOX10 expression', mechanism: 'Upregulate SOX10 or stabilise its mRNA in haploinsufficient alleles.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'No specific compound identified', ev: 'proposed', why: 'Discussed for Waardenburg syndrome; not characterised for leukodystrophy.', src: [PING21] },
    { id: 'sox10-proteostasis', name: 'Proteostasis modulators', modality: 'Small molecule', target: 'Misfolded missense SOX10', mechanism: 'Chaperones or proteasome modulation to rescue misfolded protein.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'No SOX10-specific studies.', src: [CHAOUI] },
    { id: 'sox10-egr2', name: 'EGR2 / SOX10 pathway modulation', modality: 'Other', target: 'EGR2 transcriptional axis', mechanism: 'Boost downstream myelin gene activation (MPZ, MBP, MAG).', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Discussed for CMT; not for PCWH', ev: 'proposed', why: 'Inferred from cooperative regulation data.', src: [JONES, LEBLANC] },
    { id: 'sox10-cell', name: 'iPSC-derived Schwann cell / OPC transplantation', modality: 'Cell therapy', target: 'Myelinating glia', mechanism: 'Replace defective myelinating glia with neural crest or iPSC-derived cells.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Experimental concept; no human evidence', ev: 'proposed', why: 'Delivery, CNS penetration and immune barriers unresolved.', src: [PING21] },
  ],
  trials: [],
  milestones: [
    { year: 1999, label: 'SOX10 stop-loss variant linked to combined CNS and PNS myelin deficiency', stage: 'Discovery', src: [INOUE99] },
    { year: 2000, label: 'SOX10 neuropathy with pseudo-obstruction and deafness described', stage: 'Discovery', src: [PING00] },
    { year: 2002, label: 'PCWH defined; last-exon NMD-escape mechanism (Q250X)', stage: 'Discovery', src: [INOUE02] },
    { year: 2007, label: 'Stop-loss 3′-UTR toxic extension mechanism; SOX10/EGR2 myelin gene cooperation', stage: 'Preclinical (cellular)', src: [INOUE07, JONES] },
    { year: 2010, label: 'Sox10 required for Schwann cell identity; SOX10/GJC2 link to PMLD-like disease', stage: 'Animal studies', src: [FINZSCH, OSAKA] },
    { year: 2012, label: 'Regulatory (Alu-mediated) SOX10 deletions cause WS4', stage: 'Discovery', src: [BOND] },
    { year: 2018, label: 'Q377X knock-in mice confirm last-exon severity rule', stage: 'Animal studies', src: [TRUCH] },
    { year: 2021, label: 'Consolidated 20-year genotype–phenotype review', stage: 'Discovery', src: [PING21] },
  ],
  gaps: [
    { text: 'No registered interventional trials or natural-history registry for PCWH.', ev: 'unknown', src: [PING21] },
    { text: 'No validated fluid biomarkers; DTI and MRS findings not characterised.', ev: 'unknown', src: [PING21] },
    { text: 'Oligodendrocyte-level mechanism in human PCWH brain not studied at single-cell resolution.', ev: 'unknown', src: [OSAKA] },
    { text: 'Modifier loci underlying variable expressivity are proposed but uncharacterised.', ev: 'proposed', src: [PING21] },
    { text: 'Contribution of SOX10 dosage gain versus contiguous genes in duplications is unresolved.', ev: 'emerging', src: [FALAH] },
    { text: 'Dominant-negative mechanism complicates gene-addition strategies; allele-specific therapy needed.', ev: 'proposed', src: [TRUCH, INOUE07] },
  ],
}
