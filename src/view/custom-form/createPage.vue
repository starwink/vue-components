<template>
    <div class="tools-page">

        <div class="preview-form">
            <Card dis-hover :bordered="false">
                <p slot="title" style="text-align: left;">
                    表单设置
                </p>
                <Form ref="createForm" :model="userData" :key="formNum" :label-width="formConfig.labelWidth" >
                    <ul>
                        <li v-for="item,index in userData.configForm" :key="index" :class="[item.active?'label-active':'']" class="item-li" >

                            <FormItem v-if="item.name=='input'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <Input v-model.trim="item.val" :placeholder="item.placeholder" ></Input>
                            </FormItem>
                            <FormItem v-else-if="item.name=='textarea'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <Input v-model.trim="item.val" type="textarea" :placeholder="item.placeholder"></Input>
                            </FormItem>
                            <FormItem v-else-if="item.name=='input-number'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <Input v-model.trim="item.val" type="number" number :placeholder="item.placeholder"></Input>
                                <!-- <InputNumber  v-model.trim="item.val" :placeholder="item.placeholder" ></InputNumber> -->
                            </FormItem>
                            <FormItem v-else-if="item.name=='date'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <DatePicker type="date" v-model.trim="item.val"  format="yyyy年MM月dd日"  :placeholder="item.placeholder"></DatePicker>
                            </FormItem>
                            <FormItem v-else-if="item.name=='daterange'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <DatePicker type="daterange" v-model.trim="item.val"    :placeholder="item.placeholder"></DatePicker>
                            </FormItem>

                            <FormItem v-else-if="item.name=='radio'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <RadioGroup v-model="item.val">
                                    <Radio v-for="value of item.other.options" v-if="value" :label="value" :key="'radio_'+value" ></Radio>
                                </RadioGroup>
                            </FormItem>

                            <FormItem v-else-if="item.name=='checkbox'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <CheckboxGroup v-model="item.val">
                                    <Checkbox v-for="value of item.other.options" v-if="value" :label="value" :key="'checkbox_'+value" ></Checkbox>
                                </CheckboxGroup>
                            </FormItem>

                            <FormItem v-else-if="item.name=='select'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <Select v-model="item.val" :multiple="item.other.multiple" :filterable="item.other.filterable" >
                                    <Option v-for="value of item.other.options" v-if="value" :value="value" :key="'select_'+value">{{ value }}</Option>
                                </Select>
                            </FormItem>

                            <FormItem v-else-if="item.name=='cascader'" :prop="'configForm.'+index+'.val'" :label="item.title+'：'" :rules="item.rules">
                                <Cascader :data="item.other.options" v-model="item.val"></Cascader>
                            </FormItem>
                            
                            <FormItem v-else :label="item.title+'：'" >
                                <p>{{item.val}}</p>
                            </FormItem>

                            <div class="item-options">
                                <Icon type="md-cog" @click="openConfig(item,index)" />
                                <Poptip confirm transfer placement="top-end" @on-ok="del(index)">
                                    <div slot="title">
                                        <div>
                                            确认删除么?
                                        </div>
                                    </div>
                                    <Icon type="md-close" />
                                </Poptip>

                            </div>

                        </li>

                        <li class="user-mark">
                            <p @click="addItem();">
                                <Icon type="ios-add" />点击或从右侧选择需要新增的表单项
                            </p>
                        </li>
                    </ul>

                    <div class="footer-button">
                        <Button type="primary" @click.stop="runRule()">执行校验</Button>
                        <Button type="primary" @click.stop="getData()">读取缓存</Button>
                        <Button type="primary" @click.stop="readData()">console</Button>
                        <Button type="primary" @click.stop="save()">保存</Button>
                    </div>
                </Form>
            </Card>
        </div>
        <Card dis-hover :bordered="false" class="tool-list">
            <p slot="title" style="text-align: left;">
                控件列表
            </p>
            <ul>
                <li v-for="item,index of tools" :key="index" @click.stop="add(item)">{{item.title}}</li>
            </ul>
        </Card>
        <itemConfig ref="itemConfig" @del="del" @success="itemConfig" ></itemConfig>
    </div>
</template>
<script>
import itemConfig from './itemConfig'
import json from './json.js'
export default {
    components: {
        itemConfig
    },
    data() {
        let tools = json;
        return {
            tools: tools,
            formConfig: {
                labelWidth: 128,
            },
            defaultParams: {
                active: false,
                val: '',
                placeholder: '',
                rules: [
                    // { required: true, message: '请输入', trigger: 'blur' },
                    // {validator: _sqlKeyTest, trigger: 'change'}
                ],
                required: 'N'

            },
            formNum:0,
            userData: {
                configForm:[]
            }
        }
    },
    methods: {
        init() {
            Object.assign(this.$data, this.$options.data());
            if (localStorage.getItem('custom-form')) {
               // this.userData = JSON.parse(localStorage.getItem('custom-form'));
            }
        },
        resetForm() {
            this.$refs.createForm.fields.forEach(function (e) {
                e.resetField()
            })
        }, 
        add(item) {
            let defaultParma = JSON.parse(JSON.stringify(this.defaultParams))
            let params = {  ...defaultParma,...item,...{_fieldIndex:this.$helper.getNewUuid()}}
            this.userData.configForm.push(params);
        },
        addItem(){
            let item=this.tools[0];
            let defaultParma = JSON.parse(JSON.stringify(this.defaultParams))
            let params = { ...item, ...defaultParma,...{_fieldIndex:this.$helper.getNewUuid()}}
            this.userData.configForm.push(params);
            // this.userData[this.$helper.getNewUuid()]=params;
            
        },
        del(index) {
            this.userData.configForm.splice(index,1);
        },
        openConfig(item,index) {
            // item.active = !item.active;
            this.$refs.itemConfig.init(item,index);
        },
        getData() {
            let data = localStorage.getItem('custom-form');
            if (data) {
                data = JSON.parse(data);
                // data.map(res => {
                //     res.active = false;
                // })
            }
           this.userData = data;
        },
        readData() {
            console.log(this.userData);
            if (typeof this.userData == 'object') {
                console.log(JSON.stringify(this.userData));
            }

        },
        save() {
            console.log(this.userData);
            localStorage.setItem('custom-form', JSON.stringify(this.userData))
        },
        runRule(){
            //日期区域存在bug,配置项中存在不运行校验
            let tmp=this.userData.configForm.find(res=>{
                return res.name=='daterange'
            })
            if(tmp!=void 0){
                this.$Message.error('暂不支持在配置表单中校验 "日期区间"');
                return ;
            }
            this.$refs.createForm.validate((valid) => {
                if (valid) {
                    this.$Message.info('验证通过');
                }else{
                    this.$Message.error('验证未通过');
                }
            })
        },
       
        itemConfig(data,index){
            console.log('itemconfig',data);
            let tmp=JSON.parse(JSON.stringify(this.userData.configForm));
            tmp[index]=data;
            this.formNum++;
            this.$set(this.userData,'configForm',tmp);
            // this.userData[index]=data;
        },
        closeActive(index){
            this.$set(this.userData.configForm[index],'active',false);
            console.log('closeActive',this.userData.configForm[index].active)
        }
        

    },
    created() {
        this.init();
    }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>