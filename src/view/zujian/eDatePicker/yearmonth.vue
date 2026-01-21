
<template>
    <!-- 国家端用最小维度为月的时间框 -->
    <date-picker prefix-class="ewell" type="month" :append-to-body="appendToBody" ref="ewell-date-picker" :open="show.panel" v-model="date" value-type="format" format="YYYY-MM-DD" range @focus="showPanel" @close="hidePanel" v-bind="$attrs"  @change="changeEndDate">
        <template v-slot:icon-calendar>
            <i class="el-icon-date " @click="show.panel=true"></i>
        </template>
        <template v-slot:sidebar="{ emit }">
            <div>
                <div class="date-area" v-for="item of option.date" @click="activeName=item.name">
                    <div :class="activeName==item.name?'active':''" class="date-group">
                        <i :class="activeName==item.name?'el-icon-caret-bottom':'el-icon-caret-right'"></i>
                        <span>{{item.title}}</span>
                    </div>
                    <transition :name="activeName==item.name?'el-zoom-in-top':''">
                        <div class="item" v-show="activeName==item.name">
                            <p v-for="i of item.children" @click="setSectionDate(i.name)">
                                {{i.title}}
                            </p>
                        </div>
                    </transition>

                </div>
            </div>
            <!-- <el-collapse v-model="activeName" accordion class="test">
                <el-collapse-item v-for="item of option.date" :title="item.title" :name="item.name">
                    <p v-for="i of item.children" @click="setSectionDate(i.name)" :title="i.title">{{i.title}}</p>
                </el-collapse-item>
            </el-collapse> -->
        </template>
    </date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import './datepicker.scss'
import 'vue2-datepicker/locale/zh-cn'
import dataRecordingVue from '../../views/data-manage/data-recording.vue'

const dayjs = require('dayjs')
export default {

  name: 'ewellDateRange',
  components: {
    DatePicker
  },
  computed: {
    selectDateText () {
      let val = this.$refs['ewell-date-picker'] ? this.$refs['ewell-date-picker'].currentValue : [null, null]
      let text = ''
      if (val && val[0] != null && val[1] != null) {
        text = `${val[0]} 至 ${val[1]}`
      }
      return text
    },
    dateOption () {

    }
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    appendToBody: { // 修正样式zindex层级问题
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (val) {
      this.date = this.value
    }
    /*  date(val) {
             this.$emit('input', val);
             this.$emit('change', val)
         } */
  },
  mounted () {
    this.date = this.value
  },
  data () {
    let option = [

      {
        title: '按月',
        name: 'month',
        children: [
          { title: '本月', name: 'month' },
          { title: '上月', name: 'lastmonth' }
        ]
      },
      {
        title: '按季度',
        name: 'quarter',
        children: [
          { title: `第1季度`, name: 0 },
          { title: '第2季度', name: 1 },
          { title: '第3季度', name: 2 },
          { title: '第4季度', name: 3 },
          { title: `第1季度`, name: -4 },
          { title: '第2季度', name: -3 },
          { title: '第3季度', name: -2 },
          { title: '第4季度', name: -1 }
        ]
      },
      {
        title: '按年',
        name: 'year',
        children: [
          { title: '本年', name: 'year' },
          { title: '去年', name: 'lastyear' },
          { title: '前年', name: 'beforelastyear' }
        ]
      }
    ]
    let quarterOption = option.find(res => {
      return res.name == 'quarter'
    })
    let thisYear = dayjs().startOf('year').format('YYYY')
    let lastYear = dayjs().add(-1, 'year').startOf('year').format('YYYY')
    quarterOption.children.map(res => {
      if (res.name > -1) {
        res.title = `${thisYear}年${res.title}`
      } else {
        res.title = `${lastYear}年${res.title}`
      }
    })

    return {
      date: [],
      activeName: 'month',
      show: {
        panel: false
      },
      option: {
        date: option
      }
    }
  },
  methods: {
    setSectionDate (name) {
      console.log('setSectionDate', name)
      let val = [null, null]
      let start = dayjs().format('YYYY-MM-DD')
      let end = dayjs().format('YYYY-MM-DD')
      switch (name) {
        case 'all':
          val = [null, null]
          break
        case 'today':
          start = dayjs().format('YYYY-MM-DD')
          end = dayjs().format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'lastday':
          start = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
          end = dayjs().subtract(1, 'day').format('YYYY-MM-DD')
          val = [start, end]
          break
        case '7day':
          start = dayjs().subtract(6, 'day').format('YYYY-MM-DD')
          end = dayjs().format('YYYY-MM-DD')
          val = [start, end]
          break
        case '30day':
          start = dayjs().subtract(29, 'day').format('YYYY-MM-DD')
          end = dayjs().format('YYYY-MM-DD')
          val = [start, end]
          break
        case '365day':
          start = dayjs().subtract(364, 'day').format('YYYY-MM-DD')
          end = dayjs().format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'week':
          start = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD')
          end = dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'lastweek':
          start = dayjs().add(-1, 'week').startOf('week').add(1, 'day').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'week').endOf('week').add(1, 'day').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'month':
          start = dayjs().startOf('month').format('YYYY-MM-DD')
          end = dayjs().endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'lastmonth':
          start = dayjs().add(-1, 'month').startOf('month').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'month').endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 0:
          start = dayjs().month(0).startOf('month').format('YYYY-MM-DD')
          end = dayjs().month(2).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 1:
          start = dayjs().month(3).startOf('month').format('YYYY-MM-DD')
          end = dayjs().month(5).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 2:
          start = dayjs().month(6).startOf('month').format('YYYY-MM-DD')
          end = dayjs().month(8).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 3:
          start = dayjs().month(9).startOf('month').format('YYYY-MM-DD')
          end = dayjs().month(11).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case -4:
          start = dayjs().add(-1, 'year').month(0).startOf('month').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'year').month(2).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case -3:
          start = dayjs().add(-1, 'year').month(3).startOf('month').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'year').month(5).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case -2:
          start = dayjs().add(-1, 'year').month(6).startOf('month').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'year').month(8).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case -1:
          start = dayjs().add(-1, 'year').month(9).startOf('month').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'year').month(11).endOf('month').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'year':
          start = dayjs().startOf('year').format('YYYY-MM-DD')
          end = dayjs().endOf('year').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'lastyear':
          start = dayjs().add(-1, 'year').startOf('year').format('YYYY-MM-DD')
          end = dayjs().add(-1, 'year').endOf('year').format('YYYY-MM-DD')
          val = [start, end]
          break
        case 'beforelastyear':
          start = dayjs().add(-2, 'year').startOf('year').format('YYYY-MM-DD')
          end = dayjs().add(-2, 'year').endOf('year').format('YYYY-MM-DD')
          val = [start, end]
          break
      };

      console.log(val)
      this.date = val
      this.show.panel = false
      this.$emit('input', val)
      // this.$refs["ewell-date-picker"].focus();
    },

    showPanel () {
      this.show.panel = true
    },
    hidePanel () {
      let that = this
      setTimeout(() => {
        that.show.panel = false
      }, 100)
    },
    changeEndDate (dateRange) {
      let date = []
      if (dateRange[0] && dateRange[1]) {
        date = [
          dateRange[0],
          dayjs(dateRange[1]).endOf('month').format('YYYY-MM-DD')
        ]
      }
      console.log('changeEndDate', date, this.date)
      this.date = date
      this.$emit('input', date)
      this.$emit('change', date)
      console.log(date, 'chagne')
    }
  }
}
</script>
