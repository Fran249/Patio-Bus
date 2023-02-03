
import Vue from 'vue'

import HomeView from '../views/HomeView.vue'
import { initializeApp } from 'firebase/app';
import { firebaseConfig} from '../firebase/index'

import {auth} from '../firebase/index'


import { getFirestore, doc, getDoc } from "firebase/firestore";


const firestore = getFirestore();

initializeApp(firebaseConfig);
import VueRouter from 'vue-router'

async function getRol(uid){

  const docuRef = doc(firestore, `Usuarios/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;

} 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CartaBus',
    name: 'CartaBus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CartaBus.vue'),
    
  },
  {
    path: '/Q&A',
    name: 'Q&A',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Q&A.vue'),
    
  },
  {
    path: '/Guarniciones',
    name: 'Guarniciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Guarniciones.vue'),
    
  },
  {
    path: '/Bebidas',
    name: 'Bebidas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bebidas.vue'),
    
  },
  {
    path: '/Carnes',
    name: 'Carnes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carnes.vue'),
    
  },
  {
    path: '/Empanadas',
    name: 'Empanadas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Empanadas.vue'),
    
  },
  {
    path: '/Entradas',
    name: 'Entradas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Entradas.vue'),
    
  },
  {
    path: '/Infusiones',
    name: 'Infusiones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Infusiones.vue'),
    
  },
  {
    path: '/Pastas',
    name: 'Pastas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastas.vue'),
    
  },
  {
    path: '/Pizzas',
    name: 'Pizzas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pizzas.vue'),
    
  },
  {
    path: '/Postres',
    name: 'Postres',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Postres.vue'),
    
  },
  {
    path: '/Sandwiches',
    name: 'Sandwiches',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sandwiches.vue'),
    
  },
  {
    path: '/Snacks_Dulces',
    name: 'Snacks_Dulces',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/snacksDulces.vue'),
    
  },
  {
    path: '/Tartas',
    name: 'Tartas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tartas.vue'),
    
  },
  {
    path: '/MiPerfil',
    name: 'MiPerfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MiPerfil.vue'),
    beforeEnter: (to,from, next) => {
      auth.onAuthStateChanged(user => {
        getRol(user.uid).then((rol)=>{
          if( rol == 'admin'){
            next()
          }else if ( rol == null){
            next('/error')
          }else if (rol == 'user'){
            next('/error')
          }
            next();
        })     
      })
    },
  },
  {
    path: '/RegistroComprasUser',
    name: 'Registro de Compras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroComprasUser.vue'),
    beforeEnter: (to,from, next) => {
      
      auth.onAuthStateChanged(user => {
          getRol(user.uid).then((rol)=>{
            if( rol == 'admin'){
              next()
            }else if ( rol == null){
              next('/error')
            }else if (rol == 'user'){
              next('/error')
            }
              next();
          })     
        })
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)){
    const usuario = auth.currentUser
    //const role = store.state.rol
    //console.log(usuario, role)

    if (!usuario) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }else {
    next()
  }
})

export default router
