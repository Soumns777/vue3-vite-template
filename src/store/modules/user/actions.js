import {GET_USER_MSG} from './constant'

export default {
  async [GET_USER_MSG]({commit, payload}) {
    const res = await new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve('成功')
      })
    })
    commit(GET_USER_MSG, res)
  }
}
