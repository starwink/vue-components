<template>
  <div>
    <viewer
      :images="images"
      :options="options"
      class="viewer"
      ref="viewer"
      @inited="inited"
      v-if="images && images.length"
    >
      <img
        v-for="{msrc, src,id} in images"
        :src="msrc"
        :data-source="src"
        :key="id"
        class="image"
      >
    </viewer>
  </div>
</template>

<script>
import Vue from "vue";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
export default {
  data() {
    return {
      options: {
        url: "data-source"
      },
      index: 0,
      images: []
    };
  },
  methods: {
    inited (viewer) {
      this.$viewer = viewer;
      this.$viewer.view(this.index);
    },
    view (index) {
      this.index = index
      this.$viewer.view(this.index);
    },
    show (images, index = 0) {
      if (this.images === images) {
        this.view(index)
        return
      }
      this.images = images
      this.index = index
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.image {
  display: none;
}
</style>
<style>
.viewer-loading > img {
  display: none;  /* hide big images when it is loading */
}
</style>