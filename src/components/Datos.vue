<script>
import html2pdf from "html2pdf.js"
import VueZoomOnHover from 'vue-zoom-on-hover'

export default {
    el: '#app',
    components: { VueZoomOnHover },
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
            tableData1: [
                { id1: 4242, placa: "EWS-245", capacidad: 30, fecha: "13/01/2025", hora: "2:00 pm" },
                { id1: 1582, placa: "KDE-429", capacidad: 40, fecha: "13/01/2025", hora: "5:00 pm" },
                { id1: 2212, placa: "FWC-453", capacidad: 30, fecha: "13/01/2025", hora: "8:00 pm" },
                { id1: 9864, placa: "IJE-075", capacidad: 35, fecha: "13/01/2025", hora: "10:00 pm" },
                { id1: 1239, placa: "FKO-490", capacidad: 30, fecha: "14/01/2025", hora: "2:00 pm" },
                { id1: 2108, placa: "LDE-024", capacidad: 40, fecha: "14/01/2025", hora: "5:00 pm" },
                { id1: 5829, placa: "KOD-942", capacidad: 30, fecha: "14/01/2025", hora: "8:00 pm" },
                { id1: 4901, placa: "OFK-024", capacidad: 35, fecha: "14/01/2025", hora: "10:00 pm" },
                { id1: 4209, placa: "SCL-940", capacidad: 30, fecha: "15/01/2025", hora: "2:00 pm" },
                { id1: 9503, placa: "AOK-011", capacidad: 40, fecha: "15/01/2025", hora: "5:00 pm" },
                { id1: 4014, placa: "OCD-014", capacidad: 30, fecha: "15/01/2025", hora: "8:00 pm" },
                { id1: 3031, placa: "EKP-103", capacidad: 35, fecha: "15/01/2025", hora: "10:00 pm" },
                { id1: 8539, placa: "VMX-012", capacidad: 30, fecha: "16/01/2025", hora: "2:00 pm" },
                { id1: 3483, placa: "DKK-109", capacidad: 40, fecha: "16/01/2025", hora: "5:00 pm" },
                { id1: 3023, placa: "PSX-044", capacidad: 30, fecha: "16/01/2025", hora: "8:00 pm" },
                { id1: 2358, placa: "EDI-042", capacidad: 20, fecha: "17/01/2025", hora: "2:00 pm" },
                { id1: 2309, placa: "YRV-492", capacidad: 30, fecha: "17/01/2025", hora: "5:00 pm" },
                { id1: 4092, placa: "FEJ-349", capacidad: 35, fecha: "17/01/2025", hora: "8:00 pm" },
            ],
            tableData2: [
                { id2: 1012342014, name: "Dillan Guevara" },
                { id2: 1024828529, name: "Juan Díaz" },
                { id2: 1023942341, name: "María Rosas" },
                { id2: 1924824542, name: "Catalina Rodríguez" },
                { id2: 1490209432, name: "Mario Pérez" },
                { id2: 4901093492, name: "Cristian López" },
                { id2: 1393928322, name: "Juan Ramos" },
                { id2: 3498289529, name: "Natalia Hortúa" },
                { id2: 1049891343, name: "Mariana Gonzalez" },
                { id2: 9314829432, name: "Ramiro Cortez" },
                { id2: 8924921982, name: "Sandra Rodríguez" },
                { id2: 4889239821, name: "Diego Beltrán" },
                { id2: 3941759121, name: "Santiago Fernandez" },
                { id2: 1090139012, name: "Alejandra Ramos" },
                { id2: 9420259230, name: "Tatiana Pérez" },
                { id2: 1094340934, name: "Juliana Gonzalez"},
                { id2: 1012904204, name: "Leandro Martinez"},
            ],
            tableData3: [
                { id3: 1012342014, nombre: "Dillan Guevara", vehiculo: 4242, empresa: "Turistrans" },
                { id3: 1024828529, nombre: "Juan Diaz", vehiculo: 4242, empresa: "Turistrans" },
                { id3: 1023942341, nombre: "María Rosas", vehiculo: 1582, empresa: "Transportes La Serena" },
                { id3: 1924824542, nombre: "Catalina Rodríguez", vehiculo: 1582, empresa: "Transportes La Serena" },
                { id3: 1490209432, nombre: "Mario Pérez", vehiculo: 1239, empresa: "Macarena" },
                { id3: 4901093492, nombre: "Cristian López", vehiculo: 1239, empresa: "Macarena" },
                { id3: 1393928322, nombre: "Juan Ramos", vehiculo: 2108, empresa: "TransMoreira" },
                { id3: 3498289529, nombre: "Natalia Hortúa", vehiculo: 2108, empresa: "TransMoreira" },
                { id3: 1049891343, nombre: "Mariana Gonzalez", vehiculo: 4209, empresa: "Transporte Oro" },
                { id3: 9314829432, nombre: "Ramiro Cortez", vehiculo: 4209, empresa: "Transporte Oro" },
                { id3: 8924921982, nombre: "Sandra Rodríguez", vehiculo: 9503, empresa: "Transportes Galicia" },
                { id3: 4889239821, nombre: "Diego Beltrán", vehiculo: 9503, empresa: "Transportes Galicia" },
                { id3: 3941759121, nombre: "Santiago Fernandez", vehiculo: 8539, empresa: "Expreso Las Torres" },
                { id3: 1090139012, nombre: "Alejandra Ramos", vehiculo: 8539, empresa: "Expreso Las Torres" },
                { id3: 9420259230, nombre: "Tatiana Pérez", vehiculo: 3483, empresa: "TransportCiénaga" },
                { id3: 1094340934, nombre: "Juliana Gonzalez", vehiculo: 3483, empresa: "TransportCiénaga" },
                { id3: 1012904204, nombre: "Leandro Martinez", vehiculo: 2309, empresa: "Rápido San Carlos" },
                
            ],
            ventana: false,
            ventana1: false,
            ventana2: false,
            ventana3: false
        }
    },
    methods: {
        volver() {
            this.$router.push('/inicioUsuarios')
        },
        PDF() {
            const element = document.getElementById('element-to-pdf')

            this.generatePDF(element)
        },
        PDF1() {
            const element1 = document.getElementById('element-to-pdf-1')

            this.generatePDF1(element1)
        },
        PDF2() {
            const element2 = document.getElementById('element-to-pdf-2')

            this.generatePDF2(element2)
        },
        PDF3() {
            const element3 = document.getElementById('element-to-pdf-3')

            this.generatePDF3(element3)
        },
        abrirModal() {
            this.ventana = true
        },
        generatePDF(element) {
            const opt = {
                margin: 0.5,
                filename: 'lista_empresas.pdf',
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'mm', format: 'legal', orientation: 'landscape' }
            }
            html2pdf().from(element).set(opt).save()
        },
        generatePDF1(element1) {
            const opt = {
                margin: 0.5,
                filename: 'lista_vehiculos.pdf',
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'mm', format: 'legal', orientation: 'landscape' }
            }
            html2pdf().from(element1).set(opt).save()
        },
        generatePDF2(element2) {
            const opt = {
                margin: 0.5,
                filename: 'lista_personas.pdf',
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'mm', format: 'legal', orientation: 'landscape' }
            }
            html2pdf().from(element2).set(opt).save()
        },
        generatePDF3(element3) {
            const opt = {
                margin: 0.5,
                filename: 'total_datos.pdf',
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'mm', format: 'legal', orientation: 'landscape' }
            }
            html2pdf().from(element3).set(opt).save()
        }
    }
}
</script>

