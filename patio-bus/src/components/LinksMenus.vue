<template>
          <v-container style="display: flex ; justify-content: center;">
        <v-breadcrumbs
  divider=" "
  v-for="(item, i) in items "
  :key="i"
>
<v-breadcrumbs-item :href="item.route">
  <h5 v-bind:class="{exact_active: $route.path == item.route}">
{{item.title}}
  </h5>
</v-breadcrumbs-item>
</v-breadcrumbs>
      </v-container>


</template>


<script>
export default{
    name: 'LinksMenus',
    data: ()=>({
      items: [
        {title: 'ENTRADAS',
          route: '/Entradas'},
          {title: 'CARNES',
          route: '/Carnes'},
          {title: 'GUARNICIONES',
          route: '/Guarniciones'},
          {title: 'PASTAS',
          route: '/Pastas'},
          {title: 'SANDWICHES',
          route: '/Sandwiches'},
          {title: 'EMPANADAS',
          route: '/Empanadas'},
          {title: 'TARTAS',
          route: '/Tartas'},
          {title: 'PIZZAS',
          route: '/Pizzas'},
          {title: 'POSTRES',
          route: '/Postres'},
          {title: 'BEBIDAS',
          route: '/Bebidas'},
      ]
    })
}

</script>


<style scoped>



h5{
 color: black;
  font-family: 'red-hat';
  font-size: 15px;
}


.exact_active{
 font-weight: bolder;
}


</style>