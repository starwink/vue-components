<template>
    <div>
        <uploadImg @success="successImg"></uploadImg>
        
    </div>
</template>
<script>
import uploadImg from '@/view/components/upload/upload-img.vue'

export default {
    components: {
        'uploadImg':uploadImg,
    },
    data(){
        return {
        }
    },
    methods:{
        setImg(data){
            console.log('setImg',data);
        },
        open(){
            this.$refs.qqMap.init();
        },
        successImg(data){
            console.log(data)
        }
    }
}
</script>