<template>
    <title>Datos</title>

    <div id="app">
        <img src="../assets/fondo4.jpg" alt="" id="index-image">

        <button type="submit" @click.prevent="volver()">Volver</button>

        <center>
            <h1>Aquí podrás exportar a PDF los datos de empresas, vehículos y personas</h1>

            <button type="submit" @click.prevent="ventana=true" class="ventana">
                <font-awesome-icon :icon="['fa', 'building']" class="icon"></font-awesome-icon><br/><br/>
                Empresas
            </button>

            <button type="submit" @click.prevent="ventana1=true" class="ventana">
                <font-awesome-icon :icon="['fa', 'bus']" class="icon"></font-awesome-icon><br/><br/>
                Vehiculos
            </button>

            <button type="submit" @click.prevent="ventana2=true" class="ventana">
                <font-awesome-icon :icon="['fa', 'users']" class="icon"></font-awesome-icon><br/><br/>
                Personas
            </button>

            <button type="submit" @click.prevent="ventana3=true" class="ventana">
                <font-awesome-icon :icon="['fa', 'database']" class="icon"></font-awesome-icon><br/><br/>
                Datos totales
            </button>
        </center>

        <center>
            <div class="content-1" v-bind="ventana" v-if="ventana">
                <div class="pdf-1">
                        
                    <h2>Lista de empresas</h2>

                    <table class="table-1" id="element-to-pdf">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>   
                        <tr v-for="row in tableData" :key="row.id">
                            <td>{{ row.id }}</td>
                            <td>{{ row.empresa }}</td>
                        </tr>
                    </table>

                    <button type="submit" id="PDF" class="PDF" @click.prevent="PDF()">Exportar a PDF</button><br/>
                    <button type="submit" @click.prevent="ventana=false" class="cerrar">Cerrar</button>
                </div>
            </div>

            <div class="content-2" v-bind="ventana1" v-if="ventana1">
                <div class="pdf-2">

                    <h2>Lista de vehículos</h2>

                    <table class="table-2" id="element-to-pdf-1">
                        <tr>
                            <th>Id</th>
                            <th>Placa</th>
                            <th>Capacidad</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                        <tr v-for="row in tableData1" :key="row.id1">
                            <td>{{ row.id1 }}</td>
                            <td>{{ row.placa }}</td>
                            <td>{{ row.capacidad }}</td>
                            <td>{{ row.fecha }}</td>
                            <td>{{ row.hora }}</td>
                        </tr>
                    </table>

                    <button type="submit" id="PDF" class="PDF-1" @click.prevent="PDF1()">Exportar a PDF</button>
                    <button type="submit" @click.prevent="ventana1=false" class="cerrar-1">Cerrar</button>
                </div>
            </div>

            <div class="content-3" v-bind="ventana2" v-if="ventana2">
                <div class="pdf-3">

                    <h2>Lista de personas</h2>

                    <table class="table-3" id="element-to-pdf-2">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                        <tr v-for="row in tableData2" :key="row.id2">
                            <td>{{ row.id2 }}</td>
                            <td>{{ row.name }}</td>
                        </tr>
                    </table>

                    <button type="submit" id="PDF" class="PDF-2" @click.prevent="PDF2()">Exportar a PDF</button>
                    <center><button type="submit" @click.prevent="ventana2=false" class="cerrar">Cerrar</button></center>
                </div>        
            </div>
            
            <div class="content-4" v-bind="ventana3" v-if="ventana3">
                <div class="pdf-4">

                    <h2>Datos totales</h2>

                    <table class="table-4" id="element-to-pdf-3">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Vehículo</th>
                            <th>Empresa</th>
                        </tr>
                        <tr v-for="row in tableData3" :key="row.id3">
                            <td>{{ row.id3 }}</td>
                            <td>{{ row.nombre }}</td>
                            <td>{{ row.vehiculo }}</td>
                            <td>{{ row.empresa }}</td>                        
                        </tr>
                    </table>

                    <button type="submit" id="PDF" class="PDF-3" @click.prevent="PDF3()">Exportar a PDF</button>
                    <button type="submit" @click.prevent="ventana3=false" class="cerrar-3">Cerrar</button>
                </div>
            </div>
        </center>

        <center>
            <h3>Vista previa</h3>
            <h4>(Ejemplo tabla vehículos)</h4>
        </center>

        <img src="../assets/vista-previa.png" alt="" class="img">

        <br/><br/>
    </div>
