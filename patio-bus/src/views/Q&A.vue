<template>
    <div>
      <v-container>
        <h4>¿Tengo que registrarme para comprar?</h4>
        <p>Es necesario que te registres para comprar en muchogusto.com. Simplemente te pediremos al momento de comprar
            un
            mail, nombre, apellido, DNI y un teléfono para poder hacerle un correcto seguimiento a tu pedido. Es
            importante
            que los datos que ingreses sean verdaderos por si necesitamos contactarte para validar datos de tu compra.
            Recordá que deberás ser mayor de edad. Además, luego podrás ver tus pedidos desde la sección “Registro de
            compra”.</p>
        <h4>¿Están protegidos mis datos personales?</h4>
        <p> Sí, cada usuario dispondrá en todo momento de los derechos de acceso a la información, rectificación y
            supresión
            de sus datos personales conforme a la Ley Nº 25.326 sobre protección de datos de carácter personal. Tus
            datos
            personales se toman solo con los fines de cumplir con el giro comercial de la empresa. El usuario tiene el
            derecho gratuito de ejercer el acceso, rectificar y suprimir sus datos. La Dirección Nacional de Protección
            de
            Datos Personales, órgano de control de la Ley Nro. 25.326, tiene la atribución de atender las denuncias y
            reclamos que se interpongan en relación con el incumplimiento de las normas sobre protección de datos
            personales.</p>
        <h4>¿Es seguro comprar en patiobus.com?</h4>
        <p>Es muy seguro comprar en patiobus.com, contamos con altos estándares de seguridad según las buenas prácticas
            de
            los retails internacionales. Utilizamos servidores certificados, plataformas con estándares SSL (Secure
            Socket
            Layer) para realizar transacciones electrónicas seguras, lo que significa que toda tu información personal
            no
            podrá ser leída ni capturada por terceros mientras viaja por la red.</p>
        <h4>¿Cómo hago para reclamar o cancelar un pedido?</h4>
        <p>Por cualquier reclamo o cancelación respecto de tu pedido, debés comunicarte vía WhatsApp al 02284-577478.
            Todo
            tipo de <b>rembolso</b> será otorgado mediante códigos de descuento por el valor total de su compra para ser
            usado
            nuevamente en tu próximo pedido.</p>
        <h4> Olvidé mi clave. ¿Cómo hago para obtener una nueva clave?</h4>
        <p> Si generaste una contraseña y no la recordás, podés reemplazarla por una nueva fácilmente:
        <ol>
            <li>Hacé clic en “Ingresar con mail y contraseña”</li>
            <li>Seleccioná “¿Olvidaste tu contraseña?”</li>
            <li> Ingresá tu mail. Accede al link que te enviamos.</li>
            <li> Registrá la nueva contraseña.</li>
        </ol>
        </p>
        <h4>Días y horarios de atención</h4>
        <p>Podrás realizar tu pedido durante el periodo de atención correspondiente. Martes a Domingo de 6:00 a 21:00hs.
        </p>
      </v-container>
      <FooterVue />
    </div>
</template>

<script>
import FooterVue from '@/components/Footer.vue';
export default {
    name: 'Q&AView',
    data: () => ({
        width: window.innerWidth
    }),
    components: {
    FooterVue,
    },
}
</script>
