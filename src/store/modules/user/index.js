import state from "/@/store/modules/user/state";
import actions from "/@/store/modules/user/actions";
import mutations from "/@/store/modules/user/mutations";
import getters from "/@/store/modules/user/getters";

export default {
  namespaced: true, // 命名空间 namespaced
  state,
  mutations,
  actions,
  getters
}
