const assert = require('assert')
const fs     = require('fs')
const path   = require('path')

function save(books, dir) {
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true })
    books.forEach(function(book) {
        assert(book.length > 0)
        let sample   = book[0]
        let number   = sample.book
        let filename = pad(number) + '.json'
        let filepath = path.join(dir, filename)
        let data     = JSON.stringify(book, null, 4)
        fs.writeFileSync(filepath, data)
    })
}

function pad(number) {
    return number.toString().padStart(2, '0')
}

module.exports = save
