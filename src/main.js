import {createApp} from 'vue'
import App from './App.vue'

import store from '/@/store/index'
import router from '/@/router/index'

/*
 * 前置路由
 */
router.beforeEach((to, from, next) => {
  console.log(to, from)


  next()
})


createApp(App).use(store).use(router).mount('#app')
