import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, nord, omim, orpha, pmid } from '../cite'

const PAZ03 = 'lit:oddd:paznekas2003'
const PAZ09 = 'lit:oddd:paznekas2009'
const RICH = 'lit:oddd:richardson2004'
const FLEN = 'lit:oddd:flenniken2005'
const VST = 'lit:oddd:vansteensel2005'
const DOB = 'lit:oddd:dobrowolski2007'
const ALAO = 'lit:oddd:alao2010'
const TEJ = 'lit:oddd:tejada2011'
const FUR = 'lit:oddd:furuta2012'
const DEBOCK = 'lit:oddd:debock2013'
const ABR = 'lit:oddd:abrams2013'
const ATT = 'lit:oddd:attig2016'
const PORN = 'lit:oddd:porntaveetus2017'
const RUD = 'lit:oddd:rudenskaya2018'
const TAS = 'lit:oddd:tasdelen2018'
const TAKI = 'lit:oddd:taki2019'
const KUM = 'lit:oddd:kumar2020'
const DEW = 'lit:oddd:dewaard2020'
const SARG = 'lit:oddd:sargiannidou2021'
const NEU22 = 'lit:oddd:neurology2022'
const OMIM = 'omim:164200'
const NORD = 'nord:oddd'

export const odddSources: Source[] = [
  lit(PAZ03, 'Paznekas WA, Boyadjiev SA, Shapiro RE, et al.', 2003, 'Connexin 43 (GJA1) mutations cause the pleiotropic phenotype of oculodentodigital dysplasia', 'Am J Hum Genet'),
  lit(RICH, 'Richardson R, Donnai D, Meire F, Dixon MJ', 2004, 'Expression of Gja1 correlates with the phenotype observed in oculodentodigital syndrome/type III syndactyly', 'J Med Genet'),
  lit(FLEN, 'Flenniken AM, Osborne LR, Anderson N, et al.', 2005, 'A Gja1 missense mutation in a mouse model of oculodentodigital dysplasia', 'Development'),
  lit(VST, 'Van Steensel MAM, Spruijt L, van der Burgt CJAM, et al.', 2005, 'A 2-bp deletion in the GJA1 gene is associated with oculo-dento-digital dysplasia with palmoplantar keratoderma', 'Am J Med Genet A'),
  lit(DOB, 'Dobrowolski R, Sommershof A, Willecke K', 2007, 'Some oculodentodigital dysplasia-associated Cx43 mutations cause increased hemichannel activity in addition to deficient gap junction channels', 'J Membr Biol'),
  lit(PAZ09, 'Paznekas WA, Karczeski BA, Vermeer S, et al.', 2009, 'GJA1 mutations, variants, and connexin 43 dysfunction as it relates to the oculodentodigital dysplasia phenotype', 'Hum Mutat'),
  lit(ALAO, 'Alao MJ, Bonneau D, Holder-Espinasse M, et al.', 2010, 'Oculo-dento-digital dysplasia: lack of genotype-phenotype correlation for GJA1 mutations and usefulness of neuro-imaging', 'Eur J Med Genet'),
  lit(TEJ, 'Tejada P, Eduardo YW, Gutierrez E, et al.', 2011, 'Glaucoma hereditario asociado a displasia oculodentodigital', 'Arch Soc Esp Oftalmol'),
  lit(FUR, 'Furuta N, Ikeda M, Hirayanagi K, et al.', 2012, 'A novel GJA1 mutation in oculodentodigital dysplasia with progressive spastic paraplegia and sensory deficits', 'Intern Med'),
  lit(DEBOCK, 'De Bock M, Kerrebrouck M, Wang N, Leybaert L', 2013, 'Neurological manifestations of oculodentodigital dysplasia: a Cx43 channelopathy of the central nervous system?', 'Front Pharmacol', 'review'),
  lit(ABR, 'Abrams CK, Orthmann-Murphy JL', 2013, 'Connexin mutations in Pelizaeus-Merzbacher-like disease, oculodentodigital dysplasia and related diseases', 'Connexins (book chapter)', 'review'),
  lit(ATT, 'Attig A, Trabelsi M, Hizem S, et al.', 2016, 'Oculo-dento-digital dysplasia in a Tunisian family with a novel GJA1 mutation', 'Genet Couns'),
  lit(PORN, 'Porntaveetus T, Srichomthong C, Ohazama A, et al.', 2017, 'A novel GJA1 mutation in oculodentodigital dysplasia with extensive loss of enamel', 'Oral Dis'),
  pmid(RUD, '29927410', 'Rudenskaya G, Dyomina E, Bliznetz E, et al.', 2018, 'Neurological presentations of oculodentodigital dysplasia', 'Zh Nevrol Psikhiatr Im S S Korsakova'),
  lit(TAS, 'Taşdelen E, Durmaz CD, Karabulut HG', 2018, 'Autosomal recessive oculodentodigital dysplasia: a case report and review of the literature', 'Cytogenet Genome Res'),
  lit(TAKI, 'Taki T, Takeichi T, Sugiura K, Akiyama M', 2019, 'Oculodentodigital dysplasia diagnosed from severe hypotrichosis', 'Acta Derm Venereol'),
  lit(KUM, 'Kumar V, Couser NL, Pandya A', 2020, 'Oculodentodigital dysplasia: a case report and major review of the eye and ocular adnexa features of 295 reported cases', 'Case Rep Ophthalmol Med', 'review'),
  lit(DEW, 'De Waard DM, Bugiani M', 2020, 'Astrocyte-oligodendrocyte-microglia crosstalk in astrocytopathies', 'Front Cell Neurosci', 'review'),
  lit(SARG, 'Sargiannidou I, Christophidou-Anastasiadou V, Hadjisavvas A, et al.', 2021, 'Novel GJA1/Cx43 variant associated with oculo-dento-digital dysplasia syndrome: clinical phenotype and cellular mechanisms', 'Front Genet'),
  lit(NEU22, 'Neurology image report', 2022, 'Oculodentodigital dysplasia', 'Neurology'),
  omim('164200', 'Oculodentodigital dysplasia; ODDD'),
  omim('121014', 'Gap junction protein, alpha-1; GJA1'),
  orpha('2710', 'Oculo-dento-digital dysplasia'),
  nord('oddd', 'oculodentodigital-dysplasia', 'Oculodentodigital Dysplasia'),
]

