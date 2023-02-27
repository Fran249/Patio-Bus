<template>
    <v-snackbar color="transparent" elevation="0" v-model="value" timeout="1000">
        <div class="notif-container">
            <div class="div-border">
                <p>Agregado con exito!</p>
                <v-img width="130" height="30" contain src="../assets/ImagenesCards/Iconos/4.png" class="img">

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
        width: 360px;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    .div-border{
        width: 350px;
        padding: 10px;
       border: 1px solid black;  
        display: grid;
        grid-template-columns: 300px 35px;
        grid-template-rows: 1fr;
       p{
        grid-column: 1/2;
        grid-row: 1/2;
        margin-bottom: 0;
        color: black;
        font-family: 'red-hat';
        font-weight: 500;
        color: #111;
        place-self: center;
       }
       .img{
        margin-right: 30px;
        grid-column: 2/3;
        grid-row: 1/2;
       }
    }

</style>