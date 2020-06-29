<template>
    <div>
        <Card>
            <p slot="title">常规</p>
            <imgList ref="imgList" :value="img" @success="setTag"></imgList>
        </Card>

        <Card>
            <p slot="title">使用slot</p>
            <imgList ref="imgList" :value="img" @success="setTag">
                <li slot="default" v-for="(item,index) in img" :key="item.url + index" >
                    <img :src="item.url" preview>
                </li>
            </imgList>
        </Card>
    </div>
</template>
<script>
import imgList from '@/view/components/img-list/img-list.vue'
import json from './json.js';
export default {
    components: {
        'imgList': imgList,
    },
    methods: {
        setTag(e) {
            this.img = JSON.stringify(e);
        },
        openNodeForm() {
            this.$refs.getNodeForm.init();
        },
    },
    computed:{
       
    },
    created(){
        console.log(json.data);
        this.img=json.data
    },
    data(){
        return {
            img:[]
        }
    }
}
</script>