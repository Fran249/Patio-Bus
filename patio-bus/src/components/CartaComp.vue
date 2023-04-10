<template>
  <div >
    <v-app-bar color="transparent" height="100" elevation="0">
      <v-img src="../assets/IconosNew/Iconos/Marca.png" contain width="75" height="75">

      </v-img>
    </v-app-bar>

    <v-container fluid>
      <v-row>
      <v-col cols="12" class="cafet-recuadro">
      <v-img src="../assets/Cafet.Recuadro.png"  >
        <div style="width: 100%; height: 100%; ;" class="d-flex flex-row pa-2">
          <v-img style="margin-top: 15px" width="2%" height="100%" contain src="../assets/Cafet.Recuadro1.png" @click="dialogCafeteria1 = true">

          </v-img>
          <v-img  style="margin-top: 14px" width="2%" height="100%" contain src="../assets/Cafet.Recuadro2.png"  @click="dialogCafeteria2 = true">

          </v-img>
          <v-dialog v-model="dialogCafeteria1" color="white">
            <div style="background-color: white; padding: 20px;">
              <v-img width="500" src="../assets/dialogs/Cafet .Recuadro1.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogCafeteria2" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Cafet. Recuadro2.png"></v-img>
          </div>
          </v-dialog>
        </div>
      </v-img>
      <v-carousel height="85" style="margin-top: 5px;" hide-delimiters :show-arrows="arrows">
      <v-carousel-item
      v-for="item in items" :key="item.src">
      <div style="width: 100%; gap: 4px" class="d-flex flex-row " >
        <v-img :src="item.src1" contain width="45%" height="45%" @click="dialogCombo1(item)">

        </v-img>
        <v-img :src="item.src2"  contain width="45%" height="45%" @click="dialogCombo2(item)">

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
      <v-img contain width="100vw" height="225" src="../assets/ParaLlevar.Recuadro.png" style="margin-top: 8px">
        <div style="width: 100%; height: 100%;" class="d-flex flex-row justify-space-between">
          <v-img style="margin-top: 90px" width="40%" height="30%" contain src="../assets/ParaLlevar.Recuadro1.png" @click="dialogParaLlevar1 = true">

          </v-img>
          <v-img  style="margin-top: 76px" contain width="40%" height="50%" src="../assets/dialogs/ParaLlevar. Recuadro2.png" @click="dialogParaLlevar2 = true">

          </v-img>
        </div>
        <v-dialog v-model="dialogParaLlevar1" color="white">
            <div style="background-color: white; padding: 20px;">
              <v-img src="../assets/dialogs/ParaLlevar. Recuadro1.png" ></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogParaLlevar2" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/ParaLlevar.Recuadro2.png"></v-img>
          </div>
          </v-dialog>
      </v-img>
      <div>
        <v-img width="100%" style="margin-top: 8px; margin-bottom: 15px;" src="../assets/Resto.Recuadro.png">

</v-img>
<div class="d-flex flex-row"  style="gap: 10px; ">


  <v-dialog v-model="dialogResto1" color="white">
      <div style="background-color: white; padding: 20px">
        <v-img src="../assets/Entradad.png"></v-img>
      </div>
    </v-dialog>
    <v-dialog v-model="dialogResto2" >
      <div style="background-color: white; padding: 20px">
      <v-img src="../assets/dialogs/Carnes.png"></v-img>
    </div>
    </v-dialog>
</div>
</div>
      <div class="d-flex flex-row justify-center pa-2" >
        <div class="d-flex flex-column " style="height: 100% ; width: 50%" >
          <div style="width: 88%">
            <v-img contain width="80%" class="mb-3 ml-2" heigth="50%" src="../assets/Entrada.png" @click="dialogResto1 = true">

              </v-img>
              <v-img contain width="170" height="100%" src="../assets/Sandwiches.png"  @click="dialogResto3 = true">
              </v-img>
              <v-img style="margin-top: 10px" contain width="170" height="100%" src="../assets/Empanadas.png" @click="dialogResto4 = true" >
              </v-img>
              <v-img style="margin-top: 10px" contain width="170" height="100%" src="../assets/Tartas.png" @click="dialogResto5 = true" >
              </v-img>
              <v-img contain width="170" height="150" src="../assets/Pizzas.png"  @click="dialogResto8 = true">
              </v-img>
              <v-dialog v-model="dialogResto8" >
                <div style="background-color: white; padding: 20px">
                <v-img src="../assets/dialogs/Pizzas.png" ></v-img>
              </div>
              </v-dialog>
              <v-dialog v-model="dialogResto3" >
                <div style="background-color: white; padding: 20px">
                <v-img src="../assets/dialogs/Sandwiches.png"></v-img>
              </div>
              </v-dialog>
              <v-dialog v-model="dialogResto4" >
                <div style="background-color: white; padding: 20px">
                <v-img src="../assets/dialogs/Empanadas.png"></v-img>
              </div>
              </v-dialog>
              <v-dialog v-model="dialogResto5" >
                <div style="background-color: white; padding: 20px">
                <v-img src="../assets/dialogs/Tartas.png"></v-img>
              </div>
              </v-dialog>
          </div>
        </div>
        <div class="d-flex flex-column align-end" style="height: 100%; width: 50%;">
          <div style="width: 88%">
            <v-img contain  class="mr-4" width="80%" heigth="50%" src="../assets/Carnes.png" @click="dialogResto2 = true">

          </v-img>
          <v-img contain width="180"  height="105" src="../assets/Guarniciones.png"  @click="dialogResto6 = true">
          </v-img>

          <v-img contain width="170"   src="../assets/Pastas.png"  @click="dialogResto7 = true">
          </v-img>



          <v-img style="margin-top: 10px;" contain width="170" height="108"  src="../assets/Postres.png" @click="dialogResto9 = true" >
          </v-img>

          <v-dialog v-model="dialogResto6" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Guarniciones.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogResto7" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Pastas.png" ></v-img>
          </div>
          </v-dialog>

          <v-dialog v-model="dialogResto9" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Postres.png"></v-img>
          </div>
          </v-dialog>
          </div>

        </div>
