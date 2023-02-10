<template>
    <div>
<NavBar/>
<h3 class="adminis">ADMINISTRADOR</h3>
<LinksPerfilAdmin />
<FormAdminComp/>
<CardsAdminAgregar/>
<FooterVue/>
    </div>
</template>





<script>
import FooterVue from '@/components/FooterVue.vue';
import NavBar from '@/components/NavBar.vue';
import FormAdminComp from '@/components/FormAdminComp.vue';
import CardsAdminAgregar from '@/components/CardsAdminAgregar.vue';
export default {
    name: 'AgregarView',
    data: () => ({
        width: window.innerWidth
    }),
    components: {
    FooterVue,
    NavBar,
    FormAdminComp,
    CardsAdminAgregar,
    },
    }
</script>




<style lang="scss" scoped>
.adminis{
    font-family: 'Quesha';
  text-align: center;
  font-size: 80px;
}
</style>