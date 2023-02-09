<template>
  <v-container class="card-container" >

            <v-row>
                <v-col cols="6" v-for="(select,i) in selected" :key="i">
                            <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;" >
                                <v-img :src="select.src" style="height: 250px">
                                    
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
                            <button class=" comprar  mr-5 mb-1 " @mouseover="colorCart = '#fff'" @mouseleave="colorCart = '#000'" @click="agregarCart(select)">
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
            <v-col cols="6">
                <v-row>
                    <v-col cols="6" v-for="(cafe, i) in cafes" :key="i">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectCafe(cafe)">
                            <v-img :src="cafe.src">
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
            </v-row>
            <div class="container-selectors-up">
        <div class="select-container">
        <div class="selectores" >
            <div class="selector"  v-for="cafe in cafes" :key="cafe.id"  @click="selectorShow(cafe)"></div>
        </div>
        <h3 class="mt-2" v-for="select in selected" :key="select.id">{{ select.id }} de {{cafes.length}}</h3>
    </div>
    </div>

  </v-container>
</template>


<script>
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { initializeApp  } from 'firebase/app';
import { auth, firebaseConfig } from '../firebase/index';
import { onAuthStateChanged } from "@firebase/auth";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import { getStorage, ref, getDownloadURL } from "firebase/storage";
const storage = getStorage();
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
        carrito : []
    }),
    methods: {
        selectCafe(cafe){
            this.selected = [cafe]
            console.log(this.selected)
        },
        selectorShow(cafe){
           this.selected = [cafe]
        },

        agregarCart(select){
            const index = this.carrito.findIndex(object => {
                return object.id === select.id;
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
        onSnapshot(doc(db, "Productos/infusiones"), (doc) => {

                this.cafes = doc.data().cafe


                this.cafes.forEach(item =>{

        getDownloadURL(ref(storage, `Productos/infusiones/${item.id}.jpg`))
            .then((url) => {
                const newCafe= {
                    nombre : item.nombre,
                    id : item.id,
                    src: url,
                    tamaños : item.tamaños,
                    category: item.category
                }
  
                this.newCafes.push(newCafe)

                if(item.nombre == 'Café'){
                    const newSelected = {
                        nombre: item.nombre,
                        id: item.id,
                        tamaños: item.tamaños,
                        src: url,
                        category: item.category
                    }
                    this.selected.push(newSelected)
                }else {
                    return 
                }
    
            })
            .catch((error) => {
                console.log(error)
            });


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


}
@media screen and (max-width: 1300px) {
   
}
</style>