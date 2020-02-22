import fetch from 'node-fetch'

// JSONの取得
// 第二引数のmethod: 'GET'はdefault値のため省略可
export const fetchJson = () => {
  const url = 'https://api.github.com/users/github'
  return fetch(url, { method: 'GET' })
    .then((res) => {
      if (res.ok) {
        console.log(`fetch ${url} is successed`)
        return res.json()
      }
      throw new Error('Network response was not ok.')
    })
    .then((json) => {
      return json
    })
    .catch((err) => {
      console.log('fetch json err', err)
    })
}
