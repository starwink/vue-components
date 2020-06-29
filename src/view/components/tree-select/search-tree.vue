<template>
    <Modal v-model="show" title="Tree 搜索 单选 Demo" class-name="form get-tag-form">

        <Form ref="form" :label-width="86" @submit.native.prevent>
            <Row :gutter="16">
                <Col span="24">
                <FormItem label="查询：" prop="tagGroupId">
                    <Input v-model="where.keyword" @on-change="changeKeywork" placeholder="输入关键词进行查找"></Input>
                </FormItem>
                </Col>
            </Row>
            <Card dis-hover>
                <Tree ref="tagTree" style="padding:10px 16px;" :data="tagTreeData" @on-select-change="selectTree"></Tree>
            </Card>

        </Form>
        <div slot="footer">
            <Button @click.stop="close">关闭</Button>
            <Button type="primary" @click.stop="save('form')">提交</Button>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </Modal>
</template>
<script>
import http from '@/api/shuxi-master.js'
import { mapState } from 'vuex'

export default {
    components: {
    },
    data() {
        return {
            show: false,
            spinShow: false,
            tagTreeData: [],
            form: {
            },
            where: {
                keyword: ''
            },

            option: {
                tagGroup: [],
                tagIds: [],
            },
            ruleCustom: {
                // name: [
                //   { required: true, message: '请输入', trigger: 'blur' }
                // ],

            },
        }
    },
    methods: {

        init(data) {
            Object.assign(this.$data, this.$options.data());

            this.show = true;
            this.getOption();

        },

        resetForm() {
            this.$refs.form.fields.forEach(function (e) {
                e.resetField()
            })
        },
        close() {
            this.show = false
        },
        save(name) {

            //    let tag=this.$refs.tagTree.getSelectedNodes();
            // this.$emit('success',this.option.tagIds)
            // console.log(this.$refs.tagTree.getSelectedNodes());
            this.$emit('success', this.$refs.tagTree.getSelectedNodes())
            this.close();
        },

        success() {
            this.show = false
            this.$emit('success')
        },
        getOption() {
            this.changeTagGroupId();
        },
        changeTagGroupId() {

            this.tagTreeData = []
            http.getOrgTagGroupList().then(res => {
                if (res.code == 0) {
                    let tagTreeData = this.removeNullItem(res.data)
                    if (tagTreeData[0].children != void 0) {
                        this.tagTreeData = tagTreeData[0].children;
                    }
                }
                // this.page.total = res.total
            })
            //this.tagTreeData=[];
        },
        removeNullItem(obj) {
            let arr = [];
            let key = this.where.keyword;

            if (obj != void 0 && typeof obj == 'object') {
                for (let item of obj) {
                    let data = item;
                    if (data.tagGroupName != void 0) {
                        data.title = data.tagGroupName;
                    } else {
                        data.title = data.tagName;
                    }
                    data.expand = true;
                    data.checked = false;
                    data.selected = false;
                    // data.disabled = false;

                    if (key) {
                        if (data.title.indexOf(key) >= 0 && key != '') {

                            data.expand = true;
                        } else {
                            data.expand = false;
                        }
                    }


                    if (data.children == void 0 || data.children.length == 0) {
                        delete data.children;
                        // data.disabled = false;
                    } else {
                        data.children = this.removeNullItem(data.children);
                        // data.disabled = true;
                        if (!data.expand) {
                            data.expand = this.isTreeExpand(data.children);
                        }
                    }

                    data.render = (h, { root, node, data }) => {

                        let showSelected = data.selected ? 'ivu-tree-title-selected' : '';

                        let strTxt, KeyTxt, endTxt;
                        let titleTxt = [];
                        if (data.title.indexOf(key) >= 0 && key != '') {
                            strTxt = data.title.substr(0, data.title.indexOf(key));
                            titleTxt = [
                                h('span', strTxt),
                                h('strong', {
                                    style: {
                                        'color': 'red'
                                    }
                                }, key),
                                h('span', {                                    
                                    on: {
                                        'click': function (e) {
                                            if (item.node.tagId == data.tagId) {
                                                item.node.selected = !item.node.selected;
                                                data.selected = true;
                                            } else {
                                                item.node.selected = false;
                                            }
                                            // data.selected=!data.selected;
                                        }
                                    }                   
                                },
                                data.title.substr(data.title.indexOf(key) + key.length)),
                            ];
                            data.expand = true;
                        } else {
                            titleTxt = [
                                h('span', {                                    on: {
                                        'click': function (e) {
                                            for (let item of root) {
                                                if (item.node.tagId == data.tagId) {
                                                    // item.node.selected=!item.node.selected;
                                                    // data.selected=true;
                                                } else {
                                                    item.node.selected = false;
                                                }
                                            }
                                            // data.selected=!data.selected;
                                        }
                                    }                                }, data.title)
                            ]
                            data.title
                        }


                        return h('span', {
                            style: {
                                display: 'inline-block',
                                width: '100%'
                            },
                            class: 'ivu-tree-title ' + showSelected,
                            on: {
                                click: () => {
                                    this.selectTreeNode([data], data, node, root)
                                }
                            }
                        }, [
                            h('span', titleTxt),
                        ]
                        );
                    }
                    arr.push(data);
                }
            }
            return arr;
        },
        isTreeExpand(obj) {
            let bool = false;
            for (let item of obj) {
                if (item.expand) {
                    bool = true;
                }
            }
            return bool;

        },
        selectTree(val, e) {
            console.log(val, e);
            // let demo = this.$refs.tagTree.getSelectedNodes()
            let tags = this.option.tagIds;

            for (let item of val) {
                if (item.children == void 0 && item.checked) {
                    if (tags.find(res => { return res.tagId == item.tagId }) == void 0) {
                        tags.push({
                            tagId: item.tagId,
                            title: item.tagName,
                            tagName: item.tagName,
                        })
                    }
                }
            }
            this.option.tagIds = tags;
            console.log(this.option.tagIds, 'this.option.tagIds ');

        },
        selectTreeNode(val, e, node, root) {
            // let demo = this.$refs.tagTree.getSelectedNodes()
            let tags = this.option.tagIds;
            node.node.selected = !node.node.selected;
            for (let item of root) {
                if (item.node.tagId == node.node.tagId && node.node.selected) {
                    item.node.selected = true;
                } else {
                    item.node.selected = false;
                }
            }

            for (let item of val) {
                if (item.children == void 0 && item.checked) {
                    if (tags.find(res => { return res.tagId == item.tagId }) == void 0) {
                        tags.push({
                            tagId: item.tagId,
                            title: item.tagName,
                            tagName: item.tagName,
                        })
                    }
                }
            }
            this.option.tagIds = tags;

        },

        //
        changeKeywork(key) {
            let tagTreeData = JSON.parse(JSON.stringify(this.tagTreeData));
            let k = this.removeNullItem(tagTreeData);
            this.$set(this, 'tagTreeData', k)
        },

    },

    computed: {
        ...mapState(['dict'])
    },
    watch: {

    }
}
</script>
<style lang="scss">
.get-tag-form {
    .ivu-modal-body {
        max-height: 400px;
        overflow-y: auto;
    }

    .ivu-tree-title-selected {
        background-color: #348eed;
        color: #fff;
        &:hover {
            background-color: #348eed;
            color: #fff;
        }
    }
}
</style>
