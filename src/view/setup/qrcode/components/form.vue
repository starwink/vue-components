<template>
	<Modal
        v-model="show"
        :title=" form.qrCodeId ===''  ?'新增二维码':'编辑二维码'"
        @on-ok="save"
		:mask-closable="false"
		width="600px"
		class-name="form"
    >
		<Form :model="form" ref="form" :rules="ruleCustom" :label-width="120">
			<Row :gutter="16">
				<Col span="24">
					<FormItem label="二维码名称：" prop="name" >
						<Input v-model="form.name" ></Input>
                        
					</FormItem>
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24">
					<FormItem label="关键词：" prop="keyword" >
						<Input v-model="form.keyword" ></Input>
					</FormItem>
				</Col>
			</Row>

            <Row :gutter="16">
				<Col span="24">
                    <FormItem label="二维码类型：" prop="type"  >
                        <Select v-model="form.type" >
                            <Option v-for="item in dict.WechatQrCodeType" :key="'WechatQrCodeType'+item.dictKey" :value="item.dictKey">{{ item.dictValue }}</Option>
                        </Select>
                    </FormItem>
                </Col>
			</Row>

            

            <Row :gutter="16">
				<Col span="24">
                    <FormItem label="所属渠道" prop="publicId"  >
                        <Select v-model="form.publicId" disabled @on-change="changePublicId" >
                            <Option v-for="item in option.publicId" :key="'publicId'+item.publicId" :value="item.publicId">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                </Col>
			</Row>
            <Row :gutter="16" >
				<Col :span="form.qrCodeId===''?18:24">
                    <FormItem label="编号："   >
                        <Input v-model="form.codeNum"  disabled readonly></Input>
                    </FormItem>
                </Col>
                <Col span="6" v-if="form.qrCodeId===''">
                    <Button icon="ios-sync" @click="changePublicId('')">重新获取</Button>
                </Col>
			</Row>
            

              <Row :gutter="16">

				<Col span="24">
					<FormItem label="描述：" prop="qrDescribe" >
						<Input v-model="form.qrDescribe" type="textarea" style="resize: none;" :rows="3" maxlength=200 show-word-limit></Input>
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
import http from '@/api/shuxi-master.js'
import { mapState } from 'vuex'

export default {
	components:{
	},
	data(){
		return {
            show:false,
            spinShow:false,
			form:{
                qrCodeId:'',
                name:'',
                keyword:'',
                type:'',
                publicId:'',
                codeNum:'',
                qrDescribe:'',
            },
            ruleCustom:{
                name:[
					{ required: true, message: '请输入', trigger: 'blur' }
                ],
                type:[
					{ required: true,type: 'string', message: '请选择', trigger: 'change' }
                ],
                publicId:[
					{ required: true,type: 'string', message: '请选择', trigger: 'change' }
                ],
               
            },
            option:{
                publicId:[],
            },
           
            
		}
	},
	methods: {

		init(data){
            Object.assign(this.$data, this.$options.data());

            this.show=true;
            this.getOption();
           
            this.changePublicId(data.publicId)
            this.$nextTick(() => {
                this.resetForm();
                this.form.publicId=data.publicId;
            });
		},
		edit(data){
            Object.assign(this.$data, this.$options.data());
            this.show=true;
            this.getOption();
            if(this.spinShow){
                return ;
            }
            this.spinShow=true;
            // let params={
            //     qrCodeId:id
            // }
            http.detailQrcode(data.qrCodeId).then(res=>{
                this.spinShow=false;
                this.form=res.data;
                this.resetForm();
                
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
                    if(this.form.qrCodeId==''){
                        http.addQrcode(this.form).then(res=>{
                            this.spinShow=false;
                            if(res.code===0){
                                this.$Message.success('操作成功')
                                this.success();
                            }else{
                                this.$Message.error(res.msg)
                            }
                        })
                    }else{
                        http.updateQrcode(this.form).then(res=>{
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
        
        getOption () {
            http.channelsList().then((res)=>{
                if(res.code===0){
                    this.option.publicId=res.data
                }
            })
            // this.getUser();
        },
        changePublicId(val){
            
            if(val=='' ){
                val=this.form.publicId;
            }
            if(this.form.qrCodeId!=='' || val ==void 0){
                return;
            }
            if(val=='' || typeof val=='object'){
                this.$Message.info('请选择所属渠道');
                return ;
            }
            http.getQrcodeNum(val).then(res=>{
                if(res.code===0){
                    this.form.codeNum=res.data;
                }
            })
        }
        
    },
    computed: {
        ...mapState(['dict'])
    },
}
</script>

