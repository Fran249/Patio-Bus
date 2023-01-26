<template>
  <v-container class="card-container" >

            <v-row>
                <v-col cols="6">
                            <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;" >
                            <div class="img-card-izquierda">
                                <v-btn style="background-color: white; " width="70" height="70" icon>
                                    <h3 style="font-family: 'red-hat'; font-style: italic; font-size: 20px; text-align: center;" class="mt-2">$0,00</h3>         
                                </v-btn>    
                            </div>              
                <div style="width: 100%;">
                    <h3 class="title-cafe">
                        Café
                    </h3>
                </div>
                <v-card-text>
                    <p class="text-p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum officiis facilis velit itaque
                    vel quam quod, placeat doloribus minus modi aliquam, officia nesciunt laudantium.
                    Expedita sit debitis distinctio corrupti.
                    </p>
                </v-card-text>
                <v-card-actions >
                    <div class="d-flex flex-column" style="width:100%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start">
                        <button class="button">
                            <h3 class="h3-button">45ml</h3>
                        </button>
                        <button class="button">
                            <h3 class="h3-button">75ml</h3>
                        </button>
                        </div>
                    <div style="width: 100%;" class="d-flex flex-row justify-end div-botones">
                        <button class="button comprar">
                            <h3 class="h3-comprar mt-1">AGREGAR</h3>
                            <v-icon color="black" size="20" class="mt-1">
                                mdi-cart
                            </v-icon>
                        </button>
                    </div>
                    </div>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="6">
                    <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                <v-img src="../assets/ImagenesCards/InfusionesSelector.jpg">

                </v-img>
                <v-card-title>
                    <h3 class="title-cafe">
                        Café
                    </h3>
                </v-card-title>
            </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                <v-img src="../assets/ImagenesCards/CafeDoble.jpg">

                </v-img>
                <v-card-title>
                    <h3 class="title-cafe">
                        Café doble
                    </h3>
                </v-card-title>
            </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                <v-img src="../assets/ImagenesCards/CafeConLeche.jpg">

                </v-img>
                <v-card-title>
                    <h3 class="title-cafe">
                        Café con leche
                    </h3>
                </v-card-title>
            </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                <v-img src="../assets/ImagenesCards/CafeConLeche.jpg">

                </v-img>
                <v-card-title>
                    <h3 class="title-cafe">
                        Cortado
                    </h3>
                </v-card-title>
            </v-card>
                </v-col>
                </v-row>
            </v-col>
            </v-row>
        

  </v-container>
</template>


<script>
export default {
    data: ()=>({

    }),
    methods: {

    }

}


</script>


<style lang="scss" scoped>
.img-card-izquierda{
    height: 50%;
    width: 100%; 
    background-image: url('../assets/ImagenesCards/InfusionesSelector.jpg');
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 15px;
}
.title-cafe{
    font-family: 'red-hat';
    color: black;
    font-size: 25px;
    padding-left: 30px;
    padding-top: 10px;
}
.text-p{
    font-family: 'red-hat';
    color: grey;
}
.h3-button{
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 3px;
}
.h3-comprar{
    font-family: 'red-hat';

    font-size: 15px;

}
.button{
    width: 100px;
    border: 1px solid black;
}
.comprar{
    width: 150px;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 6px;
    padding: 3px;
    margin-top: 20px;
}
.button:hover {
    background-color: black;
    color: white;
    transition: .5s;

}


@media screen and (min-width: 1500px){
    .button{
    width: 130px;
    
}


}
@media screen and (max-width: 1300px) {
   
}
</style>