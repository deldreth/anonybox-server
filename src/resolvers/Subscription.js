const { getUserId } = require('../utils')

const newComment = {
    subscribe: (root, args, { db, connection }, info) => {
        return db.subscription.comment({
            where: {
                mutation_in: ["CREATED"],
                node: {
                    recipient: {
                        id: getUserId(connection.context)
                    }
                }
            }
        }, info)
    }
}

module.exports = {
    newComment
}