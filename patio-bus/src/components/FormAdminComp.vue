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
            
                <v-menu offset-y >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="categ-id-stock-precio"
                style="background-color: transparent"
                v-bind="attrs"
                v-on="on"
                >
                {{tamaño}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="tamaño in tamaños"
                :key="tamaño.nombre"
                @click="pushTamaño(tamaño)"
                >
                <v-list-item-title >{{ tamaño.nombre }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            <select class="categ-id-stock-precio">
              <option value="">Salsas</option>
              <option value="">Salsas</option>
              <option value="">Salsas</option>
            </select>
            <select class="categ-id-stock-precio">
              <option value="">Ingredientes</option>
              <option value="">Ingredientes</option>
              <option value="">Ingredientes</option>
            </select>
            <select class="categ-id-stock-precio">
              <option value="">Limite</option>
              <option value="">Limite</option>
              <option value="">Limite</option>
            </select>
          </div>
        </v-container>
      </v-col>
      <v-btn @click="agregar()">gandjmo</v-btn>
      <v-col cols="3"> </v-col>
    </v-row>
  </div>
</template>

<script>
import { doc, updateDoc, arrayUnion,  } from "firebase/firestore";
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
    seleccion: [],
    id: "",
    tamaño: 'Tamaños',

    tamaños: [
        {
            nombre: 'Todos'
        },
        {
            nombre: '45ml'
        },
        {
            nombre: '75ml'
        }
    ],
    salsas: [],
    cantidad: "",
    stock: "",
    precio: "",
    cardArmada : [],
    items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
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
    pushTamaño(tamaño){
        this.tamaño = tamaño.nombre

    },
    async agregar() {
      // const newObject = {
      //
      // }

      const cardRef = doc(db, "Productos", "ensalada1");
                //check Tamaños 
                let tamañoChecked = this.tamaño
        if(this.tamaño == 'Todos'){
            tamañoChecked = [
                {
                    nombre:'45ml'
                },
                {
                    nombre: '75ml'
                }
            ]
        }else {
            tamañoChecked = {
                nombre: this.tamaño
            }
        }


        const newCard = {
            nombre: this.nombre,
            category: this.categoria,
            descripcion: this.descripcion,
            id: this.id,
            tamaños: tamañoChecked ,
            seleccion: this.seleccion,
            salsas: this.salsas,
            stock: this.stock,
            precio: this.precio
        
        }
        console.log(newCard)
      // Atomically add a new region to the "regions" array field.
      await updateDoc(cardRef, {
        ensalada1: arrayUnion(newCard),
      });

      // Atomically remove a region from the "regions" array field.
    },
  },
};
</script>
<style lang="scss" scoped>
.v-btn{
    text-transform: none !important;
    font-family: 'red-hat';
    font-size: 15px;
    color: #b3b6bc;
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
