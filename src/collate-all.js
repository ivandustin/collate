const groupby = require('./groupby')
const collate = require('./collate')

function collate_all(manuscripts) {
    let verses    = manuscripts.flat()
    let groups    = groupby(verses, 'address')
    let collation = groups.map(collate)
    let books     = groupby(collation, 'book')
    books.forEach(book => book.sort(sort))
    return books
}

function sort(a, b) {
    return (+a.address) - (+b.address)
}

module.exports = collate_all
