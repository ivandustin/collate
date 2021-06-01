const assert  = require('assert')
const same    = require('./same')
const align   = require('./align')
const realign = require('./realign')

function collate(verses) {
    assert(verses.length > 0)

    let { name, address, book, chapter, verse } = verses[0]

    assert(name,    `Missing name`)
    assert(address, `Missing address name=${name}`)
    assert(book,    `Missing book name=${name}`)
    assert(chapter, `Missing chapter name=${name}`)
    assert(verse,   `Missing verse name=${name}`)

    verses.forEach(function(entry) {
        assert.equal(entry.address, address, `Incorrect address name=${name}`)
        assert.equal(entry.book,    book,    `Incorrect book name=${name}`)
        assert.equal(entry.chapter, chapter, `Incorrect chapter name=${name}`)
        assert.equal(entry.verse,   verse,   `Incorrect verse name=${name}`)
    })

    let names       = verses.map(verse => verse.name)
    let data        = verses.map(verse => verse.words)
    let alignment   = realign(align(data, same))
    let manuscripts = alignment.map(function(words, index) {
        let name = names[index]
        return { name, words }
    })
    
    return { address, book, chapter, verse, manuscripts }
}

module.exports = collate
