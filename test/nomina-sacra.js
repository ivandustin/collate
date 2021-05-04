const assert       = require('assert')
const nomina_sacra = require('../src/nomina-sacra')
const overline     = require('../src/overline')

describe('nomina sacra', function() {
    it('is correct', function() {
        let a        = 'AE'
        let b        = 'ABCDE'
        let actual   = nomina_sacra(a, b)
        let expected = false
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = 'ABCDE'
        let b        = 'AE'
        let actual   = nomina_sacra(a, b)
        let expected = false
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('AE')
        let b        = 'ABCDE'
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = 'ABCDE'
        let b        = overline.add('AE')
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('ACE')
        let b        = 'ABCDE'
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('ABDE')
        let b        = 'ABCDE'
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('AE')
        let b        = overline.add('ABCDE')
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('AE')
        let b        = overline.add('AE')
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
    it('is correct', function() {
        let a        = overline.add('AE')
        let b        = overline.add('ABE')
        let actual   = nomina_sacra(a, b)
        let expected = true
        assert.equal(actual, expected)
    })
})
