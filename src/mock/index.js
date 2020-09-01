import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList, uploadImage, getOrgData, getTreeSelectData,getTreeNodeData,getDictsList,getUserLogin,getDictsAll,getReskey,getLoginLogout } from './data'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 200
})
Mock.mock(/\/tagOrg\/getOrgTagGroupList/, getTreeNodeData)
Mock.mock(/\/dicts\/list/, getDictsList)
Mock.mock(/\/login\/login/, getUserLogin)
Mock.mock(/\/res\/resKeys/, getReskey)
Mock.mock(/\/dicts\/all/, getDictsAll)
Mock.mock(/\/login\/logout/, getLoginLogout)

// Mock.mock(/\/res\/auserRes/, resData)
// Mock.mock(/\/taskIssue\/finishDetails/, finishDetails)
//素材管理 
// Mock.mock(/\/localMaterial\/details/, sucaiDetail)
// Mock.mock(/\/localMaterial\/list/, sucaiList)
//发布
// Mock.mock(/\/articleIssue\/list/, articleIssueList)
// Mock.mock(/\/articleIssue\/getArticleByArticleSendId/, getArticleByArticleSendId)

// 登录相关和获取用户信息
// Mock.mock(/\/shuxi-master\/login\/login/, sxlogin)
// Mock.mock(/\/login/, login)
// Mock.mock(/\/get_info/, getUserInfo)

// Mock.mock(/\/logout/, logout)
// Mock.mock(/\/get_table_data/, getTableData)
// Mock.mock(/\/get_drag_list/, getDragList)
// Mock.mock(/\/save_error_logger/, 'success')
// Mock.mock(/\/image\/upload/, uploadImage)
// Mock.mock(/\/message\/init/, getMessageInit)
// Mock.mock(/\/message\/content/, getContentByMsgId)
// Mock.mock(/\/message\/has_read/, hasRead)
// Mock.mock(/\/message\/remove_readed/, removeReaded)
// Mock.mock(/\/message\/restore/, restoreTrash)
// Mock.mock(/\/message\/count/, messageCount)
// Mock.mock(/\/get_org_data/, getOrgData)
// Mock.mock(/\/get_tree_select_data/, getTreeSelectData)

export default Mock
