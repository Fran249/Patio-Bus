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
    <div class="carousel-item "   v-for="img in images" :key="img.src" v-bind:class="{active: img.ind == 1}">
      <v-img :src="img.src"  alt="...">
        <div style="width: 100%; height: 100%; display: flex; justify-content: flex-end; align-items: center;">
          <v-btn icon class="mr-10 bg-black " color="white" width="45" height="45" @click="sendComboToCart(img)">
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
import { auth } from '@/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import store from '@/store';

export default {
    name: 'CarouselsVue',
    data: ()=>({
        carrito: [],
        images:[{   
                    items: [
                      {
                        nombre: 'Combo café con leche + 2 Medialunas',
                        precio: 123,
                      },
                    ],
                    src: require('../assets/Combo1.png'),
                    category: 'combos',
                    ind: 1,
                },
                {   
                  items: [
                      {
                        nombre: 'Combo café con leche + Kit desayuno',
                        precio: 123,

                      },
                    ],
                    src: require('../assets/Combo2.png'),
                    category: 'combos',
                },
                {   
                  items: [
                      {
                        nombre: 'Jugo de naranja + tostado',
                        precio: 123,
                     
                      },

                    ],
                    src: require('../assets/Combo3.png'),
                    category: 'combos',
                },
            ],
            
    }),
    methods: {
      sendComboToCart(img){
        const index = this.carrito.findIndex(object => {
                return object.src === img.src;
            });
            if (auth.currentUser == null) {
                return

            } else {
                if (index == -1) {
                   // const cardItems = {
                   //   nombre : img.nombre,
                   //   id: img.id,
                   //   tamaños: img.tamaños
                   // }
                    this.carrito.push(img)

                    localStorage.setItem(`cart/${auth.currentUser.uid}`, JSON.stringify(this.carrito))

                    store.commit('forceRenderCarrito', + 1)
                    store.commit("addedToCart", true)
                } else {
                    return

                }
                this.dialogCarrito = true
                setTimeout(this.notificacionCarrito, 1200)

                store.commit("sendNotif", this.carrito.length)
                
                
            }
            
      }
    },
    watch:{
      carrito(){
        store.commit('carritoCompras', this.carrito)
            console.log(store.state.carritoCompras)
      }
    },
    beforeCreate(){
      onAuthStateChanged(auth, (user) => {
                    if (user) {
                        let datosLocalStorage = JSON.parse(localStorage.getItem(`cart/${auth.currentUser.uid}`));
                        if(datosLocalStorage === null){
                            this.carrito = [];
                        }else{
                            this.carrito = datosLocalStorage;
                            store.commit("sendNotif", this.carrito.length)
                        } 
                    } else {
                        // User is signed out
                        // ...
                    }
                    });

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
  width: 20px;
transform: translateX(50px);
}
.carousel-control-next-icon{
background-image: url('../assets/IconosNew/Iconos/Icono-Flecha.png');
width: 25px;
height: 40px;

}

.carousel-control-prev-icon{
  background-image: url('../assets/IconosNew/Iconos/Icono-Flecha.png');
  transform: rotateY(180deg);
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