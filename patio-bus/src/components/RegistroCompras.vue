<template>
<div >
        <LinksPerfilCompra/>
        <v-container style="width: 100%" class="d-flex justify-center flex-column align-center">
            <div style="width: 70%" class="d-flex justify-space-between">
                <h3 class="title-fecha" >24 de septiembre 2022 </h3>
                <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
            </div>
            <v-img width="80%"  src="../assets/IconosNew/Iconos/Miscela. Linea.png"></v-img>
            <div class="grid-cont">
            <div class="imagen-plato" style="background-color: black; width: 100%; height: 100%">

            </div>
            
            <div class="columna2">
                <h2>Sandwiche</h2>
                <p>Lorem ipsum dolor sit amet elit.</p>
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
            <div class="precio">
                <h3>$0.00</h3>
                <div class="botonx"><button class="btn-volver-comprar"><h3 class="text-btn-volver-comprar">VOLVER A COMPRAR</h3></button></div>
            </div>
            
        </div>
        <div style="width: 70%" class="d-flex justify-space-between">
                <h3 class="title-fecha" >24 de septiembre 2022 </h3>
                <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
            </div>
            <v-img width="80%"  src="../assets/IconosNew/Iconos/Miscela. Linea.png"></v-img>
        <div class="grid-cont">
            <div class="img-card-izquierda" style="background-color: black; width: 100%; height: 100%">

            </div>

            <div class="columna21">
                <div class="d-flex flex-column">
                    <h2>Café</h2>
                <p>Lorem ipsum dolor sit amet elit.</p>
                <v-card-actions style="padding:2px">
                    <div class="d-flex flex-column" style="width:100%">
                        <div style="width: 100%;  gap: 30px" class="d-flex flex-row justify-start">
                            <button class="button">
                                <h3 class="h3-button">45ml</h3>
                            </button>
                            <button class="button">
                                <h3 class="h3-button">75ml</h3>
                            </button>
                        </div>

                    </div>
                </v-card-actions>
                </div>
                <div class="precio ml-15">
                <h3>$0.00</h3>
                <div class="botonx"><button class="btn-volver-comprar"><h3 class="text-btn-volver-comprar">VOLVER A COMPRAR</h3></button></div>
            </div>
            </div>

        </div>
        <div style="width: 70%" class="d-flex justify-space-between">
                <h3 class="title-fecha" >24 de septiembre 2022 </h3>
                <div class="botonx"><button><v-icon>mdi-close</v-icon></button></div>
            </div>
            <v-img width="80%"  src="../assets/IconosNew/Iconos/Miscela. Linea.png"></v-img>
        <div class="grid-cont">
            <div class="imagen-plato1" style="background-color: black; width: 100%; height: 100%">

            </div>

            <div class="columna2">
                <h2>Ñoquis</h2>
                <p>Lorem ipsum dolor sit amet elit.</p>
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
                        <div class="mt-2 mb-2" >
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
                            </div>
                    </div>
                </v-card-actions>
            </div>
            <div class="precio">
                <h3>$0.00</h3>
                <div class="botonx"><button class="btn-volver-comprar"><h3 class="text-btn-volver-comprar">VOLVER A COMPRAR</h3></button></div>
            </div>
            
        </div>

        </v-container>

    </div>
</template>

<script>
export default {
    name :'RegistroCompras',
    data: ()=>({
        items: [
            { title: 'Estofado de pollo' },
            { title: 'Estofado de ternera' },
            { title: 'Estofado de cordero' },
            { title: 'Crema' },
        ],
    }),
    methods: {

    }
}

</script>


<style lang="scss" scoped>

.title-fecha{
    font-family: 'red-hat';
    font-size: 20px;
    color: #9D9C9C;
}

.grid-cont {
    width:80%;
    padding: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 20% 5%;
    grid-template-rows: 150px;

}

.grid-cont .imagen-plato {
    background-image: url("../assets/ImagenesCards/SandwichJyQ.jpg");
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;


}

.columna2 {
    margin-left: 70px;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;



}
.columna21{
    margin-left: 70px;
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.columna2 h2 {
    font-family: 'red-hat';
    font-size: 20px;
    font-weight: bolder;
    color: black;

}

.columna2 p {
    font-family: 'red-hat';
    color: grey;
    font-size: 15px;
    font-weight: lighter;

}
.columna21 h2 {
    font-family: 'red-hat';
    font-size: 20px;
    font-weight: bolder;
    color: black;

}

.columna21 p {
    font-family: 'red-hat';
    color: grey;
    font-size: 15px;
    font-weight: lighter;

}

.botonera {
    padding: 0;
    border: 1px solid black;
    width: 25%;
    height: 100%;
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
    width: 40%;
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

.precio {
    display: flex;
    flex-direction: row;
    gap: 50px;
    grid-column: 3/4;
    grid-row: 1/2;


}

.precio h3 {
    font-family: 'red-hat';
    font-style: italic;
    font-weight: 400;
    margin-top: 25px;
}

.botonx {
    display: flex;
    .btn-volver-comprar{
            height: 51px;
    width: 202px;
    background-color: black;
    }
    .text-btn-volver-comprar{
        font-family: 'red-hat';
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 3px;
        color: white;
    }
    .botonx button {
        grid-row: 1/2;
        place-items: end end;
    }
}

.subtotal h1 {
    font-family: 'red-hat';
    letter-spacing: -0.015em2;
    width: 50%;
    display: flex;
    flex-direction: row;
    color: black;
    align-items: center;
}

.iniciarCompra {
    padding: 55px 0px 55px 0px;
}

.iniciarCompra button {
    background-color: black;
    justify-content: center;
    display: flex;
    color: white;
    align-items: center;
    padding: 14px 42px 14px 42px;

}

.iniciarCompra button p {
    font-size: 20px;
    font-weight: 500;
    font-family: 'red-hat';
    margin-bottom: 0;

}

.button {
    width: 100px;
    border: 1px solid black;
}

.h3-button {
    font-weight: 500;
    font-family: 'red-hat';
    font-style: italic;
    font-size: 18px;
    margin-top: 3px;
}

.button:hover {
    background-color: black;
    color: white;
    transition: .5s;

}

.img-card-izquierda {
    background-image: url('../assets/ImagenesCards/caf{e.jpg');
    background-size: 100%;
    background-position: center;
    background-size: cover;
    grid-column: 1/2;
    grid-row: 1/2;

}

.imagen-plato1 {
    background-image: url("../assets/ImagenesCards/ñoquis.jpg");
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;
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
    justify-content: space-around;
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
</style>