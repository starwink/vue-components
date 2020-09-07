<template>
<div style="height: 100%">
	<Row class="mark-tool-bar">
		<Col :span="24" class="mark-tool-col">
			<ul id="toolsul" class="tools">
				<li :class="[initIdx===idx ? 'contro-item active' : 'contro-item']" v-for="(item,idx) in toolsBar" :key="idx" @click="handleShape(item, idx)">
					<i class="icon-tools" :class="'icon-'+item.val+'-black'"></i>
				</li>
				<li id="home" style="font-size: 20px;"><span>默认</span></li>
				<li id="full-page" style="font-size: 20px;"><span>全屏</span></li>
				<li id="zoom-in"><span>+</span></li>
				<li id="zoom-num" style="font-size: 24px;"><span>{{can_zoom}}</span></li>
				<li id="zoom-out"><span>-</span></li>
			</ul>
		</Col>
	</Row>
	<!-- <div style="margin-top:195px;position: absolute;z-index:100;">
  		<div style="width:65px;margin-left:-10px;">
  			<ul id="toolsul" class="tools">
  				<li :class="[initIdx===idx ? 'contro-item active' : 'contro-item']"  v-for="(item,idx) in toolsBar" :key="idx" @click="handleTools(item, idx)">
  					<i class="icon-tools" :class="'icon-'+item.icon+'-black'"></i>
  				</li>
  			</ul>
  			<ul id="sdtool" class="tools">
  				<li id="home" style="font-size: 20px;"><span>默认</span></li>
  				<li id="full-page" style="font-size: 20px;"><span>全屏</span></li>
  				<li id="zoom-in"><span>+</span></li>
  				<li id="zoom-num" style="font-size: 24px;"><span>{{can_zoom}}</span></li>
  				<li id="zoom-out"><span>-</span></li>
  				<li id="zoom-zoom" style="display: none;"><span></span></li>

  			</ul>

  		</div>
  	</div> -->
	<div style="height: 100%">
		<div id="contentDiv" style="height: 100%;width:100%"></div>
	</div>
</div>
</template>

