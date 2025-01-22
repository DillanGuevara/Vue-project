<script>
import Swal from "sweetalert2"

export default {
    el: '#app',
    data() {
        return {
            register: {
                nombres: "",
                apellidos: "",
                telefono: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        inicio() {
            this.$router.push('/')
        },
        login() {
            this.$router.push('/login')
        },
        inicioUsuarios() {
            const { nombres, apellidos, telefono, email, password } = this.register

            if ( !nombres || !apellidos || !telefono || !email || !password ) {
                Swal.fire({
                    title: "Error",
                    text: "Todos los campos son obligatorios",
                    icon: "error",
                    confirmButtonText: "OK"
                })
                return
            }
            this.$router.push('/inicioUsuarios')
        }
    }
}
</script>

<template>
    <title>Registrarse</title>

    <div class="nav">
        <a href=""  @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <p>El transporte, más cerca</p>
    </div>

    <div class="content">

    <center>
        <div class="login">
            <h1>Regístrate en Transport Now</h1><br/><br/>

            <form action="">
                <label for="">Nombres:</label>&nbsp
                <input type="text" v-model="register.nombres" placeholder="Nombres"><br/><br/>

                <label for="">Apellidos:</label>&nbsp
                <input type="text" v-model="register.apellidos" placeholder="Apellidos"><br/><br/>

                <label for="">Teléfono:</label>&nbsp
                <input type="text" v-model="register.telefono" placeholder="Teléfono"><br/><br/>

                <label for="">Email:</label>&nbsp
                <input type="email" v-model="register.email" placeholder="Email"><br/><br/>

                <label for="">Password:</label>&nbsp
                <input type="password" v-model="register.password" placeholder="Password"><br/><br/>

                <button type="submit" @click.prevent="inicioUsuarios">Registrarse</button><br/><br/>

                <a href="" @click="login">¿Ya tienes una cuenta?</a>
            </form>
        </div>
    </center>

    </div>

</template>

<style scoped>
.nav {
    background-color: darkgrey;
    height: 130px;
    width: 100%;
    position: relative;
}

#logo {
    margin: 10px;
    height: 110px;
    width: 115px;
    border-radius: 20px;
    position: relative;
}

h1 {
    font-size: 30px;
    color: black;
    position: relative;
    margin-top: 150px;
}

p {
    color: black;
    position: relative;
    padding-left: 1550px;
    padding-top: 70px;
    font-size: 20px;
}

.login {
    background-color: #D4D4D4;
    bottom: 100px;
    width: 600px;
    height: 500px;
}

button {
    background-color: #083D77;
    border: none;
    width: 105px;
    font-size: 15px;
    height: 35px;
    border-radius: 7px;
    color: #FFFFFF;
    font-size: 17px;
    cursor: pointer;
}

button:hover {
    background-color: #001a35;
}

a {
    color: black;
    text-decoration: none;
    font-size: 20px;
}

label {
    color: black;
    font-size: 20px;
}

input {
    border: none;
    width: 180px;
    font-size: 17px;
    height: 25px;
    border-radius: 7px;
    text-indent: 0.3em;
    font-family: Arial, Helvetica, sans-serif;
}

.content {
    height: 675px;
}

form {
    margin-top: 5px;
}
</style>