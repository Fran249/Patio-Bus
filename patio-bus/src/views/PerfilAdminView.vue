<template>   
    <div>
        <NavBar/>

        <h3 class="adminis">ADMINISTRADOR</h3>
        <PerfilAdminComp/>

        <v-container>

</v-container>
<FooterVue/>
    </div> 
</template>


<script>
import FooterVue from '@/components/FooterVue.vue';
import NavBar from '@/components/NavBar.vue';
import PerfilAdminComp from '@/components/PerfilAdminComp.vue';

export default {
    name : 'PerfilAdminView',
    components: {
    FooterVue,
    NavBar,
    PerfilAdminComp
},
    data: ()=>({
   
    }),

}

</script>


<style lang="scss" scoped>
.adminis{
    font-family: 'Quesha';
  text-align: center;
  font-size: 80px;
}

</style>