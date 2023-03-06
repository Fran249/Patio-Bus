<template>
    <div >
    <v-container>
       
        <v-row>
            <LinksPerfilCompra/>
            <v-col cols="12" xl="12" lg="12" md="12">
                <div style="display: grid; place-items: center;">
                    <div class="d-flex flex-row align-center justify-center" style="width: 200px">
                        <h3 class="h3-saludo">¡HOLA </h3><v-img src="../assets/IconosNew/Iconos/164-waving-hand-emoji-coloring-page.png" contain width="200" height="100"></v-img> <h3 class="h3-saludo">{{  this.data.nombreCompleto.toUpperCase()}}!</h3>
                    </div>
                </div>
            </v-col>
            <v-col cols="6" xl="6" lg="6" md="6">
                <div style="width: 100%" class="d-flex justify-center ">
                    <div class="d-flex flex-row align-center mr-10" >
                    <div class="img-negra" >

                    </div>
                    <div class="img-avatar" v-bind:style="{'background-image': `url(${img})`}">
                        <div >
                            <input class="mt-5 input" type="file" @change="onFileSelected" />
                            <button class="btn-img"
                            @click="onUpload"
                            v-if="selectedFile != null"
                            :disabled="disabled"
                            >
                            <h3 class="title-img">SUBIR IMAGEN</h3>
                            <v-icon color="white">mdi-upload</v-icon>
                        </button>
                        </div>
                    </div>
                </div>
                </div>
            </v-col>
            <v-col cols="6" xl="6" lg="6" md="6">
                <div style="width: 100%" class="d-flex justify-center ml-10 ">
                <form action="
                " class="form-container" @submit.prevent>
                <h3 v-if="data== ''">¡COMPLETÁ TUS DATOS!</h3>
                <h3 v-if="data != ''" >¡EDITA TUS DATOS!</h3>
                <v-text-field type="text" label="Nombre y Apellido*" color="grey" v-model="nombreYapellido" class="labels" ></v-text-field>
                <v-text-field type="text" label="DNI*" color="grey" v-model="dni"  class="labels" ></v-text-field>
                <v-text-field type="text" label="Dirección*" color="grey" v-model="direccion" class="labels" ></v-text-field>
                <v-text-field type="text" label="Teléfono de contacto*" color="grey" v-model="telefonoContacto" class="labels" ></v-text-field>
                <h3 class="campo">*Campo obligatorio</h3>
                    <button class="btn" @click="guardarCambios()">
                        <h3>GUARDAR CAMBIOS</h3>
                    </button>
                </form>
            </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container style=" margin-top: 150px;">
        <p class="datos-solic">
            ¿Por qué solicitamos estos datos? 
        </p>
        <p class="datos-solic">
        Tus datos personales se toman sólo con los fines de cumplir con el giro comercial de la empresa y hacer un correcto seguimiento a tu pedido. Es importante que los datos que ingreses sean verdaderos por si necesitamos contactarte para validar datos de tu compra. Recordá que deberás ser mayor de edad.
        </p>
        <p class="datos-solic">
        Cada usuario dispondrá en todo momento de los derechos de acceso a la información, rectificación y supresión de sus datos personales conforme a la Ley Nº 25.326 sobre protección de datos de carácter personal.  El usuario tiene el derecho gratuito de ejercer el acceso, rectificar y suprimir sus datos. La Dirección Nacional de Protección de Datos Personales, órgano de control de la Ley Nro. 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan en relación con el incumplimiento de las normas sobre protección de datos personales.
        </p>
    </v-container>
    </div>
</template>

