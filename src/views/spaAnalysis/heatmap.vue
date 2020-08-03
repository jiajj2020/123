<template>
    <div style="width:100%;background-color:#084D8E;">
        <div class="card" style="margin-top:1px;">
          <el-row>

            <div class="h2"  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                    建筑垃圾存量热力图
                </div>
           <el-col :xs="4" :sm="3" :md="3" :lg="3" :xl="3">
              <el-select v-model="value" filterable placeholder="请选择" @change="a()">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="21" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                 <div id="mapDiv" class="mapDiv">
                </div>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
import mapWorld from '../../init'
// import {getCity} from '@/api/remote'
// import BMap from 'BMap'
var map;
var control;
var zoom;
var data;
var heatmapOverlay;
export default {
  data() {
    return {
      mainPoint:[114.044346, 22.691963],
      options: [{
          value: '选项1',
          label: '深圳'
        }, {
          value: '选项2',
          label: '平顶山'
        }],
      value: '',
      zoom: '12',
      points: [],
      line: '',
      T: '',
      lay: '',
      map: '',
      drivingRoute: '',
      _CarTrack: '',
      startIcon: '',
      endIcon: '',
      config: '',
      iconMaker: [],
      myIcon: '',
      res:'',
      points:[
          {name: '罗湖区',lat:22.555341 ,lng:114.123885, count: 230},
          {name: '福田区',lat:22.541009 ,lng:114.05096, count: 200},
          {name: '南山区',lat:22.531221 ,lng:113.92943, count: 210},
          {name: '宝安区',lat:22.754741 ,lng:113.828671, count: 220},
          {name: '龙岗区',lat:22.721511 ,lng:114.251372, count: 200},
          {name: '盐田区',lat:22.555069 ,lng:114.235366, count: 200},
          {name: '龙华区',lat:22.691963 ,lng:114.044346, count: 210},
          {name: '坪山区',lat:22.69423 ,lng:114.338441, count: 200},
          {name: '新华区',lat:33.737579 ,lng:113.299061, count: 160},
          {name: '卫东区',lat:33.739285 ,lng:113.310327, count: 210},
          {name: '石龙区',lat:33.901538 ,lng:112.889885, count: 180},
          {name: '湛河区',lat:33.725681 ,lng:113.320873, count: 240},
          {name: '宝丰县',lat:33.866359 ,lng:113.066812, count: 240},
          {name: '叶县',lat:33.621252 ,lng:113.358298, count: 220},
          {name: '鲁山县',lat:33.740325 ,lng:112.906703, count: 170},
          {name: '郏县',lat:33.971993 ,lng:113.220451, count: 240},
          {name: '舞钢市',lat:33.302082 ,lng:113.52625, count: 260},
          {name: '汝州市',lat:34.167408 ,lng:112.845336, count: 250}
      ]
    }
  },
  created() {
  },
  mounted() {
    setTimeout(this.getPosition(), 1000)
  },
  watch: {
    '$route': 'getPosition'
  },
  methods: {
    a(){
      if(this.value=="选项2"){
        this.mainPoint=[113.299061,33.737579]
      }else{
       this.mainPoint=[114.044346, 22.691963]
      }
      this.getPosition();
    },
    getPosition() {
      window.onload = function() {
        console.log(11111)
      }
      mapWorld.init().then((T) => {
                    //初始化地图对象
            var zoom=11;
            map = new T.Map('mapDiv', {datasourcesControl: true});
                        //创建对象
            var ctrl = new T.Control.MapType();
            //添加控件
             var scale = new T.Control.Scale();
            //添加比例尺控件
            map.addControl(scale);
            map.addControl(ctrl);
            //map.centerAndZoom(new T.LngLat(114.044346, 22.691963), zoom);
            map.centerAndZoom(new T.LngLat(this.mainPoint[0], this.mainPoint[1]), zoom);
            control = new T.Control.Zoom();
            map.addControl(control);
            //添加缩放平移控件


            //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
            //参数说明如下:
            /* visible 热力图是否显示,默认为true
             * opacity 热力的透明度,1-100
             * radius 势力图的每个点的半径大小
             * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
             *	{
             .2:'rgb(0, 255, 255)',
             .5:'rgb(0, 110, 255)',
             .8:'rgb(100, 0, 255)'
             }

             value 为颜色值.
             */

            var heatmapOverlay = new T.HeatmapOverlay({
                "radius": 50,
//                visible: false
            });
            //  map.addOverLay(countriesOverlay)
            map.addOverLay(heatmapOverlay);

            heatmapOverlay.setDataSet({data: this.points, max: 300});
            heatmapOverlay.show();
      }).catch(error => {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>
.mapDiv{

/* width: 90%; */
   height: 600px;
  text-align: center;
  border-style: solid;
  border-width: 5px;
  border-color: #0757A0;
}
    .card{
        padding-top:5px;
        background-color: rgb(8, 67, 121);
        border-radius: 25px;
    }
</style>
