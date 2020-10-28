<template>
<Modal v-model="show" title="高级配置" :mask-closable="false" width="60" class-name="form">
    <div ref="jsoneditor" style="height: 300px;"/>
    <div slot="footer">
            <Button @click.stop="close">取消</Button>

            <Button  type="primary" @click.stop="save()">保存</Button>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </Modal>
</template>
<script>
import jsoneditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
export default {
    data(){
        return {
            show:false,
            spinShow:false,
            jsonEditor:'',
            json:{},
            data:{}
        } 
    },
    methods:{
        init(data) {
            Object.assign(this.$data, this.$options.data());
            this.show = true;
            this.$nextTick(() => {
                this.data=data;
                this.json=JSON.parse(JSON.stringify(data));
                this.initJsonEditor();
                this.resetForm();
            });
        },
        initJsonEditor(){
            // let container = document.getElementById('jsoneditor')
            let container = this.$refs.jsoneditor;
            container.innerHTML=''
            let json = this.json;
            console.log('init',this.json);
            let options = {
                    mode: 'text',
                    indentation: 2,
                    enableSort:false, //排序
                    enableTransform:false,//查询筛选
                    search: false
            }
            this.jsonEditor = new jsoneditor(container, options)
            this.jsonEditor.set(json);

        },
        resetForm() {
            this.$refs.form.fields.forEach(function (e) {
                e.resetField();
            });
        },
        close() {
            this.show = false;
        },
        save() {
            let json=this.jsonEditor.get();;
            Object.assign(this.data,json);//回绑
            this.$emit('success',this.data);
            this.close();
        },
        
    }
}
</script>