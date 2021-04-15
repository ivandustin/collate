const readline = require('readline')
const collate  = require('./collate')
const space    = ' '

async function main(manuscripts) {
    let lookup    = create_lookup(manuscripts)
    let interface = readline.createInterface({
        input:  process.stdin,
        output: process.stdout
    })
    
    while (true)
        await ask(interface, lookup)
}

function ask(interface, lookup) {
    return new Promise(function(resolve) {
        interface.question('Enter manuscript address (e.g. 40001001): ', function(address) {
            address    = address.trim()
            let verses = lookup[address]

            if (!verses) {
                console.error('Address not found')
            } else {
                let names     = verses.map(verse => verse.name)
                let collation = collate(verses)
                let table     = create_table(collation)

                console.table(table)
            }

            resolve()
        })
    })
}

function create_lookup(manuscripts) {
    let lookup = {}
    manuscripts.forEach(function(verses) {
        verses.forEach(function(verse) {
            let { address } = verse
            if (!lookup[address])
                lookup[address] = []
            lookup[address].push(verse)
        })
    })
    return lookup
}

function create_table(collation) {
    let entries = collation.manuscripts.map(manuscript => [ manuscript.name, manuscript.words ])
    return Object.fromEntries(entries)
}

module.exports = main
