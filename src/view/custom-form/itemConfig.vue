<template>
    <Drawer v-model="show" title="字段配置" class-name="page-drawer" :closable="false" width="60">
        <Form :model="form" ref="form"   :label-width="156">
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="字段类型：" prop="name">
                    <Select v-model="form.name" @on-change="autoCompleOption">
                        <Option v-for="(item,index) of filedType" :key="'filedtype'+index" :value="item.name">{{item.title}}</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="字段名：" prop="title">
                    <Input v-model.trim="form.title" maxlength="50"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="必填：" prop="required">
                    <RadioGroup v-model="form.required">
                        <Radio label="Y">是</Radio>
                        <Radio label="N">否</Radio>
                    </RadioGroup>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="提示文案信息：" prop="placeholder">
                    <Input v-model.trim="form.placeholder" maxlength="50"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" v-if="form.name=='input' || form.name=='textarea'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <Input v-model.trim="form.val" maxlength="50"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" v-if="form.name=='input-number'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <Input v-model.trim="form.val" type="number" number maxlength="50"></Input>
                </FormItem>
                </Col>
            </Row>

            
            <Row :gutter="16" v-if="isHaveOption(form)">
                <Col span="24" style="width:clac(100% - 100px)">
                <FormItem label="选择项：" >
                    <Input v-model.trim="other.optionText"  maxlength="50" @on-enter="addItem">
                    <div slot="append">
                        <Button icon="ios-add" @click="addItem" >新增选择项</Button>
                    </div>
                    </Input>
                </FormItem>
                
                </Col>
            </Row>
            <Row  v-if="other.options.length!=0" >
                <Col span="24">
                    <FormItem label="选择项管理：">
                        <selTagList ref="selTagList" :tagArray="other.options"></selTagList>
                    </FormItem>
                </Col>
            </Row>

            <Row :gutter="16"  v-if="form.name=='select'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <Select v-model="form.val" :multiple="other.multiple" :filterable="other.filterable">
                        <Option v-for="item of other.options"  :value="item" :key="item" >{{ item }}</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16"  v-if="form.name=='radio'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <RadioGroup v-model="form.val" >
                        <Radio v-for="item of other.options"   :label="item" :key="item"></Radio>
                    </RadioGroup>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16"  v-if="form.name=='checkbox'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <CheckboxGroup v-model="form.val" >
                        <Checkbox v-for="item of other.options"    :label="item" :key="item"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                </Col>
            </Row>

            <Row :gutter="16"  v-if="form.name=='select'">
                <Col span="12">
                    <FormItem label="可多选：" >
                        <i-switch v-model="other.multiple"  ></i-switch>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="可搜索：" >
                        <i-switch v-model="other.filterable"  ></i-switch>
                    </FormItem>
                </Col>
                
            </Row>

            

            


        </Form>
        <div class="footer-button">
            <Button @click.stop="close">取消</Button>
            <Button type="error" @click.stop="del()">删除</Button>
            <Button type="primary" @click.stop="save('form')">保存</Button>
        </div>
    </Drawer>
</template>
<script>
import json from './json.js'
import selTagList from '@/components/selTagList/selTagList.vue'
export default {
    name: 'itemConfig',
    components:{
        selTagList
    },
    data() {
        let filedType = json;
        return {
            show: false,
            filedType: filedType,
            index:0,
            form: {
                active:false,
                val:'',
            },
            otherRulesList:[

            ],
            other:{
                optionText:'',
                options:[]
            }
        }
    },
    watch:{
        // show(val){
        //     if(!val){
        //         //this.$emit('closeActive',this.index);
        //     }
        // },
       

    },
    methods: {
        init(data,index) {
            Object.assign(this.$data, this.$options.data())
            this.show = true;
            console.log('init',data)
            this.form=JSON.parse(JSON.stringify(data));
            this.otherInitPlant(this.form);
            // this.form=data; //使用数据绑定无法实现 重新渲染校验
            this.index=index;
        },

        resetForm() {
            this.$refs.form.fields.forEach(function (e) {
                e.resetField()
            })
        },
        close() {
            this.show = false
        },
        del(){
            this.close();
            this.$emit('del',this.index);
        },
        save(){
            // console.log(this.form);return;
            let data=JSON.parse(JSON.stringify(this.form))
            data=this.watchRules(data);
            data=this.otherSavePlant(data);

            this.close();
            this.$emit('success',data,this.index);
           
        },
        isHaveOption(data){
            if(data.name!='radio' && data.name!='checkbox' && data.name!='select' ){
                return ;
            }else{
                return true;
            }
        },
        addItem(){
            if(!this.isHaveOption(this.form)){
                return;
            }

            if(this.other.optionText!= '' && this.other.options.indexOf(this.other.optionText)==-1){
                let options=JSON.parse(JSON.stringify(this.other.options))
                
                this.other.options.push(this.other.optionText);
                this.other.optionText='';
            }
        },
        delItem(index){
            if(!this.isHaveOption(this.form)){
                return;
            }
            this.other.options.splice(index,1)

        },
        //autoComposet
        autoCompleOption(){
            if(!this.isHaveOption(this.form) ){
                delete this.form.other;
            }else{
                let name=this.form.name;
                    // console.log(this.form.name)
                let item=this.filedType.find(res=>{
                    return res.name==name;
                })
                this.form.other=item.other
                this.form.val=item.val
            }
            this.other.options=[];

        },
        watchRules(data){
            let rules=[];
            if(data.required=='Y'){
                if(data.name=='radio' || data.name=='checkbox' || data.name=='select'){
                    rules.push({ required: true, message: "请选择", trigger: "change" })
                }else if(data.name=='input-number'  ){
                    rules.push({ required: true,type:'number', message: "请选择", trigger: "blur" })
                }else if(data.name=='date' || data.name=='daterange' ){
                    rules.push({ required: true,type:'date', message: "请选择", trigger: "change" })
                }else{
                    rules.push({ required: true, message: "请输入", trigger: "change" })
                }
            }
            data.rules=rules;
            return data;
        },
        otherInitPlant(data){
            if(this.isHaveOption(data) && data.other!=void 0 && data.other.options!=void 0){
                this.other.options=data.other.options;
            }else if(this.isHaveOption(data)){
                this.other.options={
                    options:[]
                }
            }   
            console.log('other',this.other)
        },
        //保存时清空无关对象
        otherSavePlant(data){
            if(this.isHaveOption(data)){
                data.other.options=this.other.options;
            }else if(data.other!=void 0 && data.other.options!=void 0){
                delete data.other.options
            }
            return data;
        },
        changeVal(e){
            // console.log('changeVal',this.form.val,e)
        }
        
    }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>