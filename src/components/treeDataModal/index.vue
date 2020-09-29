<template>
    <Modal v-model="show" :title="title" :mask-closable="false" width="60">
        <Row>
            <Col :span="24" style="text-align: right;margin-bottom: 14px;">
                <Button type="primary" @click.stop="addItem(data,true)">+</Button>
            </Col>
        </Row>
        <Table row-key="id" :columns="columns" :data="data" border>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="addItem(row)">新增子级</Button>
                <Button type="info" size="small" style="margin-right: 5px" @click="editItem(row)">编辑</Button>
                <Poptip confirm transfer placement="top-end" @on-ok="delTreeItem(row)">
                    <div slot="title">
                        <div>
                            确认删除么?
                        </div>
                    </div>
                    <Button type="error" size="small" style="margin-right: 5px">删除</Button>
                </Poptip>
            </template>
        </Table>
        <div slot="footer">
             <Poptip confirm transfer placement="top-end" @on-ok="del()" style="float: left;">
                    <div slot="title">
                        <div>
                            确认清空么?
                        </div>
                    </div>
                    <Button type="error"  style="margin-right: 5px">清空</Button>
                </Poptip>
            <Button @click.stop="close">取消</Button>
            <Button type="primary" @click.stop="save()">保存</Button>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
        <setLabelModal ref="setLabelModal" @createTreeItem="createTreeItem" @editTreeItem="editTreeItem"></setLabelModal>
    </Modal>
</template>

<script>
//使用tanle tree做数据结构的管理,数据结构上更新清晰
import { v4 as uuidv4 } from 'uuid'
import setLabelModal from './setLabelModal'
export default {
    components:{
        setLabelModal
    },
    props: {
        title: {
            type: String,
            default: 'tree数据管理',
        },
        isInterEdit: { //是否简易编译模式(内部编辑方式)
            type: Boolean,
            default: true,
        },
        columnsLabel: { //是否简易编译模式(内部编辑方式)
            type: String,
            default: 'label',
        }
    },
    data() {
        return {
            show: false,
            spinShow: false,
            data: [
                // {
                //     children: [],
                //     id: "2448c5d61791471eb361e412b94f5e31",
                //     label: "未设置",
                //     _showChildren:true
                // }
            ],
            addObj:{},
            columns: [
                {
                    title: '选择项',
                    key: 'label',
                    tree: true,
                    display: 'inline-block'
                },
                {
                    title: '操作',
                    width:240,
                    slot: 'action'
                }

            ],
        }
    },
    methods: {
        init(data) {
            Object.assign(this.$data, this.$options.data());
            this.show = true;
            this.data=data;
        },
        close() {
            this.show=false;
        },
        // edit(row) {
        //     console.log('edit', row)
        // },
        del() {
            this.data=[];
        },
        save() {
            this.$emit('success',this.data);
        },
        addItem(row, isBase = false){
            this.addObj={row:row,isBase:isBase};
            if(this.isInterEdit){
                this.$refs.setLabelModal.init()
            }else{
                this.$emit('addItem',isBase);
            }
        },
        editItem(row, isBase = false){
            this.addObj={row:row,isBase:isBase};
            if(this.isInterEdit){
                this.$refs.setLabelModal.edit(row)
            }else{
                this.$emit('addItem',isBase);
            }
        },
        createTreeItem(otherData={}) {
            let {row,isBase}=this.addObj;
            let label = otherData.label || '未设置';
            console.log('label,l',label,otherData)
            let data = {
                id: uuidv4().replace(/-/g, ''),
                label: label,
                children: [],
                _showChildren: true,
                other:otherData
            }
            let currRow;

            if (isBase) {
                if (this.data.length == 0) {
                    this.data = [data]
                } else {
                    this.data.push(data);
                }
            } else {
                currRow = this.data.find(res => {
                    return res.id == row.id;
                })
                if (currRow) {
                    console.log('endifdsafsdfdsf', currRow, typeof children)
                    if (currRow.children == void 0 || currRow.children.length == 0) {
                        currRow.children = [
                            data
                        ]
                    } else {
                        currRow.children.push(data)
                    }
                } else {
                    for (let i = 0; i < this.data.length; i++) {
                        if (currRow == void 0 && this.data[i].children != void 0 && this.data[i].children.length > 0) {
                            currRow = this.getCurrentData(row.id, this.data[i]);
                            if (typeof currRow == 'object') {
                                if (currRow) {
                                    if (currRow.children == void 0 || currRow.children.length == 0) {
                                        currRow.children = [
                                            data
                                        ]
                                    } else {
                                        currRow.children.push(data)
                                    }
                                }
                                return;
                            }
                        }
                    }
                }
            }
        },
        editTreeItem(otherData={}) {
            let {row,isBase}=this.addObj;
            let currRow;
            currRow = this.data.find(res => {
                return res.id == row.id;
            })
            
            if (currRow) {
                currRow.other=otherData;
                currRow.label=otherData.label;
            } else {
                for (let i = 0; i < this.data.length; i++) {
                    if (currRow == void 0 && this.data[i].children != void 0 && this.data[i].children.length > 0) {
                        currRow = this.getCurrentData(row.id, this.data[i]);
                        if (typeof currRow == 'object') {
                            if (currRow) {
                                currRow.other=otherData;
                                currRow.label=otherData.label;
                            }
                            return;
                        }
                    }
                }
            }
        },
        delTreeItem(row) {
            let currRow;
            currRow = this.data.find(res => {
                return res.id == row.id;
            })
            
            if (currRow) {
                currRow['delete']=true;
                this.formatTreeData();
            } else {
                for (let i = 0; i < this.data.length; i++) {
                    if (currRow == void 0 && this.data[i].children != void 0 && this.data[i].children.length > 0) {
                        currRow = this.getCurrentData(row.id, this.data[i]);
                        if (typeof currRow == 'object') {
                            if (currRow) {
                                currRow['delete']=true;
                                this.formatTreeData();
                            }
                            return;
                        }
                    }
                }
            }
            
        },

        //查到当前值所在数据位置后返回,解决row中数据是不绑定的
        getCurrentData(id, data) {
            let retData = false;
            if (typeof data == 'object') {
                let tmp, subTmp;
                tmp = data.id == id ? data : void 0;
                if (tmp == void 0) {
                    for (let i = 0; i < data.children.length; i++) {
                        subTmp = this.getCurrentData(id, data.children[i]);
                        if (typeof subTmp == 'object') {
                            retData = subTmp;
                            break;
                        }
                    }
                } else {
                    retData = tmp;
                }
            }
            return retData;
        },
        formatTreeData(){
            let treeData=this.data;
            let data=[];
            treeData.map(res=>{
                if(res.children!=void 0 && res.children.length>0){
                    res.children=this.formatTreeSubData(res.children);
                }
                if(res!=void 0 &&  res.delete!=true ){
                    data.push(res);
                }
            })
            this.data=data;
        },
        formatTreeSubData(params){
            let treeData=params
           
            let data=[];
            treeData.map(res=>{
                if(res.children!=void 0 && res.children.length>0){
                    res.children=this.formatTreeSubData(res.children);
                }
                if(res!=void 0 &&  res.delete!=true ){
                    data.push(res);
                }
            })
            return data;
        },
        
    }
}
</script>