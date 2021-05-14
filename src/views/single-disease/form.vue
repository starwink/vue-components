<template>
    <div>
        <div>
            <h3>tests</h3>
            <!-- <component :is="jsonFormName" :jsonData="jsonData" /> -->
            <jsonForm ref="jsonForm"  />
        </div>
    </div>
</template>
<script>
import tempData from './temp.json'
import jsonForm from './components/json-form';
import tmpMockJson from './mock/DPD.mock.json'
import json from '../../components/openseadragon/json';
export default {
    components:{
        jsonForm
    },
    mounted(){
        // console.log(tmpMockJson)
        this.init();
    },
    data(){
        return {
            jsonFormName:'',
            jsonData:[],
        }
    },
    methods:{
        init(){
            // console.log('init',tmpMockJson)
            let obj=tmpMockJson.object;
            let jsonData=JSON.parse(obj);
          /*   this.jsonData=jsonData;
            this.jsonFormName='jsonForm' */
            this.$refs.jsonForm.init(jsonData)
            console.log(this.jsonData);
            let list=this.getTempList(jsonData);
            // console.log('list',list)
            console.log(JSON.stringify(list));
            let verifyList=this.getNotNullList(list);
            
        },
        getNotNullList(arr){
            let list=[];
            arr.map(res=>{
                if(res.notNull){
                    list.push(res);
                }
            })
            return list;
        },
        getTempList(jsonData){
            let list=[];
            for(let val of jsonData){
                console.log('val',val)
                list.push({
                    id:val.no,
                    type:val.type,
                    title:val.title,
                    hide:val.hide,
                    disabled:val.disabled,
                    line:val.line,
                    num:0,
                    pid:'',
                    notNull:val.check !=void 0 && val.check.notnull
                })
                if(val.sonList!=void 0 && val.sonList.length>0){
                    list=list.concat(this.getChildTempData(val.sonList,0,val.no))
                }
               
            }
            return list;
            
        },
        getChildTempData(json,num=0,pid=''){
            num+=1;
            let list=[]
            for(let val of json){
                list.push({
                    id:val.no,
                    type:val.type,
                    title:val.title,
                    hide:val.hide,
                    disabled:val.disabled,
                    line:val.line,
                    num:num,
                    pid:pid,
                    notNull:val.check !=void 0 && val.check.notnull
                })
                if(val.sonList!=void 0 && val.sonList.length>0){
                    list=list.concat(this.getChildTempData(val.sonList,num,val.no))
                }
            }
            return list;

        }
    }
    
}
</script>