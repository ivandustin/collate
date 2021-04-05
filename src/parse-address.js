function parse(address) {
    let book    = parseInt(address.substr(0, 2))
    let chapter = parseInt(address.substr(2, 3))
    let verse   = parseInt(address.substr(5, 3))
    return { book, chapter, verse }
}

module.exports = parse
