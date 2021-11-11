import {GET_USER_MSG} from './constant'

export default {
  [GET_USER_MSG](state, name) {
    state.name = name
  }
}
