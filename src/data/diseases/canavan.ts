import type { Disease } from '../types'

const GR = 'gr:canavan'

export const canavan: Disease = {
  id: 'canavan',
  name: 'Canavan Disease',
  short: 'Canavan',
  color: '#2f7fd8',
  synonyms: ['Aspartoacylase deficiency', 'ASPA deficiency', 'Spongy degeneration of the CNS', 'Canavan–van Bogaert–Bertrand disease'],
  classification: 'Spongiform leukodystrophy; organic aciduria (NAA metabolism)',
  inheritance: 'Autosomal recessive',
  genes: ['ASPA'],
  tagline: 'Loss of aspartoacylase → NAA accumulation → spongiform degeneration of white matter.',
  identifiers: [
    { label: 'OMIM', value: '271900', url: 'https://www.omim.org/entry/271900' },
    { label: 'Orphanet', value: 'ORPHA:141', url: 'https://www.orpha.net/en/disease/detail/141' },
    { label: 'GeneReviews', value: 'NBK1234', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1234/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=Canavan%20disease' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic variants in ASPA cause deficient aspartoacylase activity.', ev: 'established', why: 'Gene identified by positional and functional cloning; replicated in all genetically confirmed cohorts.', src: ['lit:kaul1993', GR, 'omim:271900'] },
    { label: 'Hallmark metabolite', text: 'Marked elevation of N-acetylaspartate (NAA) in urine, plasma, CSF and brain.', ev: 'established', why: 'Diagnostic biochemical finding used in clinical practice.', src: ['lit:matalon1988', GR] },
    { label: 'Core pathology', text: 'Spongiform (vacuolar) degeneration of white matter with intramyelinic oedema and astrocytic swelling.', ev: 'established', why: 'Consistent neuropathology across autopsy series.', src: [GR, 'nord:canavan'] },
    { label: 'Primary cell types', text: 'Oligodendrocytes (ASPA-expressing) with secondary astrocytic and neuronal involvement.', ev: 'strong', why: 'ASPA expression is oligodendroglial; cell-type contributions to pathology derived largely from animal models.', src: ['lit:moffett2007'] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typical (neonatal/infantile) form presents at 3–6 months of age.', ev: 'established', src: [GR] },
    { label: 'Neurological features', text: 'Hypotonia, poor head control, macrocephaly, developmental arrest, irritability, later spasticity, seizures and optic atrophy / visual impairment.', ev: 'established', src: [GR, 'nord:canavan'] },
    { label: 'Progression', text: 'Progressive; most children with the typical form do not achieve independent sitting or walking.', ev: 'established', src: [GR] },
    { label: 'Prognosis', text: 'Survival is variable; many affected individuals die in childhood, though survival into the second decade and beyond is reported with supportive care.', ev: 'strong', why: 'Derived from case series rather than prospective natural-history cohorts.', src: [GR] },
    { label: 'Phenotypic variation', text: 'A mild / juvenile form with modest developmental delay, often with only mildly elevated NAA, is described.', ev: 'strong', src: [GR] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Rare in the general population; precise pan-ethnic incidence is not established.', ev: 'unknown', why: 'No population-based incidence studies outside founder populations.', src: [GR, 'orpha:141'] },
    { label: 'Founder population', text: 'Most frequent among people of Ashkenazi Jewish ancestry, with a carrier frequency in the range of ~1 in 40–60.', ev: 'established', why: 'Multiple carrier-screening programs.', src: [GR] },
    { label: 'Founder variants', text: 'p.Glu285Ala and p.Tyr231Ter account for the large majority of Ashkenazi alleles; p.Ala305Glu is the most common allele in non-Jewish European patients.', ev: 'established', src: ['lit:kaul1993', GR] },
    { label: 'Sex distribution', text: 'Equal sex distribution, as expected for autosomal recessive inheritance.', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'aspa-e285a', disease: 'canavan', gene: 'ASPA', transcript: 'NM_000049.4', hgvsc: 'c.854A>C', hgvsp: 'p.(Glu285Ala)', build: 'GRCh38', type: 'Missense', consequence: 'Near-complete loss of enzymatic activity', clinvar: 'Pathogenic', popFreq: 'Enriched in Ashkenazi Jewish population (founder)', phenotype: 'Typical infantile Canavan disease (homozygous)', functional: 'Expressed protein shows severely reduced activity', ev: 'established', why: 'Founder allele with consistent segregation and functional data.', src: ['lit:kaul1993', GR, 'db:clinvar:ASPA'] },
    { id: 'aspa-y231x', disease: 'canavan', gene: 'ASPA', transcript: 'NM_000049.4', hgvsc: 'c.693C>A', hgvsp: 'p.(Tyr231Ter)', build: 'GRCh38', type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: 'Pathogenic', popFreq: 'Second most common Ashkenazi allele', phenotype: 'Typical infantile Canavan disease', functional: 'Truncated / absent protein', ev: 'established', why: 'Founder allele; null mechanism.', src: [GR, 'db:clinvar:ASPA'] },
    { id: 'aspa-a305e', disease: 'canavan', gene: 'ASPA', transcript: 'NM_000049.4', hgvsc: 'c.914C>A', hgvsp: 'p.(Ala305Glu)', build: 'GRCh38', type: 'Missense', consequence: 'Loss of enzymatic activity (protein misfolding)', clinvar: 'Pathogenic', popFreq: 'Most common allele in non-Jewish European patients', phenotype: 'Typical infantile Canavan disease', functional: 'Reduced activity and stability in expression studies', ev: 'established', why: 'Recurrent across independent European cohorts.', src: [GR, 'db:clinvar:ASPA'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Null and founder missense genotypes are associated with the typical severe infantile form.', ev: 'strong', why: 'Consistent across case series, but numbers are small.', src: [GR] },
    { aspect: 'Clinical phenotype', finding: 'Mild/juvenile Canavan disease is associated with at least one hypomorphic allele retaining residual activity.', ev: 'emerging', why: 'Based on a limited number of reported families.', src: [GR] },
    { aspect: 'Biomarker levels', finding: 'Urinary NAA tends to be only mildly elevated in mild forms, but correlation with severity across the spectrum is not quantitatively defined.', ev: 'emerging', why: 'Small, heterogeneous case reports.', src: [GR] },
    { aspect: 'Survival / outcome', finding: 'No validated genotype-based predictor of survival.', ev: 'unknown', why: 'Absent from prospective natural-history data.', src: [GR] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'ASPA (17p13.2)', detail: 'Biallelic loss-of-function variants.', ev: 'established', src: ['lit:kaul1993'] },
    { stage: 'Protein', label: 'Aspartoacylase', detail: 'Oligodendroglial zinc-dependent hydrolase is absent or inactive.', ev: 'established', src: ['lit:kaul1993', 'db:uniprot:ASPA'] },
    { stage: 'Molecular function', label: 'NAA hydrolysis fails', detail: 'NAA synthesised by neurons (NAT8L) is not cleaved to acetate + aspartate in oligodendrocytes.', ev: 'established', src: ['lit:matalon1988', 'lit:moffett2007'] },
    { stage: 'Pathway', label: 'NAA accumulation / acetate deficit', detail: 'Elevated brain NAA (osmolyte) and reduced acetate supply for myelin lipid synthesis; relative contribution of each is debated.', ev: 'strong', src: ['lit:moffett2007', 'lit:guo2015'] },
    { stage: 'Cellular consequence', label: 'Intramyelinic oedema & vacuolation', detail: 'Osmotic stress, oligodendrocyte dysfunction and astrocytic swelling.', ev: 'strong', src: ['lit:guo2015', 'lit:maier2015'] },
    { stage: 'Phenotype', label: 'Spongiform leukodystrophy', detail: 'Macrocephaly, hypotonia, developmental failure, progressive spasticity.', ev: 'established', src: [GR] },
  ],
  relations: [
    { from: ['gene', 'ASPA'], to: ['metabolite', 'NAA accumulation'], label: 'loss causes', ev: 'established', why: 'Enzyme deficiency and NAA elevation co-segregate in every confirmed case; diagnostic.', src: ['lit:matalon1988', 'lit:kaul1993', GR] },
    { from: ['metabolite', 'NAA accumulation'], to: ['phenotype', 'Spongiform white matter'], label: 'drives', ev: 'strong', why: 'Genetic NAA ablation (Nat8l knockout) prevents leukodystrophy in Aspa-deficient mice.', src: ['lit:guo2015', 'lit:maier2015'] },
    { from: ['gene', 'NAT8L'], to: ['metabolite', 'NAA accumulation'], label: 'synthesises', ev: 'strong', why: 'Demonstrated in knockout mouse models from two independent groups.', src: ['lit:guo2015', 'lit:maier2015'] },
    { from: ['gene', 'SLC13A3'], to: ['metabolite', 'NAA accumulation'], label: 'transports (proposed)', ev: 'emerging', why: 'Recent model-system data implicate NaDC3 in NAA handling; no human confirmation.', src: ['q:slc13a3-naa'] },
    { from: ['gene', 'ASPA'], to: ['cell', 'Oligodendrocytes'], label: 'expressed in', ev: 'established', why: 'Concordant immunohistochemistry and expression atlases.', src: ['lit:moffett2007', 'db:hpa:ASPA'] },
    { from: ['metabolite', 'NAA accumulation'], to: ['biomarker', 'Urine NAA'], label: 'measured as', ev: 'established', why: 'Standard diagnostic assay.', src: [GR] },
    { from: ['therapy', 'AAV-ASPA gene therapy'], to: ['gene', 'ASPA'], label: 'restores', ev: 'emerging', why: 'Efficacy in mouse models; early-phase human trials ongoing.', src: ['lit:gessler2017', 'ct:NCT04998396', 'ct:NCT04833907'] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Site of ASPA expression and NAA catabolism; myelin vacuolation.', ev: 'established', src: ['lit:moffett2007'] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Astrocytic swelling and water imbalance contribute to spongiform change.', ev: 'strong', src: [GR] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Neurons synthesise NAA (NAT8L); secondary neuronal/axonal injury later in course.', ev: 'strong', src: ['lit:moffett2007', 'lit:guo2015'] },
  ],
  regions: [
    { region: 'Subcortical U-fibres', finding: 'Early, prominent involvement of subcortical white matter.', src: [GR] },
    { region: 'Globus pallidus & thalamus', finding: 'Deep grey matter involvement on MRI.', src: [GR] },
    { region: 'Brainstem & cerebellum', finding: 'Involvement common as disease progresses.', src: [GR] },
  ],
  biomarkers: [
    { name: 'Urine NAA', category: 'Biochemical', significance: 'Direct readout of the metabolic block.', sample: 'Urine', assay: 'GC-MS organic acid analysis', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Only mildly elevated in mild/juvenile forms.', ev: 'established', src: ['lit:matalon1988', GR] },
    { name: 'Brain NAA peak (MRS)', category: 'Imaging', significance: 'Elevated NAA/creatine ratio reflects brain NAA accumulation.', sample: 'In vivo brain', assay: 'Proton MR spectroscopy', purpose: ['Diagnosis', 'Monitoring', 'Treatment response'], status: 'Established clinical', limitations: 'Quantification varies by protocol; used as exploratory endpoint in trials.', ev: 'established', src: [GR] },
    { name: 'ASPA enzyme activity', category: 'Enzymatic', significance: 'Confirms enzyme deficiency.', sample: 'Cultured skin fibroblasts', assay: 'Enzyme assay', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Limited availability; largely superseded by molecular testing.', ev: 'established', src: [GR] },
    { name: 'Myelination indices (MRI)', category: 'Imaging', significance: 'Quantitative myelin imaging as therapeutic readout.', sample: 'In vivo brain', assay: 'Quantitative MRI', purpose: ['Treatment response'], status: 'Experimental', limitations: 'Not validated against clinical outcome.', ev: 'proposed', src: ['ct:NCT04998396'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant with macrocephaly, hypotonia and loss/absence of head control at 3–6 months.', src: [GR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI ± MRS', detail: 'Diffuse symmetric white-matter T2 hyperintensity including U-fibres; markedly elevated NAA peak on MRS.', src: [GR] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Urine organic acids', detail: 'Markedly elevated NAA.', src: ['lit:matalon1988', GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'ASPA sequencing / targeted founder panel', detail: 'Biallelic pathogenic ASPA variants; targeted testing in Ashkenazi ancestry.', src: [GR, 'db:clinvar:ASPA'] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'ASPA activity in fibroblasts', detail: 'Used when molecular results are inconclusive.', src: [GR] },
  ],
  differential: ['Alexander disease (macrocephaly, frontal predominance)', 'Megalencephalic leukoencephalopathy with subcortical cysts (MLC)', 'L-2-hydroxyglutaric aciduria', 'GM2 gangliosidoses'],
  phenotypes: {
    applicable: true,
    note: 'The literature supports a distinction between typical (neonatal/infantile) and mild/juvenile Canavan disease.',
    forms: [
      { name: 'Typical (neonatal / infantile)', onset: '3–6 months', severity: 'Severe', progression: 'Progressive; limited motor acquisition', genetics: 'Biallelic null or severe missense', markers: 'Markedly ↑ urine NAA; MRS NAA peak; diffuse WM signal', src: [GR] },
      { name: 'Mild / juvenile', onset: 'Childhood', severity: 'Mild developmental delay', progression: 'Slow or static', genetics: 'At least one hypomorphic allele', markers: 'Mildly ↑ NAA; restricted MRI changes (e.g. basal ganglia)', src: [GR] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Nutrition and hydration support; gastrostomy for feeding difficulty.', src: [GR] },
    { category: 'Symptomatic', text: 'Anti-seizure medication; management of spasticity and irritability.', src: [GR] },
    { category: 'Supportive', text: 'Physiotherapy, positioning, and multidisciplinary rehabilitation.', src: [GR, 'nord:canavan'] },
    { category: 'Monitoring', text: 'Regular neurological, nutritional, ophthalmological and developmental follow-up.', src: [GR] },
  ],
  therapies: [
    { id: 'cd-aav-olig', name: 'rAAV-Olig001-ASPA', modality: 'Gene therapy', target: 'ASPA', mechanism: 'Oligodendrocyte-tropic AAV restores ASPA expression.', delivery: 'Intracerebroventricular', stage: 'Early human trials', evidenceBase: 'Human + animal', status: 'Phase 1/2', ev: 'emerging', why: 'Preclinical rescue; early human data limited.', src: ['ct:NCT04833907'] },
    { id: 'cd-bbp812', name: 'BBP-812 (AAV9-ASPA)', modality: 'Gene therapy', target: 'ASPA', mechanism: 'Systemic AAV9 delivery of ASPA.', delivery: 'Intravenous', stage: 'Early human trials', evidenceBase: 'Human + animal', status: 'Phase 1/2', ev: 'emerging', why: 'Mouse rescue (Gessler 2017); early-phase human trial.', src: ['lit:gessler2017', 'ct:NCT04998396'] },
    { id: 'cd-nat8l-sr', name: 'NAT8L suppression (substrate reduction)', modality: 'Substrate reduction', target: 'NAT8L', mechanism: 'Reduce neuronal NAA synthesis to prevent accumulation.', delivery: 'Genetic / ASO (model)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical', ev: 'proposed', why: 'Genetic ablation rescues mouse pathology; no pharmacological agent in humans.', src: ['lit:guo2015', 'lit:maier2015'] },
    { id: 'cd-slc13a3', name: 'SLC13A3 (NaDC3) modulation', modality: 'Small molecule', target: 'SLC13A3', mechanism: 'Limit NAA transport into glia.', delivery: '—', stage: 'Discovery', evidenceBase: 'Animal', status: 'Discovery', ev: 'emerging', why: 'Target recently proposed from model data.', src: ['q:slc13a3-naa'] },
    { id: 'cd-lithium', name: 'Lithium citrate / acetate supplementation', modality: 'Other', target: 'NAA level / acetate', mechanism: 'Lower brain NAA (lithium) or supplement acetate (glyceryl triacetate).', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Small open-label studies; no established benefit', ev: 'controversial', why: 'Small uncontrolled studies with inconsistent clinical effect.', src: [GR] },
  ],
  trials: [
    { nct: 'NCT04998396', title: 'CANaspire: AAV9 gene therapy for Canavan disease', intervention: 'BBP-812', therapyId: 'cd-bbp812', mechanism: 'ASPA gene replacement', type: 'Interventional', phase: 'Phase 1/2', status: 'Recruiting', sponsor: 'Aspa Therapeutics (BridgeBio)', population: 'Children with Canavan disease', outcomes: 'Safety; NAA by MRS; motor function', snapshot: '2025-06-01', verified: false },
    { nct: 'NCT04833907', title: 'Gene therapy for Canavan disease (rAAV-Olig001-ASPA)', intervention: 'rAAV-Olig001-ASPA', therapyId: 'cd-aav-olig', mechanism: 'ASPA gene replacement (oligodendrocyte-targeted)', type: 'Interventional', phase: 'Phase 1/2', status: 'Recruiting', sponsor: 'Myrtelle Inc.', population: 'Children with Canavan disease', outcomes: 'Safety; MRS NAA; myelination; development', snapshot: '2025-06-01', verified: false },
  ],
  milestones: [
    { year: 1988, label: 'Aspartoacylase deficiency & NAA aciduria identified', stage: 'Discovery', src: ['lit:matalon1988'] },
    { year: 1993, label: 'ASPA cloned; founder variant described', stage: 'Discovery', src: ['lit:kaul1993'] },
    { year: 2015, label: 'NAA ablation rescues mouse model', stage: 'Animal studies', src: ['lit:guo2015', 'lit:maier2015'] },
    { year: 2017, label: 'AAV9-ASPA rescues Aspa-deficient mice', stage: 'Animal studies', src: ['lit:gessler2017'] },
    { year: 2021, label: 'First-in-human AAV trials open', stage: 'Early human trials', src: ['ct:NCT04833907', 'ct:NCT04998396'] },
  ],
  gaps: [
    { text: 'No validated natural-history cohort or clinical outcome measures for trial endpoints.', ev: 'unknown', src: [GR] },
    { text: 'Relative pathogenic weight of NAA excess vs acetate deficiency remains unresolved.', ev: 'controversial', src: ['lit:moffett2007', 'lit:guo2015'] },
    { text: 'Role of NAA transporters (e.g. SLC13A3) in human disease is untested.', ev: 'emerging', src: ['q:slc13a3-naa'] },
  ],
}
