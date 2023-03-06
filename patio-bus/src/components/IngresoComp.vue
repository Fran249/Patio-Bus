<template>
<div class="form-container" style="padding-top: 150px; padding-bottom: 150px;">
    <div style="width: 100%" class="grid-cont h3-icon-cont">
        <h3 class="h3-welcome">¡BIENVENIDO!</h3>

        <v-btn elevation="0" color="#000" icon class="btn-close" @click="closeIngreso()" >
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
    <form @submit.prevent="ingresoUsuario({email:email, password:pass})" class="form">
          <v-text-field
              type="email"
              placeholder="E-mail"
              v-model="email"
              filled
              full-width
              append-icon="mdi-email"
              class="email"
              color="grey"
          ></v-text-field>
          <v-text-field
              placeholder="Contraseña"
              v-model="pass"
              filled
              color="grey"
              class="password"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
          ></v-text-field>
            <a @click="ingreso = false" class="d-flex justify-end a-withP"><p>¿Olvidaste tu contraseña?</p></a>
            <div style="width: 100%" class="d-flex flex-column justify-center align-center">
                <p v-if="error == 'FirebaseError: Firebase: Error (auth/user-not-found).'">Usuario no encontrado</p>
                <p v-if="error == 'FirebaseError: Firebase: Error (auth/wrong-password).'">Contraseña Incorrecta</p>  
            <button class="button" type="submit">
                <h3 class="button-h3">ACCEDER</h3>
            </button>
            </div>
      </form>
      
</div>
</template>


<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth()
export default {
    name: 'IngresoComp',
    data: ()=>({
        ingreso: true,
            sendEmail: false,
            email: '',
            pass: '',
            value: String,
            width : window.innerWidth
    }),
    methods:{
        closeIngreso(){
            store.commit('toggleIngreso', false)
        },
        ...mapActions(['ingresoUsuario']),

reEstablecerContraseña(){
  sendPasswordResetEmail(auth, this.email)
  .then(() => {
    // Password reset email sent!
    // ..
    this.email= ''
    setTimeout(this.sendEmail = true, 1300)


  })
  .catch((error) => {
    console.log(error)
    // ..
  });
},
    },
    computed:{
      ...mapState(['error'])
  },
  watch: {
      
    },

}

</script>


<style lang="scss" scoped>
a, a:hover , a:visited, a:focus{
    text-decoration: none;
   

}
a p{
    color:#9D9C9C;
    font-family: 'red-hat';
}
.grid-cont{
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(2, 50%);
    margin-bottom: 25px;
    .h3-welcome{
        place-self: center;
        grid-column: 1/3;
        grid-row: 1/3;
 
    }
    .btn-close{
        place-self: center;
     
        grid-column: 4/5;
        grid-row: 1/2;
    }
}

.button{
    background-color: #000;
    width: 385.23px;
    height: 45.52px;
    .button-h3{
        color: #fff;
    font-family: 'red-hat';
    font-size: 20px;
    margin: 0;
    padding: 0;
    }
 
}

.h3-icon-cont h3{
    font-family: 'Quesha';
    font-size: 40px;
    color: #000;
}
.form-container{

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.email{
 width: 510px;
}

</style>