
<template>
  <div class="admin-page">
    <Card class="search_where">
      <Form :model="form" ref="searchForm" :label-width="96">
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="人员姓名：" prop="name">
              <Input v-model="form.name" maxlength="10" placeholder="请输入人员姓名"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="手机号码：" prop="phone">
              <Input v-model="form.phone" maxlength="11" placeholder="请输入手机号码"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="12">
            <FormItem label="所属渠道：" prop="publicId">
              <Select v-model="form.publicId">
                <Option value>全部</Option>
                <Option
                  v-for="item in option.publicId"
                  :key="'publicId'+item.publicId"
                  :value="item.publicId"
                >{{ item.name }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="绑定状态：">
              <RadioGroup v-model="form.bindingState">
                <Radio label>全部</Radio>
                <Radio
                  v-for="item in dict.AuserBindingState"
                  :label="item.dictKey"
                  :key="item.dictKey"
                >{{ item.dictValue }}</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="所属地区：">
              <Cascader
                :data="option.address"
                v-model="formAddress"
                :load-data="loadAddress"
                change-on-select
                @on-change="changeAddress"
              ></Cascader>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="组织关系：">
              <selTagList ref="selTagList" style="display: inline-block;"></selTagList>
              <Button type="info" style="margin-left: 10px;" @click="openSelTag()">添加组织关系</Button>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="32">
          <Col span="24" class="rigth-button">
            <Button style="margin-left: 10px;" @click="reset">重置</Button>
            <Button type="primary" style="margin-left: 10px;" @click="search">搜索</Button>
          </Col>
        </Row>
      </Form>
    </Card>
    <div class="other-button-box">
      <!-- <Button type="info"  style="margin-left: 10px;" @click="doCopy('fdsfss新半地半')">复制</Button>  -->
      <Button v-if="isAdmin" type="info" style="margin-left: 10px;" @click="add()">新增</Button>
      <Button v-if="isAdmin" type="error" style="margin-left: 10px;" @click="delList()">批量删除</Button>
    </div>
    <Card>
      <div class="table-box">
        <Table
          stripe
          :columns="list.columns"
          :data="list.data"
          width="calc(100% - 16px)"
          @on-selection-change="tableChange"
        ></Table>
      </div>
      <div class="page-box">
        <Row>
          <Col span="24">
            <Page
              :total="page.total"
              :current="page.current"
              :page-size="page.pageSize"
              @on-change="changePageCurrent"
              @on-page-size-change="changeSizeCurrent"
              show-elevator
              show-sizer
            />
          </Col>
        </Row>
      </div>
      <Spin size="large" fix v-if="spinShow"></Spin>
    </Card>
    <modelForm ref="modelForm" @success="getList"></modelForm>
    <modelShow ref="modelShow" @reset="getList" @success="getList"></modelShow>
    <resForm ref="resForm"></resForm>
    <getTagForm ref="getTagForm" @success="setOptionTag"></getTagForm>
    <set-vip ref="SetVip" @success="getList"></set-vip>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import http from '@/api/shuxi-master.js'
import form from './components/form'
import show from './components/show'
import SetVip from './components/set-vip'
import resForm from './components/res-form'
import selTagList from '@/view/tag/tag-list/components/selTagList'
import getTagForm from '@/view/tag/tag-list/components/getTagForm'

export default {
  components: {
    modelForm: form,
    modelShow: show,
    resForm: resForm,
    getTagForm: getTagForm,
    selTagList: selTagList,
    SetVip
  },
  watch: {},
  methods: {
    reset () {
      let redata = this.$options.data()
      Object.assign(this.$data.form, redata.form)
      this.option.tagIds = []
      this.$refs.selTagList.init([])
      this.formAddress = []
    },
    search () {
      this.page.current = 1
      this.getList()
    },
    changePageCurrent (val) {
      this.page.current = val
      this.getList()
    },
    changeSizeCurrent (val) {
      this.page.current = 1
      this.page.pageSize = val
      this.getList()
    },

    getList () {
      if (this.spinShow) {
        return
      }
      this.spinShow = true
      let params = {
        ...this.form,
        ...{ current: this.page.current, size: this.page.pageSize }
      }

      if (this.option.tagIds.length > 0) {
        params.tagId = this.option.tagIds[0].tagId
      }

      http.getAuserList(params).then(res => {
        this.spinShow = false
        this.list.data = res.data
        this.page.total = res.total
      })
    },
    add () {
      this.$refs.modelForm.init()
    },
    edit (item) {
      if (this.isAdmin) {
        this.$refs.modelForm.edit(item)
      } else {
        this.$refs.modelForm.edit(item, true)
      }
    },
    openDetail (item) {
      this.$refs.modelShow.init(item)
    },
    editRes (item) {
      this.$refs.resForm.init(item)
    },
    resetPassword (item) {
      if (item.auserId == void 0 || item.auserId == '') {
        return
      }
      http.resetPassword(item.auserId).then(res => {
        if (res && res.code === 0) {
          this.$Message.success('操作成功')
          // this.getList()
        }
      })
    },
    del (item) {
      let params = { auserIds: [item.auserId] }
      http.delAuser(params).then(res => {
        if (res && res.code === 0) {
          this.$Message.success('操作成功')
          this.getList()
        }
      })
    },
    delList () {
      let data = this.getUserData()
      let params = { auserIds: data }
      if (data.length == 0) {
        this.$Message.info('先勾选需要删除的数据')
        return
      }
      this.$Modal.confirm({
        title: '请再次确认',
        content: `<p>确定要删除 ${data.length} 条数据吗？</p>`,
        onOk: () => {
          this.spinShow = true
          http.delAuser(params).then(res => {
            this.spinShow = false
            if (res && res.code === 0) {
              this.$Message.success('操作成功')
              this.getList()
              this.userSelData = []
            }
          })
        }
      })
    },
    setUserType () {
      if (this.$store.state.user.userType == 'ADMIN') {
        this.isAdmin = true
      }
    },

    getUserData () {
      let data = []
      for (let item of this.userSelData) {
        data.push(item.auserId)
      }
      return data
    },
    getOption () {
      http.channelsServiceOrSubList().then(res => {
        if (res.code === 0) {
          this.option.publicId = res.data
        }
      })
      this.getProvinceList()
    },

    tableChange (select) {
      this.userSelData = select
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
    changeAddress (val) {
      console.log(val)
      this.form.provinceId = val[0] || ''
      this.form.cityId = val[1] || ''
      this.form.regionId = val[2] || ''
    },
    setOptionTag (data) {
      console.log('setOptionTag', data)

      this.option.tagIds = data
      this.$refs.selTagList.init(this.option.tagIds)
    },
    openSelTag () {
      this.$refs.getTagForm.init('AUSER', false, 'yuangong')
    },
    SetVIP (item) {
      this.$Spin.show()
      http
        .getUserBindState(item.phone)
        .then(res => {
          if (res.code === 0) {
            this.$refs.SetVip.showModal(res.data)
          }
        })
        .finally(_ => {
          this.$Spin.hide()
        })
    }
  },

  created () {
    this.search()
    this.getOption()
    this.$nextTick(() => {
      // this.$refs.modelForm.init();
    })
  },
  mounted () {
    this.setUserType()
  },
  computed: {
    ...mapState(['dict'])
  },
  data () {
    return {
      spinShow: false,
      formAddress: [],
      isAdmin: false,
      form: {
        name: '',
        phone: '',
        bindingState: '',

        provinceId: '',
        cityId: '',
        regionId: '',
        publicId: '',
        tagId: ''
      },
      page: {
        total: 1,
        current: 1,
        pageSize: 20
      },
      list: {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center',
            fixed: 'left'
          },

          {
            title: '员工名称',
            minWidth: 120,
            key: 'name'
          },
          {
            title: '手机号码',
            minWidth: 160,
            key: 'phone'
          },

          {
            title: '年龄',
            key: 'age',
            minWidth: 80
          },
          {
            title: '性别',
            key: 'sexCn',
            minWidth: 140
          },
          {
            title: '身份标识',
            minWidth: 140,
            render: (h, params) => {
              return (
                <p>
                  {params.row.identitys.join(',')}
                </p>
              )
            }
          },
          {
            title: '所属渠道',
            // key: 'publicNames',
            minWidth: 140,
            render: (h, params) => {
              return (
                <div>
                  {params.row.publicNames.map(item => {
                    return <p>{item}</p>
                  })}
                </div>
              )
            }
          },
          {
            title: '所属地区',
            key: 'areaAddress',
            minWidth: 240
          },
          {
            title: '绑定状态',
            key: 'bindingStateCn',
            minWidth: 140
          },
          {
            title: '组织关系',
            minWidth: 120,
            render: (h, { row }) => {
              let arr = []
              for (let item of row.tagNames) {
                arr.push(
                  h(
                    'Tag',
                    {
                      props: {
                        color: 'success'
                      }
                    },
                    item
                  )
                )
              }
              // return h('div',txt);
              return h(
                'span',
                // {class:'ivu-tooltip-rel'},
                arr
              )
            }
          },

          {
            title: '操作',
            width: 320,
            fixed: 'right',
            align: 'center',
            renderHeader: (h, { column, index }) => {
              if (this.isAdmin) {
                column.width = 320
              } else {
                column.width = 80
              }
              return h('span', '操作')
            },
            render: (h, { row }) => {
              let editTxt = this.isAdmin ? '编辑' : '查看'
              // let editTxt='编辑'
              const buttonArr = []
              if (row.bindingState == 'UNBOUND' && this.isAdmin) {
                buttonArr.push(
                  h(
                    'Button',
                    {
                      props: {
                        size: 'small',
                        type: 'text'
                      },
                      style: {
                        color: '#348eed'
                      },
                      on: {
                        click: () => {
                          this.openDetail(row)
                        }
                      }
                    },
                    '绑定'
                  )
                )
              }
              if (!row.identity && this.isAdmin) {
                buttonArr.push(
                  h(
                    'Button',
                    {
                      props: {
                        size: 'small',
                        type: 'text'
                      },
                      style: {
                        color: '#348eed'
                      },
                      on: {
                        click: () => {
                          this.SetVIP(row)
                        }
                      }
                    },
                    '一键成为会员'
                  )
                )
              }

              buttonArr.push(
                h(
                  'Button',
                  {
                    props: {
                      size: 'small',
                      type: 'text'
                    },
                    style: {
                      color: '#348eed'
                    },
                    on: {
                      click: () => {
                        this.edit(row)
                      }
                    }
                  },
                  editTxt
                )
              )

              if (this.isAdmin) {
                buttonArr.push(
                  h(
                    'Poptip',
                    {
                      props: {
                        confirm: true,
                        transfer: true,
                        title: `确认要重置 ${row.name} 的密码么?`
                      },
                      on: {
                        'on-ok': () => {
                          this.resetPassword(row)
                        }
                      }
                    },
                    [
                      h(
                        'Button',
                        {
                          props: {
                            size: 'small',
                            type: 'text'
                          },
                          style: {
                            color: '#348eed'
                          }
                        },
                        '重置密码'
                      )
                    ]
                  )
                )

                buttonArr.push(
                  h(
                    'Button',
                    {
                      props: {
                        size: 'small',
                        type: 'text'
                      },
                      style: {
                        color: '#348eed'
                      },
                      on: {
                        click: () => {
                          this.editRes(row)
                        }
                      }
                    },
                    '配置权限'
                  )
                )

                buttonArr.push(
                  h(
                    'Poptip',
                    {
                      props: {
                        confirm: true,
                        transfer: true,
                        title: `确认要删除${row.name}么?`
                      },
                      on: {
                        'on-ok': () => {
                          this.del(row)
                        }
                      }
                    },
                    [
                      h(
                        'Button',
                        {
                          props: {
                            size: 'small',
                            type: 'text'
                          },
                          style: {
                            color: 'red'
                          }
                        },
                        '删除'
                      )
                    ]
                  )
                )
              }

              return h('div', buttonArr)
            }
          }
        ],
        data: []
      },
      option: {
        publicId: [],
        address: [],
        tagIds: []
      },
      userSelData: []
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
