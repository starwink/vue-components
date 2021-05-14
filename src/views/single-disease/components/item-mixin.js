export default {
    props: {
        jsonItem: {
            type: Array || Object,
            default: () => { }
        },
        test: {
            type: Object,
            default: () => { return {} }
        },

        className: {
            type: String,
            default: 'json-obj-item'
        },

    },
    data() {
        return {
           
        }
    },
  
    methods: {
        //item 传向最上级 key更新
        changeKey() {
            this.$emit('changeKey')
        },

        actionBox(obj) {

            obj.isOpen = !obj.isOpen;

            this.changeKey();
        },

        submitData(){
            console.log('sub',this.form)
            // this.$emit('changeKey')
        }
    },

}
