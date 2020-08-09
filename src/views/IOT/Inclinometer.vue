<template>
    <div style="height:100%;width:100%;background-color:#084D8E;">
        <div class="card" style="margin-top:0px;">
            <el-col>
                <div class="h2"  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                    斜测仪监测
                </div>
            </el-col>
            <el-col :offset="3" :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <div id="mapDiv" class="mapDiv">
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
import BaiduMap from '../../init'
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
      zoom: '11',
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
      window.onload = function() {
        // console.log(11111)
      }
      BaiduMap.init().then((T) => {
                    //初始化地图对象
            var zoom=16;
            map = new T.Map('mapDiv', {datasourcesControl: true});
                        //创建对象
            var ctrl = new T.Control.MapType();
            //添加控件
            var bounds = new T.LngLatBounds(new T.LngLat(116.11625, 39.6768),new T.LngLat( 116.11745, 39.6782));
            var rect = new T.Rectangle(bounds );
            map.addOverLay(rect);
             var marker = new T.Marker(new T.LngLat(116.11665, 39.6772));
            //向地图上添加标注
            map.addOverLay(marker);
            var infoWin1 = new T.InfoWindow();
            var sContent =
                "<div style='margin:0px;font-size:14px'>" +
                "<div style='margin:10px 10px; '>" +
                "<div style='margin:10px 0px 10px 10px;'>编号：01 <br>斜率：2.6度<br>时间：2020年7月6日14:00" +
                "</div>" +
                "</div>" +
                "</div>";
            infoWin1.setContent(sContent);
            marker.addEventListener("click", function () {
                marker.openInfoWindow(infoWin1);
            });// 将标注添加到地图中

             var marker2 = new T.Marker(new T.LngLat(116.11686, 39.6778));
            //向地图上添加标注
            map.addOverLay(marker2);
            var infoWin2 = new T.InfoWindow();
            var sContent2 =
                "<div style='margin:0px;font-size:14px'>" +
                "<div style='margin:10px 10px; '>" +
                "<div style='margin:10px 0px 10px 10px;'>编号：02 <br>斜率：1.8度<br>时间：2020年7月6日16:00" +
                "</div>" +
                "</div>" +
                "</div>";
            infoWin2.setContent(sContent2);
            marker2.addEventListener("click", function () {
                marker2.openInfoWindow(infoWin2);
            });// 将标注添加到地图中
             var scale = new T.Control.Scale();
            //添加比例尺控件
            map.addControl(scale);
            map.addControl(ctrl);
            map.centerAndZoom(new T.LngLat(116.11860, 39.6795), zoom);
            control = new T.Control.Zoom();
            map.addControl(control);
            //添加缩放平移控件
      }).catch(error => {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>
.mapDiv{
  width: 90%;
  height: 700px;
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
