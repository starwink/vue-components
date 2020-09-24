export default [
    {
        name:'input',
        title:'单行输入',
    },
    {
        name:'textarea',
        title:'多行输入',
    },
    {
        name:'input-number',
        title:'数字输入',
    },
    {
        name:'radio',
        title:'单选框',
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
        // val:'',
        other:{
            options:[],
            multiple:false,
            filterable:false,
        }
    },
    {
        name:'date',
        title:'日期',
    },
    
    {
        name:'daterange',
        title:'日期区间',
    },
]