</template>

<style scoped>
#app {
    position: relative;
    height: 1150px;
}

#index-image {
    width: 100%;
    height: 1100px;
    margin: 0;
    padding: 0;
    position: fixed;
}

button {
    margin: 15px;
    border-radius: 20px;
    width: 80px;
    height: 30px;
    background-color: #083D77;
    border: none;
    color: white;
    position: absolute;
    z-index: 10;
}

button:hover {
    background-color: #001a35;
}

.pagination {
    position: inherit;
    margin-left: 400px;
    bottom: 375px;
}

.content-1, .content-2, .content-3, .content-4 {
    position: relative;
    justify-content: center;
    align-items: center;
    bottom: 100px;
    z-index: 10;
}

.pdf-1, .pdf-2, .pdf-3, .pdf-4 {
    background-color: #949494;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 50px;
    width: 1500px;
    height: 1450px;
}

.table-1 {
    background-color: #CDCDCD;
    position: relative;
    margin-left: 35px;
    top: 10px;
    width: 50%;
}

.table-2 {
    background-color: #CDCDCD;
    position: relative;
    margin-left: 15px;
    top: 10px;
    width: 70%;
}

.table-3 {
    background-color: #CDCDCD;
    position: relative;
    margin-left: 35px;
    top: 10px;
    width: 50%;
}

.table-4 {
    background-color: #CDCDCD;
    position: relative;
    margin-left: 5px;
    top: 10px;
    width: 70%;
}

tr {
    padding: 10px;
    position: relative;
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

.PDF {
    position: relative;
    top: 15px;
    width: 150px;
    color: white;
    background-color: #083D77;
}

.PDF-1 {
    position: relative;
    bottom: 50px;
    left: 145px;
    width: 150px;
    color: white;
    background-color: #083D77;
}

.PDF-2 {
    position: relative;
    top: 15px;
    width: 150px;
    color: white;
    background-color: #083D77;
}

.PDF-3 {
    top: 1300px;
    width: 150px;
    color: white;
    background-color: #083D77;
}

.PDF:hover {
    background-color: #001a35;
}

.PDF-1:hover {
    background-color: #001a35;
}

.ventana {
    position: relative;
    background-color: #083D77;
    width: 260px;
    height: 260px;
    top: 120px;
    right: 1px;
    margin: 15px;
    border-radius: 20px;
    border: none;
    color: white;
}

.ventana:hover {
    background-color: #001a35;
    transform: translateY(-10px);
    transition: 0.8s;
}

.icon {
    font-size: 90px;
}

.cerrar {
    position: relative;
    bottom: 5px;
}

.cerrar-1 {
    position: relative;
    margin-top: 70px;
    margin-right: 250px;
}

.cerrar-2 {
    position: relative;
    bottom: 5px;
}

.cerrar-3 {
    position: relative;
    margin-top: 100px;
    margin-left: 50px;
}

h1 {
    position: relative;
    right: 5px;
    top: 100px;
    color: white;
}

h2 {
    color: black;
}

h3 {
    position: absolute;
    right: 870px;
    top: 490px;
    color: white;
}

h4 {
    position: absolute;
    right: 800px;
    top: 545px;
    color: white;
}

.img {
    position: absolute;
    top: 600px;
    left: 530px;
    height: 500px;
}

footer {
    position: relative;
    height: 130px;
    background-color: #083D77;
    color: white;
    top: 80px;
}
</style>