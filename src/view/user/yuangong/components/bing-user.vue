<template>
	<Modal
        v-model="show"
        title="员工-渠道绑定"
		class-name="user-bing-form"
    >
        <Form  ref="form"   :label-width="120">
            <Row :gutter="0">
                <Col span="24" class="copy-col">
                    <FormItem label="待绑定渠道：" prop="name" >
                        <p>{{data.publicName}}</p>
                    </FormItem>
                </Col>
            </Row>
            <Alert style="margin-top: 20px;">发送下方内容给当前员工进行复制</Alert>
            <Row>
                <Col span="24" class="copy-col">
                    <Input v-model="form.password" type="textarea" style="resize: none;" :rows="3" readonly></Input>
                </Col>
            </Row>

            <Alert style="margin-top: 20px;">发送下面二维码给当前员工，扫描进入对应渠道（若未关注需提醒其进行关注），输入上方口令进行绑定</Alert>
            <Row>
                <Col span="24" class="copy-img">
                    <img :src="form.publicQrUrl"></img>
                </Col>
            </Row>
        </Form>

		<div slot="footer">
			<Button @click.stop="close">关闭</Button>
			<Button type="primary" @click.stop="doCopy(data.password)">复制</Button>
		</div>
        <Spin size="large" fix v-if="spinShow"></Spin>
	</Modal>
</template>
<script>
import http from '@/api/shuxi-master.js'
// import json from '../../json.js';
import { getImgUrl } from '@/libs/tools'

export default {
  components: {
  },
  data () {
    return {
      show: false,
      spinShow: false,
      data: {},
      form: {}
    }
  },
  methods: {
    init (item) {
      Object.assign(this.$data, this.$options.data())
      this.show = true
      let id = item.mappingId
      this.data = item
      http.bindingPassword(id).then((res) => {
        this.form = res.data
      })
    },
    close () {
      this.show = false
    },
    doCopy: function (str) {
      let that = this
      this.$copyText(str).then(function (e) {
        that.$Message.info('复制成功')
      }, function (e) {
        that.$Message.info('请手动复制')
      })
    }
  }
}
</script>

<style lang="scss" >
.user-bing-form{
    .ivu-form-item{
        margin-bottom: 0;
    }
    .copy-col{
        position: relative;
        .copy-button{
            position: absolute;
            top:0;
            right: 0;
        }
    }
    .copy-img {
        // margin: 0 auto;
        text-align: center;
        img{
            width:160px
        }
    }
}

</style>
