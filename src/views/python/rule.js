import dict from './dict.js'
export default {
    //实体识别
    ner:function(obj){
        console.log('nett',obj)
        let map={},all_map={}
        if(typeof obj=='object'){
            // console.log(obj);
            obj.map(res=>{
                // console.log(res);
                if(!map[res.type]){
                    map[res.type]=[]
                }
                map[res.type].push({
                    name:res.entity_name,
                    type:res.type,
                    typeCn:this.getTypeName(res.type),
                })
                if(res.type_all){
                    res.type_all.map(type=>{
                        if(!all_map[type]){
                            all_map[type]=[]
                        }
                        all_map[type].push({
                            name:res.entity_name,
                            type:type,
                            typeCn:this.getTypeName(type),
                        })
                    })
                }
            })
        }
        console.log('map',map)
        return {map:map,all_map:all_map};
    },
    getTypeName(type){
        let typeName='';
        if(dict[type]){
            typeName=dict[type];
        }
        return typeName;
    }
}