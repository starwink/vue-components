<template>
  <div>
    <div style="overflow: hidden">
      <button @click.stop="handleAppendRoot()" style="float: right">
        添加根节点
      </button>
    </div>
    <search-tree
      ref="tree"
      node-key="id"
      :data="treeList"
      :default-expand-all="true"
      :deepCopy="false"
    >
     
    </search-tree>
  </div>
</template>

<script>
import SearchTree from 'vue-search-tree'
    
export default {
components: {
    SearchTree
},
  data() {
    return {
      treeList: [
        {
          "id": 1007,
          "name": "山东省",
          "children": [{
            "id": 1103,
            "name": "济南市",
            "children": [{
              "id": 2544,
              "name": "济南市无影山西路店"
            }, {
              "id": 2545,
              "name": "济南市堤口路店"
            }]
          }, {
            "id": 1105,
            "name": "沂市",
            "children": [{
              "id": 2561,
              "name": "沂市东岳庙店"
            }]
          }]
        }
      ],
    }
  },
  methods: {
    handleRemove (data) { // 删除节点
      this.$refs.tree.remove(data.id)
    },
    handleAppend (data) { // 添加子节点
      this.$refs.tree.append(data.id, { id: Date.now(), name: '新节点' })
    },
    handleAppendRoot () { // 添加根节点
      this.$refs.tree.append(null, { id: Date.now(), name: '新节点' })
    }
  }
}
</script>