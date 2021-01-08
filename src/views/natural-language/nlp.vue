<template>
    <div class="main-page" ref="nlp">
        <Alert banner v-model="showAlert" show-icon closable on-close="closeAlert">
            功能说明
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">
                Ewell自然语言处理基础工具库，包括医学分词、实体识别、关系抽取等自然语言基础功能，为医学文书主
                题识别、指标抽取、病历质控、CDSS、对话系统等大量上层应用服务。本工具组件支持远程服务和院内部
                署等多种需求形式和个性化服务功能。
            </template>
        </Alert>

        <Card dis-hover>
            <p slot="title">功能演示</p>
            <p slot="extra">
                <Button type="text">
                <Icon class="button" type="md-help-circle" @click.stop="openAlert" />
                功能反馈
                </Button>
            </p>
            <div>

            </div>
        </Card>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            showAlert:true,
        }
    },
    methods: {
        closeAlert(){
            this.showAlert=false; 
        },
        openAlert(){
            console.log('111')
            this.showAlert=true;
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../index.scss";

</style>