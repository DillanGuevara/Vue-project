<script>
import Swal from "sweetalert2"

export default {
    el: '#app',
    data() {
        return {
            id: "",
            empresa: "",
            isDropdownOpen: false,
            ventana: false,
            ventana1: false,
            tableData: [
                { id: 4242, placa: "EWS-245", capacidad: 30, fecha: "13/01/2025", hora: "2:00 pm" },
                { id: 1582, placa: "KDE-429", capacidad: 40, fecha: "13/01/2025", hora: "5:00 pm" },
                { id: 2212, placa: "FWC-453", capacidad: 30, fecha: "13/01/2025", hora: "8:00 pm" },
                { id: 9864, placa: "IJE-075", capacidad: 35, fecha: "13/01/2025", hora: "10:00 pm" },
                { id: 1239, placa: "FKO-490", capacidad: 30, fecha: "14/01/2025", hora: "2:00 pm" },
                { id: 2108, placa: "LDE-024", capacidad: 40, fecha: "14/01/2025", hora: "5:00 pm" },
                { id: 5829, placa: "KOD-942", capacidad: 30, fecha: "14/01/2025", hora: "8:00 pm" },
                { id: 4901, placa: "OFK-024", capacidad: 35, fecha: "14/01/2025", hora: "10:00 pm" },
                { id: 4209, placa: "SCL-940", capacidad: 30, fecha: "15/01/2025", hora: "2:00 pm" },
                { id: 9503, placa: "AOK-011", capacidad: 40, fecha: "15/01/2025", hora: "5:00 pm" },
                { id: 4014, placa: "OCD-014", capacidad: 30, fecha: "15/01/2025", hora: "8:00 pm" },
                { id: 3031, placa: "EKP-103", capacidad: 35, fecha: "15/01/2025", hora: "10:00 pm" },
                { id: 8539, placa: "VMX-012", capacidad: 30, fecha: "16/01/2025", hora: "2:00 pm" },
                { id: 3483, placa: "DKK-109", capacidad: 40, fecha: "16/01/2025", hora: "5:00 pm" },
                { id: 3023, placa: "PSX-044", capacidad: 30, fecha: "16/01/2025", hora: "8:00 pm" },
                { id: 2358, placa: "EDI-042", capacidad: 20, fecha: "17/01/2025", hora: "2:00 pm" },
                { id: 2309, placa: "YRV-492", capacidad: 30, fecha: "17/01/2025", hora: "5:00 pm" },
                { id: 4092, placa: "FEJ-349", capacidad: 35, fecha: "17/01/2025", hora: "8:00 pm" }
            ],
            searchQuery: "",
            paginaActual: 1,
            elementosPorPagina: 5,
            datosPaginados: [],
            nuevoVehiculo: {
                id: "",
                placa: "",
                capacidad: "",
                fecha: "",
                hora: ""
            },
            vehiculoSeleccionado: {
                id: "",
                placa: "",
                capacidad: "",
                fecha: "",
                hora: ""
            },
            empresa: null,
            defaultImage: "https://vizualmexico.com.mx/wp-content/uploads/2022/04/Perfil-profesional-fondo-negro-1.jpeg"
        }
    },
    computed: {
        filteredTableData() {
            const query = this.searchQuery.toLowerCase()
            return this.tableData.filter((row) =>
                String(row.id).toLowerCase().includes(query) ||
                row.placa.toLowerCase().includes(query) ||
                String(row.capacidad).toLowerCase().includes(query) ||
                row.fecha.toLowerCase().includes(query) ||
                row.hora.toLowerCase().includes(query)
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
        const { id, empresa } = this.$route.query
        if (id, empresa) {
            this.id = id
            this.empresa = empresa
        } else {
            console.error("No se recibieron datos desde la tabla.")
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        personas() {
            this.$router.push('/personas');
        },
        volver() {
            this.$router.push('/inicioUsuarios');
        },
        perfil() {
            this.$router.push('/perfil');
        },
        redirectToPerson(row) {
            this.$router.push({
                path: '/personas',
                query: {
                    id: row.id,
                    placa: row.placa,
                    capacidad: row.capacidad,
                    fecha: row.fecha,
                    hora: row.hora
                }
            })
        },
        agregarVehiculo() {
            const { id, placa, capacidad, fecha, hora } = this.nuevoVehiculo

            if ( !id || !placa || !capacidad || !fecha || !hora ) {
                Swal.fire({
                    title: "Error",
                    text: "Todos los campos son obligatorios.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }

            // Agregar vehículo a la tabla
            this.tableData.push({
                id,
                placa,
                capacidad: parseInt(capacidad, 10),
                fecha,
                hora
            });
            
            // Limpiar el formulario
            this.nuevoVehiculo = {
                id: "",
                placa: "",
                capacidad: "",
                fecha: "",
                hora: ""
            };

            // Confirmación
            Swal.fire({
                title: "¡Listo!",
                text: "Vehículo agregado correctamente",
                icon: "success",
                confirmButtonText: "OK"
            });

            // Cerrar el formulario modal
            this.ventana = false;
        },
        eliminarVehiculo(id) {
            Swal.fire({
                icon: "question",
                text: "¿Quieres eliminar el vehículo agregado recientemente?",
                showDenyButton: true,
                confirmButtonText: "Aceptar",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Vehículo eliminado correctamente", "", "success")

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
            const vehiculo = this.tableData.find(elemento => elemento.id === id)
            if (vehiculo) {
                this.vehiculoSeleccionado = { ...vehiculo }
                this.ventana1 = true
            }
        },
        guardarCambios() {
            const index = this.tableData.findIndex(elemento => elemento.id === this.vehiculoSeleccionado.id)

            if (index !== -1) {
                this.tableData[index] = { ...this.vehiculoSeleccionado }

                Swal.fire({
                    title: "¡Listo!",
                    text: "Vehiculo editado correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                this.ventana1 = false
            } else {
                Swal.fire({
                    title: "¡Listo!",
                    text: "Vehiculo editado correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            }
        },
        totalPaginas() {
            return Math.ceil(this.tableData.length / this.elementosPorPagina)
        },
        getDataPagina(pagina) {
            if (pagina > 0 && pagina <=  this.totalPaginas()) {
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
    <title>Vehículos</title>

    <div id="app">
        <div class="nav">
            <a href="" @click.prevent="volver">
                <img src="../assets/Logo.png" alt="" id="logo">
            </a>

            <div class="filter">
                <input type="text" v-model="searchQuery" placeholder="Buscar...">&nbsp
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
    </div>
    <center>
        <section>
            <h1 class="title">{{ empresa }}</h1><br/>
            
            <h2>Lista de vehículos</h2><br/>

            <button type="submit" id="agr" @click="ventana=true">
                <font-awesome-icon :icon="['fas', 'plus']" class="plus"/>
            </button>
            <button type="submit" id="agregar" @click="ventana=true">Agregar vehículo</button>

            <div class="modal" v-bind="ventana" v-if="ventana">
                <div class="modal-content">
                    <form class="form-1" @submit.prevent="agregarVehiculo">
                        <h1>Agregar vehículo</h1>

                        <label for="Id">Id del vehículo</label><br />
                        <input type="text" v-model="nuevoVehiculo.id" placeholder="Id del vehículo" /><br/><br/>

                        <label for="Placa">Placa</label><br />
                        <input type="text" v-model="nuevoVehiculo.placa" placeholder="Placa" /><br/><br/>

                        <label for="Capacidad">Capacidad</label><br />
                        <input type="number" v-model="nuevoVehiculo.capacidad" placeholder="Capacidad" /><br/><br/>

                        <label for="Fecha de salida">Fecha de salida</label><br />
                        <input type="date" v-model="nuevoVehiculo.fecha" /><br /><br />

                        <label for="Hora de salida">Hora de salida</label><br />
                        <input type="time" v-model="nuevoVehiculo.hora" /><br /><br />

                        <button class="action" type="submit">Agregar</button><br /><br />
                        <button class="action" type="button" @click="ventana=false">Cerrar</button>
                    </form>
                </div>
            </div>

            <table>
                <tr>
                    <th>Id de la ruta</th>
                    <th>Placa</th>
                    <th>Capacidad</th>
                    <th>Fecha de salida</th>
                    <th>Hora de salida</th>
                    <th>Acciones</th>
                </tr>
                <tr v-for="row in datosPaginados" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.placa }}</td>
                    <td>{{ row.capacidad }}</td>
                    <td>{{ row.fecha }}</td>
                    <td>{{ row.hora }}</td>
                    <td>
                        <button type="submit" id="edit" @click.prevent="abrirModalEditar(row.id)">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </button>&nbsp&nbsp
                        <button id="delete" @click.prevent="eliminarVehiculo(row.id)">
                            <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>&nbsp&nbsp
                        <button type="submit" id="person" @click.prevent="redirectToPerson(row)">
                            <font-awesome-icon :icon="['fas', 'users']" />
                        </button>
                    </td>
                </tr>
            </table>

            <div class="modal" v-bind="ventana1" v-if="ventana1">
                <div class="modal-content">
                    <form>
                        <h1>Editar vehículo</h1>

                        <label for="">Id del vehículo</label><br/>
                        <input type="text" v-model="vehiculoSeleccionado.id" placeholder="Id del vehículo"><br/><br/>

                        <label for="">Placa</label><br/>
                        <input type="text" v-model="vehiculoSeleccionado.placa" placeholder="Placa"><br/><br/>

                        <label for="">Capacidad</label><br/>
                        <input type="text" v-model="vehiculoSeleccionado.capacidad" placeholder="Capacidad"><br/><br/>

                        <label for="">Fecha de salida</label><br/>
                        <input type="date" v-model="vehiculoSeleccionado.fecha"><br/><br/>

                        <label for="">Hora de salida</label><br/>
                        <input type="time"  v-model="vehiculoSeleccionado.hora"><br/><br/>

                        <button class="action" type="submit" @click="guardarCambios()">Editar</button><br/><br/>
                        <button class="action" type="submit" @click="ventana1=false">Cerrar</button>
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
    color: black;
    position: relative;
    margin-top: 70px;
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
    margin-top: 1px;
}

.iniciar-sesion {
    position: relative;
    cursor: pointer;
}

#iniciar {
    margin: 0;
    background-color: #DDDDDD;
    margin-left: 500px;
    margin-top: 50px;
    border-radius: 20px;
    border: none;
    width: 120px;
    height: 30px;
    font-size: 17px;
    position: relative;
    cursor: pointer;
}

#index-image {
    width: 100%;
    height: 1000px;
    margin: 0;
    padding: 0;
    position: absolute;
}

#user {
    margin-top: 40px;
    margin-left: 1650px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    position: absolute;
}

#logout {
    margin-top: 40px;
    margin-left: 1750px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    position: absolute;
}

section {
    position: relative;
    color: white;
    height: 800px;
    top: 100px;
}

.title {
    color: black;
}

h2 {
    color: black;
    margin-top: 10px;
    font-size: 22px;
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
    width: 120px;
    font-size: 15px;
    height: 25px;
    border-radius: 7px;
    color: #FFFFFF;
    font-size: 17px;
    cursor: pointer;
}

.form-1 {
    position: relative;
    bottom: 30px;
}

form {
    position: relative;
    bottom: 30px;
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
    top: 50px;
    width: 550px;
    height: 650px;
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

#person {
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

#person:hover {
    background-color: #001a35;
}

.action:hover {
    background-color: #001a35;
}

.filter {
    margin-left: 1000px;
    color: white;
    padding-top: 50px;
    font-size: 17px;
}

.pagination {
    position: absolute;
    margin-left: 400px;
    top: 350px;
}
</style>