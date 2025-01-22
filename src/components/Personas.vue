<script>
import Swal from "sweetalert2"

export default {
    el: '#app',
    data() {
        return {
            id: "",
            placa: "",
            capacidad: "",
            fecha: "",
            hora: "",
            isDropdownOpen: false,
            ventana: false,
            ventana1: false,
            personaEditada: {},
            qrCodeDataUrl: "",
            tableData: [
                { id: 1012342014, name: "Dillan Guevara" },
                { id: 1024828529, name: "Juan Díaz" },
                { id: 1023942341, name: "María Rosas" },
                { id: 1924824542, name: "Catalina Rodríguez" },
                { id: 1490209432, name: "Mario Pérez" },
                { id: 4901093492, name: "Cristian López" },
                { id: 1393928322, name: "Juan Ramos" },
                { id: 3498289529, name: "Natalia Hortúa" },
                { id: 1049891343, name: "Mariana Gonzalez" },
                { id: 9314829432, name: "Ramiro Cortez" },
                { id: 8924921982, name: "Sandra Rodríguez" },
                { id: 4889239821, name: "Diego Beltrán" },
                { id: 3941759121, name: "Santiago Fernandez" },
                { id: 1090139012, name: "Alejandra Ramos" },
                { id: 9420259230, name: "Tatiana Pérez" },
                { id: 1094340934, name: "Juliana Gonzalez" },
                { id: 1012904204, name: "Leandro Martinez" }
            ],
            searchQuery: "",
            paginaActual: 1,
            elementosPorPagina: 5,
            datosPaginados: [],
            nuevaPersona: {
                id: "",
                name: ""
            },
            personaSeleccionada: {
                id: "",
                name: ""
            },
            defaultImage: "https://vizualmexico.com.mx/wp-content/uploads/2022/04/Perfil-profesional-fondo-negro-1.jpeg"
        }
    },
    computed: {
        filteredTableData() {
            const query = this.searchQuery.toLowerCase()
            return this.tableData.filter(row =>
                String(row.id).toLowerCase().includes(query) ||
                row.name.toLowerCase().includes(query)
            )
        },
        datosPaginados() {
            const start = (this.paginaActual - 1) * this.elementosPorPagina
            const end = start + this.elementosPorPagina
            return this.filteredTableData.slice(start, end)
        },
        cambiarPagina(page) {
            this.paginaActual = page
        }
    },
    mounted() {
        const { id, placa, capacidad, fecha, hora } = this.$route.query
        if (id, placa, capacidad, fecha, hora) {
            this.id = id
            this.placa = placa
            this.capacidad = capacidad
            this.fecha = fecha
            this.hora = hora
        } else {
            console.error("No se recibieron datos desde la tabla.")
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        codigoqr() {
            this.$router.push('/codigoqr')
        },
        volver() {
            this.$router.push({
                path: '/vehiculos',
                query: {
                    empresa: this.empresa
                }
            })
        },
        perfil() {
            this.$router.push('/perfil')
        },
        agregarPersona() {
                const { id, name } = this.nuevaPersona

                if ( !id || !name ) {
                    Swal.fire({
                        title: "Error",
                        text: "Todos los campos son obligatorios.",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                    return;
                }

                // Agregar persona a la tabla
                this.tableData.push({
                    id,
                    name
                });

                // Limpiar el formulario
                this.nuevaPersona = {
                    id: "",
                    name: ""
                };

            // Confirmación
            Swal.fire({
                title: "¡Listo!",
                text: "Persona agregada correctamente",
                icon: "success",
                confirmButtonText: "OK"
            });

            // Cerrar el formulario modal
            this.ventana = false;
        },
        eliminarPersona(id) {
            Swal.fire({
                icon: "question",
                text: "¿Quieres eliminar la persona agregada recientemente?",
                showDenyButton: true,
                confirmButtonText: "Aceptar",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Persona eliminada correctamente", "", "success")

                    const index = this.tableData.findIndex(tableData => tableData.id === id)

                    if (index !== -1) {
                        this.tableData.splice(index, 1)
                    }
                    
                } else if (result.isDenied) {
                    Swal.fire("Acción cancelada", "", "info")
                }
            })
        },
        abrirModalEditar(id) {
            const persona = this.tableData.find(elemento => elemento.id === id)
            if (persona) {
                this.personaSeleccionada = { ...persona }
                this.ventana1 = true
            }
        },
        guardarCambios() {
            const index = this.tableData.findIndex(elemento => elemento.id === this.personaSeleccionada.id)

            if (index !== -1) {
                this.tableData[index] = { ...this.personaSeleccionada }

                Swal.fire({
                    title: "¡Listo!",
                    text: "Persona editada correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                this.ventana1 = false
            } else {
                Swal.fire({
                    title: "¡Listo!",
                    text: "Persona editada correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            }
        },
        qrcode() {
            Swal.fire({
                title: "",
                text: "¡Código QR generado exitosamente!",
                icon: "success",
                confirmButtonText: "OK"
            })
        },
        redirectToQr(row) {
            this.$router.push({
                path: '/codigoqr',
                query: {
                    id: row.id,
                    name: row.name,
                }
            })
        },
        totalPaginas() {
            return Math.ceil(this.tableData.length / this.elementosPorPagina)
        },
        getDataPagina(pagina) {
            if (pagina > 0 && pagina <= this.totalPaginas()) {
                this.paginaActual = pagina
            }
        },
        isActive(pagina) {
            // active
            return this.paginaActual === pagina ? 'active' : ''
        },
        getPreviousPage() {
            if(this.paginaActual > 1) {
                this.paginaActual --
            }

            this.getDataPagina(this.paginaActual)
        },
        getNextPage() {
            if(this.paginaActual < this.totalPaginas()) {
                this.paginaActual ++
            }

            this.getDataPagina(this.paginaActual)
        }
    }
}
</script>

<template>
    <title>Personas</title>

    <div id="app">
        <div class="nav">
            <a href="" @click.prevent="volver">
                <img src="../assets/Logo.png" alt="Volver" id="logo" @click="volver">
            </a>

            <div class="filter">
                <input type="search" v-model="searchQuery" placeholder="Buscar...">&nbsp
            </div>

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
                <h1>Personas registradas en el vehículo {{ id }}</h1><br/>

                <h2>Salida: {{ fecha }}, {{ hora }}<br/>
                Lista de personas</h2><br/>

                <button type="submit" id="agr" @click="ventana=true">
                    <font-awesome-icon :icon="['fas', 'plus']" class="plus" />
                </button>
                <button type="submit" id="agregar" @click="ventana=true">Agregar persona</button>

                <div class="modal" v-bind="ventana" v-if="ventana">
                    <div class="modal-content">
                        <form @submit.prevent="agregarPersona">
                            <h1>Agregar persona</h1>

                            <label for="Documento">Documento</label><br/>
                            <input type="text" v-model="nuevaPersona.id" placeholder="Documento" /><br/><br/>

                            <label for="Nombre">Nombre</label><br/>
                            <input type="text" v-model="nuevaPersona.name" placeholder="Nombre" /><br/><br/>

                            <button type="submit">Agregar</button><br/><br/>
                            <button class="qr-button-1" type="submit" @click="ventana=false">Cerrar</button>
                        </form>
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    <tr v-for="row in datosPaginados" :key="row.id">
                        <td>{{ row.id }}</td>
                        <td>{{ row.name }}</td>
                        <td>
                            <button type="submit" id="edit" @click.prevent="abrirModalEditar(row.id)">
                                <font-awesome-icon :icon="['fas', 'pen']" />
                            </button>&nbsp&nbsp
                            <button id="delete" @click.prevent="eliminarPersona(row.id)">
                                <font-awesome-icon :icon="['fas', 'trash']" />
                            </button>&nbsp&nbsp
                            <button type="submit" id="modal-qr" @click.prevent="redirectToQr(row)">
                                <font-awesome-icon :icon="['fas', 'qrcode']" />
                            </button>
                        </td>
                    </tr>
                </table>

                <div class="modal" v-bind="ventana1" v-if="ventana1">
                    <div class="modal-content-1">
                        <form @submit.prevent="guardarCambios">
                            <h1>Editar persona</h1>

                            <label for="">Documento</label><br/>
                            <input type="text" v-model="personaSeleccionada.id" placeholder="Documento"><br/><br/>

                            <label for="">Nombre</label><br/>
                            <input type="text" v-model="personaSeleccionada.name" placeholder="Nombre"><br/><br/>

                            <button type="submit">Editar</button><br/><br/>
                            <button class="qr-button-1" type="submit" @click="ventana1=false">Cerrar</button>
                        </form>
                    </div>
                </div>

                <nav aria-label="Page navigation" class="pagination">
                    <ul class="pagination">
                        <li class="page-item" v-on:click.prevent="getPreviousPage()"><a class="page-link" href="#">Anterior</a></li>
                        <li v-for="pagina in totalPaginas()" v-on:click.prevent="getDataPagina(pagina)" class="page-item"><a class="page-link" v-bind:class="isActive(pagina)" href="#">{{ pagina }}</a></li>
                        <li class="page-item" v-on:click.prevent="getNextPage()"><a class="page-link" href="#">Siguiente</a></li>
                    </ul>
                </nav>
            </section>
        </center>
    </div>
</template>

<style scoped>
#app {
    overflow-x: hidden;
}

.nav {
    background-color: #083D77;
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
    margin-left: 860px;
    margin-top: 100px;
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

section {
    color: white;
    height: 1000px;
    padding-top: 200px;z-index: 10;
}

h1 {
    color: black;
    margin-top: 1px;
}

h2 {
    color: black;
    margin-top: 10px;
    font-size: 20px;
}

label {
    color: black;
    font-size: 20px;
}

input {
    position: relative;
    border: none;
    width: 180px;
    font-size: 17px;
    height: 25px;
    border-radius: 7px;
    left: 5px;
    text-indent: 0.3em;
    font-family: Arial, Helvetica, sans-serif;
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
}

button:hover {
    background-color: #001a35;
}

form {
    margin-bottom: 5px;
}

#agr {
    margin-bottom: 10px;
    top: 1px;
    width: 30px;
    height: 31px;
    font-size: 25px;
    color: black;
    background-color: #1cf100;
    position: relative;
}

.plus {
    margin-bottom: 5px;
}

#agregar {
    bottom: 5px;
    margin: 2px;
    width: 200px;
    height: 31px;
    font-size: 20px;
    color: black;
    background-color: #1cf100;
    position: relative;
}

#agr:hover {
    background-color: #14aa00;
}

#agregar:hover {
    background-color: #14aa00;
}

table {
    background-color: #CDCDCD;
    margin-top: 30px;
}

tr {
    padding: 10px;
}

th {
    padding: 10px;
    text-align: center;
    color: black;
    font-size: 16px;
}

td {
    padding: 22px;
    text-align: center;
    color: black;
    font-size: 16px;
    background-color: rgb(167, 167, 167);
}

a {
    text-decoration: none;
    color: black;
}

.qr {
    width: 150px;
    height: 50px;
}

#link {
    padding-left: 200px;
    margin-bottom: 200px;
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
    left: 400px;
    top: 20px;
    transform: border-color 0.3s;
    position: relative;
}

.preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon {
    padding: 7.8px;
    margin: 0;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #007554;
    padding: 20px;
    border-radius: 15px;
    top: 20px;
    width: 550px;
    height: 450px;
}

.modal-content-1 {
    background-color: #007554;
    padding: 20px;
    border-radius: 15px;
    margin-top: 35px;
    width: 550px;
    height: 450px;
}

.modal-1 {
    background-color: #007554;
    position: absolute;
    margin-left: 700px;
    width: 550px;
    bottom: 10px;
    top: 65px;
    height: 600px;
    border-radius: 15px;
}

#edit {
    width: 40px;
    height: 30px;
    background-color: #ffb30e;
    color: black;
}

#delete {
    width: 40px;
    height: 30px;
    background-color: red;
}

#modal-qr {
    width: 40px;
    height: 30px;
    background-color: #083D77;
}

#edit:hover {
    background-color: #c28400;
}

#delete:hover {
    background-color: darkred;
}

#modal-qr:hover {
    background-color: #001a35;
}

.input {
    margin-bottom: 20px;
    padding: 10px;
    width: 300px;
    font-size: 16px;
    text-indent: 0px;
}

.modal-qr {
    background-color: #007554;
    position: absolute;
    margin-left: 700px;
    width: 550px;
    bottom: 10px;
    top: 65px;
    height: 600px;
    border-radius: 15px;
}

.qr-button {
    width: 200px;
}

.qr-button-1 {
    width: 160px;
}

.filter {
    margin-left: 1000px;
    color: white;
    padding-top: 50px;
    font-size: 17px;
}

.pagination {
    margin-left: 400px;
    margin-top: 20px;
}
</style>