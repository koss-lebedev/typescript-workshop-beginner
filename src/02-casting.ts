type ApiResponse = {
  statusCode: number
  message: string
}

const getApiResponse = async () => {
  const result = await fetch('http://test.com/api')
  const json = await result.json()
}
