<template>
    <div ref="d3div"></div>
</template>
<style lang="scss" scoped>
</style>
<script>
const dayjs = require('dayjs')
export default {
    data() {
        return {
            tableData: [99, 71, 78, 25, 36, 92]
        }
    },
    methods: {
        init() {
            this.$api.test().then(res=>{
                console.log('res,,',res);
            })
        },
        demo(){
            // console.log('tt',this.isVieDate('2044-12-24'));
        },
        isVieDate(date){
            if(dayjs('2200-01-01').isAfter(dayjs(date)) && dayjs('1900-01-01').isBefore(dayjs(date))){
                return true;
            }else{
                return false;
            }
        }
    },
    mounted() {
        this.init();
        this.demo();
    },
}
</script>