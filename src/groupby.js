function groupby(array, key) {
    let hash = {}
    array.forEach(function(object) {
        let id = object[key]
        if (!hash[id])
            hash[id] = []
        hash[id].push(object)
    })
    return Object.values(hash)
}

module.exports = groupby
