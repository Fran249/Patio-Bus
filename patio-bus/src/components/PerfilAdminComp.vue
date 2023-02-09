<template>
    <div>
        <v-container>

            <v-row>
                <LinksPerfilAdmin />
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias">CAFETERÍA</h3>

                    </div>
                </div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left"></th>
                                <th class="text-left">NOMBRE</th>
                                <th class="text-center">ID</th>
                                <th class="text-center">STOCK</th>
                                <th class="text-center">PRECIO UD.</th>
                                <th class="text-center">EDITAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prod in cards" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.src"></v-img></td>
                                <td>{{ prod.title }}</td>
                                <td class="text-center">{{ prod.id }}</td>
                                <td class="text-center" v-if="prod.cantidad >= 1">{{ prod.cantidad }}</td>
                                <td class="text-center" v-if="prod.cantidad == 0">SIN STOCK</td>
                                <td class="text-center">$ {{ prod.precio }}</td>
                                <td class="text-center">
                                    <v-btn class="mb-5 mr-5" icon @click="cambiarBtnToImg(prod)">
                                        <v-icon color="#9d9c9c">mdi-image </v-icon>
                                    </v-btn>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToID(prod)">
                                                <v-icon color="#9d9c9c"> mdi-pencil </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnTo(prod)">
                                                <v-icon color="#9d9c9c"> mdi-identifier </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar ID</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-package-variant</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar stock</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-currency-usd</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Cambiar precio</span>
                                    </v-tooltip>
                                    <v-divider class="mt-5" vertical inset></v-divider>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 ml-3" @click="borrarCard(prod)"
                                                text icon>
                                                <v-icon color="#C10505"> mdi-delete </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Borrar articulo</span>
                                    </v-tooltip>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
              
              
            <!--  ---------------------------------------------------------------------------------------------------------------->
              
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">MENÚ</h3>

                    </div>
                </div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left"></th>
                                <th class="text-left">NOMBRE</th>
                                <th class="text-center">ID</th>
                                <th class="text-center">STOCK</th>
                                <th class="text-center">PRECIO UD.</th>
                                <th class="text-center">EDITAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prod in cards2" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.src"></v-img></td>
                                <td>{{ prod.title }}</td>
                                <td class="text-center">{{ prod.id }}</td>
                                <td class="text-center" v-if="prod.cantidad >= 1">{{ prod.cantidad }}</td>
                                <td class="text-center" v-if="prod.cantidad == 0">SIN STOCK</td>
                                <td class="text-center" >$ {{ prod.precio }}</td>
                                <td class="text-center">
                                    <v-btn class="mb-5 mr-5" icon @click="cambiarBtnToImg(prod)">
                                        <v-icon color="#9d9c9c">mdi-image </v-icon>
                                    </v-btn>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToID(prod)">
                                                <v-icon color="#9D9C9C"> mdi-pencil </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnTo(prod)">
                                                <v-icon color="#9d9c9c"> mdi-identifier </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar ID</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-package-variant</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar stock</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-currency-usd</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Cambiar precio</span>
                                    </v-tooltip>
                                    <v-divider class="mt-5" vertical inset></v-divider>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 ml-3" @click="borrarCard(prod)"
                                                text icon>
                                                <v-icon color="#C10505"> mdi-delete </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Borrar articulo</span>
                                    </v-tooltip>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-row>
    <div dark class="dividerh mt-10"> </div>
</v-row>

                <!--  ---------------------------------------------------------------------------------------------------------------->
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">COMBOS</h3>

                    </div>
                </div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left"></th>
                                <th class="text-left">NOMBRE</th>
                                <th class="text-center">ID</th>
                                <th class="text-center">STOCK</th>
                                <th class="text-center">PRECIO UD.</th>
                                <th class="text-center">EDITAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prod in cards3" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.src"></v-img></td>
                                <td>{{ prod.title }}</td>
                                <td class="text-center">{{ prod.id }}</td>
                                <td class="text-center" v-if="prod.cantidad >= 1">{{ prod.cantidad }}</td>
                                <td class="text-center" v-if="prod.cantidad == 0">SIN STOCK</td>
                                <td class="text-center">$ {{ prod.precio }}</td>
                                <td class="text-center">
                                    <v-btn class="mb-5 mr-5" icon @click="cambiarBtnToImg(prod)">
                                        <v-icon color="#9d9c9c">mdi-image </v-icon>
                                    </v-btn>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToID(prod)">
                                                <v-icon color="#9d9c9c"> mdi-pencil </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnTo(prod)">
                                                <v-icon color="#9d9c9c"> mdi-identifier </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar ID</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-package-variant</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar stock</span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 mr-5" icon
                                                @click="cambiarBtnToPrice(prod)">
                                                <v-icon color="#9d9c9c"> mdi-currency-usd</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Cambiar precio</span>
                                    </v-tooltip>
                                    <v-divider class="mt-5" vertical inset></v-divider>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="mb-5 ml-3" @click="borrarCard(prod)"
                                                text icon>
                                                <v-icon color="#C10505"> mdi-delete </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Borrar articulo</span>
                                    </v-tooltip>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>

            </v-row>

        </v-container>

    </div>
</template>

<script >

