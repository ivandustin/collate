const fs       = require('fs')
const path     = require('path')
const readline = require('readline')
const read     = require('./src/read')
const collate  = require('./src/collate')
const args     = process.argv.slice(2)

function main() {
    let dir         = args[0]
    let files       = fs.readdirSync(dir)
    let filepaths   = files.map(filename => path.join(dir, filename))
    let manuscripts = filepaths.map(read)
    let lookup      = {}

    manuscripts.forEach(verses => add(verses, lookup))
    command_line(lookup)
}

function command_line(lookup) {
    const rl = readline.createInterface({
        input:  process.stdin,
        output: process.stdout
    })

    function ask() {
        setTimeout(function() {
            rl.question('Enter manuscript address (e.g. 40001001): ', function(address) {
                address    = address.trim()
                let verses = lookup[address]

                if (!verses) {
                    console.error('Address not found')
                } else {
                    let collation = collate(verses)

                    console.log()
                    print_verses(verses)
                    console.log()
                    print_collation(collation)
                    console.log()
                }

                ask()
            })
        }, 0)
    }

    ask()
}

function add(verses, lookup) {
    verses.forEach(function(verse) {
        let { address } = verse
        if (!lookup[address])
            lookup[address] = []
        let group = lookup[address]
        group.push(verse)
    })
}

function print_verses(verses) {
    let names      = verses.map(verse => verse.name)
    let lengths    = names.map(name => name.length)
    let max_length = Math.max(...lengths)
    verses.forEach(verse => console.log(verse.name.padStart(max_length), verse.words.join(' ')))
}

function print_collation(collation) {
    let length = collation[0].length
    console.log('Columns', length)
    for (let i = 0; i < length; i++) {
        let words   = collation.map(words => words[i])
        let lengths = words.map(word => word.length)
        let max     = Math.max(...lengths)

        collation.forEach(words => words[i] = words[i].padStart(max, ' '))
    }
    collation.forEach(words => console.log(words.join(' ')))
}

main()
