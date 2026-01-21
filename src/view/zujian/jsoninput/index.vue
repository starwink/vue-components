<template>
    <div class="json-editor">
        <div ref="jsoneditor" class="jsoneditor-box" />
    </div>
</template>
<script>

import jsoneditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
export default {
  data () {
    return {
      json: {},
      jsonEditor: {},
      editorConfig: {
        style: { height: '400px' }
      }
    }
  },
  methods: {
    init (json) {
      this.json = JSON.parse(JSON.stringify(json)) || {}
      this.$nextTick(() => {
        this.initJsonEditor()
        // this.jsonEditor.set(val);
      })
    },
    initJsonEditor () {
      // let container = document.getElementById('jsoneditor')
      let container = this.$refs.jsoneditor
      container.innerHTML = ''
      let options = {
        mode: 'text',
        indentation: 2,
        // mainMenuBar:false,
        enableSort: false, // 排序
        enableTransform: false, // 查询筛选
        search: false,
        onChange: this.changeJson
      }
      this.jsonEditor = new jsoneditor(container, options)
      // this.jsonEditor.set(this.value)
      if (this.json) {
        this.jsonEditor.set(this.json)
      }
    },
    changeJson (e) {
      this.json = this.jsonEditor.get()
      // this.$emit('input',this.json);
      this.$emit('change', this.json)
      // console.log('c changeJson', e, this.jsonEditor.get())
    },
    getText () {
      return this.jsonEditor.getText()
    },
    getJson () {
      return this.json
    },
    set (json) {
      this.json = json
      this.jsonEditor.set(json)
    }
  }
  // created() {
  //     this.init()
  // },
}
</script>
<style lang="scss" scoped>
$main-color: #13939E;

.json-editor {
    ::v-deep .jsoneditor-menu {
        background-color: $main-color;
        border-bottom: 1px solid $main-color;
    }

    ::v-deep .jsoneditor {
        border: none;
    }
    .jsoneditor-box{
        // height: 349px;
    }
}
</style>
