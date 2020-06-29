<template>
    <ul class="img-list" ref="previewImgList">
        <slot>
            <li v-for="(item,index) in files" :key="item[opts.url] + index" :class="{'has-input':hasEdit}" >
                <img :src="perfix + item[opts.url] + crop" preview>
                <Input size="small" v-model="item[opts.name]" v-if="hasInput" :disabled="item[opts.disabled]"></Input>
                
                <Select size="small" v-model="item[opts.type]" v-if="hasSelect" :disabled="item[opts.disabled]">
                    <Option v-for="o in typeOptions" :key="o[opts.selectValue]" :label="o[opts.selectLabel]" :value="o[opts.selectValue]"></Option>
                </Select>
                <span class="img-actions">
                    <span class="img-item prev" :class="{'hidden':index==0}" @click="handlePrev(index)" v-if="order">
                        <Icon type="md-arrow-dropleft" style="transform: scale(0.8);" />
                    </span>
                    <span class="img-item preivew" @click="handlePreview(...arguments,index)">
                        <Icon type="md-eye" style="transform: scale(0.8);font-size:32px;" />
                    </span>
                    <span class="img-item next" :class="{'hidden':index== (imgLength-1)}" @click="handleNext(index)" v-if="order">
                        <Icon type="md-arrow-dropright" style="transform: scale(0.8);" />
                    </span>

                    <span class="img-item-delete" @click="handleDelete(index)" v-if="!disabled">
                        <Icon type="ios-trash" />
                    </span>
                </span>
            </li>
        </slot>
        
    </ul>
</template>

<script>
export default {
    name: "imgList",
    data() {
        return {
            files: []
        };
    },
    props: {
        crop: {
            type: String,
            default: '' //@1024w_1c_1e
        },
        previewCrop: {
            type: String,
            default: '' //@1024w_1c_1e
        },
        perfix: {
            type: String,
            default: ''
        },
        value: {
            type: Array,
            default: []
        },
        order: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        deleteTip: {
            type: Boolean,
            default: false
        },
        hasInput: {
            type: Boolean,
            default: false
        },
        hasSelect: {
            type: Boolean,
            default: false
        },
        options:{
            type: Object,
            default() {
                return {};
            }
        },
        typeOptions: {
            type: Array,
            default() {
                return [];
            }
        },

    },
    watch: {
        value(val) {
            this.files = val
        }
    },
    methods: {
        merge(target) {
            for (let i = 1, j = arguments.length; i < j; i++) {
                let source = arguments[i] || {};
                for (let prop in source) {
                    if (source.hasOwnProperty(prop)) {
                        let value = source[prop];
                        if (value !== undefined) {
                            target[prop] = value;
                        }
                    }
                }
            }
            return target;
        },
        handlePreview(e,index) {
           document.querySelectorAll('img[preview]')[index].click();
        },
        handleDelete(index) {
            let imgObj = JSON.parse(JSON.stringify(this.value[index]));

            if (!this.disabled) {
                if (this.deleteTip) {
                    this.$confirm("确定要删除图片吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        this.value.splice(index, 1);
                        this.$emit('delete', index, imgObj);
                    }).catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消删除"
                        });
                    });
                } else {
                    this.value.splice(index, 1);
                    this.$emit('delete', index, imgObj);
                }
            }
        },
        handlePrev(index) {
            this.orderFiles(index, "prev");
        },
        handleNext(index) {
            this.orderFiles(index, "next");
        },
        orderFiles(from, type) {
            let to = type == "prev" ? from - 1 : from + 1;
            let toVal = this.value[from];
            this.$set(this.value, from, this.value[to]);
            this.$set(this.value, to, toVal);
        },
        imgList() {
            var ary = [];

            this.value.forEach(item => {
                ary.push({
                    src: this.perfix + item[this.opts.url],
                    infos: [
                        (item.create_name || "") + "-" + (item.create_dept || ""),
                        "上传时间:" + (item.create_time || "")
                    ]
                });
            });

            return ary;
        },
    },
    computed: {
        
        imgLength() {
            return this.value.length;
        },
        hasEdit() {
            return this.hasInput || this.hasSelect;
        },
        opts() {
            let opts = {
                name: 'name',
                type: 'type',
                selectLabel: 'label',
                selectValue: 'value',
                disabled: 'disabled',
                url: 'url'
            }
            console.log('this.options)',this.options);
            console.log(this.merge({}, opts, this.options));
            return this.merge({}, opts, this.options);
        },

        
    },
    mounted(){
        this.files=this.value;
        this.$previewRefresh();
        console.log(this.value,'valuse')
    }
}
</script>

<style scoped lang="scss">
.img-list {
    li {
        width: 115px;
        height: 115px;
        // float: left;
        position: relative;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 5px;
        overflow: hidden;

        &.has-input {
            height: 146px;
        }
    }
    img {
        width: 100%;
        height: 115px;
        border-radius: 2px;
        cursor: pointer;
        display: block;
        margin-bottom: 2px;
    }
    .img-actions {
        position: absolute;
        width: 100%;
        height: 115px;
        line-height: 115px;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s;
        &:hover {
            opacity: 1;
        }
    }
    .img-item {
        // display: inline-block;
        cursor: pointer;
        &.hidden {
            visibility: hidden;
        }
    }

    .img-item-delete {
        cursor: pointer;
        position: absolute;
        width: 24px;
        height: 24px;
        line-height: 24px;
        background: #ff4949;
        right: 0;
        top: 0;
        border-radius: 0 0 0 5px;
    }
}
</style>

