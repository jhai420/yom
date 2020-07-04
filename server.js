require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('./db')
const movieRouter = require('./routes/recipe-router')

const app = express()
const apiPort = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "client", "build")));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', movieRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
