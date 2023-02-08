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
                <div dark class="dividerh"> </div>
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

                </v-row>

            </v-row>

        </v-container>

    </div>
</template>

<script >

export default {
    name: 'PerfilAdminComp',

    data: () => ({

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
    font-weight: 700;
    color: #666768;
}

.iconos {
    margin-right: -5%;
}
.dividerh{
    height: 2px;
    background-color: #9D9C9C;
    width: 100% ;
}
</style>