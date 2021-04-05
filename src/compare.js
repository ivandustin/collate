const greek    = 'el-GR'
const collator = new Intl.Collator(greek, { sensitivity: 'base' })
const compare  = collator.compare
module.exports = compare
