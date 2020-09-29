<template>
    <Modal v-model="show" :title="title"  :mask-closable="false"  width="60">
        <div class="userSel">
            <Tag type="border" :closable="!disabled" color="primary" v-for="(item,index) in data" :key="'user-sel-tag-for-object'+item[label]"  @on-close="handleClose(index)"></Tag>
        </div>
    </Modal>

</template>
<script>
export default {
    name: 'selTagList',
    props:{
        
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
            console.log('ne',this.label)
            this.data = data;
        },
        handleClose(index) {
            this.data.splice(index, 1)
        },
        getSelData(){
            return this.data;
        },
        clickTag(data){
            if(!this.isEdit){ return ;}
            this.$emit('clickTag',data);
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
.edit-icon{
    font-size: 19px;
    margin-right: 4px;
    color:cornflowerblue;
    cursor: pointer;
}
</style>
