import createPersistedState from 'vuex-persistedstate';
import {createStore} from 'vuex';
import modules from './modules';

const state = {
    token: "",
    lang: ""
}
const actions = {
    saveState: ({commit, state}, data) => {
        commit('SAVE_STATE', data);
    },
    resetState: ({commit}, data) => {
        commit('RESET_STATE', data);
    }
};
const mutations = {
    SAVE_STATE: (state, payload) => {
        Object.keys(payload).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(state, key)) {
                state[key] = payload[key];
            }
        });
    },
    RESET_STATE: (state) => {
        Object.keys(state).forEach((key) => {
            state[key] = state[key];
        });
    }
};


export const store = createStore({
    state,
    actions: actions,
    mutations: mutations,
    modules,
    plugins: [createPersistedState({ // 防止刷新数据丢失
        reducer(val) {
            return {
                token: val.token,
                lang: val.lang,
                user: val.user,
                theme: val.theme === 1 ? 'dark' : 'light', // 主题
            };
        },
    })],
})
