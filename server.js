const express = require('express')

const app = express();

const PORT = 3000

const friends = [
    {
        id: 0,
        name: 'Albert Enstien'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    }
]

app.use(express.json())

app.use((req, res, next) => {
    const start = Date.now();

    next();
    // actions go here, come back here on the returned response
    const delta = Date.now() - start
    console.log('delta', delta)
})

app.post('/friends', (req, res) => {
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
        id: friends.length
    }
    res.json(newFriend)
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]
    if (friend) {
        res.status(200).json(friends[friendId])
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
})

app.get('/', (req, res) => {
    res.send('Hellllo')
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert!</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('Updating messages...')
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})