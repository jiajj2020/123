<template>
  <div>
    <div class="tool">
      <el-collapse @change="handleChange">
        <el-collapse-item title="选择图层" name="1">
          <!-- <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div> -->
        </el-collapse-item>
        <el-collapse-item title="空间统计" name="2">
          <el-checkbox v-model="checked" @change="drawHeatmap">热力图</el-checkbox>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div id="mapDiv" class="mapDiv">
    </div>
  </div>
</template>

<script>
  import mapWorld from '../../init'
  // import {getCity} from '@/api/remote'
  // import BMap from 'BMap'
  var heatmapOverlay;
  export default {
    data() {
      return {
        mainPoint: [113.307718, 33.735241],
        // mainPoint: [114.044346, 22.691963], //深圳
        checked: true,
        zoom: '10',
        map: '',
        T: '',
        points: [{
            name: '罗湖区',
            lat: 22.555341,
            lng: 114.123885,
            count: 230
          },
          {
            name: '福田区',
            lat: 22.541009,
            lng: 114.05096,
            count: 200
          },
          {
            name: '南山区',
            lat: 22.531221,
            lng: 113.92943,
            count: 210
          },
          {
            name: '宝安区',
            lat: 22.754741,
            lng: 113.828671,
            count: 220
          },
          {
            name: '龙岗区',
            lat: 22.721511,
            lng: 114.251372,
            count: 200
          },
          {
            name: '盐田区',
            lat: 22.555069,
            lng: 114.235366,
            count: 200
          },
          {
            name: '龙华区',
            lat: 22.691963,
            lng: 114.044346,
            count: 210
          },
          {
            name: '坪山区',
            lat: 22.69423,
            lng: 114.338441,
            count: 200
          },
          {
            name: '新华区',
            lat: 33.737579,
            lng: 113.299061,
            count: 160
          },
          {
            name: '卫东区',
            lat: 33.739285,
            lng: 113.310327,
            count: 210
          },
          {
            name: '石龙区',
            lat: 33.901538,
            lng: 112.889885,
            count: 180
          },
          {
            name: '湛河区',
            lat: 33.725681,
            lng: 113.320873,
            count: 240
          },
          {
            name: '宝丰县',
            lat: 33.866359,
            lng: 113.066812,
            count: 240
          },
          {
            name: '叶县',
            lat: 33.621252,
            lng: 113.358298,
            count: 220
          },
          {
            name: '鲁山县',
            lat: 33.740325,
            lng: 112.906703,
            count: 170
          },
          {
            name: '郏县',
            lat: 33.971993,
            lng: 113.220451,
            count: 240
          },
          {
            name: '舞钢市',
            lat: 33.302082,
            lng: 113.52625,
            count: 260
          },
          {
            name: '汝州市',
            lat: 34.167408,
            lng: 112.845336,
            count: 250
          }
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
      getPosition() {
        window.onload = function () {}
        mapWorld.init().then((T) => {
          this.T = T;
          //初始化地图对象
          this.zoom = '10';
          this.map = new T.Map("mapDiv");
          //设置显示地图的中心点和级别
          this.map.centerAndZoom(new T.LngLat(this.mainPoint[0], this.mainPoint[1]), this.zoom);

          //创建对象
          var ctrl = new T.Control.MapType();
          //添加控件
          var scale = new T.Control.Scale();
          //添加比例尺控件
          this.map.addControl(scale);
          // this.map.addControl(ctrl);
          this.map.centerAndZoom(new T.LngLat(this.mainPoint[0], this.mainPoint[1]), this.zoom);
          this.control = new T.Control.Zoom();
          this.map.addControl(this.control);
          var heatmapOverlay = new T.HeatmapOverlay({
            "radius": 50,
            //visible: false
          });
          this.map.addOverLay(heatmapOverlay);
          heatmapOverlay.setDataSet({
            data: this.points,
            max: 300
          });
          this.T=heatmapOverlay;
          this.drawHeatmap();
        }).catch(error => {
          console.log(error)
        })
      },
      drawHeatmap(){
          if (this.checked == true) {
            this.T.show();
          } else {
            this.T.hide();
          }

      },
      handleChange(){}

    }
  }

</script>

<style scoped>
  .mapDiv {
    width: 100%;
    height: 85vh;
  }

  .tool {
    z-index: 999;
    width: 15%;
    top: 100px;
    right: 50px;
    position: absolute;
    /* background-color: rgb(25, 202, 54); */
    opacity: 0.75;
  }

</style>
