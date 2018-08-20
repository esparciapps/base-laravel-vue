import axios from 'axios';

const state = {
    token: null,
    user: null,
};

const getters = {
    user: state => state.user,
    token: state => state.token,
    authenticated: state => state.token !== null,
};

const mutations = {
    setToken (state, { token, remember }) {
        state.token = token;
    },
    setUser (state, { user }) {
        state.user = user;
    }
};

const actions = {
    logout({ commit }) {
        commit('setToken', { token: null });
        commit('setUser', { user: null });
    }
    // login({ commit }, { user, token }) {
    //     commit('setToken', { token });
    //     commit('setUser', { user });        
    // }
};

export default {
    state,
    getters,
    mutations,
    actions
};
