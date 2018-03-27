const User = require('./users.model')
const validator = require('../../src/util/validator')

User.methods([
  'get',
  'post',
  'put',
  'delete'
])

User.updateOptions({
  new: true,
  runValidators: true
})

User
    .after('post', validator.sendErrorsOrNext)
    .after('put', validator.sendErrorsOrNext)

User.route('count', (req, res, next) => {
  User.count(( err, value ) => {
    if (err) res.status(500).json({ errors: [ err ] })
    else res.json({ value })
  })
})

module.exports = User