<template>
    <div class="dialog">
       
        <v-container style="display: flex; flex-direction: row; justify-content: space-between;"  v-if="cantidades >= 1">
            <div style=" text-align: center; width: 100%; padding:25px;">
                <h2 class="title-compras">MIS COMPRAS</h2>
            </div>
            <button style="align-self: flex-start; " @click="closeCarrito()"><v-icon>mdi-close</v-icon></button>
        </v-container>
     <div v-for="(car, i) in carrito" :key="i" >
        <div class="grid-cont" v-if="car.category != 'combos' && car.category != 'pastas' ">
            <v-img class="imagen-plato" :src="car.src" style=" width: 100%; height: 100%">

            </v-img>
            <div class="columna2">
                <h3 class="h3-ensalada">
                    {{ car.nombre }}
                </h3>
                <p class="ml-1">
                    {{ car.descripcion }}
                </p>
            </div>
            <div class="columna2"  v-if="car.category != 'ensaladas'" >
                <h2  v-if="car.category != 'cafe'">{{car.nombre}}</h2>
                <div class="botonera" v-if="car.category != 'cafe'">
                    <div class="contador" >
                        <h3 v-if="car.cantidad >= 0">{{ car.cantidad }}</h3>
                    </div>
                    <div class="botones" >
                        <button  class="sumador" @click="car.cantidad++">+</button>
                        <button  :disabled="car.cantidad <= 0" class="restador" @click="car.cantidad--">-</button>
                    </div>
                </div>
            </div>
            <div style="width: 100%; margin-left: 75px" v-if="car.category == 'cafe'" class="tamaños">
                <h2 class="ñoquis-h2"  v-if="car.category == 'cafe'">{{ car.titulo }}</h2>
                <p class="ñoquis-p">{{ car.descripcion }}</p>

                    <div class="d-flex flex-row tamaños">
                        <div style="width: 100%;  " class="d-flex flex-row justify-start" v-for="tamaños in car.tamaños" :key="tamaños.tamaño">
                            <button class="button" >
                                <h3 class="h3-button">{{tamaños.tamaño}}</h3>
                            </button>

                        </div>

                    </div>
            </div>

                <div class="botonx" v-if="car.category != 'combos'">
                    <button @click="quitarArticulo(car)">
                        <v-icon>mdi-close</v-icon>
                    </button>
                </div>
                <div class="precio" v-if="car.category != 'combos'">
                    <h3>${{ car.precio }}</h3>
                </div>
            </div>
            <v-row style="width: 100%"  v-if="car.category == 'pastas'">
                <v-col cols="3" style=" margin-left: 50px;">
                    <v-img :src="car.src">
                        
                    </v-img>
                    <h2 class="ñoquis-h2" >{{ car.nombre }}</h2>
                <p class="ñoquis-p">Lorem</p>

            </v-col>
            <v-col cols="6"  style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; width: 150px; gap: 10px; padding: 0;" >
                <div style="width:100px; margin-left: 35px; " v-for="salsa in car.salsas" :key="salsa.nombre"  >
                                <button class="button"   v-if=" salsa.nombre == 'Fileto' || salsa.nombre == 'Bolognesa'" >
                                    <h3 class="h3-button">{{salsa.nombre}}</h3>
                                </button>
                                <v-menu offset-y left  v-if="salsa.nombre == 'Tuco' || salsa.nombre == 'Cremas'">
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1" dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >{{ salsa.nombre}}</h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <v-list style="backdrop-filter: blur(15px); background-color: transparent;">
                                        <v-list-item v-for="(item, index) in salsa.cremas" :key="index" class="itemSalsa">
                                            <v-list-item-title><p class="p-menu-tuco">{{ item.nombre }}</p></v-list-item-title>
                                        </v-list-item>
                                        <v-list-item v-for="(item, index) in salsa.tucos" :key="index">
                                            <v-list-item-title><p class="p-menu-tuco">{{ item.nombre }}</p></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>

                </v-col >
                <v-col cols="1" style="margin-left: 20px">
                    <div class="botonx">
                        <button @click="quitarArticulo(car)">
                            <v-icon>mdi-close</v-icon>
                        </button>
                    </div> 
                </v-col>
            </v-row>
            <div  class="d-flex flex-row mt-10 mb-10 ml-3 " v-if="car.category == 'combos'">
                <v-img :src="car.src" width="90%" >

                </v-img>

                <div class="botonx"><button @click="quitarArticulo(car)">
                    <v-icon>mdi-close</v-icon>
                </button>
                </div>

            </div>
        </div>

    <div class="subtotal" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;" v-if="cantidades >= 1">
            <h1 style="justify-content: flex-start; margin-left: 7%; font-size: 26px; font-weight:bolder;">SUBTOTAL</h1>
            <h1
                style="justify-content: flex-end; margin-right: 15%; font-style: italic; font-size: 36px; font-weight: 702 ;">
                $0.00 </h1>

        </div>

        <div class="iniciarCompra"
        v-if="cantidades >= 1"
            style="display: flex; flex-direction: row;justify-content: flex-end; margin-right: 3%;">
            <button style="" @click="iniciarCompra()">
                <p>INICIAR MI COMPRA</p>
            </button>
        </div>

        <div class="sin_compras" v-if="cantidades == 0">
            <h3>NO TIENES ARTICULOS</h3>
        </div>
     </div>

