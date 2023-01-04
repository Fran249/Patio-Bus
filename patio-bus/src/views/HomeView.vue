<template>
  <div>
    <CartaCompVue v-if="width < 760"/>
  <CartaCompDeskVue v-else/>
  </div>
</template>

<script>
  import CartaCompVue from '@/components/CartaComp.vue';
  import CartaCompDeskVue from '@/components/CartaCompDesk.vue';
  export default {
    name: 'HomeView',
    data: ()=>({
      width: window.innerWidth
    }),
    components: {
      CartaCompVue,
      CartaCompDeskVue,
    },
  }
</script>
