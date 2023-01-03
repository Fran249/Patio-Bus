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
        <v-img :src="item.src1" contain width="45%" height="45%">

        </v-img>
        <v-img :src="item.src2"  contain width="45%" height="45%">

        </v-img>
      </div>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-row>
      <v-col cols="12" style="padding: 0;">
      <v-img src="../assets/Cafet. Recuadro.png" >
        <div style="width: 100%; height: 100%;" class="d-flex flex-row">
          <v-img style="margin-top: 12px" width="50%" height="100%" contain src="../assets/Cafet.Recuadro1.png">

          </v-img>
          <v-img  style="margin-top: 13px" width="50%" height="100%" contain src="../assets/Cafet.Recuadro2.png">

          </v-img>
        </div>
      </v-img>
      <v-img src="../assets/ParaLlevar.Recuadro.png" style="margin-top: 25px">
        <div style="width: 100%; height: 100%;" class="d-flex flex-row justify-space-between">
          <v-img style="margin-top: 55px" width="15%" height="50%" contain src="../assets/ParaLlevar.Recuadro1.png">

          </v-img>
          <v-img  style="margin-top: 45px"  width="120" height="115" contain src="../assets/ParaLlevar.Recuadro2.png">

          </v-img>
        </div>
      </v-img>
      <v-img class="mt-12" src="../assets/Resto.Recuadro.png">

      </v-img>
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
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
