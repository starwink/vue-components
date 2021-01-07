<template>
    <div>
        <D2highLight :code="data"></D2highLight>
    </div>
</template>
<script>
import UaParser from 'ua-parser-js'
import utilLog from '@/libs/util.log.js'
import D2highLight from '@/components/d2-highlight'

export default {
    components:{
        D2highLight,
    },
    data(){
        return {
            data:''
        }
    },
    methods: {
        init(){
            this.data=JSON.stringify(new UaParser().getResult(), null, 2)
            utilLog.focus(this.data,'浏览器信息')
        }
    },
    mounted(){
        this.init();
    }
}

</script>
<style lang="scss" scoped>

</style>

