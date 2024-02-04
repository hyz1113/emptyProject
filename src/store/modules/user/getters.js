import initState from "@/store/modules/user/state";

const getters= {
  userInfo(state) {
    return state.initState;
  }
}

export default getters;
