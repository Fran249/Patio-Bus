<template>
    <v-snackbar color="transparent" elevation="0" v-model="value">
        <div class="notif-container">
            <div class="div-border">
                <p>Agregado con exito!</p>
                <v-img width="140" height="50" contain src="../assets/ImagenesCards/Iconos/4.png">

                </v-img>
            </div>
        </div>
    </v-snackbar>
</template>

<script>
import store from '@/store';



export default {
    name: 'addedToCart',
    data:()=>({

    }),
computed: {
      value: {
           get(){
              return store.state.addedToCart
           },
           set(value){
             store.commit('addedToCart', value)
           }
        }
    }
}

</script>

<style lang="scss" scoped>
    .notif-container{
        background-color: white;
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    .div-border{

        display: flex;
        padding: 10px;
       border: 1px solid black;  
       justify-content: center;
       align-items: center;
       p{

        margin: 0;
        color: black;
        font-family: 'red-hat';
        font-weight: 500;
        color: #111
       }
    }

</style>