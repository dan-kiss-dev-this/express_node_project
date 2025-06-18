const express = require('express')

const friendsRouter = require('./routes/friends.router.js')
const messagesRouter = require('./routes/messages.router.js')

const messagesController = require('./controllers/messages.controller')

const app = express();

const PORT = 3000

app.use(express.json())

//to use the router as middleware, mounting the middleware to friends path in url
app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.use((req, res, next) => {
    const start = Date.now();

    next();
    // actions go here, come back here on the returned response
    const delta = Date.now() - start
    console.log('delta', delta)
})

app.get('/', (req, res) => {
    res.send('Hellllo')
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})