import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';

import createPersistedState from 'vuex-persistedstate';

const modules = {
    auth
};

 const plugins = [
     createPersistedState()
 ];

export default new Vuex.Store({
    modules,
    plugins
});