<script>
export default {
    methods: {
        inicio() {
            this.$router.push('/inicioUsuarios')
        },
        pol() {
            this.$router.push('/pol')
        }
    }
}
</script>

<template>
    <title>Configuración de cookies</title>

    <div class="nav">
        <a href="" @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <p>El transporte, más cerca</p>
    </div>

    <center>
        <h1>Configuración de cookies</h1>

        <br/>

        <div class="pol">
            Utilizamos cookies en este sitio web para mejorar tu experiencia de navegación, analizar el tráfico y ofrecer contenido y anuncios personalizados. Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con nuestra política.<br/>

            <br/><br/>

            <b>¿Qué son las cookies?</b><br/>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus preferencias, mejorar la funcionalidad del sitio y mostrarte contenido relevante en futuras visitas.<br/>

            <br/><br/>

            <b>Tipos de cookies que usamos
            Cookies Esenciales:</b><br/>
            Estas cookies son necesarias para que el sitio web funcione correctamente y no pueden desactivarse. Incluyen cookies que permiten la autenticación y la seguridad del sitio.<br/>

            <br/><br/>

            <b>Cookies de Rendimiento:</b><br/>
            Nos ayudan a entender cómo interactúan los visitantes con el sitio, permitiéndonos optimizarlo y mejorar su funcionamiento.<br/>

            <br/><br/>

            <b>Cookies de Funcionalidad:</b><br/>
            Permiten recordar tus preferencias, como el idioma y la región, para ofrecerte una experiencia personalizada.

            <br/><br/>

            <b>Cookies de Publicidad y Marketing:</b><br/>
            Estas cookies se utilizan para mostrar anuncios relevantes según tus intereses y medir la efectividad de nuestras campañas publicitarias.

            <br/><br/>

            <b>Gestión de Cookies:</b><br/>
            Puedes gestionar tus preferencias de cookies en la configuración de tu navegador. Ten en cuenta que bloquear algunas cookies podría afectar la funcionalidad del sitio.

            <br/><br/>

            Para obtener más información, consulta nuestra Política de Cookies y <a href="" @click.prevent="pol()">Política de Privacidad.</a>

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
    position: absolute;
}

#logo-1 {
    height: 170px;
    width: 170px;
    border-radius: 20px;
    position: absolute;
    margin-left: 860px;
    margin-top: 100px;
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
    position: relative;
    padding-left: 1px;
    font-size: 20px;
    width: 90%;
}

#register {
  background-color: #083D77;
  margin-left: 550px;
  color: white;
  border: none;
  width: 120px;
  height: 129px;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  margin-top: 1px;
}

#register:hover {
    background-color: #001a35;
}

#iniciar {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 100px;
    margin-top: 1px;
    border: none;
    width: 120px;
    height: 129px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#iniciar:hover {
    background-color: #001a35;
}

h4 {
    color: black;
}
</style>