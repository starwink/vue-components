<template>
    <div class="right-img-list">
        <ul>
            <li v-for="(item,index) of list" :key="index" @click.stop="openInfo(item,index)">
                <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
                    <div>
                        <el-image
                        style="width: 50px; height: 50px"
                        :src="item.src" draggable="true" @dragstart="openInfo(item,index)"
                        ></el-image>
                        <p>{{item.name}}</p>
                    </div>

                </el-tooltip>

            </li>
        </ul>
    </div>
</template>
<script>
import json from './json.js'
export default {
  name: 'rightImgList',
  props: {
    // 右侧缩略图数据
    imgLists: {
      required: true,
      type: Array,
      default: []
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    init (list) {
      if (typeof list !== 'object') {
        return
      }
      this.list = list
    },
    openInfo (item, index) {
      console.log('oppp')
      this.$emit('openImgInfo', item, index)
    }

  },
  mounted () {
    // this.list=json.imgList;
    // console.log(this.list);

  },
  watch: {
    imgLists (newValue, oldValue) {
      this.list = newValue
      console.log(this.list)
    }
  }
}
</script>
<style lang="scss" scoped>
.right-img-list{
    li{
        cursor: default;
        padding:10px;
        &:not(:first-child){
            padding-top:0;
        }

        img{
            width:50px;
            height: 50px;
        }
        p{
            padding: 0;
            margin-bottom:2px ;
            overflow: hidden;
        }
    }
}
</style>
