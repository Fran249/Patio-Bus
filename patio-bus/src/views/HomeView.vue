<template>
  <div style="">
    <NavBar />
    <div class="para-llevar">

    </div>
    <CarouselsVue style="margin-top: 5rem; margin-bottom: 5rem;"/>
    <div class="d-flex flex-column align-center" style="width: 100%; margin-top: 5rem;">
      <h5 class="conocenos">¡Conocenos!</h5>
    <h1 style="" class="menu">MENÚ</h1>
    </div>

    <v-container style="display: flex; justify-content: center;  flex-direction:row ; margin-bottom: 5rem;">
      
      <v-img src="../assets/IconosNew/Iconos/Miscela. Linea.png"></v-img>
    </v-container>
    <div class="cards_cafet_cont">
      <cards_cafet />
    </div>


    

      <CardsVue />
      <FooterVue/>
   

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CarouselsVue from '@/components/Carousels.vue';

import cards_cafet from '@/components/cards_cafeteria.vue';
import CardsVue from '@/components/cards.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    CarouselsVue,
    cards_cafet,
    CardsVue,
  
  },
  data: () => ({
    width: window.innerWidth,
   

    
  }),

}


</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
  
.menu{
  color: #000;
}
.cards_cafet_cont{
  margin-bottom: 0px
}
.para-llevar{
  width: 100%;
  display: flex;
  justify-content: center;
  height: 300px;
  background-image: url('../assets/IconosNew/Iconos/ParaLlevar.png');
  background-position: center;
  background-size: 80%;
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

@media screen and (max-width: 600px){
  .cards_cafet_cont{
  margin-bottom: 350px
}

.para-llevar{
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100px;
  background-image: url('../assets/IconosNew/Iconos/ParaLlevar.png');
  background-position: center;
  background-size: 80%;
}
.menu{
  font-size: 80px;
}
.conocenos{
  font-size: 30px;
}
}





</style>
