import Main from '@/components/main'
import parentView from '@/components/parent-view'
export default [
  {
    path: '/zujian',
    name: 'zujian',
    meta: {
      icon: 'logo-buffer',
      title: '二开组件管理',
      showAlways: true
    },

    component: Main,
    children: [
      {
        path: 'eDatePicker',
        name: 'zujian/eDatePicker',
        meta: {
          title: '区域日期框'
        },
        component: () => import('@/view/zujian/eDatePicker/demo.vue')
      },
      {
        path: 'jsoninput',
        name: 'zujian/jsoninput',
        meta: {
          title: 'json编辑框'
        },
        component: () => import('@/view/zujian/jsoninput/demo.vue')
      },
      {
        path: 'apiloadcomp',
        name: 'zujian/apiloadcomp',
        meta: {
          title: '动态异常加载组件'
        },
        component: () => import('@/view/zujian/apiLoadingComp/index.vue')
      },

    ]
  }
]
