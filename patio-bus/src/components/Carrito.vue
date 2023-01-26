<template>
    <div>
    <v-container style="display: flex; flex-direction: row; justify-content: space-between;">
        <div style=" text-align: center;" >
        <h2 >MIS COMPRAS</h2>
    </div> 
        <button style="align-self: flex-end;">X</button>
        </v-container>        
    <div class="grid-cont">
        <div class="imagen-plato" style="background-color: black; width: 100%; height: 100%">
            
        </div>

        <div class="columna2">
        <h2>Lorem ipsum dolor</h2>
        <h5>Lorem ipsum dolor sit amet  elit.</h5>
        <div class="botonera">
            <div class="contador">gad</div>
            <div class="botones">
                <div class="sumador">+</div>
            <div class="restador">-</div>
        </div>
        </div>
        </div>
        <div class="precio"><h3>$0.00</h3></div>
        <div class="botonx"><button>X</button></div>
    </div>
  

    </div>
</template>


<script>
export default {
    name: 'CarritoVue',
    data: ()=>({
        
    }),

}

</script>


<style lang="scss" scoped>
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
 .botonera{padding: 0;
    border: 2px solid black;
    width:25%;
    height: 71px;
    display: flex;
    flex-direction: row;
    gap: 5px; 
    
     
    }
    .contador{       
    width: 70%;      
    height: 50px;    
    display: flex;
    flex-direction:row ; 
    place-items:center end ;     
    align-items: center;
       }
    .botones{
        display: flex;
    flex-direction:column;
    width: 30%;
        height: 100%;
    border-left: 2px solid black;
    .sumador{text-align: center;
        border-bottom: 2px solid black;
    }
    .restador{
        text-align: center; 
    }
    }
.precio{
    grid-column: 3/4;
    grid-row: 1/2;
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