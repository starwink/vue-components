export default [
    {
        "no": "DPD_0",
        "hide": false,
        "line": false,
        "sonList": [
            {
                "no": "DPD_350",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "pointsort": "2",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_351",
                        "values": [
                            {
                                "val": "a",
                                "remark": "第一季度"
                            },
                            {
                                "val": "b",
                                "remark": "第二季度"
                            },
                            {
                                "val": "c",
                                "remark": "第三季度"
                            },
                            {
                                "val": "d",
                                "remark": "第四季度"
                            }
                        ],
                        "link": {
                            "values": [
                                {
                                    "hide": "",
                                    "show": "DPD_275",
                                    "rule": "==::a",
                                    "oper": "==",
                                    "type": "hide",
                                    "maxOper": "",
                                    "maxRule": ""
                                },
                                {
                                    "hide": "",
                                    "show": "DPD_305",
                                    "rule": "==::b",
                                    "oper": "==",
                                    "type": "hide",
                                    "maxOper": "",
                                    "maxRule": ""
                                },
                                {
                                    "hide": "",
                                    "show": "DPD_349",
                                    "rule": "==::c",
                                    "oper": "==",
                                    "type": "hide",
                                    "maxOper": "",
                                    "maxRule": ""
                                },
                                {
                                    "hide": "",
                                    "show": "DPD_592",
                                    "rule": "==::d",
                                    "oper": "==",
                                    "type": "hide",
                                    "maxOper": "",
                                    "maxRule": ""
                                }
                            ],
                            "type": "hide"
                        },
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "checkbox",
                        "title": "请选择上报季度",
                        "submitName": "DPD-0-1-10",
                        "textsort": "2",
                        "hide": false,
                        "selectMultiple": false,
                        "disabled": false
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "上报季度 "
            },
            {
                "no": "DPD_258",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "pointsort": "1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_259",
                        "values": [
                            {
                                "val": "y",
                                "remark": "是"
                            },
                            {
                                "val": "n",
                                "remark": "否"
                            }
                        ],
                        "link": {
                            "values": [
                                {
                                    "hide": "",
                                    "show": "DPD_260",
                                    "rule": "==::y",
                                    "oper": "==",
                                    "type": "hide",
                                    "maxOper": "",
                                    "maxRule": ""
                                }
                            ],
                            "type": "hide"
                        },
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "radio",
                        "title": "是否填写医院相关信息",
                        "submitName": "DPD-0-1-1",
                        "textsort": "2",
                        "hide": false,
                        "selectMultiple": false,
                        "disabled": false
                    },
                    {
                        "no": "DPD_260",
                        "hide": true,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-0-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_262",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "reg",
                                    "list": [
                                        {
                                            "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                            "rule": "Xi57MCw1MH0k",
                                            "type": "reg"
                                        }
                                    ]
                                },
                                "type": "text",
                                "title": "所属医院"
                            },
                            {
                                "no": "DPD_263",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-0-1-4-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_264",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "reg",
                                            "list": [
                                                {
                                                    "msg": "5LiN6IO96LaF6L+HMzDkuKrmloflrZfor7TmmI4=",
                                                    "rule": "Xi57MCwzMH0k",
                                                    "type": "reg"
                                                }
                                            ]
                                        },
                                        "type": "text",
                                        "title": "所在省"
                                    },
                                    {
                                        "submitName": "DPD-0-1-4-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_265",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "reg",
                                            "list": [
                                                {
                                                    "msg": "5LiN6IO96LaF6L+HMzDkuKrmloflrZfor7TmmI4=",
                                                    "rule": "Xi57MCwzMH0k",
                                                    "type": "reg"
                                                }
                                            ]
                                        },
                                        "type": "text",
                                        "title": "所在市"
                                    },
                                    {
                                        "submitName": "DPD-0-1-4-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_266",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "reg",
                                            "list": [
                                                {
                                                    "msg": "5LiN6IO96LaF6L+HMzDkuKrmloflrZfor7TmmI4=",
                                                    "rule": "Xi57MCwzMH0k",
                                                    "type": "reg"
                                                }
                                            ]
                                        },
                                        "type": "text",
                                        "title": "所在区县"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-0-1-5",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_267",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "医疗机构的透析中心"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "独立透析中心"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "中心性质"
                            },
                            {
                                "submitName": "DPD-0-1-6",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_268",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "三级"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "二级"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "其它"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "医院级别"
                            },
                            {
                                "submitName": "DPD-0-1-7",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_269",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "公立"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "民营"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "所有制形式"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "填报医院相关信息"
            },
            {
                "no": "CM_0",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "submitName": "CM-0-1-1-1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_1",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                    "rule": "Xi57MCw1MH0k",
                                    "type": "reg"
                                },
                                {
                                    "msg": "5Y+q5YWB6K645aGr5YaZ5Lit5paH5rGJ5a2X44CB5a2X5q+N44CB5pWw5a2X",
                                    "rule": "XlthLXpBLVowLTlfwrdcdTRlMDAtXHU5ZmE1XSsk",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "质控医师"
                    },
                    {
                        "submitName": "CM-0-1-1-2",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_2",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                    "rule": "Xi57MCw1MH0k",
                                    "type": "reg"
                                },
                                {
                                    "msg": "5Y+q5YWB6K645aGr5YaZ5Lit5paH5rGJ5a2X44CB5a2X5q+N44CB5pWw5a2X",
                                    "rule": "XlthLXpBLVowLTlfwrdcdTRlMDAtXHU5ZmE1XSsk",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "质控护士"
                    },
                    {
                        "submitName": "CM-0-1-1-3",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_3",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                    "rule": "Xi57MCw1MH0k",
                                    "type": "reg"
                                },
                                {
                                    "msg": "5Y+q5YWB6K645aGr5YaZ5Lit5paH5rGJ5a2X44CB5a2X5q+N44CB5pWw5a2X",
                                    "rule": "XlthLXpBLVowLTlfwrdcdTRlMDAtXHU5ZmE1XSsk",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "主治医师"
                    },
                    {
                        "submitName": "CM-0-1-1-4",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_4",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                    "rule": "Xi57MCw1MH0k",
                                    "type": "reg"
                                },
                                {
                                    "msg": "5Y+q5YWB6K645aGr5YaZ5Lit5paH5rGJ5a2X44CB5a2X5q+N44CB5pWw5a2X",
                                    "rule": "XlthLXpBLVowLTlfwrdcdTRlMDAtXHU5ZmE1XSsk",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "责任护士"
                    },
                    {
                        "submitName": "CM-0-1-1-5",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_186",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5LiN6IO96LaF6L+HNTDkuKrmloflrZfor7TmmI4=",
                                    "rule": "Xi57MCw1MH0k",
                                    "type": "reg"
                                },
                                {
                                    "msg": "5Y+q5YWB6K645aGr5YaZ5Lit5paH5rGJ5a2X44CB5a2X5q+N44CB5pWw5a2X",
                                    "rule": "XlthLXpBLVowLTlfXHU0ZTAwLVx1OWZhNVwoXClc77yIXO+8iV0rJA==",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "上报科室"
                    },
                    {
                        "submitName": "caseId",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_5",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "text",
                        "title": "患者病案号"
                    },
                    {
                        "submitName": "IDCard",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_6",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "6Lqr5Lu96K+B5Y+35LiN5q2j56Gu",
                                    "rule": "XiheXGR7OH0oMFxkfDEwfDExfDEyKShbMC0yXVxkfDMwfDMxKVxkezN9JCl8KF5cZHs2fSgxOHwxOXwyMClcZHsyfSgwWzEtOV18MTB8MTF8MTIpKFswLTJdXGR8MzB8MzEpXGR7M30oXGR8WHx4KSQpfCheW0EtWmEtel17MSwyfVxkezQsMTB9KFtcKF1bMC05QS1aXVtcKV18WzAtOUEtWl0pJCl8KF5bMXw1fDddXGR7Nn1bMC05QS1aXSQpfCheW2EtekEtWl1bMC05XXs5fSQp",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "患者身份证号"
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "质控医师护士"
            },
            {
                "no": "DPD_229",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "submitName": "DPD-0-2-2",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_231",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "reg",
                            "list": [
                                {
                                    "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                    "rule": "Xi57MCwyMH0k",
                                    "type": "reg"
                                }
                            ]
                        },
                        "type": "text",
                        "title": "患者姓名"
                    },
                    {
                        "submitName": "CM-0-2-1-2",
                        "textsort": "2",
                        "pointsort": "1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_14",
                        "hide": false,
                        "selectMultiple": false,
                        "values": [
                            {
                                "val": "M",
                                "remark": "男"
                            },
                            {
                                "val": "F",
                                "remark": "女"
                            }
                        ],
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "radio",
                        "title": "患者性别"
                    },
                    {
                        "submitName": "DPD-0-2-4",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_232",
                        "hide": false,
                        "values": [
                            {
                                "val": "def",
                                "remark": "请选择"
                            },
                            {
                                "val": "1",
                                "remark": "汉族"
                            },
                            {
                                "val": "2",
                                "remark": "满族"
                            },
                            {
                                "val": "3",
                                "remark": "蒙古族"
                            },
                            {
                                "val": "4",
                                "remark": "回族"
                            },
                            {
                                "val": "5",
                                "remark": "藏族"
                            },
                            {
                                "val": "6",
                                "remark": "维吾尔族"
                            },
                            {
                                "val": "7",
                                "remark": "苗族"
                            },
                            {
                                "val": "8",
                                "remark": "彝族"
                            },
                            {
                                "val": "9",
                                "remark": "壮族"
                            },
                            {
                                "val": "10",
                                "remark": "布依族"
                            },
                            {
                                "val": "11",
                                "remark": "侗族"
                            },
                            {
                                "val": "12",
                                "remark": "瑶族"
                            },
                            {
                                "val": "13",
                                "remark": "白族"
                            },
                            {
                                "val": "14",
                                "remark": "土家族"
                            },
                            {
                                "val": "15",
                                "remark": "哈尼族"
                            },
                            {
                                "val": "16",
                                "remark": "哈萨克族"
                            },
                            {
                                "val": "17",
                                "remark": "傣族"
                            },
                            {
                                "val": "18",
                                "remark": "黎族"
                            },
                            {
                                "val": "19",
                                "remark": "傈僳族"
                            },
                            {
                                "val": "20",
                                "remark": "佤族"
                            },
                            {
                                "val": "21",
                                "remark": "畲族"
                            },
                            {
                                "val": "22",
                                "remark": "高山族"
                            },
                            {
                                "val": "23",
                                "remark": "拉祜族"
                            },
                            {
                                "val": "24",
                                "remark": "水族"
                            },
                            {
                                "val": "25",
                                "remark": "东乡族"
                            },
                            {
                                "val": "26",
                                "remark": "纳西族"
                            },
                            {
                                "val": "27",
                                "remark": "景颇族"
                            },
                            {
                                "val": "28",
                                "remark": "柯尔克孜族"
                            },
                            {
                                "val": "29",
                                "remark": "土族"
                            },
                            {
                                "val": "30",
                                "remark": "达斡尔族"
                            },
                            {
                                "val": "31",
                                "remark": "仫佬族"
                            },
                            {
                                "val": "32",
                                "remark": "羌族"
                            },
                            {
                                "val": "33",
                                "remark": "布朗族"
                            },
                            {
                                "val": "34",
                                "remark": "撒拉族"
                            },
                            {
                                "val": "35",
                                "remark": "毛南族"
                            },
                            {
                                "val": "36",
                                "remark": "仡佬族"
                            },
                            {
                                "val": "37",
                                "remark": "锡伯族"
                            },
                            {
                                "val": "38",
                                "remark": "阿昌族"
                            },
                            {
                                "val": "39",
                                "remark": "普米族"
                            },
                            {
                                "val": "40",
                                "remark": "朝鲜族"
                            },
                            {
                                "val": "41",
                                "remark": "塔吉克族"
                            },
                            {
                                "val": "42",
                                "remark": "怒族"
                            },
                            {
                                "val": "43",
                                "remark": "乌孜别克族"
                            },
                            {
                                "val": "44",
                                "remark": "俄罗斯族"
                            },
                            {
                                "val": "45",
                                "remark": "鄂温克族"
                            },
                            {
                                "val": "46",
                                "remark": "德昂族"
                            },
                            {
                                "val": "47",
                                "remark": "保安族"
                            },
                            {
                                "val": "48",
                                "remark": "裕固族"
                            },
                            {
                                "val": "49",
                                "remark": "京族"
                            },
                            {
                                "val": "50",
                                "remark": "塔塔尔族"
                            },
                            {
                                "val": "51",
                                "remark": "独龙族"
                            },
                            {
                                "val": "52",
                                "remark": "鄂伦春族"
                            },
                            {
                                "val": "53",
                                "remark": "赫哲族"
                            },
                            {
                                "val": "54",
                                "remark": "门巴族"
                            },
                            {
                                "val": "55",
                                "remark": "珞巴族"
                            },
                            {
                                "val": "56",
                                "remark": "基诺族"
                            }
                        ],
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "select",
                        "title": "民族"
                    },
                    {
                        "submitName": "age",
                        "init": {
                            "rule": "I3tDTV8xNn0=",
                            "type": "normal"
                        },
                        "no": "CM_26",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "range",
                            "list": [
                                {
                                    "msg": "5oKj6ICF5bm06b6E5bqU5aSn5LqOMA==",
                                    "rule": ">::0",
                                    "type": "range"
                                }
                            ]
                        },
                        "type": "number",
                        "title": "患者年龄"
                    },
                    {
                        "submitName": "CM-0-2-1-1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_13",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "date",
                        "title": "出生日期"
                    },
                    {
                        "submitName": "DPD-0-2-8",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_271",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "date",
                        "title": "腹膜透析置管日期"
                    },
                    {
                        "submitName": "DPD-0-2-9",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_272",
                        "hide": false,
                        "values": [
                            {
                                "val": "def",
                                "remark": "请选择"
                            },
                            {
                                "val": "a",
                                "remark": "手术切开法"
                            },
                            {
                                "val": "b",
                                "remark": "经皮穿刺置管法"
                            },
                            {
                                "val": "c",
                                "remark": "腹腔镜置管法"
                            }
                        ],
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "select",
                        "title": "腹膜透析置管手术方式"
                    },
                    {
                        "no": "DPD_4",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_5",
                                "values": [
                                    {
                                        "val": "a",
                                        "remark": "肾功能 eGFR检测"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "血肌酐水平 SCr检测"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "血尿素氮水平 BUN检测"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_7",
                                            "rule": "==::a",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        },
                                        {
                                            "hide": "",
                                            "show": "DPD_8",
                                            "rule": "==::b",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        },
                                        {
                                            "hide": "",
                                            "show": "DPD_9",
                                            "rule": "==::c",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "checkbox",
                                "title": "首次肾脏替代治疗时检查结果",
                                "submitName": "DPD-1-1-2",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_6",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-1-2-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_7",
                                        "hide": true,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "肾功能 eGFR检测值(ml/min)"
                                    },
                                    {
                                        "submitName": "DPD-1-1-2-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_8",
                                        "hide": true,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血肌酐水平 SCr检测值(umol/L)"
                                    },
                                    {
                                        "submitName": "DPD-1-1-2-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_9",
                                        "hide": true,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血尿素氮水平 BUN检测值(mmol/L)"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    },
                    {
                        "submitName": "DPD-0-2-7",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_234",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "range",
                            "list": [
                                {
                                    "msg": "6YCP5p6Q6b6E5bqU5aSn5LqO562J5LqOMA==",
                                    "rule": ">=::0",
                                    "type": "range"
                                }
                            ]
                        },
                        "type": "number",
                        "title": "透析龄(月)"
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "患者基本情况"
            },
            {
                "no": "DPD_235",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_254",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-0-3-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_236",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "在透"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "死亡"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "肾移植"
                                    },
                                    {
                                        "val": "d",
                                        "remark": "转血液透析"
                                    },
                                    {
                                        "val": "f",
                                        "remark": "不详"
                                    },
                                    {
                                        "val": "oth",
                                        "remark": "其他"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_255",
                                            "rule": "==::oth",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "患者状态"
                            },
                            {
                                "submitName": "DPD-0-3-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_255",
                                "hide": true,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "reg",
                                    "list": [
                                        {
                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMzDkuKrlrZfor7TmmI4=",
                                            "rule": "Xi57MCwzMH0k",
                                            "type": "reg"
                                        }
                                    ]
                                },
                                "type": "text",
                                "title": "患者其他状态"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    },
                    {
                        "submitName": "DPD-0-3-2",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_237",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "range",
                            "list": [
                                {
                                    "msg": "6L2s5b2S5pel5pyf5bqU5aSn5LqO562J5LqO6IW56Iac6YCP5p6Q572u566h5pel5pyf",
                                    "rule": ">=::#{DPD_271}",
                                    "type": "range"
                                }
                            ]
                        },
                        "type": "date",
                        "title": "转归日期"
                    },
                    {
                        "no": "DPD_261",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-0-3-3-r",
                                "init": {
                                    "unit": "d",
                                    "rule": "I3tEUERfMjM3fTo6LTo6I3tEUERfMjcxfQ==",
                                    "type": "date"
                                },
                                "no": "DPD_274",
                                "hide": true,
                                "disabled": true,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "number",
                                "title": "腹膜透析治疗时间（天）",
                                "board": true
                            },
                            {
                                "submitName": "DPD-0-3-4-r",
                                "init": {
                                    "unit": "double",
                                    "rule": "I3tEUERfMjc0fTo6Lzo6MzA=",
                                    "type": "num",
                                    "decimal": "2"
                                },
                                "no": "DPD_54",
                                "hide": true,
                                "link": {
                                    "values": [
                                        {
                                            "val": "#{DPD_54}",
                                            "no": "DPD_270",
                                            "rule": ">=::0",
                                            "oper": ">=",
                                            "type": "reset",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "reset"
                                },
                                "disabled": true,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "number",
                                "title": "腹膜透析治疗时间（月）",
                                "board": true
                            },
                            {
                                "submitName": "DPD-0-3-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_270",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "number",
                                "title": "腹膜透析治疗时间（月）"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "患者透析状态"
            },
            {
                "no": "DPD_273",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "submitName": "DPD-0-4-1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_276",
                        "hide": false,
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "date",
                        "title": "原发病诊断时间"
                    },
                    {
                        "submitName": "DPD-0-4-2",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "DPD_277",
                        "hide": false,
                        "values": [
                            {
                                "val": "def",
                                "remark": "请选择"
                            },
                            {
                                "val": "a",
                                "remark": "原发性肾小球疾病"
                            },
                            {
                                "val": "b",
                                "remark": "糖尿病肾病"
                            },
                            {
                                "val": "c",
                                "remark": "高血压肾损害"
                            },
                            {
                                "val": "d",
                                "remark": "遗传性及先天性疾病"
                            },
                            {
                                "val": "e",
                                "remark": "肾小管间质疾病"
                            },
                            {
                                "val": "f",
                                "remark": "药物性肾损害"
                            },
                            {
                                "val": "g",
                                "remark": "泌尿系感染和结石"
                            },
                            {
                                "val": "h",
                                "remark": "不详"
                            }
                        ],
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "select",
                        "title": "原发病诊断"
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "采集原发病名称"
            },
            {
                "no": "CM_27",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "submitName": "CM-0-3-1",
                        "init": {
                            "rule": "",
                            "type": "normal"
                        },
                        "no": "CM_28",
                        "hide": false,
                        "values": [
                            {
                                "val": "def",
                                "remark": "请选择"
                            },
                            {
                                "val": "a",
                                "remark": "城镇职工基本医疗保险"
                            },
                            {
                                "val": "b",
                                "remark": "城镇居民基本医疗保险"
                            },
                            {
                                "val": "c",
                                "remark": "新型农村合作医疗"
                            },
                            {
                                "val": "d",
                                "remark": "贫困救助"
                            },
                            {
                                "val": "e",
                                "remark": "商业医疗保险"
                            },
                            {
                                "val": "f",
                                "remark": "公费医疗"
                            },
                            {
                                "val": "g",
                                "remark": "全自费"
                            },
                            {
                                "val": "h",
                                "remark": "其他社会保险（ 生育保险、工伤保险、农民工保险等）"
                            },
                            {
                                "val": "i",
                                "remark": "其他"
                            }
                        ],
                        "disabled": false,
                        "check": {
                            "notnull": true,
                            "type": "normal",
                            "list": []
                        },
                        "type": "select",
                        "title": "费用支付方式"
                    }
                ],
                "disabled": false,
                "type": "box",
                "title": "其他相关信息"
            }
        ],
        "disabled": false,
        "type": "box1",
        "title": "基本信息"
    },
    {
        "no": "DPD_275",
        "hide": true,
        "line": false,
        "sonList": [
            {
                "no": "DPD_278",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_279",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-1-1-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_280",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "一月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-1-1-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_281",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "二月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-1-1-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_282",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "三月份腹膜透析治疗室消毒合格情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "每月腹膜透析治疗室消毒合格情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-1: 腹膜透析室治疗室消毒合格情况"
            },
            {
                "no": "DPD_283",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_284",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-1-2-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_21",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "1季度/随访日期"
                            },
                            {
                                "submitName": "DPD-1-2-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_11",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "进口"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "国产"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "1季度/腹透液种类"
                            },
                            {
                                "submitName": "DPD-1-2-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_16",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "CAPD"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "IPD"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "APD"
                                    },
                                    {
                                        "val": "d",
                                        "remark": "其他"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "1季度/腹膜透析模式"
                            },
                            {
                                "no": "DPD_286",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-2-2-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_285",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "完成"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "未完成"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_287",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "1季度/血常规检验完成情况"
                                    },
                                    {
                                        "submitName": "DPD-1-2-2-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_287",
                                        "hide": true,
                                        "link": {
                                            "values": [
                                                {
                                                    "val": "#{DPD_287}",
                                                    "no": "DPD_73",
                                                    "rule": ">::0",
                                                    "oper": ">",
                                                    "type": "reset",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "reset"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "血常规检验完成日期"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第一季度检验完成情况"
                            },
                            {
                                "no": "DPD_288",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-2-2-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_289",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "完成"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "未完成"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_290",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "1季度/血生化检验完成情况"
                                    },
                                    {
                                        "submitName": "DPD-1-2-2-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_290",
                                        "hide": true,
                                        "link": {
                                            "values": [
                                                {
                                                    "val": "#{DPD_290}",
                                                    "no": "DPD_132",
                                                    "rule": ">::0",
                                                    "oper": ">",
                                                    "type": "reset",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "reset"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "血生化检验完成日期"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-2: 腹膜透析患者定时完成检验情况"
            },
            {
                "no": "DPD_291",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_53",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_55",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-3-1-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_56",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压SBP"
                                    },
                                    {
                                        "submitName": "DPD-1-3-1-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_57",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压DBP"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "no": "DPD_52",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-3-1-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_58",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "项目完成日期"
                                    },
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_59",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_60",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "高血压是否达标",
                                        "submitName": "DPD-1-3-1-5",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第一季度血压控制情况"
                    },
                    {
                        "no": "DPD_60",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_61",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_62",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有抗高血压药治疗医嘱",
                                "submitName": "DPD-1-3-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_62",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-3-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_63",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "抗高血压药治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_64",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_65",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "钙通道阻滞剂"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "ACEI/ARB"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α阻滞剂"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "β阻滞剂"
                                                    },
                                                    {
                                                        "val": "e",
                                                        "remark": "αβ阻滞剂"
                                                    },
                                                    {
                                                        "val": "f",
                                                        "remark": "中枢性降压药"
                                                    },
                                                    {
                                                        "val": "g",
                                                        "remark": "利尿剂"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_66",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "抗高血压药",
                                                "submitName": "DPD-1-3-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-1-3-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_66",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他抗高血压药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "抗高血压药治疗"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-3: 高血压控制情况 "
            },
            {
                "no": "DPD_292",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_68",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_69",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_70",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血常规 血红蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_72",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血红蛋白",
                                        "submitName": "DPD-1-4-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_71",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-1-4-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_72",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血红蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-1-4-1-3",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_73",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_74",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_75",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血红蛋白是否达标",
                                "submitName": "DPD-1-4-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第一季度肾性贫血控制情况"
                    },
                    {
                        "no": "DPD_75",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_76",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_77",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_78",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有ESA治疗医嘱",
                                        "submitName": "DPD-1-4-2-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_78",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-1-4-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_79",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "ESA治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_80",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_81",
                                                        "values": [
                                                            {
                                                                "val": "a",
                                                                "remark": "重组人红细胞生成素α"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "重组人红细胞生成素β"
                                                            },
                                                            {
                                                                "val": "c",
                                                                "remark": "达依泊汀"
                                                            },
                                                            {
                                                                "val": "d",
                                                                "remark": "持续性红细胞生成素受体激动剂"
                                                            },
                                                            {
                                                                "val": "e",
                                                                "remark": "缺氧诱导因子稳定剂"
                                                            },
                                                            {
                                                                "val": "oth",
                                                                "remark": "其他"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_82",
                                                                    "rule": "==::oth",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "checkbox",
                                                        "title": "ESA治疗药物",
                                                        "submitName": "DPD-1-4-2-3",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "submitName": "DPD-1-4-2-4",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_82",
                                                        "hide": true,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "reg",
                                                            "list": [
                                                                {
                                                                    "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                    "rule": "Xi57MCwyMH0k",
                                                                    "type": "reg"
                                                                }
                                                            ]
                                                        },
                                                        "type": "text",
                                                        "title": "ESA治疗其他药物"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "ESA治疗"
                            },
                            {
                                "no": "DPD_83",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_84",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_85",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有铁剂治疗医嘱",
                                        "submitName": "DPD-1-4-3-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_85",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-1-4-3-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_86",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "铁剂治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_87",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-1-4-3-3",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_293",
                                                        "hide": false,
                                                        "values": [
                                                            {
                                                                "val": "def",
                                                                "remark": "请选择"
                                                            },
                                                            {
                                                                "val": "a",
                                                                "remark": "口服铁剂治疗药物"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "静脉铁剂治疗药物"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_88",
                                                                    "rule": "==::a",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                },
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_91",
                                                                    "rule": "==::b",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "select",
                                                        "title": "铁剂治疗选择"
                                                    },
                                                    {
                                                        "no": "DPD_88",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_89",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "多糖铁复合物"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "复方硫酸亚铁叶酸片"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "琥珀酸亚铁片"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他口服铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_90",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "口服铁剂治疗药物",
                                                                "submitName": "DPD-1-4-3-4",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-1-4-3-5",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_90",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "口服铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    },
                                                    {
                                                        "no": "DPD_91",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_92",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "蔗糖铁"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "右旋糖酐铁"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "葡萄糖醛酸铁"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他静脉铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_93",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "静脉铁剂治疗药物",
                                                                "submitName": "DPD-1-4-3-6",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-1-4-3-7",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_93",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "静脉铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "铁剂治疗"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-4: 肾性贫血控制情况 "
            },
            {
                "no": "DPD_294",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-5: 钙磷代谢管理情况（填报时间：第二和第四季度,共2次）"
            },
            {
                "no": "DPD_295",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_296",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_297",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_298",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血清白蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_300",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血清白蛋白",
                                        "submitName": "DPD-1-6-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_299",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-1-6-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_300",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血清白蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-1-6-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_132",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_133",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_134",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血清白蛋白是否达标",
                                "submitName": "DPD-1-6-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第一季度血清白蛋白检验完成情况"
                    },
                    {
                        "no": "DPD_134",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_135",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_136",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有营养支持药物治疗医嘱",
                                "submitName": "DPD-1-6-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_136",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-6-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_137",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "营养支持药物治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_138",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_139",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "左旋肉碱"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "叶酸"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α酮酸"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "高能营养补充液"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他营养支持药物"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_140",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "营养支持药物",
                                                "submitName": "DPD-1-6-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-1-6-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_140",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他营养支持药物"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "营养支持药物"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-6: 血清白蛋白控制情况"
            },
            {
                "no": "DPD_301",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-7: 尿素清除指数(Kt/V)和总内生肌酐清除率（Ccr)（填报时间：第二和第四季度,共2次）"
            },
            {
                "no": "DPD_302",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_256",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_257",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_161",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有腹膜炎",
                                "submitName": "DPD-1-8-1-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_161",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-1-8-1-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_162",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "报告的日期"
                                    },
                                    {
                                        "submitName": "DPD-1-8-1-3",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_163",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "腹膜炎"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "出口感染"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "隧道感染"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "感染类型"
                                    },
                                    {
                                        "submitName": "DPD-1-8-1-4",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_164",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "病原检出"
                                    },
                                    {
                                        "submitName": "DPD-1-8-1-5",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_165",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "培养结果"
                                    },
                                    {
                                        "no": "DPD_166",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-1-8-2-1",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_167",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q6b6E5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析龄(月)"
                                            },
                                            {
                                                "submitName": "DPD-1-8-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_168",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q5qyh5pWw5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析次数(次)"
                                            },
                                            {
                                                "submitName": "DPD-1-8-2-3-r",
                                                "init": {
                                                    "unit": "double",
                                                    "rule": "I3tEUERfMTY3fTo6Lzo6I3tEUERfMTY4fQ==",
                                                    "type": "num",
                                                    "decimal": "2"
                                                },
                                                "no": "DPD_253",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_253}",
                                                            "no": "DPD_169",
                                                            "rule": ">=::0",
                                                            "oper": ">=",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": true,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）",
                                                "board": true
                                            },
                                            {
                                                "submitName": "DPD-1-8-2-3",
                                                "init": {
                                                    "rule": "I3tEUERfMTY3fQ==",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_169",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第一季度腹膜炎发生情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-8: 腹膜炎发生情况 "
            },
            {
                "no": "DPD_303",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-9: 提供腹膜透析治疗前、治疗后健康教育   (不开放)"
            },
            {
                "no": "DPD_304",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-10: 第一季度腹膜透析治疗费用   (不开放)"
            }
        ],
        "disabled": false,
        "type": "box1",
        "title": "第一季度"
    },
    {
        "no": "DPD_305",
        "hide": true,
        "line": false,
        "sonList": [
            {
                "no": "DPD_306",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_307",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-2-1-2-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_308",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "四月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-2-1-2-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_309",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "五月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-2-1-2-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_310",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "六月份腹膜透析治疗室消毒合格情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "每月腹膜透析治疗室消毒合格情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-1: 腹膜透析室治疗室消毒合格情况 "
            },
            {
                "no": "DPD_311",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_312",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-2-2-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_22",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "2季度/随访日期"
                            },
                            {
                                "submitName": "DPD-2-2-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_12",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "进口"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "国产"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "2季度/透析液种类"
                            },
                            {
                                "submitName": "DPD-2-2-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_17",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "CAPD"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "IPD"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "APD"
                                    },
                                    {
                                        "val": "d",
                                        "remark": "其他"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "2季度/腹透模式"
                            },
                            {
                                "no": "DPD_313",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-2-2-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_26",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "高转运"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "高平均转运"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "低平均转运"
                                            },
                                            {
                                                "val": "d",
                                                "remark": "低转运"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "腹膜平衡试验/上半年/标准平衡试验/转运类型"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "转运类型"
                            },
                            {
                                "no": "DPD_314",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "no": "DPD_315",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-1",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_316",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_317",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/血常规检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_317",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_317}",
                                                            "no": "DPD_383",
                                                            "rule": ">::0",
                                                            "oper": ">",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血常规检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_318",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-3",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_319",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_320",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/血生化检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-4",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_320",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_320}",
                                                            "no": "DPD_412",
                                                            "rule": ">::0",
                                                            "oper": ">",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血生化检完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_321",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-5",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_322",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_323",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/前白蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-6",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_323",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "前白蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_324",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-7",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_325",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_326",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/β2微球蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-8",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_326",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "β2微球蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_327",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-9",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_328",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_329",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/C反应蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-10",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_329",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "C反应蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_330",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-11",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_331",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_332",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/血清铁蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-12",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_332",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血清铁蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_333",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-2-3-13",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_334",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_335",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "2季度/转铁蛋白饱和度检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-2-2-3-14",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_335",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "转铁蛋白饱和度检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第二季度检验完成情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-2: 腹膜透析患者定时完成检验情况"
            },
            {
                "no": "DPD_336",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_352",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-2-3-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_353",
                                "hide": true,
                                "disabled": false,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "text",
                                "title": "血压情况",
                                "board": true
                            },
                            {
                                "no": "DPD_354",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-3-1-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_355",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压SBP"
                                    },
                                    {
                                        "submitName": "DPD-2-3-1-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_356",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压DBP"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "no": "DPD_357",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-3-1-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_358",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "项目完成日期"
                                    },
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_359",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_360",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "高血压是否达标",
                                        "submitName": "DPD-2-3-1-5",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第二季度血压控制情况"
                    },
                    {
                        "no": "DPD_360",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_361",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_362",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有抗高血压药治疗医嘱",
                                "submitName": "DPD-2-3-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_362",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-3-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_363",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "抗高血压药治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_364",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_365",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "钙通道阻滞剂"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "ACEI/ARB"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α阻滞剂"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "β阻滞剂"
                                                    },
                                                    {
                                                        "val": "e",
                                                        "remark": "αβ阻滞剂"
                                                    },
                                                    {
                                                        "val": "f",
                                                        "remark": "中枢性降压药"
                                                    },
                                                    {
                                                        "val": "g",
                                                        "remark": "利尿剂"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_366",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "抗高血压药",
                                                "submitName": "DPD-2-3-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-2-3-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_366",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他抗高血压药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "抗高血压药治疗"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-3: 高血压控制情况 "
            },
            {
                "no": "DPD_337",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_378",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_379",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_380",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血常规 血红蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_382",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血红蛋白",
                                        "submitName": "DPD-2-4-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_381",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-4-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_382",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血红蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-2-4-1-3",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_383",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_384",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_385",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血红蛋白是否达标",
                                "submitName": "DPD-2-4-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第二季度肾性贫血控制情况"
                    },
                    {
                        "no": "DPD_385",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_386",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_387",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_388",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有ESA治疗医嘱",
                                        "submitName": "DPD-2-4-2-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_388",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-4-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_389",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "ESA治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_390",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_391",
                                                        "values": [
                                                            {
                                                                "val": "a",
                                                                "remark": "重组人红细胞生成素α"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "重组人红细胞生成素β"
                                                            },
                                                            {
                                                                "val": "c",
                                                                "remark": "达依泊汀"
                                                            },
                                                            {
                                                                "val": "d",
                                                                "remark": "持续性红细胞生成素受体激动剂"
                                                            },
                                                            {
                                                                "val": "e",
                                                                "remark": "缺氧诱导因子稳定剂"
                                                            },
                                                            {
                                                                "val": "oth",
                                                                "remark": "其他"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_392",
                                                                    "rule": "==::oth",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "checkbox",
                                                        "title": "ESA治疗药物",
                                                        "submitName": "DPD-2-4-2-3",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "submitName": "DPD-2-4-2-4",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_392",
                                                        "hide": true,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "reg",
                                                            "list": [
                                                                {
                                                                    "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                    "rule": "Xi57MCwyMH0k",
                                                                    "type": "reg"
                                                                }
                                                            ]
                                                        },
                                                        "type": "text",
                                                        "title": "ESA治疗其他药物"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "ESA治疗"
                            },
                            {
                                "no": "DPD_393",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_394",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_395",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有铁剂治疗医嘱",
                                        "submitName": "DPD-2-4-3-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_395",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-4-3-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_396",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "铁剂治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_397",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-2-4-3-3",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_404",
                                                        "hide": false,
                                                        "values": [
                                                            {
                                                                "val": "def",
                                                                "remark": "请选择"
                                                            },
                                                            {
                                                                "val": "a",
                                                                "remark": "口服铁剂治疗药物"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "静脉铁剂治疗药物"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_398",
                                                                    "rule": "==::a",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                },
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_401",
                                                                    "rule": "==::b",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "select",
                                                        "title": "铁剂治疗选择"
                                                    },
                                                    {
                                                        "no": "DPD_398",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_399",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "多糖铁复合物"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "复方硫酸亚铁叶酸片"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "琥珀酸亚铁片"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他口服铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_400",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "口服铁剂治疗药物",
                                                                "submitName": "DPD-2-4-3-4",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-2-4-3-5",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_400",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "口服铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    },
                                                    {
                                                        "no": "DPD_401",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_402",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "蔗糖铁"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "右旋糖酐铁"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "葡萄糖醛酸铁"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他静脉铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_403",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "静脉铁剂治疗药物",
                                                                "submitName": "DPD-2-4-3-6",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-2-4-3-7",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_403",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "静脉铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "铁剂治疗"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-4: 肾性贫血控制情况 "
            },
            {
                "no": "DPD_338",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_95",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_96",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_97",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血总钙检测"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "血磷检测"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "PTH检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_99",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_100",
                                                    "rule": "==::b",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_101",
                                                    "rule": "==::c",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "检验情况",
                                        "submitName": "DPD-2-5-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_98",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-5-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_99",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血总钙检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-5-1-3",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_100",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血磷检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-5-1-4",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_101",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "PTH检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-5-1-5",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_102",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "项目完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第二季度完成钙磷代谢检验情况"
                            },
                            {
                                "submitName": "DPD-2-5-1-6",
                                "textsort": "2",
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_103",
                                "hide": false,
                                "selectMultiple": false,
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血总钙是否达标"
                            },
                            {
                                "no": "DPD_239",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-5-1-7",
                                        "textsort": "2",
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_104",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "血磷是否达标"
                                    },
                                    {
                                        "no": "DPD_240",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-5-1-8",
                                                "textsort": "2",
                                                "pointsort": "1",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_105",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "values": [
                                                    {
                                                        "val": "y",
                                                        "remark": "达标"
                                                    },
                                                    {
                                                        "val": "n",
                                                        "remark": "不达标"
                                                    }
                                                ],
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "radio",
                                                "title": "全段甲状旁腺激素（IPTH）是否达标"
                                            },
                                            {
                                                "no": "DPD_106",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "1",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_107",
                                                        "values": [
                                                            {
                                                                "val": "y",
                                                                "remark": "是"
                                                            },
                                                            {
                                                                "val": "n",
                                                                "remark": "否"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_108",
                                                                    "rule": "==::y",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "radio",
                                                        "title": "是否有MBD干预药治疗医嘱",
                                                        "submitName": "DPD-2-5-2-1",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "no": "DPD_108",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "submitName": "DPD-2-5-2-2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_109",
                                                                "hide": false,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": false,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "date",
                                                                "title": "MBD干预药治疗医嘱起始日期"
                                                            },
                                                            {
                                                                "no": "DPD_110",
                                                                "hide": false,
                                                                "line": false,
                                                                "sonList": [
                                                                    {
                                                                        "pointsort": "2",
                                                                        "init": {
                                                                            "rule": "VVRE",
                                                                            "type": "normal"
                                                                        },
                                                                        "no": "DPD_111",
                                                                        "values": [
                                                                            {
                                                                                "val": "a",
                                                                                "remark": "维生素D及衍生物"
                                                                            },
                                                                            {
                                                                                "val": "b",
                                                                                "remark": "含钙的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "c",
                                                                                "remark": "含铝的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "d",
                                                                                "remark": "不含钙铝的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "e",
                                                                                "remark": "拟钙剂"
                                                                            }
                                                                        ],
                                                                        "link": {
                                                                            "values": [
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_112",
                                                                                    "rule": "==::a",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_115",
                                                                                    "rule": "==::b",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_118",
                                                                                    "rule": "==::c",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_121",
                                                                                    "rule": "==::d",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_124",
                                                                                    "rule": "==::e",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                }
                                                                            ],
                                                                            "type": "hide"
                                                                        },
                                                                        "check": {
                                                                            "notnull": true,
                                                                            "type": "normal",
                                                                            "list": []
                                                                        },
                                                                        "type": "checkbox",
                                                                        "title": "MBD干预药选择",
                                                                        "submitName": "DPD-2-5-2-3",
                                                                        "textsort": "2",
                                                                        "hide": false,
                                                                        "selectMultiple": false,
                                                                        "disabled": false
                                                                    },
                                                                    {
                                                                        "no": "DPD_112",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_113",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "骨化三醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "阿法骨化醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "c",
                                                                                        "remark": "帕立骨化醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他维生素D及衍生物"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_114",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_维生素D及衍生物",
                                                                                "submitName": "DPD-2-5-2-4",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-2-5-2-5",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_114",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他维生素D及衍生物"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_115",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_116",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "碳酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "醋酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "c",
                                                                                        "remark": "葡萄糖酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他含钙的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_117",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_含钙的磷结合剂",
                                                                                "submitName": "DPD-2-5-2-6",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-2-5-2-7",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_117",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他含钙的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_118",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_119",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "氢氧化铝"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "硫糖铝,其它"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他含铝的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_120",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_含铝的磷结合剂",
                                                                                "submitName": "DPD-2-5-2-8",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-2-5-2-9",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_120",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他含铝的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_121",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_122",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "碳酸镧"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "司维拉姆"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他不含钙铝的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_123",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_不含钙铝的磷结合剂",
                                                                                "submitName": "DPD-2-5-2-10",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-2-5-2-11",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_123",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他不含钙铝的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_124",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_125",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "西那卡塞"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他拟钙剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_126",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_拟钙剂",
                                                                                "submitName": "DPD-2-5-2-12",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-2-5-2-13",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_126",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他拟钙剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    }
                                                                ],
                                                                "disabled": false,
                                                                "type": "box",
                                                                "title": ""
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": "MBD干预药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-5: 钙磷代谢管理情况"
            },
            {
                "no": "DPD_339",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_426",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_427",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_428",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血清白蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_430",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血清白蛋白",
                                        "submitName": "DPD-2-6-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_429",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-6-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_430",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血清白蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-2-6-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_412",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_413",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_414",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血清白蛋白是否达标",
                                "submitName": "DPD-2-6-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第二季度血清白蛋白检验完成情况"
                    },
                    {
                        "no": "DPD_414",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_415",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_416",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有营养支持药物治疗医嘱",
                                "submitName": "DPD-2-6-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_416",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-6-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_417",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "营养支持药物治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_418",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_419",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "左旋肉碱"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "叶酸"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α酮酸"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "高能营养补充液"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他营养支持药物"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_420",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "营养支持药物",
                                                "submitName": "DPD-2-6-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-2-6-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_420",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他营养支持药物"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "营养支持药物"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-6: 血清白蛋白控制情况"
            },
            {
                "no": "DPD_340",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_142",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_143",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_144",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "身高"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "体重"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "BMI"
                                            },
                                            {
                                                "val": "d",
                                                "remark": "体表面积"
                                            },
                                            {
                                                "val": "e",
                                                "remark": "总体水"
                                            },
                                            {
                                                "val": "f",
                                                "remark": "血尿素氮"
                                            },
                                            {
                                                "val": "g",
                                                "remark": "血肌酐"
                                            },
                                            {
                                                "val": "h",
                                                "remark": "24小时尿量"
                                            },
                                            {
                                                "val": "i",
                                                "remark": "24小时尿中尿素氮"
                                            },
                                            {
                                                "val": "j",
                                                "remark": "24小时尿肌酐"
                                            },
                                            {
                                                "val": "k",
                                                "remark": "24小时腹透液排出总量"
                                            },
                                            {
                                                "val": "l",
                                                "remark": "24小时透出液尿素氮"
                                            },
                                            {
                                                "val": "m",
                                                "remark": "24小时透出液肌酐"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "每周总Kt/V尿素清除指数"
                                            },
                                            {
                                                "val": "o",
                                                "remark": "总内生肌酐清除率"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_249",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_147",
                                                    "rule": "==::b",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_251",
                                                    "rule": "==::c",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_246",
                                                    "rule": "==::d",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_150",
                                                    "rule": "==::e",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_151",
                                                    "rule": "==::f",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_152",
                                                    "rule": "==::g",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_153",
                                                    "rule": "==::h",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_154",
                                                    "rule": "==::i",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_155",
                                                    "rule": "==::j",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_341",
                                                    "rule": "==::k",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_342",
                                                    "rule": "==::l",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_343",
                                                    "rule": "==::m",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_344",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_345",
                                                    "rule": "==::o",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "透析充分性(尿素清除指数（Kt/V）和尿素（URR）检验)",
                                        "submitName": "DPD-2-7-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_145",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "no": "DPD_249",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-2-7-1-2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_146",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "身高(cm)"
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-1-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfMTQ2fTo6Kjo6I3tEUERfMTQ2fQ==",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_244",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "身高转换",
                                                        "board": true
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-3",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_147",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "体重(kg)"
                                            },
                                            {
                                                "no": "DPD_251",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-2-7-1-3-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfMTQ3fSoxMDAwMDo6Lzo6I3tEUERfMjQ0fQ==",
                                                            "type": "num",
                                                            "decimal": "2"
                                                        },
                                                        "no": "DPD_250",
                                                        "hide": true,
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "val": "#{DPD_250}",
                                                                    "no": "DPD_148",
                                                                    "rule": ">=::0",
                                                                    "oper": ">=",
                                                                    "type": "reset",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "reset"
                                                        },
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体重指数(BMI)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-4",
                                                        "init": {
                                                            "rule": "I3tEUERfMTQ3fSoxMDAwMA==",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_148",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "range",
                                                            "list": [
                                                                {
                                                                    "msg": "5L2T6YeN5oyH5pWw5bqU5aSn5LqO562J5LqOMA==",
                                                                    "rule": ">=::0",
                                                                    "type": "range"
                                                                }
                                                            ]
                                                        },
                                                        "type": "number",
                                                        "title": "体重指数(BMI)"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "no": "DPD_246",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-2-7-1-4-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "MC4wMDYxOjoqOjoje0RQRF8xNDZ9",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_245",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "0.0061倍身高(cm)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-5-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "MC4wMTI4OjoqOjoje0RQRF8xNDd9",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_247",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "0.0128倍体重(kg)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-6-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfMjQ1fTo6Kzo6I3tEUERfMjQ3fQ==",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_248",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积公式",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-7-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfMjQ4fTo6LTo6MC4xNTI5",
                                                            "type": "num",
                                                            "decimal": "2"
                                                        },
                                                        "no": "DPD_252",
                                                        "hide": true,
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "val": "#{DPD_252}",
                                                                    "no": "DPD_149",
                                                                    "rule": ">=::0",
                                                                    "oper": ">=",
                                                                    "type": "reset",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "reset"
                                                        },
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积(m²)"
                                                    },
                                                    {
                                                        "submitName": "DPD-2-7-1-5",
                                                        "init": {
                                                            "rule": "I3tEUERfMjQ4fQ==",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_149",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "range",
                                                            "list": [
                                                                {
                                                                    "msg": "5L2T6KGo6Z2i56ev5bqU5aSn5LqO562J5LqOMA==",
                                                                    "rule": ">=::0",
                                                                    "type": "range"
                                                                }
                                                            ]
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积(m²)"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-6",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_150",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "5oC75L2T5rC05aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "总体水(V)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-7",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_151",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6KGA5bC/57Sg5rCu5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "血尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-8",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_152",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-9",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_153",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿量(L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-10",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_154",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿中尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-11",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_155",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-12",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_341",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时腹透液排出总量(L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-13",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_342",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时透出液尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-14",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_343",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时透出液肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-15",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_344",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "每周总Kt/V尿素清除指数"
                                            },
                                            {
                                                "submitName": "DPD-2-7-1-16",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_345",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "总内生肌酐清除率（Ccr）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-2-7-1-17",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_156",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "完成日期"
                            },
                            {
                                "no": "DPD_157",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-7-2-1",
                                        "textsort": "2",
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_158",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "尿素清除指数 总ktv是否达标"
                                    },
                                    {
                                        "submitName": "DPD-2-7-2-2",
                                        "textsort": "2",
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_159",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "总内生肌酐清除率 总ccr是否达标"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-7: 尿素清除指数(Kt/V)和总内生肌酐清除率（Ccr)"
            },
            {
                "no": "DPD_346",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_446",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_447",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_431",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有腹膜炎",
                                "submitName": "DPD-2-8-1-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_431",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-2-8-1-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_432",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "报告的日期"
                                    },
                                    {
                                        "submitName": "DPD-2-8-1-3",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_433",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "腹膜炎"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "出口感染"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "隧道感染"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "感染类型"
                                    },
                                    {
                                        "submitName": "DPD-2-8-1-4",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_434",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "病原检出"
                                    },
                                    {
                                        "submitName": "DPD-2-8-1-5",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_435",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "培养结果"
                                    },
                                    {
                                        "no": "DPD_436",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-2-8-2-1",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_437",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q6b6E5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析龄(月)"
                                            },
                                            {
                                                "submitName": "DPD-2-8-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_438",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q5qyh5pWw5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析次数(次)"
                                            },
                                            {
                                                "submitName": "DPD-2-8-2-3-r",
                                                "init": {
                                                    "unit": "double",
                                                    "rule": "I3tEUERfNDM3fTo6Lzo6I3tEUERfNDM4fQ==",
                                                    "type": "num",
                                                    "decimal": "2"
                                                },
                                                "no": "DPD_443",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_443}",
                                                            "no": "DPD_439",
                                                            "rule": ">=::0",
                                                            "oper": ">=",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": true,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）",
                                                "board": true
                                            },
                                            {
                                                "submitName": "DPD-2-8-2-3",
                                                "init": {
                                                    "rule": "I3tEUERfMTY3fQ==",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_439",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第二季度腹膜炎发生情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-8: 腹膜炎发生情况 "
            },
            {
                "no": "DPD_347",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-9: 提供腹膜透析治疗前、治疗后健康教育   (不开放)"
            },
            {
                "no": "DPD_348",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-10: 第二季度腹膜透析治疗费用   (不开放)"
            }
        ],
        "disabled": false,
        "type": "box1",
        "title": "第二季度"
    },
    {
        "no": "DPD_349",
        "hide": true,
        "line": false,
        "sonList": [
            {
                "no": "DPD_458",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_459",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-3-1-2-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_460",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "七月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-3-1-2-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_461",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "八月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-3-1-2-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_462",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "九月份腹膜透析治疗室消毒合格情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "每月腹膜透析治疗室消毒合格情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-1: 腹膜透析室治疗室消毒合格情况"
            },
            {
                "no": "DPD_473",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_474",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-3-2-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_468",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "3季度/随访日期"
                            },
                            {
                                "submitName": "DPD-3-2-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_466",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "进口"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "国产"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "3季度/腹透液种类"
                            },
                            {
                                "submitName": "DPD-3-2-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_467",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "CAPD"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "IPD"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "APD"
                                    },
                                    {
                                        "val": "d",
                                        "remark": "其他"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "3季度/腹膜透析模式"
                            },
                            {
                                "no": "DPD_476",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-2-2-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_475",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "完成"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "未完成"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_477",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "3季度/血常规检验完成情况"
                                    },
                                    {
                                        "submitName": "DPD-3-2-2-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_477",
                                        "hide": true,
                                        "link": {
                                            "values": [
                                                {
                                                    "val": "#{DPD_477}",
                                                    "no": "DPD_513",
                                                    "rule": ">::0",
                                                    "oper": ">",
                                                    "type": "reset",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "reset"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "血常规检验完成日期"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第三季度检验完成情况"
                            },
                            {
                                "no": "DPD_478",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-2-2-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_479",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "完成"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "未完成"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_480",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "3季度/血生化检验完成情况"
                                    },
                                    {
                                        "submitName": "DPD-3-2-2-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_480",
                                        "hide": true,
                                        "link": {
                                            "values": [
                                                {
                                                    "val": "#{DPD_480}",
                                                    "no": "DPD_542",
                                                    "rule": ">::0",
                                                    "oper": ">",
                                                    "type": "reset",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "reset"
                                        },
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "血生化检验完成日期"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-2: 腹膜透析患者定时完成检验情况"
            },
            {
                "no": "DPD_464",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_483",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-3-3-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_484",
                                "hide": true,
                                "disabled": false,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "text",
                                "title": "血压情况",
                                "board": true
                            },
                            {
                                "no": "DPD_485",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-3-1-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_486",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压SBP"
                                    },
                                    {
                                        "submitName": "DPD-3-3-1-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_487",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压DBP"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "no": "DPD_482",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-3-1-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_488",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "项目完成日期"
                                    },
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_489",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_490",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "高血压是否达标",
                                        "submitName": "DPD-3-3-1-5",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第三季度血压控制情况"
                    },
                    {
                        "no": "DPD_490",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_491",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_492",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有抗高血压药治疗医嘱",
                                "submitName": "DPD-3-3-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_492",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-3-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_493",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "抗高血压药治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_494",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_495",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "钙通道阻滞剂"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "ACEI/ARB"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α阻滞剂"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "β阻滞剂"
                                                    },
                                                    {
                                                        "val": "e",
                                                        "remark": "αβ阻滞剂"
                                                    },
                                                    {
                                                        "val": "f",
                                                        "remark": "中枢性降压药"
                                                    },
                                                    {
                                                        "val": "g",
                                                        "remark": "利尿剂"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_496",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "抗高血压药",
                                                "submitName": "DPD-3-3-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-3-3-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_496",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他抗高血压药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "抗高血压药治疗"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-3: 高血压控制情况 "
            },
            {
                "no": "DPD_465",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_508",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_509",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_510",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血常规 血红蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_512",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血红蛋白",
                                        "submitName": "DPD-3-4-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_511",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-3-4-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_512",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血红蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-3-4-1-3",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_513",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_514",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_515",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血红蛋白是否达标",
                                "submitName": "DPD-3-4-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第三季度肾性贫血控制情况"
                    },
                    {
                        "no": "DPD_515",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_516",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_517",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_518",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有ESA治疗医嘱",
                                        "submitName": "DPD-3-4-2-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_518",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-3-4-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_519",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "ESA治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_520",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_521",
                                                        "values": [
                                                            {
                                                                "val": "a",
                                                                "remark": "重组人红细胞生成素α"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "重组人红细胞生成素β"
                                                            },
                                                            {
                                                                "val": "c",
                                                                "remark": "达依泊汀"
                                                            },
                                                            {
                                                                "val": "d",
                                                                "remark": "持续性红细胞生成素受体激动剂"
                                                            },
                                                            {
                                                                "val": "e",
                                                                "remark": "缺氧诱导因子稳定剂"
                                                            },
                                                            {
                                                                "val": "oth",
                                                                "remark": "其他"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_522",
                                                                    "rule": "==::oth",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "checkbox",
                                                        "title": "ESA治疗药物",
                                                        "submitName": "DPD-3-4-2-3",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "submitName": "DPD-3-4-2-4",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_522",
                                                        "hide": true,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "reg",
                                                            "list": [
                                                                {
                                                                    "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                    "rule": "Xi57MCwyMH0k",
                                                                    "type": "reg"
                                                                }
                                                            ]
                                                        },
                                                        "type": "text",
                                                        "title": "ESA治疗其他药物"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "ESA治疗"
                            },
                            {
                                "no": "DPD_523",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_524",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_525",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有铁剂治疗医嘱",
                                        "submitName": "DPD-3-4-3-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_525",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-3-4-3-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_526",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "铁剂治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_527",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-3-4-3-3",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_534",
                                                        "hide": false,
                                                        "values": [
                                                            {
                                                                "val": "def",
                                                                "remark": "请选择"
                                                            },
                                                            {
                                                                "val": "a",
                                                                "remark": "口服铁剂治疗药物"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "静脉铁剂治疗药物"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_528",
                                                                    "rule": "==::a",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                },
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_531",
                                                                    "rule": "==::b",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "select",
                                                        "title": "铁剂治疗选择"
                                                    },
                                                    {
                                                        "no": "DPD_528",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_529",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "多糖铁复合物"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "复方硫酸亚铁叶酸片"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "琥珀酸亚铁片"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他口服铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_530",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "口服铁剂治疗药物",
                                                                "submitName": "DPD-3-4-3-4",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-3-4-3-5",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_530",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "口服铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    },
                                                    {
                                                        "no": "DPD_531",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_532",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "蔗糖铁"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "右旋糖酐铁"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "葡萄糖醛酸铁"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他静脉铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_533",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "静脉铁剂治疗药物",
                                                                "submitName": "DPD-3-4-3-6",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-3-4-3-7",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_533",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "静脉铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "铁剂治疗"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-4: 肾性贫血控制情况 "
            },
            {
                "no": "DPD_535",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-5: 钙磷代谢管理情况（填报时间：第二和第四季度,共2次）"
            },
            {
                "no": "DPD_536",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_546",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_547",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_548",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血清白蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_550",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血清白蛋白",
                                        "submitName": "DPD-3-6-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_549",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-3-6-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_550",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血清白蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-3-6-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_542",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_543",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_544",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血清白蛋白是否达标",
                                "submitName": "DPD-3-6-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第三季度血清白蛋白检验完成情况"
                    },
                    {
                        "no": "DPD_544",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_565",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_546",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有营养支持药物治疗医嘱",
                                "submitName": "DPD-3-6-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_566",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-6-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_567",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "营养支持药物治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_568",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_569",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "左旋肉碱"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "叶酸"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α酮酸"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "高能营养补充液"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他营养支持药物"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_570",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "营养支持药物",
                                                "submitName": "DPD-3-6-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-3-6-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_570",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他营养支持药物"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "营养支持药物"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-6: 血清白蛋白控制情况"
            },
            {
                "no": "DPD_537",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-7: 尿素清除指数(Kt/V)和总内生肌酐清除率（Ccr)（填报时间：第二和第四季度,共2次）"
            },
            {
                "no": "DPD_538",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_576",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_577",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_581",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有腹膜炎",
                                "submitName": "DPD-3-8-1-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_581",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-3-8-1-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_582",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "报告的日期"
                                    },
                                    {
                                        "submitName": "DPD-3-8-1-3",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_583",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "腹膜炎"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "出口感染"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "隧道感染"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "感染类型"
                                    },
                                    {
                                        "submitName": "DPD-3-8-1-4",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_584",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "病原检出"
                                    },
                                    {
                                        "submitName": "DPD-3-8-1-5",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_585",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "培养结果"
                                    },
                                    {
                                        "no": "DPD_586",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-3-8-2-1",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_587",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q6b6E5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析龄(月)"
                                            },
                                            {
                                                "submitName": "DPD-3-8-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_588",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q5qyh5pWw5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析次数(次)"
                                            },
                                            {
                                                "submitName": "DPD-3-8-2-3-r",
                                                "init": {
                                                    "unit": "double",
                                                    "rule": "I3tEUERfNTg3fTo6Lzo6I3tEUERfNTg4fQ==",
                                                    "type": "num",
                                                    "decimal": "2"
                                                },
                                                "no": "DPD_573",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_573}",
                                                            "no": "DPD_589",
                                                            "rule": ">=::0",
                                                            "oper": ">=",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": true,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）",
                                                "board": true
                                            },
                                            {
                                                "submitName": "DPD-3-8-2-3",
                                                "init": {
                                                    "rule": "I3tEUERfMTY3fQ==",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_589",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第三季度腹膜炎发生情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-8: 腹膜炎发生情况 "
            },
            {
                "no": "DPD_590",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-9: 提供腹膜透析治疗前、治疗后健康教育   (不开放)"
            },
            {
                "no": "DPD_591",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-10: 第三季度腹膜透析治疗费用   (不开放)"
            }
        ],
        "disabled": false,
        "type": "box1",
        "title": "第三季度"
    },
    {
        "no": "DPD_592",
        "hide": true,
        "line": false,
        "sonList": [
            {
                "no": "DPD_593",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_597",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-4-1-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_598",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "十月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-4-1-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_599",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "十一月份腹膜透析治疗室消毒合格情况"
                            },
                            {
                                "submitName": "DPD-4-1-1-4",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_600",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "合格"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "不合格"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "未检测"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "十二月份腹膜透析治疗室消毒合格情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "每月腹膜透析治疗室消毒合格情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-1: 腹膜透析室治疗室消毒合格情况 "
            },
            {
                "no": "DPD_594",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_602",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-4-2-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_595",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "4季度/随访日期"
                            },
                            {
                                "submitName": "DPD-4-2-1-2",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_596",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "进口"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "国产"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "4季度/透析液种类"
                            },
                            {
                                "submitName": "DPD-4-2-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_601",
                                "hide": false,
                                "values": [
                                    {
                                        "val": "def",
                                        "remark": "请选择"
                                    },
                                    {
                                        "val": "a",
                                        "remark": "CAPD"
                                    },
                                    {
                                        "val": "b",
                                        "remark": "IPD"
                                    },
                                    {
                                        "val": "c",
                                        "remark": "APD"
                                    },
                                    {
                                        "val": "d",
                                        "remark": "其他"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "select",
                                "title": "4季度/腹透模式"
                            },
                            {
                                "no": "DPD_603",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-2-2-1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_626",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "高转运"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "高平均转运"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "低平均转运"
                                            },
                                            {
                                                "val": "d",
                                                "remark": "低转运"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "腹膜平衡试验/下半年/标准平衡试验/转运类型"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "转运类型"
                            },
                            {
                                "no": "DPD_604",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "no": "DPD_605",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-2-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_606",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_607",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/血常规检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_607",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_607}",
                                                            "no": "DPD_653",
                                                            "rule": ">::0",
                                                            "oper": ">",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血常规检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_608",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-3",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_609",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_610",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/血生化检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-4",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_610",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_610}",
                                                            "no": "DPD_722",
                                                            "rule": ">::0",
                                                            "oper": ">",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血生化检完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_611",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-5",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_612",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_613",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/前白蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-6",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_613",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "前白蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_614",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-7",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_615",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_616",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/β2微球蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-8",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_616",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "β2微球蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_617",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-9",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_618",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_619",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/C反应蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-10",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_619",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "C反应蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_620",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-11",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_621",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_622",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/血清铁蛋白检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-12",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_622",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "血清铁蛋白检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    },
                                    {
                                        "no": "DPD_623",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-2-3-13",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_624",
                                                "hide": false,
                                                "values": [
                                                    {
                                                        "val": "def",
                                                        "remark": "请选择"
                                                    },
                                                    {
                                                        "val": "a",
                                                        "remark": "完成"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "未完成"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_625",
                                                            "rule": "==::a",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "select",
                                                "title": "4季度/转铁蛋白饱和度检验完成情况"
                                            },
                                            {
                                                "submitName": "DPD-4-2-3-14",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_625",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "转铁蛋白饱和度检验完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第四季度检验完成情况"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-2: 腹膜透析患者定时完成检验情况"
            },
            {
                "no": "DPD_627",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_632",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "submitName": "DPD-4-3-1-1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_633",
                                "hide": true,
                                "disabled": false,
                                "check": {
                                    "notnull": false,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "text",
                                "title": "血压情况",
                                "board": true
                            },
                            {
                                "no": "DPD_634",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-3-1-2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_635",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压SBP"
                                    },
                                    {
                                        "submitName": "DPD-4-3-1-3",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_636",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "number",
                                        "title": "血压DBP"
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "no": "DPD_637",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-3-1-4",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_638",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "项目完成日期"
                                    },
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_639",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_640",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "高血压是否达标",
                                        "submitName": "DPD-4-3-1-5",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第四季度血压控制情况"
                    },
                    {
                        "no": "DPD_640",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_641",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_642",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有抗高血压药治疗医嘱",
                                "submitName": "DPD-4-3-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_642",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-3-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_643",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "抗高血压药治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_644",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_645",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "钙通道阻滞剂"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "ACEI/ARB"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α阻滞剂"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "β阻滞剂"
                                                    },
                                                    {
                                                        "val": "e",
                                                        "remark": "αβ阻滞剂"
                                                    },
                                                    {
                                                        "val": "f",
                                                        "remark": "中枢性降压药"
                                                    },
                                                    {
                                                        "val": "g",
                                                        "remark": "利尿剂"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_646",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "抗高血压药",
                                                "submitName": "DPD-4-3-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-4-3-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_646",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他抗高血压药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "抗高血压药治疗"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-3: 高血压控制情况 "
            },
            {
                "no": "DPD_628",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_648",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_649",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_650",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血常规 血红蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_652",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血红蛋白",
                                        "submitName": "DPD-4-4-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_651",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-4-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_652",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血红蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-4-4-1-3",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_653",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_654",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_655",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血红蛋白是否达标",
                                "submitName": "DPD-4-4-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第四季度肾性贫血控制情况"
                    },
                    {
                        "no": "DPD_655",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_656",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_657",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_658",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有ESA治疗医嘱",
                                        "submitName": "DPD-4-4-2-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_658",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-4-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_659",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "ESA治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_660",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_661",
                                                        "values": [
                                                            {
                                                                "val": "a",
                                                                "remark": "重组人红细胞生成素α"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "重组人红细胞生成素β"
                                                            },
                                                            {
                                                                "val": "c",
                                                                "remark": "达依泊汀"
                                                            },
                                                            {
                                                                "val": "d",
                                                                "remark": "持续性红细胞生成素受体激动剂"
                                                            },
                                                            {
                                                                "val": "e",
                                                                "remark": "缺氧诱导因子稳定剂"
                                                            },
                                                            {
                                                                "val": "oth",
                                                                "remark": "其他"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_662",
                                                                    "rule": "==::oth",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "checkbox",
                                                        "title": "ESA治疗药物",
                                                        "submitName": "DPD-4-4-2-3",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "submitName": "DPD-4-4-2-4",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_662",
                                                        "hide": true,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "reg",
                                                            "list": [
                                                                {
                                                                    "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                    "rule": "Xi57MCwyMH0k",
                                                                    "type": "reg"
                                                                }
                                                            ]
                                                        },
                                                        "type": "text",
                                                        "title": "ESA治疗其他药物"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "ESA治疗"
                            },
                            {
                                "no": "DPD_663",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_664",
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "是"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "否"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_665",
                                                    "rule": "==::y",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "是否有铁剂治疗医嘱",
                                        "submitName": "DPD-4-4-3-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_665",
                                        "hide": true,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-4-3-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_666",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "铁剂治疗医嘱起始日期"
                                            },
                                            {
                                                "no": "DPD_667",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-4-4-3-3",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_674",
                                                        "hide": false,
                                                        "values": [
                                                            {
                                                                "val": "def",
                                                                "remark": "请选择"
                                                            },
                                                            {
                                                                "val": "a",
                                                                "remark": "口服铁剂治疗药物"
                                                            },
                                                            {
                                                                "val": "b",
                                                                "remark": "静脉铁剂治疗药物"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_668",
                                                                    "rule": "==::a",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                },
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_671",
                                                                    "rule": "==::b",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "select",
                                                        "title": "铁剂治疗选择"
                                                    },
                                                    {
                                                        "no": "DPD_668",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_669",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "多糖铁复合物"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "复方硫酸亚铁叶酸片"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "琥珀酸亚铁片"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他口服铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_670",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "口服铁剂治疗药物",
                                                                "submitName": "DPD-4-4-3-4",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-4-4-3-5",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_670",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "口服铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    },
                                                    {
                                                        "no": "DPD_671",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "pointsort": "2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_672",
                                                                "values": [
                                                                    {
                                                                        "val": "a",
                                                                        "remark": "蔗糖铁"
                                                                    },
                                                                    {
                                                                        "val": "b",
                                                                        "remark": "右旋糖酐铁"
                                                                    },
                                                                    {
                                                                        "val": "c",
                                                                        "remark": "葡萄糖醛酸铁"
                                                                    },
                                                                    {
                                                                        "val": "oth",
                                                                        "remark": "其他静脉铁剂"
                                                                    }
                                                                ],
                                                                "link": {
                                                                    "values": [
                                                                        {
                                                                            "hide": "",
                                                                            "show": "DPD_673",
                                                                            "rule": "==::oth",
                                                                            "oper": "==",
                                                                            "type": "hide",
                                                                            "maxOper": "",
                                                                            "maxRule": ""
                                                                        }
                                                                    ],
                                                                    "type": "hide"
                                                                },
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "checkbox",
                                                                "title": "静脉铁剂治疗药物",
                                                                "submitName": "DPD-4-4-3-6",
                                                                "textsort": "2",
                                                                "hide": false,
                                                                "selectMultiple": false,
                                                                "disabled": false
                                                            },
                                                            {
                                                                "submitName": "DPD-4-4-3-7",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_673",
                                                                "hide": true,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": true,
                                                                    "type": "reg",
                                                                    "list": [
                                                                        {
                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                            "rule": "Xi57MCwyMH0k",
                                                                            "type": "reg"
                                                                        }
                                                                    ]
                                                                },
                                                                "type": "text",
                                                                "title": "静脉铁剂治疗其他药物"
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "铁剂治疗"
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-4: 肾性贫血控制情况 "
            },
            {
                "no": "DPD_675",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_685",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_686",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_687",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血总钙检测"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "血磷检测"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "PTH检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_689",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_690",
                                                    "rule": "==::b",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_691",
                                                    "rule": "==::c",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "检验情况",
                                        "submitName": "DPD-4-5-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_688",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-5-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_689",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血总钙检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-5-1-3",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_690",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血磷检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-5-1-4",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_691",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "PTH检测值(mmol/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-5-1-5",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_692",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "date",
                                                "title": "项目完成日期"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": "第四季度完成钙磷代谢检验情况"
                            },
                            {
                                "submitName": "DPD-4-5-1-6",
                                "textsort": "2",
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_693",
                                "hide": false,
                                "selectMultiple": false,
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血总钙是否达标"
                            },
                            {
                                "no": "DPD_719",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-5-1-7",
                                        "textsort": "2",
                                        "pointsort": "1",
                                        "init": {
                                            "rule": "",
                                            "type": "normal"
                                        },
                                        "no": "DPD_694",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "values": [
                                            {
                                                "val": "y",
                                                "remark": "达标"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "不达标"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "radio",
                                        "title": "血磷是否达标"
                                    },
                                    {
                                        "no": "DPD_720",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-5-1-8",
                                                "textsort": "2",
                                                "pointsort": "1",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_695",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "values": [
                                                    {
                                                        "val": "y",
                                                        "remark": "达标"
                                                    },
                                                    {
                                                        "val": "n",
                                                        "remark": "不达标"
                                                    }
                                                ],
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "radio",
                                                "title": "全段甲状旁腺激素（IPTH）是否达标"
                                            },
                                            {
                                                "no": "DPD_696",
                                                "hide": false,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "pointsort": "1",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_697",
                                                        "values": [
                                                            {
                                                                "val": "y",
                                                                "remark": "是"
                                                            },
                                                            {
                                                                "val": "n",
                                                                "remark": "否"
                                                            }
                                                        ],
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "hide": "",
                                                                    "show": "DPD_698",
                                                                    "rule": "==::y",
                                                                    "oper": "==",
                                                                    "type": "hide",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "hide"
                                                        },
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "radio",
                                                        "title": "是否有MBD干预药治疗医嘱",
                                                        "submitName": "DPD-4-5-2-1",
                                                        "textsort": "2",
                                                        "hide": false,
                                                        "selectMultiple": false,
                                                        "disabled": false
                                                    },
                                                    {
                                                        "no": "DPD_698",
                                                        "hide": true,
                                                        "line": false,
                                                        "sonList": [
                                                            {
                                                                "submitName": "DPD-4-5-2-2",
                                                                "init": {
                                                                    "rule": "VVRE",
                                                                    "type": "normal"
                                                                },
                                                                "no": "DPD_699",
                                                                "hide": false,
                                                                "disabled": false,
                                                                "check": {
                                                                    "notnull": false,
                                                                    "type": "normal",
                                                                    "list": []
                                                                },
                                                                "type": "date",
                                                                "title": "MBD干预药治疗医嘱起始日期"
                                                            },
                                                            {
                                                                "no": "DPD_700",
                                                                "hide": false,
                                                                "line": false,
                                                                "sonList": [
                                                                    {
                                                                        "pointsort": "2",
                                                                        "init": {
                                                                            "rule": "VVRE",
                                                                            "type": "normal"
                                                                        },
                                                                        "no": "DPD_701",
                                                                        "values": [
                                                                            {
                                                                                "val": "a",
                                                                                "remark": "维生素D及衍生物"
                                                                            },
                                                                            {
                                                                                "val": "b",
                                                                                "remark": "含钙的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "c",
                                                                                "remark": "含铝的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "d",
                                                                                "remark": "不含钙铝的磷结合剂"
                                                                            },
                                                                            {
                                                                                "val": "e",
                                                                                "remark": "拟钙剂"
                                                                            }
                                                                        ],
                                                                        "link": {
                                                                            "values": [
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_702",
                                                                                    "rule": "==::a",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_705",
                                                                                    "rule": "==::b",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_708",
                                                                                    "rule": "==::c",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_711",
                                                                                    "rule": "==::d",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                },
                                                                                {
                                                                                    "hide": "",
                                                                                    "show": "DPD_714",
                                                                                    "rule": "==::e",
                                                                                    "oper": "==",
                                                                                    "type": "hide",
                                                                                    "maxOper": "",
                                                                                    "maxRule": ""
                                                                                }
                                                                            ],
                                                                            "type": "hide"
                                                                        },
                                                                        "check": {
                                                                            "notnull": true,
                                                                            "type": "normal",
                                                                            "list": []
                                                                        },
                                                                        "type": "checkbox",
                                                                        "title": "MBD干预药选择",
                                                                        "submitName": "DPD-4-5-2-3",
                                                                        "textsort": "2",
                                                                        "hide": false,
                                                                        "selectMultiple": false,
                                                                        "disabled": false
                                                                    },
                                                                    {
                                                                        "no": "DPD_702",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_703",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "骨化三醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "阿法骨化醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "c",
                                                                                        "remark": "帕立骨化醇"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他维生素D及衍生物"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_704",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_维生素D及衍生物",
                                                                                "submitName": "DPD-4-5-2-4",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-4-5-2-5",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_704",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他维生素D及衍生物"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_705",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_706",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "碳酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "醋酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "c",
                                                                                        "remark": "葡萄糖酸钙"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他含钙的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_707",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_含钙的磷结合剂",
                                                                                "submitName": "DPD-4-5-2-6",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-4-5-2-7",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_707",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他含钙的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_708",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_709",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "氢氧化铝"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "硫糖铝,其它"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他含铝的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_710",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_含铝的磷结合剂",
                                                                                "submitName": "DPD-4-5-2-8",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-4-5-2-9",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_710",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他含铝的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_711",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_712",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "碳酸镧"
                                                                                    },
                                                                                    {
                                                                                        "val": "b",
                                                                                        "remark": "司维拉姆"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他不含钙铝的磷结合剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_713",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_不含钙铝的磷结合剂",
                                                                                "submitName": "DPD-4-5-2-10",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-4-5-2-11",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_713",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他不含钙铝的磷结合剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    },
                                                                    {
                                                                        "no": "DPD_714",
                                                                        "hide": true,
                                                                        "line": false,
                                                                        "sonList": [
                                                                            {
                                                                                "pointsort": "2",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_715",
                                                                                "values": [
                                                                                    {
                                                                                        "val": "a",
                                                                                        "remark": "西那卡塞"
                                                                                    },
                                                                                    {
                                                                                        "val": "oth",
                                                                                        "remark": "其他拟钙剂"
                                                                                    }
                                                                                ],
                                                                                "link": {
                                                                                    "values": [
                                                                                        {
                                                                                            "hide": "",
                                                                                            "show": "DPD_716",
                                                                                            "rule": "==::oth",
                                                                                            "oper": "==",
                                                                                            "type": "hide",
                                                                                            "maxOper": "",
                                                                                            "maxRule": ""
                                                                                        }
                                                                                    ],
                                                                                    "type": "hide"
                                                                                },
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "normal",
                                                                                    "list": []
                                                                                },
                                                                                "type": "checkbox",
                                                                                "title": "MBD干预药_拟钙剂",
                                                                                "submitName": "DPD-4-5-2-12",
                                                                                "textsort": "2",
                                                                                "hide": false,
                                                                                "selectMultiple": false,
                                                                                "disabled": false
                                                                            },
                                                                            {
                                                                                "submitName": "DPD-4-5-2-13",
                                                                                "init": {
                                                                                    "rule": "VVRE",
                                                                                    "type": "normal"
                                                                                },
                                                                                "no": "DPD_716",
                                                                                "hide": true,
                                                                                "disabled": false,
                                                                                "check": {
                                                                                    "notnull": true,
                                                                                    "type": "reg",
                                                                                    "list": [
                                                                                        {
                                                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                                                            "rule": "Xi57MCwyMH0k",
                                                                                            "type": "reg"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "type": "text",
                                                                                "title": "其他拟钙剂"
                                                                            }
                                                                        ],
                                                                        "disabled": false,
                                                                        "type": "box",
                                                                        "title": ""
                                                                    }
                                                                ],
                                                                "disabled": false,
                                                                "type": "box",
                                                                "title": ""
                                                            }
                                                        ],
                                                        "disabled": false,
                                                        "type": "box",
                                                        "title": ""
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": "MBD干预药"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-5: 钙磷代谢管理情况"
            },
            {
                "no": "DPD_676",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_736",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_737",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_738",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "血清白蛋白检测"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_740",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "血清白蛋白",
                                        "submitName": "DPD-4-6-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_739",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-6-1-2",
                                                "init": {
                                                    "rule": "",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_740",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血清白蛋白检测值(g/L )"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-4-6-1-3",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_722",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "项目完成日期"
                            },
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_723",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "达标"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "不达标"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_724",
                                            "rule": "==::n",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "血清白蛋白是否达标",
                                "submitName": "DPD-4-6-1-4",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第四季度血清白蛋白检验完成情况"
                    },
                    {
                        "no": "DPD_724",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_725",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_726",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有营养支持药物治疗医嘱",
                                "submitName": "DPD-4-6-2-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_726",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-6-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_727",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "营养支持药物治疗医嘱起始日期"
                                    },
                                    {
                                        "no": "DPD_728",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "pointsort": "2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_729",
                                                "values": [
                                                    {
                                                        "val": "a",
                                                        "remark": "左旋肉碱"
                                                    },
                                                    {
                                                        "val": "b",
                                                        "remark": "叶酸"
                                                    },
                                                    {
                                                        "val": "c",
                                                        "remark": "α酮酸"
                                                    },
                                                    {
                                                        "val": "d",
                                                        "remark": "高能营养补充液"
                                                    },
                                                    {
                                                        "val": "oth",
                                                        "remark": "其他营养支持药物"
                                                    }
                                                ],
                                                "link": {
                                                    "values": [
                                                        {
                                                            "hide": "",
                                                            "show": "DPD_730",
                                                            "rule": "==::oth",
                                                            "oper": "==",
                                                            "type": "hide",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "hide"
                                                },
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "checkbox",
                                                "title": "营养支持药物",
                                                "submitName": "DPD-4-6-2-3",
                                                "textsort": "2",
                                                "hide": false,
                                                "selectMultiple": false,
                                                "disabled": false
                                            },
                                            {
                                                "submitName": "DPD-4-6-2-4",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_730",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "reg",
                                                    "list": [
                                                        {
                                                            "msg": "5paH5pys6ZW/5bqm5LiN6IO96LaF6L+HMjDkuKrlrZfor7TmmI4=",
                                                            "rule": "Xi57MCwyMH0k",
                                                            "type": "reg"
                                                        }
                                                    ]
                                                },
                                                "type": "text",
                                                "title": "其他营养支持药物"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "营养支持药物"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-6: 血清白蛋白控制情况"
            },
            {
                "no": "DPD_741",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_780",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "no": "DPD_743",
                                "hide": false,
                                "line": false,
                                "sonList": [
                                    {
                                        "pointsort": "2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_744",
                                        "values": [
                                            {
                                                "val": "a",
                                                "remark": "身高"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "体重"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "BMI"
                                            },
                                            {
                                                "val": "d",
                                                "remark": "体表面积"
                                            },
                                            {
                                                "val": "e",
                                                "remark": "总体水"
                                            },
                                            {
                                                "val": "f",
                                                "remark": "血尿素氮"
                                            },
                                            {
                                                "val": "g",
                                                "remark": "血肌酐"
                                            },
                                            {
                                                "val": "h",
                                                "remark": "24小时尿量"
                                            },
                                            {
                                                "val": "i",
                                                "remark": "24小时尿中尿素氮"
                                            },
                                            {
                                                "val": "j",
                                                "remark": "24小时尿肌酐"
                                            },
                                            {
                                                "val": "k",
                                                "remark": "24小时腹透液排出总量"
                                            },
                                            {
                                                "val": "l",
                                                "remark": "24小时透出液尿素氮"
                                            },
                                            {
                                                "val": "m",
                                                "remark": "24小时透出液肌酐"
                                            },
                                            {
                                                "val": "n",
                                                "remark": "每周总Kt/V尿素清除指数"
                                            },
                                            {
                                                "val": "o",
                                                "remark": "总内生肌酐清除率"
                                            }
                                        ],
                                        "link": {
                                            "values": [
                                                {
                                                    "hide": "",
                                                    "show": "DPD_769",
                                                    "rule": "==::a",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_747",
                                                    "rule": "==::b",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_771",
                                                    "rule": "==::c",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_766",
                                                    "rule": "==::d",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_750",
                                                    "rule": "==::e",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_751",
                                                    "rule": "==::f",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_752",
                                                    "rule": "==::g",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_753",
                                                    "rule": "==::h",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_754",
                                                    "rule": "==::i",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_755",
                                                    "rule": "==::j",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_781",
                                                    "rule": "==::k",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_782",
                                                    "rule": "==::l",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_783",
                                                    "rule": "==::m",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_784",
                                                    "rule": "==::n",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                },
                                                {
                                                    "hide": "",
                                                    "show": "DPD_785",
                                                    "rule": "==::o",
                                                    "oper": "==",
                                                    "type": "hide",
                                                    "maxOper": "",
                                                    "maxRule": ""
                                                }
                                            ],
                                            "type": "hide"
                                        },
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "checkbox",
                                        "title": "透析充分性(尿素清除指数（Kt/V）和尿素（URR）检验)",
                                        "submitName": "DPD-4-7-1-1",
                                        "textsort": "2",
                                        "hide": false,
                                        "selectMultiple": false,
                                        "disabled": false
                                    },
                                    {
                                        "no": "DPD_745",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "no": "DPD_769",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-4-7-1-2",
                                                        "init": {
                                                            "rule": "VVRE",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_746",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "身高(cm)"
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-1-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfNzQ2fTo6Kjo6I3tEUERfNzQ2fQ==",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_764",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "身高转换",
                                                        "board": true
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-3",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_747",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "体重(kg)"
                                            },
                                            {
                                                "no": "DPD_771",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-4-7-1-3-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfNzQ3fSoxMDAwMDo6Lzo6I3tEUERfNzY0fQ==",
                                                            "type": "num",
                                                            "decimal": "2"
                                                        },
                                                        "no": "DPD_770",
                                                        "hide": true,
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "val": "#{DPD_770}",
                                                                    "no": "DPD_748",
                                                                    "rule": ">=::0",
                                                                    "oper": ">=",
                                                                    "type": "reset",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "reset"
                                                        },
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体重指数(BMI)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-4",
                                                        "init": {
                                                            "rule": "I3tEUERfMTQ3fSoxMDAwMA==",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_748",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "range",
                                                            "list": [
                                                                {
                                                                    "msg": "5L2T6YeN5oyH5pWw5bqU5aSn5LqO562J5LqOMA==",
                                                                    "rule": ">=::0",
                                                                    "type": "range"
                                                                }
                                                            ]
                                                        },
                                                        "type": "number",
                                                        "title": "体重指数(BMI)"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "no": "DPD_766",
                                                "hide": true,
                                                "line": false,
                                                "sonList": [
                                                    {
                                                        "submitName": "DPD-4-7-1-4-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "MC4wMDYxOjoqOjoje0RQRF83NDZ9",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_765",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "0.0061倍身高(cm)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-5-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "MC4wMTI4OjoqOjoje0RQRF83NDd9",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_767",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "0.0128倍体重(kg)",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-6-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfNzY1fTo6Kzo6I3tEUERfNzY3fQ==",
                                                            "type": "num",
                                                            "decimal": ""
                                                        },
                                                        "no": "DPD_768",
                                                        "hide": true,
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积公式",
                                                        "board": true
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-7-r",
                                                        "init": {
                                                            "unit": "double",
                                                            "rule": "I3tEUERfNzY4fTo6LTo6MC4xNTI5",
                                                            "type": "num",
                                                            "decimal": "2"
                                                        },
                                                        "no": "DPD_772",
                                                        "hide": true,
                                                        "link": {
                                                            "values": [
                                                                {
                                                                    "val": "#{DPD_772}",
                                                                    "no": "DPD_749",
                                                                    "rule": ">=::0",
                                                                    "oper": ">=",
                                                                    "type": "reset",
                                                                    "maxOper": "",
                                                                    "maxRule": ""
                                                                }
                                                            ],
                                                            "type": "reset"
                                                        },
                                                        "disabled": true,
                                                        "check": {
                                                            "notnull": false,
                                                            "type": "normal",
                                                            "list": []
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积(m²)"
                                                    },
                                                    {
                                                        "submitName": "DPD-4-7-1-5",
                                                        "init": {
                                                            "rule": "I3tEUERfMjQ4fQ==",
                                                            "type": "normal"
                                                        },
                                                        "no": "DPD_749",
                                                        "hide": false,
                                                        "disabled": false,
                                                        "check": {
                                                            "notnull": true,
                                                            "type": "range",
                                                            "list": [
                                                                {
                                                                    "msg": "5L2T6KGo6Z2i56ev5bqU5aSn5LqO562J5LqOMA==",
                                                                    "rule": ">=::0",
                                                                    "type": "range"
                                                                }
                                                            ]
                                                        },
                                                        "type": "number",
                                                        "title": "体表面积(m²)"
                                                    }
                                                ],
                                                "disabled": false,
                                                "type": "box",
                                                "title": ""
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-6",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_750",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "5oC75L2T5rC05aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "总体水(V)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-7",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_751",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6KGA5bC/57Sg5rCu5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "血尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-8",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_752",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "血肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-9",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_753",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿量(L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-10",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_754",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿中尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-11",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_755",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时尿肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-12",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_781",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时腹透液排出总量(L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-13",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_782",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时透出液尿素氮(mmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-14",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_783",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "24小时透出液肌酐(μmoL/L)"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-15",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_784",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "每周总Kt/V尿素清除指数"
                                            },
                                            {
                                                "submitName": "DPD-4-7-1-16",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_785",
                                                "hide": true,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "总内生肌酐清除率（Ccr）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            },
                            {
                                "submitName": "DPD-4-7-1-17",
                                "init": {
                                    "rule": "VVRE",
                                    "type": "normal"
                                },
                                "no": "DPD_756",
                                "hide": false,
                                "disabled": false,
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "date",
                                "title": "完成日期"
                            },
                            {
                                "no": "DPD_757",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-7-2-1",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_758",
                                        "hide": true,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "text",
                                        "title": "尿素清除指数 总ktv是否达标",
                                        "board": true
                                    },
                                    {
                                        "submitName": "DPD-4-7-2-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_759",
                                        "hide": true,
                                        "disabled": false,
                                        "check": {
                                            "notnull": false,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "text",
                                        "title": "总内生肌酐清除率 总ccr是否达标",
                                        "board": true
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": ""
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-7: 尿素清除指数(Kt/V)和总内生肌酐清除率（Ccr)"
            },
            {
                "no": "DPD_742",
                "hide": false,
                "line": false,
                "sonList": [
                    {
                        "no": "DPD_806",
                        "hide": false,
                        "line": false,
                        "sonList": [
                            {
                                "pointsort": "1",
                                "init": {
                                    "rule": "",
                                    "type": "normal"
                                },
                                "no": "DPD_807",
                                "values": [
                                    {
                                        "val": "y",
                                        "remark": "是"
                                    },
                                    {
                                        "val": "n",
                                        "remark": "否"
                                    }
                                ],
                                "link": {
                                    "values": [
                                        {
                                            "hide": "",
                                            "show": "DPD_791",
                                            "rule": "==::y",
                                            "oper": "==",
                                            "type": "hide",
                                            "maxOper": "",
                                            "maxRule": ""
                                        }
                                    ],
                                    "type": "hide"
                                },
                                "check": {
                                    "notnull": true,
                                    "type": "normal",
                                    "list": []
                                },
                                "type": "radio",
                                "title": "是否有腹膜炎",
                                "submitName": "DPD-4-8-1-1",
                                "textsort": "2",
                                "hide": false,
                                "selectMultiple": false,
                                "disabled": false
                            },
                            {
                                "no": "DPD_791",
                                "hide": true,
                                "line": false,
                                "sonList": [
                                    {
                                        "submitName": "DPD-4-8-1-2",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_792",
                                        "hide": false,
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "date",
                                        "title": "报告的日期"
                                    },
                                    {
                                        "submitName": "DPD-4-8-1-3",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_793",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "腹膜炎"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "出口感染"
                                            },
                                            {
                                                "val": "c",
                                                "remark": "隧道感染"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "感染类型"
                                    },
                                    {
                                        "submitName": "DPD-4-8-1-4",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_794",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "病原检出"
                                    },
                                    {
                                        "submitName": "DPD-4-8-1-5",
                                        "init": {
                                            "rule": "VVRE",
                                            "type": "normal"
                                        },
                                        "no": "DPD_795",
                                        "hide": false,
                                        "values": [
                                            {
                                                "val": "def",
                                                "remark": "请选择"
                                            },
                                            {
                                                "val": "a",
                                                "remark": "阴性"
                                            },
                                            {
                                                "val": "b",
                                                "remark": "阳性"
                                            }
                                        ],
                                        "disabled": false,
                                        "check": {
                                            "notnull": true,
                                            "type": "normal",
                                            "list": []
                                        },
                                        "type": "select",
                                        "title": "培养结果"
                                    },
                                    {
                                        "no": "DPD_796",
                                        "hide": false,
                                        "line": false,
                                        "sonList": [
                                            {
                                                "submitName": "DPD-4-8-2-1",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_797",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q6b6E5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析龄(月)"
                                            },
                                            {
                                                "submitName": "DPD-4-8-2-2",
                                                "init": {
                                                    "rule": "VVRE",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_798",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "range",
                                                    "list": [
                                                        {
                                                            "msg": "6IW56Iac54KO5oKj6ICF6YCP5p6Q5qyh5pWw5aGr5YaZ5YC85bqU5aSn5LqO562J5LqOMA==",
                                                            "rule": ">=::0",
                                                            "type": "range"
                                                        }
                                                    ]
                                                },
                                                "type": "number",
                                                "title": "腹膜炎患者透析次数(次)"
                                            },
                                            {
                                                "submitName": "DPD-4-8-2-3-r",
                                                "init": {
                                                    "unit": "double",
                                                    "rule": "I3tEUERfNzk3fTo6Lzo6I3tEUERfNzk4fQ==",
                                                    "type": "num",
                                                    "decimal": "2"
                                                },
                                                "no": "DPD_803",
                                                "hide": true,
                                                "link": {
                                                    "values": [
                                                        {
                                                            "val": "#{DPD_803}",
                                                            "no": "DPD_799",
                                                            "rule": ">=::0",
                                                            "oper": ">=",
                                                            "type": "reset",
                                                            "maxOper": "",
                                                            "maxRule": ""
                                                        }
                                                    ],
                                                    "type": "reset"
                                                },
                                                "disabled": true,
                                                "check": {
                                                    "notnull": false,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）",
                                                "board": true
                                            },
                                            {
                                                "submitName": "DPD-4-8-2-3",
                                                "init": {
                                                    "rule": "I3tEUERfMTY3fQ==",
                                                    "type": "normal"
                                                },
                                                "no": "DPD_799",
                                                "hide": false,
                                                "disabled": false,
                                                "check": {
                                                    "notnull": true,
                                                    "type": "normal",
                                                    "list": []
                                                },
                                                "type": "number",
                                                "title": "患者腹膜炎次数（月/次）"
                                            }
                                        ],
                                        "disabled": false,
                                        "type": "box",
                                        "title": ""
                                    }
                                ],
                                "disabled": false,
                                "type": "box",
                                "title": ""
                            }
                        ],
                        "disabled": false,
                        "type": "box",
                        "title": "第四季度腹膜炎发生情况"
                    }
                ],
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-8: 腹膜炎发生情况 "
            },
            {
                "no": "DPD_808",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-9: 提供腹膜透析治疗前、治疗后健康教育   (不开放)"
            },
            {
                "no": "DPD_809",
                "hide": true,
                "line": false,
                "disabled": false,
                "type": "box1",
                "title": "ESRD-PD-10: 第四季度腹膜透析治疗费用   (不开放)"
            }
        ],
        "disabled": false,
        "type": "box1",
        "title": "第四季度"
    }
]