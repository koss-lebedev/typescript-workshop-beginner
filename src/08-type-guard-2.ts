type Payload =
  | { kind: 'Error', code: number }
  | { kind: 'Success', message: string }
  | { kind: 'NotFound' }

const getMessage = (response: Payload): string => {
  switch (response.kind) {
    case 'Success': return `Success! ${response.message}`
    case 'Error': return `Error ocurred. Code: ${response.code}`
    case 'NotFound': return 'Not found'
  }
}
