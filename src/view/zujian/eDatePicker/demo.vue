<template>
    <div class="json-editor">
        <myCompTemp ref="myCompTemp" v-model="form.value"   @change="setValue" />
        <div>
            <p>form.value:</p>
            <p>{{ form.value }}</p>
            <!-- <p><Input v-model.trim="json" /></p> -->
        </div>
        <Button @click="test">test</Button>
    </div>
</template>
<script>

import myCompTemp from './index.vue'
const dayjs = require('dayjs')
export default {
  components: {
    myCompTemp
  },

  data () {
    return {
      form: {
        value: []
      }
    }
  },
  methods: {
    init (json) {
      Object.assign(this.$data, this.$options.data())
      // this.json = json
    },

    save () {
      console.log(this.form, JSON.stringify(this.form))
    },
    setValue (val) {
      console.log('setValue', val)
    },
    test () {
      let start = dayjs().subtract(6, 'day').format('YYYY-MM-DD')
      let end = dayjs().format('YYYY-MM-DD')
      this.form.value = [start, end]
    }

  },
  mounted () {
  }
}
</script>
