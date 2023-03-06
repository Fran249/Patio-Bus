<template>
    <div>
        <v-container>

            <v-row>
                <LinksPerfilAdmin />
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias">VINOS BLANCOS</h3>

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
                            <tr v-for="prod in vinosBlancos" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
            <div style="width: 100%" class="d-flex justify-start mt-10 ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias">VINOS TINTOS</h3>

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
                            <tr v-for="prod in vinosTintos" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <v-row>
        <div dark class="dividerh mt-10"> </div>
    </v-row>

                <!--  ---------------------------------------------------------------------------------------------------------------->
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">TARTAS</h3>

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
                            <tr v-for="prod in tartas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">APERITIVOS</h3>

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
                            <tr v-for="prod in aperitivos" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">BEBIDAS</h3>

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
                            <tr v-for="prod in bebidas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">CARNES</h3>

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
                            <tr v-for="prod in carnes" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">EMPANADAS</h3>

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
                            <tr v-for="prod in empanadas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">ENTRADAS</h3>

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
                            <tr v-for="prod in entradas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
               
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">INFUSIONES</h3>

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
                            <tr v-for="prod in infusiones" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">PASTAS</h3>

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
                            <tr v-for="prod in pastas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">PIZZAS</h3>

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
                            <tr v-for="prod in pizzas" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">POSTRES</h3>

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
                            <tr v-for="prod in postres" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">SANDWICHES</h3>

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
                            <tr v-for="prod in sandwiches" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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
                <div style="width: 100%" class="d-flex justify-start ">
                    <div class="d-flex flex-row flex-start">
                        <h3 class="categorias mt-15">SNACKS</h3>

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
                            <tr v-for="prod in snacks" :key="prod.title">
                                <td><v-img width="60px" height="60px" :src="prod.url"></v-img></td>
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

import { getFirestore, doc, onSnapshot, } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {  firebaseConfig } from '../firebase/index';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default {
    name: 'PerfilAdminComp',

    data: () => ({
        vinosBlancos: [],
        vinosTintos: [],
        tartas: [],
        aperitivos: [],
        bebidas: [],
        carnes: [],
        empanadas: [],
        entradas: [],
        infusiones: [],
        pastas: [],
        pizzas: [],
        postres: [],
        sandwiches: [],
        snacks: [],
        index: 1,

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
        const docRef = doc(db, 'Productos','vinosTintos',`pagina${this.index}`,'pagina')
        const docRef1 = doc(db, 'Productos','vinosBlancos',`pagina${this.index}`,'pagina')
        const docRef2 = doc(db, 'Productos','tartas',`pagina${this.index}`,'pagina')
        const docRef3 = doc(db, 'Productos','aperitivos',`pagina${this.index}`,'pagina')
        const docRef4 = doc(db, 'Productos','bebidas',`pagina${this.index}`,'pagina')
        const docRef5 = doc(db, 'Productos','carnes',`pagina${this.index}`,'pagina')
        const docRef6 = doc(db, 'Productos','empanadas',`pagina${this.index}`,'pagina')
        const docRef7 = doc(db, 'Productos','entradas',`pagina${this.index}`,'pagina')
        const docRef9 = doc(db, 'Productos','infusiones',`pagina${this.index}`,'pagina')
        const docRef10 = doc(db, 'Productos','pastas',`pagina${this.index}`,'pagina')
        const docRef11 = doc(db, 'Productos','pizzas',`pagina${this.index}`,'pagina')
        const docRef12 = doc(db, 'Productos','postres',`pagina${this.index}`,'pagina')
        const docRef13 = doc(db, 'Productos','sandwiches',`pagina${this.index}`,'pagina')
        const docRef14= doc(db, 'Productos','snacks',`pagina${this.index}`,'pagina')

       onSnapshot(docRef, (doc) => {

               this.vinosTintos = doc.data().pagina


       })
       onSnapshot(docRef1, (doc) => {
    

                this.vinosBlancos = doc.data().pagina

        })
        onSnapshot(docRef2, (doc) => {
            

                this.tartas = doc.data().pagina

        })
        onSnapshot(docRef3, (doc) => {
            

            this.aperitivos = doc.data().pagina

    })
    onSnapshot(docRef4, (doc) => {
            

            this.bebidas = doc.data().pagina

    })
    onSnapshot(docRef5, (doc) => {
            

            this.carnes = doc.data().pagina

    })
    onSnapshot(docRef6, (doc) => {
            

            this.empanadas = doc.data().pagina

    })
    onSnapshot(docRef7, (doc) => {
            

            this.entradas = doc.data().pagina

    })

    onSnapshot(docRef9, (doc) => {
            

            this.infusiones = doc.data().pagina

    })
    onSnapshot(docRef10, (doc) => {
            

            this.pastas = doc.data().pagina

    })
    onSnapshot(docRef11, (doc) => {
            

            this.pizzas = doc.data().pagina

    })
    onSnapshot(docRef12, (doc) => {
            

            this.postres = doc.data().pagina

    })
    onSnapshot(docRef13, (doc) => {
            

            this.sandwiches = doc.data().pagina

    })
    onSnapshot(docRef14, (doc) => {
            

            this.snacks = doc.data().pagina

    })
    },
    beforeCreate(){

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
