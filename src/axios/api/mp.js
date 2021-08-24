import {
    request
} from "@/axios/request/http.js";
let url = "/hrgo-mis";
export default {
    // 
    getMPUserInfo(data) {
        return request.postForm(`${url}/mp/userInfo`, data);
    },
   
    

    
  
    
    

};
