<template>
    <div style="heigth: 100vh; " >

        <v-row no-gutters>

            <v-col cols="5">

                 <div class="nav-izquierda" id="div1">
                       <div class="nav-izquierda-img-container">
                        <v-img src="../assets/IconosNew/Iconos/PatioBus-Blanco.png" class="nav-white" style="margin-top: 25%">

                        </v-img>


                            <v-img src="../assets/navIzquierda.png" class="nav-under-white">
                            
                            </v-img>
                            <div class="div-botones " id="div-botones" >
                                <v-btn icon href='https://www.instagram.com/muchogusto.info/'>
                                            <v-img src="../assets/Inst.2.png" contain class="icons"></v-img>
                                        </v-btn>   
                                <v-btn icon href="https://www.facebook.com/Mucho-Gusto-110256295138152"  >
                                    <v-img src="../assets/Fce2.png" contain class="icons" style="border-radius: 50%;"></v-img>
                                </v-btn>
                                <v-btn class="mb-15" icon href="https://www.facebook.com/Mucho-Gusto-110256295138152"  >
                                    <v-icon color="white" class="icons">mdi-google-maps</v-icon>
                                </v-btn>
                            </div>
                       </div>
                 </div>

            </v-col>

            <v-col cols="7">

                <v-img src="../assets/navDerecha.png" class="div-2"   id="div2" >
                    <div style="" class="d-flex flex-column column-icons" >
                            <!--Iniciar Sesion-->
                            <button v-if="!existeUsuario" class="buttons" style="display: grid; place-items: center; background-color : rgb(0,0,0 ,.5); width: 50%; height: 7%;"  @click="openIngreso()">
                                <v-img width="22" contain  src="../assets/IconosNew/Iconos/Icono-Usuario.Blanco.png"></v-img>
                            </button>
                            <!--Menu Desplegable-->
                            <v-menu offset-y left  v-if="existeUsuario" close-on-content-click >
                            <template v-slot:activator="{ on, attrs }">
                                <button v-on="on" v-bind="attrs"  style="display: grid; place-items: center; background-color : rgb(255,255,255 ,.7); width: 52%; height: 7%;" class="buttons">
                                    <v-img width="22" contain  src="../assets/IconosNew/Iconos/Icono-FlechaInvertida.png" ></v-img>
                                </button>
                            </template>
                            <v-list style="background-color: rgb(255, 255, 255, .7); border-radius: 1px;" >
                                <v-list-item>
                                    <router-link class="router-link" to="/MiPerfil"><h3>MI PERFIL</h3></router-link>
                                </v-list-item>
                                <v-list-item>
                                    <router-link class="router-link" to="/RegistroComprasUser"><h3>REGISTRO DE COMPRAS</h3></router-link>
                                </v-list-item>
                                <v-list-item>
                                    <router-link class="router-link" to="/PerfilAdminAgregarView"><h3>ADMIN</h3></router-link>
                                </v-list-item>
                                <v-list-item>
                                    <h3 class="cerrar-sesion" @click="cerrarSesion">CERRAR SESIÓN</h3>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                            
                            <!--Registrarte-->
                            <button  class="buttons" v-if="!existeUsuario"  style="display: grid; place-items: center ;background-color : rgb(255,255,255 ,.8) ;width: 50%; height: 7%;" @click="openRegistro()">
                                    <v-img class="ml-1" width="25" contain  src="../assets/IconosNew/Iconos/Icono-Usuario.png"></v-img>
                            </button>
                            <!--Carrito-->
                            <button class="buttons" v-if="existeUsuario"  style="display: grid; place-items: center ;background-color : rgb(255,255,255 ,.8) ;width: 52%; height: 7%;" @click="openCarrito()">
                                   <v-icon  color="#000">mdi-cart</v-icon>
                            </button>
                            <div  v-if="existeUsuario"  style="display: flex; justify-content: center; align-items: center; background-color : rgb(255,255,255 ,.8) ;  width: 52%; height: 7%;" >
                                   <h3 class="notif">{{ notif }}</h3>
                            </div>


                        </div>
                    <div   id="div3"  class="div-logo-animation">
                        
                        <div  style="position: absolute ;border-radius: 50%; top: 50% ; left: 44.5%;  "  class="img-logoback" id="img-logoback" >
                            <v-img src="../assets/IconosNew/Iconos/Icono-Flecha.Fondo.png" contain style=" width: 10rem; height: 10rem;"  >
                                <div style="width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center  "   class="img-icon-flecha" id="img-logoback2">
       
                                        <v-img src="../assets/Icono-Flecha.png"  class="img-flecha" contain  >

                                        </v-img> 

                                </div>
                            </v-img>
                        </div>

                        <div  style=" border-radius: 50%; position: absolute; top: 50% ; left: 44.5%;" @click="quitarClass()"  class="img-logo" id="img-logoback1">
                            <v-img src="../assets/IconosNew/Iconos/Icono2.png" contain  style=" width: 10rem; height: 10rem;">

                            </v-img>
                        </div>
   
                    </div>
                </v-img>
            </v-col>

        </v-row>
                               <div  style="opacity: 0 ;width: 100%; height: 10vh; border-radius: 50%; z-index: 100;" id="IconoAfter" class="icono-after">
                            <v-img src="../assets/Icono.png" contain  style=" " class="img-icon-after"  v-if="$route.fullPath == '/'">

                            </v-img>
                            <v-img src="../assets/logoVacio.png" contain  style=" " class="img-icon-after"  v-if="$route.fullPath != '/'">
                                <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                                    <a href="/" style="text-decoration: none ; color: black;" ><h3 class="text-volver" >VOLVER</h3></a>
                                </div>
                            </v-img>                                  
                        </div>
                        <v-dialog v-model="carritoCompra" hide-overlay >
                            <CarritoVue :key="componentKey"/>

                    </v-dialog>
                    <v-dialog v-model="ingreso" >
                        <IngresoComp/>
                    </v-dialog>
                    <v-dialog v-model="registro">
                        <RegistroComp/>
                    </v-dialog>
                    <addedToCart/>
    </div>
