export default {
    // namespaced: true,
    state:{
        jsonFormData:{
            isOpen:{

            } 
        }
    },
    getters:{
 
    },
    mutations: {
        setJsonFormIsOpen(state,data){
            state.jsonFormData.isOpen=data;
        },
        clearJsonFormIsOpen(state){
            state.jsonFormData.isOpen={}
        },
        setJsonFormIsOpenItem(state,params){
            if(params && params.name){
                state.jsonFormData.isOpen[params.name]=params.val;
            }
        }
    },
    
}
