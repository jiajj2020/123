import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

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
        path: '/pingdingshan', // 平顶山
        name: 'pingdingshan',
        component: () => import('../views/pingdingshan.vue')
      },
      {
        path: '/shenzhen', // 深圳
        name: 'shenzhen',
        component: () => import('../views/shenzhen.vue')
      },
      {
        path: '/sheshi', // 设施情况
        name: 'sheshi',
        component: () => import('../views/sheshi.vue')
      },
      {
        path: '/disposal', // 处理处置
        name: 'disposal',
        component: () => import('../views/disposal.vue')
      },
      {
        path: '/ResourceUtilization', // 资源利用
        name: 'ResourceUtilization',
        component: () => import('../views/ResourceUtilization.vue')
      },
      {
        path: '/LandfillFacilities', // 填埋场
        name: 'LandfillFacilities',
        component: () => import('../views/LandfillFacilities.vue')
      },
      {
        path: '/buffer', // 填埋场
        name: 'buffer',
        component: () => import('../views/buffer.vue')
      },
      {
        path: '/UrbanStatistics', // 填埋场
        name: 'UrbanStatistics',
        component: () => import('../views/UrbanStatistics.vue')
      },
      {
        path: '/ThermodynamicDiagram', // 热力图
        name: 'ThermodynamicDiagram',
        component: () => import('../views/ThermodynamicDiagram.vue')
      },
      {
        path: '/Inclinometer', // 斜测仪监测
        name: 'Inclinometer',
        component: () => import('../views/Inclinometer.vue')
      },
      {
        path: '/leixingtongji', // 类型统计
        name: 'leixingtongji',
        component: () => import('../views/leixingtongji.vue')
      },
      {
        path: '/InventoryInvestigation', // 设置页面的路由
        name: 'InventoryInvestigation',
        component: () => import('../views/InventoryInvestigation.vue')
      }

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
