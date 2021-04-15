const fs   = require('fs')
const path = require('path')
const read = require('./read')

function load(dirs) {
    let manuscripts = []
    dirs.forEach(function(dir) {
        if (!fs.existsSync(dir))
            return
        let filenames = fs.readdirSync(dir)
        let filepaths = filenames.map(filename => path.join(dir, filename))
        manuscripts   = manuscripts.concat(filepaths.map(read))
    })
    return manuscripts
}

module.exports = load
