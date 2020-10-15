<template>
    <div>
        <Button @click="openNodeForm">打开搜索tree</Button>
        <Button @click="openNodeModal">打开tree数据管理</Button>
        <Card>
            <p slot="title">返回内容</p>
            <Row>
                <Col span="24">
                    <Input v-model="data" type="textarea" style="resize: none;" :rows="3" show-word-limit></Input>
                </Col>
            </Row>
        </Card>
         <getNodeForm ref="getNodeForm" @success="setTag"></getNodeForm>
         <treeDataModal ref="treeDataModal" ></treeDataModal>
         <treeDataModalPageSlot ref="treeDataModalPageSlot" ></treeDataModalPageSlot>
         <a href="https://buuing.github.io/vue-search-tree/" style="margin-top:40px;">github vue-search-tree</a>
         <p>VVVVVVVVVVV</p>
         <iframe src="https://buuing.github.io/vue-search-tree/"  frameborder="0" width="100%" height="600px;" />
    </div>
</template>
<script>
import getNodeForm from '@/view/components/tree-select/search-tree.vue'
import treeDataModal from '@/components/treeDataModal'
import treeDataModalPageSlot from '@/components/treeDataModal/pageSlot'
export default {
  components: {
    getNodeForm, treeDataModal, treeDataModalPageSlot
  },
  methods: {
    setTag (e) {
      this.data = JSON.stringify(e)
    },
    openNodeForm () {
      this.$refs.getNodeForm.init()
    },
    openNodeModal () {
      this.$refs.treeDataModal.init([])
    }
  },
  created () {
    this.$nextTick(() => {
      // this.$refs.treeDataModal.init();
    })
  },
  computed: {

  },
  data () {
    return {
      data: ''
    }
  }

}
</script>
