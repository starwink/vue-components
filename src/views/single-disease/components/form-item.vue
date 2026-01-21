<template>
    <div>
        <!-- v-if="json.__proto__===Array.prototype" 传array后还是不对 -->
        <div v-for="(obj,index) of jsonItem"  :class="className">
            <div v-if="obj.type=='box1'" class="form-box1" :key="boxShow[obj.no]" :ttt="boxShow[obj.no]"> 
                <slot name="box1" :data="obj">
                    <div class="box1-header" @click="actionBox(obj.no)" :key="obj.no">
                        <span class="left">{{obj.title}} {{obj.no}} {{obj.type}}--{{$store.state.jsonFormVuex.jsonFormData.isOpen}}  </span>
                        <span class="right">
                            <slot name="box1-action">
                                <span class="action-box"  >
                                    <Button size="small" type="primary">完成1{{$store.state.jsonFormVuex.jsonFormData.isOpen[obj.no]}}</Button>
                                </span>
                            </slot>
                            <span class="icon-box" v-if="showChildren(obj)">
                                <Icon type="ios-arrow-up" v-show="$store.state.jsonFormVuex.jsonFormData.isOpen[obj.no]!=false"  />
                                <Icon type="ios-arrow-down" v-show="$store.state.jsonFormVuex.jsonFormData.isOpen[obj.no]==false" />
                            </span>
                        </span>
                    </div>
                    <transition name="slide-fade" >
                        <!-- <p>{{`slide-fade-${obj.no}`}} </p> -->
                        <div class="box1-content" v-show="$store.state.jsonFormVuex.jsonFormData.isOpen[obj.no]!=false && showChildren(obj)" >
                            <component :is="$store.state.jsonFormVuex.jsonFormData.isOpen[obj.no]!=false?'objFormItem':''" :className="className" :jsonItem="obj.sonList" @changeKey="changeKey" ></component>
                            <!-- <formItem ref="jsonObjItem" className="json-obj-item2" :jsonItem="obj.sonList" @changeKey="changeKey"></formItem> -->
                        </div>
                    </transition>
                </slot>
            </div>
            <div v-else-if="obj.type=='box'" >
                <objFormItem ref="jsonObjItem" :className="className"   :jsonItem="obj.sonList"   @changeKey="changeKey"></objFormItem>
            </div>
            <div v-else class="item-info">

                <FormItem :label="obj.title" :noName="obj.no" >
                    <template v-if="obj.type=='text'">
                        <Input v-model.trim="form[obj.no]"  maxlength="100" @on-change="e=>changeInput(obj.no)"></Input>
                    </template>
                     <template v-else-if="obj.type=='number'">
                        <Input v-model.trim="form[obj.no]"  type="number" @on-change="e=>changeInput(obj.no)"></Input>
                    </template>
                    <template v-else-if="obj.type=='select'">
                        <Select v-model="form[obj.no]"  filterable @on-change="e=>changeInput(obj.no)">
                            <Option v-for="item of obj.values" :key="item.val" :value="item.val">{{item.remark}}</Option>
                        </Select>
                    </template>
                    <template  v-else-if="obj.type=='radio'">
                        <RadioGroup v-model="form[obj.no]" @on-change="e=>changeInput(obj.no)">
                            <Radio v-for="item of obj.values" :key="item.val" :label="item.val" >{{item.remark}}</Radio>
                        </RadioGroup>
                    </template>
                    <template v-else-if="obj.type=='checkbox'" >
                        <CheckboxGroup v-model="form[obj.no]"  @on-change="e=>changeInput(obj.no)">
                            <Checkbox v-for="item of obj.values" :key="item.val" :label="item.val"  >{{item.remark}}</Checkbox>
                        </CheckboxGroup>
                    </template>
                    <template v-else-if="obj.type=='datehourtime'">
                         <DatePicker v-model="form[obj.no]" type="datetime" format="yyyy-MM-dd HH:mm" @on-change="e=>changeDateTime(e,obj.no)"  style="width: 100%;"></DatePicker>
                    </template>
                    <template v-else-if="obj.type=='datetime'">
                         <DatePicker v-model="form[obj.no]" type="datetime" format="yyyy-MM-dd HH:mm:ss" @on-change="e=>changeDateTime(e,obj.no)"  style="width: 100%;"></DatePicker>
                    </template>
                    <template v-else-if="obj.type=='date'">
                         <DatePicker v-model="form[obj.no]" type="date" format="yyyy-MM-dd" @on-change="e=>changeDateTime(e,obj.no)"  style="width: 100%;"></DatePicker>
                    </template>
                    <template v-else-if="obj.type=='datehour'">
                         <DatePicker v-model="form[obj.no]" type="datetime" format="yyyy-MM-dd HH" @on-change="e=>changeDateTime(e,obj.no)"  style="width: 100%;"></DatePicker>
                    </template>
                    <template v-else-if="obj.type=='time'">
                         <TimePicker v-model="form[obj.no]" type="time" format="HH:mm:ss" @on-change="e=>changeDateTime(e,obj.no)"  style="width: 100%;"></TimePicker>
                    </template>
                    <template v-else>
                        <p>未知类型{{obj.type}},请更新UI版本</p>    
                    </template>

                    

                </FormItem>
              <!--   <slot name="first" :data="obj">
                    <span class="first-child" @click.stop="clickExpand(obj)">
                        <Icon type="md-arrow-dropright" v-show="(obj.type=='array' || obj.type=='object') && !obj._expand" />
                        <Icon type="md-arrow-dropdown" v-show="(obj.type=='array' || obj.type=='object') && obj._expand" />
                    </span>
                </slot>
                <slot name="name" :data="obj">
                    <span>
                        <Input v-model.trim="obj.label" placeholder="请输入参数名称" maxlength="50"></Input>
                    </span>
                </slot>
                <span name="required" :data="obj">
                    
                </span>
                <slot name="type" :data="obj">
                    <span>
                        <Select v-model="obj.type" @on-change="changeKey" filterable>
                            <Option v-for="(k,i) in parentFiledTypes" :value="k" :key="'filedTypes'+index+i">{{k}}</Option>
                        </Select>
                    </span>
                </slot>
                <slot name="example" :data="obj">
                    <span>
                        <Input v-model.trim="obj.example" :disabled="!notObjType(obj.type)" placeholder="请输入参数示例" maxlength="50"></Input>
                    </span>
                </slot>
                <slot name="desc" :data="obj">
                    <span>
                        <Input v-model.trim="obj.desc" placeholder="请输入备注" maxlength="50"></Input>
                    </span>
                </slot>
                <slot name="button" :data="obj">
                    <span>
                        <template>
                            <Icon type="ios-cog" @click="editJson(jsonData)" />
                        </template>
                       
                        <template v-if="notObjType(obj.type)">
                            <Icon type="md-add" @click.stop="addBrother(jsonData)" />
                        </template>
                        <template v-else>
                            <Dropdown @on-click="clickDropList(...arguments,obj,jsonData)">
                                <a href="javascript:void(0)">
                                    <Icon type="md-add"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="brother">新增平级</DropdownItem>
                                    <DropdownItem name="sub">新增子级</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </template>
                         <template>
                            <Icon type="ios-backspace" @click.native="delObj(jsonData,index)" />
                        </template>
                    </span>
                </slot> -->

           <!--      <slot name="child" :data="obj">
                        <div v-if="typeof obj.children=='object'"  style="width:calc(100% - 40px);margin-left: 40px;min-width:400px;float:right">
                            <formItem :className="className"  :jsonItem="obj.children" @changeKey="changeKey" @editJson="editJson"></formItem>
                        </div>
                </slot> -->
            </div>

        </div>
    </div>
