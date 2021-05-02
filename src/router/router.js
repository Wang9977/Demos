import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    // 标签库
    path: '/a',
    component: () => import(/* webpackChunkName: "common" */'@/routeDemo/a.vue'),
    redirect: '/labelLibrary/label-library',
    children: [
      {
        // 商品标签库
        path: 'a1',
        name: 'a1',
        component: () => import(/* webpackChunkName: "label-library" */ '@/routeDemo/a1.vue')
      },
      {
        // 内容标签库
        path: 'a2',
        name: 'a2',
        component: () => import(/* webpackChunkName: "content-library" */ '@/routeDemo/a2.vue')
      }
    ]
  }
]