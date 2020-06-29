<template>
	<Modal
        v-model="show"
        :title=" form.dictId ===''  ?'新增数据字典':'编辑数据字典'"
		:mask-closable="false"
		class-name="form"
    >
		<Form :model="form" ref="form" :rules="ruleCustom" :label-width="120">
			<Row :gutter="16">
				<Col span="24">
					<FormItem label="字典名称：" prop="dictName" >
						<Input v-model="form.dictName" ></Input>
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="字典编码：" prop="dictCode" >
						<Input v-model="form.dictCode" :disabled="form.dictId!=''"></Input>
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="字典描述：" prop="dictDesc" >
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
                dictCode:'',
                dictName:'',
                dictDesc:'',
            },
            ruleCustom:{
                dictCode:[
					{ required: true, message: '请输入', trigger: 'blur' }
                ],
                dictName:[
					{ required: true, message: '请输入', trigger: 'blur' }
                ],
            },
		}
	},
	methods: {

		init(){
            Object.assign(this.$data, this.$options.data());
            this.show=true;
            this.$nextTick(()=>{
                this.resetForm();
            })
		},
		edit(data){
            Object.assign(this.$data, this.$options.data());
            this.show=true;
            // this.resetForm();
            
            this.$nextTick(()=>{
                this.resetForm();
                this.form=data;
            })
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
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if(this.spinShow){
                        return ;
                    }
                    this.spinShow=true;
                    if(this.form.dictId==''){
                        http.add(this.form).then(res=>{
                            this.spinShow=false;
                            if(res.code===0){
                                this.$Message.success('操作成功')
                                this.success();
                            }else{
                                this.$Message.error(res.msg)
                            }
                        })
                    }else{
                        http.edit(this.form).then(res=>{
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

