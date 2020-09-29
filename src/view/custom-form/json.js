/**
 *  自定义表单控件基础数据
 *  ps:定义val值用来解决默认val类型会出现异常提示
 */
export default [
    {
        name:'input',
        title:'单行输入',
        val:'',
    },
    {
        name:'textarea',
        title:'多行输入',
        val:'',
    },
    {
        name:'input-number',
        title:'数字输入',
        val:'',
    },
    {
        name:'radio',
        title:'单选框',
        val:'',
        other:{
            options:[]
        }
    },
    {
        name:'checkbox',
        title:'多选框',
        val:[],
        other:{
            options:[]
        }
    },

    {
        name:'select',
        title:'下拉框',
        val:'',
        other:{
            options:[],
            multiple:false,
            filterable:false,
        }
    },
    {
        name:'cascader',
        title:'级联选择',
        val:[],
        other:{
            options:[]
        }
    },
    {
        name:'date',
        title:'日期',
        val:'',
    },
    
    {
        name:'daterange',
        title:'日期区间',
        val:'',
    },
]