export default {
    name: 'PerfilAdminComp',

    data: () => ({
        cards: [{
            title: 'Tostado',
            src: require('../assets/ImagenesCards/Tostado.jpg'),
            id: 'P45DF32',
            cantidad: 50,
            precio: '150.00',
        },
        {
            title: 'Torta',
            id: 'P45DR713', 
            cantidad:20,
            precio: '280.00',
            src: require('../assets/ImagenesCards/Torta.jpg'),
        },
        {
            src: require('../assets/ImagenesCards/Fruta.jpg'),
            title: 'Fruta',
            id: 'T45DF42', 
            cantidad: 0,
            precio: '203.00',
        },
      

        ],
        cards2: [{
            title: 'Tallarines',
            src: require('../assets/ImagenesCards/Tallarines.jpg'),
            id: 'P45DF32',
            cantidad: 50,
            precio: '150.00',
        },
        {
            title: 'Salsa de Verdeo',
            id: 'P45DR713', 
            cantidad:20,
            precio: '150.00',
            src: require('../assets/ImagenesCards/images.jpg'),
        },

        ],
        cards3: [{
            title: 'Combo1',
            src: require('../assets/ImagenesCards/Medialunas.jpg'),
            id: 'P45DF32',
            cantidad: 50,
            precio: '150.00',
        },
        {
            title: 'Combo2',
            id: 'P45DR713', 
            cantidad:20,
            precio: '150.00',
            src: require('../assets/ImagenesCards/Cereales.jpg'),
        },
      
      

        ],

    }),
    methods: {

    },
    mounted() {

    }
}
</script>


<style lang="scss" scoped>




.divider {
    height: 100%;
    width: 3px;
    background-color: #9D9C9C
}

.trash {
    color: #C10505;
}

.categorias {
    font-family: 'red-hat';
    font-size: 18px;
    font-weight: 700;
    color: #666768;
}

.elementos {
    font-family: 'red-hat';
    font-size: 14px;
    font-weight: 700;
    color: #666768;
}

.datos {
    font-family: 'red-hat';
    font-size: 14px;
    font-weight: 400;
    color: #666768;
}

.iconos {
    margin-right: -5%;
}

.dividerh {
    height: 3px;
    background-color: #9D9C9C;
    width: 100%;
}
</style>



<!--

//*
    
</div>
<div>
<v-row class="img-cols" v-for="img in images" :key="img.src">
        <v-col>
            <v-img class="img" contain :src="img.src">

            </v-img>
        </v-col>
    </v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="elementos">NOMBRE</h3>
        <h3 class="elementos">ID</h3>
        <h3 class="elementos">STOCK</h3>
        <h3 class="elementos">PRECIO UD.</h3>
        <h3 class="elementos">EDITAR</h3>

    </div>
    

</v-row>
</div>

<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">

        <h3 class="datos">Tostado </h3>
        <h3 class="datos">P45DF32</h3>
        <h3 class="datos">50</h3>
        <h3 class="datos">$150.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Torta </h3>
        <h3 class="datos">P45DR713</h3>
        <h3 class="datos">20</h3>
        <h3 class="datos">$280.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Fruta </h3>
        <h3 class="datos">T45DF42</h3>
        <h3 class="datos">Sin stock</h3>
        <h3 class="datos">$203.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>
</v-row>
<div style="width: 100%" class="d-flex justify-start ">
    <div class="d-flex flex-row flex-start">
        <h3 class="categorias mt-15">MENÚ</h3>
    </div>
</div>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="elementos">NOMBRE</h3>
        <h3 class="elementos">ID</h3>
        <h3 class="elementos">STOCK</h3>
        <h3 class="elementos">PRECIO UD.</h3>
        <h3 class="elementos">EDITAR</h3>
    </div>

</v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Tallarines </h3>
        <h3 class="datos">P45DF32</h3>
        <h3 class="datos">50</h3>
        <h3 class="datos">$150.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Salsa de Verdeo </h3>
        <h3 class="datos">P45DR713</h3>
        <h3 class="datos">20</h3>
        <h3 class="datos">$280.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row>
<v-row>
    <div dark class="dividerh mt-10"> </div>
</v-row>
<div style="width: 100%" class="d-flex justify-start ">
    <div class="d-flex flex-row flex-start">
        <h3 class="categorias mt-15">COMBOS</h3>
    </div>
</div>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="elementos">NOMBRE</h3>
        <h3 class="elementos">ID</h3>
        <h3 class="elementos">STOCK</h3>
        <h3 class="elementos">PRECIO UD.</h3>
        <h3 class="elementos">EDITAR</h3>
    </div>

</v-row>

<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Combo 1 </h3>
        <h3 class="datos">P45DF32</h3>
        <h3 class="datos">50</h3>
        <h3 class="datos">$150.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row>
<v-row>

    <div class="d-flex flex-row flex-start justify-space-around mt-15">
        <h3 class="datos">Combo 2 </h3>
        <h3 class="datos">P45DR713</h3>
        <h3 class="datos">20</h3>
        <h3 class="datos">$150.00</h3>
        <div class="d-flex flex-row  iconos">
            <button> <v-icon> mdi-image</v-icon> </button>
            <button> <v-icon> mdi-pencil</v-icon> </button>
            <button> <v-icon> mdi-identifier</v-icon> </button>
            <button> <v-icon> mdi-package-variant</v-icon> </button>
            <button> <v-icon> mdi-currency-usd</v-icon> </button>
            <div vertical dark class="divider"> </div>
            <button> <v-icon class="trash"> mdi-trash-can-outline</v-icon> </button>
        </div>
    </div>

</v-row> -->