export const odddGenes: Gene[] = [
  {
    symbol: 'GJA1',
    name: 'Gap junction protein alpha 1',
    protein: 'Connexin 43 (Cx43), 382-aa four-pass gap junction protein (~43 kDa)',
    location: '6q22.31',
    function:
      'Six Cx43 monomers form a connexon (hemichannel); docked connexons form gap junction channels passing ions, metabolites and second messengers. In CNS white matter Cx43 couples astrocytes to each other and (with Cx47) to oligodendrocytes.',
    pathway: 'Gap junction coupling; panglial (astrocyte-oligodendrocyte) syncytium',
    transcript: 'NM_000165.5',
    uniprot: 'P17302',
    ncbiGene: '2697',
    variantTypes: ['Missense (majority, all nine topological domains)', 'Small in-frame deletions', 'Frameshift', 'Nonsense (homozygous in rare AR ODDD)'],
    diseases: ['oddd'],
    ev: 'established',
    src: [PAZ03, PAZ09, 'omim:121014', ...geneDb('GJA1')],
  },
]

const cv = 'db:clinvar:GJA1'
const TX = 'NM_000165.5'
const NS = 'Not stated in dossier'
const NOFREQ = 'Not reported in dossier (expected very rare in gnomAD)'

export const oddd: Disease = {
  id: 'oddd',
  name: 'Oculodentodigital Dysplasia with Leukodystrophy',
  short: 'ODDD',
  lastUpdated: '2026-10-08',
  color: '#8e6b2b',
  synonyms: [
    'Oculodentodigital dysplasia (ODDD)',
    'Oculo-dento-digital dysplasia (ODD syndrome)',
    'Oculodentodigital syndrome',
    'Meyer-Schwickerath syndrome',
    'Oculodentoosseous dysplasia (OdOD)',
    'ODDD with spastic paraparesis and leukodystrophy',
  ],
  classification: 'Connexinopathy (Cx43 channelopathy); pleiotropic syndromic leukodystrophy',
  inheritance: 'Autosomal dominant',
  genes: ['GJA1'],
  tagline: 'Dominant GJA1/Cx43 variants disrupt gap junction coupling → ocular, dental and digital anomalies plus adult-onset white matter disease in a minority.',
  identifiers: [
    { label: 'OMIM', value: '164200', url: 'https://www.omim.org/entry/164200' },
    { label: 'OMIM (gene)', value: '121014', url: 'https://www.omim.org/entry/121014' },
    { label: 'Orphanet', value: 'ORPHA:2710', url: 'https://www.orpha.net/en/disease/detail/2710' },
    { label: 'MONDO', value: 'MONDO:0007939', url: 'https://monarchinitiative.org/disease/MONDO:0007939' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous pathogenic GJA1 variants (rarely homozygous null alleles) alter connexin 43 gap junction function.', ev: 'established', why: 'Multiple independent cohorts and functional studies over two decades.', src: [PAZ03, PAZ09, OMIM] },
    { label: 'Neurological variant', text: 'A clinically important subset develops spastic paraparesis and white matter disease or frank leukodystrophy.', ev: 'strong', why: 'Supported by systematic review of case reports and series rather than population cohorts.', src: [DEBOCK, ALAO] },
    { label: 'Core pathology', text: 'Loss of Cx43-mediated panglial coupling is proposed to impair K+ buffering and metabolic support of oligodendrocytes and myelin.', ev: 'strong', why: 'Mechanistic framework from cell and mouse studies; human neuropathology is sparse.', src: [DEBOCK, ABR, DEW] },
    { label: 'Primary cell types', text: 'Astrocytes (main CNS Cx43-expressing cell) with secondary oligodendrocyte and myelin involvement.', ev: 'strong', why: 'Inferred from expression and coupling biology; not systematically confirmed in human tissue.', src: [DEBOCK, DEW] },
  ],
  clinical: [
    { label: 'Classic triad', text: 'Ocular (microphthalmia, microcornea, glaucoma), dental (enamel hypoplasia, microdontia) and digital (type III syndactyly, camptodactyly) anomalies.', ev: 'established', src: [PAZ03, KUM] },
    { label: 'Craniofacial', text: 'Narrow nose with hypoplastic alae, small anteverted nares, hypertelorism; broad tubular bones on X-ray.', ev: 'established', src: [KUM, PAZ03] },
    { label: 'Neurological features', text: 'Progressive spastic paraparesis, ataxia, dysarthria, seizures, neurogenic bladder and cognitive impairment.', ev: 'strong', why: 'Documented in case reports and series; frequency not population-defined.', src: [DEBOCK, FUR, RUD] },
    { label: 'Age of onset', text: 'Dysmorphic features are congenital; dental anomalies appear with tooth eruption; neurological onset usually in the 3rd–6th decade, though childhood onset is reported.', ev: 'strong', src: [DEBOCK, FUR] },
    { label: 'Variability', text: 'Expressivity varies widely even within families carrying the same variant; neurological features may be the first or predominant manifestation.', ev: 'strong', src: [ALAO, DEBOCK, FUR] },
    { label: 'Skin and hair', text: 'Hypotrichosis may occur; palmoplantar keratoderma is reported with a C-terminal frameshift variant.', ev: 'emerging', why: 'Single case reports.', src: [TAKI, VST] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Rare to ultra-rare; no population-based prevalence figure is available.', ev: 'unknown', why: 'No registry or population studies.', src: [KUM, NORD] },
    { label: 'Reported cases', text: '295 cases with ocular features had been published by 2020, likely an underestimate.', ev: 'established', src: [KUM] },
    { label: 'De novo rate', text: 'A significant proportion of sporadic cases arise from apparently de novo variants.', ev: 'strong', src: [PAZ03, PAZ09] },
    { label: 'Distribution', text: 'Reported across European, Asian, Latin American, Middle Eastern/North African and Russian populations; no sex difference identified.', ev: 'strong', src: [PAZ03, ATT, RUD, PORN] },
    { label: 'Neurological frequency', text: 'Proportion of patients with neurological disease is clinically significant but a minority; not precisely defined.', ev: 'unknown', why: 'Case-series ascertainment only.', src: [DEBOCK] },
    { label: 'Recessive ODDD', text: 'Homozygous null GJA1 alleles have been reported in only a few patients.', ev: 'emerging', src: [TAS, VST] },
  ],
  variants: [
    { id: 'oddd-g60s', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Gly60Ser)', legacy: 'G60S', build: NS, type: 'Missense', consequence: 'Dominant-negative disruption of gap junction assembly (TM2/CL boundary)', clinvar: NS, popFreq: NOFREQ, phenotype: 'Classic ODDD', functional: 'Gja1 G60S knock-in mouse recapitulates ODDD features (mouse data)', ev: 'strong', why: 'In vivo mouse model; not a recurrent human allele in the dossier.', src: [FLEN, cv] },
    { id: 'oddd-g138r', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Gly138Arg)', legacy: 'G138R', build: NS, type: 'Missense', consequence: 'Loss of coupling plus increased hemichannel activity', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD', functional: 'Dye uptake assays in oocytes and mammalian cells', ev: 'strong', src: [DOB, cv] },
    { id: 'oddd-g143s', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Gly143Ser)', legacy: 'G143S', build: NS, type: 'Missense', consequence: 'Reduced coupling; increased hemichannel activity (E2 loop)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD', functional: 'Hemichannel gain-of-function in expression systems', ev: 'strong', src: [DOB, cv] },
    { id: 'oddd-i31m', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Ile31Met)', legacy: 'I31M', build: NS, type: 'Missense', consequence: 'Increased hemichannel activity (NT/TM1)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD', functional: 'Hemichannel gain-of-function in expression systems', ev: 'strong', src: [DOB, cv] },
    { id: 'oddd-h194p', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(His194Pro)', legacy: 'H194P', build: NS, type: 'Missense', consequence: 'Increased hemichannel activity (E2 loop)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD', functional: 'Hemichannel gain-of-function in expression systems', ev: 'strong', src: [DOB, cv] },
    { id: 'oddd-k134del', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Lys134del)', build: NS, type: 'In-frame deletion', consequence: 'Intracellular retention; fewer junctional plaques (CL)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD with neurological features', functional: 'Trafficking defect in cell models', ev: 'emerging', why: 'Single family plus cell-model data.', src: [SARG, cv] },
    { id: 'oddd-r202h', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Arg202His)', legacy: 'R202H', build: NS, type: 'Missense', consequence: 'Reduced coupling (E2/TM4 region)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD (recurrent)', functional: 'Reduced coupling', ev: 'strong', src: [PAZ09, cv] },
    { id: 'oddd-i130t', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Ile130Thr)', legacy: 'I130T', build: NS, type: 'Missense', consequence: 'Loss of coupling (CL)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD (recurrent)', functional: 'Loss of coupling', ev: 'strong', src: [PAZ09, cv] },
    { id: 'oddd-a40v', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Ala40Val)', legacy: 'A40V', build: NS, type: 'Missense', consequence: 'Impaired channel function (TM1)', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD (recurrent)', functional: 'Impaired channel function', ev: 'strong', src: [PAZ09, cv] },
    { id: 'oddd-c260fs', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, legacy: '780_781delTG (p.C260fsX307)', build: NS, type: 'Frameshift', consequence: 'Truncated Cx43 C-terminus; dominantly acting', clinvar: NS, popFreq: NOFREQ, phenotype: 'ODDD with palmoplantar keratoderma', functional: 'Truncated protein', ev: 'emerging', why: 'Single family report.', src: [VST, cv] },
    { id: 'oddd-r148x', disease: 'oddd', gene: 'GJA1', transcript: TX, hgvsc: NS, hgvsp: 'p.(Arg148Ter)', build: NS, type: 'Nonsense', consequence: 'Null allele (CL/E2 boundary)', clinvar: NS, popFreq: NOFREQ, phenotype: 'Autosomal recessive ODDD (homozygous)', functional: 'Null allele', ev: 'emerging', why: 'Single case report of recessive presentation.', src: [TAS, cv] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'No reliable genotype-phenotype correlation predicts neurological versus non-neurological disease.', ev: 'strong', why: 'Formal analysis by Alao et al.; consistent with family variability.', src: [ALAO] },
    { aspect: 'Severity', finding: 'Identical variants within families produce classic ODDD only or ODDD with leukodystrophy.', ev: 'strong', src: [PAZ03, DEBOCK] },
    { aspect: 'Clinical phenotype', finding: 'Heterozygous missense variants cause dominant ODDD; homozygous truncating alleles cause rare recessive craniofacial-digital forms whose neurological course is poorly defined.', ev: 'emerging', src: [PAZ09, TAS] },
    { aspect: 'Severity', finding: 'Hemichannel gain-of-function variants (G138R, I31M, H194P) are candidates for greater cellular toxicity; correlation with neurological severity is unvalidated.', ev: 'proposed', why: 'Inference from cellular assays only.', src: [DOB] },
    { aspect: 'MRI phenotype', finding: 'White matter abnormalities can be present before overt neurological symptoms, independent of genotype.', ev: 'strong', src: [ALAO] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based predictor of neurological outcome.', ev: 'unknown', src: [ALAO] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'GJA1 (6q22.31)', detail: 'Heterozygous missense, in-frame or truncating variants; single coding exon (exon 2).', ev: 'established', src: [PAZ03, PAZ09] },
    { stage: 'Protein', label: 'Connexin 43', detail: 'Mutant Cx43 co-assembles with wild type (dominant-negative), is retained intracellularly, or forms leaky hemichannels.', ev: 'strong', src: [FLEN, DOB, SARG, 'db:uniprot:GJA1'] },
    { stage: 'Molecular function', label: 'Gap junction / hemichannel dysfunction', detail: 'Reduced intercellular coupling; some variants increase hemichannel opening with ATP and glutamate release.', ev: 'strong', src: [DOB, DEBOCK] },
    { stage: 'Pathway', label: 'Panglial syncytium failure', detail: 'Impaired astrocyte-astrocyte (Cx43) and astrocyte-oligodendrocyte (Cx43/Cx47) coupling disrupts K+ buffering, metabolic supply and water homeostasis.', ev: 'strong', src: [DEBOCK, ABR, DEW] },
    { stage: 'Cellular consequence', label: 'Astrocyte dysfunction, secondary myelin injury', detail: 'Astrogliosis and vacuolation reported; oligodendrocyte and myelin damage inferred from loss of astrocytic support.', ev: 'emerging', src: [DEBOCK, DEW] },
    { stage: 'Phenotype', label: 'ODDD with leukodystrophy', detail: 'Classic triad plus, in a subset, spastic paraparesis, ataxia, bladder dysfunction and white matter disease.', ev: 'established', src: [PAZ03, DEBOCK, ALAO] },
  ],
  relations: [
    { from: ['gene', 'GJA1'], to: ['protein', 'Connexin 43'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [PAZ03, 'db:uniprot:GJA1'] },
    { from: ['protein', 'Connexin 43'], to: ['pathway', 'Panglial gap junction coupling'], label: 'forms channels for', ev: 'strong', why: 'Established connexin biology; disease relevance inferred from models.', src: [DEBOCK, ABR] },
    { from: ['gene', 'GJA1'], to: ['cell', 'Astrocytes'], label: 'expressed in', ev: 'strong', why: 'Cx43 is the dominant astrocytic connexin.', src: [DEBOCK, 'db:hpa:GJA1'] },
    { from: ['pathway', 'Panglial gap junction coupling'], to: ['cell', 'Oligodendrocytes'], label: 'supports', ev: 'strong', why: 'Oligodendrocytes depend on Cx43/Cx47 heterotypic coupling for ionic and metabolic support.', src: [DEW, ABR] },
    { from: ['protein', 'Connexin 43'], to: ['pathway', 'Hemichannel ATP/glutamate release'], label: 'gain-of-function opens', ev: 'emerging', why: 'Shown for selected variants in expression systems only.', src: [DOB] },
    { from: ['pathway', 'Panglial gap junction coupling'], to: ['phenotype', 'White matter disease / leukodystrophy'], label: 'loss drives (proposed)', ev: 'emerging', why: 'Mechanistic framework; limited human neuropathology.', src: [DEBOCK, ABR] },
    { from: ['phenotype', 'White matter disease / leukodystrophy'], to: ['biomarker', 'Brain MRI T2/FLAIR white matter signal'], label: 'detected by', ev: 'strong', why: 'MRI screening detects changes even in pre-symptomatic carriers.', src: [ALAO] },
    { from: ['gene', 'GJA1'], to: ['disease', 'Pelizaeus-Merzbacher-like disease (GJC2)'], label: 'shares connexin coupling pathway with', ev: 'strong', why: 'Both disrupt astrocyte-oligodendrocyte Cx43/Cx47 coupling.', src: [ABR] },
    { from: ['therapy', 'Cx43 hemichannel blockers (mimetic peptides)'], to: ['pathway', 'Hemichannel ATP/glutamate release'], label: 'would inhibit (proposed)', ev: 'proposed', why: 'Concept only; no ODDD data.', src: [DEBOCK] },
  ],
  cells: [
    { cell: 'Astrocytes', role: 'primary', detail: 'Main CNS Cx43-expressing cell; loss of coupling impairs K+ buffering and Ca2+ signalling.', ev: 'strong', src: [DEBOCK, ABR] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Express Cx47/Cx32 rather than Cx43, but depend on astrocytic Cx43 coupling for metabolic and ionic support.', ev: 'strong', src: [DEW] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Secondary activation expected but not characterised in ODDD.', ev: 'unknown', src: [DEW] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Lens, cornea, trabecular meshwork, ameloblasts and limb bud mesenchyme underlie ocular, dental and digital features.', ev: 'strong', src: [KUM, PORN, RICH, FLEN] },
  ],
  regions: [
    { region: 'Cerebral white matter (subcortical / deep / periventricular)', finding: 'Bilateral T2/FLAIR hyperintensity, symmetric or asymmetric; confluent leukodystrophic pattern in the neurological variant.', src: [ALAO, FUR, NEU22, DEBOCK] },
    { region: 'Cerebellar white matter', finding: 'Involvement noted in some cases, consistent with ataxia.', src: [DEBOCK] },
    { region: 'Whole-brain (younger / severe cases)', finding: 'Hypomyelinating features reported in some patients.', src: [DEBOCK] },
  ],
  biomarkers: [
    { name: 'Brain MRI T2/FLAIR white matter signal', category: 'Imaging', significance: 'Most validated marker of the leukodystrophy component; extent tracks neurological severity in reported cases.', sample: 'In vivo brain', assay: 'MRI (T1, T2, FLAIR, DWI)', purpose: ['Diagnosis', 'Screening', 'Monitoring'], status: 'Established clinical', limitations: 'No quantitative or longitudinal validation; MRS and DTI data lacking.', ev: 'strong', src: [ALAO, NEU22] },
    { name: 'GJA1 sequencing', category: 'Genetic', significance: 'Molecular confirmation of ODDD.', sample: 'Blood DNA', assay: 'Sanger or NGS panel discriminating GJA1 from its chromosome 5 pseudogene; microarray or WES if negative', purpose: ['Diagnosis', 'Family testing'], status: 'Established clinical', limitations: 'Pseudogene co-amplification can cause artefacts; genotype does not predict neurological risk.', ev: 'established', src: [PAZ09, ATT] },
    { name: 'Optical coherence tomography / IOP', category: 'Imaging', significance: 'Monitoring of secondary glaucoma.', sample: 'Eye', assay: 'OCT (RNFL, macula); tonometry', purpose: ['Monitoring'], status: 'Clinical adjunct', limitations: 'Ocular, not neurological, readout.', ev: 'strong', src: [KUM, TEJ] },
    { name: 'Gap junction coupling / hemichannel assays', category: 'Biochemical', significance: 'Functional classification of novel variants.', sample: 'Transfected cells / Xenopus oocytes', assay: 'Scrape loading, dye transfer, dye uptake, patch clamp', purpose: ['Variant interpretation'], status: 'Experimental', limitations: 'Research use only; not routinely available.', ev: 'emerging', src: [DOB, SARG] },
    { name: 'CSF / blood biomarkers', category: 'Fluid (neuro-glial injury)', significance: 'None validated.', sample: 'CSF / blood', assay: 'Not established', purpose: ['Research'], status: 'Experimental', limitations: 'No data identified for ODDD.', ev: 'unknown', src: [DEBOCK] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Dysmorphology assessment', detail: 'Two or more core features: microphthalmia/microcornea, enamel hypoplasia/microdontia, type III syndactyly/camptodactyly, characteristic nose.', src: [PAZ03, KUM] },
    { phase: 'Suspicion', category: 'Clinical', method: 'Neurological history', detail: 'Spastic paraparesis, ataxia, dysarthria, seizures or bladder dysfunction in a person with ODDD features.', src: [DEBOCK, FUR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI (T1, T2, FLAIR, DWI)', detail: 'Baseline in all confirmed cases; white matter changes may precede symptoms. Serial MRI for monitoring.', src: [ALAO] },
    { phase: 'Investigation', category: 'Ophthalmological', method: 'Full eye examination', detail: 'Visual acuity, slit lamp, corneal diameter, gonioscopy and IOP.', src: [KUM] },
    { phase: 'Investigation', category: 'Electrophysiology / urology', method: 'Evoked potentials; urodynamics', detail: 'Evoked potentials may show central conduction delay; urodynamics for neurogenic bladder.', src: [FUR, DEBOCK] },
    { phase: 'Confirmation', category: 'Genetic', method: 'GJA1 sequencing', detail: 'Assay must exclude the highly homologous chromosome 5 pseudogene; chromosomal microarray or WES if negative.', src: [PAZ09, ATT] },
    { phase: 'Confirmation', category: 'Functional', method: 'Coupling / hemichannel assays (research)', detail: 'For classification of novel variants of uncertain significance.', src: [DOB, SARG] },
  ],
  differential: [
    'Pelizaeus-Merzbacher-like disease (GJC2): hypomyelination without ocular/dental/digital features',
    'CMTX1 (GJB1): peripheral demyelinating neuropathy, no ODDD triad',
    'Hallermann-Streiff syndrome',
    'Gorlin syndrome (PTCH1)',
    'Waardenburg syndrome',
    'Isolated type III syndactyly',
    'Other hypomyelinating leukodystrophies',
  ],
  phenotypes: {
    applicable: true,
    note: 'The literature distinguishes classic ODDD from a neurological (leukodystrophy) variant; variant class does not predict which form occurs.',
    forms: [
      { name: 'Classic ODDD', onset: 'Congenital (dental with eruption)', severity: 'Variable dysmorphic and ocular burden', progression: 'Stable dysmorphic features', genetics: 'Heterozygous, mostly missense', markers: 'Normal or mild subcortical MRI changes', src: [PAZ03, KUM, ALAO] },
      { name: 'Neurological / leukodystrophy variant', onset: 'Mostly 3rd–6th decade; juvenile onset documented', severity: 'Spastic paraparesis, ataxia, dysarthria, seizures, neurogenic bladder, cognitive decline', progression: 'Variable; can be slowly progressive over years', genetics: 'Heterozygous; no specific variant class', markers: 'Bilateral white matter hyperintensity, may precede symptoms', src: [DEBOCK, FUR, ALAO] },
      { name: 'Autosomal recessive ODDD', onset: 'Congenital', severity: 'Predominantly craniofacial-digital, sometimes skin involvement', progression: 'Not well characterised', genetics: 'Homozygous null / truncating', markers: 'Neurological phenotype poorly defined', src: [TAS, VST] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Glaucoma: topical IOP-lowering drugs; trabeculectomy or drainage devices when medical therapy fails.', src: [TEJ, KUM] },
    { category: 'Supportive', text: 'Refractive correction, amblyopia therapy and scleral shells for severe microphthalmia.', src: [KUM] },
    { category: 'Supportive', text: 'Dental surveillance from early childhood, fluoride, restorative and orthodontic care.', src: [PORN] },
    { category: 'Symptomatic', text: 'Spasticity: physiotherapy, baclofen or tizanidine, botulinum toxin, intrathecal baclofen, orthoses (no ODDD-specific trials).', src: [DEBOCK] },
    { category: 'Symptomatic', text: 'Seizures, neurogenic bladder (catheterisation, anticholinergics), dysarthria (speech therapy) and ataxia (rehabilitation) managed per standard care.', src: [DEBOCK] },
    { category: 'Supportive', text: 'Hand assessment and surgical syndactyly repair when functionally indicated.', src: [KUM] },
    { category: 'Monitoring', text: 'Baseline and periodic brain MRI and neurological review for all genetically confirmed patients; regular IOP checks.', src: [ALAO, KUM] },
    { category: 'Supportive', text: 'Genetic counselling: 50% recurrence risk for offspring; prenatal and preimplantation testing once the familial variant is known.', src: [PAZ03] },
  ],
  therapies: [
    { id: 'oddd-hemi', name: 'Cx43 hemichannel blockers (mimetic peptides)', modality: 'Other', target: 'Cx43 hemichannels', mechanism: 'Gap19, Gap26 or Gap27 peptides block pathological hemichannel opening.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; developed for other indications', ev: 'proposed', why: 'Mechanistically rational; no ODDD-specific data.', src: [DEBOCK] },
    { id: 'oddd-aso', name: 'Allele-specific ASO / siRNA', modality: 'Antisense / RNA', target: 'Mutant GJA1 allele', mechanism: 'Suppress dominant-negative allele to restore coupling.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; no programme identified', ev: 'proposed', why: 'Theoretical only.', src: [DEBOCK] },
    { id: 'oddd-chap', name: 'Proteostasis / chaperone correction', modality: 'Small molecule', target: 'Trafficking-deficient Cx43', mechanism: 'Chemical or pharmacological chaperones to restore Cx43 delivery to the membrane.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'Based on trafficking defect in cell models (e.g. p.Lys134del).', src: [SARG] },
    { id: 'oddd-aav', name: 'AAV-GJA1 gene therapy', modality: 'Gene therapy', target: 'GJA1', mechanism: 'Deliver wild-type GJA1 to astrocytes for haploinsufficient alleles.', delivery: 'CNS (not defined)', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'No preclinical data; broad astrocytic delivery is a major challenge.', src: [DEBOCK] },
    { id: 'oddd-edit', name: 'Base / prime editing of GJA1', modality: 'Gene editing', target: 'Dominant-negative GJA1 alleles', mechanism: 'Allele-specific correction of pathogenic variants.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'Theoretical only.', src: [DEBOCK] },
  ],
  trials: [],
  milestones: [
    { year: 2003, label: 'GJA1/Cx43 mutations identified as cause of ODDD', stage: 'Discovery', src: [PAZ03] },
    { year: 2005, label: 'Gja1 G60S mouse model; dominant-negative mechanism in vivo', stage: 'Animal studies', src: [FLEN] },
    { year: 2007, label: 'Hemichannel gain-of-function shown for ODDD variants', stage: 'Preclinical (cellular)', src: [DOB] },
    { year: 2009, label: 'Compilation of >60 GJA1 variants', stage: 'Discovery', src: [PAZ09] },
    { year: 2010, label: 'No genotype-phenotype correlation; MRI screening utility shown', stage: 'Discovery', src: [ALAO] },
    { year: 2013, label: 'ODDD framed as CNS Cx43 channelopathy; hemichannel blockers proposed', stage: 'Discovery', src: [DEBOCK, ABR] },
    { year: 2021, label: 'p.Lys134del trafficking defect characterised', stage: 'Preclinical (cellular)', src: [SARG] },
  ],
  gaps: [
    { text: 'No approved disease-modifying therapy and no registered clinical trials or natural-history registry.', ev: 'unknown', src: [DEBOCK, ABR] },
    { text: 'Frequency and predictors of neurological involvement remain undefined.', ev: 'unknown', src: [ALAO, DEBOCK] },
    { text: 'Systematic human neuropathology, MRS and DTI data are lacking.', ev: 'unknown', src: [DEBOCK] },
    { text: 'Relative contribution of coupling loss versus hemichannel gain-of-function to white matter injury is unresolved.', ev: 'proposed', src: [DOB, DEBOCK] },
    { text: 'No validated CSF or blood biomarkers.', ev: 'unknown', src: [DEBOCK] },
  ],
}
