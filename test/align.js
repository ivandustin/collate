const assert  = require('assert')
const align   = require('../src/align')
const space   = ' '
const empty   = ''
const newline = '\n'

describe('align', function() {
    it('is correct', function() {
        let input    = transform(['ABC', 'ABC'])
        let expected = transform(['ABC', 'ABC'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABC', 'AB'])
        let expected = transform(['ABC', 'AB '])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABCD', 'ACD', 'AD'])
        let expected = transform(['ABCD', 'A CD', 'A  D'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABCD', 'AXC'])
        let expected = transform(['AB CD', 'A XC '])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABCD', 'AXCD'])
        let expected = transform(['AB CD', 'A XCD'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['A', 'ABC'])
        let expected = transform(['A  ', 'ABC'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABCD', 'DEF'])
        let expected = transform(['ABCD  ', '   DEF'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABC', 'ACC', 'AC'])
        let expected = transform(['ABC ', 'A CC', 'A C '])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ABCX', 'AXBC'])
        let expected = transform(['A BCX', 'AXBC '])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ΤΕΣΣΑΡΑ', 'ΤΕΣΣΕΡΑ'])
        let expected = transform(['ΤΕΣΣΑ ΡΑ', 'ΤΕΣΣ ΕΡΑ'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['ΤΕΣΣΕΡΑ', 'ΤΕΣΣΑΡΑ'])
        let expected = transform(['ΤΕΣΣ ΕΡΑ', 'ΤΕΣΣΑ ΡΑ'])
        let actual   = align(input)
        assert.deepEqual(actual, expected, pretty(actual))
    })
    it('is correct', function() {
        let input    = transform(['TECCAPA', 'TECCEPA'])
        let expected = transform(['TECCA PA', 'TECC EPA'])
        let actual   = align(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input    = transform(['TECCEPA', 'TECCAPA'])
        let expected = transform(['TECC EPA', 'TECCA PA'])
        let actual   = align(input)
        assert.deepEqual(actual, expected, pretty(actual))
    })
})

function transform(array) {
    return array.map(array => Array.from(array).map(value => value == space ? empty : value))
}

function pretty(array) {
    return newline + array.map(array => array.map(value => value ? value : space).join(empty)).join(newline)
}
