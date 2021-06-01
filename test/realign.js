const assert  = require('assert')
const realign = require('../src/realign')

describe('realign', function() {
    it('is correct', function() {
        let input = [
            ['ABC', 'DEF', 'GHI']
        ]
        let expected = [
            ['ABC', 'DEF', 'GHI']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['',    'ABC', ''],
            ['XYZ', '',    'DEF']
        ]
        let expected = [
            ['',    'ABC', ''],
            ['XYZ', '',    'DEF']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', 'DEF'],
            ['ABC', '']
        ]
        let expected = [
            ['ABC', 'DEF'],
            ['ABC', '']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['',    'ABC', ''],
            ['DEF', '',    'ABC']
        ]
        let expected = [
            ['',    'ABC'],
            ['DEF', 'ABC']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', '',    ''],
            ['',    'DEF', 'ABC']
        ]
        let expected = [
            ['',    'ABC'],
            ['DEF', 'ABC']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', '', ''],
            ['',    '', 'ABC']
        ]
        let expected = [
            ['ABC'],
            ['ABC']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['',    'ABC', '',    ''],
            ['',    '',    'ABC', ''],
            ['XYZ', '',    'ABC', 'DEF']
        ]
        let expected = [
            ['',    'ABC', ''],
            ['',    'ABC', ''],
            ['XYZ', 'ABC', 'DEF']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', '',    ''],
            ['',    '',    'ABC'],
            ['ABC', 'XYZ', 'ABC']
        ]
        let expected = [
            ['ABC', '',    ''],
            ['',    '',    'ABC'],
            ['ABC', 'XYZ', 'ABC']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', '',    ''],
            ['',    '',    'ABC'],
            ['ABC', 'XYZ', 'AB']
        ]
        let expected = [
            ['ABC', '',    ''],
            ['ABC', '',    ''],
            ['ABC', 'XYZ', 'AB']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ABC', '',    ''],
            ['',    '',    'ABC'],
            ['ABC', 'XYZ', '']
        ]
        let expected = [
            ['ABC', '',  ],
            ['ABC', '',  ],
            ['ABC', 'XYZ']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['',    '',    ''],
            ['MOY', 'OY',  'OYK'],
            ['MOY', 'OY',  'OYK'],
            ['OY',  'OYK', ''],
            ['OY',  'OYK', ''],
            ['MOY', 'OY',  'OYK']
        ]
        let expected = [
            ['',    '',   ''],
            ['MOY', 'OY', 'OYK'],
            ['MOY', 'OY', 'OYK'],
            ['',    'OY', 'OYK'],
            ['',    'OY', 'OYK'],
            ['MOY', 'OY', 'OYK']
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['ΙΣΧΥΡΟΤΕΡΟΣ', ''],
            ['',            'ΙΣΧΥΡΟΣ'],
        ]
        let expected = [
            ['ΙΣΧΥΡΟΤΕΡΟΣ', ''],
            ['',            'ΙΣΧΥΡΟΣ'],
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let input = [
            ['',      'ΕΚΗΡΥΣΣΕΝ'],
            ['ΥΔΑΤΙ', ''],
        ]
        let expected = [
            ['',      'ΕΚΗΡΥΣΣΕΝ'],
            ['ΥΔΑΤΙ', ''],
        ]
        let actual = realign(input)
        assert.deepEqual(actual, expected)
    })
})
