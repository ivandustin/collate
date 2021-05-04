const empty = ''

function align(input, same = default_same) {    
    let { indexed, above, below } = preprocess(input)
    above                         = process(above, below, same)
    let output                    = postprocess(above, indexed)
    return output
}

function preprocess(input) {
    let indexed = sort(index(input))
    let below   = create_below(indexed)
    let above   = create_above(below)
    return { indexed, above, below }
}

function process(above, below, same) {
    for (let i = 1; i < below.length; i++) {
        let results = []
        results.push(backward(above, below, i, same))
        results.push(forward(above, below, i, same))
        results.sort((a,b)=> a.score - b.score)
        above = results.pop().above
    }
    return above
}

function postprocess(above, indexed) {
    let output = new Array(above.length)
    for (let i = 0; i < above.length; i++)
        output[indexed[i].index] = above[i]
    return output
}

function forward(above, below, index, same) {
    above        = copy(above)
    below        = copy(below)
    let dest     = above[index]
    let src      = below[index]
    let merged   = merge(above, index)
    let offset   = 0
    let matches  = 0
    let toppings = []
    let score    = 0

    while (src.length > 0) {
        let box   = src.shift()
        let found = false

        for (let i = offset; i < dest.length; i++) {
            let dest_index = i
            let boxes      = merged[dest_index]
            found          = boxes.findIndex(value => same(value, box)) != -1

            if (found) {
                matches++
                offset           = dest_index + 1
                dest[dest_index] = box
                if (toppings.length > 0) {
                    offset  += insert(toppings, dest_index, above, index)
                    toppings = []
                    merged   = merge(above, index)
                }
                break
            }
        }

        if (!found)
            toppings.push(box)
    }

    if (toppings.length > 0)
        insert(toppings, dest.length, above, index)

    score = matches * (1 / dest.length)

    return { above, score }
}

function backward(above, below, index, same) {
    above      = reverse(copy(above))
    below      = reverse(copy(below))
    let result = forward(above, below, index, same)
    reverse(result.above)
    return result
}

function reverse(array) {
    return array.map(array => array.reverse())
}

function index(array) {
    return array.map(function(value, index) { return { value, index } })
}

function sort(array) {
    return array.sort((a,b)=> b.value.length - a.value.length)
}

function create_below(indexed) {
    return copy(indexed.map(object => object.value))
}

function create_above(below) {
    let max_length = below[0].length
    let above      = below.map(()=> empty_array(max_length))
    above[0]       = below[0]
    return above
}

function empty_array(length) {
    let result = []
    for (let i = 0; i < length; i++)
        result.push(empty)
    return result
}

function default_same(a, b) {
    return a == b
}

function copy(array) {
    return array.map(array => array.slice())
}

function merge(columns, index) {
    let n      = columns[0].length
    let result = columns[0].map(()=> [])
    for (let i = 0; i < index; i++) {
        let column_index = i
        let column       = columns[column_index]
        for (let j = 0; j < n; j++) {
            let row_index = j
            let value     = column[row_index]
            let boxes     = result[row_index]
            if (value != empty)
                boxes.push(value)
        }
    }
    return result
}

function empty_array(length) {
    let result = []
    for (let i = 0; i < length; i++)
        result.push(empty)
    return result
}

function insert(boxes, row_index, columns, column_index) {
    let empty = empty_array(boxes.length)
    for (let i = 0; i < columns.length; i++) {
        let column = columns[i]
        let values = i == column_index ? boxes : empty
        column.splice(row_index, 0, ...values)
    }
    return boxes.length
}

module.exports = align
