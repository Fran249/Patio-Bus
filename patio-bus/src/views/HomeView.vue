<template>
  <div>
    <NavBar/>


  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    name: 'HomeView',
    data: ()=>({
      width: window.innerWidth
    }),
    components: {
      NavBar
    },
  }
</script>



<style>



</style>
