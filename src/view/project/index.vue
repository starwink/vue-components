<template>
    <div class="project-list">
        <Collapse v-model="value1">
            <Panel name="1">
                线上
                <p slot="content">
                     <ul>
                        <li  v-for="item of onlinePlatform">
                            <Card style="width:220px" @click.native="openPorject(item)">
                                <div style="text-align:center">
                                    <Icon type="logo-windows" />
                                    <!-- <img :src="item.img"> -->
                                    <h3>{{item.platformName}}</h3>
                                </div>
                            </Card>
                        </li>
                    </ul>
                </p>
            </Panel>
            <Panel name="2">
                测试
                <p slot="content">
                     <ul>
                        <li  v-for="item of testPlatform">
                            <Card style="width:220px" @click.native="openPorject(item)">
                                <div style="text-align:center">
                                    <Icon type="logo-windows" />
                                    <h3>{{item.platformName}}</h3>
                                </div>
                            </Card>
                        </li>
                    </ul>
                </p>
            </Panel>
        </Collapse>

       
        
        <!-- <Card style="width:320px">
            <div style="text-align:center">
                <img src="/statics/minpro/qm.jpg">
                <h3>融磐安</h3>
            </div>
        </Card>
        <Card style="width:320px">
            <div style="text-align:center">
                <img src="/statics/minpro/qm.jpg">
                <h3>起梦捷服务</h3>
            </div>
        </Card> -->
    </div>
</template>
<script>
import json from './json.js'
import http from '@/api/shuxi-dmsm.js'

export default {
    data(){
        return {
            value1:[1,2],
            onlinePlatform:[],
            testPlatform:[],
        }
    },
    created(){
        this.getList();
    },
    methods:{
       getList(){
            http.getProjectList().then(res=>{
                if(res.code==0){
                    this.onlinePlatform=res.data.onlinePlatform;
                    this.testPlatform=res.data.testPlatform;
                }
            })
       },
       openPorject(item){
           console.log('ii',item);
           let url=item.platformUrl+'?platformId='+item.platformId+'&projectName='+item.projectName+'&systemEnvironmentType='+item.systemEnvironmentType;
           console.log(url)
           window.open(url)
       }
    }
    
}
</script>
<style lang="scss" scoped>
.project-list{
    padding:40px;
    li{
        display: inline-block;
        margin: 30px;
        &:first-child{
            margin-left: 0;
        }
        &:nth-child(4n+1){
            margin-left: 0;
        }
    }
    img{
        width:120px;
    }
    .ivu-card{
        cursor: pointer;
    }
}
</style>


