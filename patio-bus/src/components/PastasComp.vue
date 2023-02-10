<template>
    <v-container class="card-container">
        <v-row>
            <v-col cols="6" v-for="select in selected" :key="select.nombre">
                <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;">
                    <v-img src="../assets/ImagenesCards/ñoquis.jpg" style="height: 250px">

                    </v-img>
                    <div style="width: 100%;" class="d-flex flex-row">
                        <h3 class="title-cafe">
                            {{select.nombre}}
                        </h3>
                        
                    </div>
                    <v-card-text>
                        <p class="text-p">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum officiis facilis velit
                            itaque
                            vel quam quod, placeat doloribus minus modi aliquam, officia nesciunt laudantium.
                            Expedita sit debitis distinctio corrupti.
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-card-actions style="padding:2px">
                    <div class="d-flex flex-column" style="width:100%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row flex-wrap justify-start" >
                            <div v-for="salsas in select.salsas" :key="salsas.nombre">
                                <button class="button" v-if="salsas.nombre != 'Tuco' && salsas.nombre != 'Crema'">
                                <h3 class="h3-button">{{salsas.nombre}}</h3>
                            </button>
                                <v-menu offset-y  v-if="salsas.nombre == 'Tuco' " >
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1" dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >{{ salsas.nombre }}</h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <div v-for="tuco in salsas.tucos" :key="tuco.nombre">
                                        <button class="button2">
                                            <h3> {{ tuco.nombre }}</h3>
                                        </button>

                                    </div>
                                </v-menu>                               
                                <v-menu offset-y  v-if="salsas.nombre == 'Crema'">
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1 " dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >{{salsas.nombre}} </h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <div v-for="crema in salsas.cremas" :key="crema.nombre">
                                        <button class="button2">
                                            <h3> {{ crema.nombre }}</h3>
                                        </button>

                                    </div>
                                   <!-- <v-list class="list">
                                        <v-list-item class="button2" v-for="(item, index2) in items2" :key="index2">
                                            <h3 class="list-title">{{ item.title }}</h3>
                                        </v-list-item>
                                    </v-list>-->
                                </v-menu>
                            
                            </div>  
                            </div>
                        </div>
                </v-card-actions>
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
                    <v-col cols="6" v-for="pasta in pastas" :key="pasta.nombre">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectPasta(pasta)">
                            <v-img :src="pasta.src">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        {{pasta.nombre}}
                                    </h3>
                                    
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    
                </v-row>
            </v-col>
        </v-row>
        <div class="container-selectors-up">
            <div class="select-container">
                <div class="selectores">
                    <div class="selector1"></div>
                    <div class="selector2"></div>
                    <div class="selector3"></div>
                    <div class="selector4"></div>
                </div>
                <h3 class="mt-2">1 de 4</h3>
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
    name: 'PastasComp',
    data: () => ({
        color: '#000',
        color1 : '#fff',
        color2: '#000',
        color3 : '#fff',
        colorCart: '#000',
        items: [
            { title: 'Carne' },
            { title: 'Pollo' },            
        ],
        items2: [
            { title: 'Verdeo' },
            { title: 'Cuatro Quesos' },            
        ],
        pastas: [],
        selected: [],
        newPastas : [],
        carrito : [],

    }),
    methods: {
        selectPasta(pasta){
            this.selected = [pasta]
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
                     src: select.src,
                     salsas: select.salsas,
                     category : select.category,
                    }
                    this.carrito.push(cardItem)
                    console.log(this.carrito)
                    localStorage.setItem(`cart/${auth.currentUser.uid}`, JSON.stringify(this.carrito))
                    store.commit('forceRenderCarrito', +1)

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
        onSnapshot(doc(db, "Productos/pastas"), (doc) => {

                this.pastas = doc.data().pastas

                console.log(this.pastas)
                this.pastas.forEach(item =>{
        getDownloadURL(ref(storage, `Productos/pastas/${item.id}.jpg`))
            .then((url) => {
                const newPasta= {
                    nombre : item.nombre,
                    id : item.id,
                    src: url,
                    salsas: item.salsas,
                    category: item.category,
                }
                
                this.newPastas.push(newPasta)
                console.log(this.newPastas)
                if(item.nombre == 'Ñoquis'){
                    const newSelected = {
                        nombre: item.nombre,
                        id: item.id,
                        src: url,
                        salsas: item.salsas,
                        category: item.category,
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
            this.pastas = this.newPastas
            

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
.container-selectors-up {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.select-container {
    width: 50%;

    h3 {
        text-align: center;
        font-family: 'red-hat';
        font-size: 15px;
        height: 20px;

    }

    .selectores {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;

        .selector1,
        .selector2,
        .selector3,
        .selector4 {
            width: 101px;
            background-color: #D9D9D9;
            transition: .5s;
            height: 5px;
        }

        .selector1:hover,
        .selector2:hover,
        .selector3:hover,
        .selector4:hover {
            background-color: #B9B1B1;
            transition: .5s;
            cursor: pointer;
        }
    }
}

.select-container h3 {
    padding: 0;
    margin: 0;
}

.title-cafe {
    font-weight: bold;
    font-family: 'red-hat';
    color: black;
    font-size: 14px;
    padding-left: 30px;
    padding-top: 10px;
}

.text-p {
    font-family: 'red-hat';
    color: grey;
}

.h3-button {
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 3px;
}

.h3-comprar {
    font-family: 'red-hat';
    font-weight: 700;

    font-size: 15px;

}

.button {
    width: 100px;
    border: 1px solid black;
}

.comprar {
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
.h3-button1{
    font-weight: 500;
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 5px;
}
.button1 {
    display: flex;    
    border-radius: 0;
    width: 100px;
    border: 1px solid black;
}
.button1:hover     {
    background-color:black;
    color: white;
    transition: .5s;
}
.button1:hover .icono-menu{    
    color: white;
    transition: .5s;
} 
.button2{        
    display: flex; 
    border-right: 1px solid black;    
    border-left: 1px solid black;  
    border-bottom: 1px solid black;  
    height: 49px;
    width: 100px;
    border-radius: 0;  
    cursor: pointer;        
    justify-content: center;
    align-items:  center;
    background-color: #ffff;
}
 .button2 h3 {padding: 5px;
     font-weight: 500;
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;    
    text-align: center;
    }

.button2:hover{
    background-color: black;
    color: white;
    transition: .5s;
}

@media screen and (min-width: 1500px) {
    .button {
        width: 100px;

    }


}

@media screen and (max-width: 1300px) {}
</style>
