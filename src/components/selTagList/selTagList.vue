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
        tagArray:{
            type:Array,
            default:[],
        },
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
        // init(data) {
        //     this.data = data;
        // },
        handleClose(index) {
            this.data.splice(index, 1)
        },
       
    },
    computed: {
    },
    mounted(){
        this.data=this.tagArray;
    },
    watch: {
        tagArray:function(v){
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
