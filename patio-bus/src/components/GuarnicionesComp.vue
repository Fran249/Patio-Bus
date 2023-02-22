<template>
    <v-container class="card-container">
        <v-row>
            <v-col cols="6" v-for="select in selected" :key="select.nombre">
                <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;">
                    <v-img src="../assets/ImagenesCards/Ensalada1.jpg" style="height: 250px">

                    </v-img>
                    <div style="width: 100%;" class="d-flex flex-row">
                        <h3 class="title-cafe">
                            {{select.nombre}}
                        </h3>
                        <p class="parentesis" style="padding-top:8px">{{ select.cantidad }}</p>
                    </div>
                    <v-card-text>
                        <p class="text-p">
                            {{ select.descripcion }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <div class="d-flex flex-column" style="width:100%">
                            <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start flex-wrap">
                                <button class="button" v-for="sele in select.seleccion" :key="sele.nombre">
                                    <h3 class="h3-button">{{ sele.nombre }}</h3>
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
           
            <v-col cols="6" >
                <v-row v-for="(pagina, index) in ensaladasPrueba" :key="index">
                    <div v-if="index == indexed" class="d-flex flex-row flex-wrap">
                        <v-col cols="6" v-for="ensalada in pagina" :key="ensalada.nombre" >
                        <v-card  style="border-radius: 1px; border: 1px solid black " class="cardone" @click="selectEnsalada(ensalada)">
                            <v-img src="../assets/ImagenesCards/Ensalada3.jpg">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        {{ensalada.nombre}}
                                    </h3>
                                    <p class="parentesis">{{ensalada.cantidad}}</p>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    </div>
  
                </v-row>

            </v-col>
        </v-row>
        <div class="container-selectors-up">
        <div class="select-container">
        <div class="selectores" >
            <div class="selector"  v-for="ensalada in ensaladas" :key="ensalada.id"></div>
        </div>
        <h3 class="mt-2" v-for="select in selected" :key="select.id">{{ select.id }} de {{ensaladas.length}}</h3>
    </div>
    </div>
    <v-btn @click="consolear()">
        agdgad
    </v-btn>
    </v-container>
</template>

<script>
import { getFirestore, doc, onSnapshot , setDoc} from "firebase/firestore";
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
    name: 'GuarnicionesComp',
    data: () => ({
        color: '#000',
        color1 : '#fff',
        color2: '#000',
        color3 : '#fff',
        colorCart: '#000',
        ensaladas: [],
        selected: [],
        newEnsaladas : [],
        carrito : [],
        ensaladasPrueba: [
        ],
        indexed : 0,
    }),
    watch: {
        carrito(){
        store.commit('carritoCompras', this.carrito)
            console.log(store.state.carritoCompras)
      }
    },
    methods: {
        consolear(){
        const docRef = doc(db, 'Productos','ensalada1','pagina1','pagina');
        setDoc(docRef,{pagina: this.ensaladas});
 
        },
        selectEnsalada(ensalada){
            this.selected = [ensalada]
            console.log(this.selected)
        },
        
        agregarCart(select){
            const index = this.carrito.findIndex(object => {
                return object.id === select.id;
            });
            if (auth.currentUser == null) {
                return

            } else {
                if (index == -1) {
                    const cardItem = {
                     nombre : select.nombre,
                     id: select.id,
                     seleccion: select.seleccion,
                     descripcion: select.descripcion,
                     cantidad: select.cantidad,
                     src: select.url,
                     category: select.category,
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
        onSnapshot(doc(db, "Productos/ensaladas"), (doc) => {

                for (let index = 0; index <= 3; index++) {
                    this.ensaladasPrueba.push(doc.data().pagina1)
                }
                console.log(this.ensaladasPrueba)

                this.ensaladas = doc.data().pagina1


                this.ensaladas.forEach(item =>{
        getDownloadURL(ref(storage, `Productos/ensaladas/${item.id}.jpg`))
            .then((url) => {
                const newEnsalada= {
                    nombre : item.nombre,
                    id : item.id,
                    url: url,
                    seleccion: item.seleccion ,
                    cantidad: item.cantidad, 
                    descripcion: item.descripcion,
                    category: item.category,       
                }
  
                this.newEnsaladas.push(newEnsalada)
                console.log(this.newEnsaladas)
                if(item.id == 4){
                    const newSelected = {
                        nombre: item.nombre,
                        id: item.id,
                        url: url,
                        seleccion: item.seleccion,
                        cantidad: item.cantidad, 
                        descripcion: item.descripcion, 
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
            this.ensaladas = this.newEnsaladas
            

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

.height{
    padding-bottom: 40px;
}
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
        .selector{
        width: 101px;
        background-color: #D9D9D9;
        transition: .5s;
        height: 5px;
    }
        .selector:hover {
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

.title-cafe1 {
    font-weight: bold;
    font-family: 'red-hat';
    color: black;
    font-size: 14px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 15.22px;
}

.parentesis {
    font-weight: lighter;
    font-family: 'red-hat';
    color: black;
    font-size: 14px;
    padding-left: 2px;
    padding-top: 2px;

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

    font-size: 15px;

}

.button {
    width: 150px;
    border: 1px solid black;
}

.comprar {
    width: 150px;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 6px;
    padding: 3px;
    margin-top: 20px;
}

.button:hover {
    background-color: black;
    color: white;
    transition: .5s;

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



@media screen and (min-width: 1500px) {
    .button {
        width: 130px;

    }


}

@media screen and (max-width: 1300px) {}
</style>
