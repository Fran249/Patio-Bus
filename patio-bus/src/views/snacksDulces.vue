<template>
    <div>
     <NavBar />
     <h3 class="coffe">COFFE</h3>
     <LinksInfuSnacks/>
     <v-container style="display: flex;  flex-direction:row">
     
    <v-row >
      <v-col cols="12" >
        <div >
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active no-active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="no-active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="no-active" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="no-active" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <v-img src="../assets/ImagenesCards/ImgCardHome/guarniciones.jpg"  alt="...">
        
      </v-img>
    </div>      
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
      </v-col>
    </v-row>
  </v-container>
  <SnacksSelector/>
  <FooterVue/>
    </div>
</template>

<script>
import SnacksSelector from '@/components/SnacksSelector.vue';
import LinksInfuSnacks from '@/components/LinksInfuSnacks.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'Snacks_Dulces-Vue',
    data: () => ({
        width: window.innerWidth
    }),
    components: {
        NavBar,
        LinksInfuSnacks,
        SnacksSelector,
    },
}
</script>
<style lang="scss" scoped>
.coffe{
  font-family: 'Quesha';
  text-align: center;
  font-size: 80px;
}
.carousel{
    width: 100%;
    height: 300px;   
}
.carousel-item{
  height: 300px;
  width: 100%;
}
.carousel-indicators{  
  display: none;
  }
.carousel-control-prev{
  left: -6%;
  height: 100px;
  margin-top: 7rem
  
}
.carousel-control-next{
  height: 100px;
  margin-top: 7rem;
  right: -6%;
}
.carousel-control-next-icon{
background-image: url('../assets/IconosNew/Iconos/Icono-Flecha.png');
width: 25px;
height: 40px;
}

.carousel-control-prev-icon{
  background-image: url('../assets/IconosNew/Iconos/Icono-Flecha.png');
  transform: rotate(180deg);
  width: 25px;
height: 40px;
}
.carousel-inner{
    width: 100%;
    
}
</style>