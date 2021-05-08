<template>
    <div class="note-li">
        <div class="ani-item">
            <Icon type="md-arrow-down" class="" />
            <p>base</p>
        </div>
        <div class="ani-item">
            <Icon type="md-arrow-down" class="rotate" />
            <p>rotate</p>
        </div>
        <div class="ani-item">
            <Icon type="md-arrow-down" class="shade" />
            <p>shade</p>
        </div>
        <div class="ani-item">
            <Icon type="md-arrow-down" class="spin" />
            <p>spin</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aType: 'rotate',
            "raw_out": [
                [
                    [
                        [
                            48,
                            65
                        ],
                        [
                            137,
                            62
                        ],
                        [
                            138,
                            89
                        ],
                        [
                            49,
                            92
                        ]
                    ],
                    "1、 姓名",
                    0.8133955001831055
                ],
                [
                    [
                        [
                            132,
                            58
                        ],
                        [
                            235,
                            57
                        ],
                        [
                            236,
                            89
                        ],
                        [
                            133,
                            91
                        ]
                    ],
                    "2、 陈科科",
                    0.8298041820526123
                ],
                [
                    [
                        [
                            49,
                            122
                        ],
                        [
                            161,
                            121
                        ],
                        [
                            161,
                            145
                        ],
                        [
                            49,
                            146
                        ]
                    ],
                    "3、 性别男",
                    0.840299129486084
                ],
                [
                    [
                        [
                            193,
                            121
                        ],
                        [
                            306,
                            121
                        ],
                        [
                            306,
                            145
                        ],
                        [
                            193,
                            145
                        ]
                    ],
                    "4、 民族汉",
                    0.8608537316322327
                ],
                [
                    [
                        [
                            50,
                            175
                        ],
                        [
                            370,
                            175
                        ],
                        [
                            370,
                            201
                        ],
                        [
                            50,
                            201
                        ]
                    ],
                    "5、 出生 1984年11月12日",
                    0.791717529296875
                ],
                [
                    [
                        [
                            48,
                            234
                        ],
                        [
                            406,
                            233
                        ],
                        [
                            406,
                            259
                        ],
                        [
                            48,
                            260
                        ]
                    ],
                    "6、 佳址 杭州市滨江区贺田尚城",
                    0.8040178418159485
                ],
                [
                    [
                        [
                            142,
                            272
                        ],
                        [
                            406,
                            272
                        ],
                        [
                            406,
                            298
                        ],
                        [
                            142,
                            298
                        ]
                    ],
                    "7、 16幢一单元803室",
                    0.7535305023193359
                ],
                [
                    [
                        [
                            54,
                            377
                        ],
                        [
                            218,
                            379
                        ],
                        [
                            217,
                            406
                        ],
                        [
                            53,
                            404
                        ]
                    ],
                    "8、 公民身份号码",
                    0.6900587677955627
                ],
                [
                    [
                        [
                            201,
                            375
                        ],
                        [
                            639,
                            374
                        ],
                        [
                            639,
                            405
                        ],
                        [
                            201,
                            406
                        ]
                    ],
                    "9、 9352203198411121033",
                    0.8722847700119019
                ]
            ],
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            let list=[]
            console.log(this.raw_out)
            for(let item of this.raw_out){
                console.log(item);
                if(item && item[1]){
                    list.push(item[1])
                }
            }
            console.log(list.join('    '))
        }
    }
}
</script>
<style lang="less" scoped>
.note-li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    .ani-item {
        width: 120px;
        height: 120px;
        background-color: #ddd;
        margin: 6px;
        text-align: center;
        vertical-align: middle;
    }
    p {
        margin-top: 12px;
    }
}
.rotate {
    transform-style: preserve-3d;
    animation: rotate 10s linear infinite;
}
.shade {
    transform: translateZ(-50px);
    animation: shade 10s -5s linear infinite;
}

.spin {
    animation: spin 1.5s infinite linear;
}

@keyframes rotate {
    0% {
        transform: rotateX(-15deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(-15deg) rotateY(360deg);
    }
}
@keyframes shade {
    50% {
        background-color: rgba(0, 0, 0, 0.7);
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
</style>