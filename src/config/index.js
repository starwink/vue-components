export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: '组件示例',

    appKey: 'rQLTPLdUFK2o',
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description 是否使用国际化，默认为false
     *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
     *              用来在菜单中显示文字
     */
    useI18n: false,
    /**
     * @description api请求基础路径
     */
    baseUrl: {
        dev: '/',
        pro: '/'
    },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 需要加载的插件
     */
    plugin: {
        'error-store': {
            showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
            developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
        }
    },
    projectName0: 'shuxi-master',
    //   projectName1:'shuxi-master-zxzd',
    projectName1: 'shuxi-master-zxzd-test',
    projectName2: 'shuxi-dict',
    imgDomain: 'https://zxzd.oss-cn-hangzhou.aliyuncs.com/',
    projectId: '1A5C80926EA7168A016EA7168AFA0000',
    qqMapKey:'FIRBZ-QXLKF-BQKJC-N4KJI-3PWN3-BXBXD',
    miniproTaskList:'http://h5.dtstream.com/shuxi-master-zxzd-test/wechat/redirect/2280cb816c1da253016c1dad14800000/5'

}
