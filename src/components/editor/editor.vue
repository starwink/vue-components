<template>
  <div class="editor-wrapper">
    <div :id="editorId"></div>
  </div>
</template>

<script>
// import Editor from 'wangeditor'
import Editor from "@/components/wangeditor/release/wangEditor.js";
import comfun from "@/libs/comfun";
import "wangeditor/release/wangEditor.min.css";
import { oneOf } from "@/libs/tools";
import { getToken } from "@/libs/util";
import config from "@/config";

// const projectName = 'shuxi-master'
const projectName = config.projectName1;

export default {
  name: "Editor",
  props: {
    value: {
      type: String,
      default: ""
    },
    /**
     * 绑定的值的类型, enum: ['html', 'text']
     */
    valueType: {
      type: String,
      default: "html",
      validator: val => {
        return oneOf(val, ["html", "text"]);
      }
    },
    /**
     * @description 设置change事件触发时间间隔
     */
    changeInterval: {
      type: Number,
      default: 200
    },
    /**
     * @description 是否开启本地存储
     */
    cache: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否保存样式
     */
    pasteFilterStyle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    editorId() {
      return `editor${this._uid}`;
    }
  },
  methods: {
    setHtml(val) {
      this.editor.txt.html(val);
    },
    getHtml() {
      return this.editor.txt.html();
    },
    setImg(url) {
      let uploadImg = this.editor.uploadImg;
      uploadImg.insertLinkImg(url);
      // return this.editor.txt.html()
    },
    disable(blen) {
      this.editor.$textElem.attr('contenteditable', blen)
    }
  },
  mounted() {
    this.editor = new Editor(`#${this.editorId}`);
    this.editor.customConfig.onchange = html => {
      let text = this.editor.txt.text();
      //   if (this.cache) localStorage.zxzdEditorCache = html
      this.$emit("input", this.valueType === "html" ? html : text);
      this.$emit("on-change", html, text);
    };
    this.editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "video", // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.customConfig.colors = [
      "#515a6e",
      "#ffffff",
      "#eeece0",
      "#1c487f",
      "#4d80bf",
      "#c24f4a",
      "#8baa4a",
      "#7b5ba1",
      "#46acc8",
      "#f9963b"
    ];
    this.editor.customConfig.onchangeTimeout = this.changeInterval;
    this.editor.customConfig.uploadImgServer =
      "/" + projectName + "/upload/image";
    this.editor.customConfig.uploadFileName = "file";
    this.editor.customConfig.uploadImgHeaders = { sessionId: getToken() };

    this.editor.customConfig.uploadImgTimeout = 50000;
    this.editor.customConfig.uploadImgHooks = {
      // 监听
      before: function(xhr, editor, files) {
        // 图片上传之前触发
      },
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
      },
      fail: function(xhr, editor, result) {
        Message.error("插入图片失败！");
      },
      error: function(xhr, editor) {
        Message.error("插入图片失败！");
      },
      timeout: function(xhr, editor) {
        Message.error("插入图片失败！");
      },
      customInsert: function(insertImg, result, editor) {
        console.log("insertImg:", insertImg);
        console.log("result:", result);
        var url = comfun.getImgUrl(result.data.src);
        console.log("url", url);
        insertImg(url);
      }
    };
    this.editor.customConfig.pasteFilterStyle = false;
    // create这个方法一定要在所有配置项之后调用
    this.editor.create();
    // 如果本地有存储加载本地存储内容
    // let html = this.value || localStorage.zxzdEditorCache
    let html = this.value;
    if (html) this.editor.txt.html(html);
  }
};
</script>

<style lang="less">
.editor-wrapper * {
  z-index: 100 !important;
}
.editor-wrapper section {
  z-index: 99 !important;
}
.w-e-menu {
  z-index: 2 !important;
}
.w-e-text-container {
  z-index: 1 !important;
}
.w-e-text-container {
  // height: 812px !important;
}
</style>
