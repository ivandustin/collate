const assert = require('assert')
const same   = require('./same')
const align  = require('./align')

function collate(verses) {
    assert(verses.length > 0)

    let { address, book, chapter, verse } = verses[0]

    verses.forEach(function(entry) {
        assert.equal(entry.address, address)
        assert.equal(entry.book   , book)
        assert.equal(entry.chapter, chapter)
        assert.equal(entry.verse  , verse)
    })

    let names       = verses.map(verse => verse.name)
    let data        = verses.map(verse => verse.words)
    let alignment   = align(data, same)
    let manuscripts = alignment.map(function(words, index) {
        let name = names[index]
        return { name, words }
    })
    
    return { address, book, chapter, verse, manuscripts }
}

module.exports = collate
