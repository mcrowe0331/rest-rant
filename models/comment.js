const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema()

module.exports = mongoose.model('Comment', commentSchema)
