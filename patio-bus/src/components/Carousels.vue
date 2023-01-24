<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="width: 100%">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active no-active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="no-active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="no-active" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="no-active" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <v-img src="../assets/Combo1.png"  alt="...">
        <div style="width: 100%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45" @click="carritoOpen()">
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>
    <div class="carousel-item">
      <v-img src="../assets/Combo2.png"  alt="...">
        <div style="width: 100%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45">
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>
    <div class="carousel-item">
      <v-img src="../assets/Combo3.png"  alt="...">
        <div style="width: 100%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45">
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>
    <div class="carousel-item">
      <v-img src="../assets/Combo4.png"  alt="...">
        <div style="width: 100%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45">
            <v-icon>
              mdi-cart
            </v-icon>
          </v-btn>
        </div>
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
</template>


<script>
import store from '@/store';

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

            ],
            carrito : store.state.carrito
    }),
    methods: {
      carritoOpen(){
        store.commit('toggleCarrito', true)
      }
    }



}

</script>



<style lang="scss" scoped>

.carousel-item{
  width: 60%;
  height: 25%;
  margin-left: 40%;
  margin-top: 5%;
}
.carousel-inner{
 height: 50vh;
 background-image: url(../assets/CarouselCarrito/1.png) , url(../assets/CarouselCarrito/blanco.jpg);
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

  background-color: grey;
}
.carousel-control-prev{
  left: 30%;
  height: 100px;
  margin-top: 10rem
}
.carousel-control-next{
  height: 100px;
  margin-top: 10rem;
  
transform: translateX(120px);
}
.carousel-control-next-icon{
background-image: url('../assets/Icono-FlechaRight.png');
width: 25px;
height: 40px;

}

.carousel-control-prev-icon{
  background-image: url('../assets/Icono-FlechaLeft.png');
  width: 25px;
height: 40px;
}
@media screen and (max-width: 1900px) {
  .carousel-control-prev{
  left: 30%;
  height: 100px;
  margin-top: 5rem
}
.carousel-control-next{
  height: 100px;
  margin-top: 5rem
}
}
</style>