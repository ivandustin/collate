const symbols = ['*', '^', 'a', 'b']
const open    = '{'
const close   = '}'
const space   = ' '

function apply(words) {
    return words
        .map(function(word) {
            let first      = word[0]
            let second     = word[1]
            let last       = word[word.length - 1]
            let correction = false
            let precedence = 0
            let index      = symbols.indexOf(first)

            if (~index) {
                if (second == open && last == close) {
                    correction = true
                    precedence = index
                    word       = word.substring(2, word.length - 1)
                }
            }

            return { correction, precedence, word }
        })
        .reduce(function(array, next_word) {
            if (array.length == 0) {
                array.push(next_word)
            } else {
                let index = array.length - 1
                let word  = array[index]

                if (word.correction && next_word.correction && next_word.precedence > word.precedence)
                    array[index] = next_word
                else
                    array.push(next_word)
            }
            
            return array
        }, [])
        .map(object => object.word.split(space))
        .flat()
}

function reconstruct(words) {
    let output = []
    let stack  = []

    words.forEach(function(word) {
        let first   = word[0]
        let second  = word[1]
        let last    = word[word.length - 1]
        let symbol  = symbols.indexOf(first)

        if (stack.length > 0) {
            if (last == close) {
                stack.push(word)
                output.push(stack.join(space))
                stack = []
            } else {
                stack.push(word)
            }
        } else {
            if (~symbol && second == open && last != close)
                stack.push(word)
            else
                output.push(word)
        }
    })

    return output
}

function fix(words) {
    return words.map(function(word) {
        let first      = word[0]
        let open_index = word.indexOf(open)
        let a          = ''
        let b          = word

        if (~symbols.indexOf(first)) {
            if (~open_index) {
                a = word.substring(1, open_index)
                b = first + word.substring(open_index)
            }
        }

        return [a, b]
    }).flat().filter(value => value)
}

module.exports = { apply, reconstruct, fix }
