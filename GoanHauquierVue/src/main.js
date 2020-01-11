import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import VueParticles from 'vue-particles'
import Work from './components/Work'
import VuePageTransition from 'vue-page-transition'
 


Vue.config.productionTip = false

Vue.use(VuePageTransition)

Vue.use(VueRouter)

Vue.use(VueParticles)


const router = new VueRouter({
  routes: [
    {path: '/', component: Home},  
    {path: '/work', component: Work},  
    {path: '*', component: Home}, 
  ],
  // mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
