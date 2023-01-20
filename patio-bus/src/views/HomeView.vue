<template>
  <div>
    <NavBar />
    <CarouselsVue />
    <div class="d-flex flex-column align-center" style="width: 100%;">
      <h5>¡Conocenos!</h5>
    <h1>MENÚ</h1>
    </div>
    <v-container style="display: flex; justify-content: center;  flex-direction:row">
      <div class="bar-menu">

    </div>
    <div class="bar-sub-menu">
        
      </div>  
    </v-container>
    <v-container style="">
      <v-row style="height: 200px;">
        <v-col :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in items" :key="i">
          <div class="card">
            <div class="card__content">

              <div class="card__front" v-bind:style="{ 'background-image': `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%) , url(${item.src}) ` }">
                <h3 class="card__title">{{ item.title }}</h3>
                <p class="card__subtitle">{{ item.subtitle }}</p>
              </div>

              <div class="card__back">
                <button class="card__body">{{ item.cardBackBody }}</button>
              </div>

            </div>
          </div>
        </v-col>


      </v-row>
    </v-container>
    <FooterVue />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import CarouselsVue from '@/components/Carousels.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterVue,
    CarouselsVue
  },
  data: () => ({
    width: window.innerWidth,
    items: [
      {
        src: require('../assets/ImagenesCards/entradas.jpg'),
        color: '#333',
        title: 'Entradas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/carnes.jpg'),
        color: '#333',
        title: 'Carnes',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/guarniciones.jpg'),
        color: '#333',
        title: 'Guarniciones',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/pastas.jpg'),
        color: '#333',
        title: 'Pastas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/sandwiches.jpg'),
        color: '#333',
        title: 'Sandwiches',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/cover_fpa6sn8vqc_empanadas.jpg') ,
        color: '#333',
        title: 'Empanadas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/tartas.jpg'),
        color: '#333',
        title: 'Tartas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/pizzas.jpg'),
        color: '#333',
        title: 'Pizzas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/604fa64181ff2.jpg'),
        color: '#333',
        title: 'Postres',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '4',
        xl:'3'
      },
      {
        src: require('../assets/ImagenesCards/bebidas.jpg'),
        color: '#333',
        title: 'Bebidas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '12',
        xl:'9'
      },

    ]
  })
}


</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
@font-face {
  font-family: 'Quesha';
  src: url('../assets/Quesha.ttf');
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
  width: 80%;
  height: 3px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;  
 

position: absolute;
}
.bar-sub-menu{
  width: 60%;
  height: .5rem;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 2;
  transform: translateY(-.1rem) ;

  

}



:root {
  --level-one: translateZ(3rem);
  --level-two: translateZ(6rem);
  --level-three: translateZ(9rem);

  --fw-normal: 400;
  --fw-bold: 700;

  --clr: #b7c9e5;
}


.card {
  height: 300px;
}

.card__content {
  text-align: center;
  position: relative;
  padding: 15em 5em;
  transition: transform 3s;
  /* background: pink;*/
  transform-style: preserve-3d;
}

.card:hover .card__content {
  transform: rotateY(.5turn);
}

.card__front,
.card__back {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5em 3em;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  height: 300px;
}

.card__front {
  background-color: var(--clr);

  background-size: cover;

  color: #FFF;
}

.card__front::before {
  content: '';
  position: absolute;
  --spacer: 1em;
  top: var(--spacer);
  bottom: var(--spacer);
  left: var(--spacer);
  right: var(--spacer);
  border-left: 2px solid currentColor;
  transform: var(--level-one);
}

.card__title {
  font-size: 2.5rem;
  transform: var(--level-three);
  order: 2;
  text-transform: uppercase;
}

.card__subtitle {
  transform: var(--level-two);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: .75rem;
  font-weight: var(--fw-bold);
  opacity: .7;
}

.card__body {
  transform: var(--level-two);
  font-weight: var(fw-normal);
  font-size: 1.5rem;
  line-height: 1.6;
  border: 1px solid white;
  width: 100px;
  display: flex;
  justify-self: center;
  justify-content: center;
}



.card__back {
  transform: rotateY(.5turn);
  color: var(--clr);
  background: #333;
}
</style>
