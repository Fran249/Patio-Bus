<template>
    <transition name="fade">
   <v-container class="card-container" v-if="show">
 
             <v-row>
                 <v-col cols="6" v-for="(select,i) in selected" :key="i">
                             <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;" >
                               <v-img :src="select.url" style="height: 250px">
                                   
                               </v-img>
                 <div style="width: 100%;">
                     <h3 class="title-cafe">
                       {{ select.nombre }}
                     </h3>
                 </div>
                 <v-card-text class="v-text">
                     <p class="text-p ">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum officiis facilis velit itaque
                     vel quam quod, placeat doloribus minus modi aliquam, officia nesciunt laudantium.
                     Expedita sit debitis distinctio corrupti.
                     </p>
                 </v-card-text>
                 <v-card-actions >
                       <div class="grid-botonera">
                           <div class="number">{{ select.buyNumber }}</div>
                           <button class="plus" @click="select.buyNumber++">
                               <v-icon>
                                   mdi-plus
                               </v-icon>
                           </button>
                           <button class="minus" @click="select.buyNumber--" :disabled="select.buyNumber == 0">
                               <v-icon>
                                   mdi-minus
                               </v-icon>
                           </button>        
                       </div>
                       <div style="width: 100%;" class="d-flex flex-row justify-end div-botones">
                           <button class=" comprar  mr-5 mb-1 " @mouseover="colorCart = '#fff'" @mouseleave="colorCart = '#000'" @click="agregarCart(select)">
                               <h3 class="h3-comprar mt-1">AGREGAR</h3>
                               <v-icon v-bind:style="{'color' : colorCart}" size="20" class="mt-1 ">
                                   mdi-cart
                               </v-icon>
                           </button>
                       </div>
                 </v-card-actions>
             </v-card>
             </v-col>
             <v-col cols="6">
               <v-row>
                   <v-col cols="6" v-for="(vino, i) in vinos" :key="i">
                       <v-card style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectVino(vino)">
                           <v-img :src="vino.url">
                           </v-img>
                           <v-card-title>
                               <h3 class="title-cafe">
                                   {{vino.nombre}}
                               </h3>
                           </v-card-title>
                       </v-card>
                   </v-col>
               </v-row>
           </v-col>
           <v-btn icon color="black" @click="cambiarPagina()" class="cambiar-pagina" :disabled="disabled">
                   <v-icon>
                       mdi-arrow-right
                   </v-icon>
               </v-btn>

             </v-row>
             <div class="container-selectors-up">
       <div class="select-container">
       <div class="selectores" >
           <div class="selector"  v-for="vino in vinos" :key="vino.id"></div>
       </div>
       <h3 class="mt-2" v-for="select in selected" :key="select.id">{{ select.id }} de {{vinos.length}}</h3>
   </div>
   </div>
   </v-container>
</transition>
</template>

<script>
import { getFirestore, doc, onSnapshot, setDoc, } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {  firebaseConfig } from '../firebase/index';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/index";

import store from '@/store'

