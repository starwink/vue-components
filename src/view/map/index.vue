<template>
    <div>
        <!-- <div style="overflow: hidden;"> -->
        <section>
            <!--工具条-->
            <Form ref="form" :label-width="86" @submit.native.prevent @keydown.native.enter.prevent="search">
                <Row>
                    <Col span="6">
                    <FormItem label="地点查询" prop="keyword">
                        <Input v-model="inputVal"></Input>
                    </FormItem>
                    </Col>
                   <Col span="6">
                    <Button type="primary" @click.stop="search">搜索</Button>
                    </Col>
             
                    <Col span="6">
                    <FormItem label="坐标">
                        <Input v-model="latlngCurrent"  placeholder="" ></Input>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <Button type="primary" style="margin-left:20px;" @click.stop="setMapPoint">经纬度反查</Button>
                    <Button type="primary" style="margin-left:20px;" @click.stop="doCopy">复制</Button>
                    <!-- <Button type="primary" @click.stop="inputChange">获取地理位置</Button> -->
                    </Col>
                </Row>
            </Form>
        </section>
        <!-- </div> -->
        <div class="mapWrap">
            <div class="qqmap" id="qqmapCont">
            </div>
            <div class="lngTips"></div>
        </div>

    </div>

</template>

<script>
import config from '@/config'

