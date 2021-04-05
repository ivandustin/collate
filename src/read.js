const fs          = require('fs')
const path        = require('path')
const parse       = require('./parse-address')
const normalize   = require('./normalize')
const cr          = /\r/g
const newline     = '\n'
const whitespaces = /\s+/g
const space       = ' '

function read(filepath) {
    let ext  = path.extname(filepath)
    let name = path.basename(filepath, ext)

    return fs.readFileSync(filepath)
            .toString()
            .trim()
            .replace(cr, '')
            .split(newline)
            .map(line => line.trim())
            .map(line => line.replace(whitespaces, space))
            .map(line => line.split(space))
            .map(function(row) {
                let address                  = row[0]
                let words                    = normalize(row.slice(1))
                let { book, chapter, verse } = parse(address)
                return { name, address, book, chapter, verse, words }
            })
}

module.exports = read
