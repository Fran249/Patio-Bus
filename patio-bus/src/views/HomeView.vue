<template>
  <div style="">
    <NavBar />
    <CarouselsVue style="margin-top: 5rem; margin-bottom: 5rem;"/>

  <cards_cafet />

    <div class="d-flex flex-column align-center" style="width: 100%; margin-top: 5rem;">
      <h5>¡Conocenos!</h5>
    <h1>MENÚ</h1>
    </div>

    <v-container style="display: flex; justify-content: center;  flex-direction:row ; margin-bottom: 5rem;">
      
      <div class="bar-menu">

    </div>
    <div class="bar-sub-menu">
        
      </div>  
    </v-container>
    

      <CardsVue />
      <FooterVue/>
    <v-dialog v-model="carrito">
      <h3>pruebas</h3>
      <h3>pruebas</h3>
      <h3>pruebas</h3>
      <h3>pruebas</h3>
      <h3>pruebas</h3>
    </v-dialog>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CarouselsVue from '@/components/Carousels.vue';

import cards_cafet from '@/components/cards_cafeteria.vue';
import CardsVue from '@/components/cards.vue';
import store from '@/store';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    CarouselsVue,
    cards_cafet,
    CardsVue
  },
  data: () => ({
    width: window.innerWidth,
   carrito : store.state.carrito
    
  }),
  mounted(){ 
    
  },
  computed:{
    
  }
}


</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
@font-face {
  font-family: 'Quesha';
  src: url('../assets/Quesha.ttf');
}
.cont_footer{
  margin: 0;
  padding: 0;
}
h1{
  font-family: 'Quesha';
  font-size: 100px;
  margin-bottom: 0;
}
h5 {
  font-family: 'Quesha';
  font-size: 40px;
  margin-bottom: 0;
}
.bar-menu{
  width: 62vw;
  height: 3px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;  
 

position: absolute;
}
.bar-sub-menu{
  width: 59%;
  height: .5rem;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 2;
  transform: translateY(-.1rem) ;

  

}






</style>