</template>

<script>
import {mapActions, mapState , mapGetters} from 'vuex'
import store from '@/store';

import { auth } from '@/firebase';


export default {
    name: "NavBar",
    data: () => ({
        percentage: "600",
        carrito: store.state.carrito,
        menuOn: false,
    }),
    beforeCreate() {
        auth.onAuthStateChanged(user => {
            const carritoLocal = localStorage.getItem(`cart/${user.uid}`);
            const carritoLocalParsed = JSON.parse(carritoLocal);
            const totalArray = carritoLocalParsed.length;
            store.commit("sendNotif", totalArray);
        });
    },
    mounted() {
        console.log(this.width)
        if(this.$route.path != '/'){
            window.scrollTo(0, 100)
        }

        if( window.innerWidth > 600){
            window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                this.percentage = -window.scrollY + 110;
                document.getElementById("div-botones").style.marginBottom = "100px";
                document.getElementById("img-logoback1").style.cursor = "auto";
                document.getElementById("div3").style.opacity = "0";
                document.getElementById("div3").style.transition = ".5s";
                document.getElementById("IconoAfter").style.transition = ".5s";
                document.getElementById("IconoAfter").style.opacity = "1";
                if(this.$route.path == '/'){
                    document.getElementById("div1").style.height = "90vh";
                document.getElementById("div2").style.height = "90vh";
                }else {
                    document.getElementById("div1").style.height = "70vh";
                document.getElementById("div2").style.height = "70vh";    
                }
                document.getElementById("div3").style.height = "100px";
                document.getElementById("div1").style.transition = ".5s";
                document.getElementById("div2").style.transition = ".5s";
                document.getElementById("div3").style.transition = ".5s";
            }
            else {
                this.percentage = -window.scrollY + 5000;
                document.getElementById("div-botones").style.marginBottom = "50px";
                document.getElementById("div1").style.height = "100vh";
                document.getElementById("div2").style.height = "100vh";
                if(this.$route.path == '/'){
                    document.getElementById("div1").style.height = "100vh";
                document.getElementById("div2").style.height = "100vh";
                }else {
                    document.getElementById("div1").style.height = "80vh";
                document.getElementById("div2").style.height = "80vh";
                }
                document.getElementById("div3").style.height = "100px";
                document.getElementById("img-logoback1").style.cursor = "pointer";
                document.getElementById("div3").style.opacity = "1";
                document.getElementById("div3").style.transition = ".5s";
                document.getElementById("div1").style.transition = ".5s";
                document.getElementById("div2").style.transition = ".5s";
                document.getElementById("img-logoback").style.transition = "1s";
                document.getElementById("img-logoback1").style.transition = "1s";
                document.getElementById("img-logoback2").style.opacity = "1";
                document.getElementById("img-logoback").style.opacity = "1";
                document.getElementById("IconoAfter").style.opacity = "0";
            }
        });
        }
    },
    methods: {
        ...mapActions(["cerrarSesion"]),
        quitarClass() {
            window.scrollTo(0, 1000);
        },
        openIngreso() {
            store.commit("toggleIngreso", true);
        },
        openRegistro() {
            store.commit("toggleRegistro", true);
        },
        openCarrito() {
            store.commit("toggleCarrito", true);
        }
    },
    updated() {
        this.carrito = store.state.carrito;
    },

    computed: {
        width: {
            get(){
                return window.innerWidth
            },
            set(){
                
            }
        },
        componentKey: {
            get() {
                return store.state.forceRenderCarrito;
            },
            set() {
                store.commit("forceRenderCarrito", +1);
            }
        },
        carritoCompra: {
            get() {
                return store.state.carrito;
            },
            set(value) {
                store.commit("toggleCarrito", value);
            },
        },
        ingreso: {
            get() {
                return store.state.ingreso;
            },
            set(value) {
                store.commit("toggleIngreso", value);
            },
        },
        registro: {
            get() {
                return store.state.registro;
            },
            set(value) {
                store.commit("toggleRegistro", value);
            },
        },
        notif: {
            get() {
                return store.state.notif;
            },
            set(value) {
                store.commit("sendNotif", value);
            }
        },
        ...mapGetters(["existeUsuario"]),
        ...mapState(["usuario"]),
    },
}


