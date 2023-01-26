<template>
    <div>
    <v-container style="display: flex; flex-direction: row; justify-content: space-between;">
        <div style=" text-align: center; width: 100%; padding: 15px;" >
        <h2 class="title-compras">MIS COMPRAS</h2>
    </div> 
        <button style="align-self: flex-start; " @click="closeCarrito()"><v-icon>mdi-close</v-icon></button>
        </v-container>        
    <div class="grid-cont">
        <div class="imagen-plato" style="background-color: black; width: 100%; height: 100%">
            
        </div>

        <div class="columna2">
        <h2>Sandwiche</h2>
        <p>Lorem ipsum dolor sit amet  elit.</p>
        <div class="botonera">
            <div class="contador">
               <h3>2</h3>
            </div>
            <div class="botones">
                <button class="sumador">+</button>
                <button class="restador">-</button>
            </div>
            </div>
        </div>
        <div class="precio"><h3>$0.00</h3></div>
        <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
    </div>
  

    </div>
</template>


<script>
import store from '@/store';
export default {
    name: 'CarritoVue',
    data: ()=>({
        
    }),
    methods:{
        closeCarrito(){
            store.commit("toggleCarrito" , false)
        }
    }

}

</script>


<style lang="scss" scoped>

.title-compras{
    font-family: 'Quesha';
    font-size: 40px;
}
.grid-cont{
    padding: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 20% 5%;
    grid-template-rows: 150px;

}
.grid-cont .imagen-plato{
    background-image: url("../assets/ImagenesCards/38031.webp");
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;
    
    
}
.columna2{
    margin-left: 70px;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    
  
}
.columna2 h2{
        font-family: 'red-hat';
        font-size: 20px;
        font-weight: bolder;
        color: black;
        
    }
.columna2 p{
    font-family: 'red-hat';
    color: grey;
    font-size: 15px;
    font-weight: lighter;
        
}
 .botonera{
    padding: 0;
    border: 1px solid black;
    width:25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    
     
    }
    .contador{       
    width: 60%;
    height: 100%;
    display: grid;
    place-items: center;    
       }
    .contador h3 {
        font-family: 'red-hat';
        font-weight: bolder;
        font-size: 20px;
        color: black;
        

    }
    .botones{
    display: flex;
    flex-direction:column;
    width: 40%;
    height: 100%;
    border-left: 1px solid black;

    .sumador{text-align: center;
        height: 50%;
        border-bottom: 1px solid black;
    }
    .restador{
        text-align: center;
        height: 50%;
    }
    }
.precio{
    grid-column: 3/4;
    grid-row: 1/2;


}
.precio h3 {
    font-family: 'red-hat';
    font-style: italic;
    font-weight: 400;
}
.botonx{
    grid-column: 4/5;
    grid-row: 1/2;
    width: 100%;
    height: 100%;
   display: grid;
   grid-template-columns: 100%;
   grid-template-rows:20% 80% ;
   .botonx button{
    grid-row: 1/2;
    place-items:end end;
   }
}

</style>