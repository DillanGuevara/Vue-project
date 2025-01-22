<script>
import Swal from "sweetalert2";

export default {
    el: '#app',
    data() {
        return {
            isDropdownOpen: false,
            menuItems: [
                {
                    name: "Usuario",
                    submenu: [
                        {
                            name: "Dillan Guevara",
                            name1: "dillangb230506@gmail.com",
                            name2: "3116016034",
                            submenu: [],
                            isOpen: false
                        }
                    ]
                }            
            ],
            menuItems1: [
                {
                    name: "Opciones",
                    submenu: [
                        {
                            name: "Tema",
                            submenu: [],
                            isOpen: false
                        }
                    ],
                    name2: "Opciones",
                    submenu2: [
                        {
                            name2: "Tickets",
                            submenu2: [],
                            isOpen: false
                        }
                    ],
                    name3: "Opciones",
                    submenu3: [
                        {
                            name3: "Personas",
                            submenu3: [],
                            isOpen: false
                        }
                    ],
                    name4: "Opciones",
                    submenu4: [
                        {
                            name4: "Vehículos",
                            submenu4: [],
                            isOpen: false
                        }
                    ],
                    submenu5: [
                        {
                            name5: "Empresas",
                            submenu5: [],
                            isOpen: false
                        }
                    ]
                }
            ],
            menuItems2: [
                {
                    name: "Configuración",
                    submenu: [
                        {
                            name: "Notificaciones",
                            submenu: [],
                            isOpen: false
                        }
                    ],
                    name1: "Configuration",
                    submenu1: [
                        {
                            name1: "Cookies",
                            submenu1: [],
                            isOpen: false
                        }
                    ],
                    name2: "Configuration",
                    submenu2: [
                        {
                            name2: "Privacidad",
                            submenu2: [],
                            isOpen: false
                        }
                    ],
                    name3: "PQRS",
                    submenu3: [
                        {
                            name3: "PQRS",
                            submenu3: [],
                            isOpen: false
                        }
                    ]
                }
            ],
            menuItems3: [
                {
                    name: "Configuración",
                    submenu: [
                        {
                            name: "Notificaciones",
                            submenu: [],
                            isOpen: false
                        }
                    ]
                }
            ],
            isDropdownOpen1: false,
            nuevaEmpresa: {
                id: "",
                empresa: ""
            },
            empresaSeleccionada: {
                id: "",
                empresa: ""
            },
            ventana: false,
            defaultImage: "https://vizualmexico.com.mx/wp-content/uploads/2022/04/Perfil-profesional-fondo-negro-1.jpeg"
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleDropdown1() {
            this.isDropdownOpen1 = !this.isDropdownOpen1;
        },
        toggleSubMenu(index) {
            this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
        },
        toggleSubMenu1(index1) {
            this.menuItems1[index1].isOpen = !this.menuItems1[index1].isOpen;
        },
        toggleSubMenu2(index2) {
            this.menuItems2[index2].isOpen = !this.menuItems2[index2].isOpen;
        },
        toggleSubMenu3(index3) {
            this.menuItems3[index3].isOpen = !this.menuItems3[index3].isOpen;
        },
        create() {
            this.$router.push('/crearempresa')
        },
        perfil() {
            this.$router.push('/perfil')
        },
        vehiculos() {
            this.$router.push('/vehiculos')
        },
        personas() {
            this.$router.push('/personas')
        },
        empresas() {
            this.$router.push('/empresas')
        },
        datos() {
            this.$router.push('/datos')
        },
        inicio() {
            Swal.fire({
                icon: "question",
                text: "¿Estás seguro de que quieres cerrar sesión?",
                showDenyButton: true,
                confirmButtonText: "Aceptar",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push('/')
                }
            })
        },
        pqrs() {
            this.$router.push('/pqrs')
        }
    }
}
</script>

