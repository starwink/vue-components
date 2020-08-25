<template>
  <Modal
    v-model="show"
    :title=" form.auserId ===''  ?'新增员工':isReadonly?'查看员工':'编辑员工'"
    :mask-closable="false"
    class-name="form"
  >
    <Form :model="form" ref="form" :rules="ruleCustom" :disabled="isReadonly" :label-width="120">
      <Row :gutter="16">
        <Col span="24">
          <FormItem label="人员姓名：" prop="name">
            <Input v-model="form.name" maxlength="5"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="24">
          <FormItem
            label="手机号码："
            prop="phone"
            :rules="[{ required: true, message: '请输入手机号码', trigger: 'change' },{validator: _phone, trigger: 'change'}]"
          >
            <Input v-model="form.phone" :disabled="form.identity?true:false"></Input>
          </FormItem>
        </Col>
      </Row>
       <Row :gutter="16">
        <Col span="24">
          <FormItem label="身份证：" prop="cardId" :rules="[{validator: _cardId, trigger: 'change'}]">
            <Input v-model="form.cardId" @on-change="changeCardId"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="24">
          <FormItem label="年龄：" prop="age">
            <InputNumber
              v-model="form.age"
              :min="0"
              :max="200"
              :formatter="value => `${value}`.replace(/\B(?=(\d{6})+(?!\d))/g, '')"
              :parser="value => value.replace(/\$\s?|(,*)/g, '')"
              style="width:100%"
              disabled
            ></InputNumber>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="24">
          <FormItem label="性别：" prop="sex">
            <Select v-model="form.sex">
              <Option value="MAN">男</Option>
              <Option value="WOMAN">女</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="24">
          <FormItem label="职位：" prop="position">
            <Input v-model="form.position"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="24">
          <FormItem label="所属地区：" prop="regionId">
            <Cascader
              :data="option.address"
              v-model="formAddress"
              :load-data="loadAddress"
              change-on-select
              @on-change="changeAddress"
            ></Cascader>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="24">
          <FormItem label="所属渠道：" prop="publicIdList">
            <Select v-model="form.publicIdList" multiple>
              <Option
                v-for="item in option.publicId"
                :key="'publicId'+item.publicId"
                :value="item.publicId"
              >{{ item.name }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="24">
          <FormItem label="组织关系：">
            <selTagList ref="selTagList" style="display: inline-block;" :disabled="isReadonly"></selTagList>
            <Button type="info" style="margin-left: 10px;" @click="openSelTag()">添加组织关系</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <div slot="footer">
      <Button @click.stop="close">取消</Button>

      <Button v-if="!isReadonly" type="primary" @click.stop="save('form')">保存</Button>
    </div>
    <getTagForm ref="getTagForm" @success="setOptionTag"></getTagForm>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </Modal>
</template>
<script>
import http from '@/api/shuxi-master.js'
import { mapState } from 'vuex'
import selTagList from '@/view/tag/tag-list/components/selTagList'
import getTagForm from '@/view/tag/tag-list/components/getTagForm'

// import { getImgUrl } from '@/libs/tools'
export default {
  components: {
    getTagForm: getTagForm,
    selTagList: selTagList
  },
  data () {
    return {
      show: false,
      spinShow: false,
      isReadonly: false,
      formAddress: [],
      form: {
        auserId: '',
        name: '',
        sex: '',
        age: 0,
        phone: '',
        cardId: '',

        provinceId: '',
        cityId: '',
        regionId: '',
        publicId: '',
        publicIdList: [],

        position: '',

        tagIds: []
      },

      option: {
        publicId: [],
        address: [],
        tagIds: []
      },
      ruleCustom: {
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        // phone: [
        //     { required: true, message: '请输入手机号码', trigger: 'change' },
        //     { validator:this._phone,message: '手机号码格式错误',  trigger: 'change'}
        // ],
        sex: [{ required: true, message: '请输入', trigger: 'change' }],
        age: [
          { required: true, type: 'number', message: '请输入', trigger: 'blur' }
        ],
        // position:[
        //     { required: true, message: '请输入', trigger: 'blur' }
        // ],
        // cardId:[
        //     { required: true, message: '请输入', trigger: 'blur' }
        // ],
        regionId: [{ required: true, message: '请选择', trigger: 'change' }],
        publicIdList: [
          {
            required: true,
            type: 'array',
            message: '请选择',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    _phone (rule, value, callback) {
      let phoneR = /^1\d{10}$/
      if (!phoneR.test(value)) {
        return callback(new Error('手机号码格式错误'))
      }
      return callback()
    },
    _cardId (rule, value, callback) {
      let cardIdR = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (value != '' && !cardIdR.test(value)) {
        return callback(new Error('身份证格式错误'))
      }
      return callback()
    },

    init () {
      Object.assign(this.$data, this.$options.data())

      this.show = true
      this.getOption()
      this.getProvinceList()
      this.$refs.selTagList.init(this.option.tagIds)
      this.$nextTick(() => {
        this.resetForm()
      })
    },

    edit (data, isReadonly) {
      Object.assign(this.$data, this.$options.data())
      this.show = true
      this.getOption()
      if (isReadonly) {
        this.isReadonly = isReadonly
      }

      if (this.spinShow) {
        return
      }
      this.spinShow = true
      http.detailAuser(data.auserId).then(res => {
        this.spinShow = false
        if (res.code != 0) {
          this.close()
          return
        }
        this.resetForm()
        this.form = res.data
        this.form.identity = data.identity
        this.form.age = parseInt(this.form.age)

        this.formAddress = [
          res.data.provinceId,
          res.data.cityId,
          res.data.regionId
        ]
        // this.form.publicId=this.form.publicIdList[0];

        let tagIds = []
        for (let item of this.form.tags) {
          tagIds.push({
            tagId: item.tagId,
            tagName: item.tagName,
            title: item.tagName
          })
        }
        this.option.tagIds = tagIds
        this.$refs.selTagList.init(this.option.tagIds)

        this.editLoadAddress()
        this.$nextTick(() => {
          this.formAddress = [
            this.form.provinceId,
            this.form.cityId,
            this.form.regionId
          ]
        })
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
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.form.publicIdList=[this.form.publicId]

          if (this.spinShow) {
            return
          }
          this.spinShow = true

          let params = JSON.parse(JSON.stringify(this.form))
          let tagIds = []
          for (let item of this.option.tagIds) {
            tagIds.push(item.tagId)
          }
          params.tagIds = tagIds

          if (params.auserId != '') {
            http.editAuser(params).then(res => {
              this.spinShow = false
              if (res.code === 0) {
                this.$Message.success('操作成功')
                this.success()
                if (res.data.membetState === 1) {
                  this.$parent.$refs.SetVip.showModal(res.data)
                }
              } else {
                this.$Message.error(res.msg)
              }
            })
          } else {
            http.addAuser(params).then(res => {
              this.spinShow = false
              if (res.code === 0) {
                this.$Message.success('操作成功')
                this.success()
                if (res.data.membetState === 1) {
                  this.$parent.$refs.SetVip.showModal(res.data)
                }
              } else {
                this.$Message.error(res.msg)
              }
            })
          }
        }
      })
    },
    success () {
      this.show = false
      this.$emit('success')
    },
    getOption () {
      http.channelsServiceOrSubList().then(res => {
        if (res.code === 0) {
          this.option.publicId = res.data
        }
      })
    },
    loadAddress (item, callback) {
      item.loading = true
      if (item.lv == 0) {
        http.getCityList(item.value).then(res => {
          item.loading = false
          if (res.code === 0) {
            let data = []
            for (let item of res.data) {
              data.push({
                value: item.cityId,
                label: item.cityName,
                children: [],
                loading: false,
                lv: 1
              })
            }
            item.children = data
            callback()
          }
        })
      } else if (item.lv == 1) {
        http.getRegionList(item.value).then(res => {
          item.loading = false
          if (res.code === 0) {
            let data = []
            for (let item of res.data) {
              data.push({
                value: item.regionId,
                label: item.regionName
                // loading:false,
                // lv:2,
              })
            }
            item.children = data
            callback()
          }
        })
      }
    },
    getProvinceList () {
      http.getProvinceList().then(res => {
        if (res.code === 0) {
          let data = []
          for (let item of res.data) {
            data.push({
              value: item.provinceId,
              label: item.provinceName,
              children: [],
              loading: false,
              lv: 0
            })
          }
          this.option.address = data
        }
      })
    },

    editLoadAddress () {
      console.log('editLoadAddress')

      http.getRegionList(this.form.cityId).then(res => {
        if (res.code === 0) {
          let data = []
          for (let item of res.data) {
            data.push({
              value: item.regionId,
              label: item.regionName
            })
          }
          let thereData = data

          http.getCityList(this.form.provinceId).then(res => {
            if (res.code === 0) {
              let data = []
              let regionChildren = 0
              for (let i = 0; i <= res.data.length; i++) {
                let item = res.data[i]
                if (item != void 0) {
                  let children = []
                  if (item.cityId == this.form.cityId) {
                    children = thereData
                  }
                  data.push({
                    value: item.cityId,
                    label: item.cityName,
                    children: children,
                    loading: false,
                    lv: 1
                  })
                }
              }
              let twoData = data
              http.getProvinceList().then(res => {
                if (res.code === 0) {
                  let data = []
                  // let cityChildren=0;
                  for (let i = 0; i <= res.data.length; i++) {
                    let item = res.data[i]
                    if (item != void 0) {
                      let children = []
                      if (item.provinceId == this.form.provinceId) {
                        children = twoData
                      }
                      data.push({
                        value: item.provinceId,
                        label: item.provinceName,
                        children: children,
                        loading: false,
                        lv: 0
                      })
                    }
                  }
                  this.option.address = data
                }
              })
            }
          })
        }
      })
    },

    changeAddress (val) {
      if (val == void 0) {
        return
      }
      this.form.provinceId = val[0] || ''
      this.form.cityId = val[1] || ''
      this.form.regionId = val[2] || ''
    },
    changeCardId () {
      let age = 0
      let date = new Date()
      let year = parseInt(date.getFullYear())
      let val = this.form.cardId
      console.log(val)
      if (val != void 0) {
        if (val.length == 15) {
          age = year - parseInt('19' + val.substr(6, 2)) + 1
        } else if (val.length == 18) {
          age = year - parseInt(val.substr(6, 4)) + 1
        }
      }
      this.form.age = age
    },
    setOptionTag (data) {
      // for(let item of data){
      //     this.option.tagIds.push(item);
      // }
      let tmp = JSON.parse(JSON.stringify(this.option.tagIds))
      tmp = tmp.concat(data)
      tmp = this.hasTagOne(tmp)
      this.option.tagIds = tmp
      this.$refs.selTagList.init(this.option.tagIds)
    },
    openSelTag () {
      this.$refs.getTagForm.init('AUSER', true, 'yuangong')
    },
    hasTagOne (data) {
      let userId = ','
      let arr = []
      for (let item of data) {
        if (userId.indexOf(',' + item.tagId + ',') > -1) {
        } else {
          userId += item.tagId + ','
          arr.push(item)
        }
      }
      return arr
    }
  },
  computed: {
    ...mapState(['dict'])
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
</style>
