<template>
    <div>
        <h3>3213</h3>
        <div id="container"></div>
    </div>
</template>
<script>
import G6 from '@antv/g6';
import g6DemoData from './json.js'
export default {
    data(){
        return {
            data:{},
            options:{}
        }
    },
    methods:{
        init(){
            console.log(g6DemoData);
            this.data=g6DemoData.data;
            this.options=g6DemoData.options;
            this.initChart();
        },
        initChart(){
            const graph = new G6.Graph(this.options);
            graph.data(this.data);
            graph.render();
            //    graph.render();
            graph.fitView();

            
        }
    },
    mounted(){
        this.init();
    }
}
</script>