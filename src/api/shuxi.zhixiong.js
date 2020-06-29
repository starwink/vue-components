import axios from '@/libs/api.request-json.js'
import config from '@/config'
const projectName = config.projectName1;
const server = {

    // 列表
    list: (params) => {
        return axios.request({
            url: '/shuxi-zxzd/articles/list',
            data: params,
            method: 'post'
        })
    },

    // 新增
    add: (params) => {
        return axios.request({
            url: '/shuxi-zxzd/articles/article',
            data: params,
            method: 'post'
        })
    },

    // 修改
    edit: (params) => {
        return axios.request({
            url: '/shuxi-zxzd/articles/article',
            data: params,
            method: 'put'
        })
    },

    detail: (id) => {
        return axios.request({
            url: `shuxi-zxzd/articles/${id}`,
            // data:params,
            method: 'get'
        })
    },

    del: (params) => {
        return axios.request({
            url: '/manufacture/wareHouse/delete',
            data: params,
            method: 'post'
        })
    },
    pushMsg: (params) => {
        return axios.request({
            url: '/shuxi-zxzd/wechat/sendMessage',
            data: params,
            method: 'post'
        })
    },
    publicServiceList(params) { // 渠道列表 获取服务号列表
        return axios.request({
            url: `${projectName}/channels/publicServiceList`,
            data: params,
            method: 'post'
        })
    },
    publicSubScriPtionlist(params) { // 渠道列表 订阅号渠道管理列表
        return axios.request({
            url: `${projectName}/channels/publicSubScriPtionlist`,
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
    //渠道启用
    channelsStart: (params) => {
        return axios.request({
            url: `${projectName}/channels/start`,
            data: params,
            method: 'delete'
        })
    },
    //渠道停用
    channelsDelete: (params) => {
        return axios.request({
            url: `${projectName}/channels/delete`,
            data: params,
            method: 'delete'
        })
    },
    //渠道详情
    channelsDetails: (id) => {
        return axios.request({
            url: `${projectName}/channels/details/${id}`,
            method: 'get'
        })
    },
    //渠道编辑
    channelsEdit: (params) => {
        return axios.request({
            url: `${projectName}/channels/update`,
            data: params,
            method: 'put'
        })
    },
    getDataReportList(params) { // 查询数据报表列表
        return axios.request({
            url: `${projectName}/dataAnalysis/dataAnalysisServiceList`,
            data: params,
            method: 'post'
        })
    },
    getAllColumns(params) { // 查询全部栏目
        return axios.request({
            url: `${projectName}/columns/allColumns`,
            data: params,
            method: 'post'
        })
    },
    getTagColumnList(id) { // 标签栏目映射 - 查询栏目下的标签列表
        return axios.request({
            url: `${projectName}/tag/getTagColumnList/${id}`,
        })
    },
    addTagColumnMapping(params) { // 标签栏目映射 - 标签栏目映射关系插入
        return axios.request({
            url: `${projectName}/tag/addTagColumnMapping`,
            data: params,
            method: 'post'
        })
    },
    deleteTagColumnMapping(params) { // 标签栏目映射 - 标签栏目映射删除
        return axios.request({
            url: `${projectName}/tag/deleteTagColumnMapping`,
            data: params,
            method: 'delete'
        })
    },
    updateColumns(params) { // 修改渠道基本信息
        return axios.request({
            url: `${projectName}/columns/updateColumns`,
            data: params,
            method: 'put'
        })
    },

    getDataArticleList(params) { // 查询全部栏目
        return axios.request({
            url: `${projectName}/smallProgramArticles/dataArticleList`,
            data: params,
            method: 'post'
        })
    },

    addDataAnalysis(params) { // 新增数据报表
        return axios.request({
            url: `${projectName}/dataAnalysis/addDataAnalysis`,
            data: params,
            method: 'post'
        })
    },
    deleteDataAnalysis(params) { //删除数据报表
        return axios.request({
            url: `${projectName}/dataAnalysis/deleteDataAnalysis`,
            data: params,
            method: 'delete'
        })
    },
    getDataAnalysisDetails(id) { // 获取报表详情
        return axios.request({
            url: `${projectName}/dataAnalysis/details/${id}`,
        })
    },
    updateDataAnalysis(params) { // 修改数据报表
        return axios.request({
            url: `${projectName}/dataAnalysis/updateDataAnalysis`,
            data: params,
            method: 'PUT'
        })
    },
    getDataAnalysisByObjId(params) { // 查看数据分析
        return axios.request({
            url: `${projectName}/dataAnalysis/getDataAnalysisByObjId`,
            data: params,
            method: 'post'
        })
    },




    getLogoList(params) { // 获取徽章列表
        return axios.request({
            url: `${projectName}/logo/list`,
            data: params,
            method: 'post'
        })
    },
    getLogoDetails(id) { // 获取徽章详情
        return axios.request({
            url: `${projectName}/logo/details/${id}`,
        })
    },
    getLogoCode(id) { // 获取徽标编码
        return axios.request({
            url: `${projectName}/logo/getlogocode/${id}`,
        })
    },
    logoAdd(params) { // 新增徽标
        return axios.request({
            url: `${projectName}/logo/add`,
            data: params,
            method: 'post'
        })
    },
    logoUpdate(params) { // 更新徽标
        return axios.request({
            url: `${projectName}/logo/update`,
            data: params,
            method: 'PUT'
        })
    },
    logoDelete(id) { // 删除单个徽标
        return axios.request({
            url: `${projectName}/logo/delete/${id}`,
            method: 'delete'
        })
    },
    logoDeleteList(params) { // 批量删除徽标
        return axios.request({
            url: `${projectName}/logo/deleteList`,
            data: params,
            method: 'delete'
        })
    },
    articleCommentManageList(params) { // 评论管理列表
        return axios.request({
            url: `${projectName}/articleCommentManage/list`,
            data: params,
            method: 'post'
        })
    },
    articleCommentsManualRefreshTime(id) { // 获取刷新关注词时间
        return axios.request({
            url: `${projectName}/articleComments/manualRefreshTime/${id}`
        })
    },
    articleCommentsManualRefresh(params) { // 手动刷新文章评论关注词
        return axios.request({
            url: `${projectName}/articleComments/manualRefresh`,
            data: params,
            method: 'post'
        })
    },
    articleCommentsList(params) { // 根据文章获取评论列表
        return axios.request({
            url: `${projectName}/articleComments/list`,
            data: params,
            method: 'post'
        })
    },

    articleCommentsDelete(params) { // 批量删除评论
        return axios.request({
            url: `${projectName}/articleComments/delete`,
            data: params,
            method: 'delete'
        })
    },
    articleCommentsUpdateordernum(params) { // 修改评论排序编号
        return axios.request({
            url: `${projectName}/articleComments/updateordernum`,
            data: params,
            method: 'post'
        })
    },
    articleCommentsDetails(id) { // 获取评论详情
        return axios.request({
            url: `${projectName}/articleComments/details/${id}`
        })
    },
    articleCommentReplysList(params) { // 获取评论回复列表
        return axios.request({
            url: `${projectName}/articleCommentReplys/list`,
            data: params,
            method: 'post'
        })
    },
    articleCommentReplysDelete(params) { // 批量删除回复评论
        return axios.request({
            url: `${projectName}/articleCommentReplys/delete`,
            data: params,
            method: 'post'
        })
    },
    articleCommentReplysUpdateordernum(params) { // 更新评论排序编号
        return axios.request({
            url: `${projectName}/articleCommentReplys/updateordernum`,
            data: params,
            method: 'post'
        })
    },
    articleCommentReplysDetails(id) { // 获取回复评论详情
        return axios.request({
            url: `${projectName}/articleCommentReplys/details/${id}`
        })
    },

}

export default server