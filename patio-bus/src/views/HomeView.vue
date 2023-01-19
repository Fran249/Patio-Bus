<template>
  <div>
    <NavBar/>
    <!--<FooterVue />-->
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
 
  //import FooterVue from '@/components/Footer.vue';

  export default {
    name: 'HomeView',
    components: {
      NavBar,
      //FooterVue
    },
    data: ()=>({
      width: window.innerWidth
    })
  }
    

</script>



<style>



</style>
