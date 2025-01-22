<script>
export default {
    methods: {
        login() {
            this.$router.push('/Login')
        },
        login1() {
            this.$router.push('/Login')
        },
        register() {
            this.$router.push('/register')
        },
        mapa() {
            this.$router.push('/mapa')
        },
        contact() {
            this.$router.push('/contact')
        }
    }
}
</script>

<template>
    <title>Transport Now</title>

    <img src="../assets/index.jpg" alt="" id="index-image">

    <div class="nav">
        <img src="../assets/Logo.png" alt="" id="logo">
        <button id="register" type="submit" @click="register">Registrarse</button>
        <button id="iniciar" type="submit" @click="login">Iniciar sesión</button>
        <button id="mapa" type="submit" @click="mapa">Mapa</button>
        <button id="contact" type="submit" @click="contact">Contacto</button>
        <p>El transporte, más cerca</p>
    </div>

    <section>
        <center>
            <h1>Crea tu empresa transportadora</h1><br/><br/>
            <img src="../assets/Logo.png" alt="" id="logo-1">
            <button id="iniciar-1" type="submit" @click="login1">Inicia sesión para crearla</button><br/><br/>

            <div class="slide">
                <ul>
                    <li>
                        <img src="../assets/fondo-tabla.jpg" alt="">
                        <b>Las mejores soluciones para tus rutas</b>
                    </li>
                    <li>
                        <img src="../assets/fondo2.jpg" alt="">
                        <b>Organiza y opera de manera eficiente</b>
                    </li>
                    <li>
                        <img src="../assets/index3.jpg" alt="">
                        <b>Brinda el mejor servicio</b>
                    </li>
                </ul>
            </div>

            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <div>
                            <center>
                                <h2>Misión</h2><br/><br/>
                                <h4>
                                    Transport Now es una empresa de organización de rutas para que otras empresas puedan
                                    tener una mejor opción para transportar a sus trabajadores de forma rápida, ágil y
                                    segura. De manera que sus procesos sean cada vez más eficientes.
                                </h4>
                            </center>
                        </div>
                    </div>
                    <div class="card-back">
                        <img src="../assets/Mision.jpg" alt="" class="card-image">
                    </div>
                </div>
            </div>

            <div class="card-1">
                <div class="card-inner">
                    <div class="card-front">
                        <div>
                            <center>
                                <h2>Visión</h2><br/><br/>
                                <h4>
                                    Como empresa, Transport Now quiere expandirse por varios países de latinoamérica y el
                                    mundo para bridar sus servicios de transporte a diferentes empresas, y a futuro ser una
                                    de las empresas de organización de rutas más reconocidas y con más prestigio a nivel
                                    mundial.
                                </h4>
                            </center>
                        </div>
                    </div>
                    <div class="card-back">
                        <img src="../assets/vision.jpg" alt="" class="card-image">
                    </div>
                </div>
            </div>
        </center>
    </section>

    <br/><br/>

    <footer>
        <center>
            TransportNow©<br/>
            Versión 1.0<br/>
            2025
        </center>

        <font-awesome-icon :icon="['fab', 'facebook']" class="social" />
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="social-1" />
        <font-awesome-icon :icon="['fab', 'github']" class="social-2" />
        <font-awesome-icon :icon="['fab', 'twitter']" class="social-3" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="social-4" />
        <font-awesome-icon :icon="['fab', 'linkedin']" class="social-5" />
    </footer>
</template>

<style scoped>
.nav {
    background-color: #083D77;
    top: 0px;
    height: 130px;
    width: 100%;
    position: fixed;
    margin: 0;
    padding: 0;
    z-index: 10;
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
    margin-left: 25px;
}

h1 {
    font-size: 40px;
    color: #083D77;
    position: relative;
    margin-top: 300px;
}

p {
    color: #ffffff;
    position: relative;
    padding-left: 1600px;
    font-size: 20px;
    bottom: 60px;
}

#register {
    background-color: #083D77;
    color: white;
    margin-left: 550px;
    border: none;
    width: 120px;
    height: 129px;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    margin-top: 1px;
}

#iniciar-1 {
    background-color: #083D77;
    color: white;
    border-radius: 20px;
    border: none;
    width: 220px;
    height: 30px;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    margin-top: 250px;
}

#register:hover {
    background-color: #001a35;
}

.iniciar-sesion {
    position: relative;
    cursor: pointer;
}

#iniciar {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 100px;
    margin-bottom: 10px;
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

#mapa {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 100px;
    margin-bottom: 10px;
    border: none;
    width: 100px;
    height: 129px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#mapa:hover {
    background-color: #001a35;
}

#contact {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 100px;
    margin-bottom: 10px;
    border: none;
    width: 100px;
    height: 129px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#contact:hover {
    background-color: #001a35;
}

#pol {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 100px;
    margin-bottom: 10px;
    border: none;
    width: 200px;
    height: 129px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#pol:hover {
    background-color: #001a35;
}

#iniciar-1:hover {
    background-color: #001a35;
}

#index-image {
    width: 100%;
    height: 1100px;
    top: 0px;
    margin: 0;
    padding: 0;
    position: fixed;
}

section {
    position: relative;
}

h2 {
    color: black;
    position: relative;
    top: 530px;
}

h3 {
    color: black;
    position: relative;
    top: 425px;
}

footer {
    height: 130px;
    background-color: #083D77;
    color: white;
}

.social, .social-1, .social-2, .social-3, .social-4, .social-5 {
    font-size: 35px;
    cursor: pointer;
    margin-top: 15px;
    padding-left: 15px;
}

.social:hover {
    color: #000c1a;
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
    color: #000c1a;
}

.slide {
    position: relative;
    width: 800px;
    height: 600px;
    margin: 50px auto 0;
    overflow: hidden;
    top: 100px;
    border-radius: 15px;
}

.slide ul {
    display: flex;
    padding: 0;
    animation: slide 20s infinite alternate ease-in-out;
}

.slide li {
    list-style: none;
    position: relative;
}

.slide b {
    position: absolute;
    text-align: center;
    padding: 0 50px;
    right: 250px;
    top: 150px;
    color: black;
    background-color: linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 1));
    font-size: 25px;
    margin-top: 60px;
    width: 300px;
}

.slide img {
    width: 800px;
    height: 600px;
}

@keyframes slide {
    0% { margin-left: 0; }
    30% { margin-left: 0; }

    35% { margin-left: -100%; }
    65% { margin-left: -100%; }

    70% { margin-left: -200%; }
    100% { margin-left: -200%; }
}

footer {
    position: relative;
    height: 130px;
    background-color: #083D77;
    color: white;
    padding: 0;
}

.card {
    width: 700px;
    height: 500px;
    perspective: 1000px;
    top: 300px;
    right: 450px;
    background-color: transparent;
    border: none;
    position: relative;
}

.card-1 {
    width: 700px;
    height: 500px;
    perspective: 1000px;
    bottom: 200px;
    left: 450px;
    background-color: transparent;
    border: none;
    position: relative;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-1:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
}

.card-front h2 {
    top: 10px;
}

.card-front {
    background-color: #ffffff;
    background-color: #aecfdf;
}

.card-back {
    background-color: #f76c6c;
    color: #ffffff;
    transform: rotateY(180deg);
}

h4 {
    position: relative;
    font-size: 17px;
    bottom: 20px;
    width: 600px;
}

.card-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>