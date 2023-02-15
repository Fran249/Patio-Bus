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
      <div>
        <v-container>
            <div class="d-flex flex-row justify-start mb-5">
              <h3 class="seleccione-imagenh3">Seleccione su imagen:</h3>
            </div>
            <v-expansion-panels >
                <v-expansion-panel>
                    <v-expansion-panel-header class="expansion-h3">
                        <h3>Guarniciones</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in imagenesGuarniciones"
                                :key="i">
                                <v-img :src="item.src" contain width="250" height="250">
                                    <div v-bind:style="{ 'background-image': `url(${item.src})`, 'background-size': 'cover' }"
                                        class="img">
                                        <div class="checked d-flex flex-row justify-end" v-if= "selected.src == item.src">
                                            <v-icon class="mt-5 mr-5" style="background-color: #2B9C2F; border-radius: 50%; padding: 5px; " color= "white" >
                                                mdi-check-bold
                                            </v-icon>
                                        </div>
                                        <div class="btn">
                                            <button>
                                                <v-icon style="color: white">
                                                    mdi-delete
                                                </v-icon>
                                            </button>
                                            <button @click="selectImg(item)">
                                                <v-icon style="color:white">
                                                    mdi-check-bold
                                                </v-icon>
                                            </button>
                                        </div>

                                    </div>
                                </v-img>

                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header class="expansion-h3">
                        <h3>Infusiones</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in imagenesInfusiones"
                                :key="i">
                                <v-img :src="item.src" contain width="250" height="250">
                                    <div v-bind:style="{ 'background-image': `url(${item.src})`, 'background-size': 'cover' }"
                                        class="img">
                                        <div class="checked d-flex flex-row justify-end" v-if= "selected.src == item.src">
                                            <v-icon class="mt-5 mr-5" style="background-color: #2B9C2F; border-radius: 50%; padding: 5px; " color= "white" >
                                                mdi-check-bold
                                            </v-icon>
                                        </div>
                                        <div class="btn">
                                            <button>
                                                <v-icon style="color: white">
                                                    mdi-delete
                                                </v-icon>
                                            </button>
                                            <button @click="selectImg(item)">
                                                <v-icon style="color:white">
                                                    mdi-check-bold
                                                </v-icon>
                                            </button>
                                        </div>

                                    </div>
                                </v-img>

                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header class="expansion-h3">
                        <h3>Snacks</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in imagenesSnacks"
                                :key="i">
                                <v-img :src="item.src" contain width="250" height="250">
                                    <div v-bind:style="{ 'background-image': `url(${item.src})`, 'background-size': 'cover' }"
                                        class="img">
                                        <div class="checked d-flex flex-row justify-end" v-if= "selected.src == item.src">
                                            <v-icon class="mt-5 mr-5" style="background-color: #2B9C2F; border-radius: 50%; padding: 5px; " color= "white" >
                                                mdi-check-bold
                                            </v-icon>
                                        </div>
                                        <div class="btn">
                                            <button>
                                                <v-icon style="color: white">
                                                    mdi-delete
                                                </v-icon>
                                            </button>
                                            <button @click="selectImg(item)">
                                                <v-icon style="color:white">
                                                    mdi-check-bold
                                                </v-icon>
                                            </button>
                                        </div>

                                    </div>
                                </v-img>

                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <div class="btn-upload mt-15">
                <button class="boton-upload d-flex flex-row justify-center align-center" @click="dialogSubirImagen = true" >
                    <h3 class="upload-text"> <strong> SUBIR IMAGEN </strong> </h3>
                    <v-icon color="black" size="30" > mdi-file-upload</v-icon>



                </button>
            </div>
            <div class="btn-save mt-10">
                <button class="boton-save d-flex flex-row justify-center align-center" @click="agregar()" >
                    <h3 class="save-text"> <strong> GUARDAR CAMBIOS</strong> </h3>
                   



                </button>
            </div>
        </v-container>
        <v-dialog v-model="dialogSubirImagen">
        <div class="pa-10">
          <v-select
              v-model="selectedCategoryImg"
              :items="categorias"
              item-text="nombre"
              return-object
              label="Categoria"
            ></v-select>
            <div class="div-files-selection">
              <input
                v-if="UploadValue == 0"
                type="file"
                @change="onFileSelected"
                class="input-file"
              />
            </div>
              <v-hover v-slot="{ hover }">
                <v-btn @click="onUpload"
                  class="mt-10"
                  color="#b3b6bc"
                  width="200" 
                  height="40"
                  :style="{ 'background-color': hover ? '#fff' : '#b3b6bc'}"
                >
                  <p class="mt-4 p-subir">
                    Subir imagen
                  </p>
                  <v-icon color="white">
                    mdi-upload
                  </v-icon>
                </v-btn>
              </v-hover>
        </div>
                           
        </v-dialog>
    </div>

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
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage();

