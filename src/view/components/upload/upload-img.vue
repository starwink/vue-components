<template>
    <!-- POST file: (binary) -->
    <Upload type="drag" accept="image/*" :action="'/'+projectName+'/upload/image'" :headers="uploadHeader" :before-upload="beforeUpload" :show-upload-list="false" class="img-upload" :format="upfileFormat" :on-format-error="formatError" :on-success="successImg" :on-error="errorImg" :on-progress="showLoading">
        <Spin size="large" fix v-if="loading">
            <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
        <div class="img-icon">
            <Icon type="md-add" size="40" style="color: #ddd" />
        </div>

    </Upload>
</template>
<script>
import config from '@/config'
import { getToken } from "@/libs/util";

export default {
    data() {
        const projectName = config.projectName1;
        return {
            projectName: projectName,
            loading: false,
            uploadHeader: {},
            upfileFormat: ["jpg", "jpeg", "png", "gif"],
        }
    },
    methods: {
        setUpload() {
            this.uploadHeader = {
                'sessionId': getToken() || ''
            }
        },
        beforeUpload(e) {
            if (/image\/*/.test(e.type) && e.size > 20971520) {
                this.$Notice.warning({
                    title: "图片格式错误",
                    desc: "请上传文件小于20MB"
                });
                return false;
            }
        },
        formatError() {
            this.$Notice.warning({
                title: "文件格式错误",
                desc: "上传图片格式错误,请上传 jpg,jpeg,png,gif 格式"
            });
        },
        successImg(res) {
            this.hideLoading();
            if (res.code === 0) {
                this.$emit('success', res.data);
            } else {
                this.$Message.error(res.msg || "服务器异常");
            }
        },
        errorImg(error, file, fileList) {
            this.$Message.error("服务器异常");
        },
        showLoading() {
            this.uploadLoading = true;
        },
        hideLoading() {
            this.uploadLoading = false;
        },
    },
    created(){
        this.setUpload();
    }

}
</script>