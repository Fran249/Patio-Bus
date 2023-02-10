<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" :xs="item.xs" :sm="item.sm" :md="item.md" :xl="item.xl" v-for="(item, i) in items"
                    :key="i">
                    <v-img :src="item.src" contain width="250" height="250">
                        <div v-bind:style="{ 'background-image': `url(${item.src})`, 'background-size': 'cover' }"
                            class="img">
                            <div class="checked d-flex flex-row justify-end" v-if= "selected.src == item.src">
                                <v-icon class="mt-5 mr-5" style="background-color: #2B9C2F; border-radius: 50%; padding: 5px; " color= "white" >
                                    mdi-check-bold
                                </v-icon>
                            </div>
                            <div class="btn">
                                <button>
                                    <v-icon style="color: white">
                                        mdi-delete
                                    </v-icon>
                                </button>
                                <button @click="selectImg(item)">
                                    <v-icon style="color:white">
                                        mdi-check-bold
                                    </v-icon>
                                </button>
                            </div>

                        </div>
                    </v-img>

                </v-col>
            </v-row>
            <div class="btn-upload mt-15">
                <button class="boton-upload d-flex flex-row justify-center align-center" >
                    <h3 class="upload-text"> <strong> SUBIR IMAGEN </strong> </h3>
                    <v-icon color="black" size="30" > mdi-file-upload</v-icon>



                </button>
            </div>
        </v-container>

    </div>


</template>


<script>
export default {
    name: 'CardsAdminAgregar',
    data: () => ({
        selected:{},
        items: [
            {
                src: require("../assets/ImagenesCards/SandwichMila.jpg"),
                color: "#333",
                title: "Entradas",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Entradas'
            },
            {
                src: require("../assets/ImagenesCards/Ravioles.jpg"),
                color: "#333",
                title: "Carnes",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Carnes'
            },
            {
                src: require("../assets/ImagenesCards/ImgCardHome/bebidas.jpg"),
                color: "#333",
                title: "Guarniciones",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Guarniciones'
            },
            {
                src: require("../assets/ImagenesCards/ImgCardHome/pastas.jpg"),
                color: "#333",
                title: "Pastas",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Pastas'
            },
            {
                src: require("../assets/ImagenesCards/ImgCardHome/entradas.jpg"),
                color: "#333",
                title: "Sandwiches",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Sandwiches'
            },
            {
                src: require("../assets/ImagenesCards/ImgCardHome/empanadas.jpg"),
                color: "#333",
                title: "Empanadas",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Empanadas'
            },
            {
                src: require("../assets/ImagenesCards/Ensalada2.jpg"),
                color: "#333",
                title: "Tartas",
                xs: "12",
                sm: "6",
                md: "3",
                xl: "3",
                route: '/Tartas'
            },


        ],
    }),
    methods:{
        selectImg(item){
            console.log(item)
            this.selected = item
        }
    }
}

</script>
<style lang="scss" scoped>
.img {
    width: 100%;
    height: 100%;
}
.img:hover .btn{
    transition: 0.5s;
    opacity: 1;
}

.btn {opacity: 0;
    background-color: rgba(29, 26, 26, 0.5);
    display: flex;
    justify-content: flex-end;
    height: 20%;
    width: 100%;
    position: absolute;
    gap: 15px;
    bottom: 0px;
    right: 0px;
    border-radius: 0;

}

.btn-upload {
    width: 250px;
    height: 50px;

}

.upload-text {
    color: black;
    margin-bottom: 0%;
    font-family: 'red-hat';
    font-size: 16px;
    font-weight: bolder;
    

}

.boton-upload {
    border: 1px solid black;
    border-bottom: 3px solid black;
    width: 100%;
    height: 100%;
}
.checked{
    height: 80%;
    width: 100%;
    align-items: flex-start;
}
</style>