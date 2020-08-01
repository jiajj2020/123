<template>
<div>
  <div id="mapDiv" class="mapDiv">
  </div>
</div>
</template>
 
<script>
import BaiduMap from '../init'
// import {getCity} from '@/api/remote'
// import BMap from 'BMap'
var map;
var zoom;
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
      myIcon: ''
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
        console.log(11111)
      }
      BaiduMap.init().then((T) => {
                    //初始化地图对象
            var zoom=12;
            map = new T.Map("mapDiv");
            //设置显示地图的中心点和级别
            map.centerAndZoom(new T.LngLat(114.085947, 22.547), zoom);
            console.log(zoom);
      }).catch(error => {
        console.log(error)
      })
    }
 
  }
}
</script>
 
<style scoped>
.mapDiv{
  width: 100%;
  height: 85vh;
}
</style>