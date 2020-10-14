<template>
    <div style="height: 100%" class="mark-box" :key="menuKey"  >
        <Layout style="height: 100%">
            <Layout style="height: 100%;" class="mark-left">
                <Header style="width:clac(100% - 160px )" class="mark-header" v-show="!caseBarHidden">
                    <Row class="mark-tool-bar">
                        <Col :span="12" class="mark-tool-col flex-x-start">
                            <!-- <ul class="tools" v-show="!caseBarHidden"> -->
                            <ul class="tools" :class="(ifSaved || !showHideFlag)?'disabled-tools':''">
                                <li :class="[initIdx===idx ? 'contro-item active' : 'contro-item']" v-for="(item,idx) in toolsBar" :key="idx" @click="handleTools(item, idx)">
                                    <i class="tools-icon flex-y-start flex-x-center iconfont" :class="item.icon"></i>
                                    <span class="tools-name flex-y-end flex-x-center">{{item.name}}</span>
                                </li>
                            </ul>
                        </Col>
                        <Col :span="12" class="mark-tool-col flex-x-end">
                            <ul class="mark-tools">
                                <li @click="showHide()" class="hover-btns">
                                    <span class="tools-icon flex-y-start flex-x-center iconfont" :class="showHideFlag? 'icon-eyeshow':'icon-eyeclose'"></span>
                                    <span class="tools-name flex-y-end flex-x-center" style="line-height: 20px;">{{showHideFlag?'隐藏':'显示'}}</span>
                                </li>

                                <li class="tools-resize hover-btns">
                                    <div class="tools-resize-box">
                                        <div class="tools-resize-num">{{(zoom*100).toFixed(0)}}%</div>
                                        <div class="tools-resize-btn">
                                            <i id="zoom-in" class="el-icon-caret-top" @click="ifToBig = null"></i>
                                            <i id="zoom-out" class="el-icon-caret-bottom" @click="ifToBig = null"></i>
                                        </div>
                                    </div>
                                    <div class="tools-name" style="margin-top: -9px;">缩放</div>
                                </li>
                                <li class="to-big">
                                    <div class="flex-y-start flex-x-center">
                                        <span id="home" class="to-big-btns" @click="ifToBig = 1"  :class="ifToBig === 1?'isActiveBtn':' '">
                                            <i class="iconfont icon-home_n"></i>
                                        </span>
                                        <span @click="toBig(2)" class="to-big-btns" :class="ifToBig === 2 ?'isActiveBtn':' '">
                                            <span class="mt-5">2</span>
                                        </span>
                                        <span @click="toBig(4)" class="to-big-btns" :class="ifToBig === 4?'isActiveBtn':' '">
                                            <span class="mt-5">4</span>
                                        </span>
                                    </div>
                                    <div class="flex-y-end flex-x-center">
                                        <span @click="toBig(10)" class="to-big-btns" :class="ifToBig === 10?'isActiveBtn':' '">
                                            <span>10</span>
                                        </span>
                                        <span @click="toBig(20)" class="to-big-btns" :class="ifToBig === 20?'isActiveBtn':' '">
                                            <span>20</span>
                                        </span>
                                        <span @click="toBig(40)" class="to-big-btns" :class="ifToBig === 40?'isActiveBtn':' '">
                                            <span>40</span>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Header>
                <Content style="width:clac(100% - 160px )" :class="[caseBarHidden?'mark-main-hidden':'mark-main-show']">
                    <div id="contentDiv" style="height: 100%" @contextmenu="showMenu">
                        <!-- <vue-context-menu :contextMenuData="contextMenuData" @savedata="savedata" @deldata="deldata"></vue-context-menu> -->
                    </div>
                </Content>
            </Layout>
            <Sider style="width:70px" class="right-img-box" v-if="rightImgShow">
                <rightImgList ref="rightImgList" @openImgInfo="openImgInfo" :imgLists="imgList"></rightImgList>
            </Sider>
        </Layout>

    </div>
</template>

<script>
// require('@/assets/libs/jquery.min.js');
import '@/assets/libs/openseadragon'
import '@/assets/libs/openseadragon-scalebar.js'
import '@/assets/libs/openseadragon-fabricjs-overlay.js'
import "@/assets/libs/fabric.adapted.js";

// 
import '@/assets/libs/html2canvas.min.js'
import rightImgList from './rightImgList.vue'

