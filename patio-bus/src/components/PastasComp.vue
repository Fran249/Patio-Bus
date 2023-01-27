<template>
    <v-container class="card-container">
        <v-row>
            <v-col cols="6">
                <v-card style="border-radius: 1px; border: 1px solid black; height: 100%;">
                    <v-img src="../assets/ImagenesCards/ñoquis.jpg" style="height: 250px">

                    </v-img>
                    <div style="width: 100%;" class="d-flex flex-row">
                        <h3 class="title-cafe">
                            Ñoquis
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
                            <button class="button">
                                <h3 class="h3-button">Fileto</h3>
                            </button>
                            <button class="button">
                                <h3 class="h3-button">Bolognesa</h3>
                            </button>

                            
                        </div>
                        
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start mt-5">
                                <v-menu offset-y >
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1" dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >Tuco </h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <v-list>
                                        <v-list-item v-for="(item, index) in items" :key="index">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>                                
                                <v-menu offset-y >
                                    <template v-slot:activator="{ on, attrs }" >
                                        <button class="button1 " dark v-bind="attrs" v-on="on" >
                                            <h3 class="h3-button1 ml-5" >Crema </h3>  
                                            <v-icon class="icono-menu mt-1">mdi-menu-down </v-icon>                                          
                                        </button>
                                    </template>
                                    <v-list>
                                        <v-list-item v-for="(item, index2) in items2" :key="index2">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            
                            </div>
                           
                    </div>
                </v-card-actions>
                            <div style="width: 100%;" class="d-flex flex-row justify-end div-botones">
                                <button class="button comprar  mr-5 mb-1 ">
                                    <h3 class="h3-comprar mt-1">AGREGAR</h3>
                                    <v-icon color="black" size="20" class="mt-1 ">
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
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Ñoquis
                                    </h3>
                                    
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Tallarines
                                    </h3>
                                    
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Sorrentinos
                                    </h3>
                                    
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card style="border-radius: 1px; border: 1px solid black " class="cardone">
                            <v-img src="../assets/ImagenesCards/Tallarines.jpg">

                            </v-img>
                            <v-card-title>
                                <div style="width: 100%;" class="d-flex flex-row">
                                    <h3 class="title-cafe">
                                        Ravioles
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
    name: 'GuarnicionesComp',
    data: () => ({
        items: [
            { title: 'Estofado de pollo' },
            { title: 'Estofado de ternera' },            
        ],
        items2: [
            { title: 'Verdeo' },
            { title: 'Cuatro Quesos' },            
        ],
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
}

.text-p {
    font-family: 'red-hat';
    color: grey;
}

.h3-button {
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 3px;
}

.h3-comprar {
    font-family: 'red-hat';

    font-size: 15px;

}

.button {
    width: 100px;
    border: 1px solid black;
}

.comprar {
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
.h3-button1{
    font-weight: 500;
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 5px;
}
.button1 {
    display: flex;    
    border-radius: 0;
    width: 100px;
    border: 1px solid black;
}
.button1:hover     {
    background-color:black;
    color: white;
    transition: .5s;
}
.button1:hover .icono-menu{    
    color: white;
    transition: .5s;
} 


@media screen and (min-width: 1500px) {
    .button {
        width: 100px;

    }


}

@media screen and (max-width: 1300px) {}
</style>
