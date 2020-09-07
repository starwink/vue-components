<template>
  <div style="height: 100%">
    <div id="contentDiv" style="height: 100%;width:100%"></div>
  </div>
</template>

<script>
import '@/assets/js/openseadragon'
import '@/assets/js/openseadragon-paperjs-overlay'
import '@/assets/libs/openseadragon-fabricjs-overlay'
// import  '../js/fabric-adapted.js'
// import { fabric } from 'fabric';
console.log('fabric', fabric)
export default {
  name: 'CaseMark',
  data () {
    return {
      viewer: null,
      options: {
        id: 'contentDiv',
        prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
        tileSources: {
          Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'static/test_files3/',
            Format: 'jpg',
            Overlap: '2',
            TileSize: '256',
            Size: {
              Height: '1440',
              Width: '2560'
            }
          }
        },
        defaultZoomLevel: 0.8,
        constrainDuringPan: true,
        showNavigator: true, // 是否显示导航
        navigatorPosition: 'RIGHT_TOP', // 导航的位置
        navigatorTop: '250px',
        navigatorLeft: '350px',
        navigatorHeight: '120px',
        navigatorWidth: '145px',
        debugMode: false, // 调试模式
        navigatorAutoFade: false, // 导航栏永久存在
        gestureSettingsMouse: { clickToZoom: false } // 设置鼠标单击不可放大
      }, // openseadragon 参数配置
      fabricObj: null,
      fabricJson: {},
      drawingObject: null, // 绘制对象
      moveCount: 1,
      mouseFrom: {},
      mouseTo: {},
      doDrawing: false,
      drawType: 'rectangle',
      shapes: [
        { text: '矩形', val: 'rectangle' },
        { text: '圆形', val: 'circle' },
        { text: '直线', val: 'line' },
        { text: '梯形', val: 'trapezoid' },
        { text: '点', val: 'point' },
        { text: '折线', val: 'linetrip' },
        { text: '多边形', val: 'polygons' }
      ],
      labelResult: {
        // 0:{'renche3.5':['juxing0']}
      },
      can_zoom: ''
    }
  },
  methods: {
    // 获取ZOOM
    updateZoom () {
      var zoom = this.viewer.viewport.getZoom(true)
      var imageZoom = this.viewer.viewport.viewportToImageZoom(zoom)
      this.can_zoom = Math.round(imageZoom * 100) / 100
    },
    pressHandler (event) {},
    dragHandler (event) {},
    dragEndHandler (event) {},
    /**
     * @desc事件监听
     * */
    fabricObjEvent () {
      this.fabricObj.on({
        'mouse:down': e => {
          if (this.drawType) {
            // 鼠标按下
            var offset_x = this.fabricObj.calcOffset().viewportTransform[4]
            var offset_y = this.fabricObj.calcOffset().viewportTransform[5]
            this.mouseFrom.x = Math.round(e.e.offsetX - offset_x)
            this.mouseFrom.y = Math.round(e.e.offsetY - offset_y)
            this.doDrawing = true
            this.viewer.setMouseNavEnabled(false)
            this.viewer.outerTracker.setTracking(false)
            console.log('1111')
          }
        },
        'mouse:move': e => {
          // 鼠标移动
          if (this.moveCount % 2 && !this.doDrawing) {
            // 减少绘制频率
            return
          }
          this.moveCount++
          var offset_x = this.fabricObj.calcOffset().viewportTransform[4]
          var offset_y = this.fabricObj.calcOffset().viewportTransform[5]
          this.mouseTo.x = Math.round(e.e.offsetX - offset_x)
          this.mouseTo.y = Math.round(e.e.offsetY - offset_y)
          this.drawing()
        },
        'mouse:up': e => {
          // 鼠标抬起
          this.moveCount = 1
          var offset_x = this.fabricObj.calcOffset().viewportTransform[4]
          var offset_y = this.fabricObj.calcOffset().viewportTransform[5]
          this.mouseTo.x = Math.round(e.e.offsetX - offset_x)
          this.mouseTo.y = Math.round(e.e.offsetY - offset_y)
          this.drawingObject = null
          this.drawType = null
          this.doDrawing = false
          this.viewer.setMouseNavEnabled(true)
          this.viewer.outerTracker.setTracking(false)
        },
        'object:moving': e => {
          // 对象移动
          console.log('对象移动')
        },
        'object:added': e => {
          // 增加对象
          console.log('增加对象')
        },
        'object:modified': e => {
          // 修改对象

          console.log('修改对象')
        },
        'selection:created': e => {

        }

      })
    },
    /**
     * @desc 点击图形开始画图
     * @param {String} drawType 要绘制的形状
     * */
    handleShape (drawType) {
      this.drawType = drawType
      this.ableEdit = false
      this.fabricObj.isDrawingMode = false
      this.fabricObj.selectable = false
      this.fabricObj.selection = false
      this.fabricObj.skipTargetFind = true
    },
    drawing () {
      var can_zoom = this.can_zoom
      if (this.drawingObject) {
        this.fabricObj.remove(this.drawingObject)
      }
      let fabricNew = null
      switch (this.drawType) {
        case 'polygons':
          // 绘制多边形
          break
        case 'rectangle':
          // 绘制矩形
          let path =
            'M ' +
            this.mouseFrom.x / can_zoom +
            ' ' +
            this.mouseFrom.y / can_zoom +
            ' L ' +
            this.mouseTo.x / can_zoom +
            ' ' +
            this.mouseFrom.y / can_zoom +
            ' L ' +
            this.mouseTo.x / can_zoom +
            ' ' +
            this.mouseTo.y / can_zoom +
            ' L ' +
            this.mouseFrom.x / can_zoom +
            ' ' +
            this.mouseTo.y / can_zoom +
            ' L ' +
            this.mouseFrom.x / can_zoom +
            ' ' +
            this.mouseFrom.y / can_zoom +
            ' z'
          fabricNew = new fabric.Path(path, {
            stroke: 'red',
            strokeWidth: 2,
            fill: 'rgba(255, 255, 255, 0)'
          })
          break
        case 'trapezoid':
          // 绘制梯形
          break
        case 'circle':
          // 绘制圆形
          let radius =
            Math.sqrt(
              (this.mouseTo.x - this.mouseFrom.x) *
                (this.mouseTo.x - this.mouseFrom.x) +
                (this.mouseTo.y - this.mouseFrom.y) *
                  (this.mouseTo.y - this.mouseFrom.y)
            ) / 2
          fabricNew = new fabric.Circle({
            left: this.mouseFrom.x,
            top: this.mouseFrom.y,
            stroke: 'green',
            fill: 'rgba(255, 255, 255, 0)',
            radius: radius,
            strokeWidth: 2
          })
          break
        case 'line':
          // 绘制点
          fabricNew = new fabric.Line(
            [
              this.mouseFrom.x,
              this.mouseFrom.y,
              this.mouseTo.x,
              this.mouseTo.y
            ],
            {
              stroke: '#ff1905',
              strokeWidth: 2
            }
          )
          break
        case 'point':
          // 绘制点
          break
        case 'linetrip':
          // 绘制折线
          fabricNew = new fabric.Line(
            [
              this.mouseFrom.x,
              this.mouseFrom.y,
              this.mouseTo.x,
              this.mouseTo.y
            ],
            {
              stroke: '#ff1905',
              strokeWidth: 2
            }
          )
          break
      }
      if (fabricNew) {
        // fabricNew.set("shape", this.shape);
        // fabricNew.set("category", this.category);
        // this.fabricObj.add(fabricNew);
        // this.drawingObject = fabricNew;

        var group = new fabric.Group([fabricNew], {
          hasRotatingPoint: true, // 旋转控件
          selectionBackgroundColor: 'rgba(100,100,100,0.25)'
        })
        this.fabricObj.add(group)
        this.drawingObject = group
      }
    },
    /**
     * @desc 手动标注
     * */
    manualLabel () {
      this.dialog = true
    }
  },
  created () {},
  mounted () {
    let self = this
    this.viewer = new OpenSeadragon.Viewer(this.options)
    this.updateZoom()
    this.can_zoom = (this.can_zoom / 2560).toFixed(2)
    // initialize overlay
    var options = {
      scale: 2560
    }
    var overlay = this.viewer.fabricjsOverlay(options)
    this.fabricObj = overlay.fabricCanvas()
    console.log('this.fabricObj', this.fabricObj)
    // this.fabricObj.selectable = false;
    // this.fabricObj.selection = false;
    // this.fabricObj.skipTargetFind = true;
    this.fabricObj.devicePixelRatio = true // Retina 高清屏 屏幕支持
    this.fabricObjEvent()
    // 自动更新放大倍数
    this.viewer.addHandler('animation', this.updateZoom)
    window.onresize = () => {
      overlay.resize()
      overlay.resizecanvas()
    }
  }
}
</script>

<style scoped>
.highlight,
#overlays-div {
  border: 2px solid blue;
}
</style>
