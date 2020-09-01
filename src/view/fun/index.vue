<template>
    <div>
        <textarea style="width:800px;height:300px;" v-model="sql"></textarea>
        <button @click="runjs">run js</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // sql:'select doctor_name,k_id from doctor d  where id in (:p_doctor )',
            sql:'select doctor_name,k_id from doctor d  where id in (:p_doctor  ) and te_id=(select te_id from sst where id=1)',
        }
    },
    methods:{
        runjs(){
            let data=this.getSqlTableName(this.sql);
            console.log(data);

        },
        getSqlTableName(sql) {
           
            var sqlWord=['where','group','limit','order','(',')']
            var sqlKey=['(',')'],spaceStr=' ';

            var separator = ' ';

            sql = sql.toLowerCase();
            sql = sql.replace(/[\r\n]/g, "");
             console.log('sql:',sql);
            var index=-1,tmpIn = [];
            //获取所有from出现位置
            do{
                index=sql.indexOf(' from ',index+1)
                tmpIn.push(index);
            }while(index>-1)
           
            if(tmpIn.length>1){
                let isStartStrNum,i,subSql,keyInPoint={start:0,end:0};
                tmpIn.map(index=>{
                    if(index==-1){return ;}
                    isStartStrNum=1;//用于跳转前缀空格
                    i=0;
                    subSql=sql.substring(index+6);

                    //使用空格 分隔 , 通过有效值出现次数,

                   /*  
                    //  少考虑了table别名
                    for(i=0;i<subSql.length;i++){
                        if(subSql[i]==' ' && isStartStrNum==1){

                        }else if(subSql[i]==' ' && isStartStrNum==0){
                            keyInPoint.end=i-1;
                            break;
                        }else if(isStartStrNum==1){
                            isStartStrNum=0;
                            keyInPoint.start=index+6+i;
                        }else if(subSql[i]==void 0){
                            break;
                        }
                    } */
                    console.log(sql.substring(index+6)[0]);
                    console.log(keyInPoint)
                })

            }

            
            let obj={}
            return obj;
        },
    }
}
</script>