const compare = require('./compare')

function shorthand(a, b) {
    let max = a.length > b.length ? a : b
    let min = a.length > b.length ? b : a
    let mid = min.substr(1, min.length - 2)

    if (compare(min[0], max[0]) == 0 && compare(min[min.length - 1], max[max.length - 1]) == 0) {
        let offset = 0

        for (let i = 0; i < mid.length; i++) {
            let needle = mid[i]
            let found  = false

            for (let j = offset; j < max.length - 1; j++) {
                let target = max[j]

                if (compare(target, needle) == 0) {
                    found  = true
                    offset = j + 1
                    break
                }
            }

            if (!found)
                return false
        }

        return true
    }

    return false
}

module.exports = shorthand