export default {
  name: "FormAdminComp",
  data: () => ({
    UploadValue: 0,
    selectedCategoryImg: null,
    nombre: "",
    descripcion: "",
    categoria: "Categoria",
    limite: 'Ensalada Cesar',
    dialogSubirImagen: false,
    itemsImg: [ 'Infusiones', 
                'Snacks Dulces',
                'Entradas',
                'Carnes',
                'Guarniciones',
                'Pastas',
                'Sandwiches',
                'Empanadas',
                'Tartas',
                'Pizzas',
                'Postres',
                'Bebidas'],
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
    ],
    selected:{},
        imagenesGuarniciones: [],
        imagenesInfusiones: [],
        imagenesSnacks: [],
        imagenesPastas: [],
        selectSrc: '',
  }),
  watch:{
    selectedCategoryImg() {
      this.selectedCategoryNameImg = this.selectedCategoryImg.nombre.toLowerCase();
      console.log("Label: ", this.selectedCategoryNameImg);
    }
  },
  methods: {
    selectImg(item){
            console.log(item)
            this.selected = item
            this.selectSrc = item.src
            
        },
    pushCard(categ){
        this.categoria = categ.nombre

    },
    pushLimite(limite){
      this.limite = limite.desc
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const storageRef = ref(storage, `/Productos/${this.selectedCategoryNameImg}/${this.selectedFile.name}`);
      // eslint-disable-next-line no-unused-vars
      uploadBytesResumable(storageRef, this.selectedFile).then((snapshot) => {
        //////////////////////------Barra de progreso-----//////////////////////
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.UploadValue = progress;

        setTimeout(this.actualizarPagina, 1500);
      });
    },
    actualizarPagina() {
      location.reload();
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

            stock: this.stock,
            src: this.selectSrc,
            precio: this.precio
        
        }
        if(this.categoria == 'Infusiones'){
          Object.assign(newCard, {tamaños: this.tamaños})
          console.log(newCard)
        }else if (this.categoria == 'Guarniciones'){
          Object.assign(newCard, {limites: this.limites})
          console.log(newCard)
        }else if (this.categoria == 'Pastas'){
          Object.assign(newCard , {salsas: this.salsas})
          console.log(newCard)
        }
      // Atomically add a new region to the "regions" array field.
      await updateDoc(cardRef, {
        card: arrayUnion(newCard),
      })

      // Atomically remove a region from the "regions" array field.
    }
    catch(error){

       if(error.code === 'not-found' ){
            
        const newCard = {
            nombre: this.nombre,
            category: this.categoria,
            descripcion: this.descripcion,
            id: this.id,

            stock: this.stock,
            src: this.selectSrc,
            precio: this.precio
        
        }
        if(this.categoria == 'Infusiones'){
          Object.assign(newCard, {tamaños: this.tamaños})
          console.log(newCard)
        }else if (this.categoria == 'Guarniciones'){
          Object.assign(newCard, {limites: this.limites})
          console.log(newCard)
        }else if (this.categoria == 'Pastas'){
          Object.assign(newCard , {salsas: this.salsas})
          console.log(newCard)
        }
        let cardNueva = {card: [newCard]}
        await setDoc(doc(db, "Productos", this.categoria.toLowerCase()),cardNueva )
        console.log('agregado con exito')
       }
    }
    }, 
  },
  async beforeMount(){
    const listRef1 = ref(storage, "Productos/ensaladas");
    const listRef2 = ref(storage, "Productos/pastas");
    const listRef3 = ref(storage, "Productos/snacks");
    const listRef4 = ref(storage, "Productos/infusiones");

   await listAll(listRef1).then((res) => {
      // eslint-disable-next-line no-unused-vars
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        let downloadUrl = getDownloadURL(ref(storage, itemRef));
        downloadUrl.then((url) => {
          const imgUrls = {
            src: url,
            xs: "12",
            sm: "6",
            md: "3",
            xl: "3",
          };
          this.imagenesGuarniciones.push(imgUrls);
        });
      });
    });
  await listAll(listRef2).then((res) => {
      // eslint-disable-next-line no-unused-vars
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        let downloadUrl = getDownloadURL(ref(storage, itemRef));
        downloadUrl.then((url) => {
            const imgUrls = {
            src: url,
            xs: "12",
            sm: "6",
            md: "3",
            xl: "3",
          };
          this.imagenesPastas.push(imgUrls);
        });
      });
    });
   await listAll(listRef3).then((res) => {
      // eslint-disable-next-line no-unused-vars
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        let downloadUrl = getDownloadURL(ref(storage, itemRef));
        downloadUrl.then((url) => {
            const imgUrls = {
            src: url,
            xs: "12",
            sm: "6",
            md: "3",
            xl: "3",
          };
          this.imagenesSnacks.push(imgUrls);
        });
      });
    });
   await listAll(listRef4).then((res) => {
      // eslint-disable-next-line no-unused-vars
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        let downloadUrl = getDownloadURL(ref(storage, itemRef));
        downloadUrl.then((url) => {
            const imgUrls = {
            src: url,
            xs: "12",
            sm: "6",
            md: "3",
            xl: "3",
          };
          this.imagenesInfusiones.push(imgUrls);
        });
      });
    });
    }
};
</script>
<style lang="scss" scoped>

