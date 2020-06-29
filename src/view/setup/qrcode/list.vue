<style lang="less" scoped>
</style>

<template>
    <div class="admin-page">
        <Card class="search_where">
            <Form :model="form" ref="searchForm" :label-width="100">
                <Row :gutter="32">
                    <Col span="6">
                    <FormItem label="二维码名称：">
                        <Input v-model="form.name" placeholder="请输入二维码名称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <FormItem label="关键词：">
                        <Input v-model="form.keyword" placeholder="请输入关键词"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="创建时间：">

                        <DatePicker v-model="form.createTimeStart" type="date" format="yyyy-MM-dd" placeholder="请选择开始时间" style="width: calc(50% - 10px)"></DatePicker>
                        <DatePicker v-model="form.createTimeEnd" type="date" format="yyyy-MM-dd" placeholder="请选择结束时间" style="width: calc(50% - 10px);margin-left:20px"></DatePicker>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12" v-show="false">
                    <FormItem label="所属渠道：" prop="publicIds">
                        <Select v-model="form.publicIds" filterable multiple>
                            <Option value="">全部</Option>
                            <Option v-for="item in option.publicIds" :value="item.publicId" :key="'publicId'+item.publicId" :label="item.name">
                                <span>{{ item.name }}</span>
                                <span style="float:right;color:#ccc">{{ item.typeCn }}</span>
                            </Option>
                        </Select>
                    </FormItem>
                    </Col>

                    <Col span="6">
                    <FormItem label="二维码类型：">
                        <Select v-model="form.type" filterable>
                            <Option v-for="item in dict.WechatQrCodeType" :value="item.dictKey" :key="'searchColumn'+item.dictKey">{{ item.dictValue }}</Option>
                        </Select>
                    </FormItem>
                    </Col>

                    <Col span="18" class="rigth-button">
                    <Button style="margin-left: 10px;" @click="reset">重置</Button>
                    <Button type="primary" style="margin-left: 10px;" @click="search">搜索</Button>
                    </Col>

                </Row>
            </Form>
        </Card>
        <div class="other-button-box">
            <Button type="primary" style="margin-left: 10px;" @click=add>新增</Button>
            <Button type="error" style="margin-left: 10px;" @click=delList()>批量删除</Button>
        </div>
        <Card>
            <div class="table-box">
                <Table stripe :columns="list.columns" :data="list.data" width="calc(100% - 16px)" @on-selection-change="tableChange"></Table>
            </div>
            <div class="page-box">
                <Row>
                    <Col span="24">
                    <Page :total="page.total" :current="page.current" :page-size="page.pageSize" @on-change="changePageCurrent" @on-page-size-change="changeSizeCurrent" show-elevator show-sizer />
                    </Col>
                </Row>
            </div>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
        <ImgViewer ref="ImgViewer">

        </ImgViewer>
        <modelForm ref="modelForm" @success="getList"></modelForm>
        <review ref="review"></review>
    </div>

</template>

<script>
import { mapState } from 'vuex'
import http from '@/api/shuxi-master.js'
import form from './components/form';
import ImgViewer from '@/components/i.vue';
import review from './components/review';


