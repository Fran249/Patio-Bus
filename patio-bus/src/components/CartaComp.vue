<template>
  <div >
    <v-app-bar color="transparent" height="250" elevate-on-scroll >
      <v-img src="../assets/PatioBusNav.png" contain width="75" height="75">

      </v-img>
    </v-app-bar>
    <v-carousel height="60" style="margin-top: 20px" hide-delimiters show-arrows-on-hover>
      <v-carousel-item
      v-for="item in items" :key="item.src">
      <div style="width: 100%; gap: 4px" class="d-flex flex-row " >
        <v-img :src="item.src1" contain width="45%" height="45%" @click="dialogCombo1(item)">

        </v-img>
        <v-img :src="item.src2"  contain width="45%" height="45%" @click="dialogCombo2(item)">

        </v-img>
        <v-dialog v-model="dialogComboModel">
          <v-img :src="datosDialog">

          </v-img>
        </v-dialog>
      </div>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-row>
      <v-col cols="12" style="padding: 0;">
      <v-img src="../assets/Cafet. Recuadro.png" >
        <div style="width: 100%; height: 100%;" class="d-flex flex-row">
          <v-img style="margin-top: 12px" width="50%" height="100%" contain src="../assets/Cafet.Recuadro1.png" @click="dialogCafeteria1 = true">

          </v-img>
          <v-img  style="margin-top: 13px" width="50%" height="100%" contain src="../assets/Cafet.Recuadro2.png"  @click="dialogCafeteria2 = true">

          </v-img>
          <v-dialog v-model="dialogCafeteria1" color="white">
            <div style="background-color: white; padding: 10px">
              <v-img src="../assets/Cafet.Recuadro1.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogCafeteria2" >
            <div style="background-color: white; padding: 10px">
            <v-img src="../assets/Cafet.Recuadro2.png"></v-img>
          </div>
          </v-dialog>
        </div>
      </v-img>
      <v-img src="../assets/ParaLlevar.Recuadro.png" style="margin-top: 25px">
        <div style="width: 100%; height: 100%;" class="d-flex flex-row justify-space-between">
          <v-img style="margin-top: 55px" width="15%" height="50%" contain src="../assets/ParaLlevar.Recuadro1.png" @click="dialogParaLlevar1 = true">

          </v-img>
          <v-img  style="margin-top: 45px"  width="120" height="115" contain src="../assets/ParaLlevar.Recuadro2.png" @click="dialogParaLlevar2 = true">

          </v-img>
        </div>
        <v-dialog v-model="dialogParaLlevar1" color="white">
            <div style="background-color: white; padding: 10px">
              <v-img src="../assets/ParaLlevar.Recuadro1.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogParaLlevar2" >
            <div style="background-color: white; padding: 10px">
            <v-img src="../assets/ParaLlevar.Recuadro2.png"></v-img>
          </div>
          </v-dialog>
      </v-img>
      <v-img class="mt-12" src="../assets/Resto.Recuadro.png">

      </v-img>
      <div class="d-flex flex-row" style="gap: 10px; padding: 10px">
        <v-img contain width="150" height="150" src="../assets/Entrada.png" @click="dialogResto1 = true">

        </v-img>
        <v-img contain width="150" height="150" src="../assets/Sandwiches.png" @click="dialogResto2 = true">

        </v-img>
        <v-dialog v-model="dialogResto1" color="white">
            <div style="background-color: white; padding: 10px">
              <v-img src="../assets/Entrada.png"></v-img>
            </div>
          </v-dialog>
          <v-dialog v-model="dialogResto2" >
            <div style="background-color: white; padding: 10px">
            <v-img src="../assets/Sandwiches.png"></v-img>
          </div>
          </v-dialog>
      </div>
      </v-col>
    </v-row>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
