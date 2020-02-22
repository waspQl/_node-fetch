import assert from 'assert'

import { fetchText } from './fetchText'
import { fetchJson } from './fetchJson'

(async () => {
  console.log('1. HTMLの取得')
  await fetchText()
    .then(data => {
      assert.equal(
        Object.prototype.toString.call(data),
        '[object String]'
      )
    })
    .catch(error => console.error(error))
  
  console.log('2. JSONの取得')
  await fetchJson()
    .then(data => {
      assert.equal(
        Object.prototype.toString.call(data),
        '[object Object]'
      )
    })
    .catch(error => console.error(error))
})()
