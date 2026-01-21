<template>
    <div class="chat-page">
        <div class="chat-window" ref="chatwindow">
            <div class="cu-chat">
                <div v-for="item of data">
                    <div v-if="item.type=='user'" class="cu-item self">
                        <div class="main">
                            <div class="content bg-green shadow">
                                <p>
                                    <msgIcon :icon="item.icon" />{{item.msg}}
                                </p>
                            </div>
                        </div>
                        <div class="cu-avatar radius" :style="`background-image:url(${item.photo})`"></div>
                    </div>

                    <div v-else class="cu-item">
                        <div class="cu-avatar radius" :style="`background-image:url(${item.photo})`"></div>
                        <div class="main">
                            <div class="content shadow">
                                <p>{{item.msg}}</p>
                            </div>
                        </div>
                    </div>
                    <div id="end" />
                </div>
            </div>

        </div>
        <div class="char-bar">
            <div class="tools">
                <span>
                    <Icon type="ios-happy" />
                </span>
                <span>
                    <Icon type="ios-image" />
                </span>
            </div>
            <div>
                <Input search v-model="sayMsg" enter-button="发送" placeholder="请输入发送的内容" @on-search="sendMsg" />
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@import url("./index.css");
.cu-chat {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
    // height: calc(100% - 78px);
    // &:hover{
    // overflow-y: auto;
    // }

    .cu-item {
        display: flex;
        padding: 15px 15px 25px;
        position: relative;
    }

    .cu-info {
        display: inline-block;
        margin: 10px auto;
        font-size: 12px;
        padding: 4px 6px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        color: #ffffff;
        max-width: 200px;
        line-height: 1.4;
    }
}
.chat-window {
    position: relative;
    height: 100%;
    padding-bottom: 56px;
    overflow-y: auto;
}
.char-bar {
    background-color: #fff;
    width: 100%;
    border-top: solid 1px #ccc;
    padding-top: 4px;
    position: absolute;
    padding: 4px 16px 8px;
    bottom: 0;
    z-index: 11;

    .tools {
        font-size: 18px;
        margin: 4px 0 2px;
        z-index: 11;
        span {
            &:not(:first-child) {
                margin-left: 12px;
            }
        }
    }
}
</style>
<script>
import msgIcon from './msgIcon'
import { scrollTop } from '@/libs/util'

export default {
    components: {
        msgIcon
    },
    data() {
        return {
            sayMsg: '',
            boxHeight:0,
            user: {
                photo: 'https://s3.ax1x.com/2021/01/11/s3b728.jpg'
            },
            data: [
                {
                    type: 'user',
                    msg: '测试',
                    icon: '',
                    photo: 'https://s3.ax1x.com/2021/01/11/s3b728.jpg',
                }, {
                    type: 'sys',
                    msg: 'AI信息',
                    icon: '',
                    photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
                }
            ]
        };
    },
    methods: {
        sendMsg() {
            console.log(this.sayMsg)
            var msg = this.sayMsg;
            var uuid = this.$helper.getNewUuid()
            this.data.push({
                id: uuid,
                type: 'user',
                msg: msg,
                icon: 'loading',
                photo: this.user.photo
            })
            this.sayMsg = '';
            console.log('this.$refs.chatwindow.scrollHeight',this.$refs.chatwindow.scrollHeight)
            this.$nextTick(function(){
                console.log(this.$refs.chatwindow.scrollTop)
                // this.$refs.chatwindow.scrollTop = this.$refs.chatwindow.scrollHeight;
                var h=this.$refs.chatwindow.scrollHeight;
                var hmin=h>30?h-30:h;

                scrollTop(document.querySelector('.content-wrapper'), hmin, h, 1000)
            });
        }
    }
}
</script>