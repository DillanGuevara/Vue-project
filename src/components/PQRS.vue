<script>
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default {
    el: '#app',
    data() {
        return {
            newText: {
                name: "",
                text: ""
            }
        }
    },
    methods: {
        inicio() {
            this.$router.push('/inicioUsuarios')
        },
        sendEmail() {
            emailjs
                .sendForm('service_t3nti2k', 'template_mg3ic3a', this.$refs.form, {
                    publicKey: 'C16BGBI6SnrV6FBn4',
                })
                .then(() => {
                    Swal.fire({
                        title: "¡Gracias por tus comentarios!",
                        text: "Mensaje recibido correctamente",
                        icon: "success",
                        confirmButtonText: "OK"
                    })
                    this.newText = {
                        name: "",
                        text: ""
                    }
                }, (error) => {
                    Swal.fire({
                        title: "Error",
                        text: "Escibe algo para continuar",
                        icon: "error",
                        confirmButtonText: "OK",
                    }),
                    error.text
            })
        }
    }
}
</script>

<template>
    <title>PQRS</title>

    <div id="app">
        <div class="nav">
            <a href="" @click.prevent="inicio">
                <img src="../assets/Logo.png" alt="" id="logo">
            </a>
            <p>El transporte, más cerca</p>
        </div>
    </div>

    <center>
        <h1>Envía tus quejas, reclamos o sugerencias</h1>
        <p class="text">Tus comentarios son importantes para nosotros, y los tomaremos en cuenta para mejorar</p>
        <form ref="form" @submit.prevent="sendEmail">
            <label for="Name" class="label-1">Nombre</label>
            <input v-model="newText.name" type="text" name="Name" id="Name" placeholder="Nombre"><br/><br/>

            <label for="PQRS">PQRS</label>
            <textarea v-model="newText.text" cols="30" rows="10" name="PQRS" id="PQRS" placeholder="Escribe un comentario..."></textarea><br/><br/>
            <button type="submit">Enviar comentarios</button>
        </form>
    </center>
</template>

<style scoped>
.nav {
    background-color: #083D77;
    height: 130px;
    width: 100%;
    position: relative;
}

#logo {
    margin: 10px;
    height: 110px;
    width: 115px;
    border-radius: 20px;
}

p {
    color: #ffffff;
    position: absolute;
    padding-left: 1600px;
    bottom: 10px;
    font-size: 20px;
}

button {
    background-color: #083D77;
    border: none;
    width: 160px;
    font-size: 15px;
    height: 28px;
    border-radius: 7px;
    color: #FFFFFF;
    font-size: 17px;
    cursor: pointer;
}

button:hover {
    background-color: #001a35;
}

h1 {
    margin-top: 50px;
    color: black;
}

.text {
    position: relative;
    top: 40px;
    color: black;
    right: 1040px;
    width: 2400px;
    height: 180px;
}

form {
    position: relative;
    bottom: 50px;
}

input {
    margin-left: auto;
    resize: none;
    text-indent: 0.3rem;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    position: relative;
    border: 0.1px solid; 
}

textarea {
    margin-top: 10px;
    padding: 10px;
    margin-left: auto;
    width: 30%;
    height: 130px;
    resize: none;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    position: relative;
    border: 0.1px solid; 
}

label {
    position: relative;
    bottom: 140px;
    left: 50px;
    color: black;
}

.label-1 {
    position: relative;
    bottom: 25px;
    left: 65px;
}
</style>