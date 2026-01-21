<template>
    <div>
        <transition-group  tag="div" class="container">
            <div 
                class="item" 
                v-for="(item,index) in items" 
                :key="item.key" 
                :style="{background:item.color,width:'80px',height:'80px'}" 
                draggable="true" @dragstart="handleDragStart($event, item)" 
                @dragover.prevent="handleDragOver($event, item)" 
                @dragenter="handleDragEnter($event, item)" 
                @dragend="handleDragEnd($event, item)"
            >
            {{item.key}}
            </div>
        </transition-group>
        <!-- <transition-group  tag="div" class="container">
            <div 
                class="item" 
                v-for="(item,index) in copy" 
                :key="item.key" 
                :style="{background:item.color,width:'80px',height:'80px'}" 
                draggable="true" @dragstart="handleDragStart($event, item)" 
                @dragover.prevent="handleDragOver($event, item)" 
                @dragenter="handleDragEnter($event, item)" 
                @dragend="handleDragEnd($event, item)"
            >
            </div>
        </transition-group> -->
        <p><Button @click="test">test</Button></p>
    </div>
    

</template>
<style lang="scss" scoped>
@import "./drag-tr.scss";
</style>
<script>

export default {
    data() {
        return {
            items: [
                { key: 1, color: '#ffebcc' },
                { key: 2, color: '#ffb86c' },
                { key: 3, color: '#f01b2d' },
                { key: 4, color: '#e01b2d' }
            ],
            copy:[
                {key:999,color:'#348eed'},
                {key:998,color:'#ff138d'},
            ],

            dragging: null
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
        handleDragStart(e, item) {
            this.dragging = item;
        },
        handleDragEnd(e, item) {
            this.dragging = null
        },
        //首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver(e) {
            console.log('handleDragOver',e)
            // e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
        },
        handleDragEnter(e, item) {
            console.log('handleDragEnter')
            // e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
            if (item === this.dragging) {
                return
            }
            const newItems = [...this.items]
            console.log(newItems)
            const src = newItems.indexOf(this.dragging)
            const dst = newItems.indexOf(item)

            newItems.splice(dst, 0, ...newItems.splice(src, 1))

            this.items = newItems
        },
        test(){
            console.log(this.items);
        }
    },
    mounted() {
        console.log('test');
    }
}
</script>