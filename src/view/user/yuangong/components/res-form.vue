<template>
	<Modal
        v-model="show"
        title="权限配置"
        @on-ok="save"
		:mask-closable="false"
		width="600px"
		class-name="form"

    >
		<Form :model="form" ref="form" :rules="ruleCustom" :label-width="120">

			<Row :gutter="16">
				<Col span="24">
                    <FormItem label="角色权限："  class="ivu-form-item-required">
					    <Tree :data="option.menuData" show-checkbox multiple></Tree>
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

export default {
  components: {
  },
  data () {
    return {
      show: false,
      spinShow: false,
      form: {
        auserId: '',
        sysRess: []
      },
      ruleCustom: {

      },
      option: {
        menuData: [],
        userSelStr: ''
      }
    }
  },
  methods: {

    init (data) {
      Object.assign(this.$data, this.$options.data())
      this.show = true
      if (this.spinShow) {
        return
      }
      this.spinShow = true
      this.form.auserId = data.auserId
      http.getRes(data.auserId).then(res => {
        this.spinShow = false

        this.option.userSelStr = this.closeMore(this.childernEditUserMenu(res.data)) || ''
        let menu = []
        for (let item of res.data) {
          console.log(item, 'item')
          let c = []
          if (item.sysRess != void 0 && typeof item.sysRess === 'object') {
            c = this.childernMenu(item.sysRess)
          }
          let checked = false
          if (this.option.userSelStr != '') {
            this.option.userSelStr.indexOf(',' + item.resId + ',') != -1 ? checked = true : checked = false
          }
          let i = {
            title: item.resName,
            menuId: item.resId,
            resKey: item.resKey,
            checked: checked,
            expand: true
          }
          if (c.length > 0) {
            i.children = c
          }
          menu.push(i)
          this.$nextTick(() => {
            this.option.menuData = menu
          })
        }
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
      let sysRess = this.getSaveUserResObj()
      this.form.sysRess = sysRess
      // this.$refs[name].validate((valid) => {
      //     if (valid) {
      if (this.spinShow) {
        return
      }

      this.spinShow = true
      http.updateAuserRes(this.form).then(res => {
        this.spinShow = false
        if (res.code === 0) {
          this.$Message.success('操作成功')
          this.success()
        } else {
          this.$Message.error(res.msg)
        }
      })
      //     }
      // })
    },
    success () {
      this.show = false
      this.$emit('success')
    },
    getOperation (data) {
      console.log(data)
    },

    childernMenu (data) {
      let menu = []
      if (data != void 0 && typeof data === 'object') {
        for (let item of data) {
          let c = []
          if (item.sysRess != void 0 && typeof item.sysRess === 'object') {
            c = this.childernMenu(item.sysRess)
          }
          let checked = false
          if (this.option.userSelStr != '') {
            this.option.userSelStr.indexOf(',' + item.resId + ',') != -1 ? checked = true : checked = false
          }

          let i = {
            title: item.resName,
            menuId: item.resId,
            resKey: item.resKey,
            checked: checked,
            expand: true
          }
          if (c.length > 0) {
            i.children = c
          }
          menu.push(i)
        }
      }
      return menu
    },

    childernUserResObj (data) {
      let resRess = [], selfSelect = false
      if (data != void 0 && typeof data === 'object') {
        for (let item of data) {
          let isHave = false, subObj
          if (item.children != void 0 && typeof item.children === 'object') {
            // let {sysRess,selfSelect}=this.childernUserResObj(item.children);
            subObj = this.childernUserResObj(item.children)
          }

          if (subObj != void 0 && subObj.selfSelect == true) {
            isHave = true
            selfSelect = true
          } else if (subObj == void 0) {
            isHave = item.checked
            if (item.checked) {
              selfSelect = true
            }
          }

          let i = {
            resKey: item.resKey,
            isHave: isHave,
            // isHave:item.checked,
            resId: item.menuId
          }
          if (subObj != void 0 && subObj.resRess.length > 0) {
            i.sysRess = subObj.resRess
          }
          resRess.push(i)
        }
      }
      return { 'resRess': resRess, 'selfSelect': selfSelect }
    },
    getSaveUserResObj () {
      let data = JSON.parse(JSON.stringify(this.option.menuData))
      let resRess = []
      if (data != void 0 && typeof data === 'object') {
        for (let item of data) {
          let i, subObj, isHave = false

          if (item.children != void 0 && typeof item.children === 'object') {
            subObj = this.childernUserResObj(item.children)
          }
          if (subObj != void 0 && subObj.selfSelect == true) {
            isHave = true
          } else if (subObj == void 0) {
            isHave = item.checked
          }

          i = {
            resKey: item.resKey,
            isHave: item.checked,
            isHave: isHave,
            resId: item.menuId
          }

          if (subObj != void 0 && subObj.resRess.length > 0) {
            i.sysRess = subObj.resRess
          }
          resRess.push(i)
        }
      }
      return resRess
    },
    // 获取用户已有权限拼接字符串
    getUserEditMenu (data) {
      // let data=JSON.parse(JSON.stringify(this.option.menuData));
      let i = ''
      if (data != void 0 && typeof data === 'object') {
        for (let item of data) {
          let ii = ''
          if (item.sysRess != void 0 && typeof item.sysRess === 'object') {
            ii += this.childernEditUserMenu(item.sysRess)
            if (item.isHave == true && ii.split(',').length == item.sysRess.length) {
              i += item.resId + ','
            }
            i += ii
          } else {
            if (item.isHave == true) {
              i += item.resId + ','
            }
          }
        }
      }
      i != '' ? i + ',' : i
      return i
    },
    // 编辑时用于验证是否有权限
    childernEditUserMenu (data) {
      let i = ','
      if (data != void 0 && typeof data === 'object') {
        for (let item of data) {
          let ii = ''
          if (item.sysRess != void 0 && typeof item.sysRess === 'object') {
            ii += this.childernEditUserMenu(item.sysRess)
            if (ii != '') {
              i += ii + ','
            }
          }
          if (item.isHave == true && (item.sysRess == void 0 || (ii.split(',').length - 1) == item.sysRess.length)) {
            i += item.resId + ','
          }
        }
      }
      i = i[i.length - 1] == ',' ? i.substr(0, i.length - 1) : i

      return i
    },

    closeMore (str) {
      let tt = str || ''
      tt = tt.replace(/,,/g, ',')
      while (tt.indexOf(',,') >= 0) {
        tt = tt.replace(/,,/g, ',')
      }
      tt = tt[tt.length - 1] == ',' ? tt : tt + ','
      return tt
    }

  }
  // mounted(){

  // }
}
</script>
