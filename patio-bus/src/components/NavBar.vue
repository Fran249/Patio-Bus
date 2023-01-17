<template>
    <div style="heigth: 100vh">
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
                <v-img src="../assets/navDerecha.png" height="100vh">
 
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data: ()=>({

    }),

}


</script>


<style>

.nav-izquierda{
    width: 100%;
    height: 100vh;
    background-color: black;
    display: grid;
    place-content: center;
   
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

</style>
