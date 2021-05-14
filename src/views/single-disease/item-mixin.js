export default {
    props: {
        jsonData: {
            type: Array || Object,
            default: () => {}
      },
      className:{
          type:String,
          default:'json-obj-item'
      }
    },
    
    computed: {
    //   parentFiledTypes () {
    //     return this.filedTypes
    //   },
    },
    methods: {
        //item 传向最上级 key更新
        changeKey(){
            this.$emit('changeKey')
        }
    },
    
    
  }
  