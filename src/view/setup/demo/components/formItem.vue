<template>
	<Modal
        v-model="show"
        :title="form.dictItemId==''?'新增数据项':'编辑数据项'"
		:mask-closable="false"
		class-name="form"
    >
		<Form :model="form" ref="form" :rules="ruleCustom" :label-width="120">
			<Row :gutter="16">
				<Col span="24">
					<FormItem label="选项名称：" prop="dictValue" >
						<Input v-model="form.dictValue" ></Input>
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="编码：" prop="dictKey" >
						<Input v-model="form.dictKey" ></Input>
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="排序：" prop="dictSort" >
						<InputNumber :max="100" :min="1" v-model="form.dictSort"></InputNumber>
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="备注：" prop="dictDesc" >
						<Input v-model="form.dictDesc" ></Input>
					</FormItem>
				</Col>
			</Row>

           
           
		</Form>
		<div slot="footer">
			<Button  @click.stop="close">取消</Button>
			<Button type="primary" @click.stop="save('form')">提交</Button>
		</div>
        <Spin size="large" fix v-if="spinShow"></Spin>
	</Modal>
</template>
<script>
import http from '@/api/shuxi-dict.js'

export default {
	components:{
	},
	data(){
		return {
            show:false,
            spinShow:false,
			form:{
                dictId:'',
                dictItemId:'',
                dictKey:'',
                dictValue:'',
                dictSort:0,
                dictDesc:'',
            },
            ruleCustom:{
                dictKey:[
					{ required: true, message: '请输入', trigger: 'blur' }
                ],
                dictValue:[
					{ required: true, message: '请输入', trigger: 'blur' }
                ],
            },
		}
	},
	methods: {

		init(data){
            // Object.assign(this.$data, this.$options.data());
            this.$refs.form.resetFields()
            this.show=true;
            this.form.dictId=data.dictId;
		},
		edit(data){
            Object.assign(this.$data, this.$options.data());
            this.show=true;
            this.form=data;
            this.resetForm();
        },
        resetForm(){
             this.$refs.form.fields.forEach(function (e) {
                e.resetField()
            })
        },
		close(){
            this.show=false;
        },
		save(name){
            console.log(this.form);
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(this.spinShow){
                        return ;
                    }
                    this.spinShow=true;
                    if(this.form.dictItemId==''){
                        
                        http.addItem(this.form).then(res=>{
                            this.spinShow=false;
                            if(res.code===0){
                                this.$Message.success('操作成功')
                                this.success();
                            }else{
                                this.$Message.error(res.msg)
                            }
                        })
                    }else{
                        http.editItem(this.form).then(res=>{
                            this.spinShow=false;
                            if(res.code===0){
                                this.$Message.success('操作成功')
                                this.success();
                            }else{
                                this.$Message.error(res.msg)
                            }
                        })
                    }
                    
                }
            })
            
		},
		success(){
			this.show=false;
			this.$emit('success');
        },
       
    },
  
}
</script>

