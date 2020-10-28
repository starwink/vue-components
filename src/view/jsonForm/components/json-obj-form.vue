<template>
    <div>
        <jsonObjItem ref="jsonObjItem" className="json-obj-item2" :jsonData="json" :key="key" @changeKey="changeKey" @editJson="editJson">
            <!-- <div slot="first" slot-scope="data">
                <p>_3:{{data.data.label}}:</p>
            </div> -->
        </jsonObjItem>
        <jsonEditorModal ref="jsonEditorModal" @success="upDateJson"></jsonEditorModal>

        <Button @click="save">save</Button>
    </div>
</template>
<script>
import jsonObjItem from './json-obj-item.vue';
import jsonEditorModal from './jsonEditorModal.vue';
import mixin from './mixin'
import http from '@/api/demo.js'

export default {
    name: 'jsonObjForm',
    mixins: [mixin],
    props: {
        jsonData: {
            type: Array || Object || String,
            default: () => { }
        }
    },
    components: {
        jsonObjItem, jsonEditorModal
    },
    data() {

        return {
            json: [],
            key: '',
        }
    },
    methods: {
        changeKey() {

            this.key = this.$helper.getNewUuid();
            console.log(1, this.key)
        },
        editJson(data) {
            console.log('form', data)
            this.$refs.jsonEditorModal.init(data);
        },
        save() {
            console.log('json', this.json)
        },
        log(data) {
            console.log('data', typeof data, data);

            return data;
        },
        upDateJson(data) {
            console.log('eee', data)
            console.log('this.json', this.json)
            // this.json=data;
            this.changeKey();
        },

        init(data) {
            this.key = this.$helper.getNewUuid();
            if (typeof data == 'string' || data == '') {
                this.json = []
            } else {
                this.json = data;
            }
            console.log('init',this.json)
        }
    },
    mounted() {
        this.key = this.$helper.getNewUuid();
        if (typeof this.jsonData == 'string' || this.jsonData == '') {
            this.json = []
        } else {
            this.json = this.jsonData;
        }
        console.log('-fds', this.json)

    }

}
</script>
<style lang="scss" >
.json-obj-item2 {
    .item-info {
        // display: inline-block;
        .first-child {
            width: 40px;
            display: inline-block;
            text-align: center;
        }
        span {
            display: inline-block;
            &:first-child {
                width: 40px;
            }
            &:nth-child(4) {
                width: 100px;
            }
            &:nth-child(2),
            &:nth-child(5) {
                width: 30%;
            }
            &:nth-child(6) {
                width: calc(40% - 220px);
            }
            &:nth-child(7) {
                width: 80px;
                font-size: 18px;
                text-align: center;
            }
        }
    }
}
</style>