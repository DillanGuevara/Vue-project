<script>
import Swal from "sweetalert2"

export default {
    el: '#app',
    data() {
        return {
            recuperar: {
                email: "",
                newPassword: "",
                confirmPassword: ""
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
            const { email, newPassword, confirmPassword } = this.recuperar

            if ( !email || !newPassword || !confirmPassword ) {
                Swal.fire({
                    title: "Error",
                    text: "Todos los campos son obligatorios",
                    icon: "error",
                    confirmButtonText: "OK"
                })
                return
            }

            this.recuperar = {
                email: "",
                newPassword: "",
                confirmPassword: ""
            }

            Swal.fire({
                title: "¡Listo!",
                text: "¡Contraseña recuperada correctamente!",
                icon: "success",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push('/login')
                }
            })
        }
    }
}
</script>

<template>
    <title>Recuperar contraseña</title>

    <div class="nav">
        <a href=""  @click="inicio">
            <img src="../assets/Logo.png" alt="" id="logo">
        </a>
        <p>El transporte, más cerca</p>
    </div>

    <div class="content">

    <center>
        <div class="login">
            <h1>Recupera tu contraseña</h1><br/><br/>

            <form action="">
                <label for="">Email:</label>&nbsp
                <input type="email" v-model="recuperar.email" placeholder="Email"><br/><br/>

                <label for="">Nuevo Password:</label>&nbsp
                <input type="password" v-model="recuperar.newPassword" placeholder="Password"><br/><br/>

                <label for="">Confirmar Password:</label>&nbsp
                <input type="password" v-model="recuperar.confirmPassword" placeholder="Password"><br/><br/>

                <button type="submit" @click.prevent="inicioUsuarios()">Recuperar contraseña</button><br/><br/>
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
    width: 100px;
    font-size: 15px;
    height: 50px;
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
    margin-top: 80px;
}
</style>