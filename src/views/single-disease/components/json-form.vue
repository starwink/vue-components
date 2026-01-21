<template>
    <div>
        <Button @click="submitData2">submitData2</Button>
        <Button @click="submitData2">clearSingleDiseaseForm</Button>
        <Button @click="clearForm">clearForm</Button>
        <Button @click="consoleForm">consoleForm</Button>
        <Button @click="setForm1">setForm1</Button>
        <Button @click="setForm2">setForm2</Button>
        <!-- {{json}} -->
        <Form :model="form" :label-width="320" @submit.native.prevent>
            <objFormItem v-if="json.length>0" className="json-obj-item2" :jsonItem="json"  :key="key" @changeKey="changeKey">
                <!-- <div slot="first" slot-scope="data">
                    <p>_3:{{data.data.label}}:</p>
                </div> -->
                <!-- <span slot="box1-action" slot-scope="data">
                    <Button>删除</Button>
                    <Button>删除2</Button>
                    <Button>删除3</Button>
                </span> -->
            </objFormItem>
        </Form>

        
        
    </div>
</template>
<script>
import objFormItem from './form-item.vue';
import mixin from './mixin'
import http from '@/api/demo.js'

import vuex from 'vuex';
import myvuex from './store.js';
const {mapMutations,mapState} = vuex.createNamespacedHelpers('scoreEntry')


export default {
    name: 'jsonForm',
    mixins: [mixin],
    
    components: {
        objFormItem
    },
    computed: {
        ...mapState(["jsonFormData"]),
    },
    mounted(){
        this.$store.registerModule("jsonFormVuex", myvuex);
    },
   
   
    methods: {
        ...mapMutations(["setJsonFormIsOpen",'setJsonFormIsOpenItem']),
        //解决json内容变动页面未变化
        changeKey() {
            this.key = this.$helper.getNewUuid();
        },
       
        save() {
            console.log('json', this.json)
        },
        log(data) {
            console.log('data', typeof data, data);

            return data;
        },
       

        init(json) {
            this.json=JSON.parse(JSON.stringify(json));
        },
        getFormData(){
            
        },
        submitData(){
            console.log('submitData',this.form)
            // this.changeKey();
        },

        clearForm(){
            this.$store.commit('clearSingleDiseaseForm');
        },
        consoleForm(){
            console.log(this.$store.getters,this.$store.getters.singleDiseaseForm)
        },
        setForm1(){
            this.$store.commit('setSingleDiseaseFormItem',{name:'test',val:421});
        },
        setForm2(){
            this.$store.commit('setSingleDiseaseFormItem',{name:'test',val:2});
        },
        isShowBox(no){
            let val=true;
            if(this.$store.state.jsonFormVuex.jsonFormData.isOpen[no]==void 0){
                val=false;
            }else if(this.$store.state.jsonFormVuex.jsonFormData.isOpen[no]){
                val=false;
            }else{
                val=true;
            }
            let params={
                name:no,
                val:val
            }
            // this.$store.commit('setJsonFormIsOpenItem',params);
            let data=JSON.parse(JSON.stringify(this.$store.state.jsonFormVuex.jsonFormData));
            data[no]=val;
            this.$store.commit('setJsonFormIsOpen',data);
        },
        //切换box 收缩
        actionBox(no) {
            this.isShowBox(no);
        },

        

    },

}
</script>
<style lang="scss" >
.json-obj-item2 {
    .item-info {
        width:100%;
        padding:6px 8px;
        .form-label{
            width:318px;
            padding-left:24px;
            background-color: #FAFAFA;
            display: inline-block;
            border-right: solid 1px #f1f1f1;
        }
        .form-content{
            width:calc(100% - 320px);
            display: inline-block;
        }
       
        
    }
    .form-box1{
        widows: 100%;

        .box1-header{
            padding:4px 24px;
            position: relative;
            cursor: pointer;
            background-color: #F5F7FD;
            &:hover{
                background-color: #fefefe;
                font-weight: 500;
            }
            .left{
                // display: inline-block;
                // float: left;
            }
            .right{
                // display: inline-block;
                // float:right;
                position: absolute;
                right: 12px;
                .action-box{
                    padding:0 12px;
                    .ivu-btn{
                        &:not(:first-child){
                            margin-left:12px;
                        }
                    }
                }
                .icon-box{
                    padding-right: 12px;
                    font-size: 14px;;
                }
            }
        }
        .box1-content{
            padding:0px 24px;

        }
        
    }
    
}


</style>