<template>
    <title>Transport Now</title>

    <div id="app">
        <img src="../assets/index.jpg" alt="" id="index-image">

        <div class="nav">
            <img src="../assets/Logo.png" alt="" id="logo">
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
            <font-awesome-icon :icon="['fas', 'bars']" class="icon" @click.prevent="toggleDropdown" />
            <ul v-show="isDropdownOpen" class="dropdown-menu">
                <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
                    <a href="#" @click.prevent="toggleSubMenu(index)">
                        <font-awesome-icon :icon="['fas', 'user']" class="icon-3" />&nbsp
                        {{ item.name }}
                    </a>
                    <li v-show="item.isOpen" class="submenu" style="height: 270px; width: 240px;">
                        <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                            <center>
                                <div class="user">
                                    <div
                                        class="profile-1"
                                    >
                                        <img 
                                            :src="profileImage || defaultImage"
                                            alt="Foto de perfil"
                                            class="preview"
                                        />
                                    </div>
                                </div><br/>
                                <b style="right: 5px; bottom: 38px; ">{{ subItem.name }}</b><br/>
                                <b style="right: 17px; bottom: 28px;">{{ subItem.name1 }}</b><br/>
                                <b style="right: 6px; bottom: 18px;">{{ subItem.name2 }}</b>
                            </center>
                        </li>
                    </li>
                </li>
                <li v-for="(item1, index1) in menuItems1" :key="index1" class="menu-item">
                    <a href="#" @click.prevent="toggleSubMenu1(index1)">
                        <font-awesome-icon :icon="['fas', 'bars']" class="icon-3" />&nbsp
                        {{ item1.name }}
                    </a>
                    <ul v-show="item1.isOpen" class="submenu" style="height: 245px;">
                        <li v-for="(subItem, subIndex) in item1.submenu" :key="subIndex" class="item-2">
                            <font-awesome-icon :icon="['fas', 'palette']" />&nbsp
                            {{ subItem.name }}
                        </li>
                        <li v-for="(subItem2, subIndex2) in item1.submenu2" :key="subIndex2" class="item-2">
                            <font-awesome-icon :icon="['fas', 'ticket']" class="icon-1"/>&nbsp
                            {{ subItem2.name2 }}
                        </li>
                        <li v-for="(subItem3, subIndex3) in item1.submenu3" :key="subIndex3" class="item-2">
                            <font-awesome-icon :icon="['fas', 'users']" class="icon-1"/>&nbsp
                            {{ subItem3.name3 }}
                        </li>
                        <li v-for="(subItem4, subIndex4) in item1.submenu4" :key="subIndex4" class="item-2">
                            <font-awesome-icon :icon="['fas', 'bus']" class="icon-1"/>&nbsp
                            {{ subItem4.name4 }}
                        </li>
                        <li v-for="(subItem5, subIndex5) in item1.submenu5" :key="subIndex5" class="item-2">
                            <font-awesome-icon :icon="['fas', 'building']" class="icon-6"/>&nbsp
                            {{ subItem5.name5 }}
                        </li>
                    </ul>
                </li>
                <li v-for="(item2, index2) in menuItems2" :key="index2" class="menu-item">
                    <a href="#" @click.prevent="toggleSubMenu2(index2)">
                        <font-awesome-icon :icon="['fas', 'gear']" class="icon-1" />&nbsp
                        {{ item2.name }}
                    </a>
                    <ul v-show="item2.isOpen" class="submenu">
                        <li v-for="(subItem, subIndex) in item2.submenu" :key="subIndex" class="item-2">
                            <font-awesome-icon :icon="['fas', 'bell']" class="icon-1"/>&nbsp
                            {{ subItem.name }}
                        </li>
                        <li v-for="(subItem1, subIndex1) in item2.submenu1" :key="subIndex1" class="item-2">
                            <a href="./cookies">
                                <font-awesome-icon :icon="['fas', 'cookie']" class="icon-1"/>&nbsp
                                {{ subItem1.name1 }}
                            </a>
                        </li>
                        <li v-for="(subItem2, subIndex2) in item2.submenu2" :key="subIndex2" class="item-2">
                            <a href="./pol">
                                <font-awesome-icon :icon="['fas', 'circle-info']" class="icon-1"/>&nbsp
                                {{ subItem2.name2 }}
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="div" @click="pqrs">
                        <font-awesome-icon :icon="['fas', 'circle-question']" class="icon-1"/>&nbsp
                        PQRS
                    </div>
                </li>
                <li>
                    <div class="div" @click="inicio">
                        <font-awesome-icon :icon="['fas', 'power-off']" class="icon-1" />&nbsp
                        Cerrar sesión
                    </div>
                </li>
            </ul>
            <font-awesome-icon :icon="['fas', 'circle-info']" class="icon-2" @click.prevent="toggleDropdown1" />
            <ul v-show="isDropdownOpen1" class="dropdown-menu-1">
                <li v-for="(item, index) in menuItems" :key="index" class="menu-item-1">
                    <b>La mejor aplicación de organización de rutas</b><br/><br/>
                    <p>
                        Las rutas de autobús son algo muy importante en la vida cotidiana. En un autobús nos podemos
                        transportar de un lugar a otro, como por ejemplo, de la casa al trabajo y viceversa. En
                        esta aplicación puedes organizar rutas eficazmente con nuestras empresas aliadas. Registra,
                        edita, elimina... ¡Todo en Transport Now!
                    </p>
                </li>
            </ul>
        </div>

        <section>
            <center>
                <h1>¡Hola!<br/>
                ¡Crea tu empresa transportadora!</h1><br/>
                <img src="../assets/Logo.png" alt="" id="logo-1">
                <button id="iniciar-1" type="submit" @click="create">Créala ahora</button><br/><br/>
                <button id="iniciar-2" type="submit" @click="empresas">
                    <font-awesome-icon :icon="['fas', 'building']" class="icon-4" /><br/><br/>
                    Administrar empresas
                </button><br/><br/>
                <button id="iniciar-3" type="submit" @click="vehiculos">
                    <font-awesome-icon :icon="['fas', 'bus']" class="icon-4" /><br/><br/>
                    Administrar vehículos
                </button><br/><br/>
                <button id="iniciar-4" type="submit" @click="personas">
                    <font-awesome-icon :icon="['fas', 'users']" class="icon-4" /><br/><br/>
                    Administrar personas
                </button><br/><br/>
                <button id="iniciar-5" type="submit" @click="datos">
                    <font-awesome-icon :icon="['fas', 'database']" class="icon-4" /><br/><br/>
                    Ver datos
                </button><br/><br/>
            </center>
        </section>

        <center>
            <div class="images">

                <img src="../assets/fondo1.jpg" alt="" id="img-1">
                <img src="../assets/fondo2.jpg" alt="" id="img-2">
                <img src="../assets/fondo3.jpg" alt="" id="img-3">
                
                <h1 class="text-content">Facilidad a la hora de escoger</h1>

                <h3>La mejor página de organización de rutas</h3>

                <h2>Escoge entre varias opciones para crear tu empresa de transporte</h2>
            </div>
        </center>

        <br/>

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
    </div>
