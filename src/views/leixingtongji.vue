<template>
  <div style="height:100%;width:100%;background-color:#084D8E;">
    <div class="card" style="margin-top:0px;">
      <el-form>
        <el-row style="padding-top: 10px">
          <el-col :xs="24" :sm="24" :md="11" :lg="5" :xl="5">
            <el-form-item class="main-text" label="类型统计 :" label-width="110px">
              <el-cascader v-model="value" :options="options" @change="getChartData">
              </el-cascader>
            </el-form-item>
          </el-col>
          <!-- <el-col :xs="24" :sm="24" :md="13" :lg="7" :xl="7">
                        <el-form-item style="text-align: center;margin-bottom: 10px;">
                            <el-button  size="medium" @click="getChartData()" :loading="staLoading">查询</el-button>
                            <el-button type="primary" size="medium" :loading="listLoading">重置</el-button>
                        </el-form-item>
                    </el-col> -->
        </el-row>
      </el-form>
      <el-col :xs="24" :sm="24" :md="11" :lg="11">
        <div id="main" style="height:350px"></div>
      </el-col>
      <el-col :offset="2" :xs="24" :sm="24" :md="11" :lg="11">
        <div id="main3" style="height: 350px;"></div>
      </el-col>
      <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div id="main2" style="height: 400px;"></div>
            </el-col> -->
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts'
  export default {
    name: '',
    data() {
      return {
        value: [],
        options: [{
          value: 'cunliangpaicha',
          label: '存量排查',
        }, {
          value: 'sheshijianshe',
          label: '设施建设',
        }, {
          value: 'chulichuzhi',
          label: '处理处置',
        }, {
          value: 'ziyuanliyong',
          label: '资源利用',
        }]
      }
    },
    methods: {
      drawPie1(id) {
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
              fontSize: 18, //字体大小
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
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 3 // 粗细
              }
            },
            type: 'category',
            boundaryGap: false,
            data: ['2019.11', '2019.12', '2020.01', '2020.02', '2020.03', '2020.04', '2020.05']
          }],
          yAxis: [{
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 3 // 粗细
              }
            },
            type: 'value'
          }],
          series: [{
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
      },
      drawPie2(id) {
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
            text: '2019年11月-2020年5月深圳市建筑垃圾排查情况',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 18, //字体大小
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
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 3 // 粗细
              }
            },
            type: 'category',
            boundaryGap: false,
            data: ['2019.11', '2019.12', '2020.01', '2020.02', '2020.03', '2020.04', '2020.05']
          }],
          yAxis: [{
            axisLine: {
              lineStyle: {
                color: '#fff', // 颜色
                width: 3 // 粗细
              }
            },
            type: 'value'
          }],
          series: [{
              name: '装修垃圾',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [100, 112, 81, 114, 70, 210, 190]
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
      },
      getChartData() {
        if(this.value="cunliangpaicha"){
          this.drawPie1('main');
        }else if(this.value="sheshijianshe"){
           this.drawPie2('main3')
        }

      }
    }
    // },
    //调用

  }

</script>
<style>
  .card {
    padding-top: 5px;
    height: 90%;

    background-color: rgb(8, 67, 121);

    border-radius: 25px;
  }

  .el-main {
    border: 0;
  }

  .main-text {
    color: #fff !important;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
  }

  .el-table th,
  .el-table tr {
    background-color: #0757A0;
  }

  .el-table__row--striped {
    background: #0757A0 !important;
  }

  .el-table tbody tr:hover>td {
    background-color: #0757A0 !important
  }

  .el-table td {
    border-bottom: 0;

  }

  .el-form-item__label {
    color: #fff;
  }

  .el-table {
    color: #fff;
  }

</style>
