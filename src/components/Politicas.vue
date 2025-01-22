<script>
export default {
    methods: {
        inicio() {
            this.$router.push('/inicioUsuarios')
        }
    }
}
</script>

<template>
    <title>Políticas de privacidad</title>

    <div class="nav">
        <a href="" @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <p>El transporte, más cerca</p>
    </div>

    <center>
        <h1>Políticas de privacidad</h1>

        <br/>

        <div class="pol">
            En Transport Now, nos comprometemos a proteger la privacidad de nuestros usuarios.
            Esta política de privacidad describe cómo recopilamos, usamos, almacenamos y
            protegemos tu información personal cuando visitas y utilizas nuestro sitio web.<br/>

            <br/><br/>

            <b>Información que recopilamos</b><br/>
            Recopilamos información personal que tú mismo proporcionas al registrarte, suscribirte
            a boletines informativos, realizar compras, o interactuar con nuestras funciones, como:<br/>

            <li>Nombre y apellidos.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Información de contacto, como teléfono</li>
            <li>Detalles de pago (cuando corresponda).</li>
            <li>Preferencias e intereses relacionados con nuestros productos y servcios.</li>

            <br/><br/>

            También recopilamos información automáticamente mediante cookies y tecnologías similares, como:<br/>

            <li>Dirección IP.</li>
            <li>Navegador y sistema operativo.</li>
            <li>Páginas visitadas y tiempo de navegación.</li>

            <br/><br/>

            <b>Uso de la información</b><br/>
            Utilizamos la información recopilada para los siguientes fines:<br/>

            <li>Proporcionar y mejorar nuestros servicios.</li>
            <li>Personalizar tu experiencia en el sitio.</li>
            <li>Enviar comunicaciones relevantes, como ofertas y actualizaciones.</li>
            <li>Procesar transacciones y bridar soporte técnico.</li>
            <li>Cumplir con requisitos legales y garantizar la seguridad del sitio.</li>

            <br/><br/>

            <b>Protección de la información</b><br/>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
            contra accesos no autorizados, pérdida, uso indebido o alteración. Sin embargo, ningún
            sistema es completamente seguro, por lo que no podemos garantizar una protección absoluta.<br/>

            <br/><br/>

            <b>Compartición de la información</b><br/>
            No vendemos ni alquilamos tu información personal a terceros. Podemos compartirla con:<br/>

            <li>
                Proveedores de servicios que nos asisten en nuestras operaciones, siempre bajo estrictas
                obligaciones de confidencialidad.
            </li>
            <li>Autoridades si es requerido por la ley.</li>

            <br/><br/>

            <b>Tus derechos</b><br/>
            Tienes derecho a:<br/>

            <li>Acceder, corregiro o eliminar tu información personal.</li>
            <li>Retirar tu consentimiento para el uso de tus datos.</li>
            <li>Solicitar la limitación del procesamiento de tu información.</li>

            Para ejercer estos derechos, puedes contactarnos en: dillangb230506@gmail.com<br/>

            <br/><br/>

            <b>Cambios en la política de privacidad</b><br/>
            Nos reservamos el derecho de actualizar esta política en cualquier momento. Los cambios serán
            publicados en esta página con una fecha de actualización revisada.            

            <br/><br/><br/>
        </div>
    </center>
</template>

<style scoped>
.nav {
  background-color: #083D77;
  height: 130px;
  width: 100%;
  position: relative;
}

.map {
    height: 650px;
}

#logo {
    margin: 10px;
    height: 110px;
    width: 115px;
    border-radius: 20px;
}

h1 {
    font-size: 40px;
    color: #083D77;
    margin-top: 30px;
}

p {
    color: #ffffff;
    position: absolute;
    padding-left: 1600px;
    bottom: 10px;
    font-size: 20px;
}

.pol {
    color: black;
    font-size: 20px;
    width: 1000px;
}

b {
    margin: 0;
}
</style>