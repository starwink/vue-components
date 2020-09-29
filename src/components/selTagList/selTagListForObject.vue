<template>
    <div>
        <div class="userSel">
            <Tag type="border" :closable="!disabled" color="primary" v-for="(item,index) in data" :key="'user-sel-tag-for-object'+item[label]"  @on-close="handleClose(index)">
                <Icon v-show="isEdit" @click.stop="clickTag(item)" class="edit-icon" type="md-construct" />
                {{item[label]}}
            </Tag>
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
        label:{
            type:String,
            default:'label',
        },
        isEdit:{
            type:Boolean,
            defalut:false
        }
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
