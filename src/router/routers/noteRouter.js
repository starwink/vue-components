import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [
    {
        path: '/note',
        name: 'note',
        meta: {
            icon: 'logo-buffer',
            title: '笔记管理',
            showAlways: true
        },

        component: Main,
        children: [
            {
                path: 'progressmove',
                name: 'note/progressmove',
                meta: {
                    title: '动画'
                },
                component: () =>
                    import('@/view/note/progressmove/index.vue')
            },
            {
                path: 'flex',
                name: 'note/flex',
                meta: {
                    title: 'css flex'
                },
                component: () =>
                    import('@/view/note/flex/index.vue')
            },
            {
                path: 'vuedemo',
                name: 'note/vuedemo',
                meta: {
                    title: '官方动画demo'
                },
                component: () =>
                    import('@/view/note/drag/demo.vue')
            },
            {
                path: 'drag',
                name: 'note/drag',
                meta: {
                    title: '拖拉拽纵'
                },
                component: () =>
                    import('@/view/note/drag/index.vue')
            },
            {
                path: 'drag2',
                name: 'note/drag2',
                meta: {
                    title: '拖拉拽橫'
                },
                component: () =>
                    import('@/view/note/drag/index-li.vue')
            },
            {
                path: 'drag3',
                name: 'note/drag3',
                meta: {
                    title: '拖拉拽编辑 动画'
                },
                component: () =>
                    import('@/view/note/drag/index-tr.vue')
            },
            {
                path: 'drag4',
                name: 'note/drag4',
                meta: {
                    title: '拖拉拽新增编辑 动画'
                },
                component: () =>
                    import('@/view/note/drag/index-add.vue')
            },
            {
                path: 'lifeCycle',
                name: 'note/lifeCycle',
                meta: {
                    icon: 'logo-buffer',
                    title: 'vue生命周期 组件初识',
                },
                component: () =>import('@/view/note/vue/lifeCycle.vue')
            },
            {
                path: 'lifeCycleUp',
                name: 'note/lifeCycleUp',
                meta: {
                    icon: 'logo-buffer',
                    title: 'vue生命周期进阶方案',
                },
                component: () =>import('@/view/note/vue/lifeCycleUp.vue')
            },
            {
                path: 'vuecom',
                component: parentView,
                name: 'note/vuecom',
                meta: {
                    icon: 'logo-buffer',
                    title: 'iview组件管理',
                    showAlways: true
                },
                children: [
                    {
                        path: 'componserList',
                        name: 'note/vuecom/componserList',
                        meta: {
                            title: '组件方式'
                        },
                        component: () =>
                            import('@/view/note/vue/index.vue')
                    },
                    {
                        path: 'vuejs',
                        name: 'note/vuecom/js',
                        meta: {
                            title: '纯js jsx返回'
                        },
                        component: () =>
                            import('@/view/note/vue/index.vue')
                    },
                ]
            }
        ]
    }
]
