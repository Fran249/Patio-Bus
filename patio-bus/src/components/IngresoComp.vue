<template>
<div class="form-container">
    <div style="width: 100%" class="d-flex flex-row justify-space-between h3-icon-cont">
        <h3>¡BIENVENIDO!</h3>
        <v-btn elevation="0" color="#000" icon @click="closeIngreso()">
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
     
            <v-btn width="70%" type="submit" class="ml-15" color="#febf2c">
                <p class="mt-4 p-v-btn" >
                    ACCEDER
                </p>
            </v-btn>
      </form>
      <p>{{error}}</p>
</div>
</template>


<script>
import store from '@/store';


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
        }
    },

}

</script>


<style lang="scss" scoped>
.h3-icon-cont h3{
    font-family: 'Quesha';
    font-size: 40px;
    color: #000;
}
.form-container{
    padding: 25px;
}
</style>