<!------------------------------------------------------------------------Bebidas------------------------------------------------------------------------------------------>
      </div>
        <div style="width: 100%; height: 50px; padding: 10px;" class="d-flex flex-column align-start">
          <v-img contain width="100%" src="../assets/BebidasMiscela.png" @click="dialogBebidas= true">

        </v-img>
      </div>
      <div class="d-flex flex-row bebidas " style="gap: 20px">
              <v-img contain width="150" class="mb-5 ml-2" src="../assets/dialogs/Bebidas 1.png" @click="dialogBebidas1 = true">

              </v-img>
              <v-img contain width="150" class="mb-15" src="../assets/dialogs/Bebidas 2.png" @click="dialogBebidas2 = true">

              </v-img>
      </div>
      <v-dialog v-model="dialogBebidas1" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Bebidas1d.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogBebidas2" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Bebidas2d.png"></v-img>
          </div>
          </v-dialog>
      <!-----------------------------------------Vinos----------------------------------------------------->
        <div class="pa-2">
          <v-img src="../assets/VinosMiscela.png" contain width="100%">
            <div style="width:90%; gap: 15px;" class="d-flex flex-row pa-2">
              <v-img src="../assets/VinosBlancos.png" width="50%" contain class="mt-9 ml-4" @click="dialogVinos1 = true">

              </v-img>
              <v-img src="../assets/VinosTintos.png" width="50%" contain class="mt-10" @click="dialogVinos2 = true">

              </v-img>
            </div>
          </v-img>
        </div>
        <v-dialog v-model="dialogVinos1" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Vinoblancod.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogVinos2" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Vinotintod.png"></v-img>
          </div>
          </v-dialog>
        <!-------------------------------Aperitivos y tragos------------------------------------->
          <div class="container">
            <v-img  src="../assets/dialogs/Miscela..png">

            </v-img>
            <v-container class="d-flex flex-row" style="gap: 15px;">
              <v-img width="25%" class="mb-10" contain src="../assets/Aperitivos1.png" @click="dialogAperitivos1 = true">

              </v-img>
              <v-img contain width="25%" class="mb-5" src="../assets/Aperitivos2.png" @click="dialogAperitivos2 = true">

              </v-img>
            </v-container>
          </div>
          <v-dialog v-model="dialogAperitivos1" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Aperitivos1d.png"></v-img>
          </div>
          </v-dialog>
          <v-dialog v-model="dialogAperitivos2" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/dialogs/Aperitivos2d.png"></v-img>
          </div>
          </v-dialog>



      </v-col>
    </v-row>
      <v-dialog v-model="popUp">
          <div style="width: 100%; height: 250px; padding: 10px; background: white; place-items: center; display: grid;" >
            <h3 class="mb-5" style="font-family: 'RedHatDisplay' ; font-size: 20px"> ! NO MÁS ZOOM !</h3>
            <p class="text-center" style="font-family: 'RedHatDisplay'; font-size: 12px; height: 20px;"> 
              TE FACILITAMOS LA EXPERIENCIA
              TAN SOLO CLICKEA EN LA SECCIÓN Y LA CARTA LO HACE POR VOS
            </p>
            <v-btn color="transparent" elevation="1" tile @click="popUp = false">
              <p class="mt-3" style="font-family: 'RedHatDisplay'">CONTINUAR</p>
            </v-btn>
          </div>
      </v-dialog>
      <v-img contain src="../assets/Footer.png" @click="dialogFooter = true">

      </v-img>
      <v-dialog v-model="dialogFooter" >
            <div style="background-color: white; padding: 20px">
            <v-img src="../assets/Footer.png"></v-img>
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
      {src1: require('../assets/Combo3.png')}
    ],
    arrows: false,
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
    dialogBebidas1: false,
    dialogBebidas2: false,
    dialogVinos1: false,
    dialogVinos2: false,
    dialogAperitivos1:false,
    dialogAperitivos2:false,
    dialogFooter: false,
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
    setTimeout(()=>{
      this.arrows = true
    }, 1500)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.v-dialog{
  width: 100%;
}
.cafet-recuadro{
  padding: 0;
  margin-top: 10px;
}
.entrada-sandwiches{
  gap: 10px;
  padding-left: 10px ;
   padding-top: 10px; 
   padding-right: 10px;
   width: 90%;
  margin-left: 5%;
}
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

.bebidas{
  width: 100%; 

  padding-bottom: 10px; 
  padding-left: 10px;
  padding-right: 40px;

}
@media screen and (max-width: 375px){
  .entrada-sandwiches{
    width: 100%;
  margin-left: 0%;
  }
  .cafet-recuadro{
  margin-top: 5px;
}
}
</style>
