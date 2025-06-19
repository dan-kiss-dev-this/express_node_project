const path = require('path')

// use function instead of variable so node can point to the function for debugging
function getMessages(req, res) {
    // note we need absolute path from "/" machine root directory
    const absolutePath = path.join(__dirname, '..', 'public', 'skier.jpg')
    // res.sendFile() from express
    res.sendFile(absolutePath)
    // res.send('<ul><li>Hello Albert!</li></ul>')
}

function postMessages(req, res) {
    console.log('Updating messages...')
    res.send('done')
}

module.exports = {
    getMessages,
    postMessages
}