<script>
import Swal from "sweetalert2"

export default {
    el: '#app',
    data() {
        return {
            tableData: [
                { id: 4921238222, empresa: "TurisTrans" },
                { id: 5321319323, empresa: "Transportes La Serena" },
                { id: 1985498234, empresa: "Transportes La Hortua" },
                { id: 1245928548, empresa: "TransGalaxia" },
                { id: 9019050193, empresa: "TransMundial" },
                { id: 1349889413, empresa: "Macarena" },
                { id: 1904194940, empresa: "TransMoreira" },
                { id: 5900298521, empresa: "Transportes El Fuego" },
                { id: 5832906490, empresa: "TransChina" },
                { id: 5992502215, empresa: "Libertadores" },
                { id: 9898349834, empresa: "Transporte Oro" },
                { id: 4829398533, empresa: "Transportes Galicia" },
                { id: 4398105902, empresa: "Rápido El Carmen" },
                { id: 5829532181, empresa: "Transportes Real" },
                { id: 7925728473, empresa: "Expreso Las Torres" },
                { id: 2805285399, empresa: "TransportCiénaga" },
                { id: 4895938935, empresa: "Transporte del Caribe" },
                { id: 2908609384, empresa: "Rápido San Carlos" }
            ],
            searchQuery: "",
            paginaActual: 1,
            elementosPorPagina: 5,
            datosPaginados: [],
            nuevaEmpresa: {
                id: "",
                empresa: ""
            },
            empresaSeleccionada: {
                id: "",
                empresa: ""
            },
            ventana: false,
            ventana1: false,
            ventana2: false
        }
    },
    computed: {
        filteredTableData() {
            const query = this.searchQuery.toLowerCase()
            return this.tableData.filter(row =>
                String(row.id).toLowerCase().includes(query) ||
                row.empresa.toLowerCase().includes(query)
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
    methods: {
        redirectToCompany(row) {
            this.$router.push({
                path: '/vehiculos',
                query: {
                    id: row.id,
                    empresa: row.empresa
                }
            })
        },
        agregarEmpresa() {
            const { id, empresa } = this.nuevaEmpresa

            if( !id || !empresa ) {
                Swal.fire({
                    title: "Error",
                    text: "Todos los campos son obligatorios",
                    icon: "error",
                    confirmButtonText: "OK"
                })
                return
            }

            this.tableData.push({
                id,
                empresa
            })

            this.nuevaEmpresa = {
                id: "",
                empresa: ""
            }

            Swal.fire({
                title: "¡Listo!",
                text: "Empresa agregada correctamente",
                icon: "success",
                confirmButtonText: "OK"
            })

            this.ventana = false
        },
        eliminarEmpresa(id) {
            Swal.fire({
                icon: "question",
                text: "¿Quieres eliminar la empresa agregada recientemente?",
                showDenyButton: true,
                confirmButtonText: "Aceptar",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Empresa eliminada correctamente", "", "success")

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
            const empresa = this.tableData.find(elemento => elemento.id === id)
            if (empresa) {
                this.empresaSeleccionada = { ...empresa }
                this.ventana1 = true
            }
        },
        guardarCambios() {
            const index = this.tableData.findIndex(elemento => elemento.id === this.empresaSeleccionada.id)

            if (index !== -1) {
                this.tableData[index] = { ...this.empresaSeleccionada }

                Swal.fire({
                    title: "¡Listo!",
                    text: "Empresa editada correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                this.ventana1 = false
            } else {
                Swal.fire({
                    title: "¡Listo!",
                    text: "Empresa editada correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            }
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
            //active
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
        },
        inicio() {
            this.$router.push('/inicioUsuarios')
        },
        modal() {
            this.ventana2=true
        }
    }
}
</script>

<template>
    <title>Empresas</title>

    <div id="app">
        <img src="../assets/fondo-tabla.jpg" alt="" id="index-image-1">

        <button @click="inicio">Volver</button>

        <div class="filter">
            <input type="search" v-model="searchQuery" placeholder="Buscar...">
        </div>

        <div class="section">
            <center>
                <h2 class="title-table">Lista de empresas</h2>

                <button type="submit" id="agr" @click="ventana=true">
                    <font-awesome-icon :icon="['fas', 'plus']" class="plus"/>
                </button>
                <button type="submit" id="agregar" @click="ventana=true">Agregar empresa</button>

                <div class="modal" v-bind="ventana" v-if="ventana">
                    <div class="modal-content">
                        <form @submit.prevent="agregarEmpresa">
                            <h1 style="font-size: 35px; color: black;">Agregar empresa</h1><br/>
                                <label for="Nit">Id</label><br/>
                                <input type="text" placeholder="Id" v-model="nuevaEmpresa.id">

                                <br/><br/>

                                <label for="Nombre">Nombre</label><br/>
                                <input type="text" placeholder="Nombre" v-model="nuevaEmpresa.empresa">

                                <br/><br/>

                            <button class="form">Agregar</button><br/>
                            <button class="modal-button" type="submit" @click.prevent="ventana=false">Cerrar</button>
                        </form>
                    </div>
                </div>

                <div class="modal" v-bind="ventana1" v-if="ventana1">
                    <div class="modal-content-1">
                        <form action="" class="form-1">
                            <h1>Editar empresa</h1>

                            <label for="">Id</label><br/>
                            <input type="text" v-model="empresaSeleccionada.id"><br/><br/>

                            <label for="">Nombre</label><br/>
                            <input type="text" v-model="empresaSeleccionada.empresa" placeholder="Nombre"><br/><br/>

                            <button class="modal-button" type="submit" @click.prevent="guardarCambios()">Editar</button><br/><br/>
                            <button class="modal-button-1" type="submit" @click.prevent="ventana1=false">Cerrar</button>
                        </form>
                    </div>
                </div>
            </center>
        </div>

        <center>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                <tr v-for="row in datosPaginados" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.empresa }}</td>
                    <td>
                        <button type="submit" id="edit" @click.prevent="abrirModalEditar(row.id)">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </button>&nbsp&nbsp
                        <button id="delete" @click.prevent="eliminarEmpresa(row.id)">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>&nbsp&nbsp
                        <button
                            class="bus"
                            :disabled="!row.id || !row.empresa"
                            :class="{ 'disabled-btn': !row.id || !row.empresa }"
                            type="submit"
                            @click.prevent="redirectToCompany(row)"
                        >
                            <font-awesome-icon :icon="['fas', 'bus']" />
                        </button>
                    </td>
                </tr>
            </table>
        </center>

        <nav aria-label="Page navigation" class="pagination">
            <ul class="pagination">
                <li class="page-item" v-on:click.prevent="getPreviousPage()"><a class="page-link" href="#">Anterior</a></li>
                <li v-for="pagina in totalPaginas()" v-on:click.prevent="getDataPagina(pagina)" class="page-item"><a class="page-link" v-bind:class="isActive(pagina)" href="#">{{ pagina }}</a></li>
                <li class="page-item" v-on:click.prevent="getNextPage()"><a class="page-link" href="#">Siguiente</a></li>
            </ul>
        </nav>

        <br/>
    </div>
</template>

<style scoped>
#index-image-1 {
    width: 100%;
    height: 950px;
    padding: 0;
    position: fixed;
}

h2 {
    position: relative;
    top: 70px;
    font-size: 30px;
    color: black;
}

.title-table {
    position: relative;
    top: 30px;
    font-size: 30px;
    color: black;
    padding-left: 10px;
}

#agr {
    top: 36px;
    width: 30px;
    height: 31px;
    left: 11px;
    font-size: 25px;
    color: black;
    background-color: #1cf100;
    position: relative;
}

.plus {
    margin-bottom: 5px;
}

#agregar {
    top: 30px;
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
    position: relative;
    bottom: 230px;
    left: 1px;
}

.section {
    height: 400px;
}

button {
    position: relative;
    width: 65px;
    height: 35px;
    font-size: 17px;
    background-color: #083D77;
    color: white;
    border: none;
    border-radius: 10px;
    margin: 10px;
}

.bus {
    width: 40px;
    height: 31px;
}

button:hover {
    background-color: #001a35;
    cursor: pointer;
}

.disabled-btn {
    cursor: not-allowed;
    opacity: 0.5;
}

form {
    position: relative;
    top: 40px;
}

label {
    color: black;
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

.form {
    position: relative;
    width: 80px;
    height: 30px;
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

#edit:hover {
    background-color: #c28400;
}

#delete:hover {
    background-color: darkred;
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

.form-1 {
    top: 45px;
    left: 10px;
}

.form-1 h1 {
    color: black;
    font-size: 35px;
    width: 240px;
}

.modal-button {
    width: 65px;
}

.modal-button-1 {
    width: 65px;
    bottom: 25px;
}

.div {
    cursor: pointer;
}

.pagination {
    position: relative;
    margin-left: 400px;
    bottom: 75px;
}

.table-complete {
    bottom: 100px;
    left: 850px;
    width: 165px;
}

.page-link {
    position: inherit;
}

.button-table {
    width: 40px;
    height: 31px;
}

.actions {
    margin-top: 1080px;
    margin-left: 370px;
}

.table-1 {
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

.filter {
    position: relative;
    margin-left: 880px;
    color: white;
    padding-top: 50px;
    font-size: 17px;
}
</style>