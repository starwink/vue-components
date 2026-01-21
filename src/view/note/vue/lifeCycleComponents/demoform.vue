<template>
    <div>
        <h4>{{text}} components</h4>
        <Input v-model="val" />
    </div>
</template>
<script>
export default {
    props:{
        text:'',
        id:'',
    },
    data(){
        return {
            title:'vue 生命周期 示例',
            val:'test',
        }
    },

    beforeCreate(){
        // console.log('beforeCreate components' + this.text)
        console.log('beforeCreate components') //这里使用text存在异常,应该是这步的时候还没有获取到props中的值
    },
    created(){
        //实例创建完直接调用
        // 一般在这里使用调用后端接口 只在最初一条调用
        console.log('created components'+ this.text)
        // console.log('created components')
    },
    beforeMount(){
        console.log('beforeMount components'+ this.text)
    },
    mounted(){
        //初始化页面渲染完成,但不一定包含子组件
        //通常是为  metheds ,data 提前定义 
        //props 中的数据 分绑赋值 data
        // 一般在这里使用调用后端接口 切换显示时会重复调用后端接口
        console.log('mounted components'+ this.text)
        if(this.id){
            this.val='321312';
        }

    },
    beforeDestroy(){
        console.log('beforeDestroy components'+ this.text)
        //销毁前 
    },
    destroyed(){
        console.log('destroyed components'+ this.text)
        //销毁
    }
}
</script>
