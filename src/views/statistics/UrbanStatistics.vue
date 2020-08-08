<template>
    <div style="height:100%;width:100%;background-color:#084D8E;">
    <div class="card" style="margin-top:0px;">
        <el-form>
                <el-row style="padding-top: 10px">
                    <el-col :xs="24" :sm="24" :md="11" :lg="5" :xl="5">
                        <el-form-item class="main-text" label="城市 :" label-width="80px">
                            <el-input size="small" style="width: 100%" v-model="city" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="13" :lg="7" :xl="7">
                        <el-form-item style="text-align: center;margin-bottom: 10px;">
                            <el-button  size="medium">重置</el-button>
                            <el-button type="primary" size="medium" :loading="listLoading">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-col :xs="24" :sm="24" :md="13" :lg="7" :xl="7">
                <div id="main" style="height:350px"></div>
            </el-col>
            <el-col :offset="2" :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
                <div id="main3" style="height: 350px;"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div id="main2" style="height: 400px;"></div>
            </el-col>

      </div>
    </div>
</template>
<script>
  import echarts from 'echarts'
    export default {
        data () {
            return {
              name: '',
              listLoading: false,
                city:'平顶山市',
                charts: '',
                opinion:['装修垃圾','工程渣土','工程泥浆','工程垃圾','拆除垃圾'],
                opinionData:[
                  {value:335, name:'装修垃圾'},
                  {value:310, name:'拆除垃圾'},
                  {value:234, name:'工程泥浆'},
                  {value:135, name:'工程垃圾'},
                  {value:1548, name:'工程渣土'}
                ]
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                   formatter: '{a}<br/>{b}:{c} ({d}%)'
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'right',
                   data:this.opinion,
                   textStyle:{
                            fontSize: 16,//字体大小
                            color: '#ffffff'//字体颜色
                        },
                 },
                title: {
                text: '2020年6月平顶山市建筑垃圾排查情况',
                textStyle: {
                        fontWeight: 'normal',
                        fontSize: 18,//字体大小
                        color: '#fff'
                },
                left: 'center'
                 },
                 series: [
                   {
                     name:'排查分类',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ],
               })
            },
            drawPie3(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 title: {
                     left: 'center',
                text: '平顶山建筑垃圾增减情况图',
                textStyle: {
                        fontWeight: 'normal',
                        fontSize: 18,//字体大小
                        color: '#fff'
                },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        textStyle:{
                            fontSize: 16,//字体大小
                            color: '#ffffff'//字体颜色
                        },
        data: ['增加', '减少'],
        left: 'right'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            lineStyle: {
            color: '#fff', // 颜色
            width: 3 // 粗细
            }
           },
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('2019年' + i + '月');
            }
            return list;
        }()
    },
    yAxis: {
        axisLine: {
            lineStyle: {
            color: '#fff', // 颜色
            width: 3 // 粗细
            }
           },
        type: 'value'
    },
    series: [
        {
            name: '建筑垃圾存量',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '增加',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '减少',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ],
               })
            },
            drawPie2(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                 trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                title: {
                text: '2019年11月-2020年5月平顶山市建筑垃圾排查情况',
                textStyle: {
                        fontWeight: 'normal',
                        fontSize: 18,//字体大小
                        color: '#fff'
                },
                left: 'center'
                 },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            axisLine: {
            lineStyle: {
            color: '#fff', // 颜色
            width: 3 // 粗细
            }
           },
            type: 'category',
            boundaryGap: false,
            data: ['2019.11','2019.12', '2020.01', '2020.02', '2020.03', '2020.04', '2020.05']
        }
    ],
    yAxis: [
        {
            axisLine: {
            lineStyle: {
            color: '#fff', // 颜色
            width: 3 // 粗细
            }
           },
            type: 'value'
        }
    ],
    series: [
        {
            name: '装修垃圾',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '拆除垃圾',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '工程泥浆',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '工程垃圾',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '工程渣土',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
               })
            }

        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            }),
            this.$nextTick(function() {
                this.drawPie2('main2')
            })
            this.$nextTick(function() {
                this.drawPie3('main3')
            })
        }
    }
</script>
<style>
    .card{
        padding-top:5px;
        height: 90%;

        background-color: rgb(8, 67, 121);

        border-radius: 25px;
    }
    .el-main{
        border: 0;
    }
    .main-text{
        color: #fff!important;
        font-family:Georgia,serif;
        font-weight:bold;
        font-size:15px;
        text-align: left;
    }
    .el-table th, .el-table tr{
        background-color: #0757A0;
    }
    .el-table__row--striped{
        background: #0757A0!important;
    }
    .el-table tbody tr:hover>td {
    background-color:#0757A0!important
}
.el-table td{
    border-bottom:0;

}
.el-form-item__label{
    color: #fff;
}
.el-table{
    color: #fff;
}


</style>
