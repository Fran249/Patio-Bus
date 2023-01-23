<template>
    <div style="heigth: 100vh" >
        <div  style="opacity: 0 ;width: 10rem; height: 10rem; border-radius: 50%; position: absolute; bottom: 76%; left: 38% ; z-index: 100;" id="IconoAfter" >
                            <v-img src="../assets/Icono.png" contain  style=" width: 10rem ; height: 10rem;">

                            </v-img>
                        </div>
        <v-row no-gutters>
            <v-col cols="5">
                 <div class="nav-izquierda">
                       <div class="nav-izquierda-img-container">
                        <v-img src="../assets/PatioBusNavBlanco.png" width="65%" style="margin-top: 25%">

                        </v-img>
                        <v-img src="../assets/navIzquierda.png" width="45%" >

                        </v-img>
                       </div> 
                 </div>
            </v-col>

            <v-col cols="7">

                <v-img src="../assets/navDerecha.png" height="100vh" style=""  @click="scroll()">

                    <div style=" width: 100%; height: 100%; display: flex; justify-content: flex-start; align-items: flex-end; transform: translateX(-50px) ; position: absolute; " >
                        <div  style=" width: 100px; height: 100px; position: absolute ;border-radius: 50%; top: 50% ; left: 44.5%;  " class="img-logoback" id="img-logoback">
                            <v-img src="../assets/logoVacio.png" contain width="100" height="100" style=" " >
                                <div style="width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center;  " class="img-icon-flecha" id="img-logoback2">
                                     <v-img src="../assets/Icono-Flecha.png" width="30" height="30" contain >

                                     </v-img>   
                                </div>
                            </v-img>
                        </div>
                        <div  style="width: 100px; height: 100px; border-radius: 50%; position: absolute; top: 50% ; left: 44.5%;" class="img-logo" id="img-logoback1">
                            <v-img src="../assets/Icono.png" contain width="100" height="100" style="">

                            </v-img>
                        </div>
   
                    </div>
                </v-img>
            </v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: ()=>({
        percentage: '600'
    }),
    mounted(){
    window.addEventListener( "scroll", () => {
                   if ( window.scrollY > 0) {
              this.percentage =  -window.scrollY +110
              document.getElementById('img-logoback1').style.animation = "none";
            document.getElementById('img-logoback').style.animation = "none";
            document.getElementById('img-logoback').style.transition = "1s";
            document.getElementById('img-logoback1').style.transition = "1s";            
            document.getElementById('img-logoback1').style.opacity = "0";
            document.getElementById('img-logoback').style.opacity = "0";
            document.getElementById('IconoAfter').style.transition = ".5s"
            document.getElementById('IconoAfter').style.opacity = "1"

            }
            else {
              this.percentage =  -window.scrollY + 5000
              document.getElementById('img-logoback1').style.animation = "animacionLogo 4s ease-in-out infinite ";
            document.getElementById('img-logoback').style.animation = "animacionLogoBack 4s ease-in-out infinite";
              document.getElementById('img-logoback').style.transition = "1s";
            document.getElementById('img-logoback1').style.transition = "1s";            
            document.getElementById('img-logoback1').style.opacity = "1";
            document.getElementById('img-logoback').style.opacity = "1";
            document.getElementById('IconoAfter').style.opacity = "0"
            }
        }
    )
  },
  methods: {
    scroll(){
        window.scrollTo(0, 500)



    }
  }
}


</script>


<style>

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
</style>
