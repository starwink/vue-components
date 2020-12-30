<style lang="less" scoped>
</style>

<template>
    <div class="admin-page">
        <Card class="search_where">
            <Form :model="form" ref="searchForm" :label-width="100" @submit.native.prevent>
                <Row :gutter="32">
                    <Col span="8">
                    <FormItem label="字典名称：" :label-width="100">
                        <Input search v-model="form.dictName" maxlength="50" enter-button="搜索" placeholder="关键字" @on-search="search" />
                    </FormItem>
                    </Col>

                    <Col span="16" class="rigth-button">
                    <Button style="margin-left: 10px;" @click="reset">重置</Button>
                    <!-- <Button type="primary" style="margin-left: 10px;" @click="search">搜索</Button> -->
                    </Col>

                </Row>
            </Form>
        </Card>
        <div class="other-button-box">
            <Button type="error" style="margin-left: 10px;" @click=reload>刷新字典</Button>
            <Button type="primary" style="margin-left: 10px;" @click=add>新增</Button>
        </div>
        <Card>
            <div class="table-box">
                <Table stripe :columns="list.columns" :data="list.data" width="calc(100% - 16px)"></Table>
            </div>
            <div class="page-box">
                <Row>
                    <Col span="24">
                    <Page :total="page.total" :current="page.current" :page-size="page.pageSize" @on-change="changePageCurrent" @on-page-size-change="changeSizeCurrent" show-elevator show-sizer />
                    </Col>
                </Row>
            </div>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
        <modelForm ref="modelForm" @success="getList"></modelForm>
        <itemList ref="itemList" @success="getList"></itemList>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import http from '@/api/shuxi-dict.js'
// import axios from '@/api/demo-axios'
import form from './components/form'
import itemList from './components/itemList'
// import axios from 'axios'

export default {
  components: {
    'modelForm': form,
    'itemList': itemList
  },
  watch: {

  },
  methods: {
    init () {
      console.log('init')
      //    axios.get('/json/1',{baseURL:'http://127.0.0.1:7001'}).then(res=>{
      //        console.log(res)
      //    })
      // var instance = axios.create({
      //     baseURL: 'http://127.0.0.1:7001',
      //     timeout: 1000,
      //     // headers: {'X-Custom-Header': 'foobar'}
      // });
      // instance.get('/json/1').then(res=>{
      //     console.log(res)
      // })

      let data = { name: '12321' }
      // instance.post('/1',data, {
      //     baseURL: '/json',
      //     timeout: 5000,
      //     params:{id:1},

      // });
      console.log('list axios', axios)
      // axios.list({id:1})
      // axios.pushData({id:1}).then(res=>{
      //     console.log('true',res)
      // },err=>{
      //     console.log('err',err)
      // })
      // setTimeout(function(){
      //     console.log(222);
      //     instance.get('/1',{
      //         baseURL: '/json',
      //         params:{id:1},

      //     })
      // },5000)
    },
    reset () {
      let redata = this.$options.data()
      Object.assign(this.$data.form, redata.form)
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
      let params = { ...this.form, ...{ current: this.page.current, size: this.page.pageSize } }
      http.list(params).then(res => {
        this.spinShow = false
        this.list.data = res.data
        this.page.total = res.total
      })
    },

    // 新增产品型号
    add () {
      this.$refs.modelForm.init()
    },

    edit (item) {
      this.$refs.modelForm.edit(item)
    },
    editItem (item) {
      this.$refs.itemList.init(item)
    },
    reload () {
      http.dictReload().then(res => {
        if (res && res.code === 0) {
          this.$Message.success('操作成功,请重新登录')
          this.getList()
          this.userSelData = []
        }
      })
    },
    down (id) {
      let a = document.createElement('a')
      a.href = http.downItem(id)
      a.click()
    }

  },
  computed: {
    ...mapState(['dict'])
  },
  created () {
    this.search()
    this.init()
  },
  data () {
    return {
      spinShow: false,
      form: {
        dictName: ''
      },
      page: {
        total: 1,
        current: 1,
        pageSize: 20
      },
      list: {
        columns: [
          {
            title: '字典名称',
            minWidth: 120,
            key: 'dictName'
          },
          {
            title: '编码',
            minWidth: 100,
            key: 'dictCode'
          },
          {
            title: '字典项描述',
            minWidth: 120,
            key: 'dictDesc'
          },
          {
            title: '正在使用选项',
            minWidth: 160,
            ellipsis: true,
            tooltip: true,
            key: 'dictItems'
          },
          {
            title: '规则描述',
            minWidth: 140,
            key: 'ruleDesc'
          },

          {
            title: '操作',
            width: 160,
            fixed: 'right',
            render: (h, { row, index }) => {
              const buttonArr = [

                h('Button', {
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
                }, '编辑'),
                h('Button', {
                  props: {
                    size: 'small',
                    type: 'text'
                  },
                  style: {
                    color: '#348eed'
                  },
                  on: {
                    click: () => {
                      this.editItem(row)
                    }
                  }
                }, '编辑选项'),
                h('Button', {
                  props: {
                    size: 'small',
                    type: 'text'
                  },
                  style: {
                    color: '#348eed'
                  },
                  on: {
                    click: () => {
                      this.down(row.dictId)
                    }
                  }
                }, '下载')
              ]

              return h('div', buttonArr)
            }
          }

        ],
        data: []
      },
      imgList: []

    }
  }
}
</script>

<style>
</style>
