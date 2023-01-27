<template>
    <v-container class="card-container" >
  
              <v-row>
                  <v-col cols="6">
                              <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;" >
                                <v-img src="../assets/ImagenesCards/Cereales.jpg" style="height: 250px">
                                    
                                </v-img>
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
                        <div class="grid-botonera">
                            <div class="number">2</div>
                            <button class="plus">
                                <v-icon>
                                    mdi-plus
                                </v-icon>
                            </button>
                            <button class="minus">
                                <v-icon>
                                    mdi-minus
                                </v-icon>
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
                  </v-card-actions>
              </v-card>
              </v-col>
              <v-col cols="6">
                  <v-row>
                      <v-col cols="6">
                      <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                  <v-img src="../assets/ImagenesCards/Cereales.jpg">
  
                  </v-img>
                  <v-card-title>
                      <h3 class="title-cafe">   
                         Mix de cereales
                      </h3>
                  </v-card-title>
              </v-card>
                  </v-col>
                  <v-col cols="6">
                      <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                  <v-img src="../assets/ImagenesCards/Cereales.jpg">
  
                  </v-img>
                  <v-card-title>
                      <h3 class="title-cafe">
                        Medialunas
                      </h3>
                  </v-card-title>
              </v-card>
                  </v-col>
                  <v-col cols="6">
                      <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                  <v-img src="../assets/ImagenesCards/Cereales.jpg">
  
                  </v-img>
                  <v-card-title>
                      <h3 class="title-cafe">
                          Torta de Crema y Frutilla
                      </h3>
                  </v-card-title>
              </v-card>
                  </v-col>
                  <v-col cols="6">
                      <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                  <v-img src="../assets/ImagenesCards/Cereales.jpg">
  
                  </v-img>
                  <v-card-title>
                      <h3 class="title-cafe">
                          Tostados
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
        name: 'SnacksSelector',
      data: ()=>({
  
      }),
      methods: {
  
      }
  
  }
  
  
  </script>
  
  
  <style lang="scss" scoped>
  .grid-botonera{
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-template-rows: repeat(2, 30px);
    width: 25%;
    margin-left: 10px;
    .number{
        grid-column: 1/2;
        grid-row: 1/3;
        display: grid;
        place-items: center;
        border: 1px solid black;

    }
    .plus{
        grid-column: 2/3;
        grid-row: 1/2;
        border-right: 1px solid black;
        border-top: 1px solid black;
        width: 70%;
    }
    .minus{
        grid-column : 2/3;
        grid-row: 2/3;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        width: 70%;
    }
  }

  .title-cafe{
      font-family: 'red-hat';
      color: black;
      font-size: 20px;
      padding-left: 10px;
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
        margin-right: 10px;
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