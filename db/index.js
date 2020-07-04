require('dotenv').config();
const mongoose = require('mongoose');

const db = process.env.MONGODB_URL;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
