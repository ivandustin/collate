const overline = require('./overline')

function nomina_sacra(first_word, second_word) {
    let { a, b } = sort(first_word, second_word)
    if (overline.all(a)) {
        a = overline.remove(a)
        b = overline.remove(b)
        if (first(a) == first(b) && last(a) == last(b)) {
            let offset = 0
            for (let i = 0; i < a.length; i++) {
                let index = b.indexOf(a[i], offset)
                if (index == -1)
                    return false
                offset = index + 1
            }
            return true
        }
    }
    return false
}

function sort(a, b) {
    let array = [a, b]
    array.sort(sort_function)
    a = array[0]
    b = array[1]
    return { a, b }
}

function sort_function(a, b) {
    a = overline.remove(a)
    b = overline.remove(b)
    return a.length - b.length
}

function first(word) {
    return word[0]
}

function last(word) {
    return word[word.length - 1]
}

module.exports = nomina_sacra
