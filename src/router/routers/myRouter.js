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
        path: 'grapeSelect',
        name: 'zujian/grapeSelect',
        meta: {
          title: '上下级同框多选框'
        },
        component: () => import('@/view/zujian/grapeSelect/demo.vue')
      }

    ]
  }
]
