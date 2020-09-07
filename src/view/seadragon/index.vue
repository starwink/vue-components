<template>
    <div class="seadragon">
        <h3>OpenSeadragon</h3>
        <OpenSeadragon style="height:calc(100vh - 200px)" ref="OpenSeadragon" :markBarHidden="true" :markedData="markData" :ifSaved="ifCanEdit" @imgActiveData="imgActiveData" @getMarkMsg="getMarkData" />
    </div>
</template>
<script>
import OpenSeadragon from '@/components/openseadragon/openSeadragon'

export default {
  components: {
    OpenSeadragon
  },
  data () {
    return {
      ifCanEdit: false,
      markData: {
        fileParams: {
          id: 3,
          fileWidth: 4882,
          fileLength: 3255
        }
      },
      formData: {
        plexus: null,
        ganglion: null,
        ganglionCell: null,
        diagnosisMessage: ''
      },
      sampleData: {}
    }
  },
  methods: {
    imgActiveData (items, index) {
      const _this = this
      _this.$helper.resetForm(_this.formData)
      if (_this.ifCanEdit) {
        _this.formData = Object.assign(_this.formData, items.linkeddata)
      } else {
        _this.sampleData.imgInfo.map(item => {
          if (item.id === items.id) {
            _this.formData = {
              plexus: items.linkeddata.plexus ? items.linkeddata.plexus : null,
              ganglion: items.linkeddata.ganglion ? items.linkeddata.ganglion : null,
              ganglionCell: items.linkeddata.ganglionCell ? items.linkeddata.ganglionCell : null,
              diagnosisMessage: items.linkeddata.diagnosisMessage ? items.linkeddata.diagnosisMessage : ''
            }
          }
        })
        _this.formData.id = items.id
      }

      console.log(this.formData, 'this.formDatathis.formData')
    },
    getMarkData (data) {
      console.log(data, 'data😄+😄')
      this.sampleData = {
        markInfo: JSON.parse(data.markInfo),
        imgInfo: data.imgInfo
      }
      if (!this.formData.id && data.imgInfo.length) {
        this.formData.id = data.imgInfo[0].id
      }
    }

  },
  created () {
    this.$nextTick(() => {
      this.$refs.OpenSeadragon.initPage()
    })
  }
}
</script>
<style scoped>
.seadragon{
    width:100%;
}
</style>
