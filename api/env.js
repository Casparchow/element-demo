'use strict'

const debug = process.env.NODE_ENV !== 'production'

export default {
  baseUrl: debug ? 'http://localhost:3000' : 'http://tao.xxx.vvaccess.com:9021'
}