.p-subir{
  color: black;
  font-weight: 500;
}
.seleccione-imagenh3{
  font-family: 'red-hat';
  color: #555;
  font-size: 25px;
}
.expansion-h3 h3{
    font-family: 'red-hat';
    font-size: 30px;
    text-align: start;
    font-weight: lighter;
    color: #555;
}
.img {
    width: 100%;
    height: 100%;
}
.img:hover .btn{
    transition: 0.5s;
    opacity: 1;
}

.btn {opacity: 0;
    background-color: rgba(29, 26, 26, 0.5);
    display: flex;
    justify-content: flex-end;
    height: 20%;
    width: 100%;
    position: absolute;
    gap: 15px;
    bottom: 0px;
    right: 0px;
    border-radius: 0;

}

.btn-upload {
    width: 250px;
    height: 50px;

}

.upload-text {
    color: black;
    margin-bottom: 0%;
    font-family: 'red-hat';
    font-size: 16px;
    font-weight: bolder;
    

}

.boton-upload {
    border: 1px solid black;
    border-bottom: 3px solid black;
    width: 100%;
    height: 100%;
}
.checked{
    height: 80%;
    width: 100%;
    align-items: flex-start;
}
.btn-save { 
    position: absolute;
    right: 20%;
    background-color: black;
    width: 250px;
    height: 50px;

}
.boton-save{   
    width: 100%;
    height: 100%;
}
.save-text {
    color: white;
    margin-bottom: 0%;
    font-family: 'red-hat';
    font-size: 16px;
    font-weight: bolder;
    

}
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
