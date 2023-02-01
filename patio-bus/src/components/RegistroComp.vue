<template>
<div style="padding: 100px">
    <div style="width: 100%" class="d-flex flex-row mb-10">
        <div style="width: 100%" class="d-flex justify-space-between">
        <h3>¡CREÁ TU CUENTA!</h3>
        
    </div>
    <v-btn icon style="background-color: transparent" @click="closeRegistro()"> <v-icon color="black">mdi-close</v-icon></v-btn>
    </div>
        <form @submit.prevent="crearUsuario({email:email, password:pass1})" class="v-form">
                <v-text-field
                    class="text-field"
                    type="email" 
                    v-model="email"
                    filled
                    full-width
                    append-icon="mdi-email"
                    placeholder="E-mail"
                ></v-text-field>
                <v-text-field
                    class="text-field"
                    v-model="pass1"
                    filled
                    full-width
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    placeholder="Contraseña"
                ></v-text-field>
                <v-text-field
                    class="text-field"
                    v-model="pass2"
                    filled
                    full-width
                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="value ? 'password' : 'text'"
                    placeholder="Confirmar contraseña"
                ></v-text-field>


                <button 
                 
                 class=" mt-10 btn-reg" 
                 color="#000"
                 type="submit"
                 >
                 <p class="mt-4 finalizar-registro"  >
                     FINALIZAR REGISTRO
                 </p>
             </button>

            </form>
   </div>
</template>


<script>
import store from '@/store';
import {mapActions, mapState} from 'vuex'
export default {
    name: 'RegistroComp',
    data: ()=>({

    }),
    methods:{
        closeRegistro(){
            store.commit('toggleRegistro', false)
        },
        ...mapActions(['crearUsuario'])
    },
    computed:{
          ...mapState(['error']),
          desactivar(){
            return this.pass1 === this.pass2 && this.pass1.trim() !== ''
        }
      }
}
</script>

<style lang="scss" scoped>
.v-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    .text-field{
        width: 100%
    }
}
h3{
    font-family: 'Quesha';
    font-size: 40px;
}
.finalizar-registro{
    font-family: 'red-hat';
    font-size: 20px;
    font-weight: 650;
    color: #fff;

}
.btn-reg{
    background-color: black;
    padding: 10px;
    width: 385px;
    height: 45.52px;
    display:flex;
    justify-content: center;
    align-items: center;

}

</style>