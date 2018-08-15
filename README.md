# Setup
```sh
docker-compose up
yarn prisma deploy
```

# Signup
```
mutation {
  signup(username:"test4", password:"test4") {
    user {
      id
    }
    token
  }
}
```

# Subscription
```
subscription {
  newComment {
    mutation
    node {
      id
      text
    }
  }
}
```