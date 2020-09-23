// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'view-design'

import i18n from '@/locale'
import config from '@/config'
import comfun from '@/libs/comfun'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'

import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import 'view-design/dist/styles/iview.css'
import VueClipboard from 'vue-clipboard2' // 剪贴板

import Viewer from "v-viewer"
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

import './index.scss'
import './iconfont.css'

import tool from "@/utils/tool.js";

Viewer.setDefaults({
    Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});



Vue.prototype.$helper = tool;
Vue.prototype.$config = config
Vue.prototype.$comfun = comfun


// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)

Vue.use(VueClipboard)

/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */

// Vue.prototype.$Message=iView.$Message;
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
