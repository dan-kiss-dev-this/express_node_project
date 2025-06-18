// use function instead of variable so node can point to the function for debugging
function getMessages(req, res) {
    res.send('<ul><li>Hello Albert!</li></ul>')
}

function postMessages(req, res) {
    console.log('Updating messages...')
    res.send('done')
}

module.exports = {
    getMessages,
    postMessages
}