const align = require('./align')
const empty = ''

function deviation(a, b) {
    let total     = a.length + b.length
    let alignment = align([Array.from(a), Array.from(b)])
    let score     = alignment[0].filter(value => value == empty).length
    score        += alignment[1].filter(value => value == empty).length
    return total == 0 ? 0 : (score / 2) / (total / 2)
}

module.exports = deviation
