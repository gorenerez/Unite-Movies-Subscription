const express = require('express')
const cors = require('cors')
const app = express()
require('./configs/database')

app.use(cors())
app.use(express.json())

const usersRouter = require('./routers/usersRouter')
const moviesRouter = require('./routers/moviesRouter')
const membersRouter = require('./routers/membersRouter')
const subscriptionsRouter = require('./routers/subscriptionsRouter')

app.use('/api/users', usersRouter)
app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);
app.use('/api/subscriptions', subscriptionsRouter);






const port = 8000
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))


