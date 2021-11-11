import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import User from '/@/store/modules/user/index'


export default createStore({
  plugins: [createPersistedState({storage: window.sessionStorage})],
  modules: {
    User
  }
})







