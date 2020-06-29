import config from '@/config'
import { StringStream } from 'codemirror';
// import oment from 'vue-moment'/
const moment = require('moment')
export default {
    getImgUrl:(str)=>{
        let src='';
        if(typeof str == 'string'){
            if(str.substr(0,4)=='http'){
                src=str;
            }else{
                src=`${config.imgDomain}${str}`;
            }
        }
        return src;
    },
    getImgRoute:(str)=>{
        let src='';
        if(typeof str == 'string'){
          src=str.replace(confirm.imgDomain);
        }
        return src;
    },
    getDateParams:(str,format='YYYY-MM-DD')=>{
        if (!str || str == 'Invalid date') {
            str = ''
        } else {
            str = moment(str).format(format)
        }
        return str;
    },
    getProjectId:()=>{
        return config.projectId
    },
    getPublicId:()=>{
        return config.publicId
    },
   
    // removeNullItem(obj)
}