<template>
    <div>
        <jsxCom text="he jsx" />
    </div>
</template>
<script>
import jsxCom from './js'
export default {
    name: 'note',
    components:{
        jsxCom
    },
    props: [
    'text',
    ],
  render(h) {
      return h('Tag',this.text);
  }
}
</script>