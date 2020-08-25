<template>
    <div>
        <h5>meff</h5>
        <div class='code-editir CodeMirror-hints'>
            <Modal v-model="show">
            <textarea id="code"></textarea>
            </Modal>
            <!-- <Button @click="initEditir()">initEditir</Button> -->
        </div>
        <Button @click="showModal">show</Button>
    </div>
</template>
<script>
import codemirror from 'codemirror'
// import 'codemirror/mode/javascript/javascript.js'
// import 'codemirror/theme/lucario.css'

import 'codemirror/mode/sql/sql.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/lesser-dark.css'

// import 'codemirror/addon/hint/show-hint.css'
import './show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/search/searchcursor'
export default {
  data () {
    return {
      codeEditir: '',
      show: true,
      form: {
        code: ''
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.initEditir()
    })
  },
  methods: {
    initEditir () {
      var editorEle = document.getElementById('code')
      var _this = this
      this.codeEditir = codemirror.fromTextArea(editorEle, {
        mode: 'text/x-sql',
        theme: 'lesser-dark',
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true,
        autofocus: true,
        autoRefresh: true, // 防左偏小 this.codeEditir.refresh()
        completeSingle: false,

        hint: codemirror.hint.sql,
        hintOptions: {
          tables: {
            // 't_test_login': ['col_a', 'col_B', 'col_C'],
            // 't_test_employee': ['other_columns1', 'other_columns2']
          }
          // this.codeEditir.setOption('hintOptions', data);//
        }

      })

      this.codeEditir.on('keyup', function (cm, event) {
        if (!cm.state.completionActive &&// 所有的字母和'$','{','.'在键按下之后都将触发自动完成
                    ((event.keyCode >= 65 && event.keyCode <= 90) ||
                        event.keyCode == 52 || event.keyCode == 219 ||
                        event.keyCode == 190)) {
          codemirror.commands.autocomplete(cm, null, {
            completeSingle: false
          })
        }
      })

      /* var _this=this;
            this.codeEditir.on("cursorActivity", function () {
                //获取用户当前的编辑器中的编写的代码
                var words = _this.codeEditir.getValue() + "";
                //利用正则取出用户输入的所有的英文的字母
                words = words.replace(/[a-z]+[\-|\']+[a-z]+/ig, '').match(/([a-z]+)/ig);
                //将获取到的用户的单词传入CodeMirror,并在javascript-hint中做匹配
                codemirror.ukeys = words;
                //调用显示提示
                _this.codeEditir.showHint();
            }); */

      // this.codeEditir.setValue('\n\n\n\n\n\n\n\n\n\n')
      this.codeEditir.setValue('')
      this.codeEditir.focus()
    },
    getTablesData () {

    },
    showModal () {
      this.show = !this.show
    }

  }

}
</script>
<style lang="scss">

</style
