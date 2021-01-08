<template>
    <div>
        <Card dis-hover>
            <p slot="title">病人信息</p>
            <Form :model="form" ref="form" :label-width="0">
                <Row :gutter="16">
                    <Col span="24">
                    <FormItem prop="info">
                        <Input v-model="form.info"  type="textarea" :autosize="{minRows: 2,maxRows: 5}" @on-change="showAI"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Tag v-for="item,index in Object.keys(nerMap.map)" :key="index" class="tag-span">
                    <span style="font-weight: 500;">{{ getTypeName(item) }} :</span>
                    <span v-for="subItem,i in nerMap.map[item]" :key="i">{{subItem.name}}</span>
                </Tag>
            </Form>
        </Card>
        <div class="ai-list">
            <div class="info-box">
                <Card dis-hover>
                    <p slot="title">辅助诊断</p>
                     <a href="#" slot="extra" @click.prevent="">
                            <Icon type="ios-loop-strong"></Icon>
                            详情
                        </a>
                    <Table stripe :columns="list.disease.columns" :data="list.disease.data" width="calc(100% - 16px)" ></Table>
                </Card>
            </div>
            <div class="info-box">
                <Card dis-hover>
                    <p slot="title">后结构化</p>
                    <!-- <Table stripe :columns="list.disease.columns" :data="list.disease.data" width="calc(100% - 16px)" ></Table> -->
                </Card>
            </div>
            <div class="info-box">
                <Card dis-hover>
                    <p slot="title">科室分诊</p>
                    <Table stripe :columns="list.department.columns" :data="list.department.data" width="calc(100% - 16px)" ></Table>
                </Card>
            </div>

            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ai-list {
    width: 100%;
    min-height: 200px;
    .info-box {
    display: inline-block;
        width: 30%;
        margin: 16px 10px;
        vertical-align:top;
    }
}
.tag-span{
    span{
        &:not(:first-child){
            margin-left: 8px;
        }
    }
}
</style>
<script>
import rule from './rule.js';

export default {
    data() {
        return {
            form: {
                info: '三天前，去汕头大学附属医院就诊 患者自诉有膝关节疼痛导致活动受限，行走不稳; 发烧，乏力，干咳，诊断为上呼吸道感染，nihss评分10 '
            },
            list:{
                disease:{
                    columns:[
                        {
                            title: '病种',
                            minWidth: 120,
                            key: 'disease'
                        },
                        {
                            title: '置信度',
                            minWidth: 100,
                            key: 'score'
                        },
                    ],
                    data:[]
                },
                department:{
                    columns:[
                        {
                            title: '科室',
                            minWidth: 120,
                            key: 'department'
                        },
                        {
                            title: '置信度',
                            minWidth: 100,
                            key: 'score'
                        },
                    ],
                    data:[]
                },
            },
            nerMap:{
                map:{},
                all_map:{},
            }
        }
    },
    mounted(){
        this.showAI();
    },
    methods: {
        showAI() {
            /* this.$api.aiDisease().then(res => {
                if(res.code==0){
                    this.list.disease.data=res.data;
                }
            }) */
            /* this.$api.aiDepartment().then(res=>{
                if(res.code==0){
                    this.list.department.data=res.data;
                }
            }) */
            // let params={"input":"三天前，去汕头大学附属医院就诊 发烧，乏力，干咳，诊断为上呼吸道感染，nihss评分10"};
            let params={
                input:this.form.info
            };
            this.$api.aiNer(params).then(res=>{
                if(res.code==0){
                    this.nerMap=rule.ner(res.data);
                    // console.log(res.data);
                    // console.log(rule.ner(res.data));
                    // console.log(this.nerMap);
                }
            })
            this.$api.aiDept(params).then(res=>{
                if(res.code==0){
                    this.list.department.data=res.data;
                }
            })
            this.$api.aiDiagnosis(params).then(res=>{
                if(res.code==0){
                    this.list.disease.data=res.data;
                }
            })

            
        },
        getTypeName(type){
            return rule.getTypeName(type)
        }
    }
}
</script>