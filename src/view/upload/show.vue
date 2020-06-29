<template>
    <div id="componets-imgshow">
        <imgList ref="imgList" :value="img"
        class="imglist"
            style=""
            perfix='https://zxzd.oss-cn-hangzhou.aliyuncs.com/' 
            :options="{url:'src'}"
            crop="!sx-wz-img.jpg"
        ></imgList>
        <uploadImg class="uploadImg" @success="successImg"></uploadImg>
        
    </div>
</template>
<style lang="scss" >
#componets-imgshow{
    .imglist{
    display: inline-block;
}
.uploadImg{
    display: inline-block;
    width: 115px;
    margin-bottom: 5px;
    
}
.img-upload{
    .ivu-upload{
        height: 115px;
    }
}
}

</style>
<script>
import uploadImg from '@/view/components/upload/upload-img.vue'
import imgList from '@/view/components/img-list/img-list.vue'

export default {
    components: {
        'imgList':imgList,
        'uploadImg':uploadImg,
    },
    data(){
        return {
            img:[
                {src:'shuxi-master-image/2020/4/2/13/0f18c4ff-8e9b-419b-be79-01326122aabd.jpg'}
            ],
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
            this.img.push(data);
            // console.log(data)
        }
    }
}
</script>