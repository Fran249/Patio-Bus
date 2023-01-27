<template>
<div class="form-container">
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

    }
}

</script>


<style lang="scss" scoped>

.form-container{
    padding: 25px;
}
</style>