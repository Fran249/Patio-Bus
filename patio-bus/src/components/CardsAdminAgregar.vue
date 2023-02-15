<template>
    <div>
        <v-container>
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
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header class="expansion-h3">
                        <h3>Guarniciones</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in imagenesPastas"
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
                <button class="boton-upload d-flex flex-row justify-center align-center" >
                    <h3 class="upload-text"> <strong> SUBIR IMAGEN </strong> </h3>
                    <v-icon color="black" size="30" > mdi-file-upload</v-icon>



                </button>
            </div>
            <div class="btn-save mt-10">
                <button class="boton-save d-flex flex-row justify-center align-center" >
                    <h3 class="save-text"> <strong> GUARDAR CAMBIOS</strong> </h3>
                   



                </button>
            </div>
        </v-container>

    </div>


</template>


<script>
import store from "@/store";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage();
export default {
    name: 'CardsAdminAgregar',
    data: () => ({
        selected:{},
        imagenesGuarniciones: [],
        imagenesInfusiones: [],
        imagenesSnacks: [],
        imagenesPastas: [],
    }),
    methods:{
       selectImg(item){
            console.log(item)
            this.selected = item
            store.commit('imagenSelected', item.src)
        }
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
}

</script>
<style lang="scss" scoped>

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
</style>