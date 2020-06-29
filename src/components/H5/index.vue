<template>
    <div class="web-page">
        <router-view/>
    </div>
</template>
<script>

// import http from '@/api/fudu.moju.js'
// import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        // ...mapMutations([
        //     'setHomeRoute',
        // ]),
    },
    mounted (){


    }
}
</script>
<style lang="scss">
html,body,#app{
    overflow: auto;
    background-color:#f1f1f1 !important;
}

.web-page{
    max-width: 414px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}


@font-face {
    font-family: "fudu-font";
    src: url('//at.alicdn.com/t/font_1403935_nue0tr4xei.eot?t=1577536955248'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1403935_nue0tr4xei.eot?t=1577536955248#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('//at.alicdn.com/t/font_1403935_nue0tr4xei.woff?t=1577536955248') format('woff'),
    url('//at.alicdn.com/t/font_1403935_nue0tr4xei.ttf?t=1577536955248') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1403935_nue0tr4xei.svg?t=1577536955248#iconfont') format('svg'); /* iOS 4.1- */
}


.i-icon {
  font-family: "fudu-font" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e64c";
}

.icon-shangquangoucheng:before {
  content: "\e60a";
}

.icon-gouwuche:before {
  content: "\e60d";
}

.icon-zhanghao:before {
  content: "\e607";
}

.icon-dingweiweizhizuobiaoxianxing:before {
  content: "\e61c";
}

.icon-peizhixiangshili:before {
  content: "\e807";
}

.icon-gouwuche1:before {
  content: "\e664";
}

.icon-quanxian:before {
  content: "\e604";
}

.icon-good:before {
  content: "\e6f7";
}

.icon-search1:before {
  content: "\e63a";
}

.icon-icon_dingtab:before {
  content: "\eba6";
}

.icon-down:before {
  content: "\e69b";
}

.icon-home:before {
  content: "\e69c";
}

.icon-loop:before {
  content: "\e69d";
}

.icon-bottom:before {
  content: "\e69e";
}

.icon-prevent:before {
  content: "\e69f";
}

.icon-close:before {
  content: "\e6a0";
}

.icon-increase:before {
  content: "\e6a1";
}

.icon-icon-test-copy:before {
  content: "\e60c";
}

.icon-stop:before {
  content: "\e669";
}

.icon-fangyuanzhidingguanli:before {
  content: "\e6ca";
}

.icon-baozhengjinguanli:before {
  content: "\e6cb";
}

.icon-keshouchanpinleimu:before {
  content: "\e6cc";
}

.icon-pinpaiguanshezhi:before {
  content: "\e6cd";
}

.icon-xiangmuhezuoshenqing:before {
  content: "\e6d5";
}

.icon-shanghuzhanghao:before {
  content: "\e6d0";
}

.icon-caise:before {
  content: "\e6d1";
}

.icon-caise1:before {
  content: "\e6d2";
}

.icon-gouwuche-copy:before {
  content: "\eba7";
}
</style>
