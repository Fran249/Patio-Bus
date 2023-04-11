<template>
<div>
  <div class="cont-links" style="width: 100%">
              <h3>MENÚ</h3>
            </div>
          <v-container class="sub-cont-links">

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
        <div class="menu-mobile">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="transparent"
                  v-bind="attrs"
                  v-on="on"
                  elevation="0"
                >
                  <h5 class="mt-3">Categorias</h5>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title @click="$router.push(item.route)"><h5>{{ item.title }}</h5></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
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

.menu-mobile{
  display: none;
}
.cont-links{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sub-cont-links{
  display: flex ;
  justify-content: center;
}
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

@media screen and (max-width: 600px){
  .menu-mobile{
  display: block;
}
.sub-cont-links{
  display: none;
}
}

</style>