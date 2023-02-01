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
import LinksPerfilCompra from '@/components/LinksPerfilCompra'

Vue.component('LinksPerfilCompra', LinksPerfilCompra)
Vue.component('IngresoComp', IngresoComp)
Vue.component('RegistroComp', RegistroComp)
Vue.component('LinksMenus', LinksMenus)
Vue.component('FooterVue', FooterVue)
Vue.component('CarritoVue', CarritoVue)
Vue.config.productionTip = false
import {auth} from './firebase'


import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore();


async function getRol(uid){

  const docuRef = doc(firestore, `Usuarios/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;

}



auth.onAuthStateChanged(user => {
  if(user && user.emailVerified){
    




    
    getRol(user.uid).then((rol)=>{
      // eslint-disable-next-line no-unused-vars
      const userData = {
        uid: user.uid,
        email: user.email,
        rol: rol,
      }

      

      store.dispatch('detectarUsuario', {email: user.email, uid: user.uid, rol, name: user.displayName, foto: user.photoURL});
      
      
      //console.log("userData final", userData)
    })
   
    } else {
      return
    }
  }
)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
