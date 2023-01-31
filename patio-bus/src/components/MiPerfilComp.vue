<template>
    <div >
    <v-container>
       
        <v-row>
            <LinksPerfilCompra/>
            <v-col cols="6" xl="6" lg="6" md="6">
                <div style="width: 100%" class="d-flex justify-center ">
                    <div class="d-flex flex-row align-center mr-10" >
                    <div class="img-negra">

                    </div>
                    <div class="img-avatar">
                        <button class="btn-img">
                            <h3 class="title-img">SUBIR IMAGEN</h3>
                            <v-icon color="white">mdi-upload</v-icon>
                        </button>
                    </div>
                </div>
                </div>
            </v-col>
            <v-col cols="6" xl="6" lg="6" md="6">
                <div style="width: 100%" class="d-flex justify-center ml-10 ">
                <form action="
                " class="form-container">
                <h3 >¡COMPLETÁ TUS DATOS!</h3>
                <v-text-field type="text" label="Nombre y Apellido*" color="grey" v-model="nombreYapellido" class="labels" @click="vaciarNombre()"></v-text-field>
                <v-text-field type="text" label="DNI*" color="grey" v-model="dni"  class="labels" @click="vaciarDni()"></v-text-field>
                <v-text-field type="text" label="Dirección*" color="grey" v-model="direccion" class="labels" @click="vaciarDireccion()"></v-text-field>
                <v-text-field type="text" label="Teléfono de contacto*" color="grey" v-model="telefonoContacto" class="labels" @click="vaciarTelefono()"></v-text-field>
                    <button class="btn">
                        <h3>GUARDAR CAMBIOS</h3>
                    </button>
                </form>
            </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container style=" margin-top: 150px;">
        <p class="datos-solic">
            ¿Por qué solicitamos estos datos? 
        </p>
        <p class="datos-solic">
        Tus datos personales se toman sólo con los fines de cumplir con el giro comercial de la empresa y hacer un correcto seguimiento a tu pedido. Es importante que los datos que ingreses sean verdaderos por si necesitamos contactarte para validar datos de tu compra. Recordá que deberás ser mayor de edad.
        </p>
        <p class="datos-solic">
        Cada usuario dispondrá en todo momento de los derechos de acceso a la información, rectificación y supresión de sus datos personales conforme a la Ley Nº 25.326 sobre protección de datos de carácter personal.  El usuario tiene el derecho gratuito de ejercer el acceso, rectificar y suprimir sus datos. La Dirección Nacional de Protección de Datos Personales, órgano de control de la Ley Nro. 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan en relación con el incumplimiento de las normas sobre protección de datos personales.
        </p>
    </v-container>
    </div>
</template>

<script >

export default{
    name:'MiPerfilComp',

    data: ()=>({
        nombreYapellido: '',
        dni: '',
        direccion: '',
        telefonoContacto: ''
    }),
    methods:{

    },
    mounted(){

    }
}
</script>


<style lang="scss" scoped>
/* Rectangle 96 */
.btn-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: black;
    height: 37px;
    width: 190px;
}
.btn {
    /* Rectangle 92 */
width: 303.18px;
height: 60.82px;
background: #000000;
border-radius: 0px;

}
button h3{
    font-family: 'red-hat';
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
}
.img-negra{
 /* Rectangle 95 */


width: 320px;
height: 500px;

z-index: 1;
background: #000000;

}
.img-avatar{

width: 320px;
height: 250px;
z-index: 200;
position: absolute;
margin-left: 200px;
background: url(../assets/ImagenesCards/EnsaladaCesar.jpg);
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
}
.img-avatar:hover{
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4598214285714286) 0%), url(../assets/ImagenesCards/EnsaladaCesar.jpg);
}
.v-text-field{
    padding-bottom: 50px;
    padding-right: 20px;
    padding-left: 20px;
}
.datos-solic{
    font-family: 'red-hat';
    font-size: 12px;
   
}
.form-container{
    height: 469px;
    width: 422.36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

}
.form-container h3{
 align-self: flex-start;
}
h3{
    font-family: 'Quesha';
    font-size: 30px;
    color: black;
}
.labels{
    height: 47.24px;
    width: 422.07px;
    border: 1px solid black;
    border-bottom: 3px solid black;
    font-family: 'red-hat';
    font-size: 18px;
    color: grey;
}

</style>