<template>
    <div>
        <h4>API</h4>
        <jsonObjForm ref="jsonObjForm" :jsonData="obj"  ></jsonObjForm>
        <!-- <jsonObjForm ref="jsonObjForm" :jsonData="obj.properties"  ></jsonObjForm> -->
        <Button @click="demo">demo</Button>
    </div>

</template>
<script>
// var md5 = require('md5');
import jsonObjForm from './components/json-obj-form.vue';
import objMock from './obj.mock.arr.js';
import objMockJson from './obj.mock.json.js';
export default {
    components: {
        'jsonObjForm':jsonObjForm
    },
    data() {
        let obj=objMock;
        return {
            obj:[]
        }
    },
    methods:{
        init(){
           this.$nextTick(()=>{
                this.$refs.jsonObjForm.parentJson();
            })
        },
        demo(data){
            this.obj=this.$refs.jsonObjForm.setJson(objMockJson);
            this.$refs.jsonObjForm.init(this.obj)
            // console.log(objMockJson);
        }
    },
    mounted(){
        this.init();
        this.demo();
    },
    created(){
    }
}
</script>