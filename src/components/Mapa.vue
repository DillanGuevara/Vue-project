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
    <title>Mapa</title>

    <div class="nav">
        <a href="" @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <button id="register" type="submit" @click="register">Registrarse</button>
        <button id="iniciar" type="submit" @click="login">Iniciar sesión</button>
        <p>El transporte, más cerca</p>
    </div>

    <center>
        <div class="map">
            <h1>Panamericana</h1><br/>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26736.177945224495!2d-75.5104214149952!3d5.04579853185302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47657fee47c905%3A0xc160e7ee1341a3c2!2sAbai!5e0!3m2!1ses!2sco!4v1735051005341!5m2!1ses!2sco"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>

        <div class="map">
            <h1>Arboleda</h1><br/>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.78250013031135!2d-75.50262171775101!3d5.0615512555367586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f85df1d0c49%3A0xad31d4492ebffdf3!2sArboleda%20del%20Campin!5e0!3m2!1ses!2sco!4v1735051929683!5m2!1ses!2sco"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
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

h1 {
    font-size: 40px;
    color: #083D77;
    position: relative;
    margin-top: 30px;
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
</style>