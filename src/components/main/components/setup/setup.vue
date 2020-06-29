<template>
  <div  class="full-screen-btn-con">
    <Tooltip content="系统设置" placement="bottom">
      <Icon @click.native="toSetup" type="md-settings" :size="23"></Icon>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'Setup',
  computed: {

  },
  methods: {
    toSetup () {
      this.$router.push({
        name: 'yuangong'
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
.full-screen-btn-con .ivu-tooltip-rel{
  height: 64px;
  line-height: 56px;
  i{
    cursor: pointer;
  }
}
</style>
