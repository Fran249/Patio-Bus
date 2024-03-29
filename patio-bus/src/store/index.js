import Vue from 'vue'
import Vuex from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebase';

import router from '@/router';
// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();
const auth = getAuth();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    carrito: false,
    ingreso: false,
    registro: false,
    carritoCompras: [],
    notif: 0,
    forceRenderCarrito: 0,
    addedToCart: false,

  },
  getters: {
    existeUsuario(state){
      if(state.usuario === null){
          return false
      }else{
          return true
      }
    },
    array: (state) => {
      return state.carritoCompras;
    }
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
    addedToCart: (state, value) => (state.addedToCart = value),
    carritoCompras: (state, value) => (state.carritoCompras = value),
    toggleCarrito: (state, value) => (state.carrito = value),
    toggleIngreso: (state, value) => (state.ingreso = value),
    toggleRegistro: (state, value) => (state.registro = value),
    sendNotif: (state, value) => (state.notif = value),
    forceRenderCarrito: (state, value) => (state.forceRenderCarrito = value),
  },
  actions: {
    addedToCart({commit},value){
      commit("addedToCart", value);
    },
    carritoCompras({commit},value){
      commit("carritoCompras", value);
    },
    forceRenderCarrito({commit},value){
      commit("forceRenderCarrito", value);
    },
    sendNotif({ commit }, value) {
      commit("sendNotif", value);
    },
    toggleCarrito({ commit }, value) {
      commit("toggleCarrito", value);
    },
    toggleIngreso({ commit }, value) {
      commit("toggleIngreso", value);
    },
    toggleRegistro({ commit }, value) {
      commit("toggleRegistro", value);
    },
    crearUsuario({commit}, usuario){
      createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
        .then(res => {

  
 
          
          // eslint-disable-next-line no-unused-vars
          const usuario = {
            email: res.user.email,
            uid: res.user.uid,
          }
          console.log(usuario)

          const docuRef = doc( firestore , `Usuarios/${usuario.uid}`);

          setDoc(docuRef, {correo : usuario.email, rol: 'user', nombreCompleto: '', direccion: '', dni:'', telefonoContacto: '' })

         
          
          
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })

    
       setTimeout(timeOut, 2500);

      function timeOut() {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          alert('enviamos un correo de verificacion')
          location.reload()
          // ...
        });

      }


    },
    
  
    ingresoUsuario({commit}, usuario){
      signInWithEmailAndPassword(auth ,usuario.email, usuario.password)
      
      .then(res => {

 



          const usuario = {
              email: res.user.email,
              uid: res.user.uid,
              name: res.user.displayName
          }

          async function getRol(uid){

            const docuRef = doc(firestore, `Usuarios/${uid}`);
            const docuCifrada = await getDoc(docuRef);
            const infoFinal = docuCifrada.data().rol;
            return infoFinal;
          
          }
          getRol(usuario.uid).then((rol)=>{
            // eslint-disable-next-line no-unused-vars
            const userData = {
              uid: usuario.uid,
              email: usuario.email,
              rol: rol,
             
            }
            
            

            if(auth.currentUser.emailVerified  ){



              commit('setUsuario', usuario);
              
        
              location.reload()
  
            }
             else if (!auth.currentUser.emailVerified){
  
              alert('Verifica tu Correo.')
  
            }
        })
          }).catch(error => {
            console.log(error)
            commit('setError', error)
        })




  },
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)

  // eslint-disable-next-line no-unused-vars
  },
  
  cerrarSesion({commit}){
    signOut(auth).then(() => {
      // Sign-out successful.
      commit('setUsuario', null)
      router.push('/')
      
      
    })
},
  },
  modules: {
  }
})
