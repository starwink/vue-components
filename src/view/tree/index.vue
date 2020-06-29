<template>
    <div>
        <Button @click="openNodeForm">打开tree</Button>
        <Card>
            <p slot="title">返回内容</p>
            <Row>
                <Col span="24">
                    <Input v-model="data" type="textarea" style="resize: none;" :rows="3" show-word-limit></Input>
                </Col>
            </Row>
        </Card>
         <getNodeForm ref="getNodeForm" @success="setTag"></getNodeForm>
    </div>
</template>
<script>
import getNodeForm from '@/view/components/tree-select/search-tree.vue'
export default {
    components: {
        'getNodeForm': getNodeForm,
    },
    methods: {
        setTag(e) {
            this.data = JSON.stringify(e);
        },
        openNodeForm() {
            this.$refs.getNodeForm.init();
        },
    },
    computed:{
       
    },
    data(){
        return {
            data:''
        }
    }
}
</script>