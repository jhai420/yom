const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin-jenny:158548@recipes.bpbga.mongodb.net/YomDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
