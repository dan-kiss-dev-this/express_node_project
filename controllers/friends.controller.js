const model = require('../models/friends.model')

function getFriendById(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId]
    if (friend) {
        res.status(200).json(model[friendId])
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

function getFriends(req, res) {
    res.json(model)
}

function postFriend(req, res) {
    // note servers dont understand json automatically, got to parse with express.json() middleware function, note this accounts for Content-Type being application/json
    // console.log(req.method, req.url, req.body)

    // note the use of return here to stop additional code execution as if there is not a name we want to send the error back and not have a friend object tried to get made as the name property is blank and that will be a different error, we even check if the req.body is included and not blank otherwise its an error
    if (!req.body || !req.body.name) {
        return res.status(400).json({
            error: 'Friend did not have name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    }
    model.push(newFriend)
    res.json(newFriend)
}

module.exports = {
    getFriendById,
    getFriends,
    postFriend
}