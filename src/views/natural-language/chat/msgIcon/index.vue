<template>
    <span>
        <chatLoading v-show="icon=='loading'" />
        <chatError v-show="icon=='error'" />
    </span>
</template>
<script>
import chatLoading from './loading'
import chatError from './error'
export default {
    props:{
        icon:{
            type:String,
            default:''
        }
    },
    components:{
        chatLoading,chatError
    },
    data(){
        return {

        }
    }
}
</script>