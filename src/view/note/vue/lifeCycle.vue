<template>
    <div>
        <h4>生命周期</h4>
        <Button @click="show=!show">show</Button>
        <Button @click="chnageComponent">chnageComponent</Button>
        <textComp v-show="show" text="demo1"></textComp>
        <textComp  v-show="!show" text="demo2"></textComp>
        <component :is="ComponentName" text="demo3" />

    </div>
</template>
<script>
import textComp from './lifeCycleComponents/demo'
export default {
    components:{
        textComp
    },
    data(){
        return {
            title:'vue 生命周期 示例',
            show:false,
            ComponentName:'',
        }
    },
    methods:{
        chnageComponent(){
            this.ComponentName=this.ComponentName==''?'textComp':'';
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        //实例创建完直接调用
        // 一般在这里使用调用后端接口 只在最初一条调用
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        //初始化页面渲染完成,但不一定包含子组件
        //通常是为  metheds ,data 提前定义 
        //props 中的数据 分绑赋值 data
        // 一般在这里使用调用后端接口 切换显示时会重复调用后端接口
        console.log('mounted')

    },
    beforeDestroy(){
        console.log('beforeDestroy')
        //销毁前 
    },
    destroyed(){
        console.log('destroyed')
        //销毁
    }
}
</script>
