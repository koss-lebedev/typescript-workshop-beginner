type Product = {
  name: string
  expirationDate: Date
}

const product: Product = { name: 'Milk', expirationDate: new Date() }

/* --- */

function formatFullName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}
