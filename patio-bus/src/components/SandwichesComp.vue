<template>
    <v-container class="card-container">
        <v-row>
            <v-col cols="6">
                <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;">
                    <v-img src="../assets/ImagenesCards/SandwichMila.jpg" style="height: 250px">

                    </v-img>
                    <div style="width: 100%;" class="d-flex flex-row">
                        <h3 class="title-cafe1">
                           Sandwich - Milanesa de Carne
                        </h3>

                    </div>
                    <v-card-text>
                        <p class="text-p">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum officiis facilis velit
                            itaque
                            vel quam quod, placeat doloribus minus modi aliquam, officia nesciunt laudantium.
                            Expedita sit debitis distinctio corrupti.
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-card-actions style="padding:2px">
                            <div class="d-flex flex-column" style="width:100%">
                                <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start">
                                    <div class="columna2">

                                        <div class="botonera">
                                            <div class="contador">
                                                <h3>2</h3>
                                            </div>
                                            <div class="botones">
                                                <button v-bind:style="{'background-color': color1}" @mouseover="color = '#fff' , color1 = '#000'" @mouseleave="color = '#000' , color1 = '#fff'" class="sumador"><v-icon :color="color">mdi-plus</v-icon></button>
                                                <button v-bind:style="{'background-color': color3}" @mouseover="color2 = '#fff' , color3 = '#000'" @mouseleave="color2 = '#000' , color3 = '#fff'" class="restador"><v-icon :color="color2">mdi-minus</v-icon></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-card-actions>
                        <div style="width: 100%;" class="d-flex flex-row justify-end div-botones">
                            <button class=" comprar  mr-5 mb-1 " @mouseover="colorCart = '#fff'" @mouseleave="colorCart = '#000'">
                                <h3 class="h3-comprar mt-1">AGREGAR</h3>
                                <v-icon v-bind:style="{'color' : colorCart}" size="20" class="mt-1 ">
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
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg" >

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Sandwich  Milanesa de Carne
                                    </h3>

                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg" >

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Sandwich  Milanesa de Pollo
                                    </h3>

                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg" >

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Sandwich Jamón y Queso
                                    </h3>

                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg" >

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Sandwich Salame y Queso 
                                    </h3>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <div class="container-selectors-up">
            <div class="select-container">
                <div class="selectores">
                    <div class="selector1"></div>
                    <div class="selector2"></div>
                    <div class="selector3"></div>
                    <div class="selector4"></div>
                </div>
                <h3 class="mt-2">1 de 4</h3>
            </div>
        </div>

    </v-container>
</template>

<script>
export default {
    name: 'SandwichesComp',
    data: () => ({
        color: '#000',
        color1 : '#fff',
        color2: '#000',
        color3 : '#fff',
        colorCart: '#000'
    }),
    methods: {

    }

}

</script>

<style lang="scss" scoped>
.container-selectors-up {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.select-container {
    width: 50%;

    h3 {
        text-align: center;
        font-family: 'red-hat';
        font-size: 15px;
        height: 20px;

    }

    .selectores {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;

        .selector1,
        .selector2,
        .selector3,
        .selector4 {
            width: 101px;
            background-color: #D9D9D9;
            transition: .5s;
            height: 5px;
        }

        .selector1:hover,
        .selector2:hover,
        .selector3:hover,
        .selector4:hover {
            background-color: #B9B1B1;
            transition: .5s;
            cursor: pointer;
        }
    }
}

.select-container h3 {
    padding: 0;
    margin: 0;
}

.title-cafe {
    font-weight: bold;
    font-family: 'red-hat';
    color: black;
    font-size: 14px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 15.22px;
}
.title-cafe1 {
    font-weight: bold;
    font-family: 'red-hat';
    color: black;
    font-size: 24px;
    padding-left: 30px;
    padding-top: 10px;
}

.text-p {
    margin-left: 20px;
    font-family: 'red-hat';
    color: grey;
}
.h3-comprar {
    font-family: 'red-hat';
    font-weight: 700;

    font-size: 15px;

}



.comprar {
    width: 150px;
    border: 1px solid black;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 6px;
    padding: 3px;
    margin-top: 20px;
}

.comprar:hover {
    background-color: black;
    color: white;
    transition: .5s;

}

.columna2 {
    margin-left: 26px;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;



}


.botonera {
    padding: 0;
    border: 1px solid black;
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: row;


}

.contador {
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

.botones {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-left: 1px solid black;

    .sumador {
        text-align: center;
        height: 50%;
        border-bottom: 1px solid black;
    }

    .restador {
        text-align: center;
        height: 50%;
    }
}

@media screen and (min-width: 1500px) {
    .button {
        width: 100px;

    }


}

@media screen and (max-width: 1300px) {}
</style>
