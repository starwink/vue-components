<template>
    <Modal v-model="show" title="设置" :mask-closable="false" width="400">
        <Form :model="form" ref="form" :label-width="120" @submit.native.prevent @keydown.native.enter.prevent="save('form')">
            <Row :gutter="32">
                <Col span="24">
                <FormItem label="显示内容" prop="label">
                    <Input v-model.trim="form.label" maxlength="50" placeholder="请输入内容" ></Input>
                </FormItem>
                </Col>
            </Row>
        </Form>
        <div slot="footer">
            <Button @click.stop="close">取消</Button>
            <Button  type="primary" @click.stop="save('form')">保存</Button>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </Modal>
</template>
<script>

export default {
    name: 'setLabelModal',
    data() {
        return {
            show: false,
            spinShow: false,
            isEdit:false,
            form: {
                label:''
            },
            ruleCustom: {
                label: [
                    { required: true, message: '请输入', trigger: 'blur' }
                ],
            }
            
        }
    },
    methods: {
        init() {
            Object.assign(this.$data, this.$options.data());
            this.show = true
            this.$nextTick(() => {
                this.resetForm();
            })
        },
        edit(data){
            Object.assign(this.$data, this.$options.data());
            this.show = true;
            this.isEdit=true;
            this.$nextTick(() => {
                this.resetForm();
                this.form=data;
            })
        },
       
        resetForm() {
            this.$refs.form.fields.forEach(function (e) {
                e.resetField()
            })
        },
        close() {
            this.show = false
        },
        save(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(!this.isEdit){
                        this.$emit('createTreeItem',this.form);
                    }else{
                        console.log('editTreeItem')
                        this.$emit('editTreeItem',this.form);
                    }
                    this.success();
                }
            })
        },
        success() {
            this.show = false
            this.$emit('success')
        },
    }
}
</script>