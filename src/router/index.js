import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


/* 以下使用到的的 Router. 是引入时使用的变量名，根据个人习惯修改，我上面用的 “Router” */
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    // 重定向，用来指向一打开网页就跳转到哪个路由
    path: '/',
    redirect: '/main'
  },
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [// 开始嵌套路由，这下面的所有路由都是Main路由的子路由
      {
        path: '/', // 嵌套路由里默认是哪个网页
        redirect: '/index'
      },
      {
        path: '/index', // 首页的路由
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/city', // 城市
        name: 'city',
        component: () => import('../views/exemCities/city.vue')
      },
      // {
      //   path: '/shenzhen', // 深圳
      //   name: 'shenzhen',
      //   component: () => import('../views/exemCities/shenzhen.vue')
      // },
      {
        path: '/sheshi', // 数据查询——设施情况
        name: 'sheshi',
        component: () => import('../views/jquery/sheshi.vue')
      },
      {
        path: '/InventoryInvestigation', // 数据查询——存量排查
        name: 'InventoryInvestigation',
        component: () => import('../views/jquery/checkReserves.vue')
      },
      {
        path: '/disposal', // 数据查询——处理处置
        name: 'disposal',
        component: () => import('../views/jquery/disposal.vue')
      },
      {
        path: '/ResourceUtilization', // 数据查询——资源利用
        name: 'ResourceUtilization',
        component: () => import('../views/jquery/ResourceUtilization.vue')
      },
      {
        path: '/buffer', // 空间分析——缓冲区
        name: 'buffer',
        component: () => import('../views/spaAnalysis/buffer.vue')
      },
      {
        path: '/ThermodynamicDiagram', // 空间分析——热力图
        name: 'ThermodynamicDiagram',
        component: () => import('../views/spaAnalysis/heatmap.vue')
      },
      {
        path: '/Inclinometer', // 物联网——斜测仪监测
        name: 'Inclinometer',
        component: () => import('../views/IOT/Inclinometer.vue')
      },
      {
        path: '/UrbanStatistics', // 统计分析——城市统计
        name: 'UrbanStatistics',
        component: () => import('../views/statistics/UrbanStatistics.vue')
      },
      {
        path: '/leixingtongji', // 统计分析——类型统计
        name: 'leixingtongji',
        component: () => import('../views/statistics/typeStatistics.vue')
      },

    ]
  },
  {
    path: '/*', // 注意，这里不是嵌套理由了，这是为了设置404页面，一定要放在最后面，这样当服务器找不到页面的时候就会返回404
    name: '404',
    component: () => import('../views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
