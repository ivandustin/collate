const assert    = require('assert')
const deviation = require('./deviation')
const same      = require('./same')
const empty     = ''
const sentinel  = 3
const initial   = 2

function realign(rows) {
    rows.forEach(function(row, row_index) {
        for (let i = 0; i < row.length; i++) {
            let word = row[i]
            if (word) {
                let scores = score(i, row_index, rows)
                let min    = Math.min(...scores)
                let index  = scores.indexOf(min)
                if (count(min, scores) == 1) {
                    if (i != index) {
                        row[i]     = empty
                        row[index] = word
                        i          = -1
                    }
                }
            }
        }
    })
    return drop_empty_columns(rows)
}

function init_scores(row, index) {
    let scores    = row.map(()=> sentinel)
    scores[index] = initial
    for (let i = index - 1; i >= 0; i--) {
        let word = row[i]
        if (word === empty)
            scores[i] = initial
        else
            break
    }
    for (let i = index + 1; i < row.length; i++) {
        let word = row[i]
        if (word === empty)
            scores[i] = initial
        else
            break
    }
    return scores
}


function score(index, row_index, rows) {
    let row    = rows[row_index]
    let word   = row[index]
    let scores = init_scores(row, index)
    return scores.map(function(score, index) {
        if (score != sentinel) {
            let column = get_column(index, rows).filter(remove_index(row_index)).filter(identity)
            let sames  = column.map(value => same(value, word)).filter(identity)
            if (column.length > 0) {
                if (sames.length > 0) {
                    let deviations = column.map(value => deviation(word, value))
                    score          = deviations.reduce(sum, 0) / column.length
                }
            }
        }
        return score
    })
}

function get_column(index, array) {
    return array.map(array => array[index])
}

function remove_index(index) {
    return function(x, i) {
        return i != index
    }
}

function sum(a, b) {
    return a + b
}

function count(value, array) {
    return array.filter(x => x == value).length
}

function identity(value) {
    return value
}

function drop_empty_columns(rows) {
    if (rows.length > 0) {
        for (let i = 0; i < rows[0].length; i++) {
            let row    = rows[i]
            let column = get_column(i, rows).filter(identity)
            if (column.length == 0)
                drop_column(i--, rows)
        }
    }
    return rows
}

function drop_column(index, rows) {
    rows.forEach(row => row.splice(index, 1))
}

module.exports = realign
