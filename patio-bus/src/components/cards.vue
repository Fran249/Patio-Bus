<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        :xs="item.xs"
        :sm="item.sm"
        :md="item.md"
        :xl="item.xl"
        v-for="(item, i) in items"
        :key="i"
      >
        <div v-bind:class="{card: item.title != 'Bebidas' , card1: item.title == 'Bebidas'}">
          <div v-bind:class="{card__content: item.title != 'Bebidas', card__content1: item.title == 'Bebidas'}">
            <div
              class="card__front"
              v-bind:style="{
                'background-image': `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%) , url(${item.src}) `,
              }"
            >
              <h3 class="card__title">{{ item.title }}</h3>
            </div>

<<<<<<< Updated upstream
            <div v-bind:class="{card__back: item.title != 'Bebidas', card__back2: item.title == 'Bebidas'}">
              <router-link to="/Guarniciones">
                <button class="card__body">
                  <p v-bind:class="{texto_btn: item.title != 'Bebidas', texto_btn1: item.title == 'Bebidas' }">{{ item.cardBackBody }}</p>
                </button>
=======
        <v-container>
      <v-row >
        
        <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in items" :key="i">
          <div class="card">
            <div class="card__content">

              <div class="card__front" v-bind:style="{ 'background-image': `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%) , url(${item.src}) ` }">
                <h3 class="card__title">{{ item.title }}</h3>
                <p class="card__subtitle">{{ item.subtitle }}</p>
              </div>

              <div class="card__back">
                <router-link class="card__body" :to="item.route" > 
                <button >{{ item.cardBackBody }}</button>
>>>>>>> Stashed changes
                </router-link>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </template>

<script>
export default {
  name: "CardsVue",
  data: () => ({
    items: [
      {
<<<<<<< Updated upstream
        src: require("../assets/ImagenesCards/ImgCardHome/entradas.jpg"),
        color: "#333",
        title: "Entradas",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/carnes.jpg"),
        color: "#333",
        title: "Carnes",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/guarniciones.jpg"),
        color: "#333",
        title: "Guarniciones",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/pastas.jpg"),
        color: "#333",
        title: "Pastas",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/sandwiches.jpg"),
        color: "#333",
        title: "Sandwiches",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/empanadas.jpg"),
        color: "#333",
        title: "Empanadas",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/tartas.jpg"),
        color: "#333",
        title: "Tartas",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/pizzas.jpg"),
        color: "#333",
        title: "Pizzas",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/helados.jpg"),
        color: "#333",
        title: "Postres",
        cardBackBody: "VER",
        xs: "12",
        sm: "6",
        md: "4",
        xl: "3",
      },
      {
        src: require("../assets/ImagenesCards/ImgCardHome/bebidas.jpg"),
        color: "#333",
        title: "Bebidas",
        cardBackBody: "VER",
        xs: "12",
        sm: "12",
        md: "12",
        xl: "9",
=======
        src: require('../assets/ImagenesCards/ImgCardHome/entradas.jpg'),
        color: '#333',
        title: 'Entradas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Entradas'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/carnes.jpg'),
        color: '#333',
        title: 'Carnes',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Carnes'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/guarniciones.jpg'),
        color: '#333',
        title: 'Guarniciones',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Guarniciones'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/pastas.jpg'),
        color: '#333',
        title: 'Pastas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Pastas'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/sandwiches.jpg'),
        color: '#333',
        title: 'Sandwiches',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Sandwiches'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/empanadas.jpg') ,
        color: '#333',
        title: 'Empanadas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Empanadas'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/tartas.jpg'),
        color: '#333',
        title: 'Tartas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Tartas'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/pizzas.jpg'),
        color: '#333',
        title: 'Pizzas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Pizzas'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/helados.jpg'),
        color: '#333',
        title: 'Postres',
        cardBackBody: 'VER',
        xs:'12',
        sm: '6',
        md: '4',
        xl:'3',
        route:'/Postres'
      },
      {
        src: require('../assets/ImagenesCards/ImgCardHome/bebidas.jpg'),
        color: '#333',
        title: 'Bebidas',
        cardBackBody: 'VER',
        xs:'12',
        sm: '12',
        md: '12',
        xl:'9',
        route:'/Bebidas'
>>>>>>> Stashed changes
      },
    ],
  }),
};
</script>

<style scoped>
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
  border: none;
  cursor: pointer;
}
a, a:hover, a:focus, a:visited, button{
  text-decoration: none;
  color: #FFF;
  
}
.card__content {
  height: 300px;
  text-align: center;
  position: relative;

  transition: transform 3s;
  /* background: pink;*/
  transform-style: preserve-3d;
}

.card:hover .card__content {
  transform: rotateY(0.5turn);
}

.card1:hover .card__content1 {
  transform: rotateX(0.5turn);
}


.card1 {
  height: 300px;
  border: none;
  cursor: pointer;
}

.card__content1 {
  height: 300px;
  text-align: center;
  position: relative;

  transition: transform 3s;
  /* background: pink;*/
  transform-style: preserve-3d;
}

.card__front,
.card__back, 
.card__back2 
{
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

  color: #fff;
}

.card__front::before {
  content: "";
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
  font-size: 0.75rem;
  font-weight: var(--fw-bold);
  opacity: 0.7;
}

.card__body {
  transform: var(--level-two);
  font-weight: var(fw-normal);
  font-size: 1.5rem;
  line-height: 1.6;

  width: 100%;
  display: flex;
  justify-self: center;
  justify-content: center;
}
.texto_btn{
  border: 1px solid white;
  width: 100px;

}
.texto_btn1{

  border: 1px solid white;
  width: 100px;
  
}

.card__back {
  transform: rotateY(0.5turn);
  color: var(--clr);
  background-color: black;
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.4598214285714286) 0%
    ),
    url("../assets/CarouselCarrito/Logo.png");
  background-size: 90%;
  background-position: -100%;
}
.card__back2 {
  transform: rotateY(0.5turn);
  color: var(--clr);
  background-color: black;
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.4598214285714286) 0%
    ),
    url("../assets/CarouselCarrito/Logo.png");
  background-size: 40%;
  background-position: -5%;
  transform: rotateX(180deg);

}

</style>
