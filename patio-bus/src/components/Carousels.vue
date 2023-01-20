<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="width: 100%">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="no-active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="no-active" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="no-active" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/Combo1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/Combo2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/Combo3.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/Combo4.png" class="d-block w-100" alt="...">
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
</template>


<script>
export default {
    name: 'CarouselsVue',
    data: ()=>({
        items:[
                {   
                    identifier: false,
                    src: 'https://i.imgur.com/H55mDqI.jpg'
                },
                {   
                    identifier: true,
                    src: 'https://i.imgur.com/KRebmZm.jpg'
                },
                {   index: 3,
                    identifier: false,
                    src: 'https://i.imgur.com/mlC0zPx.jpg'
                },

            ]
    }),



}

</script>



<style>

.carousel-item{
  width: 50%;
  height: 25%;
  margin-left: 40%;
  margin-top: 5%;
}
.carousel-inner{
 height: 50vh;
 background-image: url(../assets/CarouselCarrito/1.png) , url(../assets/CarouselCarrito/1.png);
 background-position: left center , right center;
  background-repeat: no-repeat, no-repeat;
  background-size: 50% 100%;
}
.carousel-indicators{
  
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1%;
  margin-left: 0;
  margin-right: 0;
  

}
.carousel-indicators .active {
  width: 104px;

}
.carousel-indicators .no-active{
  width: 104px;
}
</style>