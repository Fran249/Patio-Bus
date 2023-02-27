<template>
<div>
  <div class="d-flex flex-row justify-center" style="width: 100%">
              <h3>MENÚ</h3>
            </div>
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
      <div v-if="$route.path == '/Bebidas' || $route.path == '/Aperitivos&Tragos' || $route.path == '/vinosBlancos' || $route.path == '/vinosTintos'  " class="d-flex flex-row justify-center">
          <button>
            <h5 v-bind:class="{exact_active: $route.path == '/vinosBlancos' || $route.path == '/vinosTintos'}" @click="active = true">
              VINOS
            </h5>
          </button>
          <v-breadcrumbs
          divider=" "
          v-for="(item, i) in subRoutes "
          :key="i"
        >
          <v-breadcrumbs-item :href="item.route">
            <h5 v-bind:class="{exact_active: $route.path == item.route}">
          {{item.title}}
            </h5>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
        </div>
        <transition name="fade">
            <div v-if="active == true" class="d-flex flex-row justify-center">
            <v-breadcrumbs
            divider=" "
            v-for="(item, i) in subRoutesVinos "
            :key="i"
          >
          <v-breadcrumbs-item :href="item.route">
              <h5 v-bind:class="{exact_active: $route.path == item.route}">
            {{item.title}}
              </h5>
            </v-breadcrumbs-item>
          </v-breadcrumbs>
          </div>
        </transition>
</div>


</template>


<script>
export default{
    name: 'LinksMenus',
    data: ()=>({
      active: false,
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
      ],
      subRoutes: [
        {
          title: 'APERITIVOS & TRAGOS',
          route: '/Aperitivos&Tragos'
        },
      ],
      subRoutesVinos: [
        {
          title: 'BLANCO',
          route: '/vinosBlancos'
        },
        {
          title: 'TINTO',
          route: '/vinosTintos'
        }
      ]
    }),
    beforeMount(){
      if(this.$route.path == '/vinosTintos' || this.$route.path == '/vinosBlancos'){
          this.active = true
        }
    }

}

</script>


<style scoped>

.fade-enter-active, .fade-leave-active {
 transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
 opacity: 0
}
h3{
  font-family: 'Quesha';
  font-size: 80px;
  color: #000;
}

h5{
 color: black;
  font-family: 'red-hat';
  font-size: 15px;
}


.exact_active{
 font-weight: bolder;
}


</style>