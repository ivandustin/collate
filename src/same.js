const compare   = require('./compare')
const deviation = require('./deviation')

function same(a, b) {
    if (compare(a, b) == 0)
        return true

    if (deviation(a, b) <= 0.2)
        return true

    return false
}

module.exports = same
