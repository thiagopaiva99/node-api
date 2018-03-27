const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      min: 0,
      unique: true,
      required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = restful.model('User', userSchema)