

<template>
    <Modal
        v-model="show"
        :title="'编辑数据项-'+data.dictName"
		:mask-closable="false"
		class-name="form"
        width="50%"
    >
        <div class="admin-page">
            
            <div class="other-button-box">
                <Button type="primary"  style="margin-left: 10px;" @click=add>新增</Button> 
            </div>
            <Card>
                <div class="table-box">
                    <Table  stripe :columns="list.columns" :data="list.data" width="calc(100% - 16px)" ></Table>
                </div>
                <!-- <div class="page-box">
                    <Row>
                        <Col span="24">
                            <Page  :total="page.total" :current="page.current" :page-size="page.pageSize"  @on-change="changePageCurrent" @on-page-size-change="changeSizeCurrent" show-elevator show-sizer />
                        </Col>
                    </Row>
                </div> -->
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Card>
            <itemForm ref="itemForm" @success="getList" ></itemForm>
        </div>
    </Modal>
  
</template>

<script>
import { mapState } from 'vuex'
import http from '@/api/shuxi-dict.js'
import itemForm from './formItem';


export default {
    components: {
        'itemForm':itemForm,
    },
    watch:{
       
    },
    methods: {
        init(data){
            console.log('itemlist',data)
            this.data=data;
            this.show=true;
            this.form.dictId=data.dictId;
            console.log(this.form)
            this.search();
        },
        
        reset(){
            let redata=this.$options.data()
            Object.assign(this.$data.form, redata.form)
		},
		search(){
            this.page.current=1;
			this.getList();
		},
		changePageCurrent(val){
			this.page.current=val;
			this.getList();
        },
        changeSizeCurrent(val){
			this.page.current=1;
			this.page.pageSize=val;
			this.getList();
        },
        getList(){
            if(this.spinShow){
                return ;
            }
            this.spinShow=true;
            // let params={...this.form,...{pageNum:this.page.current,pageSize:this.page.pageSize}};
            let params=this.form.dictId
            http.dictsList(params).then(res=>{
                this.spinShow=false;
                console.log(res)
                this.list.data=res.data;
                this.page.total=res.total;
			});
        },
       
        //新增产品型号
        add(){
            this.$refs.itemForm.init(this.data);
        },
      
        edit(item){
            console.log(item);
            console.log(this.$refs,'itemlist')
            this.$refs.itemForm.edit(item);
        }, 
        status(item){
            this.spinShow=true;
            let params=item.dictItemId
            if(item.itemStatus=='DISABLED'){
                http.dictsItemEnable(params).then(res=>{
                    this.spinShow=false;
                    if(res.code===0){
                        this.$Message.success('操作成功')
                        this.search();
                    }else{
                        this.$Message.error(res.msg)
                    }
                })
            }else{
                http.dictsItemDisable(params).then(res=>{
                    this.spinShow=false;
                    if(res.code===0){
                        this.$Message.success('操作成功')
                        this.search();
                    }else{
                        this.$Message.error(res.msg)
                    }
                })
                
            }
                    
        }
       
      
    },
    computed: {
        ...mapState(['dict'])
    },
    created(){
        // this.search();
    },
    data(){
        return {
            spinShow:false,
            show:false,
            form:{
                dictId:'',
            },
            data:{},
            page:{
                total:1,
                current:1,
                pageSize:20,
            },
            list:{
                columns: [
                    {
                        title: '字典名称',
                        minWidth:120,
                        key: 'dictValue'
                    },
                    {
                        title: '编码',
                        minWidth:100,
                        key: 'dictKey'
                    },
                    {
                        title: '字典项描述',
                        minWidth:120,
                        key: 'dictDesc'
                    },
                    {
                        title: '排序',
                        minWidth:120,
                        key: 'dictSort'
                    },
                   
                    
                    
                    {
                        title: '操作',
                        width:130,
                        fixed: 'right',
                        render: (h, {row,index}) => {

                            const buttonArr = [
                                
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'text'
                                    },
                                    style: {
                                        color: '#348eed'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(row);
                                        }
                                    }
                                }, '编辑'),
                                
                            ];
                            let txt='禁用',color="red";
                            if(row.itemStatus=='DISABLED'){
                                txt='启用';color="#348eed";
                            }
                            buttonArr.push(
                                h('Button', {
                                    props: {
                                        size: 'small',
                                        type: 'text'
                                    },
                                    style: {
                                        color: color
                                    },
                                    on: {
                                        click: () => {
                                            this.status(row);
                                        }
                                    }
                                }, txt),
                            )

                            return h('div', buttonArr);
                        }
                    },
                    
                ],
                data:[]
            },
            imgList:[],
           
        }
    }
}
</script>

<style>

</style>
