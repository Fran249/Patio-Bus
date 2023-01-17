<template>
  <div>
  
<FooterVue />
</div>
</template>

<script>
 
  import FooterVue from '@/components/Footer.vue';
  export default {
    name: 'HomeView',
    data: ()=>({
      width: window.innerWidth
    }),
    components: {   
      FooterVue
    },
  }
</script>
