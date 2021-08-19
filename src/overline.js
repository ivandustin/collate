const unicode = '\u0305'
const empty   = ''

function add(word) {
    return Array.from(remove(word)).map(function(character) {
        return [character, unicode]
    }).flat().join(empty)
}

function remove(word) {
    return Array.from(word).filter(function(character) {
        return character != unicode
    }).join(empty)
}

function all(word) {
    if (word.length > 0 && word.length % 2 == 0) {
        for (let i = 1; i < word.length; i += 2) {
            let character = word[i]
            if (character != unicode)
                return false
        }
        return true
    }
    return false
}

module.exports = { unicode, add, remove, all }
