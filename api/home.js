'use strict'

import env from './env'
import axios from 'axios'

const {baseUrl} = env

export async function getUserInfo(data) {
  return await axios.get(`${baseUrl}/users/getUserInfo`, data)
}