const yargs       = require('yargs')
const load        = require('./load')
const interactive = require('./interactive')

function main() {
    let args        = parse()
    let dirs        = args._
    let manuscripts = load(dirs)
    interactive(manuscripts)
}

function parse() {
    return yargs(process.argv.slice(2)).argv
}

module.exports = main
