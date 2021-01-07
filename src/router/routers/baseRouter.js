import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true
        },
        component: () =>
            import('@/view/login/login.vue')
    },
    {
        path: '/admin',
        name: 'adminlogin',
        meta: {
            title: 'ADMIN登录',
            hideInMenu: true
        },
        component: () =>
            import('@/view/admin-login/login.vue')
    },
    {
        path: '/admin/projectlist',
        name: 'admin/projectlist',
        meta: {
            title: '项目展示',
            hideInMenu: true
        },
        component: () =>
            import('@/view/project/index.vue')
    },

    {
        path: '/demo',
        name: 'h5/demo',
        meta: {
            title: '项目展示',
            hideInMenu: true
        },
        component: () =>
            import('@/view/demo/index.vue')
    },
    {
        path: '/ua',
        name: 'h5/ua',
        meta: {
            title: '项目展示',
            // hideInMenu: true
        },
        component: () => import('@/components/ua/index.vue')
    },

    {
        path: '/',
        name: '_home',
        redirect: '/login',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true,
                icon: 'md-home'
            },
            component: () =>
                import('@/view/single-page/home')
        }]
    },
    {
        path: '/message',
        name: 'message',
        component: Main,
        meta: {
            hideInBread: true,
            hideInMenu: true
        },
        children: [{
            path: 'message_page',
            name: 'message_page',
            meta: {
                icon: 'md-notifications',
                title: '消息中心'
            },
            component: () =>
                import('@/view/single-page/message/index.vue')
        }]
    },

    {
        path: '/setup',
        name: 'setup',
        meta: {
            icon: 'md-settings',
            title: '设置中心',
            showAlways: true,
            access: ['setFocus']
        },
        component: Main,
        children: [

            {
                path: 'dict',
                name: 'setup/dict',
                meta: {
                    icon: 'md-pricetags',
                    title: '字典项管理',
                    access: ['setFocus/dictManage']
                },
                component: () =>
                    import('@/view/setup/dict/list.vue')
            },
            {
                path: 'demo',
                name: 'setup/demo',
                meta: {
                    //   icon: 'md-pricetags',
                    title: 'DEMO'
                },
                component: () =>
                    import('@/view/setup/demo/list.vue')
            }

        ]
    },

    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import('@/view/error-page/404.vue')
    }

]
