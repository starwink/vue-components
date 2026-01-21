<template>
    <div>
        <div :id="id"></div>
    </div>
</template>
<script>
import { Chart } from '@antv/g2';
// import chartData from './data/terrorism'
import ewellJson from './data/ewell.json'

export default {
    props: {
        id: {
            type: String,
            default: 'container'
        },
        height: {
            type: Number,
            default: 500,
        },
        width: {
            type: Number,
            default: 500,
        }
    },
    data() {
        return {
            dataInfo: [
                {
                    title: '数据上报数',
                    type: 'y',
                    name: '',
                    typeOption: {
                        color: '#6236FF',
                        position: '',
                    }
                },
                {
                    title: '上报率',
                    type: 'y',
                    name: '',
                    typeOption: {
                        color: '#6236FF',
                    }
                },
                {
                    title: '',
                    type: 'x',
                    name: '',
                }
            ]

        }
    },
    mounted() {
        // this.initChat();
        this.formatChatData();
    },
    methods: {
        initChat(data) {
            console.log('initChat',data)
            // const data = [
            //     { date: '2020-02-16', num: 29, type: 12 },
            //     { date: '2020-02-15', num: 48, type: 29 },
            //     { date: '2020-01-24', num: 23, type: 2 },
            //     { date: '2020-01-01', num: 13, type: 7 },
            // ];

            const chart = new Chart({
                container: this.id,
                autoFit: true,
                height: this.height,
                width: this.width,
                appendPadding: [20, 0, 0, 0],
            });

            chart.scale({
                date: {
                    range: [0, 1],
                },
                left: {
                    alias: '数据上报数',
                    min: 0,
                    nice: false,
                    minTickInterval: 1,
                    tickCount: 6,
                },
                right: {
                    alias: '上报率',
                    min: 0,
                    nice: false,
                    minTickInterval: 1,
                    tickCount: 6,
                },

            });
             chart.legend({
                custom: true,
                position:'top-right',
                items: [
                    { name: '数据上报数',value:'left', marker: { symbol: 'hyphen', style: { stroke: '#6236FF', lineWidth: 2 } } },
                    { name: '上报率',value:'right', marker: { symbol: 'hyphen', style: { stroke: '#E533A4', lineWidth: 2 } } },
                ],
            });

            chart.tooltip({
                showCrosshairs: true,
                shared: true,
            });

            chart.data(data);

            chart.axis('left', {
                grid: {
                    line: {
                        style: {
                            stroke: '#d9d9d9',
                            lineWidth: 1,
                            lineDash: [2, 2]
                        }
                    }
                },
            });
            chart.axis('right', {
                grid: null
            });
          

            chart
                .line()
                .position('date*left')
                .color('#6236FF');
            chart
                .line()
                .position('date*right')
                .color('#E533A4')

            chart.render();

        },
        formatChatData(){
            let res=ewellJson;
            if(res.code==1){
                // let {x ,y}=this.formatdata(res.object[0].xtitle)
                
                let rawData=this.createCharData(res.object[0].data);
                let charData=this.computeData(rawData);

                charData.unshift({
                        date:'2020-02-01',
                        left:0,
                        right:0,
                    })

                this.initChat(charData);
            }
            // console.log('ewell',ewellJson)
        },
        formatdata(xtitle){
            let x=[],y=[],tmp;
            for(let item of xtitle){
                tmp=item.split('::')
                x.push(tmp[0]);
                if(y.indexOf(tmp[1])==-1){
                    y.push(tmp[1])
                }
            }
            x=x.sort();
            return {x:x,y:y}
        },
      
        createCharData(data){
            let key,arr,charData={};
            for(let item of data){
                key=Object.keys(item);
                // debugger
                arr=key[0].split('::');
                if(!charData[arr[0]]){
                    charData[arr[0]]={}
                }
                charData[arr[0]][arr[1]]=item[key[0]]['例数'];
            }
            return charData;
        },
        computeData(params){
            let data=[
                // {date:'',count:0,sum:0}
            ]
            
            for(let key in params){
                let count= params[key] ? Object.keys(params[key]).length:0
                data.push(
                    {
                        date:key,
                        left:count,
                        right:this.getSumData(params[key]),
                    }
                )
            }
            let solrFun=function sortData(a, b) {
                if(b.date <a.date){
                    return 1;
                }else if(b.date >a.date){
                    return -1;
                }else{
                        return 0
                }
            }
            return data.sort(solrFun);
            
        },
        getSumData(data){
            let sum=0;
            for(let item in data){
                sum+=data[item];
            }
            return sum;
        }

    }
}
</script>
<style lang="scss" scoped>
.te {
    width: 18px;
    height: 4px;
    background: #f01;
    /* display: inline-block; */
    /* vertical-align: middle; */
    position: absolute;
    margin-top: 7px;
    border-radius: 8px;
}
</style>