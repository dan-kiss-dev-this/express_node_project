const express = require('express')

const friendsController = require('./controllers/friends.controller')
const messagesController = require('./controllers/messages.controller')

const app = express();

const PORT = 3000



app.use(express.json())

app.use((req, res, next) => {
    const start = Date.now();

    next();
    // actions go here, come back here on the returned response
    const delta = Date.now() - start
    console.log('delta', delta)
})

app.post('/friends', friendsController.postFriend)

app.get('/friends', friendsController.getFriends)

app.get('/friends/:friendId', friendsController.getFriendById)

app.get('/', (req, res) => {
    res.send('Hellllo')
})

app.get('/messages', messagesController.getMessages)

app.post('/messages', messagesController.postMessages)

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})