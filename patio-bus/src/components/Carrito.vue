<template>
    <div class="dialog">
        <v-container style="display: flex; flex-direction: row; justify-content: space-between;">
            <div style=" text-align: center; width: 100%; padding:25px;">
                <h2 class="title-compras">MIS COMPRAS</h2>
            </div>
            <button style="align-self: flex-start; " @click="closeCarrito()"><v-icon>mdi-close</v-icon></button>
        </v-container>
     <div v-for="(card, i) in cards" :key="i" >
        <div class="grid-cont" v-if="card.titulo == 'sandwiche'">
            <div class="imagen-plato" style="background-color: black; width: 100%; height: 100%">

            </div>

            <div class="columna2">
                <h2>{{card.titulo}}</h2>
                <p>{{ card.descripcion }}</p>
                <div class="botonera">
                    <div class="contador">
                        <h3>2</h3>
                    </div>
                    <div class="botones">
                        <button class="sumador">+</button>
                        <button class="restador">-</button>
                    </div>
                </div>
            </div>
            <div class="precio">
                <h3>${{ card.precio }}</h3>
            </div>
            <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
        </div>
        <div class="grid-cont" v-if="card.titulo == 'cafe'">
            <div class="img-card-izquierda" style="background-color: black; width: 100%; height: 100%">

            </div>

            <div class="columna2">
                <h2>{{ card.titulo }}</h2>
                <p>{{ card.descripcion }}</p>
                <v-card-actions style="padding:2px">
                    <div class="d-flex flex-row" style="width:60%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start" v-for="tamaños in card.tamaños" :key="tamaños.tamaño">
                            <button class="button" >
                                <h3 class="h3-button">{{tamaños.tamaño}}</h3>
                            </button>

                        </div>

                    </div>
                </v-card-actions>
            </div>
            <div class="precio">
                <h3>${{ card.precio }}</h3>
            </div>
            <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
        </div>
        <div class="grid-cont" v-if="card.titulo == 'ñoquis'">
            <div class="imagen-plato1" style="background-color: black; width: 100%; height: 100%">

            </div>

            <div class="columna2">
                <h2>{{ card.titulo }}</h2>
                <p>{{ card.descripcion }}</p>
                <v-card-actions style="padding:2px">
                    <div class="d-flex flex-column" style="width:100%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start">
                            <button class="button">
                                <h3 class="h3-button">Fileto</h3>
                            </button>
                            <button class="button">
                                <h3 class="h3-button">Bolognesa</h3>
                            </button>

                            
                        </div>
                        <div class="mt-2 mb-2" >
                                <v-menu offset-y left >
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1" dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >Tuco </h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <v-list style="backdrop-filter: blur(15px); background-color: transparent;">
                                        <v-list-item v-for="(item, index) in items" :key="index">
                                            <v-list-item-title><p class="p-menu-tuco">{{ item.title }}</p></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                    </div>
                </v-card-actions>
            </div>
            <div class="precio">
                <h3>$0.00</h3>
            </div>
            <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
        </div>
        
     </div>
     <div class="subtotal" style="width: 100%; display: flex; flex-direction: row; justify-content: space-around;">
            <h1 style="justify-content: flex-start; margin-left: 7%; font-size: 26px; font-weight:bolder;">SUBTOTAL</h1>
            <h1
                style="justify-content: flex-end; margin-right: 15%; font-style: italic; font-size: 36px; font-weight: 702 ;">
                $0.00 </h1>

        </div>

        <div class="iniciarCompra"
            style="display: flex; flex-direction: row;justify-content: flex-end; margin-right: 3%;">
            <button style="">
                <p>INICIAR MI COMPRA</p>
            </button>
        </div>

    </div>
</template>


<script>
import store from '@/store';
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/index'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default {
    name: 'CarritoVue',
    data: () => ({
        items: [
            { title: 'Estofado de pollo' },
            { title: 'Estofado de ternera' },
            { title: 'Estofado de cordero' },
            { title: 'Crema' },
        ],
        list: true,
        cards: [],
    }),
    methods: {
        closeCarrito() {
            store.commit("toggleCarrito", false)
        }
    },
    mounted(){

    },
    beforeMount(){
        onSnapshot(doc(db, "Productos/cards"), (doc) => {

        this.cards = doc.data().cards
        console.log(this.cards)

        });
    }
}

</script>


<style lang="scss" scoped>

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
    background-image: url("../assets/ImagenesCards/SandwichJyQ.jpg");
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
</style>