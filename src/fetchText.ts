import fetch from 'node-fetch'

// HTMLの取得
// 第二引数のmethod: 'GET'はdefault値のため省略可
export const fetchText = () => {
  const url = 'https://github.com/'
  return fetch(url, { method: 'GET' })
    .then((res) => {
      if (res.ok) {
        console.log(`fetch ${url} is successed`)
        return res.text()
      }
      throw new Error('Network response was not ok.')
    })
    .then((body) => {
      return body
    })
    .catch((err) => {
      console.log('There has been a problem with fetchText operation: ', err)
    })
}
