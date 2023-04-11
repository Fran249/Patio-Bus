<template>
    <transition name="fade">
  <v-container class="card-container" v-if="show" >

            <v-row>
                <v-col cols="12" md="6" xl="6" v-for="(select,i) in selected" :key="i">
                            <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;" >
                                <v-img :src="select.url" style="height: 250px">
                                    
                                </v-img>           
                <div style="width: 100%;">
                    <h3 class="title-cafe">
                        {{select.nombre}}
                    </h3>
                </div>
                <v-card-text>
                    <p class="text-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum officiis facilis velit itaque
                    vel quam quod, placeat doloribus minus modi aliquam, officia nesciunt laudantium.
                    Expedita sit debitis distinctio corrupti.
                    </p>
                </v-card-text>
                <v-card-actions >
                    <div class="d-flex flex-column" style="width:100%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start">
                        <button class="button" v-for="tamaño in select.tamaños" :key="tamaño.tamaño" >
                            <h3 class="h3-button">{{tamaño.tamaño}}</h3>
                        </button>
                        </div>
                        <div style="width: 100%;" class="d-flex flex-row justify-end div-botones">
                            <button class=" comprar mb-1 " @mouseover="colorCart = '#fff'" @mouseleave="colorCart = '#000'" @click="agregarCart(select)">
                                <h3 class="h3-comprar mt-1">AGREGAR</h3>
                                <v-icon v-bind:style="{'color' : colorCart}" size="20" class="mt-1 ">
                                    mdi-cart
                                </v-icon>
                            </button>
                        </div>
                    </div>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col cols="12" md="6" xl="6">
                <v-row>
                    <v-col cols="6" v-for="(cafe, i) in cafes" :key="i">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectCafe(cafe)">
                            <v-img :src="cafe.url">
                            </v-img>
                            <v-card-title>
                                <h3 class="title-cafe">
                                    {{cafe.nombre}}
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
            <div class="selector"  v-for="cafe in cafes" :key="cafe.id"  @click="selectorShow(cafe)"></div>
        </div>
        <h3 class="mt-2" >{{ index}} de {{3}}</h3>
    </div>
    </div>

  </v-container>
</transition>
</template>


<script>
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import { initializeApp  } from 'firebase/app';
import { auth, firebaseConfig } from '../firebase/index';
import { onAuthStateChanged } from "@firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import store from '@/store'

export default {
    data: ()=>({
        color: '#000',
        color1 : '#fff',
        color2: '#000',
        color3 : '#fff',
        colorCart: '#000',
        cafes: [],
        newCafes : [],
        selected : [],
        carrito : [],
        index: 1,
        show: true,
        disabled: false,
    }),
    methods: {
        cambiarPagina(){
            this.show = false

            if(this.index == 1 || this.index == 2){
                
                this.cafes = []
                this.newCafes = []
                this.selected = []
                this.index++
                
            const docRef = doc(db, 'Productos','infusiones',`pagina${this.index}`,'pagina')
        onSnapshot(docRef, (doc) => {
     

                this.cafes = doc.data().pagina

                onSnapshot(docRef, (doc) => {

                this.cafes = doc.data().pagina


                this.cafes.forEach(item =>{
                    getDownloadURL(ref(storage, `Productos/infusiones/${item.id}.jpg`))
                    .then((url) => {
                    const newCafe= {
                    nombre : item.nombre,
                    id : item.id,
                    url: url,
                    tamaños : item.tamaños,
                    category: item.category
                }
  
                this.newCafes.push(newCafe)

                if(item.nombre == 'Café'){
                    const newSelected = {
                        nombre: item.nombre,
                        id: item.id,
                        tamaños: item.tamaños,
                        url: url,
                        category: item.category
                    }
                    this.selected.push(newSelected)
                    console.log(newSelected)
                    console.log(this.selected)
                    this.show = true

                }else {
                    return 
                }
            })  

            })
                this.cereales = this.newCereales


                })
            

            })
            if(this.index == 3){
                this.disabled = true;
                console.log(this.index)
            }
            
            }
        },
        consolear(){
        const docRef = doc(db, 'Productos','infusiones','pagina3','pagina');
        setDoc(docRef,{pagina: this.cafes});
 
        },
        selectCafe(cafe){
            this.selected = [cafe]
            console.log(this.selected)
        },
        selectorShow(cafe){
           this.selected = [cafe]
        },

        agregarCart(select){
            const index = this.carrito.findIndex(object => {
                return object.nombre === select.nombre;
            });
            if (auth.currentUser == null) {
                return

            } else {
                if (index == -1) {
                   // const cardItems = {
                   //   nombre : img.nombre,
                   //   id: img.id,
                   //   tamaños: img.tamaños
                   // }
                    this.carrito.push(select)
                    
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
    watch: {
        carrito(){
        store.commit('carritoCompras', this.carrito)
            console.log(store.state.carritoCompras)
      }
    },
    beforeMount(){
        const docRef = doc(db, 'Productos', 'infusiones', 'pagina1', 'pagina')
        onSnapshot(docRef, (doc) => {

                this.cafes = doc.data().pagina


                this.cafes.forEach(item =>{
                    getDownloadURL(ref(storage, `Productos/infusiones/${item.id}.jpg`))
                    .then((url) => {
                    const newCafe= {
                    nombre : item.nombre,
                    id : item.id,
                    url: url,
                    tamaños : item.tamaños,
                    category: item.category
                }
  
                this.newCafes.push(newCafe)

                if(item.nombre == 'Café'){
                    const newSelected = {
                        nombre: item.nombre,
                        id: item.id,
                        tamaños: item.tamaños,
                        url: url,
                        category: item.category
                    }
                    this.selected.push(newSelected)
                    console.log(newSelected)
                    console.log(this.selected)

                }else {
                    return 
                }
            })  

            })
            this.cafes = this.newCafes
            

            })
            
       
    },
    mounted(){
        
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
.div-botones{
    margin-left: 0;
}
.cambiar-pagina{
    position: absolute;
    place-self: center;
    margin-left: 73rem;
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
.img-card-izquierda{
    height: 50%;
    width: 100%; 
    background-image: url('../assets/ImagenesCards/InfusionesSelector.jpg');
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 15px;
}
.title-cafe{
    font-family: 'red-hat';
    color: black;
    font-size: 25px;
    padding-left: 30px;
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


@media screen and (min-width: 1500px){
    .button{
    width: 130px;
    
}
.cambiar-pagina{
position: absolute;
place-self: center;
margin-left: 110rem;
}


}

@media screen and (max-width: 1300px) {
   
}


@media screen and (max-width: 750px){
    .title-cafe{
    font-family: 'red-hat';
    font-size: 15px;
    padding-left: 30px;
    padding-top: 10px;

}

.cambiar-pagina{
    position: absolute;
    place-self: center;
    margin-left: 0rem;

}

.container-selectors-up{
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>