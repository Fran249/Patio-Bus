import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import FooterVue from '@/components/FooterVue.vue'
import CarritoVue from '@/components/Carrito.vue';
import LinksMenus from '@/components/LinksMenus.vue';
import IngresoComp from '@/components/IngresoComp.vue'
import RegistroComp from '@/components/RegistroComp.vue'

Vue.component('IngresoComp', IngresoComp)
Vue.component('RegistroComp', RegistroComp)
Vue.component('LinksMenus', LinksMenus)
Vue.component('FooterVue', FooterVue)
Vue.component('CarritoVue', CarritoVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