<script>
import '@/assets/libs/openseadragon'
import '@/assets/libs/openseadragon-scalebar.js'
import '@/assets/libs/openseadragon-fabricjs-overlay.js'
// import "@/assets/libs/fabric.adapted.js";
import { fabric } from 'fabric'

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
            Url: '/static/img/test_files3/',
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
        gestureSettingsMouse: {
          clickToZoom: false
        }, // 设置鼠标单击不可放大
        showNavigator: true, // 导航视图
        // mouseNavEnabled:false,
        navigatorAutoFade: false, // 导航栏永久存在
        navigatorBackgroundColor: 'white',
        // navigatorPosition: "TOP_LEFT",
        navigatorPosition: 'ABSOLUTE',
        // navigatorBackground:'#ffffff',
        navigatorTop: '4px',
        navigatorLeft: '5px',
        navigatorHeight: '90px',
        navigatorWidth: '200px', // 导航窗口的位置
        navigatorBackground: '#fefefe',
        navigatorBorderColor: '#191970',
        navigatorDisplayRegionColor: '#FF0000',
        zoomInButton: 'zoom-in', // 放大
        zoomOutButton: 'zoom-out', // 缩小
        homeButton: 'home', // 恢复默认
        fullPageButton: 'full-page', // 全屏
        debugMode: true, // 开启调试模式
        debugGridColor: '#1B9E77', // 调试模式下网格的颜色
        panHorizontal: true, // false:不能水平移动，只能竖直移动
        defaultZoomLevel: 0.8, // 初始化默认放大倍数，按home键也返回该层
        minZoomLevel: 0.5, // 最小允许放大倍数
        maxZoomLevel: 40, // 最大允许放大倍数
        visibilityRatio: 0.5, // 图片在框内的最小比例
        constrainDuringPan: true, // (default: false)是否限制拖拽出允许显示范围
        navigatorOpacity: 0.8
      }, // openseadragon 参数配置
      fabricObj: null,
      fabricJson: {},
      drawingObject: null, // 绘制对象
      moveCount: 1,
      mouseFrom: {},
      mouseTo: {},
      doDrawing: false,
      drawType: '',
      toolsBar: [
        {
          text: '箭头',
          val: 'arrow'
        },
        {
          text: '直线',
          val: 'line'
        },
        {
          text: '圆形',
          val: 'circle'
        },
        {
          text: '矩形',
          val: 'rectangle'
        },
        {
          text: '多边形',
          val: 'polygons'
        },
        {
          text: '清除',
          val: 'clear'
        }
      ],
      labelResult: {
        // 0:{'renche3.5':['juxing0']}
      },
      can_zoom: '',
      initIdx: null
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
            console.log(offset_x, 'offset_x', offset_y, 'offset_y', this.mouseFrom.x, this.mouseFrom.y)
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
          console.log(this.mouseTo.x, this.mouseTo.y)
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
    handleShape (item, index) {
      this.initIdx = index
      this.drawType = item.val
      this.ableEdit = false
      this.fabricObj.isDrawingMode = false
      this.fabricObj.selectable = false
      this.fabricObj.selection = false
      this.fabricObj.skipTargetFind = true
      switch (this.drawType) {
        case 'pencil':
          this.fabricObj.isDrawingMode = true
          break
        case 'clear':
          this.fabricObj.selection = true
          this.fabricObj.skipTargetFind = false
          this.fabricObj.selectable = true
          break
        case 'reset':
          this.fabricObj.clear()
          break
        case 'redo':
          this.redo()
          break
        case 'undo':
          this.undo()
          break
        default:
          break
      }
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
						  (this.mouseTo.x / can_zoom - this.mouseFrom.x / can_zoom) *
							(this.mouseTo.x / can_zoom - this.mouseFrom.x / can_zoom) +
							(this.mouseTo.y / can_zoom - this.mouseFrom.y / can_zoom) *
							(this.mouseTo.y / can_zoom - this.mouseFrom.y / can_zoom)
						) / 2
          fabricNew = new fabric.Circle({
            left: this.mouseFrom.x / can_zoom,
            top: this.mouseFrom.y / can_zoom,
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
              this.mouseFrom.x / can_zoom,
              this.mouseFrom.y / can_zoom,
              this.mouseTo.x / can_zoom,
              this.mouseTo.y / can_zoom
            ], {
              stroke: '#ff1905',
              strokeWidth: 2
            }
          )
          break
        case 'arrow':
          fabricObject = new fabric.Path(this.drawArrow(this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y, 17.5, 17.5), {
            stroke: '#ff1905',
            fill: 'rgba(255,255,255,0)',
            strokeWidth: 2
          })
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
            ], {
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
    },
    // 书写箭头的方法
    drawArrow (fromX, fromY, toX, toY, theta, headlen) {
      theta = typeof theta !== 'undefined' ? theta : 30
      headlen = typeof theta !== 'undefined' ? headlen : 10
      // 计算各角度和对应的P2,P3坐标
      let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
        angle1 = (angle + theta) * Math.PI / 180,
        angle2 = (angle - theta) * Math.PI / 180,
        topX = headlen * Math.cos(angle1),
        topY = headlen * Math.sin(angle1),
        botX = headlen * Math.cos(angle2),
        botY = headlen * Math.sin(angle2)
      let arrowX = fromX - topX,
        arrowY = fromY - topY
      let path = ' M ' + fromX + ' ' + fromY
      path += ' L ' + toX + ' ' + toY
      arrowX = toX + topX
      arrowY = toY + topY
      path += ' M ' + arrowX + ' ' + arrowY
      path += ' L ' + toX + ' ' + toY
      arrowX = toX + botX
      arrowY = toY + botY
      path += ' L ' + arrowX + ' ' + arrowY
      return path
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
    console.log('this.viewer', this.viewer)
    var overlay = this.viewer.fabricjsOverlay(options)
    this.fabricObj = overlay.fabricCanvas()
    console.log('this.fabricObj', this.fabricObj)
    this.fabricObj.selectable = false
    this.fabricObj.selection = false
    this.fabricObj.skipTargetFind = true
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

<style scoped lang="scss">
.mark-tool-bar {
    margin-left: 190px;
    position: absolute;
    z-index: 100;
    height: 65px;
    line-height: 65px;
    .mark-tool-col {
        height: 65px;
        line-height: 65px;
    }
}
.tools {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 65px;
    line-height: 65px;
    display: inline-block;
}

.tools li {
    width: 65px;
    height: 65px;
    text-align: center;
    line-height: 65px;
    font-size: 22px;
    border-top: #dad7d9 solid 1px;
    background: #E5E4E5;
    cursor: pointer;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    span {
        display: block;
        position: absolute;
        text-align: center;
        width: 100%;
    }
}

.tools li:hover {
    background: #BFEFFF;
    /*background: #f2f1f2;*/
}

.tools li.active {
    background: #00E5EE;
    /*background: #888;*/
}

.hide {
    display: none;
}

.canvasDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.icon-tools {
    display: inline-block;
    width: 28px;
    height: 28px;
    background-image: url("../../assets/images/tools-28.png");
    background-repeat: no-repeat;
    // margin-top: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -14px;
    margin-left: -14px;
}

.icon-color-gray {
    background-position: -0px -0px;
}

.icon-color-red {
    background-position: -28px -0px;
}

.icon-color-black {
    background-position: -56px -0px;
}

.icon-color-blue {
    background-position: -84px -0px;
}

.icon-color-select {
    background-position: -112px -0px;
}

.icon-eye-black {
    background-position: -140px -0px;
}

.icon-eye-select {
    background-position: -168px -0px;
}

.icon-noeye-black {
    background-position: -196px -0px;
}

.icon-noeye-select {
    background-position: -0px -28px;
}

.icon-grids-black {
    background-position: -28px -28px;
}

.icon-grids-select {
    background-position: -56px -28px;
}

.icon-nogrids-black {
    background-position: -84px -28px;
}

.icon-nogrids-select {
    background-position: -112px -28px;
}

.icon-pen-black {
    background-position: -140px -28px;
}

.icon-pen-select {
    background-position: -168px -28px;
}

.icon-move-black {
    background-position: -196px -28px;
}

.icon-move-select {
    background-position: -0px -56px;
}

.icon-text-black {
    background-position: -28px -56px;
}

.icon-text-select {
    background-position: -56px -56px;
}

.icon-dottedline-arrow-black {
    background-position: -84px -56px;
}

.icon-dottedline-arrow-select {
    background-position: -112px -56px;
}

.icon-line-black {
    background-position: -140px -56px;
}

.icon-line-select {
    background-position: -168px -56px;
}

.icon-dottedline-black {
    background-position: -196px -56px;
}

.icon-dottedline-select {
    background-position: -0px -84px;
}

.icon-arrow-black {
    background-position: -28px -84px;
}

.icon-arrow-select {
    background-position: -56px -84px;
}

.icon-circle-black {
    background-position: -84px -84px;
}

.icon-circle-select {
    background-position: -112px -84px;
}

.icon-ellipse-black {
    background-position: -140px -84px;
}

.icon-ellipse-select {
    background-position: -168px -84px;
}

.icon-square-black {
    background-position: -196px -84px;
}

.icon-square-select {
    background-position: -0px -112px;
}

.icon-rectangle-black {
    background-position: -28px -112px;
}

.icon-rectangle-select {
    background-position: -56px -112px;
}

.icon-rightangle-black {
    background-position: -84px -112px;
}

.icon-rightangle-select {
    background-position: -112px -112px;
}

.icon-equilateral-black {
    background-position: -140px -112px;
}

.icon-equilateral-select {
    background-position: -168px -112px;
}

.icon-isosceles-black {
    background-position: -196px -112px;
}

.icon-isosceles-select {
    background-position: -0px -140px;
}

.icon-isoscelesrighttriangle-black {
    background-position: -28px -140px;
}

.icon-isoscelesrighttriangle-select {
    background-position: -56px -140px;
}

.icon-remove-black {
    background-position: -84px -140px;
}

.icon-remove-select {
    background-position: -112px -140px;
}

.icon-clear-black {
    background-position: -140px -140px;
}

.icon-clear-select {
    background-position: -168px -140px;
}
</style>
