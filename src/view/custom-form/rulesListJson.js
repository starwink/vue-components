export default [
    {
        name:'phone',
        title:'手机',
        rules:[
            {validator: _phone, trigger: 'change'}
        ]
    },
    {
        name:'phoneTel',
        title:'手机或固话',
        rules:[
            {validator: _phoneTel, trigger: 'change'}
        ]
    },

    
    {
        name:'cardId',
        title:'身份证',
        rules:[
            {validator: _cardId, trigger: 'change'}
        ]
    },


]