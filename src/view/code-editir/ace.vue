<template>
    <div>
        <h5>meff</h5>
        <div class='code-editir CodeMirror-hints'>
            <Modal v-model="show">
            <codemirror v-model="form.code" @init="editorInit" lang="html" theme="chrome" width="500" height="100"></codemirror>
            </Modal>
            <!-- <Button @click="initEditir()">initEditir</Button> -->
        </div>
        <Button @click="showModal">show</Button>
        <Button @click="test">test</Button>
    </div>
</template>
<script>
import codemirror from 'vue2-ace-editor'

export default {
    components:{
        codemirror
    },
    data() {
        return {
            codeEditir: '',
            show: false,
            form: {
                code: ''
            }
        }
    },
    created() {
        // this.$nextTick(() => {
        //   this.initEditir()
        // })
    },
    methods: {
        editorInit: function (editor) {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')                
            require('brace/mode/javascript')    //language
            require('brace/mode/less')
            require('brace/theme/chrome')
            require('brace/theme/xcode')
            require('brace/snippets/javascript') //snippet
            // console.log('editor',editor)
        },
        initEditir() {
           
        },
        getTablesData() {

        },
        showModal() {
            this.show = !this.show
            this.initEditir();
        },
        test(){
            console.log(this.form.code)
        }

    }

}
</script>
<style lang="scss">
</style
