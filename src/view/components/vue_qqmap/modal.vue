<template>
    <Modal
        v-model="show"
		fullscreen
    >
        <qqMap ref="qqMap" :mapcenter="centerLatLng" :oldmarker="oldMarker" @mapclick="pointChange"></qqMap>
        <div slot="footer">
			<Button @click.stop="close">关闭</Button>
			<Button type="primary" @click.stop="save">确定</Button>
		</div>
    </Modal>
</template>
<script>
import qqMap from '@/view/components/vue_qqmap/selectPoint.vue'

export default {
    components: {
        'qqMap':qqMap,
    },
    data(){
        return {
            show:false,
            centerLatLng: '34.774613795964946,113.60309600830078',
            // oldMarker: '34.79181436843145,113.63571166992188',
            oldMarker: '',
        }
    },
    methods:{
        init(){
            this.show=true;
        },
        close(){
            this.show=false;
        },
        save(){
            let point=this.getLatlngCurrent();
            console.log('data',point)
            if(point){
                this.$emit('success',point);
                this.close();
            }
        },
        pointChange(ev){
            console.log('捕获到点击坐标', ev)
        },
        getLatlngCurrent(){
            return this.$refs.qqMap.getLatlngCurrent();
        }
    }
}
</script>