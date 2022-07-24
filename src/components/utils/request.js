import axios from 'axios'

const request = axios.create({
  baseURL:"http://rap2api.taobao.org/app/mock/303779/"
})

export default request