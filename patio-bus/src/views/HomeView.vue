<template>
  <div>
    <NavBar/>
    <CarouselsVue/>
<h5>¡Conocenos!</h5>
<h1>MENÚ</h1>
    <v-container fluid>
<v-row dense>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>  
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="4" xl="3"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content" >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
  </div>
</div>
      </div>
      
  </v-col>
  <v-col  xs="12" sm="12" md="12" xl="9"  >
    <div style="width: 100%; height: 100%; display: grid; place-items: center; ">
        <div class="card-container">
  <div class="card__content2 " >
    
    <div class="card__front">

    </div> 
    
    <div class="card__back">

    </div>
    
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
      width: window.innerWidth
    })
  }
    

</script>



<style>



h1, h5{
  text-align: center;
  
}
h1{
  font-size: 96px;

}
h5{
  font-size: 24px;
}
.card-container{
  width: 300px;
  transition: 1.5s;
  
}
.card-container:hover .card__content{
  transition:  1.5s;
  transform-style: preserve-3d;
  transform: rotateY(180deg);

  
}
.card-container:hover .card__content2{
  transition:  1.5s;
  transform-style: preserve-3d;
  transform: rotateX(180deg);

  
}
.card__content {
  transition:  1.5s;
  text-align: center;
  position: relative;
  padding: 10em 5em;

}

.card__content2 {
  transition:  1.5s;
  text-align: center;
  position: relative;
  padding: 10em 5em;

}
/* 
 .card__content {
  animation: animation1 ease-in-out  infinite 3.5s;
}
 .card__front::before {
  animation: animation2  infinite 3.5s;

  
}


<------ Animacion X & Y 3D ------->

@keyframes animation1 {
  0%{
    transform: rotateY(0);

  }
  25%{
    transform: rotateY(.5turn);
  }
  50%{
    
    
    transform: rotateY(1turn);
  }
  75%{
    transform: rotateX(.5turn);
  }
  100%{
    
    transform: rotateX(1turn);

  }
}

@keyframes animation1 {
  0%{
    transform: rotateY(0);

  }
  50%{
    transform: rotateY(.5turn);
  }
  100%{
    
    
    transform: rotateY(1turn);
  }
}
@keyframes animation2 {
  0%{
    backface-visibility: visible;
  }
  100%{
    backface-visibility: hidden;
  }
}  */
.card__front,.card__back {
  
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
  
  
}



.card__front::before {
  
  content: '';
  background-image: url(../assets/2.png);
  background-position: center;
  position: absolute;
  --spacer: 1em;
  top: var(--spacer);
  bottom: var(--spacer);
  left: var(--spacer);
  right: var(--spacer);
  transform: var(--level-one);
  
}
.card__back::after {
  content: '';
  background-image: url(../assets/2Volteada.png);
  backface-visibility: hidden;
  background-position: center;
  position: absolute;
  --spacer: 1em;
  top: var(--spacer);
  bottom: var(--spacer);
  left: var(--spacer);
  right: var(--spacer);
  transform: var(--level-one);
  
}
.card__back {
  transform: rotateY(.5turn);

  color: var(--clr);
  
}


</style>
