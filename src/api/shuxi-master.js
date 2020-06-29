import axios from '@/libs/api.request-json.js'
import config from '@/config'
// const projectName = 'shuxi-master-zxzd-test'
const projectName = config.projectName1;

const server = {
    login: (params) => {
        return axios.request({
            url: `/${projectName}/login/login`,
            data: params,
            method: 'POST'
        })
    },

    subLogin(params) {
        return axios.request({
            url: `/${projectName}/login/tokenLogin`,
            data: params,
            method: 'POST'
        })
    },

    logout: () => {
        return axios.request({
            url: `/${projectName}/login/logout`,
            //   data: params,
            method: 'POST'
        })
    },

    // 通过header来验证用户信息
    power: () => {
        return axios.request({
            url: `/${projectName}/res/resKeys`,
            method: 'GET'
        })
    },

    // 新增文章
    addArticle: (params) => {
        return axios.request({
            url: `/${projectName}/articles/addArticle`,
            data: params,
            method: 'POST'
        })
    },
    // 更新文章
    updateArticle: (params) => {
        return axios.request({
            url: `/${projectName}/articles/article`,
            data: params,
            method: 'PUT'
        })
    },
    detailArtice: (id) => {
        return axios.request({
            url: `/${projectName}/articles/details/${id}`,
            // data: params,
            method: 'GET'
        })
    },
    delArticle: (params) => {
        return axios.request({
            url: `/${projectName}/articles/delete`,
            data: params,
            method: 'DELETE'
        })
    },

    sendArticle: (params) => {
        return axios.request({
            url: `/${projectName}/articles/sendArticle`,
            data: params,
            method: 'POST'
        })
    },
    list: (params) => {
        return axios.request({
            url: `/${projectName}/articles/list`,
            data: params,
            method: 'POST'
        })
    },
    // reviewMp: (id) => {
    //     return axios.request({
    //         url: `/${projectName}/articles/wechatPreview/${id}`,
    //         method: 'GET'
    //     })
    // },
    reviewMp: (params) => {
        return axios.request({
            url: `/${projectName}/articles/wechatPreview`,
            data: params,
            method: 'POST'
        })
    },
    reviewH5: (id) => {
        return axios.request({
            url: `/${projectName}/articles/h5Preview/${id}`,
            method: 'GET'
        })
    },
    //发布渠道
    channelsList: () => {
        return axios.request({
            url: `/${projectName}/channels/list`,
            method: 'GET'
        })
    },
    //服务号/订阅号
    channelsServiceOrSubList: () => {
        return axios.request({
            url: `/${projectName}/channels/serviceOrSubList`,
            method: 'GET'
        })
    },

    //获取项目渠道列表
    channelsListByType: (type) => {
        return axios.request({
            url: `/${projectName}/channels/listByType/${type}`,
            method: 'GET'
        })
    },
    //获取二维码公共列表
    publictList: (params) => {
        return axios.request({
            url: `/${projectName}/qrcode/publictList`,
            data: params,
            method: 'POST'
        })
    },
    //****废弃VVVVVVVVVVVVVVVVVVVV******/
    //素材列表
    localMaterialList: (params) => {
        return axios.request({
            url: `/${projectName}/localMaterial/list`,
            data: params,
            method: 'POST'
        })
    },

    //新增素材
    AddLocalMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/localMaterial/add`,
            data: params,
            method: 'POST'
        })
    },
    //修改素材
    UpdateLocalMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/localMaterial/update`,
            data: params,
            method: 'put'
        })
    },
    //素材详情
    detailLocalMaterial: (id) => {
        return axios.request({
            url: `/${projectName}/localMaterial/details/${id}`,
            method: 'GET'
        })
    },
    //删除素材
    delLocalMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/localMaterial/delete/`,
            data: params,
            method: 'DELETE'
        })
    },

    //****废弃^^^^^^^^^^^^^^^^^^******/
    //素材列表
    wechatMaterialList: (params) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/list`,
            data: params,
            method: 'POST'
        })
    },
    //删除素材
    delWechatMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/delete`,
            data: params,
            method: 'POST'
        })
    },

    //渠道可上传素材
    getRemainingUpload: (publicId) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/getRemainingUpload/${publicId}`,
            method: 'GET'
        })
    },

    //新增素材
    addWechatMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/add`,
            data: params,
            method: 'POST'
        })
    },
    //修改素材
    updateLocalMaterial: (params) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/update`,
            data: params,
            method: 'POST'
        })
    },
    //素材详情
    detailWechatMaterial: (id) => {
        return axios.request({
            url: `/${projectName}/wechatMaterial/details/${id}`,
            method: 'GET'
        })
    },



    //发布列表
    articleIssueList: (params) => {
        return axios.request({
            url: `/${projectName}/articleIssue/list`,
            data: params,
            method: 'POST'
        })
    },
    //取消发布
    cancelSend: (id) => {
        return axios.request({
            url: `/${projectName}/articleIssue/cancelSendByArticleSendId/${id}`,
            method: 'GET'
        })
    },
    //发布预览
    reviewArticleIssue: (params) => {
        return axios.request({
            url: `/${projectName}/articleIssue/previewArtHsByTypeAndId`,
            data: params,
            method: 'POST'
        })
    },
    //设置发布时间
    setSendTime: (params) => {
        return axios.request({
            url: `/${projectName}/articleIssue/setSendTimeArticleSendId`,
            data: params,
            method: 'POST'
        })
    },
    //查看发布历史
    getArticleSendDetail: (id) => {
        return axios.request({
            url: `/${projectName}/articleIssue/getArticleByArticleSendId/${id}`,
            method: 'GET'
        })
    },

    //二维码列表
    qrcodeList: (params) => {
        return axios.request({
            url: `/${projectName}/qrcode/list`,
            data: params,
            method: 'POST'
        })
    },
    delQrcodes: (params) => {
        return axios.request({
            url: `/${projectName}/qrcode/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    addQrcode: (params) => {
        return axios.request({
            url: `/${projectName}/qrcode/add`,
            data: params,
            method: 'POST'
        })
    },
    updateQrcode: (params) => {
        return axios.request({
            url: `/${projectName}/qrcode/update`,
            data: params,
            method: 'PUT'
        })
    },
    detailQrcode: (id) => {
        return axios.request({
            url: `/${projectName}/qrcode/details/${id}`,
            method: 'GET'
        })
    },

    //获取服务号数据
    channelsServiceList: () => {
        return axios.request({
            url: `/${projectName}/channels/serviceList`,
            method: 'GET'
        })
    },
    //获取小程序数据
    channelsSmallProgramList: () => {
        return axios.request({
            url: `/${projectName}/channels/smallProgramList`,
            method: 'GET'
        })
    },

    //消息模板列表
    templateMessageList: (params) => {
        return axios.request({
            url: `/${projectName}/templateMessage/list`,
            data: params,
            method: 'POST'
        })
    },

    delTemplateMessage: (params) => { //msgExampleIds
        return axios.request({
            url: `/${projectName}/templateMessage/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    addTemplateMessage: (params) => {
        return axios.request({
            url: `/${projectName}/templateMessage/add`,
            data: params,
            method: 'POST'
        })
    },

    updateTemplateMessage: (params) => {
        return axios.request({
            url: `/${projectName}/templateMessage/update`,
            data: params,
            method: 'PUT'
        })
    },
    //消息预览
    wechatReviewTemplate: (id) => {
        return axios.request({
            url: `/${projectName}/templateMessage/wechatPreview/${id}`,
            method: 'GET'
        })
    },
    //实例详情
    detailTemplateMessage: (id) => {
        return axios.request({
            url: `/${projectName}/templateMessage/details/${id}`,
            method: 'GET'
        })
    },
    pushTemplateMessage: (params) => {
        return axios.request({
            url: `/${projectName}/templateMessage/send`,
            data: params,
            method: 'POST'
        })
    },

    //模板消息填写内容字段
    msgInfoList: (id) => {
        return axios.request({
            url: `/${projectName}/msgInfo/list/${id}`,
            method: 'GET'
        })
    },

    //自定义消息
    customMessageList: (params) => {
        return axios.request({
            url: `/${projectName}/customMessage/list`,
            data: params,
            method: 'POST'
        })
    },

    delCustomMessage: (params) => { //msgExampleIds
        return axios.request({
            url: `/${projectName}/customMessage/delete`,
            data: params,
            method: 'DELETE'
        })
    },

    addCustomMessage: (params) => {
        return axios.request({
            url: `/${projectName}/customMessage/add`,
            data: params,
            method: 'POST'
        })
    },

    updateCustomMessage: (params) => {
        return axios.request({
            url: `/${projectName}/customMessage/update`,
            data: params,
            method: 'PUT'
        })
    },

    //实例详情
    detailCustomMessage: (id) => {
        return axios.request({
            url: `/${projectName}/customMessage/details/${id}`,
            method: 'GET'
        })
    },
    //发送自定义消息
    pushCustomMessage: (params) => {
        return axios.request({
            url: `/${projectName}/customMessage/send`,
            data: params,
            method: 'POST'
        })
    },

    //渠道所属人员
    commonUserList: (params) => {
        return axios.request({
            url: `/${projectName}/common/user/list`,
            data: params,
            method: 'POST'
        })
    },
    //分组所属人员
    usergroupUserlist: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/userlist`,
            data: params,
            method: 'POST'
        })
    },

    //补发人员
    reUserList: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/reUserList`,
            data: params,
            method: 'POST'
        })
    },

    //任务列表
    taskIssueList: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/list`,
            data: params,
            method: 'POST'
        })
    },
    addTaskIssue: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/addTask`,
            data: params,
            method: 'POST'
        })
    },
    editTaskIssue: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/editTask`,
            data: params,
            method: 'POST'
        })
    },
    detailTaskIssue: (taskId) => {
        return axios.request({
            url: `/${projectName}/taskIssue/detailsById/${taskId}`,
            method: 'GET'
        })
    },
    delTaskIssue: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    pushTaskIssue: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/taskIssue`,
            data: params,
            method: 'POST'
        })
    },
    //查看任务完成 情况 
    viewDetails: (params) => {
        return axios.request({
            url: `/${projectName}/taskIssue/viewDetails`,
            data: params,
            method: 'POST'
        })
    },
    //个人完成情况
    finishDetails: (id) => {
        return axios.request({
            url: `/${projectName}/taskIssue/finishDetails/${id}`,
            method: 'GET'
        })
    },

    //历史消息列表
    msgHistoryList: (params) => {
        return axios.request({
            url: `/${projectName}/msgHistory/list`,
            data: params,
            method: 'POST'
        })
    },
    delMsgHistory: (params) => {
        return axios.request({
            url: `/${projectName}/msgHistory/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    detailMsgHistory: (id) => {
        return axios.request({
            url: `/${projectName}/msgHistory/details/${id}`,
            method: 'GET'
        })
    },

    getSendProgress: (id) => {
        return axios.request({
            url: `/${projectName}/articles/getSendProgress/${id}`,
            method: 'GET'
        })
    },
    //获取新的轮循
    getNewRoundRobinId: () => {
        return axios.request({
            url: `/${projectName}/articles/getNewRoundRobinId`,
            method: 'GET'
        })
    },
    //获取正在的轮循
    getOldRoundRobinId: () => {
        return axios.request({
            url: `/${projectName}/articles/getOldRoundRobinId`,
            method: 'GET'
        })
    },

    //获取二维码编号
    getQrcodeNum: (publicId) => {
        return axios.request({
            url: `/${projectName}/qrcode/getNum/${publicId}`,
            method: 'GET'
        })
    },

    deleteArticleIssue: (params) => {
        return axios.request({
            url: `/${projectName}/articleIssue/delete`,
            data: params,
            method: 'delete'
        })
    },
    //员工管理列表
    getAuserList: (params) => {
        return axios.request({
            url: `/${projectName}/auser/list`,
            data: params,
            method: 'POST'
        })
    },




    addAuser: (params) => {
        return axios.request({
            url: `/${projectName}/auser/add`,
            data: params,
            method: 'POST'
        })
    },
    editAuser: (params) => {
        return axios.request({
            url: `/${projectName}/auser/update`,
            data: params,
            method: 'PUT'
        })
    },
    detailAuser: (auserId) => {
        return axios.request({
            url: `/${projectName}/auser/details/${auserId}`,
            method: 'GET'
        })
    },
    delAuser: (params) => {
        return axios.request({
            url: `/${projectName}/auser/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    //重置密码
    resetPassword: (auserId) => {
        return axios.request({
            url: `/${projectName}/auser/resetPassword/${auserId}`,
            // data: params,
            method: 'PUT'
        })
    },

    //修改密码
    editPassword: (params) => {
        return axios.request({
            url: `/${projectName}/account/password`,
            data: params,
            method: 'PUT'
        })
    },
    //获取用户权限
    getRes: (auserId) => {
        return axios.request({
            url: `/${projectName}/res/auserRes/${auserId}`,
            method: 'GET'
        })
    },
    //查询用户所有权限
    getUserRes: () => {
        return axios.request({
            url: `/${projectName}/res/resKeys`,
            method: 'GET'
        })
    },
    //查询用户信息
    getUserAccount: () => {
        return axios.request({
            url: `/${projectName}/account/account`,
            method: 'GET'
        })
    },
    //修改用户权限
    updateAuserRes: (params) => {
        return axios.request({
            url: `/${projectName}/res/updateAuserRes`,
            data: params,
            method: 'PUT'
        })
    },

    //员工渠道绑定列表
    bindingAuser: (auserId) => {
        return axios.request({
            url: `/${projectName}/auser/binding/${auserId}`,
            method: 'GET'
        })
    },
    //绑定渠道
    bindingPassword: (mappingId) => {
        return axios.request({
            url: `/${projectName}/auser/bindingPassword/${mappingId}`,
            method: 'GET'
        })
    },




    //省份列表
    getProvinceList: () => {
        return axios.request({
            url: `/${projectName}/common/address/provinceList`,
            data: {},
            method: 'GET'
        })
    },
    //城市列表
    getCityList: (id) => {
        return axios.request({
            url: `/${projectName}/common/address/cityList/${id}`,
            method: 'get'
        })
    },

    //区域列表
    getRegionList: (id) => {
        return axios.request({
            url: `/${projectName}/common/address/regionList/${id}`,
            method: 'get'
        })
    },
    //街道列表
    getTownStreetList: (id) => {
        return axios.request({
            url: `/${projectName}/common/address/townStreetList/${id}`,
            method: 'get'
        })
    },
    //村列表
    getVillageList: (id) => {
        return axios.request({
            url: `/${projectName}/common/address/villageList/${id}`,
            method: 'get'
        })
    },



    //渠道列表
    getChannelsList: (params) => {
        return axios.request({
            url: `/${projectName}/channels/publicList`,
            data: params,
            method: 'POST'
        })
    },
    //删除渠道
    delChannels: (params) => {
        return axios.request({
            url: `/${projectName}/channels/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    //启用渠道
    startChannels: (params) => {
        return axios.request({
            url: `/${projectName}/channels/start`,
            data: params,
            method: 'DELETE'
        })
    },
    //渠道详情
    detailChannel: (id) => {
        return axios.request({
            url: `/${projectName}/channels/details/${id}`,
            method: 'GET'
        })
    },
    //修改渠道
    editChannel: (params) => {
        return axios.request({
            url: `/${projectName}/channels/update`,
            data: params,
            method: 'PUT'
        })
    },

    //根据渠道id查询微信标签
    getWechatlabelList: (id) => {
        return axios.request({
            url: `/${projectName}/wechatlabel/list/${id}`,
            // data: {},
            method: 'get'
        })
    },

    //粉丝管理列表
    getFuserList: (params) => {
        return axios.request({
            url: `/${projectName}/fuser/list`,
            data: params,
            method: 'POST'
        })
    },


    editFuser: (params) => {
        return axios.request({
            url: `/${projectName}/fuser/update`,
            data: params,
            method: 'PUT'
        })
    },
    detailFuser: (id) => {
        return axios.request({
            url: `/${projectName}/fuser/details/${id}`,
            method: 'GET'
        })
    },
    delFuser: (params) => {
        return axios.request({
            url: `/${projectName}/fuser/delete`,
            data: params,
            method: 'PUT'
        })
    },
    // fuser/deleteLabel

    //删除粉丝标签
    deleteLabel: (params) => {
        return axios.request({
            url: `/${projectName}/fuser/deleteLabel`,
            data: params,
            method: 'POST'
        })
    },
    //添加粉丝标签
    addLabel: (params) => {
        return axios.request({
            url: `/${projectName}/fuser/addLabel`,
            data: params,
            method: 'POST'
        })
    },

    //新增微信标签
    addWechatlabel: (params) => {
        return axios.request({
            url: `/${projectName}/wechatlabel/add`,
            data: params,
            method: 'POST'
        })
    },
    //同步微信标签
    refreshWechatlabel: (publicId) => {
        return axios.request({
            url: `/${projectName}/wechatlabel/refresh/${publicId}`,
            method: 'GET'
        })
    },






    //刷新粉丝信息
    refreshFuser: () => {
        return axios.request({
            url: `/${projectName}/fuser/refresh`,
            method: 'GET'
        })
    },
    //获取刷新时间
    refreshTimeFuser: () => {
        return axios.request({
            url: `/${projectName}/fuser/refreshTime`,
            method: 'GET'
        })
    },

    //查询标签组
    tagGroupList: (params) => {
        return axios.request({
            url: `/${projectName}/tagGroup/list`,
            data: params,
            method: 'POST'
        })
    },


    //标签组详情
    tagGroupDetails: (tagGroupId) => {
        return axios.request({
            url: `/${projectName}/tagGroup/details/${tagGroupId}`,
            method: 'GET'
        })
    },

    //标签列表
    tagList: (params) => {
        return axios.request({
            url: `/${projectName}/tag/list`,
            data: params,
            method: 'POST'
        })
    },

    //标签组详情
    tagDetails: (tagId) => {
        return axios.request({
            url: `/${projectName}/tag/details/${tagId}`,
            method: 'GET'
        })
    },

    addTag: (params) => {
        return axios.request({
            url: `/${projectName}/tag/addTag`,
            data: params,
            method: 'POST'
        })
    },
    editTag: (params) => {
        return axios.request({
            url: `/${projectName}/tag/update`,
            data: params,
            method: 'PUT'
        })
    },
    delTag: (params) => {
        return axios.request({
            url: `/${projectName}/tag/delete`,
            data: params,
            method: 'DELETE'
        })
    },

    //标签组结构树
    getTagGroupList: (tagGroupId) => {
        if (tagGroupId == void 0 || tagGroupId == '') {
            tagGroupId = 'all';
        }
        return axios.request({
            url: `/${projectName}/tag/getTagGroupList/${tagGroupId}`,
            // url: `/${projectName}/tag/getTagGroupList`,
            method: 'GET'
        })
    },

    //栏目接口
    getTreeColumns: (params) => {
        return axios.request({
            url: `/${projectName}/columns/treeColumns`,
            data: params,
            method: 'POST'
        })
    },
    //获取所有栏目
    getAllColumns: (params) => {
        return axios.request({
            url: `/${projectName}/columns/allColumns`,
            data: params,
            method: 'POST'
        })
    },


    //发布审核内容栏目树形结构
    userArticlTreeColumns: (params) => {
        return axios.request({
            url: `/${projectName}/columns/userArticlTreeColumns`,
            data: params,
            method: 'POST'
        })
    },


    //发送小程序文章
    sendArticleForSmallProgram: (params) => {
        return axios.request({
            url: `/${projectName}/articles/sendSmallProgram`,
            data: params,
            method: 'POST'
        })
    },

    //推荐列表
    recommendArticlesList: (params) => {
        return axios.request({
            url: `/${projectName}/recommendArticles/recommendArticles`,
            data: params,
            method: 'POST'
        })
    },

    //小程序文章列表
    smallProgramArticlesList: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/list`,
            data: params,
            method: 'POST'
        })
    },

    //历史文章详情
    smallProgramArticlesDetail: (articleId) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/details/${articleId}`,
            method: 'GET'
        })
    },
    //修改历史文章信息
    editSmallProgramArticlesDetail: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/smallProgramArticle`,
            data: params,
            method: 'PUT'
        })
    },

    //取消置顶
    cancelTopForSmallProgram: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/cancelTop`,
            data: params,
            method: 'POST'
        })
    },
    //取消热门
    cancelPopularForSmallProgram: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/cancelPopular`,
            data: params,
            method: 'POST'
        })
    },
    //查询排序信息
    sortPCInfo: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/sortInfo`,
            data: params,
            method: 'POST'
        })
    },
    sortSPInfo: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/sortInfo`,
            data: params,
            method: 'POST'
        })
    },
    //修改排序
    updateSort: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/updateSort`,
            data: params,
            method: 'POST'
        })
    },
    //
    userArticlesPC: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/updateSort`,
            data: params,
            method: 'POST'
        })
    },
    //推荐文章
    setRecommend: (params) => {
        return axios.request({
            url: `/${projectName}/recommendArticles/setRecommend`,
            data: params,
            method: 'POST'
        })
    },
    //取消文章推荐
    cancelRecommend: (params) => {
        return axios.request({
            url: `/${projectName}/recommendArticles/cancelRecommend`,
            data: params,
            method: 'POST'
        })
    },
    //取消广告
    cancelAdvert: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/cancelAdvert`,
            data: params,
            method: 'POST'
        })
    },
    //删除文章
    delSmallProgramArticles: (params) => {
        return axios.request({
            url: `/${projectName}/smallProgramArticles/delete`,
            data: params,
            method: 'DELETE'
        })
    },


    //小程序内容列表
    userArticlesPCList: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/list`,
            data: params,
            method: 'POST'
        })
    },
    //内容审核详情
    userArticlesPCDetail: (articleId) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/details/${articleId}`,
            method: 'GET'
        })
    },
    //通过
    userArticlesPCPass: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/pass`,
            data: params,
            method: 'POST'
        })
    },
    //驳回
    userArticlesPCReject: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/reject`,
            data: params,
            method: 'POST'
        })
    },
    //删除
    delUserArticlesPC: (params) => {
        return axios.request({
            url: `/${projectName}/userArticlesPC/delete`,
            data: params,
            method: 'DELETE'
        })
    },

    //会员列表
    memberList: (params) => {
        return axios.request({
            url: `/${projectName}/member/list`,
            data: params,
            method: 'POST'
        })
    },
    memberDetail: (userId) => {
        return axios.request({
            url: `/${projectName}/member/details/${userId}`,
            method: 'GET'
        })
    },

    addMember: (params) => {
        return axios.request({
            url: `/${projectName}/member/add`,
            data: params,
            method: 'POST'
        })
    },
    editMember: (params) => {
        return axios.request({
            url: `/${projectName}/member/update`,
            data: params,
            method: 'PUT'
        })
    },
    delMember: (params) => {
        return axios.request({
            url: `/${projectName}/member/deleteList`,
            data: params,
            method: 'DELETE'
        })
    },
    // 分组列表
    userGroupList: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/list`,
            data: params,
            method: 'post'
        })
    },
    // 新增分组
    addUserGroup: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/add`,
            data: params,
            method: 'post'
        })
    },
    // 修改分组
    editUserGroup: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/update`,
            data: params,
            method: 'put'
        })
    },

    detailUserGroup: (id) => {
        return axios.request({
            url: `/${projectName}/usergroup/details/${id}`,
            // data:params,
            method: 'get'
        })
    },

    delUserGroup: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/deletelist`,
            data: params,
            method: 'delete'
        })
    },

    stateUserGroup: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/updatestate`,
            data: params,
            method: 'PUT'
        })
    },

    //分组用户信息
    getGroupuser: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/groupuser`,
            data: params,
            method: 'POST'
        })
    },

    //分组选项
    getGroupList: (params) => {
        return axios.request({
            url: `/${projectName}/usergroup/grouplist`,
            data: params,
            method: 'POST'
        })
    },


    getUserBindState: (phone) => {
        return axios.request({
            url: `/${projectName}/auser/bindstate/${phone}`,
            method: 'GET'
        })
    },
    postUserAddmember: (params) => {
        return axios.request({
            url: `/${projectName}/auser/addmember`,
            data: params,
            method: 'POST'
        })
    },
    userBindmember: (phone) => {
        return axios.request({
            url: `/${projectName}/auser/bindmember/${phone}`
        })
    },
    //组织架构标签树
    getOrgTagGroupList: () => {
        return axios.request({
            url: `/${projectName}/tagOrg/getOrgTagGroupList`,
            method: 'GET'
        })
    },
    getOrgTagGroupListAndTagMappingId: () => {
        return axios.request({
            url: `/${projectName}/tagOrg/getOrgTagGroupListAndTagMappingId`,
            method: 'GET'
        })
    },
    getOrgTagList: () => {
        return axios.request({
            url: `/${projectName}/tagOrg/orgTagList`,
            method: 'GET'
        })
    },
    //组织标签信息 
    getOrgTypefoByTagId: (tagId) => {
        if (!tagId) { return; }
        return axios.request({
            url: `/${projectName}/tagOrg/getOrgTypefoByTagId/${tagId}`,
            method: 'GET'
        })
    },
    //通过标签id 组织标签信息 
    getDetailsByTagId: (tagId) => {
        return axios.request({
            url: `/${projectName}/ent/detailsByTagId/${tagId}`,
            method: 'GET'
        })
    },
    getParentTag: (tagId) => {
        return axios.request({
            url: `/${projectName}/tag/getParentTag/${tagId}`,
            method: 'GET'
        })
    },
    // //企业信息 - 弃用
    getEntInfoByEntId: (tagId) => {
        return axios.request({
            url: `/${projectName}/tagOrg/getEntInfoByEntId/${tagId}`,
            method: 'GET'
        })
    },
    //根据标签ID查询下属组织
    orgOrgInfolist: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/orgOrgInfolist`,
            data: params,
            method: 'POST'
        })
    },
    //组织下属人员
    orgUserlist: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/orgUserlist`,
            data: params,
            method: 'POST'
        })
    },
    //组织新增人员
    addTagUserInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/addTagUserInfo`,
            data: params,
            method: 'POST'
        })
    },
    //组织修改人员
    updateOrgUserInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/updateOrgUserInfo`,
            data: params,
            method: 'PUT'
        })
    },
    deleteOrgUserInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/deleteOrgUserInfo`,
            data: params,
            method: 'DELETE'
        })
    },
    //组织架构管理人员删除
    deleteOrgUserInfoMapping: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/deleteOrgUserInfoMapping`,
            data: params,
            method: 'DELETE'
        })
    },

    //组织新增企业
    addTagEntInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/addTagEntInfo`,
            data: params,
            method: 'POST'
        })
    },
    //组织修改企业
    updateEntInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/updateEntInfo`,
            data: params,
            method: 'PUT'
        })
    },
    deleteEntInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/deleteEntInfo`,
            data: params,
            method: 'DELETE'
        })
    },

    deleteOrgInfo: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/del`,
            data: params,
            method: 'DELETE'
        })
    },

    //岗位树
    getPostTagGroupList: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/getPostTagGroupList`,
            data: params,
            method: 'GET'
        })
    },
    //设置人员岗位
    updateOrgUserInfoPost: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/updateOrgUserInfoPost`,
            data: params,
            method: 'PUT'
        })
    },
    //新增组织标签
    addTagAndTagOrgMapping: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/addTagAndTagOrgMapping`,
            data: params,
            method: 'POST'
        })
    },
    deleteTagOrg: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/delete`,
            data: params,
            method: 'DELETE'
        })
    },
    //企业信息列表
    entList: (params) => {
        return axios.request({
            url: `/${projectName}/ent/list`,
            data: params,
            method: 'post'
        })
    },
    addEnt: (params) => {
        return axios.request({
            url: `/${projectName}/ent/add`,
            data: params,
            method: 'post'
        })
    },
    editEnt: (params) => {
        return axios.request({
            url: `/${projectName}/ent/update`,
            data: params,
            method: 'put'
        })
    },


    detailEnt: (id) => {
        return axios.request({
            url: `/${projectName}/ent/details/${id}`,
            method: 'get'
        })
    },
    delEnt: (params) => {
        return axios.request({
            url: `/${projectName}/ent/del`,
            data: params,
            method: 'delete'
        })
    },

    addOrg: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/addOrg`,
            data: params,
            method: 'post'
        })
    },
    editOrg: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/updateOrg`,
            data: params,
            method: 'put'
        })
    },
    detailOrg: (id) => {
        return axios.request({
            url: `/${projectName}/tagOrg/details/${id}`,
            method: 'get'
        })
    },
    delOrg: (params) => {
        return axios.request({
            url: `/${projectName}/tagOrg/del`,
            data: params,
            method: 'delete'
        })
    },

    //企业信息审核列表
    entAuditList: (params) => {
        return axios.request({
            url: `/${projectName}/entAudit/list`,
            data: params,
            method: 'post'
        })
    },
    passEntAudit: (params) => {
        return axios.request({
            url: `/${projectName}/entAudit/pass`,
            data: params,
            method: 'put'
        })
    },
    rejectEntAudit: (params) => {
        return axios.request({
            url: `/${projectName}/entAudit/reject`,
            data: params,
            method: 'put'
        })
    },

    getOrgUserByPhone: (orgUserPhone) => {
        return axios.request({
            url: `/${projectName}/tagOrg/getOrgUserByPhone/${orgUserPhone}`,
            method: 'get'
        })
    },
    taskList(params) {
        return axios.request({
            url: `/${projectName}/task/list`,
            data: params,
            method: 'post'
        })
    },
    publicSmallProGramlist(params) { // 渠道列表 小程序渠道管理列表
        return axios.request({
            url: `${projectName}/channels/publicSmallProGramlist`,
            data: params,
            method: 'post'
        })
    },
    taskOrglist() {
        return axios.request({
            url: `/${projectName}/task/orglist`
        })
    },
    taskOrguserList(params) {
        return axios.request({
            url: `/${projectName}/task/orguserlist`,
            data: params,
            method: 'post'
        })
    },
    getMsgInfoList(id) {
        return axios.request({
            url: `/${projectName}/msgInfo/list/${id}`
        })
    },
    taskSaveorUpdate(params) {
        return axios.request({
            url: `/${projectName}/task/saveorupdate`,
            data: params,
            method: 'post'
        })
    },
    getTaskDetails(id) {
        return axios.request({
            url: `/${projectName}/task/details/${id}`
        })
    },
    taskCancel(id) {
        return axios.request({
            url: `/${projectName}/task/cancel/${id}`
        })
    },
    taskReissue(params) {
        return axios.request({
            url: `/${projectName}/task/reissue`,
            data: params,
            method: 'post'
        })
    },
    taskSetSendTime(params) {
        return axios.request({
            url: `/${projectName}/task/setsendtime`,
            data: params,
            method: 'post'
        })
    },
    createEntQrCode(params) { // 渠道列表 小程序渠道管理列表
        return axios.request({
            url: `${projectName}/ent/createEntQrCode`,
            data: params,
            method: 'post'
        })
    },
    createOrgQrCode(params) { // 渠道列表 小程序渠道管理列表
        return axios.request({
            url: `${projectName}/tagOrg/createOrgQrCode`,
            data: params,
            method: 'post'
        })
    },
    taskTrackList(params) {
        return axios.request({
            url: `/${projectName}/task/tracklist`,
            data: params,
            method: 'post'
        })
    },
    //校验手机号码是否存在组织人员
    checkInOrgUser(params) {
        return axios.request({
            url: `${projectName}/orgFuserSuser/checkInOrgUser`,
            data: params,
            method: 'post'
        })
    },
    taskDelete(params) {
        return axios.request({
            url: `/${projectName}/task/delete`,
            data: params,
            method: 'post'
        })
    },
    //绑定服务号认证补全信息
    serviceH5Completion(params) {
        return axios.request({
            url: `${projectName}/orgFuserSuser/serviceH5Completion`,
            data: params,
            method: 'post'
        })
    },
    taskSingletrackList(params) {
        return axios.request({
            url: `/${projectName}/task/singletracklist`,
            data: params,
            method: 'post'
        })
    },
    sendSmscode(params) {
        return axios.request({
            url: `${projectName}/smscode/send`,
            data: params,
            method: 'post'
        })
    },
    taskUsertaskList(params) {
        return axios.request({
            url: `/${projectName}/task/usertasklist`,
            data: params,
            method: 'post'
        })
    },
    enterpriseverified(params) {
        return axios.request({
            url: `${projectName}/smscode/enterpriseverified`,
            data: params,
            method: 'post'
        })
    },
    taskSingleuserTrack(params) {
        return axios.request({
            url: `/${projectName}/task/singleusertrack`,
            data: params,
            method: 'post'
        })
    },
    getPublicDetail(publicId) {
        return axios.request({
            url: `${projectName}/channels/details/${publicId}`,
            data: params,
            method: 'post'
        })
    },
    tagGetOrgUserDetails(params) {
        return axios.request({
            url: `/${projectName}/tagOrg/getOrgUserDetails`,
            data: params,
            method: 'post'
        })
    },
    taskServicetasklist(params) {
        return axios.request({
            url: `/${projectName}/task/servicetasklist`,
            data: params,
            method: 'post'
        })
    },
    //优惠券模板
    discountModelList: (params) => {
        return axios.request({
            url: `/${projectName}/discountModel/list`,
            data: params,
            method: 'post'
        })
    },
    taskSaveorupdateservicetask(params) {
        return axios.request({
            url: `/${projectName}/task/saveorupdateservicetask`,
            data: params,
            method: 'post'
        })
    },
    addDiscountModel: (params) => {
        return axios.request({
            url: `/${projectName}/discountModel/add`,
            data: params,
            method: 'post'
        })
    },
    repairServicelist(params) {
        return axios.request({
            url: `/${projectName}/repair/servicelist`,
            data: params,
            method: 'post'
        })
    },
    editDiscountModel: (params) => {
        return axios.request({
            url: `/${projectName}/discountModel/edit`,
            data: params,
            method: 'post'
        })
    },

    repairDetail(id) {
        return axios.request({
            url: `/${projectName}/repair/detail/${id}`
        })
    },
    taskServicetaskDetail(id) {
        return axios.request({
            url: `/${projectName}/task/servicetaskdetail/${id}`
        })
    },
    taskServicetask(id) {
        return axios.request({
            url: `/${projectName}/task/servicetask/${id}`
        })
    },
    taskExpediting(id) {
        return axios.request({
            url: `/${projectName}/task/expediting/${id}`
        })
    },
    taskServicetaskCancel(id) {
        return axios.request({
            url: `/${projectName}/task/servicetaskcancel/${id}`
        })
    },

    taskServicetaskDel(params) {
        return axios.request({
            url: `/${projectName}/task/servicetaskdel`,
            data: params,
            method: 'post'
        })
    },
    detailDiscountModel: (id) => {
        return axios.request({
            url: `/${projectName}/discountModel/detailsById/${id}`,
            method: 'get'
        })
    },
    delDiscountModel: (params) => {
        return axios.request({
            url: `/${projectName}/discountModel/delete`,
            data: params,
            method: 'delete'
        })
    },
    //已使用
    discountEntityList: (params) => {
        return axios.request({
            url: `/${projectName}/discountEntity/list`,
            data: params,
            method: 'POST'
        })
    },
    //撤回
    recallDiscountEntity: (params) => {
        return axios.request({
            url: `/${projectName}/discountEntity/recall`,
            data: params,
            method: 'POST'
        })
    },
    getDiscountEntityDetail(id) {
        return axios.request({
            url: `${projectName}/discountEntity/detailsById/${id}`,
            method: 'get'
        })
    },
    getDetailList(params) {
        return axios.request({
            url: `${projectName}/discountEntity/detailList`,
            data: params,
            method: 'post'
        })
    },

    taskReturnreason(id) {
        return axios.request({
            url: `/${projectName}/task/returnreason/${id}`
        })
    },
    //优惠券查看
    detailDiscountEntity: (id) => {
        return axios.request({
            url: `/${projectName}/discountEntity/detailsById/${id}`,
            method: 'get'
        })
    },
    activitManageList(params) {
        return axios.request({
            url: `${projectName}/activitManage/list`,
            data: params,
            method: 'post'
        })
    },
    activitManageaddActityManage(params) {
        return axios.request({
            url: `${projectName}/activitManage/addActityManage`,
            data: params,
            method: 'post'
        })
    },
    activitManagePublishActityManage(params) {
        return axios.request({
            url: `${projectName}/activitManage/publishActityManage`,
            data: params,
            method: 'post'
        })
    },

    activitManagedetailsById(id) {
        return axios.request({
            url: `${projectName}/activitManage/detailsById/${id}`
        })
    },
    activitManageDelete(params) {
        return axios.request({
            url: `${projectName}/activitManage/delete`,
            data: params,
            method: 'delete'
        })
    },
    activitEntityEntityList(params) {
        return axios.request({
            url: `${projectName}/activitEntity/entityList`,
            data: params,
            method: 'post'
        })
    },
    activitEntityApplyDetailList(params) {
        return axios.request({
            url: `${projectName}/activitEntity/applyDetailList`,
            data: params,
            method: 'post'
        })
    },
    activitEntityApplyTicketDetailList(params) {
        return axios.request({
            url: `${projectName}/activitEntity/applyTicketDetailList`,
            data: params,
            method: 'post'
        })
    },
    activitEntityApplyTicketDetail(id) {
        return axios.request({
            url: `${projectName}/activitEntity/applyTicketDetail/${id}`
        })
    },
    activitEntityCancelCause(id) {
        return axios.request({
            url: `${projectName}/activitEntity/cancelCause/${id}`
        })
    },
    activitEntityLiveStreamingDetailList(params) {
        return axios.request({
            url: `${projectName}/activitEntity/liveStreamingDetailList`,
            data: params,
            method: 'post'
        })
    },
    activitEntityLiveStreamingDetail(id) {
        return axios.request({
            url: `${projectName}/activitEntity/liveStreamingDetail/${id}`
        })
    },
    activitEntityDelPicture(params) {
        return axios.request({
            url: `${projectName}/activitEntity/delPicture`,
            data: params,
            method: 'post'
        })
    },
    getRepairList(params) {
        return axios.request({
            url: `${projectName}/repair/list`,
            data: params,
            method: 'post'
        })
    },
    activitEntityDelLiveStreaming(params) {
        return axios.request({
            url: `${projectName}/activitEntity/delLiveStreaming`,
            data: params,
            method: 'delete'
        })
    },
    repairDelete: (params) => {
        return axios.request({
            url: `/${projectName}/repair/delete`,
            data: params,
            method: 'delete'
        })
    },
    activitEntityRecallActivitEntity(id) {
        return axios.request({
            url: `${projectName}/activitEntity/recallActivitEntity/${id}`
        })
    },

}


export default server
