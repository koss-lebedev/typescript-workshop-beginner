type User = {
  username: string
  age: number
  createdAt: Date
}

const updateUser = (id: string, user: User) => {
  // ... call some PATCH API
}

updateUser('123-456-789', { age: 25 })
