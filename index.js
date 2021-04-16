#!/usr/bin/env node
const package     = require('./package.json')
const argparse    = require('argparse')
const load        = require('./src/load')
const interactive = require('./src/interactive')

function main() {
    let args        = parse()
    let directories = args.directory
    let manuscripts = load(directories)
    interactive(manuscripts)
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('directory',       { nargs: '+', help: 'input directory that contains the manuscripts' })
    parser.add_argument('-o',              { metavar: 'OUTPUT', help: 'output directory of the collated manuscripts' })
    return parser.parse_args()
}

main()
