const express = require('express')

const friendsController = require('../controllers/friends.controller.js')

// use express router to make application more modular
const friendsRouter = express.Router()

friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriendById)

module.exports = friendsRouter