export default {
   name: 'vinosTintos',
   data: () => ({
       color: '#000',
       color1 : '#fff',
       color2: '#000',
       color3 : '#fff',
       colorCart: '#000',
       vinos: [],
       selected: [],
       newVinos : [],
       carrito : [],
       index: 1,
       show: true,
       disabled: false,
   }),
   watch: {
       carrito(){
       store.commit('carritoCompras', this.carrito)
           console.log(store.state.carritoCompras)
     }
   },
   methods: {

       cambiarPagina(){
           this.show = false

           if(this.index >= 1){
               
               this.vinos = []
               this.newVinos = []
               this.selected = []
               this.index++
               
           const docRef = doc(db, 'Productos','vinosTintos',`pagina${this.index}`,'pagina')
       onSnapshot(docRef, (doc) => {
    

               this.vinos = doc.data().pagina

               onSnapshot(docRef, (doc) => {

               this.vinos = doc.data().pagina


               this.vinos.forEach(item =>{
               getDownloadURL(ref(storage, `Productos/vinosTintos/${item.id}.jpg`))
               .then((url) => {
               const newVino= {
                   nombre : item.nombre,
                   id : item.id,
                   url: url,
                   buyNumber : item.buyNumber,
               }

               this.newVinos.push(newVino)
               console.log(this.newVinos)
               if(item.nombre == 'Vasco viejo x700ml' || item.nombre == 'Trumpeter x750ml'){
                   const newSelected = {
                       nombre: item.nombre,
                       id: item.id,
                       url: url,
                       buyNumber : item.buyNumber,
                   }
                   this.selected.push(newSelected)
                   console.log(this.selected)
                   this.show = true

               }else {
                   return 
               }

               })
               .catch((error) => {
               console.log(error)
               });


               })
               this.vinos = this.newVinos


               })
           

           })
           if(this.index == 2){
               this.disabled = true;
               console.log(this.index)
           }
           
           }
       },
       consolear(){
       const docRef = doc(db, 'Productos','vinosTintos','pagina2','pagina');
       setDoc(docRef,{pagina: this.vinos});

       },
       selectVino(vino){
           this.selected = [vino]
           console.log(this.selected)
       },
       
       agregarCart(select){
           const index = this.carrito.findIndex(object => {
               return object.nombre === select.nombre;
           });
           if (auth.currentUser == null) {
               return

           } else {
               if (index == -1) {
                   const cardItem = {
                    nombre : select.nombre,
                    id: select.id,
                    cantidad : select.buyNumber,
                    src: select.url
                   }
                   this.carrito.push(cardItem)

                   localStorage.setItem(`cart/${auth.currentUser.uid}`, JSON.stringify(this.carrito))
                   store.commit('forceRenderCarrito', +1)
                   store.commit("addedToCart", true)

               } else {
                   return

               }
               this.dialogCarrito = true
               setTimeout(this.notificacionCarrito, 1200)

               store.commit("sendNotif", this.carrito.length)
               
           }

          

       }

   },
   beforeMount(){
       const docRef = doc(db, 'Productos','vinosTintos','pagina1','pagina')
       onSnapshot(docRef, (doc) => {

               this.vinos = doc.data().pagina


               this.vinos.forEach(item =>{
       getDownloadURL(ref(storage, `Productos/vinosTintos/${item.id}.jpg`))
           .then((url) => {
               const newVino= {
                   nombre : item.nombre,
                   id : item.id,
                   url: url,
                   buyNumber : item.buyNumber,
               }
 
               this.newVinos.push(newVino)
               console.log(this.newVinos)
               if(item.nombre == 'Vasco viejo x700ml' || item.nombre == 'Trumpeter x750ml'){
                   const newSelected = {
                       nombre: item.nombre,
                       id: item.id,
                       url: url,
                       buyNumber : item.buyNumber,
                   }
                   this.selected.push(newSelected)
                   console.log(this.selected)

               }else {
                   return 
               }
   
           })
           .catch((error) => {
               console.log(error)
           });


           })
           this.vinos = this.newVinos
           

           })
           
      
   },
   beforeCreate(){
       onAuthStateChanged(auth, (user) => {
           if (user) {
                       let datosLocalStorage = JSON.parse(localStorage.getItem(`cart/${auth.currentUser.uid}`));
                       if(datosLocalStorage === null){
                           this.carrito = [];
                       }else{
                           this.carrito = datosLocalStorage;
                           store.commit("sendNotif", this.carrito.length)
                       } 
                   } else {
                       // User is signed out
                       // ...
                   }
                   });
       
   }
   

   }

</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
 transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
 opacity: 0
}

 .container-selectors-up{
   width: 100%;
   display: flex;
   justify-content: flex-end;
 }
 .select-container{
   width: 50%;
   h3{
       text-align: center;
       font-family: 'red-hat';
       font-size: 15px;
       height: 20px;
       
   }
  
   .selectores{
       display: flex;
       gap: 20px;
       justify-content: center;
       margin-top: 20px;
       .selector{
       width: 101px;
       background-color: #D9D9D9;
       transition: .5s;
       height: 5px;
   }
       .selector:hover{
           background-color: #B9B1B1;
           transition: .5s;
           cursor: pointer;
       }
   }
 }
 .select-container h3{
       padding: 0;
       margin: 0;
   }
 .grid-botonera{
   display: grid;
   grid-template-columns: repeat(3, 50px);
   grid-template-rows: repeat(2, 30px);
   width: 25%;
   margin-left: 10px;
   .number{
       grid-column: 1/2;
       grid-row: 1/3;
       display: grid;
       place-items: center;
       border: 1px solid black;

   }
   .plus{
       grid-column: 2/3;
       grid-row: 1/2;
       border-right: 1px solid black;
       border-top: 1px solid black;
       width: 70%;
   }
   .minus{
       grid-column : 2/3;
       grid-row: 2/3;
       border-right: 1px solid black;
       border-bottom: 1px solid black;
       border-top: 1px solid black;
       width: 70%;
   }
 }

 .title-cafe{
     font-family: 'red-hat';
     color: black;
     font-size: 20px;
     padding-left: 10px;
     padding-top: 10px;
 }
 .text-p{
     font-family: 'red-hat';
     color: grey;
 }
 .h3-button{
     font-family: 'red-hat';
     font-style: italic;
     font-size: 18px;
     margin-top: 3px;
 }
 .h3-comprar{
     font-family: 'red-hat';
 
     font-size: 15px;
 
 }
 .button{
       margin-right: 10px;
     width: 100px;
     border: 1px solid black;
 }
 .comprar{
    width: 150px;
   border: 1px solid black;
   color: black;
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 6px;
   padding: 3px;
   margin-top: 20px;
 }
 .comprar:hover {
   background-color: black;
   color: white;
   transition: .5s;

}
 .button:hover {
     background-color: black;
     color: white;
     transition: .5s;
 
 }
 
 
 @media screen and (min-width: 1400px){
     .button{
     width: 130px;
     
 }
 .v-text{
   height: 200px;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 }
 @media screen and (min-width: 1500px) {

   .cambiar-pagina{
   position: absolute;
   place-self: center;
   margin-left: 111rem;
}


}

 @media screen and (max-width:1400px ) {
   .cambiar-pagina{
   position: absolute;
   place-self: center;
   margin-left: 73rem;
}
 }
 </style>