</template>
<script>
import mixin from './mixin'
import vuex from 'vuex';
import myvuex from './store.js';
const {mapMutations,mapState} = vuex.createNamespacedHelpers('scoreEntry')



export default {
    name: 'objFormItem',
    props: {
        jsonItem: {
            type: Array || Object,
            default: () => { }
        },

        className: {
            type: String,
            default: 'json-obj-item'
        },

    },
    mixins: [mixin],
    computed: {
        ...mapState(["jsonFormData"]),
    },
    mounted(){
        this.$store.registerModule("jsonFormVuex", myvuex);
    },
    data(){
        return {
            boxShow:{
            }
        }
    },
    
    methods: {
        ...mapMutations(["setJsonFormIsOpen",'setJsonFormIsOpenItem']),
        isShowBox(no){
            let val=true;
            if(this.$store.state.jsonFormVuex.jsonFormData.isOpen[no]==void 0){
                val=false;
            }else if(this.$store.state.jsonFormVuex.jsonFormData.isOpen[no]){
                val=false;
            }else{
                val=true;
            }
            let params={
                name:no,
                val:val
            }
            console.log(params);
            console.log('this.$store3',this.$store)
            let data=JSON.parse(JSON.stringify(this.$store.state.jsonFormVuex.jsonFormData.isOpen));
            
            data[no]=val;
            console.log('this.$data2',data)
            this.$store.commit('setJsonFormIsOpen',data);
        },
        //切换box 收缩
        actionBox(no) {
            console.log('boxShow1',this.$store.state.jsonFormVuex.jsonFormData.isOpen)
            console.log(this.boxShow[no]);
           
            this.isShowBox(no);
            // if(this.boxShow[no]==void 0){
            //     this.boxShow[no]=false;
            // }else{
            //     this.boxShow[no] = !this.boxShow[no];
            // }
            // console.log(this.boxShow[no]);

        },

    //    actionBox(no) {
    //         console.log('boxShow',this.$store.state)
            
    //        /*  if(this.boxShow[no]==void 0){
    //             this.boxShow[no]=false;
    //         }else{
    //             this.boxShow[no] = !this.boxShow[no];
    //         }
    //         console.log(this.boxShow[no]); */

    //     },
        submitData(){
            // this.$emit('changeKey')
        }
    },
}
</script>
<style lang="scss">
.slide-fade-enter-active {
  animation-timing-function: ease-in-out;
  opacity: 0;
}
.slide-fade-appear {
  animation-timing-function: ease-in-out;
  opacity: 0;
}

.slide-fade-leave-active {
  animation-timing-function: ease-in-out;
}


</style>
