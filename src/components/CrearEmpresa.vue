<script>
import Swal from 'sweetalert2';
import QrcodeVue from 'qrcode.vue';

export default {
    el: '#app',
    data() {
        return {
            isDropdownOpen: false,
            nuevaEmpresa: {
                id: "",
                nombre: "",
                cantidadBuses: "",
                ruta: ""
            },
            defaultImage: "https://vizualmexico.com.mx/wp-content/uploads/2022/04/Perfil-profesional-fondo-negro-1.jpeg"
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        personas() {
            this.$router.push('/personas')
        },
        codigoqr() {
            this.$router.push('/codigoqr')
        },
        inicio() {
            this.$router.push('/inicioUsuarios')
        },
        perfil() {
            this.$router.push('/perfil')
        },
        agregarEmpresa() {
            const { id, nombre, cantidadBuses, ruta } = this.nuevaEmpresa

                if ( !id || !nombre || !cantidadBuses || !ruta ) {
                    Swal.fire({
                        title: "Error",
                        text: "Todos los campos son obligatorios",
                        icon: "error",
                        confirmButtonText: "OK"
                    })
                    return
                }

                // Limpiar el formulario
                this.nuevaEmpresa = {
                    id: "",
                    nombre: "",
                    cantidadBuses: "",
                    ruta: ""
                }

            // Confirmación
            Swal.fire({
                title: "¡Listo!",
                text: "Empresa creada correctamente",
                icon: "success",
                confirmButtonText: "OK"
            })
        }
    },
    components: {
        QrcodeVue
    }
}
</script>

<template>
    <title>Crear empresa</title>

    <div id="app">
        <img src="../assets/crear-empresa.jpg" alt="" id="index-image">

        <div class="nav">
            <a href="" @click.prevent="inicio">
                <img src="../assets/Logo.png" alt="" id="logo">
            </a>

            <a href="" @click="perfil">
                <div class="user">
                    <div
                        class="profile"
                    >
                    <img 
                        :src="profileImage || defaultImage"
                        alt="Foto de perfil"
                            class="preview"
                        />
                    </div>
                </div>
            </a>
        </div>

        <center>
            <section>

                <h1>Crea una empresa transportadora</h1>

                <form @submit.prevent="agregarEmpresa">
                    <label for="Id">Id: </label>
                    <input type="text" v-model="nuevaEmpresa.id" placeholder="Id"><br/><br/>

                    <label for="Nombre">Nombre:</label>
                    <input type="text" v-model="nuevaEmpresa.nombre" placeholder="Nombre"><br/><br/>

                    <label for="CantidadBuses">Cantidad de buses:</label>
                    <input type="text" v-model="nuevaEmpresa.cantidadBuses" placeholder="Cantidad de buses"><br/><br/>

                    <label for="Ruta">Ruta:</label>
                    <input type="text" v-model="nuevaEmpresa.ruta" placeholder="Ruta"><br/><br/>

                    <button type="submit">Créala ahora</button>
                </form>
            </section>
        </center>
    </div>
</template>

<style scoped>
.nav {
  background-color: #083D77;
  height: 130px;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

#logo {
    margin: 10px;
    height: 110px;
    width: 115px;
    border-radius: 20px;
    position: absolute;
}

#index-image {
    width: 100%;
    height: 1100px;
    margin: 0;
    padding: 0;
    position: fixed;
}

h1 {
    font-size: 40px;
    position: relative;
    margin-top: 50px;
    color: white;
}

p {
    color: #ffffff;
    position: relative;
    padding-left: 1550px;
    font-size: 20px;
}

section {
    position: relative;
    color: white;
}

h2 {
    color: black;
    margin-top: 10px;
}

label {
    color: white;
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
    margin-left: 10px;
    margin-top: 40px;
}

button {
    background-color: #083D77;
    border: none;
    font-size: 15px;
    height: 25px;
    border-radius: 7px;
    color: #FFFFFF;
    font-size: 17px;
    cursor: pointer;
    width: 160px;
    margin-top: 40px;
}

button:hover {
    background-color: #001a35;
}

form {
    padding-top: 55px;
}

.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    display: flex;
    left: 1585px;
    top: 20px;
    transform: border-color 0.3s;
    position: relative;
}

.preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-button {
    background-color: #083D77;
    color: white;
    border: none;
    cursor: pointer;
    margin-left: 1725px;
    margin-top: 1px;
    font-size: 40px;
    top: 40px;
    width: 50px;
    position: relative;
    display: inline-flex;
    padding: 0;
}

.dropdown-button:hover {
    background-color: #001a35;
    border-radius: 20px;
    height: 55px;
    width: 55px;
    padding: 0;
}

.icon {
    padding: 7.8px;
    margin: 0;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    list-style: none;
    margin-left: 1680px;
    padding: 0;
    display: block;
}

.dropdown-menu li {
    padding: 10px 15px;
    color: black;
}

.dropdown-menu li a {
    text-decoration: none;
    color: black;
}

.dropdown-menu li:hover {
    background-color: #f1f1f1;
}

.menu-item {
    position: relative;
}

.menu-item a {
    color: white;
    text-decoration: none;
    display: block;
}

.submenu {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    top: 0;
    border-radius: 5px;
    background-color: white;
    margin-left: 117px;
    display: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.submenu:hover {
    border-radius: 5px;
}

.menu-item:hover > .submenu {
    display: block;
}

.submenu li {
    padding-bottom: 15px;
    height: 50px;
    right: 10px;
}

.submenu li:hover {
    background-color: #f1f1f1;
}

.submenu li a:hover {
    color: black;
}

.submenu .submenu {
    top: 0;
    left: 100%;
}
</style>