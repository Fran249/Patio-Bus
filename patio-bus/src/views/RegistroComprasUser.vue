<template>
    <div>
    <NavBar/>
    <RegistroCompras/>
    <FooterVue/>
    </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import FooterVue from '@/components/FooterVue.vue';
import RegistroCompras from '@/components/RegistroCompras.vue'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/index";
initializeApp(firebaseConfig);
export default{
    name:'RegistroComprasUser',
    components: {
        NavBar,
        FooterVue,
        RegistroCompras
    },
    data: ()=>({

    }),
    methods:{

    }
}

</script>