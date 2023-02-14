<template>
    <v-container class="card-container" >
  
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
                    <v-col cols="6" v-for="(cereal, i) in cereales" :key="i">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectCereal(cereal)">
                            <v-img :src="cereal.url">
                            </v-img>
                            <v-card-title>
                                <h3 class="title-cafe">
                                    {{cereal.nombre}}
                                </h3>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
              </v-row>
          
              <div class="container-selectors-up">
        <div class="select-container">
        <div class="selectores" >
            <div class="selector"  v-for="cereal in cereales" :key="cereal.id"></div>
        </div>
        <h3 class="mt-2" v-for="select in selected" :key="select.id">{{ select.id }} de {{cereales.length}}</h3>
    </div>
    </div>
    </v-container>
  </template>
  
  
  <script>

import { getFirestore, doc, onSnapshot } from "firebase/firestore";
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
        name: 'SnacksSelector',
      data: ()=>({
        color: '#000',
        color1 : '#fff',
        color2: '#000',
        color3 : '#fff',
        colorCart: '#000',
        cereales: [],
        selected: [],
        newCereales : [],
        carrito : [],
        
  
      }),
      watch: {
        carrito(){
        store.commit('carritoCompras', this.carrito)
            console.log(store.state.carritoCompras)
      }
    },
      methods: {
        selectCereal(cereal){
            this.selected = [cereal]
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
        onSnapshot(doc(db, "Productos/snacks"), (doc) => {

                this.cereales = doc.data().snacks


                this.cereales.forEach(item =>{
        getDownloadURL(ref(storage, `Productos/snacks/${item.id}.jpg`))
            .then((url) => {
                const newCereal= {
                    nombre : item.nombre,
                    id : item.id,
                    url: url,
                    buyNumber : item.buyNumber,
                }
  
                this.newCereales.push(newCereal)
                console.log(this.newCereales)
                if(item.nombre == 'Mix de cereales'){
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
            this.cereales = this.newCereales
            

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
  @media screen and (max-width: 1300px) {
     
  }
  </style>