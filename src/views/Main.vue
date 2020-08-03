<template>
  <el-container>
    <!--顶部-->
    <el-header class="header-container" style="height:80px">
      <el-row style="margin: 15px 15px">
        <el-col :sm="24" :md="1" :lg="1">
          <img :src="imgUrl" style="height:50px">
        </el-col>
        <el-col :sm="24" :md="12" :lg="12">
          <p class="h1">建筑垃圾识别监测系统</p>
          <p>System For Identifying And Monitoring Construction Waste</p>
        </el-col>
        <el-col :offset="6" :sm="24" :md="2" :lg="2">
          <el-dropdown trigger="hover" @command="handleCommand">
            <div>
              <span style="color:#fff;">城市：{{selectCity}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            </div>
            <el-dropdown-menu class="user-dropdown " slot="dropdown"
              style="background-color: rgba(8, 67, 121,1);border: 0px solid #000;">
              <el-dropdown-item class="action" command="pingDS">
                <span style="display:block;color: #fff;">
                  <i class="iconfont icon-securityscan" style="font-size: 14px;margin-right:10px;" />
                  平顶山市
                </span>
              </el-dropdown-item>
              <el-dropdown-item class="action" command="shenZ">
                <span style="display:block;color: #fff;">
                  <i class="iconfont icon-logout" style="font-size: 14px;margin-right:10px;" />深圳市</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :offset="1":sm="20" :md="2" :lg="2">
          <div style="float:left;color:#fff;">
            <span style="margin-right: 1vh;">Hi , admin</span>
            <span>|</span>
          </div>
          <el-dropdown trigger="hover">
            <div class="user">
              <span class="user-name" style="color:#fff;">设置</span>
            </div>
            <el-dropdown-menu class="user-dropdown " slot="dropdown"
              style="background-color: rgba(8, 67, 121,1);border: 0px solid #000;">
              <el-dropdown-item class="action">
                <span style="display:block;color: #fff;">
                  <i class="iconfont icon-securityscan" style="font-size: 14px;margin-right:10px;" />
                  修改密码
                </span>
              </el-dropdown-item>
              <el-dropdown-item class="action">
                <span style="display:block;color: #fff;">
                  <i class="iconfont icon-logout" style="font-size: 14px;margin-right:10px;" />退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <!--中央区域-->
    <el-main>
      <el-container>
        <!--左侧导航栏-->
        <el-aside class="left-container" :style="{width:collpaseWidth}">
          <!--default-active代表导航栏默认选中哪个index, :collapse决定导航栏是否展开，为boolean类型
                    :router决定导航栏是否开启路由模式，即在菜单item上设置路由是否生效，值为boolean类型-->
          <div class="card">
            <el-menu default-active="0" :unique-opened="true" :collapse="isCollapse" :router="true"
              active-text-color="#02A7F0">
              <!--index设置当前item的下标，:route则是传一个对象进行，指定路由-->
              <el-menu-item class="text left-action" index="0" :route="{name:'Index'}">
                <i style="color:#fff" class="fa fa-magic"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <!-- <el-submenu class="text left-action" index="10">
                <template class="text left-action" slot="title">
                  <i class="fa fa-align-justify" aria-hidden="true"></i><span class="text left-action"> 示范城市</span>
                </template>

                <el-menu-item class="text left-action" index="/pingdingshan" :route="{name:'pingdingshan'}">平顶山市
                </el-menu-item>
                <el-menu-item class="text left-action" index="/shenzhen" :route="{name:'shenzhen'}">深圳市</el-menu-item>


              </el-submenu> -->

              <el-submenu class="text left-action" index="1">
                <template class="text left-action" slot="title">
                  <i class="fa fa-align-justify" aria-hidden="true"></i><span class="text left-action"> 数据查询</span>
                </template>

                <el-menu-item class="text left-action" index="/InventoryInvestigation"
                  :route="{name:'InventoryInvestigation'}">存量排查
                </el-menu-item>
                <el-menu-item class="text left-action" index="/sheshi" :route="{name:'sheshi'}">设施建设</el-menu-item>
                <el-menu-item class="text left-action" index="/disposal" :route="{name:'disposal'}">处理处置</el-menu-item>
                <el-menu-item class="text left-action" index="/ResourceUtilization"
                  :route="{name:'ResourceUtilization'}">资源利用</el-menu-item>
              </el-submenu>

              <el-submenu class="text left-action" index="2">
                <template class="text left-action" slot="title">
                  <i class="fa fa-align-justify" aria-hidden="true"></i>
                  <span class="text left-action"> 统计分析</span>
                </template>

                <el-menu-item class="text left-action" index="/UrbanStatistics" :route="{name:'UrbanStatistics'}">城市统计
                </el-menu-item>
                <el-menu-item class="text left-action" index="/leixingtongji" :route="{name:'leixingtongji'}">类型统计
                </el-menu-item>
              </el-submenu>

              <el-submenu class="text left-action" index="3">
                <template class="text left-action" slot="title">
                  <i class="fa fa-align-justify" aria-hidden="true"></i>
                  <span class="text left-action"> 空间分析</span>
                </template>

                <el-menu-item class="text left-action" index="/buffer" :route="{name:'buffer'}">缓冲区分析</el-menu-item>
                <el-menu-item class="text left-action" index="/ThermodynamicDiagram"
                  :route="{name:'ThermodynamicDiagram'}">热力图分析</el-menu-item>
                <el-menu-item class="text left-action" index="3-3">空间量测</el-menu-item>
              </el-submenu>

              <el-submenu class="text left-action" index="4">
                <template class="text left-action" slot="title">
                  <i class="fa fa-align-justify" aria-hidden="true"></i>
                  <span class="text left-action">物联网监测</span>
                </template>

                <el-menu-item class="text left-action" index="/Inclinometer" :route="{name:'Inclinometer'}">测斜仪监测
                </el-menu-item>
                <el-menu-item class="text left-action" index="4-2">土压力监测</el-menu-item>
                <el-menu-item class="text left-action" index="4-3">钢筋应力监测</el-menu-item>
                <el-menu-item class="text left-action" index="4-4">边坡地震监测</el-menu-item>
              </el-submenu>
              <el-menu-item class="text left-action">
                <i style="color:#fff" class="fa fa-globe"></i>
                <span slot="title">光谱库</span>
              </el-menu-item>
              <el-menu-item class="text left-action"
                onclick="javascript:window.open('http://localhost:8081/cesiumMap/map.html')">
                <i style="color:#fff" class="fa fa-globe"></i>
                <span>三维系统</span>
              </el-menu-item>


            </el-menu>
          </div>
        </el-aside>
        <!--主内容显示区域-->
        <el-main>
          <!--路由渲染-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
    <!--底部-->

  </el-container>
</template>

<script>
  // 这一大段JS就是为了做收缩/展开导航栏而用的！
  export default {
    name: "Main",
    data: function () {
      return {
        imgUrl: require("../assets/images/locationMap.png"),
        selectCity:'选择城市',
        isCollapse: false, // 决定左侧导航栏是否展开
      }
    },
    computed: {
      collpaseIcon: function () { // 左侧导航栏是否展开状态的图标
        // 如果是展开状态就图标向右，否则图标向左
        return this.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold';
      },
      collpaseWidth: function () { // 左侧导航栏是否展开状态的宽度
        // 如果是展开状态就导航栏宽度为65px，否则200px
        return this.isCollapse ? '65px' : '200px';
      }
    },
    methods: {
      changeCollapse: function () { // 更改左侧导航栏展示状态
        this.isCollapse = !this.isCollapse;
      },

      handleCommand(command) {
        if(command=='pingDS'){
          this.selectCity = '平顶山市';
          //指定跳转的地址 this.$router.replace('/menu')
          this.$router.replace('/pingdingshan')
        }else if(command=='shenZ'){
          this.selectCity = '深圳市';
          this.$router.replace('/shenzhen')
        }else{
          return
        }
      },
    },
    created(){
    }
  }

</script>

<style>
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
  }

  /*整体显示区域布局样式*/
  .el-container {
    height: 100%;
  }

  .h1 {
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: bold;
    font-size: 30px;
    text-align: left;
    color: #fff;
    line-height: 35px;
    overflow: hidden;
    height: 100%;
    width: 400px;
  }

  /* .h2 {
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    color: #fff;
    line-height: 35px;
    overflow: hidden;
    height: 100%;
  } */

  .el-header,
  .el-main {
    padding: 0;
  }

  .header-container {
    /* height: 50px; */
    line-height: 30px;
    background: rgb(8, 77, 142);
    -webkit-box-shadow: 0 1px 4px rgba(0, 18, 36, 0.08);
    box-shadow: 0 1px 4px rgba(0, 18, 36, 0.08);
    position: relative;
    vertical-align: middle;
  }

  .action:hover {
    background-color: #006cfc !important;
  }


  /*左边导航栏具体样式*/

  .left-action {
    background: rgb(8, 67, 121);
  }

  .left-action:hover {
    background-color: rgb(8, 67, 121);
    color: #02A7F0;
  }

  .el-submenu__title {
    background: rgb(8, 67, 121);
  }

  .el-submenu {
    background: rgb(8, 67, 121);
  }

  .el-submenu:hover {
    background: rgb(8, 67, 121);
    color: #02A7F0;
  }

  .el-submenu__title:hover {
    background-color: rgb(8, 67, 121);
  }

  .left-container {
    background: rgb(8, 77, 142);
    -webkit-box-shadow: 0 1px 4px rgba(0, 18, 36, 0.08);
    box-shadow: 0 1px 4px rgba(0, 18, 36, 0.08);
  }

  .el-menu {
    background-color: rgb(8, 67, 121);
    border-right: 0;
  }

  .el-menu-item.is-active {
    background: rgb(8, 67, 121) !important;
  }

  .el-submenu__title.is-active {
    background: rgb(8, 67, 121) !important;
  }

  .el-menu-vertical-demo.el-menu {
    padding-left: 20px;
    text-align: left;
    height: 100%;
    padding: 0;
  }

  .card {
    margin-top: 0px;
    margin-right: 5px;
    margin-left: 5px;
    height: 95%;
    background-color: rgb(8, 67, 121);
    padding: 10px;
    border-radius: 25px;
  }

  .text {
    color: #fff;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 20px;
    text-align: left;
  }

  .el-submenu__title i {
    color: #ffffff;
    size: 10px;
  }

  el-container>.el-menu-vertical-demo.el-menu {
    padding: 0;
  }

  .el-submenu .el-menu-item,
  .el-menu-item {
    min-width: 50px;
  }

  .el-menu-item {
    padding: 0;
  }

</style>
