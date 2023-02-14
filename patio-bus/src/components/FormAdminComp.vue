<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-container>
          <input
            type="text"
            placeholder="Nombre"
            v-model="nombre"
            class="nombre-descripcion"
          />
          <input
            type="text"
            placeholder="Descripcion"
            v-model="descripcion"
            class="nombre-descripcion"
          />
          <div class="d-flex flex-row justify-space-between">
            <v-menu offset-y >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="categ-id-stock-precio"
                style="background-color: transparent"
                v-bind="attrs"
                v-on="on"
                >
                {{categoria}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="categ in categorias"
                :key="categ.nombre"
                @click="pushCard(categ)"
                >
                <v-list-item-title>{{ categ.nombre }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            <input
              v-model="id"
              type="number"
              placeholder="ID"
              class="categ-id-stock-precio uno"
            />
            <input
              v-model="stock"
              type="number"
              placeholder="Stock"
              class="categ-id-stock-precio uno"
            />
            <input
              v-model="precio"
              type="number"
              placeholder="Precio"
              class="categ-id-stock-precio uno"
            />
          </div>
          <div class="d-flex flex-row justify-space-between">
              <v-menu offset-y  v-if="categoria === 'Guarniciones'">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="categ-id-stock-precio limite"
                style="background-color: transparent"
                v-bind="attrs"
                v-on="on"
                >
                {{limite}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="limite in limites"
                :key="limite.desc"
                @click="pushLimite(limite)"
                >
                <v-list-item-title >{{ limite.desc}}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
          </div>
        </v-container>
        <v-container>
          <v-col v-if="categoria != 'Categoria'" class="descripcion">
            <h1>Su producto tendrá:</h1>
            <p>ID: {{id }}</p>
            <p>Stock: {{ stock }}</p>
            <p>Precio: {{ precio }}</p>
            <p v-if="categoria == 'Guarniciones'">Limite de ingredientes: </p>
                <h3 v-if="limite != 'Ensalada Cesar'">{{ limite }}</h3>
            <p v-if="categoria == 'Infusiones'">Tamaños</p>
            <p v-if="categoria == 'Pastas'">Salsas, Tucos y Cremas</p>
            <div v-if="categoria === 'Guarniciones'" class="mt-15">
              <h3>-Ingredientes</h3>
              <ul>
                <li>Lechuga</li>
                <li>Tomate</li>
                <li>Cebolla</li>
                <li>Zanahoria</li>
                <li>Remolacha</li>
              </ul>
            </div>
            <div v-if="categoria === 'Infusiones'">
              <h3>Tamaños</h3>
              <ul>
                <li>45ml</li>
                <li>75ml</li>
              </ul>
            </div>
            <div v-if="categoria === 'Pastas'">
              <h3>Salsas</h3>
              <ul>
                <li>Filetto</li>
                <li>Bolognesa</li>
              </ul>
              <h3>Tucos</h3>
              <ul>
                <li>Pollo</li>
                <li>Carne</li>
              </ul>
              <h3>Cremas</h3>
              <ul>
                <li>Verdeo</li>
                <li>Cuatro Quesos</li>
              </ul>
            </div>
            
          </v-col>
        </v-container>
      </v-col>

      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/index";
import {getFirestore} from "firebase/firestore"
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  name: "FormAdminComp",
  data: () => ({
    nombre: "",
    descripcion: "",
    categoria: "Categoria",
    limite: 'Ensalada Cesar',
    limites: [
      {
        desc: 'Ensalada cesar',
      },
      {
        desc: 'Ensalada (Dos ingredientes)'
      },
      {
        desc: 'Ensalada (Tres ingredientes)'
      },
      {
        desc: 'Ensalada (Cuatro ingredientes)'
      }
    ],
    tamaños : [
      {
        nombre: '45ml',
      },
      {
        nombre: '75ml'
      }
    ],
    id: "",
    salsas: [],
    stock: "",
    precio: "",
    cardArmada : [],
    categorias: [
        {
            nombre: 'Infusiones'
        },
        {
            nombre: 'Snacks Dulces'
        },
        {
            nombre: 'Entradas'
        },
        {
            nombre: 'Carnes'
        },
        {
            nombre: 'Guarniciones'
        },
        {
            nombre: 'Pastas'
        },
        {
            nombre: 'Sandwiches'
        },
        {
            nombre: 'Empanadas'
        },
        {
            nombre: 'Tartas'
        },
        {
            nombre: 'Pizzas'
        },
        {
            nombre: 'Postres'
        },
        {
            nombre: 'Bebidas'
        }
    ]
  }),
  methods: {
    pushCard(categ){
        this.categoria = categ.nombre

    },
    pushLimite(limite){
      this.limite = limite.desc
    },
    async agregar() {
      // const newObject = {
      //
      // }

      try { 
        const cardRef = doc(db, "Productos", this.categoria.toLowerCase());
                //check Tamaños 
      


        const newCard = {
            nombre: this.nombre,
            category: this.categoria,
            descripcion: this.descripcion,
            id: this.id,
            tamaños: this.tamaños ,
            limites: this.limites,
            salsas: this.salsas,
            stock: this.stock,
            precio: this.precio
        
        }
        console.log(newCard)
      // Atomically add a new region to the "regions" array field.
      await updateDoc(cardRef, {
        card: arrayUnion(newCard),
      });

      // Atomically remove a region from the "regions" array field.
    }
    catch(error){

       if(error.code === 'not-found' ){
              


        const newCard = {
            nombre: this.nombre,
            category: this.categoria,
            descripcion: this.descripcion,
            id: this.id,
            tamaños: this.tamaños ,
            limites: this.limites,
            salsas: this.salsas,
            stock: this.stock,
            precio: this.precio
        
        }
        let cardNueva = {card: [newCard]}
        await setDoc(doc(db, "Productos", this.categoria.toLowerCase()),cardNueva );
        console.log('agregado con exito')
       }
    }
    }, 
  },
};
</script>
<style lang="scss" scoped>

.descripcion :is( p, h3,h1, li){
  font-family: 'red-hat';
  font-size: 20px;
  color: #555;

}

.v-btn{
    text-transform: none !important;
    font-family: 'red-hat';
    font-size: 15px;
    color: #b3b6bc;
    font-weight: lighter;
}
.uno{
    text-align: center;
    font-size: 15px;
}
.nombre-descripcion {
  width: 100%;
  border: 1px solid black;
  border-bottom: 3px solid black;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.categ-id-stock-precio {
  width: 24%;
  border: 1px solid black;
  border-bottom: 3px solid black;
  border-radius: 0px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.limite{
  width: 27rem;
}
option,
select,
input {
  font-family: "red-hat";
  color: #b3b6bc;
  
}
select {
  font-family: "red-hat";
  color: #b3b6bc;
  text-align: center;
}
</style>
