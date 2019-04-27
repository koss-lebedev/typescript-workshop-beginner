const creditCard = {
  number: '4242 4242 4242 4242',
  issuer: 'Visa',
  token: 'card_1ESgdU2eZvKYlo2CcntLL1R1',
}

const bankAccount = {
  routingNumber: '110000000',
  owner: 'Anthony Anderson',
  token: 'ba_1ESgQG2eZvKYlo2CuvxJYc2E',
}

const subwayCard = {
  number: '5679 1234 4325 0000',
}

const chargePaymentMethod = async (method: any) => {
  await fetch(`http://test.com/charge/${method.token}`, { method: 'POST' })
}

chargePaymentMethod(creditCard)
chargePaymentMethod(bankAccount)
chargePaymentMethod(subwayCard)
