import Main from '@/components/main'
export default [
  {
    path: '/language',
    name: 'language',
    meta: {
      icon: 'logo-buffer',
      title: '自然语言',
      showAlways: true
    },
    component: Main,
    children: [
        {
            path: 'nlp',
            name: 'language/nlp',
            meta: {
                title: 'NLP基础组件',
            },
            component: () => import('@/views/python/index')
        },
        {
            path: 'say',
            name: 'language/say',
            meta: {
                title: '功能模板',
            },
            component: () => import('@/views/natural-language/nlp')
        },
        {
            path: 'chatdemo',
            name: 'language/chat',
            meta: {
                title: '会话样式',
            },
            component: () => import('@/views/natural-language/chat')
        },
        {
            path: 'chat',
            name: 'language/chat-window',
            meta: {
                title: 'AI会话',
            },
            component: () => import('@/views/natural-language/chat/chat-window')
        },
     
    ]

  }

]
