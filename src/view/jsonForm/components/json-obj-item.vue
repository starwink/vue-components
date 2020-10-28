<template>
    <div>
        <div v-if="json.__proto__===Object.prototype" v-for="(obj,key) in json">
            <!-- TODO 应该不做 -->
        </div>
        <!-- v-if="json.__proto__===Array.prototype" 传array后还是不对 -->
        <div v-for="(obj,index) of jsonData" v-if="obj"  :class="className">
            <div class="item-info">
                <slot name="first" :data="obj">
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
                    <!-- <Select v-model="obj.required">
                        <Option value="Y">必填</Option>
                        <Option value="N">非必填</Option>
                    </Select> -->
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
                </slot>

                <slot name="child" :data="obj">
                    <div v-if="typeof obj.children=='object'" v-show="obj._expand" style="width:calc(100% - 40px);margin-left: 40px;min-width:400px;float:right">
                        <jsonObjItem :className="className" ref="jsonObjItem" :jsonData="obj.children" @changeKey="changeKey" @editJson="editJson"></jsonObjItem>
                    </div>
                </slot>
            </div>

        </div>
    </div>
</template>
<script>
import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
    name: 'jsonObjItem',
    mixins: [mixin, itemMixin]
}
</script>
<style lang="scss" scoped>
.json-obj-item {
    .item-info {
        // display: inline-block;
        .first-child {
            width: 40px;
            display: inline-block;
            text-align: center;
        }
        span {
            display: inline-block;
            &:first-child {
                width: 40px;
            }
            &:nth-child(3),
            &:nth-child(4) {
                width: 100px;
            }
            &:nth-child(2),
            &:nth-child(5) {
                width: 30%;
            }
            &:nth-child(6) {
                width: calc(40% - 320px);
            }
            &:nth-child(7) {
                width: 80px;
                font-size: 18px;
                text-align: center;
            }
            // &:last-child {
            //     width: 80px;
            //     font-size: 18px;
            //     text-align: center;
            // }
        }
    }
}
</style>