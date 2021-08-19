const assert   = require('assert')
const overline = require('../src/overline')

describe('overline', function() {
    describe('unicode', function() {
        it('is correct', function() {
            assert.equal(overline.unicode, '\u0305')
        })
    })
    describe('add', function() {
        it('is correct', function() {
            let input    = 'ABC'
            let expected = 'A\u0305B\u0305C\u0305'
            let actual   = overline.add(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = 'A\u0305B\u0305C\u0305'
            let expected = 'A\u0305B\u0305C\u0305'
            let actual   = overline.add(input)
            assert.equal(actual, expected)
        })
    })
    describe('remove', function() {
        it('is correct', function() {
            let input    = 'A\u0305B\u0305C\u0305'
            let expected = 'ABC'
            let actual   = overline.remove(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = 'ABC'
            let expected = 'ABC'
            let actual   = overline.remove(input)
            assert.equal(actual, expected)
        })
    })
    describe('all', function() {
        it('is correct', function() {
            let input    = ''
            let expected = false
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = 'A\u0305B\u0305C\u0305'
            let expected = true
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = 'ABC'
            let expected = false
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = 'A\u0305BC\u0305'
            let expected = false
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = overline.add('ABC')
            let expected = true
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
        it('is correct', function() {
            let input    = overline.remove(overline.add('ABC'))
            let expected = false
            let actual   = overline.all(input)
            assert.equal(actual, expected)
        })
    })
})
