<template>
  <div>
    <NavBar/>
    <CarouselsVue/>
<h5>¡Conocenos!</h5>
<h1>MENÚ</h1>
    <v-container style="">
<v-row style="height: 200px;">
  <v-col  xs="12" sm="12" md="4" xl="3"  v-for="(item, i) in items" :key="i">
    <div class="card">
  <div class="card__content">
    
    <div class="card__front" v-bind:style="{'background-image': `url(${item.src})`}">
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
    data: ()=>({
      width: window.innerWidth,
      items: [
        {src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg',
        color: '#333',
        title: 'Entradas',
        cardBackBody: 'This would be some longer text that gives a description of the things from the other side I guess'},
        {src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg',
        color: '#333',
        title: 'Carnes',
        cardBackBody: 'This would be some longer text that gives a description of the things from the other side I guess'},
        {src:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg',
        color: '#333',
        title: 'Guarniciones',
        cardBackBody: 'This would be some longer text that gives a description of the things from the other side I guess'},
        {src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg',
        color: '#333',
        title: 'Pastas',
        cardBackBody: 'VER'}

      ]
    })
  }
    

</script>



<style>


@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');

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
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg);
  background-size: cover;
  background-blend-mode: overlay;
  color: #333;
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
