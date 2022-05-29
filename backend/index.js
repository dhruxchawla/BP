const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/report', require('./routes/report'))
app.use('/api/bill', require('./routes/bill'))

app.listen(port, () => {
   console.log(`Medrec listening at http://localhost:${port}`)
})