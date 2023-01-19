<template>
    <div class="d-flex flex-row">
        <v-img src="../assets/Logo-black.png" height="100" contain>

        </v-img>
        <div id="carouselExampleIndicators" class="carousel slide" style="height: 50%">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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


</style>