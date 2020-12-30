<template>
    <div>
        <h3>pythone</h3>
        <img :src="form.img" />
    </div>
</template>
<script>
import { rule } from './rule.js'
export default {
  data () {
    return {
      form: {
        img: ''
      }
    }
  },
  methods: {
    init () {
      this.$api.pythonV1().then(res => {
        console.log(res)
        if (res.code == 200) {
          this.form.img = res.data.img_detected
          console.log(JSON.stringify(res.data.raw_out))
          let params = rule.sq_rule(JSON.stringify(res.data.raw_out))
          console.log(params)
        }
      })
    },
    // 申请表
    'AllowProjectType': [
      {
        'dictKey': 'HIGH_PRESSURE',
        'dictSort': 1,
        'dictValue': '高压',
        'enabled': true
      },
      {
        'dictKey': 'LOW_PRESSURE',
        'dictSort': 2,
        'dictValue': '低压',
        'enabled': true
      },
      {
        'dictKey': 'CABLE',
        'dictSort': 3,
        'dictValue': '电缆',
        'enabled': true
      },
      {
        'dictKey': 'HIGH_TRY',
        'dictSort': 4,
        'dictValue': '高试',
        'enabled': true
      },
      {
        'dictKey': 'RELAY_PROTECTION',
        'dictSort': 5,
        'dictValue': '继保',
        'enabled': true
      },
      {
        'dictKey': 'OTHER',
        'dictSort': 6,
        'dictValue': '其它',
        'enabled': true
      }
    ]

  },
  created () {
    this.init()
  }
}
</script>
