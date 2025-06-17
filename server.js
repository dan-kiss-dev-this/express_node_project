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