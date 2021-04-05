const compare = require('./compare')
const empty   = ''

function recode(word) {
    let result = []

    for (let i = 0; i < word.length; i++) {
        let character = word[i]

        for (let code = 0x0391; code <= 0x03a9; code++) {
            let normal = String.fromCharCode(code)

            if (compare(character, normal) == 0) {
                result.push(normal)
                break
            }
        }
    }

    return result.join(empty)
}

function normalize(word) {
    let upper = word.toUpperCase()
    let lower = word.toLowerCase()
    return lower.length <= upper.length ? lower : upper
}

module.exports = recode
