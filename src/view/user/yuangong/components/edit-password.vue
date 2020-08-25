<style lang="less" scoped>
.ps {
    text-align: center;
    font-size: 12px;
    color: #999;
}
</style>
<template>
    <Modal v-model="show" title="修改密码" :mask-closable="false" width="600px" class-name="form">
        <Form :model="form" ref="form" :rules="ruleCustom" :label-width="120">

            <Row :gutter="16">
                <Col span="24">
                <FormItem label="原密码：" prop="oldPassword">
                    <Input v-model="form.oldPassword" type="password" password placeholder="请输入原密码"></Input>
                </FormItem>
                </Col>
            </Row>

            <Row :gutter="16">
                <Col span="24">
                <FormItem label="新密码：" prop="newPassWord">
                    <Input v-model="form.newPassWord" type="password" password placeholder="请输入新密码"></Input>
                </FormItem>
                </Col>
            </Row>

            <Row :gutter="16">
                <Col span="24">
                <FormItem label="确认密码：" prop="confirmPassWord" :rules="[
                         { required: true,message: '最少需要输入六位',  trigger: 'blur',min:6 },
                         {validator: _confirmPassWork,  trigger: 'change'}]">
                    <Input v-model="form.confirmPassWord" type="password" password placeholder="请再次输入新密码"></Input>
                </FormItem>
                </Col>
            </Row>

        </Form>
        <div slot="footer">
            <!-- <div class="ps">忘记密码可以联系管理员进行密码重置</div> -->
            <Button @click.stop="close">取消</Button>
            <Button type="primary" @click.stop="save('form')">确认修改</Button>
        </div>

        <Spin size="large" fix v-if="spinShow"></Spin>
    </Modal>
</template>
<script>
import http from '@/api/shuxi-master.js'

export default {
  components: {
  },
  data () {
    return {
      show: false,
      spinShow: false,
      form: {
        oldPassword: '',
        newPassWord: '',
        confirmPassWord: ''
      },
      ruleCustom: {
        oldPassword: [
          { type: 'string', required: true, message: '请输入', trigger: 'blur' }
        ],
        newPassWord: [
          { type: 'string', required: true, message: '最少需要输入六位', trigger: 'blur', min: 6 }
        ]
        /* confirmPassWord:[
                    { required: true,message: '请输入',  trigger: 'blur' },
                    { validator:this._confirmPassWork,  trigger: 'change' },
                ], */

      },
      option: {
        menuData: [],
        userSelStr: ''
        // userMenu:[],
      }
    }
  },
  methods: {
    _confirmPassWork (rule, value, callback) {
      console.log('this.form.newPassWord', this.form.newPassWord, this.form.confirmPassWord)
      if (this.form.newPassWord != this.form.confirmPassWord) {
        return callback(new Error('确认密码与新密码不一致'))
      }
      return callback()
    },
    init () {
      Object.assign(this.$data, this.$options.data())
      this.show = true
      this.$nextTick(() => {
        this.resetForm()
      })
    },

    resetForm () {
      this.$refs.form.fields.forEach(function (e) {
        e.resetField()
      })
    },
    close () {
      this.show = false
    },
    save (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.spinShow) {
            return
          }

          let pasms = {
            oldPassword: this.form.oldPassword,
            newPassWord: this.form.newPassWord
          }
          this.spinShow = true
          http.editPassword(pasms).then(res => {
            this.spinShow = false
            if (res.code === 0) {
              this.$Message.success('操作成功')
              this.success()
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    },
    success () {
      this.show = false
      this.$emit('success')
    }

  }
  // mounted(){

  // }
}
</script>