</template>

<style scoped>
#app {
    position: relative;
    height: 1000px;
}

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
    margin-top: 50px;
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
    padding-left: 1550px;
    font-size: 20px;
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
    margin-top: 350px;
}

#iniciar-2, #iniciar-3, #iniciar-4, #iniciar-5 {
    background-color: #083D77;
    color: white;
    border-radius: 20px;
    border: none;
    width: 250px;
    height: 250px;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    margin-top: 1px;
}

#iniciar-1:hover {
    background-color: #001a35;    
}

#iniciar-2:hover, #iniciar-3:hover, #iniciar-4:hover, #iniciar-5:hover {
    background-color: #001a35;
    transform: translateY(-10px);
    transition: 0.8s;
}

#iniciar-2 {
    right: 500px;
    top: 100px;
}

#iniciar-3 {
    right: 150px;
    bottom: 175px;
}

#iniciar-4 {
    left: 200px;
    bottom: 450px;
}

#iniciar-5 {
    left: 540px;
    bottom: 725px;
}

.iniciar-sesion {
    position: relative;
    cursor: pointer;
}

#iniciar {
    margin: 0;
    background-color: #083D77;
    color: white;
    margin-left: 500px;
    border: none;
    width: 120px;
    height: 130px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#iniciar:hover {
    background-color: #001a35;
}

#index-image {
    width: 100%;
    height: 1500px;
    bottom: 1px;
    position: absolute;
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
    left: 1400px;
    top: 20px;
    transform: border-color 0.3s;
    position: relative;
}

.profile-1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    border: 2px solid black;
    display: block;
    left: 1400px;
    transform: border-color 0.3s;
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
    margin-left: 1600px;
    font-size: 40px;
    bottom: 43px;
    width: 70px;
    position: relative;
}

