<template>
    <div>
     <NavBar />
     <h1>MENÚ</h1>
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
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45">
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
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'Guarniciones-Vue',
    data: () => ({
        width: window.innerWidth
    }),
    components: {
        NavBar,
    },
}
</script>
<style lang="scss" scoped>

</style>