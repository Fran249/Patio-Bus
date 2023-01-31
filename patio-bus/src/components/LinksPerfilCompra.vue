<template>
<div>
    <div class="d-flex justify-center">
        <div class="d-flex flex-row justify-center" style="width: 43% ;">
            <h3>¡HOLA</h3><v-img contain class="v-image" height="100px" src="../assets/IconosNew/Iconos/164-waving-hand-emoji-coloring-page.png"></v-img>
            <h3>{{nombre }}</h3>
        </div>
    </div>
          <v-container style="display: flex ; justify-content: center;">

        <v-breadcrumbs
  v-for="(item, i) in items "
  
  :key="i"
  
>


<v-breadcrumbs-item  :href="item.route"> 
<div style="width: 100%" class="d-flex flex-row  align-center">
    <h5 class="mt-3" v-bind:class="{exact_active: $route.path == item.route , registroCompra: item.title == 'REGISTRO DE COMPRAS'}">
 
 {{item.title }}
 
   </h5>

</div>
<div vertical dark class="divider" v-if="item.title == 'MI PERFIL'"></div>
</v-breadcrumbs-item>

</v-breadcrumbs>
      </v-container>
</div>
</template>

<script>
export default {
    name: 'LinksPerfilCompra',
    data: ()=>({
        items: [
        {title: 'MI PERFIL',
          route: '/MiPerfil'},
          {title: 'REGISTRO DE COMPRAS',
          route: '/RegistroComprasUser'},
        ],
        nombre: 'LAURA!'
    }),
    methods:{

    },
}
</script>


<style lang="scss" scoped>

ul {
    padding-left: 0;
}
.divider{
    height: 30px;
    width: 2px;
    background-color: #000;
}
h3{
  font-family: 'Quesha';
  font-size: 80px;
  color: #000;
}

h5{
    width: 90px;
 color: black;
  font-family: 'red-hat';
  font-size: 15px;
}
.registroCompra{
    width: 180px;
    padding-left: 0;
}

.exact_active{
 font-weight: bolder;
}
.v-image{
    width: 50px;
}
</style>