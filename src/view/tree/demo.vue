<template>
   <div>
    <button @click="addNode">Add Node</button>
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      v-bind:default-expanded="true"
      :dragDisabled="false"
    >
      <template v-slot:leafNameDisplay="slotProps">
        <span v-if="id==slotProps.model.id">
          {{ slotProps.model.name }} <span class="muted">#{{ slotProps.model.id }}++</span>
        </span>
        <span v-else @click="setId(slotProps.model.id)">
            {{ slotProps.model.name }} #{{ slotProps.model.id }} </span>
        </span>
      </template>
      <!-- <span class="icon" slot="addTreeNodeIcon">📂</span> -->
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon" slot="leafNodeIcon">🍃</span>
      <!-- <span class="icon" slot="treeNodeIcon">🌲</span> -->
    </vue-tree-list>
    <button @click="getNewTree">Get new tree</button>
    <pre>
      {{newTree}}
    </pre>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list';
import teeData from './menu.data.js';
export default {
components: {
    VueTreeList
},
  data() {
      
      return {
        newTree: {},
        id:'',
        data: new Tree([])
      }
    },
    methods: {
      onDel(node) {
        console.log(node)
        node.remove()
      },
      setId(id){
          console.log(id,'id');
          this.id=id;
      },

      onChangeName(params) {
        console.log('onChangeName',params)
      },

      onAddNode(params) {
        console.log('onAddNode',params)
      },

      onClick(params) {
        console.log('onClick',params)
        console.log(this.data);
        // params.expanded=!params.expanded
        
      },

      addNode() {
        var node = new TreeNode({ name: 'new node', isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },

      getNewTree() {
        var vm = this
        function _dfs(oldNode) {
          var newNode = {}

          for (var k in oldNode) {
            if (k !== 'children' && k !== 'parent') {
              newNode[k] = oldNode[k]
            }
          }

          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (var i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }

        vm.newTree = _dfs(vm.data)
      }
    },
    mounted(){
        var data=new Tree(teeData.data)
        console.log(teeData.data)
        this.data=data;
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .vtl {
    .vtl-drag-disabled {
      background-color: #d0cfcf;
      &:hover {
        background-color: #d0cfcf;
      }
    }
    .vtl-disabled {
      background-color: #d0cfcf;
    }
  }
</style>

<style lang="less" rel="stylesheet/less" scoped>
  .icon {
    &:hover {
      cursor: pointer;
    }
  }

  .muted {
    color: gray;
    font-size: 80%;
  }
</style>