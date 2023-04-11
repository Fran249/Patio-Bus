<template>
          <v-container style="display: flex ; justify-content: center;">
        <v-breadcrumbs
  divider=" "
  class="breadcrumbs"
>
<v-breadcrumbs-item href="/Infusiones" >
  <h5  v-bind:class="{exact_active: $route.path == '/Infusiones'}">
 INFUSIONES
  </h5>
</v-breadcrumbs-item>
<v-breadcrumbs-item href="/Snacks_Dulces">
  <h5 v-bind:class="{exact_active: $route.path == '/Snacks_Dulces'}">
 SNACKS DULCES
  </h5>
</v-breadcrumbs-item>
</v-breadcrumbs>
      </v-container>


</template>


<script>
export default{
    name: 'LinksInfuSnacks',
    data: ()=>({

    })
}

</script>


<style scoped>



h5{
 color: black;
  font-family: 'red-hat';
}


.exact_active{
 font-weight: bolder;
}

@media screen and (max-width: 750px){
  .breadcrumbs{
    justify-content: center;
  }
}

</style>