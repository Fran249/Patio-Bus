<template>
    <div>
    <NavBar/>
    <MiPefilComp/>
    <FooterVue/>
    </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import FooterVue from '@/components/FooterVue.vue';
import MiPefilComp from '@/components/MiPerfilComp.vue';
export default{
    name: 'MiPerfil',
    components: {
        NavBar,
        FooterVue,
        MiPefilComp
    },
    data: ()=>({

    }),
    methods:{

    }
}

</script>