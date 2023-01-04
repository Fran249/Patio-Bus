<template>
  <div >
    <v-app-bar color="white" height="100" elevate-on-scroll fixed >
      <v-img src="../assets/PatioBusNav.png" contain width="75" height="75">

      </v-img>
    </v-app-bar>
    <v-carousel height="230" style="margin-top: 150px" hide-delimiters show-arrows-on-hover>
      <v-carousel-item
      v-for="item in items" :key="item.src">
      <div style="width: 100%; gap: 4px" class="d-flex flex-row " >
        <v-img :src="item.src1" contain width="45%" height="45%" @click="dialogCombo1(item)" style="cursor: pointer">

        </v-img>
        <v-img :src="item.src2"  contain width="45%" height="45%" @click="dialogCombo2(item)" style="cursor: pointer">

        </v-img>
        <v-dialog v-model="dialogComboModel" >
          <div style="background-color: white; padding: 10px">
            <v-img :src="datosDialog" >
            </v-img>
          </div>
        </v-dialog>
      </div>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-row>
      <v-col cols="12" style="padding: 0;">
      <v-img src="../assets/Cafet.Recuadro.png" >
        <div style="width: 100%; height: 100%;" class="d-flex flex-row">
          <v-img style="margin-top: 5%" width="50%" height="100%" contain src="../assets/Cafet.Recuadro1.png" @click="dialogCafeteria1 = true">

          </v-img>
          <v-img  style="margin-top: 5.05%" width="50%" height="100%" contain src="../assets/Cafet.Recuadro2.png"  @click="dialogCafeteria2 = true">

          </v-img>
          <v-dialog v-model="dialogCafeteria1" color="white" width="50vw" height="100vh">
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%; " >
              <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Cafet.Recuadro1.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogCafeteria2" color="white" width="50vw" height="100vh" >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Cafet.Recuadro2.png"></v-img>
          </div>
          </v-dialog>
        </div>
      </v-img>
      <v-img src="../assets/ParaLlevar.Recuadro.png" style="margin-top: 8px">
        <div style="width: 100%; height: 100%;" class="d-flex flex-row justify-space-between">
          <v-img style="margin-top: 20%" width="20%" height="50%" contain src="../assets/ParaLlevar.Recuadro1.png" @click="dialogParaLlevar1 = true">

          </v-img>
          <v-img  style="margin-top: 20%"  width="20%" height="50%" contain src="../assets/ParaLlevar.Recuadro2.png" @click="dialogParaLlevar2 = true">

          </v-img>
        </div>
        <v-dialog v-model="dialogParaLlevar1" color="white" width="50vw" height="100vh" >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
              <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/ParaLlevar.Recuadro1.png" ></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogParaLlevar2"  color="white" width="50vw" height="100vh" >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img  style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/ParaLlevar.Recuadro2.png"></v-img>
          </div>
          </v-dialog>
      </v-img>
      <v-img style="margin-top: 8px" src="../assets/Resto.Recuadro.png">

      </v-img>
      <div class="d-flex flex-row" style="gap: 20px; padding-left: 10px ; padding-top: 10px; padding-rigt: 10px; ">
        <v-img contain width="5%" height="50%" src="../assets/Entrada.png" @click="dialogResto1 = true">

        </v-img>
        <v-img contain width="10%" height="50%" src="../assets/Sandwiches.png" @click="dialogResto2 = true">

        </v-img>
        <v-dialog v-model="dialogResto1" color="white" width="50vw" height="100vh"  >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
              <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Entrada.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogResto2"  color="white" width="50vw" height="100vh" >
            <div  style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img  style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Sandwiches.png"></v-img>
          </div>
          </v-dialog>
      </div>
      <div class="d-flex flex-row justify-space-between " style="gap: 10px; padding-left: 10px; padding-right: 15px; ">
        <div class="d-flex flex-column" style="height: 100%" >
          <v-img  style="margin-top: 20px" contain width="80%" height="100%" src="../assets/Carnes.png"  @click="dialogResto3 = true">
          </v-img>
          <v-img style="margin-top: 20px" contain width="80%" height="100%" src="../assets/Guarniciones.png" @click="dialogResto4 = true" >
          </v-img>
          <v-img style="margin-top: 20px" contain width="80%" height="100%" src="../assets/Pastas.png" @click="dialogResto5 = true" >
          </v-img>
          <v-dialog v-model="dialogResto3" color="white" width="50vw" height="100vh"  >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Carnes.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto4" color="white" width="50vw" height="100vh"  >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Guarniciones.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto5" color="white" width="50vw" height="100vh"  >
            <div  style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%" src="../assets/Pastas.png"></v-img>
          </div>
          </v-dialog>
        </div>
        <div class="d-flex flex-column" style="height: 100%">
          <v-img contain width="80%"  style="margin-top: 20px" src="../assets/Empanadas.png"  @click="dialogResto6 = true">
          </v-img>

          <v-img contain width="80%" style="margin-top: 50px" height="100%" src="../assets/Tartas.png"  @click="dialogResto7 = true">
          </v-img>

          <v-img contain width="80%" style="margin-top: 150px" height="100%" src="../assets/Pizzas.png"  @click="dialogResto8 = true">
          </v-img>

          <v-img style="margin-top: 50px; margin-left: 15px;" contain width="80%" height="100%" src="../assets/Postres.png" @click="dialogResto9 = true" >
          </v-img>

          <v-dialog v-model="dialogResto6" color="white" width="50vw" height="100vh" >
            <div style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img src="../assets/Empanadas.png" style="margin-left: 15.5% ;" contain  width="70%" height="60%" ></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto7" color="white" width="50vw" height="100vh" >
            <div  style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img src="../assets/Tartas.png" style="margin-left: 15.5% ;" contain  width="70%" height="60%"  ></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto8" color="white" width="50vw" height="100vh" >
            <div  style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img src="../assets/Pizzas.png" style="margin-left: 15.5% ;" contain  width="70%" height="60%" ></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto9" color="white" width="50vw" height="100vh" >
            <div  style="background-color: white; padding: 20px; width: 100%; height: 100%;">
            <v-img style="margin-left: 15.5% ;" contain  width="70%" height="60%"  src="../assets/Postres.png"></v-img>
          </div>
          </v-dialog>
        </div>

      </div>

      </v-col>
    </v-row>
      <v-dialog v-model="popUp">
          <div style="width: 100%; height: 100%; padding: 10px; background: white;" class="d-flex flex-column align-center">
            <h3 class="mb-5" style="font-family: 'RedHatDisplay'"> NO MAS ZOOM!</h3>
            <p class="text-center" style="font-family: 'RedHatDisplay'"> 
              TE FACILITAMOS LA EXPERIENCIA
              TAN SOLO CLICKEA EN LA SECCIÓN Y LA CARTA LO HACE POR VOS!
            </p>
            <v-btn color="transparent" elevation="0" @click="popUp = false">
              <p class="mt-3" style="font-family: 'RedHatDisplay'">CONTINUAR</p>
            </v-btn>
          </div>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data: ()=>({
    items: [
      {src1: require('../assets/Combo1.png'),
      src2:require('../assets/Combo2.png') },
      {src1: require('../assets/Combo3.png'),
      src2: require('../assets/Combo4.png')}
    ],
    datosDialog: '',
    dialogComboModel : false,
    dialogCafeteria1: false,
    dialogCafeteria2: false,
    dialogParaLlevar1: false,
    dialogParaLlevar2: false,
    dialogResto1: false,
    dialogResto2: false,
    dialogResto3: false,
    dialogResto4: false,
    dialogResto5: false,
    dialogResto6: false,
    dialogResto7: false,
    dialogResto8: false,
    dialogResto9: false,
    popUp: false,

  }),
  methods: {
    dialogCombo1(item){
      this.datosDialog = item.src1
      this.dialogComboModel = true
      console.log(this.datosDialog)
    },
    dialogCombo2(item){
      this.datosDialog = item.src2
      this.dialogComboModel = true
      console.log(this.datosDialog)
    }
  },
  mounted(){
    if(window.innerWidth < 960){
      this.popUp = true
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

@font-face {
  font-family: 'RedHatDisplay';
  src: url('../assets/RedHatDisplay.TTF');
}
.v-btn{
  text-transform: none !important; 
}
.v-dialog{
  border-radius: 0px !important;
}
</style>
