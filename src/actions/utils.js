const handleResult = (resolve, reject, err, data) => {
  if (err) return reject(err)
  return data ? resolve(data) : reject(new Error('No data found'))
}

const sendRequest = (endpoint, resolve, reject, handle) => {
  const token = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'
  const params = {
    host: 'apiv3.iucnredlist.org',
    path: `/api/v3${endpoint.replace(/\s/g, '%20')}?token=${token}`,
    method: 'GET'
  }
  fetch(`https://${params.host}${params.path}`, {method: params.method})
    .then(res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return handle(resolve, reject, `statusCode=${res.statusCode}`)
      }
      res.json().then(data => {
        return handle(resolve, reject, null, data)
      })
    })
    .catch(err => {
      return handle(resolve, reject, err)
    })
}

export {
  handleResult,
  sendRequest
}
