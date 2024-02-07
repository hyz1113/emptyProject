import initState from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: () => ({ ...initState }),
  getters,
  actions,
  mutations
}
