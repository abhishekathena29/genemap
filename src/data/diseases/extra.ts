// Disease modules added from the additional GeneMap dossiers. Each module file
// exports its Disease record plus the genes and sources it introduces.
import type { Disease, Gene, Source } from '../types'
import { aars2, aars2Genes, aars2Sources } from './aars2'
import { acox1, acox1Genes, acox1Sources } from './acox1'
import { adld, adldGenes, adldSources } from './adld'
import { alsp, alspGenes, alspSources } from './alsp'
import { apbd, apbdGenes, apbdSources } from './apbd'
import { carasal, carasalGenes, carasalSources } from './carasal'
import { clcn2, clcn2Genes, clcn2Sources } from './clcn2'
import { ctx, ctxGenes, ctxSources } from './ctx'
import { dbp, dbpGenes, dbpSources } from './dbp'
import { fucosidosis, fucosidosisGenes, fucosidosisSources } from './fucosidosis'
import { gan, ganGenes, ganSources } from './gan'
import { habc, habcGenes, habcSources } from './habc'
import { hbsl, hbslGenes, hbslSources } from './hbsl'
import { hcc, hccGenes, hccSources } from './hcc'
import { labrune, labruneGenes, labruneSources } from './labrune'
import { lbsl, lbslGenes, lbslSources } from './lbsl'
import { ltbl, ltblGenes, ltblSources } from './ltbl'
import { mlc, mlcGenes, mlcSources } from './mlc'
import { nhd, nhdGenes, nhdSources } from './nhd'
import { oddd, odddGenes, odddSources } from './oddd'
import { pmld, pmldGenes, pmldSources } from './pmld'
import { rnaset2, rnaset2Genes, rnaset2Sources } from './rnaset2'
import { salla, sallaGenes, sallaSources } from './salla'
import { scp2, scp2Genes, scp2Sources } from './scp2'
import { sls, slsGenes, slsSources } from './sls'
import { sox10, sox10Genes, sox10Sources } from './sox10'
import { zsd, zsdGenes, zsdSources } from './zsd'

export const EXTRA_DISEASES: Disease[] = [
  mlc, pmld, habc, hbsl, lbsl, ltbl, aars2, hcc, sox10, oddd, rnaset2, labrune, carasal,
  clcn2, adld, alsp, nhd, gan, apbd, ctx, sls, zsd, dbp, acox1, scp2, salla, fucosidosis,
]

const uniqBy = <T>(xs: T[], key: (x: T) => string) => [...new Map(xs.map((x) => [key(x), x])).values()]

export const EXTRA_GENES: Gene[] = uniqBy(
  [
    mlcGenes, pmldGenes, habcGenes, hbslGenes, lbslGenes, ltblGenes, aars2Genes, hccGenes, sox10Genes, odddGenes,
    rnaset2Genes, labruneGenes, carasalGenes, clcn2Genes, adldGenes, alspGenes, nhdGenes, ganGenes, apbdGenes,
    ctxGenes, slsGenes, zsdGenes, dbpGenes, acox1Genes, scp2Genes, sallaGenes, fucosidosisGenes,
  ].flat(),
  (g) => g.symbol,
)

export const EXTRA_GENE_SYMBOLS = EXTRA_GENES.map((g) => g.symbol)

export const EXTRA_SOURCES: Source[] = uniqBy(
  [
    mlcSources, pmldSources, habcSources, hbslSources, lbslSources, ltblSources, aars2Sources, hccSources, sox10Sources,
    odddSources, rnaset2Sources, labruneSources, carasalSources, clcn2Sources, adldSources, alspSources, nhdSources,
    ganSources, apbdSources, ctxSources, slsSources, zsdSources, dbpSources, acox1Sources, scp2Sources, sallaSources,
    fucosidosisSources,
  ].flat(),
  (s) => s.id,
)
