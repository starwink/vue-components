<template>
    <div class="cu-chat">
        <div class="cu-item self">
            <div class="main">
                <div class="content bg-green shadow">
                    <p>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</p>
                </div>
            </div>
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="date">2018年3月23日 13:23</div>
        </div>
        <div class="cu-info round">对方撤回一条消息!</div>
        <div class="cu-item">
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></div>
            <div class="main">
                <div class="content shadow">
                    <p>喵喵喵！喵喵喵！</p>
                </div>
            </div>
            <div class="date "> 13:23</div>
        </div>
        <div class="cu-info">
            <p class="cuIcon-roundclosefill text-red "></p> 对方拒绝了你的消息
        </div>
        <div class="cu-info">
            对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
            <p class="text-blue">发送好友验证</p>
        </div>
        <div class="cu-item self">
            <div class="main">
                <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"></image>
            </div>
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="date"> 13:23</div>
        </div>
        <div class="cu-item self">
            <div class="main">
                <div class="action text-bold text-grey">
                    3"
                </div>
                <div class="content shadow">
                    <p class="cuIcon-sound text-xxl padding-right-xl"> </p>
                </div>
            </div>
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="date">13:23</div>
        </div>
        <div class="cu-item self">
            <div class="main">
                <div class="action">
                    <p class="cuIcon-locationfill text-orange text-xxl"></p>
                </div>
                <div class="content shadow">
                    喵星球，喵喵市
                </div>
            </div>
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="date">13:23</div>
        </div>
        <div class="cu-item">
            <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></div>
            <div class="main">
                <div class="content shadow">
                    @#$^&**
                </div>
                <div class="action text-grey">
                    <p class="cuIcon-warnfill text-red text-xxl"></p>
                    <p class="text-sm margin-left-sm">翻译错误</p>
                </div>
            </div>
            <div class="date">13:23</div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
@import url('./index.css');
.cu-chat {
    display: flex;
    flex-direction: column;
  
    .cu-item {
      display: flex;
      padding: 15px 15px 35px;
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
</style>
<script>
export default {
    data() {
			return {
				InputBottom: 0
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
}
</script>