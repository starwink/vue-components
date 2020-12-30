import {
    request
} from "@/axios/request/http.js";
let url = "";
export default {
   /*  // 数据资产列表
   
    serviceSourceList(data) {
        return request.post(`${url}/source/list`, data);
    },
    //预览
    serviceSourcePreview(data) {
        return request.get(`${url}/source/data/preview`, data);
    }, */
    
    test(data={}){
        return request.get(`${url}/demo/test/deploy`)
    }
    

};
