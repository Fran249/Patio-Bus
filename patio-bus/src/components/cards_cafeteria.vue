
  <template>
    <div>
    <v-container>
    <v-row  class="v_row-gaper">
      <v-col cols="12" xs= "12" sm= "12" md= "6" lg= "6" xl= "6">
        <div class="card1">
          <div class="card__content1">
            <div class="card__front1"  v-bind:style="{ 'background-image': `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%) , url(${require('../assets/ImagenesCards/SnacksInfusiones/infusiones.jpg')}) ` }">
              <h3 class="card__title1">INFUSIONES</h3>
            </div>

            <div class="card__back1">
              <router-link class="card__body1" to="/Infusiones">
              <button >VER</button>
            </router-link>
            </div>

          </div>
        </div>
      </v-col>
      <v-col cols= "12" xs= "12" sm= "12" md= "6" lg= "6" xl= "6">
        <div class="card1">
          <div class="card__content1">
            <div class="card__front1" v-bind:style="{ 'background-image': `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%) , url(${require('../assets/ImagenesCards/SnacksInfusiones/snacks-dulces.jpg')}) ` }">
              <h3 class="card__title1">SNACKS DULCES</h3>
            </div>

            <div class="card__back1">
              <router-link class="card__body1" to="/Snacks_Dulces">
                <button >VER</button>
              </router-link>
            </div>

          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'cards_cafet',
    data: () => ({
        width: window.innerWidth
    }),
    components: {
    RouterLink
},
}
</script>
<style lang="scss" scoped>

a, a:hover, a:focus, a:visited, button{
  text-decoration: none;
  color: #FFF;
  }
:root {
  --level-one: translateZ(3rem);
  --level-two: translateZ(6rem);
  --level-three: translateZ(9rem);

  --fw-normal: 400;
  --fw-bold: 700;

  --clr: #b7c9e5;
}
.v_row-gaper{
  gap: 0;
  height: 400px;
}
.card1 {
  
  border: none;
  cursor: pointer;
}

.card__content1 {

  text-align: center;
  position: relative;
 
  transition: transform 3s;
  /* background: pink;*/
  transform-style: preserve-3d;
}

.card1:hover .card__content1 {
  transform: rotateY(.5turn);
}

.card__front1,
.card__back1 {
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
  height: 350px;
  
}

.card__front1 {
  background-color: var(--clr);
  height: 350px;
  background-size: cover;

  color: #FFF;
}

.card__front1::before {
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

.card__title1 {
  font-size: 2.5rem;
  transform: var(--level-three);
  order: 2;
  text-transform: uppercase;
  font-family: 'red-hat';
}

.card__subtitle1 {
  transform: var(--level-two);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: .75rem;
  font-weight: var(--fw-bold);
  opacity: .7;
}

.card__body1 {
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



.card__back1 {
  transform: rotateY(.5turn);
  color: var(--clr);
  background-color: black;
  background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%), url('../assets/CarouselCarrito/Logo.png');
  background-size: 90%;
  background-position: -100%;
}


@media screen and (max-width: 600px){

}

@media screen and (max-width: 600px){
  .v_row-gaper{
    gap: 50px;
    height: 100px;
  }

  .card__title1 {
  font-size: 1.5rem;

}
.card1 {
  height: 150px;
}
.card__front1,.card__back1{
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__front1::before {
  height: 125px;

}
.card__title1{
  font-size: 1rem;
  order: 2;
  margin-left: 15px;
  text-transform: uppercase;
  font-family: 'red-hat';
}
.card__body1 button{
  font-size: 1rem;
}
.card__content1{
  height: 150px;
}
}
</style>