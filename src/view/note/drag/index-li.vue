<template>
    <div>
        <ul class="color-list">
            <li class="color-item" v-for="item in list" v-dragging="{ item: item, list: list, group: 'color' }" :key="item.id">{{item.name}}</li>
        </ul>
        <ul ref="dragBox" :key="index">
            <li v-for="item,i of list" :key="item.id" :draggable="true" @dragstart="onDragStart(...arguments,i)" @drop="e=>onDropEnd(e,i)" @dragover.prevent>{{item.name}}</li>
        </ul>
        <Button @click="demo"> test</Button>
    </div>
</template>
<style lang="scss" scoped>
@import "./drag-li.scss";
</style>
<script>
import Vue from 'vue'
import VueDND from 'awe-dnd'

Vue.use(VueDND)

export default {
    data() {
        return {
            list: [
                { "id": 1, name: 'a' },
                { "id": 2, name: 'b' },
                { "id": 3, name: 'c' },
                { "id": 4, name: 'd' },
                { "id": 5, name: 'e' },
                { "id": 6, name: 'f' },
                { "id": 7, name: 'g' },
                { "id": 8, name: 'h' },
                { "id": 9, name: 'i' },
                { "id": 10, name: 'j' },
                { "id": 11, name: 'k' },
            ],
            draging: '',
            index: 0,
        }
    },
    mounted() {
        this.$dragging.$on('dragged', ({ value }) => {
            console.log(value.item)
            console.log(value.list)
            console.log(value.otherData)
        })
        this.$dragging.$on('dragend', (res) => {
            console.error(res);
        })
    },
    methods: {
        demo() {
            console.log(this.list)
        },
        onDropEndHtml(e, item) {
            console.log('onDropEndHtml', e, item);
            e.preventDefault();
            var target = e.target;
            if (target.nodeName === "LI" && target !== this.draging) {
                var targetRect = target.getBoundingClientRect();
                var dragingRect = this.draging.getBoundingClientRect();

                //_index是实现的获取index              
                if (this._index(this.draging) < this._index(target)) {
                    target.parentNode.insertBefore(this.draging, target.nextSibling);
                } else {
                    target.parentNode.insertBefore(this.draging, target);
                }
                this._animate(dragingRect, this.draging);
                this._animate(targetRect, target);
            }
        },
        onDropEnd(e, endIndex) {
            console.log('ondragEnd', e, endIndex);
            let startIndex = e.dataTransfer.getData("index");
            console.log(startIndex, 'to', endIndex)
            e.preventDefault();
            var target = e.target;
            if (target.nodeName === "LI" && target !== this.draging) {
                console.log('this._index(this.draging)', this._index(this.draging))
                var targetRect = target.getBoundingClientRect();
                var dragingRect = this.draging.getBoundingClientRect();
                //_index是实现的获取index              
                if (this._index(this.draging) < this._index(target)) {
                    target.parentNode.insertBefore(this.draging, target.nextSibling);
                } else {
                    target.parentNode.insertBefore(this.draging, target);
                }
                this._animate(dragingRect, this.draging);
                this._animate(targetRect, target);

                let params = JSON.parse(JSON.stringify(this.list));
                let tmp = params[endIndex];
                this.list[endIndex] = params[startIndex];
                this.list[startIndex] = tmp;
                this.index++;


            }
        },
        _animate(prevRect, target) {
            var ms = 300;

            if (ms) {
                var currentRect = target.getBoundingClientRect();

                if (prevRect.nodeType === 1) {
                    prevRect = prevRect.getBoundingClientRect();
                }

                this._css(target, 'transition', 'none');
                this._css(target, 'transform', 'translate3d(' +
                    (prevRect.left - currentRect.left) + 'px,' +
                    (prevRect.top - currentRect.top) + 'px,0)'
                );

                target.offsetWidth; // 触发重绘
                //放在timeout里面也可以
                // setTimeout(function() {
                //     _css(target, 'transition', 'all ' + ms + 'ms');
                //     _css(target, 'transform', 'translate3d(0,0,0)');
                // }, 0);
                this._css(target, 'transition', 'all ' + ms + 'ms');
                this._css(target, 'transform', 'translate3d(0,0,0)');

                clearTimeout(target.animated);
                let that = this;
                target.animated = setTimeout(function () {
                    that._css(target, 'transition', '');
                    that._css(target, 'transform', '');
                    target.animated = false;
                }, ms);
            }
        },
        _css(el, prop, val) {
            var style = el && el.style;

            if (style) {
                if (val === void 0) {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        val = document.defaultView.getComputedStyle(el, '');
                    } else if (el.currentStyle) {
                        val = el.currentStyle;
                    }

                    return prop === void 0 ? val : val[prop];
                } else {
                    if (!(prop in style)) {
                        prop = '-webkit-' + prop;
                    }

                    style[prop] = val + (typeof val === 'string' ? '' : 'px');
                }
            }
        },
        _index(el) {
            var index = 0;
            if (!el || !el.parentNode) {
                return -1;
            }
            while (el && (el = el.previousElementSibling)) {
                index++;
            }
            return index;
        },
        onDragStart(e, i) {
            console.log('onDragStart', e, i);
            e.dataTransfer.setData("index", i);
            this.draging = e.target;
        }
    },
    mounted() {
        console.log('test');
    }
}
</script>