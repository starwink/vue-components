<template>
    <Modal v-model="show" :title="title"  :mask-closable="false"  width="60">
        <Table  :row-key="rowKey" :columns="columns" :data="data" border>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="text" class="button-color-edit"  style="margin-right: 5px" @click="edit(row)">编辑子集</Button>
                <Poptip confirm transfer placement="top-end" @on-ok="del(row)">
                    <div slot="title">
                        <div>
                            确认删除么?
                        </div>
                    </div>
                    <Button type="text" class="button-color-del"  style="margin-right: 5px">删除</Button>
                </Poptip>
            </template>
        </Table>
    </Modal>
    
</template>
<script>

export default {
    name:'treeTable',
    props:{
        rowKey:{
            type:String,
            default:'id',
        },
        title:{
            type:String,
            default:'tree Table'
        }
        // treeData:{
        //     type:Array,
        //     default:[]
        // },
        // label:{
        //     type:String,
        //     default:'label',
        // }
    },
    data(){
        return {
            show:false,
            columns:[
                {
                    title: '选择项',
                    key: 'label',
                    minWidth: 160,
                    tree: true
                },
                {
                    title: '操作',
                    width: 160,
                    fixed: 'right',
                    slot: 'action',
                },
            ],
            data:[],
        }
    },
    methods:{
        init(data){
            Object.assign(this.$data, this.$options.data());
            this.show = true;
            this.data=[data];
        },
        close() {
            this.show = false
        },
        edit(row){
            console.log('edit',row);
        },
        del(row){
            console.log(row);
        },
    },
    mounted(){
        // this.data=this.treeData;
    }

    
}
</script>