<template>
    <div>
        <qqMap ref="qqMap" @success="setMapPoint"></qqMap>
        <Button @click="open" >sss</Button>
        <uploadImg  ></uploadImg>
    </div>
</template>
<script>
import uploadImg from './components/h-upload-img.vue'
import qqMap from '@/view/components/vue_qqmap/modal.vue'

export default {
    components: {
        'uploadImg':uploadImg,
        'qqMap':qqMap,
    },
    data(){
        return {
            centerLatLng: '34.774613795964946,113.60309600830078',
            // oldMarker: '34.79181436843145,113.63571166992188',
            oldMarker: '',
        }
    },
    methods:{
        setImg(data){
            console.log('setImg',data);
        },
        open(){
            this.$refs.qqMap.init();
        },
        pointChange(ev){
            console.log('捕获到点击坐标', ev)
        },
        setMapPoint(data){
            console.log('save',data)
        }
    }
}
</script>