<template>
	<Modal
        v-model="show"
        :title="form.title"
		width="600px"
		class-name="form qrcode-review"
    >
		<Form :model="form" ref="form" :label-width="120">
			<Row :gutter="16">
				<Col span="24" class="qrcode-img">
					<img :src="form.msrc">
				</Col>
			</Row>
            <Row :gutter="16">
				<Col span="24" >
					<Button @click="down" class="qrcode-button">下载</Button>
				</Col>
			</Row>
           
		</Form>
		<div slot="footer">
			<Button  @click.stop="close">关闭</Button>
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
               title:'',
               msrc:'',
               src:'',
            },
		}
	},
	methods: {

		init(data){
            // Object.assign(this.$data, this.$options.data());
            this.$refs.form.resetFields()
            this.show=true;
            this.form.msrc=data.msrc
            this.form.src=data.src
            this.form.title=data.title
		},
        resetForm(){
             this.$refs.form.fields.forEach(function (e) {
                e.resetField()
            })
        },
		close(){
            this.show=false;
        },
		
		success(){
			this.show=false;
			this.$emit('success');
        },
        down(){
            let a = document.createElement('a');
            a.href =this.form.src;
            a.click();
        },
        
       
        
    },
    computed: {
        ...mapState(['dict'])
    },
}
</script>
<style lang="scss" scoped>
.qrcode-review{
    text-align: center;
    .qrcode-img{
        
        display: block;
        margin: 0 auto;
        text-align: center;
        width: 100%;
        img{
            width: 240px;
        }
    }
    .qrcode-button{
        display:block;
        margin: 0 auto;
    }
}
</style>
