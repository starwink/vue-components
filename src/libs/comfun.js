import config from '@/config'
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
   
    getProjectId:()=>{
        return config.projectId
    },
    getPublicId:()=>{
        return config.publicId
    },
   
    // removeNullItem(obj)
}