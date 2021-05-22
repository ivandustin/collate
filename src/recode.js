const compare  = require('./compare')
const overline = require('./overline')
const empty    = ''

function recode(word) {
    let array = []

    for (let i = 0; i < word.length; i++) {
        let character = word[i]
        let normal    = normalize(character)

        if (normal)
            array.push(normal)
        else
            if (is_greek(character))
                array.push(character.toUpperCase())
    }

    let result = array.join(empty)

    if (overline.all(word))
        result = overline.add(result)

    return result
}

function normalize(character) {
    for (let code = 0x0391; code <= 0x03a9; code++) {
        let normal = String.fromCharCode(code)
        if (compare(character, normal) == 0)
            return normal
    }
    return null
}

function is_greek(character) {
    let code = character.charCodeAt(0)
    return (code >= 880 && code <= 1023) || (code >= 7936 && code <= 8191)
}

module.exports = recode
