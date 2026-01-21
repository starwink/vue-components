<template>
    <div>
        <h4>生命周期</h4>
        <Button @click="chnageComponent">chnageComponent</Button>
       
        <component :is="ComponentName1" text="demo4" :id="1" />
        <!-- 缓存组件 -->
        <keep-alive>
            <component :is="ComponentName2" text="demo3" :id="1" />
        </keep-alive>

    </div>
</template>
<script>
import Vue from 'vue'
import textComp from './lifeCycleComponents/demo'
import textCompForm from './lifeCycleComponents/demoform'
export default {
    components:{
        // textComp
    },
    data(){
        
        return {
            ComponentName1:'',
            ComponentName2:'',
        }
    },
    methods:{
        chnageComponent(){
            // const Profile = Vue.extend(textComp)
            // const comp1 = new Profile()
            // console.log('cmp1',comp1)
            this.ComponentName1=this.ComponentName1==''?textCompForm:'';
            this.ComponentName2=this.ComponentName2==''?textCompForm:'';
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