export default {
    props: {
        mapcenter: {
            type: String,
            default: '30.21635515266855,120.2398681640625'
        },
        oldmarker: {
            type: String,
            default: '30.2163551526684,120.2398681640625'
        },
        inputDefault: {
            type: String,
            default: ''
        }
    },
    data: function () {
        let qqMapKey=config.qqMapKey;
        return {
            qqMapKey: qqMapKey,
            qqmap: '',
            premarker: '',
            userMarker:'',
            geolocation:'',
            marker: '',
            inputVal: '',
            latlngCurrent: ''
        }
    },
    mounted() {
        let that = this;
        this.inputVal = this.inputDefault;
        if (this.oldmarker) {
            this.latlngCurrent = this.oldmarker || this.mapcenter;
        }
        if (typeof (qq) == 'object') {
            that.createMap();
        } else {
            this.loadQQmap();
        }
        window.onMapFileLoad = function () {
            console.log('qqmap加载完成')
            that.createMap();
            
        }
    },
    watch: {
        oldmarker(newVal, oldVal) {
            if (newVal) {
                console.log(typeof newVal)
                this.latlngCurrent = newVal;
                this.qqmap && this.createMarker()
            }
        },
        inputDefault(newVal, oldVal) {
            console.log('默认地址变成：', newVal)
            this.inputVal = newVal;
        }
    },
    methods: {
        doCopy: function () {
            let that = this
            this.$copyText(this.latlngCurrent).then(function (e) {
                that.$Message.info('复制成功')
            }, function (e) {
                that.$Message.info('请手动复制')
            })
        },
        setMapPoint(){
            this.qqmap.setCenter(new qq.maps.LatLng(this.latlngCurrent.split(',')[0], this.latlngCurrent.split(',')[1]));
        },
        getLatlngCurrent(){
            return this.latlngCurrent;
        },
        loadQQmap() {
            let script = document.createElement("script");
            //设置标签的type属性
            script.type = "text/javascript";
            //设置标签的链接地址
            script.src = `https://map.qq.com/api/js?v=2.exp&key=${this.qqMapKey}&callback=onMapFileLoad`;
            //添加标签到dom
            document.body.appendChild(script);

            let scriptLocation = document.createElement("script");
            //设置标签的type属性
            scriptLocation.type = "text/javascript";
            scriptLocation.src = `https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js`;
            //添加标签到dom
            document.body.appendChild(scriptLocation);
        },
        search() {
            let that = this;
            //调用地址解析类
            let geocoder = new qq.maps.Geocoder({
                complete: function (result) {
                    that.qqmap.setCenter(result.detail.location);
                    that.qqmap.setZoom(12)
                }
            });
            let address = this.inputVal;
            //通过getLocation();方法获取位置信息值
            console.log('搜索地址：', address)
            geocoder.getLocation(address);
        },
        inputChange() {
            this.$emit('addr', this.inputVal); // 地图点击坐标 传递给父组件
        },
        getNormalizedCoord(coord, zoom) {
            var y = coord.y;
            var x = coord.x;
            var tileRange = 1 << zoom;
            if (y < 0 || y >= tileRange) {
                return null;
            }
            if (x < 0 || x >= tileRange) {
                x = (x % tileRange + tileRange) % tileRange;
            }
            return {
                x: x,
                y: y
            };
        },
        createMap() {
            let that = this;

            var earthlayer = new qq.maps.ImageMapType({
                name: '绿色家园',
                alt: '绿色家园',
                tileSize: new qq.maps.Size(256, 256),
                minZoom: 1,
                maxZoom: 5,
                getTileUrl: function (tile, zoom) {
                    var normalizedCoord = that.getNormalizedCoord(tile, zoom);
                    if (!normalizedCoord) {
                       return null;
                    }
                    var z = zoom,
                        x = tile.x,
                        y = tile.y;
                    return 'http://3gimg.qq.com/tencentMapTouch/lbs/demoimg/tile_' + z + '_' + normalizedCoord.x + '-' + normalizedCoord.y + '.png'
                }
            });

            this.qqmap = new qq.maps.Map(document.getElementById("qqmapCont"), {
                center: new qq.maps.LatLng(that.mapcenter.split(',')[0], that.mapcenter.split(',')[1]),      // 地图的中心地理坐标。
                zoom: 12,  // 地图的中心地理坐标。
            });
            if(!that.oldmarker){
                that.geolocation = new qq.maps.Geolocation(this.qqMapKey, "myapp");
                that.geolocation.getLocation(function(res){
                    console.log('getLocation',res);
                })
            }

            // this.qqmap.mapTypes.set('earth', earthlayer);
            // this.qqmap.setMapTypeId('earth');

            
            
            setTimeout(() => {
                this.createMarker();
                this.bindMapEvent()
            }, 500)
        },
        createMarker() {
            let that = this;
            if (that.premarker) {
                that.premarker.setMap(null);
            }
            if (this.oldmarker) {
                console.log('编辑模式：', this.oldmarker);
                that.qqmap.setCenter(new qq.maps.LatLng(that.oldmarker.split(',')[0], that.oldmarker.split(',')[1]));
                that.premarker = new qq.maps.Marker({
                    position: new qq.maps.LatLng(that.oldmarker.split(',')[0], that.oldmarker.split(',')[1]),
                    map: that.qqmap,
                    
                });
                var anchor = new qq.maps.Point(that.oldmarker.split(',')[0], that.oldmarker.split(',')[1]+0.0000002),
                    size = new qq.maps.Size(42, 68),
                    origin = new qq.maps.Point(0, 0),
                    icon = new qq.maps.MarkerImage(
                        "https://shuxi-master.oss-cn-hangzhou.aliyuncs.com/shuxi/base/location_hover.png",
                        size,
                        origin,
                        anchor
                );

                that.userMarker=new qq.maps.Marker({
                    position: new qq.maps.LatLng(that.oldmarker.split(',')[0], that.oldmarker.split(',')[1]),
                    map: that.qqmap,
                });
                that.userMarker.setIcon(icon)
            } else {
                //获取城市列表接口设置中心点
                let citylocation = new qq.maps.CityService({
                    complete: function (result) {
                        that.qqmap.setCenter(result.detail.latLng);
                    }
                });
                //调用searchLocalCity();方法
                citylocation.searchLocalCity();
            }
        },
        bindMapEvent() {
            let that = this;
            // 地图点击事件
            qq.maps.event.addListener(that.qqmap, 'click', function (event) {
                that.marker && that.marker.setMap(null);
                that.premarker && that.premarker.setMap(null);
                that.$emit('mapclick', event.latLng); // 地图点击坐标 传递给父组件
                that.latlngCurrent = event.latLng.lat + ',' + event.latLng.lng;
                that.marker = new qq.maps.Marker({
                    position: event.latLng,
                    styleId: 'myStyle',
                    map: that.qqmap
                });
            });
            // 地图鼠标滑动事件
            let $lngTipsBox = document.querySelector('.lngTips');
            let mapBoxWidth = window.getComputedStyle(document.querySelector('.mapWrap')).width;
            qq.maps.event.addListener(that.qqmap, 'mousemove', function (event) {
                $lngTipsBox.style.display = 'block';
                $lngTipsBox.style.top = (event.pixel.y + 10) + 'px';
                $lngTipsBox.style.left = (event.pixel.x + 15) + 'px';
                $lngTipsBox.innerText = '点击选择此坐标：' + event.latLng.lat + ',' + event.latLng.lng;
            });
            // 鼠标离开
            qq.maps.event.addListener(that.qqmap, 'mouseout', function (event) {
                $lngTipsBox.style.display = 'none';
            });
        },
    },
}
</script>

<style>
.qqmap {
    width: 100%;
    height: 600px;
}
.mapWrap {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin-top: 15px;
}
.lngTips {
    display: none;
    width: 255px;
    height: 40px;
    padding: 5px 7px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 123456;
    background: #ffffff;
    border-radius: 5px;
    line-height: 20px;
    box-shadow: #eeeeee 1px 1px 3px;
    border: #eeeeee 1px solid;
    font-size: 12px;
}
</style>