.dropdown-button:hover {
    background-color: #001a35;
    height: 50px;
    width: 70px;
    border-radius: 20px;
    cursor: pointer;
}

.item-2 {
    width: 150px;
    list-style: none;
    right: 33px;
    position: relative;
}

.icon {
    color: white;
    position: absolute;
    margin-left: 1535px;
    bottom: 32px;
    font-size: 40px;
    padding: 10px;
}

.icon:hover {
    background-color: #001a35;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
}

.icon-2 {
    color: white;
    margin-left: 1600px;
    margin-top: 38px;
    font-size: 40px;
    padding: 10px;
}

.icon-2:hover {
    background-color: #001a35;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
}

.icon-3 {
    color: #001a35;
    position: relative;
    margin-left: 1590px;
    top: 2px;
    font-size: 17px;
    margin: 1px;
}

.icon-4 {
    color: white;
    position: relative;
    margin-left: 1590px;
    top: 2px;
    font-size: 97px;
    margin: 1px;
}

.icon-5 {
    font-size: 50px;
    margin-right: 11px;
}

.icon-6 {
    padding-left: 3px;
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
    margin-left: 1480px;
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
    cursor: pointer;
}

.dropdown-menu li:hover {
    background-color: #cecece;
}

.menu-item {
    position: relative;
    width: 160px;
}

.menu-item a {
    color: white;
    text-decoration: none;
    display: block;
}

.dropdown-menu-1 {
    position: absolute;
    top: 100%;
    left: 1550px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    list-style: none;
    margin-right: 540px;
    padding: 0;
}

.dropdown-menu-1 li {
    padding: 10px 15px;
    color: black;
}

.div {
    cursor: pointer;
}

.dropdown-menu-1 li a {
    text-decoration: none;
    color: black;
    cursor: pointer;
}

.menu-item-1 {
    width: 285px;
    height: 310px;
}

.menu-item-1:hover {
    background-color: #dadada;
}

.menu-item-1 p {
    color: #001a35;
    font-size: 15px;
    margin: 0;
    left: 0;
    padding: 0;
}

.submenu {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 19px;
    background-color: white;
    margin-left: 160px;
    display: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 149px;
}

.menu-item:hover > .submenu {
    display: block;
}

.submenu li {
    padding-bottom: 15px;
    padding-right: 0px;
}

.submenu li:hover {
    background-color: #cecece;
    border-radius: 20px;
}

.submenu li a:hover {
    color: black;
}

.submenu .submenu {
    top: 0;
    left: 100%;
}

p {
    left: 250px;
    width: 250px;
    position: relative;
}

.drop {
    width: 100rem;
}

.menu-item-1 .time {
    position: absolute;
    padding-left: 235px;
    bottom: 348px;
    color: rgba(0, 0, 0, 0.4);
}

.menu-item-1 .time-1 {
    position: absolute;
    padding-left: 235px;
    bottom: 222px;
    color: rgba(0, 0, 0, 0.4);
}

.menu-item-1 .time-2 {
    position: absolute;
    padding-left: 235px;
    bottom: 92px;
    color: rgba(0, 0, 0, 0.4);
}

b {
    position: relative;
    right: 1px;
    margin-top: 5px;
}

.menu-item-1 p {
    color: black;
    left: 15px;
    margin-top: 10px;
    position: absolute;
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

.images {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 700px;
    top: 1020px;
}


.text-content {
    position: relative;
    color: black;
    bottom: 800px;
}

h2 {
    position: relative;
    color: black;
    bottom: 530px;
}

h3 {
    position: relative;
    color: black;
    bottom: 680px;
}

#img-1 {
    width: 620px;
    height: 620px;
    padding-top: 15px;
    margin-top: 40px;
}

#img-2 {
    width: 620px;
    height: 620px;
    padding-left: 10px;
    padding-top: 15px;
    margin-top: 40px;
}

#img-3 {
    width: 620px;
    height: 620px;
    padding-left: 10px;
    padding-top: 15px;
    margin-top: 40px;
}

footer {
    position: relative;
    height: 130px;
    background-color: #083D77;
    color: white;
    top: 80px;
}
</style>