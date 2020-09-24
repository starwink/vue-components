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

//ps val主要是为了解决切换类型时val字段类型的指定

