import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import autoInfoExtra from './components/autoInfoExtra'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path:'/autoInfoExtra', component: autoInfoExtra}
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');



