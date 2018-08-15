const jwt = require('jsonwebtoken')

function getUserId(request) {
  const Authorization =
    typeof request.Authorization !== 'undefined' ?
      request.Authorization :
      request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace(/^Bearer /, '')
    const { userId } = jwt.verify(token, '1234')
    return userId
  }

  throw new Error('Unauthorized')
}

module.exports = {
  getUserId
}