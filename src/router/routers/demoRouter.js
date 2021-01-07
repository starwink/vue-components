import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件管理',
      showAlways: true
    },

    component: Main,
    children: [
      {
        path: 'tree',
        name: 'components/tree',
        meta: {
          title: 'Tree控件'
        },
        component: () =>
                    import('@/view/tree/index.vue')
      },
      {
        path: 'imgupload',
        name: 'components/imgupload',
        meta: {
          title: '图片上传'
        },
        component: () =>
                    import('@/view/upload/index.vue')
      },
      {
        path: 'imglist',
        name: 'components/imglist',
        meta: {
          title: '图片列表控件'
        },
        component: () =>
                    import('@/view/img-list/index.vue')
      },
      {
        path: 'show',
        name: 'components/show',
        meta: {
          title: '图片上传&列表'
        },
        component: () =>
                    import('@/view/upload/show.vue')
      },
      {
        path: 'map',
        name: 'components/map',
        meta: {
          title: '自定义地图'
        },
        component: () =>
                    import('@/view/map/index.vue')
      },
      {
        path: '/editir',
        name: 'components/editir',
        meta: {
          title: '代码编辑器'
        },
        component: parentView,
        children: [
          {
            path: 'sqleditir',
            name: 'components/sql-editir',
            meta: {
              title: 'SQL编辑器'
            },
            component: () =>
                            import('@/view/code-editir/index.vue')
          },
          {
            path: 'js',
            name: 'components/js-editir',
            meta: {
              title: 'JavaScript编辑器'
            },
            component: () =>
                            import('@/view/code-editir/js.vue')
          }
        ]
      },
      {
        path: 'seadragon',
        name: 'components/seadragon',
        meta: {
          title: '大图查看'
        },
        component: () => import('@/view/seadragon/index.vue')
      },
      {
        path: 'seadragon/mark',
        name: 'components/seadragon-mark',
        meta: {
          title: '大图查看demo'
        },
        component: () => import('@/components/openseadragon/mark.vue')
      },

      {
        path: 'fun',
        name: 'components/fun',
        meta: {
          title: 'js 函数'
        },
        component: () => import('@/view/fun/index.vue')
      },
      {
        path: 'custom',
        name: 'components/custom',
        meta: {
          title: '自定义表单'
        },
        component: () => import('@/view/custom-form/createPage.vue')
      },
      {
        path: 'ruler',
        name: 'components/ruler',
        meta: {
          title: '刻度尺'
        },
        component: () => import('@/view/ruler/index.vue')
      },
      {
        path: 'g6',
        name: 'components/g6',
        meta: {
          title: 'G6关系图'
        },
        component: () => import('@/view/g6/index.vue')
      },
      {
        path: 'jsonForm',
        name: 'components/jsonForm',
        meta: {
          title: '表单配置JSON'
        },
        component: () => import('@/view/jsonForm/index.vue')
      },
      {
        path: 'python',
        name: 'components/python',
        meta: {
          title: 'python'
        },
        component: () => import('@/view/python/index.vue')
      },
      {
        path: 'd3',
        name: 'components/d3',
        meta: {
          title: 'd3'
        },
        component: () => import('@/view/d3/index.vue')
      },
      {
        path: 'axios',
        name: 'components/axios',
        meta: {
          title: 'axios'
        },
        component: () => import('@/view/axios/index.vue')
      },
      {
        path: '/ua',
        name: 'components/ua',
        meta: {
            title: '浏览器信息',
            // hideInMenu: true
        },
        component: () => import('@/components/ua/index.vue')
    },

    ]

  }

]
