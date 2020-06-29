import axios from '@/libs/api.request-json.js'
import config from '@/config'

// const projectName = 'shuxi-dict'
const projectName = config.projectName2;

const server = {

    dict: () => {
        return axios.request({
            url: `/${projectName}/dicts/all`,
            method: 'GET'
        })
    },
    list:(params) => {
        return axios.request({
            url: `/${projectName}/dicts/list`,
            data: params,
            method: 'POST'
        })
    },
    add:(params) => {
        return axios.request({
            url: `/${projectName}/dicts/dict`,
            data: params,
            method: 'POST'
        })
    },
    edit:(params) => {
        return axios.request({
            url: `/${projectName}/dicts/dict`,
            data: params,
            method: 'PUT'
        })
    },
    //字典项列表
    dictsList: (id) => {
        return axios.request({
            url: `/${projectName}/dicts/items/${id}`,
            method: 'GET'
        })
    },
    //启动
    dictsItemEnable: (id) => {
        return axios.request({
            url: `/${projectName}/dicts/items/item/enable/${id}`,
            method: 'PUT'
        })
    },
    //禁用
    dictsItemDisable: (id) => {
        return axios.request({
            url: `/${projectName}/dicts/items/item/disable/${id}`,
            method: 'PUT'
        })
    },
    addItem:(params) => {
        return axios.request({
            url: `/${projectName}/dicts/items/item`,
            data: params,
            method: 'POST'
        })
    },
    editItem:(params) => {
        return axios.request({
            url: `/${projectName}/dicts/items/item`,
            data: params,
            method: 'PUT'
        })
    },

    dictReload:() => {
        return axios.request({
            url: `/${projectName}/DictController/reload`,
            // data: params,
            method: 'PUT'
        })
    },
    downItem:(id)=>{
        return   `/${projectName}/dicts/export/${id}`;
    }

    



}

export default server
