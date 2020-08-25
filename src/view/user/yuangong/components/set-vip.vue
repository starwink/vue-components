<template>
  <div>
    <Modal
      v-model="show"
      :mask-closable="false"
      :title="obj.membetState===1?'员工- 会员绑定':'一键生成会员'"
      :ok-text="obj.membetState===1?'点击绑定':'一键生成会员'"
      :loading="loading"
    >
      <p v-if="obj.membetState===2">当前员工账号【{{obj.phone}}】未找到对应会员，是否进行一键生成会员操作？</p>
      <p v-if="obj.membetState===1">
        当前员工账号【{{obj.phone}}】已有相同账号的会员，
        <span style="color:red">是否与对应会员进行绑定？</span>
      </p>
      <Divider />
      <Form :label-width="120">
        <FormItem label="会员姓名：">
          <Input v-model="obj.meName" :disabled="obj.membetState===1" style="width:200px"></Input>
          <span
            v-if="obj.membetState===1"
            @click="userDeatils"
            style="margin-left: 20px;color:#348eed;cursor:pointer"
          >查看会员详情</span>
        </FormItem>
        <FormItem label="会员昵称：">
          <Input v-model="obj.nickName" :disabled="obj.membetState===1" style="width:200px"></Input>
        </FormItem>
        <FormItem label="手机号码：">
          <p>{{obj.phone}}</p>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="show=false">取消</Button>
        <Button @click="saveModal" type="primary">保存</Button>
      </div>
    </Modal>
    <Modal v-model="succeed_show" :mask-closable="false" title="提示" cancel-text @on-ok="reloadList">
      <p v-if="obj.membetState===2">
        一键生成会员成功，点击【
        <span @click="userDeatils" style="color:#348eed;cursor:pointer">查看会员详情</span>】。
        <br />若会员信息有误请到【人员管理-会员管理】中进行信息修改
      </p>
      <p v-if="obj.membetState===1">当前员工绑定会员账号成功</p>
      <div slot="footer">
        <Button type="primary" @click="succeed_show=false">确定</Button>
      </div>
    </Modal>
    <User-Form ref="UserInfo"></User-Form>
  </div>
</template>

<script>
import http from '@/api/shuxi-master.js'
import form from '../../vip/components/form'
export default {
  data () {
    return {
      show: false,
      obj: {},
      loading: true,
      succeed_show: false
    }
  },
  components: {
    UserForm: form
  },
  methods: {
    showModal (data) {
      this.show = true
      this.obj = data
      this.obj.nickName = this.obj.nickName || this.obj.meName
    },
    saveModal () {
      let data = {
        phone: this.obj.phone,
        meName: this.obj.meName,
        nickName: this.obj.nickName
      }
      if (this.obj.membetState === 1) {
        http
          .userBindmember(this.obj.phone)
          .then(res => {
            if (res.code === 0) {
              this.show = false
              this.succeed_show = true
            }
            this.loading = false
            this.reloadList()
          })
          .finally(_ => {
            this.loading = true
          })
      } else if (this.obj.membetState === 2) {
        http
          .postUserAddmember(data)
          .then(res => {
            if (res.code === 0) {
              this.obj.memberId = res.data
              this.show = false
              this.succeed_show = true
            }
            this.loading = false
            this.reloadList()
          })
          .finally(_ => {
            this.loading = true
          })
      }
    },
    userDeatils () {
      let data = this.obj
      data.userId = data.memberId
      this.$refs.UserInfo.edit(data, true)
    },
    reloadList () {
      this.$emit('success')
    }
  }
}
</script>

<style>
</style>
