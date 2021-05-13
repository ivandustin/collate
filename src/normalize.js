const corrections = require('./corrections')
const overline    = require('./overline')
const recode      = require('./recode')
const empty       = ''

function normalize(words) {
    return corrections.apply(corrections.reconstruct(words))
        .map(page_break)
        .map(column_break)
        .map(line_break)
        .map(line_remnant)
        .map(verse_remnant)
        .map(damaged)
        .map(missing)
        .map(supplied)
        .map(vid)
        .map(nomina_sacra)
        .map(numeric)
        .map(recode)
        .filter(word => word != empty)
}

function page_break(word) {
    return word.replace(/\\[0-9]*/g, empty)
}

function column_break(word) {
    return word.replace(/\|[0-9]*/g, empty)
}

function line_break(word) {
    return word.replace(/\/[0-9]*/g, empty)
}

function line_remnant(word) {
    return word.replace(/\&[0-9]*/g, empty)
}

function verse_remnant(word) {
    return word.replace(/\*/g, empty)
}

function damaged(word) {
    return word.replace(/\%/g, empty)
}

function missing(word) {
    return word.replace(/\^/g, empty)
}

function supplied(word) {
    return word[0] == '~' ? word.substr(1) : word
}

function vid(word) {
    return word[0] == '+' ? word.substr(1) : word
}

function nomina_sacra(word) {
    return word[0] == '=' ? overline.add(word.substr(1)) : word
}

function numeric(word) {
    return word[0] == '$' ? overline.add(word.substr(1)) : word
}

module.exports = normalize
