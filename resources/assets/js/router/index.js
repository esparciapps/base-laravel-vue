import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store';
import { sync } from 'vuex-router-sync';

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history',
});

sync(store, router);

export default router;
