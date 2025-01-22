<script>
export default {
    methods: {
        inicio() {
            this.$router.push('/')
        },
        login() {
            this.$router.push('/Login')
        },
        register() {
            this.$router.push('/register')
        },
    }
}
</script>

<template>
    <title>Contacto</title>

    <div class="nav">
        <a href="" @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <button id="register" type="submit" @click="register">Registrarse</button>
        <button id="iniciar" type="submit" @click="login">Iniciar sesión</button>
        <p>El transporte, más cerca</p>
    </div>

    <center>
        <section>
            <h1>Contacto</h1><br/>

            Nuestro principal contacto será el correo electrónico dillangb230506@gmail.com.<br/><br/>

            También estará disponible el número de teléfono +57 311 601 6034<br/><br/>

            En todas las redes sociales como @TransportNow<br/><br/>

            <font-awesome-icon :icon="['fab', 'facebook']" class="social" />
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="social-1" />
            <font-awesome-icon :icon="['fab', 'github']" class="social-2" />
            <font-awesome-icon :icon="['fab', 'twitter']" class="social-3" />
            <font-awesome-icon :icon="['fab', 'instagram']" class="social-4" />
            <font-awesome-icon :icon="['fab', 'linkedin']" class="social-5" />

            <h2>Transport Now</h2>
        </section>
    </center>

</template>

<style scoped>
.nav {
  background-color: #083D77;
  height: 130px;
  width: 100%;
  position: relative;
}

section {
    margin-top: 50px;
    width: 1000px;
    height: 800px;
    margin-left: 20px;
    font-size: 22px;
}

#logo {
    margin: 10px;
    height: 110px;
    width: 115px;
    border-radius: 20px;
    position: absolute;
}

h1 {
    color: #083D77;
}

h2 {
    font-size: 40px;
    color: #083D77;
}

p {
    color: #ffffff;
    position: relative;
    padding-left: 1550px;
    bottom: 60px;
    font-size: 20px;
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

.social, .social-1, .social-2, .social-3, .social-4, .social-5 {
    font-size: 100px;
    padding: 50px;
    cursor: pointer;
    color: black;
}

.social:hover {
    color: #0052af;
}

.social-1:hover {
    color: #2eb413;
}

.social-2:hover {
    color: rgb(99, 10, 99);
}

.social-3:hover {
    color: #428fe0;
}

.social-4:hover {
    color: #dd4319;
}

.social-5:hover {
    color: #00408a;
}
</style>