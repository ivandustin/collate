const compare   = require('./compare')
const shorthand = require('./shorthand')
const deviation = require('./deviation')

function same(a, b) {
    if (compare(a, b) == 0)
        return true

    if (shorthand(a, b))
        return true

    if (deviation(a, b) <= 0.2)
        return true

    return false
}

module.exports = same
