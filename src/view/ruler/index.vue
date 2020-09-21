<template>
    <div class="main-page">
        
        <div v-show="showRuler" class="scale_box">
            <div class="scale_head"></div>
            <div class="ruler horizontal" id="horizontal">
                <div></div>
            </div>
            <div class="ruler vertical" id="vertical">
                <div></div>
            </div>
        </div>
        <div style="position:absolute;top:45%;left:45%">
            width:<input v-model="width" /><br/>
            height:<input v-model="height" /><br/>
            unit:<input v-model="unit" /><br/>
            zoom:<input v-model="zoom" /><br/>
            <button @click="resize">resize</button>
        </div>
        <button @click="clase">clase</button>
        
    </div>

</template>

<script>
import Ruler from "@scena/ruler";
export default {
    data() {
        return {
            horizontal: '',
            vertical: '',
            showRuler: true,
            unit:10,
            zoom:12,
            width:120
        }
    },
    methods: {
        init() {
            this.horizontal = new Ruler(document.getElementById('horizontal'), {
                type: "horizontal",
                // unit: 10,
                // zoom: 12,
                unit: this.unit,
                zoom: this.zoom,
                textFormat: function (n) {
                    return `${n}`
                },
            });

            console.log('this.horizontal', this.horizontal)
            this.vertical = new Ruler(document.getElementById('vertical'), {
                type: "vertical",
                unit: this.unit,
                zoom: this.zoom,
                height: this.height,
            });

            this.horizontal.resize();
            this.vertical.resize();

        },
        resize(){
            /* console.log(this.horizontal)
            this.horizontal.unit=this.unit;
            this.horizontal.zoom=this.zoom;
            this.horizontal.width=this.width;
            this.horizontal.resize(); */
            console.log(this.vertical)
            this.vertical.unit=this.unit;
            this.vertical.zoom=this.zoom;
            this.vertical.height=this.height;
            this.vertical.resize();
        },
        clase() {
            this.showRuler = !this.showRuler;
        },
    },
    created() {
        this.$nextTick(() => {
            this.init();
        })
    },
    mounted() {
        // window.addEventListener("resize", () => {
        //     this.horizontal.resize();
        //     this.vertical.resize();
        // });
    }
}
</script>
<style lang="scss">
html,
body {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    letter-spacing: 1px;
    background: #aaa;
}
.main-page {
    width: 100%;
    height: 100%;
    position: relative;
}
.scale_box {
    .scale_head {
        position: relative;
        width: 30px;
        height: 30px;
        background: #333;
        box-sizing: border-box;
        z-index: 21;
        &:before,&:after {
            position: absolute;
            content: "";
            background: #777;
        }
        &:before {
            width: 1px;
            height: 100%;
            left: 100%;
        }
        &:after {
            height: 1px;
            width: 100%;
            top: 100%;
        }
    }

    .ruler {
        position: absolute;
        top: 0;
        left: 0;
    }
    .horizontal {
        left: 30px;
        width: calc(100% - 30px);
        height: 30px;
    }
    .vertical {
        top: 30px;
        width: 30px;
        height: calc(100% - 30px);
    }
}
</style>