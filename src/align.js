const empty = ''
let   id    = 0

class CustomArray extends Array {
    constructor(array) {
        super(...array)
        this.id = id++
    }
}

function align(input, same = default_same) {
    input           = input.map(array => new CustomArray(array))
    let ids         = input.map(array => array.id)
    let below       = sort(input)
    let max_length  = below[0].length
    let above       = below.map(()=> empty_array(max_length))
    let result      = []

    below.forEach(function(source, index) {
        surface(source, above, index, same)
    })

    ids.forEach(function(id) {
        let index = below.findIndex(array => array.id == id)
        result.push(above[index])
    })

    return result
}

function sort(array) {
    return array.sort((a,b)=> b.length - a.length)
}

function empty_array(length) {
    let result = []
    for (let i = 0; i < length; i++)
        result.push(empty)
    return result
}

function surface(source, above, index, same) {
    let destination = above[index]

    if (index == 0) {
        source.forEach(function(box, index) {
            destination[index] = box
        })
        return
    }

    source.forEach(function(box, box_index) {
        let merged = merge(above, index)
        let offset = last_empty(destination)

        for (let i = offset; i < merged.length; i++) {
            let boxes        = merged[i]
            let target_index = i
            let found        = ~boxes.findIndex(value => same(value, box))

            if (found) {
                destination[target_index] = box
                source[box_index]         = empty

                let toppings = get_toppings(source, box_index)

                if (toppings.length > 0)
                    insert(toppings, index, target_index, above)

                break
            }
        }
    })

    let offset   = last_empty(destination)
    let toppings = get_toppings(source, source.length)

    if (toppings.length > 0)
        insert(toppings, index, offset, above)
}

function merge(above, index) {
    let n      = above[0].length
    let result = new Array(n)

    for (let i = 0; i < index; i++) {
        above[i].forEach(function(box, box_index) {
            if (box != empty) {
                let boxes = result[box_index]
                if (!boxes)
                    boxes = result[box_index] = []
                if (boxes.indexOf(box) == -1)
                    boxes.push(box)
            }
        })
    }

    return result
}

function default_same(box, target) {
    return box == target
}

function last_empty(array) {
    let result = array.length
    for (let i = array.length - 1; i >= 0; i--) {
        let value = array[i]
        if (value != empty)
            break
        result = i
    }
    return result
}

function get_toppings(boxes, box_index) {
    let result = []
    for (let i = 0; i < box_index; i++) {
        let box = boxes[i]
        if (box != empty) {
            boxes[i] = empty
            result.push(box)
        }
    }
    return result
}

function insert(boxes, target_column_index, index, columns) {
    let empty_boxes = empty_array(boxes.length)
    columns.forEach(function(column, column_index) {
        let input = empty_boxes
        if (column_index == target_column_index)
            input = boxes
        column.splice(index, 0, ...input)
    })
}

module.exports = align