export default {
  name: 'OpenSeadragon',
  components: {
    'rightImgList': rightImgList
  },
  props: {
    // 是否显示顶部工具栏
    caseBarHidden: {
      type: Boolean,
      default: false
    },
    // 是否显示图片工具栏
    rightImgShow: {
      type: Boolean,
      default: true
    },
    // 提交后再次查看时的数据
    markedData: {
      required: true,
      type: Object,
      default: {}
    },
    // 是否已点击提交审核
    ifSaved: {
      type: Boolean,
      default: false
    },
    // 是否模型预测数据
    ifModel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      viewer: null,
      listLoading: false,
      options: {
        id: 'contentDiv',
        // prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        // constrainDuringPan: true,
        // showNavigator: true,
        tileSources: { // 说明所要显示源图片的信息
          Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2009', // 指令集

            Url: 'http://192.168.140.20:9090/download/ewell-medical-diagnosis-web/img/test_files10/', // 图片库地址

            Overlap: '0', // 相邻图片重合的像素
            TileSize: '256', // 单个切片（正方形）的边长
            Format: 'jpg', // 切片格式
            Size: { // 图片总大小
              // test_files9
              // Height: '57600',
              // Width: '85760',
              // 29.5014*19.8144

              // test_files10
              Height: '3255',
              Width: '4882'
              // 30.9985mm*7.8377

              // test_files11
              // Height: '57600',
              // Width: '125952',
              // 30.9985mm*7.8377

            }
          }
        },
        immediateRender: false, // 初始化渲染，是否自动选择最佳分辨率图片显示，移动端最好开启
        gestureSettingsMouse: {
          // clickToZoom: false
          clickToZoom: true
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
        // showHomeControl: true,
        // debugMode: true, //开启调试模式
        // debugGridColor:'#1B9E77', //调试模式下网格的颜色
        panHorizontal: true, // false:不能水平移动，只能竖直移动
        defaultZoomLevel: 1, // 初始化默认放大倍数，按home键也返回该层
        minZoomLevel: 1, // 最小允许放大倍数
        maxZoomLevel: 120, // 最大允许放大倍数
        visibilityRatio: 0.5, // 图片在框内的最小比例
        constrainDuringPan: true, // (default: false)是否限制拖拽出允许显示范围
        autoHideControls: false, // 自动隐藏左侧缩略图
        navigatorOpacity: 0.8
        // minPixelRatio: 1,//(default: 0.5) 最小像素比，这个值越高效果，停止显示更高效果的值就约低，比如带宽低的时候可以设置在1.5，
        // minZoomImageRatio: 1 //最小缩放倍率，窗口的百分比
      }, // openseadragon 参数配置
      can_zoom: 100,
      currentTool: '',
      fabricObj: null,
      initIdx: 1,
      imgId: '',
      toolsBar: [{
        name: '选择',
        val: 'select',
        icon: 'icon-xuanze'
      },
      {
        name: '移动',
        val: 'move',
        icon: 'icon-yidong'
      },
      {
        name: '距离',
        val: 'arrow',
        icon: 'icon-juli'
      },
      {
        name: '矩形',
        val: 'juxing',
        icon: 'icon-juxing1'
      },
      {
        name: '椭圆',
        val: 'ellipse',
        icon: 'icon-tuoyuan1'
      },
      {
        name: '多边形',
        val: 'polygons',
        icon: 'icon-duobianxing1'
      }
        // {
        // 	name: '撤回',
        // 	val: 'undo',
        // 	icon: 'el-icon-top-left'
        // },
        // {
        // 	name: '删除',
        // 	val: 'remove',
        // 	icon: 'el-icon-delete'
        // },
      ],
      mouseFrom: {
        x: null,
        y: null
      },
      mouseTo: {},
      moveCount: 1,
      doDrawing: false,
      fabricHistoryJson: [],
      mods: 0,
      drawingObject: null, // 绘制对象
      drawColor: '#326BE6',
      drawWidth: 2,
      imageBase64: '',
      zoom: window.zoom ? window.zoom : 1,
      contextMenuData: {
        // the contextmenu name(@1.4.1 updated)
        menuName: 'mark',
        // The coordinates of the display(菜单显示的位置)
        axis: {
          x: null,
          y: null
        },
        // Menu options (菜单选项)
        menulists: [{
          fnHandler: 'savedata', // Binding events(绑定事件)
          icoName: 'el-icon-edit', // icon (icon图标 )
          btnName: '编辑' // The name of the menu option (菜单名称)
        },
        {
          fnHandler: 'deldata',
          icoName: 'el-icon-delete',
          btnName: '删除'
        }
        ]
      },
      caseNum: 1,
      showHideFlag: true,
      imgData: null, // 每个截图的图片数据
      imgList: [], // 所有的截图的图片数据信息集合
      menuKey: 1,
      ifToBig: 1
    }
  },
  created () {

  },
  computed: {

  },
  mounted () {
    // this.initPage();
  },
  methods: {
    showMenu () {
      console.log(this.fabricObj.getActiveObject())
      if (!this.fabricObj.getActiveObject()) {
        return false
      }
      event.preventDefault()
      var x = event.clientX
      var y = event.clientY
      // Get the current location
      this.contextMenuData.axis = {
        x,
        y
      }
    },
    savedata () {
      // this.fabricObj.remove(this.fabricObj.getActiveObject());
      // alert("编辑");
    },
    deldata () {
      console.log(this.fabricObj.getActiveObject())
      let activeData = this.fabricObj.getActiveObject()
      const activeId = activeData.imgData ? activeData.imgData.id : ''
      const imgLists = JSON.parse(JSON.stringify(this.imgList))
      this.imgList = []
      imgLists.map(items => {
        if (items.id !== activeId) {
          this.imgList.push(items)
        }
      })
      this.fabricObj.remove(this.fabricObj.getActiveObject())

      this.updateModifications(false) // 顺便删除存储的历史记录数据
      let data = {
        markInfo: JSON.stringify(this.fabricObj),
        imgInfo: this.imgList
      }
      this.$emit('getMarkMsg', data)// 数据传递给父组件
    },
    getPointRatio () {
      var can_zoom = this.viewer.viewport.getZoom()
      var getContainerSize = this.viewer.viewport.getContainerSize()
      var imgInfo = this.options.tileSources.Image.Size
      var pointRatio = imgInfo.Width / getContainerSize.x / can_zoom
      return pointRatio
    },

    initPage () {
      console.log('init', this.markedData)

      // this.options.tileSources.Image.Url=`http://192.168.140.20:8750/imgHandle/megacolon/${this.markedData.fileParams.id}/`;
      this.options.tileSources.Image.Url = `/static/img/test_files${this.markedData.fileParams.id}/`
      this.options.tileSources.Image.Size.Width = this.markedData.fileParams.fileWidth
      this.options.tileSources.Image.Size.Height = this.markedData.fileParams.fileLength

      this.$nextTick(() => {
        this.viewer = new OpenSeadragon.Viewer(this.options)
        // 是否显示比例尺工具
        if (!this.caseBarHidden) {
          var pointRatio = this.getPointRatio()

          // this.viewer.scalebar({
          //     type: OpenSeadragon.ScalebarType.MAP,
          //     // pixelsPerMeter: 200000, //设置像素与实际的比值
          //     // pixelsPerMeter: 3439996, //设置像素与实际的比值
          //     pixelsPerMeter: 34400*pointRatio, //设置像素与实际的比值
          //     // minWidth: "128px",
          //     location: OpenSeadragon.ScalebarLocation.BOTTOM_LEFT,
          //     xOffset: 5,
          //     yOffset: 10,
          //     stayInsideImage: false,
          //     color: "rgb(0, 0, 0)",
          //     fontColor: "rgb(0, 0, 0)",
          //     backgroundColor: "rgba(255, 255, 255, 0.5)",
          //     fontSize: "middle",
          //     barThickness: 4,
          // });
        }

        this.viewer.viewport.zoomTo(1, null, true)

        this.updateZoom()

        // initialize overlay
        var options = {
          // scale: 4846
          scale: this.options.tileSources.Image.Size.Width
        }
        var overlay = this.viewer.fabricjsOverlay(options)

        var canvas = new overlay.fabricCanvas('c', {
          isDrawingMode: true,
          skipOffscreen: true,
          skipTargetFind: true,
          selectable: false,
          selection: false
        })
        console.log(canvas, 'canvas')
        this.fabricObj = overlay.fabricCanvas()
        // console.log("this.fabricObj", this.fabricObj);
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
        this.fabricObj.clear().renderAll()
        console.log(this.markedData)
        // 提交保存后，如果有切图则执行以下
        if (!this.ifModel) {
          this.initMark()
        } else {
          this.initModelMark()
        }
      })
    },
    // 处理标注数据
    initMark () {
      if (this.markedData.fabricHistoryJson != void 0 && this.markedData.fabricHistoryJson !== '') {
        if (typeof this.markedData.imgList === 'object') {
          this.imgList = this.markedData.imgList
        }
        // 以下为解决切片提交后审核时删除的bug，给取到的数据加图片信息及ID
        const fabricHistoryData = JSON.parse(this.markedData.fabricHistoryJson)
        const _this = this
        if (fabricHistoryData.objects === undefined) {
          return false
        }
        for (let i = 0; i < fabricHistoryData.objects.length; i++) {
          fabricHistoryData.objects[i].imgData = _this.imgList[i]
          console.log(fabricHistoryData.objects[i], i)
        }
        this.markedData.fabricHistoryJson = JSON.stringify(fabricHistoryData)
        // 为解决切片提交后审核时删除的bug
        this.fabricObj.loadFromJSON(this.markedData.fabricHistoryJson)
        if (this.imgList.length) {
          let numList = []
          this.imgList.map(items => {
            numList.push(parseInt(items.num))
          })
          // numList = [1,2,4];
          numList.sort(function (a, b) { return a - b })
          console.log(numList, 'numList')
          this.caseNum = numList[numList.length - 1] + 1
          console.log(this.caseNum)
        }
      }
    },
    // 处理模型预测部分业务
    initModelMark () {
      const _this = this
      console.log(this.markedData, '😄😄😄')
      var can_zoom = this.viewer.viewport.getZoom()
      var getContainerSize = this.viewer.viewport.getContainerSize()
      var imgInfo = this.markedData.fileParams
      let pointRatio = imgInfo.fileWidth / getContainerSize.x / can_zoom
      let boundsInfo = this.viewer.viewport.getBounds()
      let pxRatio = imgInfo.fileWidth / getContainerSize.x// 显示1px对应实际比
      var xyCoords = this.markedData.fabricHistoryJson
      var fabricObject = null
      let drawWidth = _this.drawWidth * pointRatio
      var mm = localStorage.getItem('fabricHistoryJson')
      this.fabricObj.loadFromJSON(mm)
      // xyCoords.forEach(function (item) {
      //     let path = "M " +
      //         item.xmin * pointRatio + " " +
      //         item.ymin * pointRatio + " L " +
      //         item.xmax * pointRatio + " " +
      //         item.ymin * pointRatio + " L " +
      //         item.xmax * pointRatio + " " +
      //         item.ymax * pointRatio + " L " +
      //         item.xmin * pointRatio + " " +
      //         item.ymax * pointRatio + " L " +
      //         item.xmin * pointRatio + " " +
      //         item.ymin * pointRatio + " z";
      //     fabricObject = new fabric.Path(path, {
      //         left: item.xmin * pointRatio,
      //         top: item.ymin * pointRatio,
      //         stroke: _this.drawColor,
      //         strokeWidth: drawWidth,
      //         fill: "rgba(255, 255, 255, 0)"
      //     });
      //     _this.fabricObj.add(fabricObject);
      //     _this.fabricObj.renderAll();
      // });
    },
    // 获取ZOOM
    updateZoom () {
      this.zoom = this.viewer.viewport.getZoom(true)
      var imageZoom = this.viewer.viewport.viewportToImageZoom(this.zoom)
      this.can_zoom = Math.round(imageZoom * 100) / 100
      // this.can_zoom = Math.round(this.zoom * 100) / 100
    },
    fabricObjEvent () {
      console.log('fabricObjEvent')
      var _this = this
      this.fabricObj.on({
        'mouse:down': (e) => {
            console.log('moveCount,down')
          if (_this.currentTool) {
            var offset_x = _this.fabricObj.calcOffset().viewportTransform[4]
            var offset_y = _this.fabricObj.calcOffset().viewportTransform[5]
            _this.mouseFrom.x = Math.round(e.e.offsetX - offset_x)
            _this.mouseFrom.y = Math.round(e.e.offsetY - offset_y)
            _this.doDrawing = true
            _this.viewer.setMouseNavEnabled(false)
            _this.viewer.outerTracker.setTracking(false)
            if (_this.currentTool == 'text') {
              _this.drawText()
            }
          }
        },
        'mouse:up': (e) => {
            console.log('moveCount,up')
          // 鼠标按下，给所画的视图添加序号
          
          if (_this.moveCount !== 1 && (_this.currentTool === 'arrow' || _this.currentTool === 'ellipse' || _this.currentTool === 'juxing' || _this.currentTool === 'polygons')) {
            _this.caseNum += 1
          } else {
            return false
          }
          if (!_this.doDrawing) {
            return
          }
          // 鼠标抬起
          _this.moveCount = 1

          // debugger
          var offset_x = _this.fabricObj.calcOffset().viewportTransform[4]
          var offset_y = _this.fabricObj.calcOffset().viewportTransform[5]
          _this.mouseTo.x = Math.round(e.e.offsetX - offset_x)
          _this.mouseTo.y = Math.round(e.e.offsetY - offset_y)
          _this.drawingObject = null
          // _this.currentTool = null;
          _this.doDrawing = false
          _this.updateModifications(true)
          _this.viewer.setMouseNavEnabled(true)
          _this.viewer.outerTracker.setTracking(false);
          
        },
        'mouse:out': (e) => {
            console.log('moveCount,out')
          // 鼠标离开,复制mouse up

          // 鼠标抬起
          _this.moveCount = 1
          _this.mouseTo.x = null
          _this.mouseTo.y = null
          _this.drawingObject = null
          _this.doDrawing = false
          // _this.updateModifications(true);
          _this.viewer.setMouseNavEnabled(true)
          _this.viewer.outerTracker.setTracking(false)
          console.log('out',_this.mouseTo);
        },
        'mouse:move': (e) => {
          // 鼠标移动
          if (_this.moveCount % 2 && !_this.doDrawing) {
            // 减少绘制频率
            return
          }
          _this.moveCount++
          var offset_x = _this.fabricObj.calcOffset().viewportTransform[4]
          var offset_y = _this.fabricObj.calcOffset().viewportTransform[5]
          _this.mouseTo.x = Math.round(e.e.offsetX - offset_x)
          _this.mouseTo.y = Math.round(e.e.offsetY - offset_y)
          console.log('mouse:move')
          _this.drawing()
        },
        // 对象移动时间
        'object:moving': (e) => {
          console.log(e)
          e.target.opacity = 0.5
        },
        // 增加对象
        'object:added': (e) => {
          // console.log(e);
          // debugger
        },
        'object:modified': (e) => {
          console.log(e)
          e.target.opacity = 1
          let object = e.target
          // this.updateModifications(true)
        },
        'object:selected': (e) => {
          // debugger;
          console.log(e, 'selected')
          this.onContextmenu(e)
        },
        'selection:created': (e) => {
          /* if (e.target._objects) {
                        //多选删除
                        var etCount = e.target._objects.length;
                        for (var etindex = 0; etindex < etCount; etindex++) {
                            this.fabricObj.remove(e.target._objects[etindex]);
                        }
                    } else {
                        //单选删除
                        this.fabricObj.remove(e.target);
                    } */
          this.fabricObj.discardActiveObject() // 清楚选中框
          // this.updateModifications(true)
        }
      })
    },
    onContextmenu (e) {
      var pointer = this.fabricObj.getPointer(e.originalEvent)
      var objects = this.fabricObj.getObjects()
      for (var i = objects.length - 1; i >= 0; i--) {
        var object = objects[i]
        // 判断该对象是否在鼠标点击处
        if (this.fabricObj.containsPoint(e, object)) {
          // 选中该对象
          this.fabricObj.setActiveObject(object)
          event.preventDefault()
          // 显示菜单
          this.showContextMenu(e, object)
          continue
        }
      }

      // 阻止系统右键菜单
      event.preventDefault()
      return false
    },
    showContextMenu (event, object) {
      console.log(event, object)
    },
    // 储存历史记录
    updateModifications (savehistory) {
      if (this.currentTool == 'move' || this.currentTool == 'select') { return }
      if (savehistory) {
        this.fabricHistoryJson.push(JSON.stringify(this.fabricObj))
        // this.fabricHistoryJson.push({
        // 	id: this.caseNum,
        // 	casedata: this.fabricObj
        // });
      } else {
        // this.fabricHistoryJson.push(JSON.stringify(this.fabricObj))
        this.fabricHistoryJson.map(items => {

        })
      }
      // 我们把数据存储起来用做后续的模拟数据，供初始化时显示
      // localStorage.setItem('fabricHistoryJson', this.fabricHistoryJson);
      // console.log('fabricObj',this.fabricObj);
      // localStorage.setItem('fabricHistoryJson', JSON.stringify(this.fabricObj));
      //
      // // console.log(localStorage.getItem('fabricHistoryJson'), '视图数据');
      console.log(this.fabricHistoryJson, '视图数据233')

      this.createPhotoImg()
      this.initMove()
    },
    // canvas 历史后退
    undo () {
      let state = this.fabricHistoryJson
      if (this.mods < state.length) {
        this.fabricObj.clear().renderAll()
        this.fabricObj.loadFromJSON(state[state.length - 1 - this.mods - 1])
        this.fabricObj.renderAll()
        this.mods += 1
      }
    },
    // 前进
    redo () {
      let state = this.fabricHistoryJson
      if (this.mods > 0) {
        this.fabricObj.clear().renderAll()
        this.fabricObj.loadFromJSON(state[state.length - 1 - this.mods + 1])
        this.fabricObj.renderAll()
        this.mods -= 1
      }
    },
    transformMouse (mouseX, mouseY) {
      return {
        x: mouseX / this.zoom,
        y: mouseY / this.zoom
      }
    },
    resetObj () {
      this.fabricObj.selectable = false
      this.fabricObj.selection = false
      this.fabricObj.skipTargetFind = true
      // 清除文字对象
      if (this.textboxObj) {
        this.textboxObj.exitEditing()
        this.textboxObj = null
      }
    },
    /**
         * 点击操作工具
         * @param  {[type]} tools [工具类型]
         * @param  {[type]} idx   [index]
         * @return {[type]}       [description]
         */
    handleTools (tools, idx) {
      if (this.ifSaved || !this.showHideFlag) {
        return false
      }
      this.initIdx = idx
      this.currentTool = tools.val
      this.fabricObj.isDrawingMode = false

      this.doDrawing = false
      this.mouseFrom.x = null
      this.mouseFrom.y = null
      this.mouseTo.x = null
      this.mouseTo.y = null
      this.resetObj()
      this.drawTypeOption(tools.val)
      console.log('tools.val', tools.val)
      console.log('this.fabricObj', this.fabricObj)
      switch (tools.val) {
        case 'pencil':
          this.fabricObj.isDrawingMode = true
          break
        case 'remove':
          // this.initMove();
          this.fabricObj.selection = true
          this.fabricObj.skipTargetFind = false
          this.fabricObj.selectable = true
          this.fabricObj.remove(this.fabricObj.getActiveObject())
          this.fabricObj.clear(this.drawingObject).renderAll()
          break
        case 'select':
          this.fabricObj.selection = true
          this.fabricObj.skipTargetFind = false
          this.fabricObj.selectable = true
          break
        case 'move':
          // 移动整个图片
          this.currentTool = ''
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
    initMove () {
      if (this.currentTool != 'move' && this.currentTool != 'select') {
        this.handleTools({ val: 'move' }, 1)
      }
      // this.initIdx = 1;
      // this.currentTool = 'move';
      // console.log('this.fabricObj',this.fabricObj)
      // this.fabricObj.selection = true
      // this.fabricObj.skipTargetFind = false
      // this.fabricObj.selectable = true
      // this.fabricObj.remove(this.fabricObj.getActiveObject());
    },
    // 绘制文字对象
    drawText () {
      this.textboxObj = new fabric.Textbox(' ', {
        left: this.mouseFrom.x,
        top: this.mouseFrom.y,
        width: 220,
        fontSize: 18,
        fill: this.drawColor,
        hasControls: true
      })
      this.fabricObj.add(this.textboxObj)
      this.textboxObj.enterEditing()
      this.textboxObj.hiddenTextarea.focus()
      // this.updateModifications(true)
    },
    drawing () {
      let _this = this
      // var can_zoom = _this.can_zoom;
      var can_zoom = this.viewer.viewport.getZoom()
      var getContainerSize = this.viewer.viewport.getContainerSize()
      var imgInfo = this.viewer.source.dimensions
      let pointRatio = imgInfo.x / getContainerSize.x / can_zoom
      let boundsInfo = this.viewer.viewport.getBounds()
      let pxRatio = imgInfo.x / getContainerSize.x// 显示1px对应实际比

      if (this.drawingObject) {
        this.fabricObj.remove(this.drawingObject)
      }

      var group = null

      var textObject = null // 距离长度单位等

      var caseNumObject = null // 序号

      let fabricObject = null

      /**
			 * 获取DPI
			 * @returns {Array}
			 */
      this.conversion_getDPI = function () {
        var arrDPI = new Array()
        if (window.screen.deviceXDPI) {
          arrDPI[0] = window.screen.deviceXDPI
          arrDPI[1] = window.screen.deviceYDPI
        } else {
          var tmpNode = document.createElement('DIV')
          tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'
          document.body.appendChild(tmpNode)
          arrDPI[0] = parseInt(tmpNode.offsetWidth)
          arrDPI[1] = parseInt(tmpNode.offsetHeight)
          tmpNode.parentNode.removeChild(tmpNode)
        }
        return arrDPI
      }
      /**
			 * px转换为mm
			 * @param value
			 * @returns {number}
			 */
      this.pxConversionMm = function (value, pxRatio) {
        var c_value = value * pxRatio * 0.3439996892755682
        return c_value
      }

      var lineLengthpx = Math.sqrt((this.mouseFrom.x - this.mouseTo.x) * (this.mouseFrom.x - this.mouseTo.x) + (this.mouseFrom.y - this.mouseTo.y) * (this.mouseFrom.y - this.mouseTo.y)) / can_zoom
      var lineLength = this.pxConversionMm(lineLengthpx, pxRatio).toFixed(2)

      // let drawWidth=this.drawWidth/can_zoom;
      let drawWidth = this.drawWidth * pointRatio
      let fontSize = 24 * pointRatio
      switch (this.currentTool) {
        case 'pencil':
          this.fabricObj.isDrawingMode = true
          break
        case 'line':
          // fabricObject = new fabric.Line([this.mouseFrom.x / can_zoom, this.mouseFrom.y / can_zoom, this.mouseTo.x / can_zoom, this.mouseTo.y / can_zoom], {
          //     stroke: this.drawColor,
          //     strokeWidth: this.drawWidth / can_zoom
          // })

          fabricObject = new fabric.Line([this.mouseFrom.x * pointRatio, this.mouseFrom.y * pointRatio, this.mouseTo.x * pointRatio, this.mouseTo.y * pointRatio ], {
            stroke: this.drawColor,
            strokeWidth: drawWidth
          })
          break
        case 'arrow':// 距离
          // fabricObject = new fabric.Path(this.drawArrow(this.mouseFrom.x / can_zoom, this.mouseFrom.y / can_zoom, this.mouseTo.x / can_zoom, this.mouseTo.y / can_zoom, 17.5, 17.5), {
          //     stroke: this.drawColor,
          //     fill: "rgba(255,255,255,0)",
          //     strokeWidth: this.drawWidth
          // });
          fabricObject = new fabric.Path(this.drawArrow(this.mouseFrom.x * pointRatio, this.mouseFrom.y * pointRatio, this.mouseTo.x * pointRatio, this.mouseTo.y * pointRatio, 45, 8 * pointRatio), {
            stroke: this.drawColor,
            fill: 'rgba(255,255,255,0)',
            strokeWidth: drawWidth
          })
          textObject = new fabric.Text('距离：' + lineLength + 'um\n', {
            width: 20 / can_zoom,
            height: 20 / can_zoom,
            top: ((this.mouseFrom.y + this.mouseTo.y) * pointRatio) / 2,
            left: ((this.mouseFrom.x + this.mouseTo.x) * pointRatio) / 2,
            fontSize: fontSize * 0.6,
            opacity: 0.6,
            textBackgroundColor: '#fefefe'
          })
          break
        case 'xuxian': // doshed line
          fabricObject = new fabric.Line([this.mouseFrom.x * pointRatio, this.mouseFrom.y * pointRatio, this.mouseTo.x * pointRatio, this.mouseTo.y * pointRatio ], {
            strokeDashArray: [10, 3],
            stroke: this.drawColor,
            strokeWidth: drawWidth
          })
          break
        case 'juxing': // 矩形
          let path = 'M ' +
                        this.mouseFrom.x * pointRatio + ' ' +
                        this.mouseFrom.y * pointRatio + ' L ' +
                        this.mouseTo.x * pointRatio + ' ' +
                        this.mouseFrom.y * pointRatio + ' L ' +
                        this.mouseTo.x * pointRatio + ' ' +
                        this.mouseTo.y * pointRatio + ' L ' +
                        this.mouseFrom.x * pointRatio + ' ' +
                        this.mouseTo.y * pointRatio + ' L ' +
                        this.mouseFrom.x * pointRatio + ' ' +
                        this.mouseFrom.y * pointRatio + ' z'
          fabricObject = new fabric.Path(path, {
            left: this.mouseFrom.x * pointRatio,
            top: this.mouseFrom.y * pointRatio,
            stroke: this.drawColor,
            strokeWidth: drawWidth,
            fill: 'rgba(255, 255, 255, 0)'
          })
          console.log('juxing', this)
          break
        case 'cricle': // 正圆
          let radius = Math.sqrt((this.mouseTo.x * pointRatio - this.mouseFrom.x * pointRatio) * (this.mouseTo.x * pointRatio - this.mouseFrom.x * pointRatio) + (this.mouseTo.y * pointRatio - this.mouseFrom.y * pointRatio) * (this.mouseTo.y /
                        can_zoom - this.mouseFrom.y * pointRatio)) / 2
          fabricObject = new fabric.Circle({
            left: this.mouseFrom.x * pointRatio,
            top: this.mouseFrom.y * pointRatio,
            stroke: this.drawColor,
            fill: 'rgba(255, 255, 255, 0)',
            radius: radius,
            strokeWidth: drawWidth
          })
          break
        case 'ellipse': // 椭圆
          let left = this.mouseFrom.x * pointRatio
          let top = this.mouseFrom.y * pointRatio
          let ellipse = Math.sqrt((this.mouseTo.x * pointRatio - left) * (this.mouseTo.x * pointRatio - left) + (this.mouseTo.y * pointRatio - top) * (this.mouseTo.y * pointRatio - top)) / 2
          fabricObject = new fabric.Ellipse({
            left: left,
            top: top,
            stroke: this.drawColor,
            fill: 'rgba(255, 255, 255, 0)',
            originX: 'center',
            originY: 'center',
            rx: Math.abs(left - this.mouseTo.x * pointRatio),
            ry: Math.abs(top - this.mouseTo.y * pointRatio),
            strokeWidth: drawWidth
          })
          break
        case 'equilateral': // 等边三角形
          let height = this.mouseTo.y * pointRatio - this.mouseFrom.y * pointRatio
          fabricObject = new fabric.Triangle({
            top: this.mouseFrom.y * pointRatio,
            left: this.mouseFrom.x * pointRatio,
            width: Math.sqrt(Math.pow(height, 2) + Math.pow(height / 2.0, 2)),
            height: height,
            stroke: this.drawColor,
            strokeWidth: drawWidth,
            fill: 'rgba(255,255,255,0)'
          })
          break
        case 'polygons':// 正六边形
          let heights = (this.mouseTo.y - this.mouseFrom.y) * pointRatio
          // 计算半径，边长
          const R = Math.sqrt((this.mouseTo.x * pointRatio - this.mouseFrom.x * pointRatio) * (this.mouseTo.x * pointRatio - this.mouseFrom.x * pointRatio) + (this.mouseTo.y * pointRatio - this.mouseFrom.y * pointRatio) * (this.mouseTo.y * pointRatio - this.mouseFrom.y * pointRatio)) / 2
          // 6条边的坐标点（60是六边形的内角度数）
          const points = Array.from({
            length: 6
          }).map((item, index) => {
            return {
              x: Math.cos(60 * index / 180 * Math.PI) * R,
              y: Math.sin(60 * index / 180 * Math.PI) * R
            }
          })
          fabricObject = new fabric.Polygon(points, {
            top: this.mouseFrom.y * pointRatio,
            left: this.mouseFrom.x * pointRatio,
            width: Math.sqrt(Math.pow(heights, 2) + Math.pow(heights / 2.0, 2)),
            height: heights,
            stroke: this.drawColor,
            strokeWidth: drawWidth,
            fill: 'rgba(255,255,255,0)'
          })

          break
        case 'remove':
          break
        default:
          // statements_def'
          break
      }
      // if (fabricObject) {
      // 	this.fabricObj.add(fabricObject);
      // 	this.drawingObject = fabricObject;
      // }
      // 鼠标按下，给所画的视图添加序号
      const caseNum = '' + _this.caseNum
      caseNumObject = new fabric.Text(caseNum, {
        width: 20,
        height: 20,
        fontSize: fontSize,
        fill: '#364767',
        hasControls: true,
        top: this.mouseFrom.y * pointRatio,
        left: this.mouseFrom.x * pointRatio,
        opacity: 0.7,
        textBackgroundColor: '#fefefe'
      })

      if (fabricObject || caseNumObject || textObject) {
        const uuid = this.$helper.getNewUuid()
        _this.imgId = `${uuid}${_this.caseNum - 1}`

        if (textObject) {
          var group = new fabric.Group([fabricObject, caseNumObject, textObject], {
            selectionBackgroundColor: 'rgba(100,100,100,0.25)'
            // imgId:_this.imgId,
          })
          group.set('imgId', _this.imgId)
        } else if (fabricObject) {
          var group = new fabric.Group([fabricObject, caseNumObject], {
            selectionBackgroundColor: 'rgba(100,100,100,0.25)'
            // imgId:_this.imgId,
          })
          group.set('imgId', _this.imgId)
        }

        if (group) {
          this.fabricObj.add(group)
          this.drawingObject = group
        }
      }
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
    },
    // 点击显示隐藏按钮
    showHide () {
      this.currentTool = 'select'
      this.showHideFlag = !this.showHideFlag
      // 设置标注显示隐藏
      if (this.showHideFlag) {
        this.fabricObj.clear().renderAll()
        const backupData = sessionStorage.getItem('backupData')
        this.fabricObj.loadFromJSON(backupData)
        this.fabricObj.renderAll()
        this.setShowHideData()
      } else {
        let backupData = this.fabricObj
        sessionStorage.setItem('backupData', JSON.stringify(backupData))
        this.fabricObj.clear().renderAll()
      }
    },
    /**
         * [setShowHideData description]设置显示隐藏点击后的数据
         */
    setShowHideData () {
      // 以下为解决切片提交后审核时删除的bug，给取到的数据加图片信息及ID
      const fabricHistoryData = this.fabricObj
      const _this = this
      if (fabricHistoryData.objects === undefined) {
        return false
      }
      for (let i = 0; i < fabricHistoryData.objects.length; i++) {
        fabricHistoryData.objects[i].imgData = _this.imgList[i]
        console.log(fabricHistoryData.objects[i], i)
      }
    },
    /**
         * 点击放大缩小指定倍数
         * @param  {[type]} size [1,2,4,10,20,40]
         * @return {[type]}      [description]
         */
    toBig (size) {
      this.ifToBig = size
      this.viewer.viewport.zoomTo(size, null, true)
    },
    createPhotoImg () {
      let _this = this
      _this.listLoading = true
      html2canvas(document.querySelector('#contentDiv')).then(canvas => {
        var base64 = canvas.toDataURL('image/jpeg')
        // console.log(base64);
        // _this.tmpImgBase64=base64;

        // console.log(this.viewer.viewport.applyConstraints())

        // console.log(this.viewer.viewport.getContainerSize());;
        // console.log(this.viewer.source.dimensions.x)
        // console.log(this.viewer.source.dimensions.y)

        // console.log('element',this.viewer.element)
        // console.log('element',this.viewer);
        // let percentagePoint=this.viewer.viewport.getCenter(true);

        // console.log('percentagePoint',percentagePoint)
        // let imgAxisPoint=this.viewer.viewport.deltaPixelsFromPoints(percentagePoint);
        // let imgAxisPoint={x:percentagePoint.x*this.viewer.source.dimensions.x,y:percentagePoint.y*this.viewer.source.dimensions.x};
        // console.log('imgAxisPoint',imgAxisPoint)

        // this.viewer.viewport.zoomTo(8,toPoint,true)
        // this.viewer.viewport.panTo(toPoint,true);

        let locationInfo = this.getPhotoLocationInfo()

        _this.listLoading = false
        var imgId = _this.imgId
        this.$api.uploadImgFromBase64({
          base64Str: base64
        }).then(res => {
          let params = { ...{ src: res.object, name: `标注${_this.caseNum - 1}`, id: `${imgId}`, num: `${_this.caseNum - 1}`, linkeddata: {} }, ...locationInfo }
          this.$emit('createPhotoImg', params)
          _this.imgData = params
          _this.setImgData()
        })

        // console.log('toDataURL()',canvas.toDataURL())
        // $('#cimg').attr('src',base64)
        // document.body.appendChild(canvas)
      })
    },
    // 将截图后的图片信息设置到fabricObj中对应的canvas切图数据中
    setImgData () {
      const _this = this
      let markData = _this.fabricObj
      if (_this.fabricObj.objects == void 0) {
        _this.fabricObj.objects = _this.fabricObj._objects || []
      }
      if (markData.objects[markData.objects.length - 1] != void 0) {
        markData.objects[markData.objects.length - 1].imgData = _this.imgData// 给大图对象添加截图数据信息
      }
      _this.imgList.push(_this.imgData)// 截图后的数据集合
      localStorage.setItem('fabricHistoryJson', JSON.stringify(markData))
      // localStorage.setItem('markImgList',JSON.stringify(_this.imgList));
      let data = {
        markInfo: JSON.stringify(markData),
        imgInfo: _this.imgList
      }
      this.$emit('getMarkMsg', data)// 数据传递给父组件
    },
    getPhotoLocationInfo () {
      let zoom = this.viewer.viewport.getZoom()
      let percentagePoint = this.viewer.viewport.getCenter(true)
      // let showBoxInfo=this.viewer.viewport.getBounds();
      // let leftTop=new OpenSeadragon.Point(showBoxInfo.x*this.viewer.source.dimensions.x, showBoxInfo.y*this.viewer.source.dimensions.x);
      // 计算中心点
      let point = { x: percentagePoint.x * this.viewer.source.dimensions.x, y: percentagePoint.y * this.viewer.source.dimensions.x }
      return { zoom: zoom, point: point }
    },
    drawTypeOption (type) {
      if (type != 'move' && type != 'select') {
        this.hideMiniMap()
      } else {
        this.showMiniMap()
      }
    },
    showMiniMap () {
      console.log('showMiniMap')
      // this.viewer.showNavigator=true;//生效慢,有问题,不能百分百生效
      document.getElementsByClassName('navigator')[0].style.display = 'block'
    },
    hideMiniMap () {
      console.log('hideMiniMap')
      // this.viewer.showNavigator=false;
      document.getElementsByClassName('navigator')[0].style.display = 'none'
    },

    //
    openImgInfo (data, index) {
      let imgPoint = new OpenSeadragon.Point(data.point.x, data.point.y)
      let point = this.viewer.viewport.imageToViewportCoordinates(imgPoint.x, imgPoint.y)

      this.viewer.viewport.zoomTo(data.zoom, point, true)
      this.viewer.viewport.panTo(point, true)
      // this.viewer.viewport.applyConstraints();
      console.log(data, 'openImgInfoopenImgInfo')
      this.$emit('imgActiveData', data, index)
    }
  },
  watch: {
    markedData (newValue, oldValue) {
      // this.initMark();
      this.initPage()
      ++this.menuKey
    }
    // markedData: {
    // 	handler(newVal, oldVal) {
    // 		this.initPage();
    // 	},
    // 	deep: true,
    // 	immediate: false
    // }
  }
}
</script>
<style lang="scss">
.btn-wrapper-simple {
    height: 18px !important;
    line-height: 18px !important;
}
.nav-icon-fontawe {
    left: 10px !important;
}
</style>
<style scoped lang="scss">
.mark-box {
    .mark-header {
        width: 100%;
        background-color: #364767;
        .mark-tool-bar {
            z-index: 100;
            height: 60px;
            line-height: 60px;
            .mark-tool-col {
                height: 60px;
                line-height: 60px;
                .tools {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    height: 60px;
                    line-height: 60px;
                    display: inline-block;
                    li {
                        width: 60px;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        font-size: 22px;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        box-sizing: border-box;
                        i {
                            font-size: 15px;
                        }
                        .tools-icon {
                            margin-top: 15px;
                        }
                        .tools-name {
                            line-height: 30px;
                            font-size: 12px;
                        }
                    }
                }
                .disabled-tools{
                    li{
                        cursor: not-allowed;
                    }
                }
                .mark-tools {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    height: 60px;
                    line-height: 60px;
                    display: inline-block;
                    position: relative;
                    width: 100%;
                    li {
                        width: 60px;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                        font-size: 22px;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        box-sizing: border-box;
                        position: absolute !important;
                        top: 0;
                        i {
                            font-size: 15px;
                        }
                        .tools-icon {
                            margin-top: 15px;
                        }
                        .tools-name {
                            line-height: 30px;
                            font-size: 12px;
                        }
                    }
                    li:first-child {
                        right: 220px;
                    }
                    li:nth-child(2) {
                        right: 120px;
                    }
                    li:last-child {
                        right: 20px;
                        width: 100px;
                        div{
                            height: 30px;
                            line-height: 30px;
                            span{
                                display: inline-block;
                                width: 35px;
                                height: 30px;
                                line-height: 30px;
                                span{
                                    list-style: none;
                                    display: block;
                                    height: 20px;
                                    line-height: 20px;
                                    width: 20px;
                                    border-radius: 50%;
                                    border: 1px solid #fff;
                                    font-size: 12px;
                                    margin-left: 8px;
                                }
                            }
                        }
                        div:first-child{
                            span{
                                margin-top: 5px;
                            }
                            span:first-child{
                                margin-top: 0;
                            }
                        }
                        div:last-child{
                            span{
                                margin-top: 3px;
                            }
                        }
                    }
                    .tools-resize {
                        width: 100px;
                        height: 60px;
                        line-height: 60px;
                        .tools-resize-box {
                            height: 40px;
                            line-height: 40px;
                            position: relative;
                            .tools-resize-num {
                                display: inline-block;
                                width: 65px;
                                height: 40px;
                                line-height: 40px;
                                font-size: 18px;
                                position: absolute;
                                left: 0;
                                text-align: right;
                                overflow: hidden;
                            }
                            .tools-resize-btn {
                                display: inline-block;
                                width: 40px;
                                height: 40px;
                                position: relative;
                                left: 20px;
                                i:first-child {
                                    position: absolute !important;
                                    top: 5px;
                                }
                                i:last-child {
                                    position: absolute !important;
                                    bottom: 5px;
                                }
                            }
                        }
                        .tools-name {
                            height: 20px;
                            line-height: 20px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    .mark-main-show {
        height: calc(100% - 60px);
        width: 100%;
        padding: 0;
    }
    .mark-main-hidden {
        height: 100%;
        width: 100%;
        padding: 0;
    }
    .mark-left{
        border: 1px solid #364767;
    }
    .right-img-box{
        overflow: auto;
        // border: 1px solid #364767;
        border-top: 1px solid #364767;
        border-bottom: 1px solid #364767;
        border-right: 1px solid #364767;
    }
}

.tools li{
    opacity: 0.5;
}
.tools li:hover {
    // background: #BFEFFF;
    // background: #364767;
    opacity: 0.9;
    // color: #000 !important;
}
.tools li:active {
    opacity: 1 !important;
    // color: #000 !important;
}

.tools li.active {
    // background: #364767;
    opacity: 1;
}

.hover-btns{
    opacity: 0.5;
}
.hover-btns:hover{
    opacity: 1;
}
.hover-btns:active {
    opacity: 1 !important;
    color: #fff!important;
}
.to-big-btns {
    opacity: 0.5 !important;
}
.to-big-btns:hover {
    opacity: 1 !important;
}
.canvasDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.isActiveBtn{
    opacity: 1 !important;
}
</style>
