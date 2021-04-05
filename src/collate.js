const same  = require('./same')
const align = require('./align')

function collate(verses) {
    let data = verses.map(verse => verse.words)
    return align(data, same)
}

module.exports = collate