<script >
import { getAuth, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/index";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { updateDoc, doc, getFirestore, getDoc } from "@firebase/firestore";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();
export default{
    name:'MiPerfilComp',

    data: ()=>({
        nombreYapellido: '',
        dni: '',
        direccion: '',
        telefonoContacto: '',
        UploadValue: 0,
        picture: "",
        img: auth.currentUser.photoURL,
        selectedFile: null,
        data: '',
        completarDatos: true,
    }),
    methods:{
        onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
        onUpload() {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/${this.selectedFile.name}`
      );
      // eslint-disable-next-line no-unused-vars
      uploadBytesResumable(storageRef, this.selectedFile).then((snapshot) => {
        //////////////////////------Barra de progreso-----//////////////////////
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.UploadValue = progress;
        console.log(this.UploadValue);
      });
      setTimeout(this.cambiarFoto, 1200);
      this.loader = "loading3";
    },
    guardarCambios(){
        const docRef = doc(db, 'Usuarios', auth.currentUser.uid)
        const data= {
            correo: auth.currentUser.email,
            direccion: this.direccion,
            dni: this.dni,
            nombreCompleto: this.nombreYapellido,
            telefonoContacto: this.telefonoContacto
        }
        try {
            updateDoc(docRef, data).then(()=>{
            console.log('Se han cambiado los datos!')
            location.reload()
        })
        }
        catch(error){
            console.log(error)
        }
    },
    cambiarFoto() {
      getDownloadURL(
        ref(storage, `/users/${auth.currentUser.uid}/${this.selectedFile.name}`)
      )
        .then((url) => {
          this.picture = url;
          console.log(this.picture);
        })
        .catch((error) => {
          console.log(error);
        });

      //////////////////////------timeOut para Esperar la carga completa del archivo -----//////////////////////

      setTimeout(this.changePic, 2000);
    },
    changePic() {
      updateProfile(auth.currentUser, {
        photoURL: this.picture,
      }).then(() => {
        // Profile updated!

        // ...
        location.reload();
      });
    },
    },
    computed: {
        disabled: {
      get() {
        if (this.selectedFile != null) {
          return false;
        } else {
          return true;
        }
      },
    },
    },
    mounted(){
        console.log(this.img)
        const docRef = doc(db, 'Usuarios', auth.currentUser.uid)
        getDoc(docRef).then(doc=>{
            console.log(doc.data())
            this.telefonoContacto = doc.data().telefonoContacto
            this.dni = doc.data().dni
            this.direccion = doc.data().direccion
            this.nombreYapellido = doc.data().nombreCompleto
            this.data = doc.data()
        })
        
    } ,

}
</script>


<style lang="scss" scoped>





.h3-saludo{
  font-family: 'Quesha';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 96px;
color: #000000;
}
.campo{
    font-family: 'red-hat';
    font-size: 14px;
    color: #6F6F6F;

}
.btn-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 37px;
    width: 190px;
    opacity: 0;
    transition: 1s;
}
.btn {
    /* Rectangle 92 */
width: 303.18px;
height: 60.82px;
background: #000000;
border-radius: 0px;

}
button h3{
    font-family: 'red-hat';
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
}
.img-negra{
 /* Rectangle 95 */


width: 320px;
height: 500px;

z-index: 1;
background: #000000;

}
.img-avatar{
display: flex;
flex-direction: column;
width: 320px;
height: 250px;
z-index: 200;
position: absolute;
margin-left: 200px;
background: url(../assets/ImagenesCards/EnsaladaCesar.jpg);
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
}
.img-avatar:hover {
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%), url(../assets/ImagenesCards/EnsaladaCesar.jpg);
}
.img-avatar:hover  .btn-img{
    opacity: 1;
}
.input{
  opacity: 0;
  transition: 1s;
}
.img-avatar:hover .input{
  opacity: 1;
}
.v-text-field{
    padding-bottom: 50px;
    padding-right: 20px;
    padding-left: 20px;
}
.datos-solic{
    font-family: 'red-hat';
    font-size: 12px;
   
}
.form-container{
    height: 469px;
    width: 422.36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

}
.form-container h3{
 align-self: flex-start;
}
h3{
    font-family: 'Quesha';
    font-size: 30px;
    color: black;
}
.labels{
    height: 47.24px;
    width: 422.07px;
    border: 1px solid black;
    border-bottom: 3px solid black;
    font-family: 'red-hat';
    font-size: 18px;
    color: grey;
}

</style>