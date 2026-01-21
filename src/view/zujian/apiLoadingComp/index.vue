<template>
    <div class="s">
        <h4>123</h4>
        <Button @click="showDynamicComponent">+++</Button>
        <component :is="dynamicComponent" ref="dynamicRef"/>
        <Button @click="add">++222+</Button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dynamicComponent: null,
            i:0,
        }
    },
    methods: {
        init(){
            console.log(1)
        },
        showDynamicComponent() {
            import('@/view/zujian/apiLoadingComp/1.vue').then(res=>{
                console.log('hhh',res)
                // this.dynamicComponent = res.default._
                this.dynamicComponent = res.default
            })
        },
        add(){
            this.i++;
            console.log('loading',this.i);
            import('@/view/zujian/apiLoadingComp/'+this.i+'.vue').then(res=>{
                console.log('hhh',res)
                // this.dynamicComponent = res.default._
                this.dynamicComponent = res.default
            })
        }
    },
    created() {
        this.init();
    },
}
</script>