// src同级目录下创建 router文件夹,里面放入 index.js (利用 router-view进行路由占位,进行路由间的跳转)

// router/index.js目录下
// TODO 导入  createRouter ,可以创建一个与 Vue3一起安装的路由器实例
// TODO  导入 createWebHistory,创建历史记录
import {createRouter, createWebHistory} from "vue-router";
import user from './user'


// 定义路由配置
let routes = [
  // Soumns 路由重定向 (页面开启默认跳转到 HelloWorld 组件)
  {
    path: '/',
    redirect: '/HelloWorld',
  },

  // FIXME 挂载 home组件的路由规则
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('/@/components/HelloWorld.vue')
  },
]

routes = [...routes, ...user]
console.log(routes, '--->route')

// TODO 定义路由 每个路由应该映射一个组件
const router = createRouter({
  // FIXME 通过 createWebHistory() 创建 history 模式
  history: createWebHistory(),
  // FIXME 挂载路由
  routes,
});

// 导出
export default router
