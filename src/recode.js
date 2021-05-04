const compare  = require('./compare')
const overline = require('./overline')
const empty    = ''

function recode(word) {
    let array = []

    for (let i = 0; i < word.length; i++) {
        let character = word[i]

        for (let code = 0x0391; code <= 0x03a9; code++) {
            let normal = String.fromCharCode(code)

            if (compare(character, normal) == 0) {
                array.push(normal)
                break
            }
        }
    }

    let result = array.join(empty)

    if (overline.all(word))
        result = overline.add(result)

    return result
}

function normalize(word) {
    let upper = word.toUpperCase()
    let lower = word.toLowerCase()
    return lower.length <= upper.length ? lower : upper
}

module.exports = recode
