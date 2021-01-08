import {
    request
} from "@/axios/request/http.js";
let url = "/ewell";
export default {
    // 
    aiDisease(data) {
        return request.post(`${url}/ai/disease`, data);
    },
    aiDepartment(data) {
        return request.post(`${url}/ai/department`, data);
    },
    //实体识别模型接口文档
    aiNer(data){
        return request.post(`/ner`, data);
    },
    //科室分诊模型接口
    aiDept(data){
        return request.post(`/dept`, data);
    },
    //辅助诊断模型接口
    aiDiagnosis(data){
        return request.post(`/diagnosis`, data);
    },

    

    
  
    
    

};