</script>


<style lang="scss" >


.notif{
    font-family: 'red-hat';
    font-size: 15px;
    font-weight: bold;

    
}

.icons{
    width:25px ;
    height: 20px;
}

.v-menu__content{
    border-radius: 1px;
    box-shadow: none;
}
.router-link h3{
    text-decoration: none;
    font-family: 'red-hat';
    color: black;
    font-size: 15px;
    color: #000;
    border-bottom: solid 0px black;


}
.router-link h3:after , .cerrar-sesion:after{
    display:block;
  content: '';
  border-bottom: solid 1px black;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.router-link h3:hover:after, .cerrar-sesion:hover:after{
    transform: scaleX(1); 
}
.cerrar-sesion{
    font-family: 'red-hat';
    color: black;
    font-size: 15px;
    cursor: pointer;
}

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #B9B1B1; 

}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D9D9D9; 
 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #D9D9D9; 
}
.text-volver{
    font-family: 'Quesha';
    font-size: 25px;
}

.v-dialog{
    width: 50vw;
    
    background-color: white;
    border-radius: 0px;
}
.icono-after{
    display: flex;
    justify-content: center;
}
.img-icon-after{

    transform: translateY(-50px);
    width: 100px;
    height: 100px;
}
body {
    scroll-behavior: smooth;
}
.nav-izquierda{
    width: 100%;
    height: 100vh;
    background-color: black;
    display: grid;
    place-content: center;
    z-index: 1;
   
}
.nav-izquierda-img-container{
    width: 100%;
    gap: 50px;
    display: grid;
    place-items: center;


}
.nav-derecha-logo-container{
    background-color: white;
    border: 1px solid red;
    border-radius: 50%;
    width: 20%;
    height: 20%;

}

.img-logo{
    animation: animacionLogo 4s ease-in-out infinite ;
    cursor: pointer;
    
}


.img-logoback{
    animation: animacionLogoBack 4s ease-in-out infinite;
}

.img-icon-flecha{
    animation: iconoFlecha 4s ease-in-out infinite;
}
.img-flecha{
    width: 50px;
    height: 50px;
}

.div-2{
    height: 100vh;
}

.div-botones{
    width: 100% ;
    display: flex;
    flex-direction: column;
    margin-left: 100px; 
    
}
.icon-google{
    width:30px ;
    height: 50px;
}
.nav-white{
    width: 65%;
}
.nav-under-white{
    width: 50%; 
}
.div-logo-animation{
    display: flex;
}
.column-icons{
position: absolute;
top:10%;
right: 0 ;
width: 10%;
height: 100%;
gap: 5px;
}

@keyframes animacionLogo {
    0%{
            transform-style: preserve-3d;
            opacity: 1;
        }
        25%{
            transform-style: preserve-3d;
            transform: rotateY(90deg);
           
        }
        50%{
            opacity: 0;
            
        }
        75%{
            transform: rotateY(180deg);
            opacity: 0;
        }
        100%{
            opacity: 1;
            transform-style: preserve-3d;
            transform: rotateY(360deg);
        }
}

@keyframes animacionLogoBack {
        0%{
            transform-style: preserve-3d;
            opacity: 0;
        }
        25%{
            transform-style: preserve-3d;
            transform: rotateY(90deg);
           
        }
        50%{
            opacity: 1;
            
        }
        75%{
            transform: rotateY(180deg);
        }
        100%{
            transform-style: preserve-3d;
            transform: rotateY(360deg);
        }
}

@keyframes iconoFlecha {
        0%{

        }
        15%{
            transform: translateY(-20px);
        }
        25%{
            transform: translateY(20px);
           
        }
        50%{
            transform: translateY(-20px);   
        }
        60% {
            transform: translateY(20px);
        }
        75%{
            transform: translateY(-20px);  
        }
        85%{
            transform: translateY(20px);
        }
        100%{
            transform: translateY(-20px);  
        }
}

@media screen and (max-width: 1400px){

    .img-logo{
        width: 100px;
        height: 100px;
    }
    .img-logoback{
        width: 100px;
        height: 100px;
    }
    .img-flecha{
        width: 35px;
        height: 35px;
    }
}

@media screen and (max-width: 600px){
    .nav-izquierda{
    width: 100%;
    height: 40vh;

   
}
.div-2{
    height: 40vh;
}
.icons{
    width:10px ;
    height: 15px;
  
}
.div-botones{
    display: flex;
    flex-direction: row;
    margin-left: 10px;
}
.nav-white{
    width: 90%;
    
}
.nav-under-white{
    width: 90%;
}
.div-logo-animation{
    display: none;
}
.column-icons{
    margin-right: 5px;
    width: 40%;
    height: 500px;
    align-items: end;
}
.buttons{
  width: 30px;
  height: 40px;
}
}
</style>
