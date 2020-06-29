import HttpRequest from '@/libs/axios-from'
import config from '@/config'
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const baseUrl='';
const axios = new HttpRequest(baseUrl)
// axios.setHeader('TOKEN','123')
export default axios
