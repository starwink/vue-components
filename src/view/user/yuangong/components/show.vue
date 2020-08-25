<template>
	<Modal
        v-model="show"
        title="渠道绑定信息"
		:mask-closable="false"
		class-name="form"

    >

		<Form  ref="form"   :label-width="120">

            <Card dis-hover>
            <p slot="title">所属渠道:</p>
             <a href="#" slot="extra" @click.prevent="getList">
                <Icon type="ios-sync" />
                刷新绑定状态
            </a>
            <Row :gutter="16"><Col span="24">
                 <div class="table-box">
                    <Table  stripe :columns="list.columns" :data="list.data" width="calc(100% - 16px)" ></Table>
                </div>
            </Col>
            </Row>
        </Card>

		</Form>
		<div slot="footer">
			<Button  @click.stop="close">取消</Button>
		</div>
        <bingUser ref="bingUser"></bingUser>
        <Spin size="large" fix v-if="spinShow"></Spin>
	</Modal>
</template>
<script>
import http from '@/api/shuxi-master.js'
import { mapState } from 'vuex'
import bingUser from './bing-user'

export default {
  components: {
    bingUser
  },
  data () {
    return {
      show: false,
      spinShow: false,
      data: {},
      list: {
        columns: [

          {
            title: '渠道名称',
            minWidth: 120,
            key: 'publicName'
          },
          {
            title: '绑定状态',
            minWidth: 160,
            // key: 'bindingStateCn'
            render: (h, { row }) => {
              let color = '#19be6b'
              if (row.bindingState == 'UNBOUND') {
                color = 'red'
              }
              return h('span', {
                style: {
                  color: color
                }
              }, row.bindingStateCn)
            }

          },

          {
            title: '操作',
            width: 160,
            fixed: 'right',
            render: (h, { row }) => {
              const buttonArr = []
              if (row.bindingState == 'UNBOUND') {
                buttonArr.push(
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
                        this.parent.$refs.modelShow.bindUser(row)
                      }
                    }
                  }, '绑定'))
              }

              return h('div', buttonArr)
            }
          }
        ],
        data: []
      }

    }
  },
  methods: {

    init (data) {
      Object.assign(this.$data, this.$options.data())
      this.show = true
      this.data = data
      this.getList()
    },
    resetForm () {
      this.$refs.form.fields.forEach(function (e) {
        e.resetField()
      })
    },
    close () {
      this.show = false
    },

    success () {
      this.show = false
      this.$emit('success')
    },

    getList () {
      if (this.spinShow) {
        return
      }
      this.spinShow = true
      http.bindingAuser(this.data.auserId).then(res => {
        this.spinShow = false
        this.list.data = res.data
      })
    },
    bindUser (item) {
      this.$refs.bingUser.init(item)
    }

  },
  computed: {
    ...mapState(['dict'])
  },
  watch: {
    'show': function (val) {
      if (!val) {
        this.$emit('reset')
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
