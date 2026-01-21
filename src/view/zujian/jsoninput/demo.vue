<template>
    <div class="json-editor">
        <jsonInput ref="jsonInput" @change="setJson" />
        <div>
            <p>json:</p>
            <p>{{ json }}</p>
            <!-- <p><Input v-model.trim="json" /></p> -->
        </div>
        <Button @click="save">save</Button>
    </div>
</template>
<script>

import jsonInput from '@/view/zujian/jsoninput/index.vue'
export default {
  components: {
    jsonInput
  },

  data () {
    return {
      json: {
        age: 187
      }
    }
  },
  methods: {
    init (json) {
      Object.assign(this.$data, this.$options.data())
      this.json = json
      this.$refs.jsonInput.init(json)
      this.show = true
    },

    save () {
      console.log(this.json, JSON.stringify(this.json))
    },
    setJson (json) {
      console.log('setJson', json)
      this.json = json
    }

  },
  mounted () {
    this.init(this.json)
  }
}
</script>
<style lang="scss" scoped>
$main-color: rgb(81, 90, 110);

.json-editor {
    ::v-deep .jsoneditor-menu {
        background-color: $main-color;
        border-bottom: 1px solid $main-color;
    }

    ::v-deep .jsoneditor {
        border: none;
    }
}
</style>