export default {
    components: {
        'modelForm': form,
        'ImgViewer': ImgViewer,
        'review': review
    },
    watch: {

    },
    methods: {

        reset() {
            // let redata=this.$options.data()
            // Object.assign(this.$data.form, redata.form)
            this.form.name = '';
            this.form.keyword = '';
            this.form.createTimeStart = '';
            this.form.createTimeEnd = '';
            this.form.type = '';
        },
        search() {
            this.page.current = 1;
            this.getList();
        },
        changePageCurrent(val) {
            this.page.current = val;
            this.getList();
        },
        changeSizeCurrent(val) {
            this.page.current = 1;
            this.page.pageSize = val;
            this.getList();
        },

        getList() {
            if (this.spinShow) {
                return;
            }
            this.spinShow = true;

            let params = { ...this.form, ...{ pageNum: this.page.current, pageSize: this.page.pageSize } };
            params.createTimeStart = this.$comfun.getDateParams(params.createTimeStart);
            params.createTimeEnd = this.$comfun.getDateParams(params.createTimeEnd);

            http.qrcodeList(params).then(res => {
                this.spinShow = false;
                this.list.data = res.data;
                this.page.total = res.total;

                let imgList = []
                for (let item of res.data) {
                    imgList.push(
                        {
                            src: this.getImgUrl(item.url) + '!fI2aFqNaiGVC.jpg',
                            msrc: this.getImgUrl(item.url) + '!sx-wz-img.jpg',
                            alt: item.publicName,
                            title: item.name,
                            id: item.qrCodeId,
                            w: 1024,
                        },
                    )
                }
                this.imgList = imgList;
            });
        },

        //新增产品型号
        add() {
            this.$refs.modelForm.init({ publicId: this.$route.query.id });
        },

        edit(item) {
            this.$refs.modelForm.edit(item);
        },
        del(item) {

            let params = { qrCodeIds: [item.qrCodeId] };
            http.delQrcodes(params).then(res => {
                if (res && res.code === 0) {
                    this.$Message.success('操作成功')
                    this.getList();
                }
            })

        },
        delList() {
            let data = this.getUserData()
            let params = { 'qrCodeIds': data }
            if (data.length == 0) {
                this.$Message.info('先勾选需要删除的数据')
                return
            }
            this.$Modal.confirm({
                title: '请再次确认',
                content: `<p>确定要删除 ${data.length} 条数据吗？</p>`,
                onOk: () => {
                    this.spinShow = true;
                    http.delQrcodes(params).then(res => {
                        this.spinShow = false;
                        if (res && res.code === 0) {
                            this.$Message.success('操作成功')
                            this.getList();
                            this.userSelData = [];
                        }
                    })
                }
            })
        },
        tableChange(select) {
            this.userSelData = select
        },
        getUserData() {
            let data = []
            for (let item of this.userSelData) {
                data.push(item.qrCodeId)
            }
            return data
        },
        down(item) {
            let a = document.createElement('a');
            a.href = this.getImgUrl(item.url) + '!fI2aFqNaiGVC.jpg';
            a.click();
        },
        getImgUrl(str) {
            let imgUrl = this.$comfun.getImgUrl(str)
            return `${imgUrl}`
        },
        /* 
        图片预览组件
        review(item,index){
            let imgList=[{
                src: this.getImgUrl(item.url)+'!fI2aFqNaiGVC.jpg',
                msrc: this.getImgUrl(item.url)+'!sx-wz-img.jpg',
                alt: item.publicName,
                title: item.name,
                id: item.qrCodeId,
                w: 1024,
            }]
            this.$refs.ImgViewer.show(imgList,0);
        } */
        review(item, index) {
            let imgList = {
                src: this.getImgUrl(item.url),
                msrc: this.getImgUrl(item.url) + '!sx-wz-img.jpg',
                alt: item.publicName,
                title: item.name,
                id: item.qrCodeId,
                w: 1024,
            }
            this.$refs.review.init(imgList)
        },
        getOption() {
            http.channelsList().then((res) => {
                if (res.code === 0) {
                    this.option.publicIds = res.data
                }
            })


        },

    },
    computed: {
        ...mapState(['dict'])
    },
    created() {
        this.getOption();
        this.search();

    },
    data() {
        return {
            spinShow: false,
            form: {
                name: '',
                keyword: '',
                createTimeStart: '',
                createTimeEnd: '',
                publicIds: [this.$route.query.id],
                type: '',
            },
            page: {
                total: 1,
                current: 1,
                pageSize: 20,
            },
            list: {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: '二维码名称',
                        minWidth: 120,
                        key: 'name'
                    },
                    {
                        title: '渠道名称',
                        minWidth: 100,
                        key: 'publicName'
                    },
                    {
                        title: '类型',
                        minWidth: 80,
                        key: 'typeCn'
                    },
                    {
                        title: '编号',
                        minWidth: 80,
                        key: 'codeNum'
                    },
                    {
                        title: '关键词',
                        minWidth: 90,
                        key: 'keyword'
                    },
                    {
                        title: '创建时间',
                        minWidth: 168,
                        key: 'createTime'
                    },

                    {
                        title: '操作',
                        width: 220,
                        fixed: 'right',
                        render: (h, { row, index }) => {

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
                                            this.review(row, index)
                                        }
                                    }
                                }, '预览'),
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

                                h('Poptip',
                                    {
                                        props: {
                                            confirm: true,
                                            transfer: true,
                                            title: `确认要删除${row.name}么?`
                                        },
                                        on: {
                                            'on-ok': () => {
                                                this.del(row)
                                            }
                                        }
                                    },
                                    [h('Button', {
                                        props: {
                                            size: 'small',
                                            type: 'text'
                                        },
                                        style: {
                                            color: 'red'
                                        }
                                    }, '删除')]
                                ),
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
                                            this.down(row);
                                        }
                                    }
                                }, '下载'),

                            ];

                            return h('div', buttonArr);
                        }
                    },

                ],
                data: []
            },
            imgList: [],
            option: {
                channelIds: []
            },
            userSelData: []

        }
    }
}
</script>

<style>
</style>