</template>


<script>
import { auth } from '@/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import store from '@/store';

//import { getFirestore, doc, onSnapshot } from "firebase/firestore";
//import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from '../firebase/index'

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
export default {
    name: 'CarritoVue',
    data: () => ({
        list: true,
        carrito: store.state.carritoCompras,
        cantidades : store.state.notif,

    }),
    methods: {
        closeCarrito() {
            store.commit("toggleCarrito", false)
        },
        iniciarCompra(){
            
           
        },
        quitarArticulo(car){
            console.log()
            const index = this.carrito.indexOf(car)
            this.carrito.splice(index ,1)
            store.commit('sendNotif', this.carrito.length)
            const cantidad = store.state.notif
            if( cantidad == 0){
                this.cantidades = 0
            }else if(cantidad > 0){
                this.cantidades = store.state.notif
            }
            localStorage.setItem(`cart/${auth.currentUser.uid}`, this.carrito)
            console.log(this.carrito)
        }
    },
    mounted(){

    },
    beforeMount(){

    },
    updated(){
        this.carrito = store.state.carritoCompras
    },
    watch: {
        cart(){
            store.commit('carritoCompras', this.carrito)
            console.log(store.state.carritoCompras)
            this.carrito = store.state.carritoCompras
            
        },
        cantidades(){
            this.cantidades = store.state.notif
        }
    },
    beforeCreate(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
                    let datosLocalStorage = JSON.parse(localStorage.getItem(`cart/${auth.currentUser.uid}`));
                    this.carrito = datosLocalStorage;
                    store.commit("sendNotif", this.carrito.length)
                        console.log(this.carrito)

                } else {
                    // User is signed out
                    // ...
                }
                });


    }
}

</script>


<style lang="scss" scoped>

.h3-ensalada{
    font-family: 'red-hat';
    font-size: 25px;
    font-weight: bolder;
}
.sin_compras{
    width: 100%;
    height: 500px;
    display: grid;
    place-items: center;
    h3{
        font-family: 'red-hat';
        font-size: 20px;
    }
}
.tamaños {
    width:100% ;
    grid-column: 2/3;
    grid-row: 1/2;
}
.p-menu-tuco{
    font-family: 'red-hat';
    font-weight: 500;

}
.title-compras {
    font-family: 'Quesha';
    font-size: 50px;
}

.grid-cont {
    padding: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 20% 5%;
    grid-template-rows: 150px;

}

.grid-cont .imagen-plato {
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;


}

.columna2 {
    margin-left: 70px;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;



}


.columna2 h2 {
    font-family: 'red-hat';
    font-size: 20px;
    font-weight: bolder;
    color: black;

}

.columna2 p {
    font-family: 'red-hat';
    color: grey;
    font-size: 15px;
    font-weight: lighter;

}

.ñoquis-p {
    font-family: 'red-hat';
    color: grey;
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 0;
}
.ñoquis-h2 {
    font-family: 'red-hat';
    font-size: 20px;
    font-weight: bolder;
    color: black;

}

.botonera {
    padding: 0;
    border: 1px solid black;
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: row;


}

.contador {
    width: 60%;
    height: 100%;
    display: grid;
    place-items: center;
}

.contador h3 {
    font-family: 'red-hat';
    font-weight: bolder;
    font-size: 20px;
    color: black;


}

.botones {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    border-left: 1px solid black;

    .sumador {
        text-align: center;
        height: 50%;
        border-bottom: 1px solid black;
    }

    .restador {
        text-align: center;
        height: 50%;
    }
}

.precio {
    grid-column: 3/4;
    grid-row: 1/2;


}

.precio h3 {
    font-family: 'red-hat';
    font-style: italic;
    font-weight: 400;
    margin-top: 25px;
}

.botonx {
    grid-column: 4/5;
    grid-row: 1/2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 80%;

    .botonx button {
        grid-row: 1/2;
        place-items: end end;
    }
}

.subtotal h1 {
    font-family: 'red-hat';
    letter-spacing: -0.015em2;
    width: 50%;
    display: flex;
    flex-direction: row;
    color: black;
    align-items: center;
}

.iniciarCompra {
    padding: 55px 0px 55px 0px;
}

.iniciarCompra button {
    background-color: black;
    justify-content: center;
    display: flex;
    color: white;
    align-items: center;
    padding: 14px 42px 14px 42px;

}

.iniciarCompra button p {
    font-size: 20px;
    font-weight: 500;
    font-family: 'red-hat';
    margin-bottom: 0;

}

.button {
    width: 100px;
    border: 1px solid black;
}

.h3-button {
    font-weight: 500;
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 3px;
}

.button:hover {
    background-color: black;
    color: white;
    transition: .5s;

}

.img-card-izquierda {
    background-image: url('../assets/ImagenesCards/caf{e.jpg');
    background-size: 100%;
    background-position: center;
    background-size: cover;
    grid-column: 1/2;
    grid-row: 1/2;

}

.imagen-plato1 {
    background-image: url("../assets/ImagenesCards/ñoquis.jpg");
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;
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
    justify-content: space-around;
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


@media screen and (min-width: 1500px) {
    .tamaños {
    width:60% ;

}
}
</style>