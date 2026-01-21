


export default {
   
    data() {
        return {
            json: [],
            key: '',
            show:true,
            form:{
                test:213
            },
            boxShow:{

            }
        }
    },
    
    

    methods: {
        
        setJson(data){
            console.log('isArray',Array.isArray(data))
            if(data==void 0 || typeof data!='object' || Array.isArray(data)){
                return ''
            }
            let obj=[];

            let params={
                label:'',
                example:'',
                type:'',
                desc:'',
                _expand:false,
            },val={};
            for(let t in data){
                val=JSON.parse(JSON.stringify(params));
                val.label=t;

                if(typeof data[t]=='object'){
                    if(Array.isArray( data[t])){
                        console.log('array',t,data[t])
                        val.type='array'
                        val._expand=true;
                        val.children=this.subArrayModel(data[t]);
                    }else if(data[t]===null){
                        val.type='string'
                        val.example='';
                    }else{
                        val.type='object'
                        val._expand=true;
                        val.children=this.setJson(data[t]);
                    }
                }else{
                    val.type=typeof data[t];
                    val.example=data[t];
                }
                obj.push(val);
            }
            console.log('obj***',obj)
            return obj;
        },
        subArrayModel(array){
            if( !Array.isArray(array)){
                return []
            }
            let obj=[];

            let params={
                label:'',
                example:'',
                type:'',
                desc:'',
                _expand:false,
            },val={};
            for(let t of array){
                val=JSON.parse(JSON.stringify(params));
                console.log('====>',t)
                if(typeof t=='object'){
                    if(Array.isArray( t)){
                        val.type='array'
                        val._expand=true;
                        val.children=this.subArrayModel(t);
                    }else if(t===null){
                        val.type='string'
                        val.example='';
                    }else{
                        val.type='object'
                        val._expand=true;
                        val.children=this.setJson(t);
                    }
                }else{
                    val.type=typeof t;
                    val.example=t;
                }
                obj.push(val);
            }
            return obj;
        },
        showChildren(item) {
            return item.sonList!= void 0 && item.sonList.length>0 ;
        },
        parentJson() {
            return this.json
        },
        
        notObjType(type){
            let obj=['array','object']
            if(obj.indexOf(type)==-1){
                return true;
            }else{
                return false;
            }
        },
        getItemParam(){
            return {
                label:'filid1',
                type:"string",
                example:'',
                desc:'',
            }
        },
        addBrother(obj){
            console.log('abbb',obj)
            let params=this.getItemParam();
            if(obj==void 0){
                obj=[params]
            }else{
                obj.push(params)
            }
            this.changeKey();
        },
        addSubData(obj){
            let params=this.getItemParam();
            if(obj.children==void 0){
                obj.children=[params]
            }else{
                obj.children.push(params)
            }
            obj._expand=true;
            this.changeKey();
        },
        clickDropList(name,obj,propObj){
            if(name=='brother'){
                this.addBrother(propObj)
            }else{
                this.addSubData(obj)
            }
        },
        clickExpand(obj){
            console.log('clickExpand',obj)
            if(obj._expand){
                obj._expand=false;
            }else{
                obj._expand=true;
            }
            console.log('clickExpan :d:  ',obj)
            
            this.changeKey();
        },
        changeKey(){
            this.$emit('changeKey')
        },
        editJson(data){
            this.$emit('editJson',data)
        },
        delObj(obj,key){
            if(obj[key]){
                delete obj[key];
            }
            this.changeKey();
        },
        submitData2(){
            console.log('submitData333',this.form)
            // this.changeKey();
        },
        changeInput(name){
            console.log('name',name,this.form['name'])
            let params={
                name:name,
                val:this.form[name]
            }
            this.$store.commit('setSingleDiseaseFormItem',params);
        },
        changeDateTime(val,name){
            console.log(val,name)
            let params={
                name:name,
                val:val
            }
            this.$store.commit('setSingleDiseaseFormItem',params);
        },
        
       
    }
}
