<template>
    <Drawer v-model="show" title="字段配置" :closable="false" width="60">
        <Form :model="form" ref="form"   :label-width="156">
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="字段类型：" prop="name">
                    <Select v-model="form.name">
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
                <FormItem label="提示信息：" prop="placeholder">
                    <Input v-model.trim="form.placeholder" maxlength="50"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="16" v-show="form.name=='input' || form.name=='textarea'">
                <Col span="24">
                <FormItem label="默认值：" prop="val">
                    <Input v-model.trim="form.val" maxlength="50"></Input>
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
export default {
    name: 'itemConfig',
    data() {
        let filedType = json;
        return {
            show: false,
            filedType: filedType,
            index:0,
            form: {
                active:false,
            },
            otherRulesList:[

            ]
        }
    },
    watch:{
        show(val){
            if(!val){
                console.log('dccfsd')
                this.$emit('closeActive',this.index);
            }
        }
    },
    methods: {
        init(data,index) {
            Object.assign(this.$data, this.$options.data())
            this.show = true;
            this.form=JSON.parse(JSON.stringify(data));
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
            // let data=JSON.parse(JSON.stringify(this.form))
            this.watchRules(data);
            console.log('sss',data)
            this.close();
            this.$emit('success',data,this.index);
           
        },
        watchRules(data){
            let rules=[];
            if(data.required=='Y'){
                if(data.name=='radio' || data.name=='checkbox' || data.name=='select'){
                    rules.push({ required: true, message: "请选择", trigger: "change" })
                }else if(data.name=='date' || data.name=='daterange' ){
                    rules.push({ required: true,type:'date', message: "请选择", trigger: "change" })
                }else{
                    rules.push({ required: true, message: "请输入", trigger: "change" })
                }
            }
            data.rules=rules;
            return data;
        },
        
    }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>