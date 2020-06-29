import {
    //   login,
    //   logout,
    getUserInfo,
    getMessage,
    getContentByMsgId,
    hasRead,
    removeReaded,
    restoreTrash,
    getUnreadCount
} from '@/api/user'

import http from '@/api/shuxi-master'
import DmsmHttp from '@/api/shuxi-dmsm.js'

import { setToken, getToken, localSave, localRead } from '@/libs/util'

export default {
    state: {
        userName: '',
        userId: '',
        avatorImgPath: '',
        userType: '',
        token: getToken(),
        access: '',
        hasGetInfo: false,
        unreadCount: 0,
        messageUnreadList: [],
        messageReadedList: [],
        messageTrashList: [],
        messageContentStore: {}
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
        setUserName(state, userName) {
            state.userName = userName
        },
        setUserType(state, userType) {
            state.userType = userType
        },

        setPhone(state, phone) {
            state.phone = phone
        },

        setToken(state, token) {
            state.token = token
            setToken(token)
        },
        setAccess(state, access) {
            state.access = access
        },
        setHasGetInfo (state, status) {
            state.hasGetInfo = status
        },
        setMessageCount (state, count) {
            state.unreadCount = count
        },
        setMessageUnreadList (state, list) {
            state.messageUnreadList = list
        },
        setMessageReadedList (state, list) {
            state.messageReadedList = list
        },
        setMessageTrashList (state, list) {
            state.messageTrashList = list
        },
        updateMessageContentStore (state, { msg_id, content }) {
            state.messageContentStore[msg_id] = content
        },
        moveMsg (state, { from, to, msg_id }) {
            const index = state[from].findIndex(_ => _.msg_id === msg_id)
            const msgItem = state[from].splice(index, 1)[0]
            msgItem.loading = false
            state[to].unshift(msgItem)
        }
    },
    
    getters: {
        messageUnreadCount: state => state.messageUnreadList.length,
        messageReadedCount: state => state.messageReadedList.length,
        messageTrashCount: state => state.messageTrashList.length
    },
    actions: {
        // 登录
        handleLogin({ commit }, { userName, password }) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
                http.login({ userPhone: userName, userPassword: password }).then(res => {
                        let token = res.data.sessionId || '4444'
                        let access = ['admin']
                            //   console.log(res.data, '321321321323----')
                        if (token != '') {
                            commit('setToken', token)
                            commit('setUserType', res.data.userType)
                                // commit('setHasGetInfo', true)
                            commit('setUserId', res.data.userId)
                            commit('setUserName', res.data.userName)
                            commit('setPhone', res.data.userPhone)

                            localSave('userInfo', JSON.stringify({
                                token: token,
                                //   access: access,
                                userId: res.data.userId,
                                userName: res.data.userName,
                                userPhone: res.data.userPhone,
                                userType: res.data.userType
                            }))
                            resolve()
                        } else {
                            // reject({msg:'ffs'})
                        }
                    }).catch(err => {
                        reject(err)
                    })
                    /* login({
                      userName,
                      password
                    }).then(res => {
                      const data = res.data
                      commit('setToken', data.token)
                      resolve()
                    }).catch(err => {
                      reject(err)
                    }) */
            })
        },
        handleAdminLogin({ commit }, { Token }) {
            Token = Token.trim()
            return new Promise((resolve, reject) => {
                http.subLogin({token:Token}).then(res => {
                        let token = res.data.sessionId;
                        let access = ['admin']
                            //   console.log(res.data, '321321321323----')
                        if (token != '') {
                            commit('setToken', token)
                            commit('setUserType', res.data.userType)
                                // commit('setHasGetInfo', true)
                            commit('setUserId', res.data.userId)
                            commit('setUserName', res.data.userName)
                            commit('setPhone', res.data.userPhone)

                            localSave('userInfo', JSON.stringify({
                                token: token,
                                //   access: access,
                                userId: res.data.userId,
                                userName: res.data.userName,
                                userPhone: res.data.userPhone,
                                userType: res.data.userType
                            }))
                            resolve()
                        } else {
                            // reject({msg:'ffs'})
                        }
                    }).catch(err => {
                        reject(err)
                    })
                    /* login({
                      userName,
                      password
                    }).then(res => {
                      const data = res.data
                      commit('setToken', data.token)
                      resolve()
                    }).catch(err => {
                      reject(err)
                    }) */
            })
        },
        // 退出登录
        handleLogOut({ state, commit }) {
            return new Promise((resolve, reject) => {
                http.logout().then(res => {
                        // console.log(res,'login')
                        commit('setToken', '')
                        commit('setAccess', [])
                        commit('setHasGetInfo', false)
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                    // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                    // commit('setToken', '')
                    // commit('setAccess', [])
                    // resolve()
            })
        },
        // 获取用户相关信息
        getUserInfo({ state, commit }) {
            //   return new Promise((resolve, reject) => {
            //     try {
            //       getUserInfo(state.token).then(res => {
            //         const data = res.data
            //         data.access = ['super_admin', 'admin']
            //         // commit('setUserId', data.userId)
            //         // commit('setUserName', data.userName)
            //         // commit('setPhone', data.phone)
            //         // commit('setToken', data.sessionId)
            //         // commit('setHasGetInfo', true)
            //         resolve(data)
            //       }).catch(err => {
            //         reject(err)
            //       })
            //     } catch (error) {
            //       reject(error)
            //     }
            //   })

            return http.getUserRes().then(res => {
                if (res.code === 0) {
                    let access = res.data;
                    // for(let item of res.data.menuList){
                    //     access.push(item.menuCode);
                    //     for(let subItem of item.menuVos){
                    //         access.push(subItem.menuCode);
                    //     }
                    // }

                    commit('setAccess', access)
                    commit('setToken', 'super_admin');
                    console.log('access', access);
                    return { access }
                    // resolve()
                }
            })

        },


        getUserPower({ state, commit }) {
            return new Promise((resolve, reject) => {
                try {
                    http.power().then(res => {
                        const access = res.data
                        commit('setAccess', access)

                        let user = localRead('userInfo')
                        if (user != void 0 && user != '') {
                            user = JSON.parse(user)
                                // console.log('power',user);
                            commit('setUserId', user.userId)
                            commit('setUserName', user.userName)
                            commit('setUserType', user.userType)
                            commit('setPhone', user.userPhone)
                            commit('setHasGetInfo', true)
                        }

                        // let data={};
                        //   data.access=['super_admin', 'admin']
                        resolve(access)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },
        // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
        getUnreadMessageCount({ state, commit }) {
            /* getUnreadCount().then(res => {
              const { data } = res
              commit('setMessageCount', data)
            }) */
        },
        // 获取消息列表，其中包含未读、已读、回收站三个列表
        getMessageList({ state, commit }) {
            return new Promise((resolve, reject) => {
                getMessage().then(res => {
                    const { unread, readed, trash } = res.data
                    commit('setMessageUnreadList', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('setMessageReadedList', readed.map(_ => {
                        _.loading = false
                        return _
                    }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    commit('setMessageTrashList', trash.map(_ => {
                        _.loading = false
                        return _
                    }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 根据当前点击的消息的id获取内容
        getContentByMsgId({ state, commit }, { msg_id }) {
            return new Promise((resolve, reject) => {
                let contentItem = state.messageContentStore[msg_id]
                if (contentItem) {
                    resolve(contentItem)
                } else {
                    getContentByMsgId(msg_id).then(res => {
                        const content = res.data
                        commit('updateMessageContentStore', { msg_id, content })
                        resolve(content)
                    })
                }
            })
        },
        // 把一个未读消息标记为已读
        hasRead({ state, commit }, { msg_id }) {
            return new Promise((resolve, reject) => {
                hasRead(msg_id).then(() => {
                    commit('moveMsg', {
                        from: 'messageUnreadList',
                        to: 'messageReadedList',
                        msg_id
                    })
                    commit('setMessageCount', state.unreadCount - 1)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 删除一个已读消息到回收站
        removeReaded({ commit }, { msg_id }) {
            return new Promise((resolve, reject) => {
                removeReaded(msg_id).then(() => {
                    commit('moveMsg', {
                        from: 'messageReadedList',
                        to: 'messageTrashList',
                        msg_id
                    })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 还原一个已删除消息到已读消息
        restoreTrash({ commit }, { msg_id }) {
            return new Promise((resolve, reject) => {
                restoreTrash(msg_id).then(() => {
                    commit('moveMsg', {
                        from: 'messageTrashList',
                        to: 'messageReadedList',
                        msg_id
                    })
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}