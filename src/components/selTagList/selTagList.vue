<template>
    <div>
        <div class="userSel">
            <Tag type="border" :closable="!disabled" color="error" v-for="(item,index) in data" :key="'user-sel-tag'+item" @on-close="handleClose(index)">{{item}}</Tag>
        </div>
    </div>

</template>
<script>
export default {
    name: 'selTagList',
    props:{
        disabled: {
            type:Boolean,
            defalut:false
        },
    },
    components: {
    },
    
    data() {
        return {
            data: []
        }
    },
    methods: {
        init(data) {
            this.data = data;
        },
        handleClose(index) {
            this.data.splice(index, 1)
        },
        getSelData(){
            return this.data;
        }
       
    },
    computed: {
    },
   
    watch: {
        data:function(v){
            console.log('v',v)
        }
    }
}
</script>
<style lang="scss" scoped>
.userSel {
    min-width: 1px;
}
</style>
