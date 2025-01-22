<script>
import Swal from "sweetalert2"

export default {
    el: "#app",
    data() {
        return {
            ProfileData: [
                { id: 1012342014, nombre: "Dillan Guevara", email: "dillangb230506@gmail.com", password: "1234567890", numero: "3116016034"}
            ],
            editarInfo: {
                id: "",
                nombre: "",
                email: "",
                password: "",
                numero: ""
            },
            ventana: false,
            profileImage: "",
            selectedFile: null,
            defaultImage: "https://vizualmexico.com.mx/wp-content/uploads/2022/04/Perfil-profesional-fondo-negro-1.jpeg",
            isDragging: false
        }
    },
    methods: {
        regresar() {
            this.$router.push('/inicioUsuarios')
        },
        inicio() {
            Swal.fire({
                icon: "question",
                text: "¿Quieres cerrar sesión?",
                showDenyButton: true,
                confirmButtonText: "Aceptar",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push('/')
                }
            })
        },
        abrirModalEditar(id) {
            const perfil = this.ProfileData.find(elemento => elemento.id === id)
            if (perfil) {
                this.editarInfo = { ...perfil }
                this.ventana = true
            }
        },
        actualizarInfo() {
            const index = this.ProfileData.findIndex(elemento => elemento.id === this.editarInfo.id)

            if (index !== -1) {
                this.ProfileData[index] = { ...this.editarInfo }
                
                Swal.fire({
                    title: "¡Listo!",
                    text: "Perfil actualizado correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                this.ventana = false
            } else {
                Swal.fire({
                    title: "¡Listo!",
                    text: "Información actualizada correctamente",
                    icon: "success",
                    confirmButtonText: "OK"
                })
            }
        },
        handleFileChange(event) {
            const file = event.target.files[0]
            this.loadImage(file)
        },
        onDragOver(event) {
            event.preventDefault()
            this.isDragging = true
        },
        onDragLeave(event) {
            event.preventDefault()
            this.isDragging = false
        },
        onDrop(event) {
            event.preventDefault()
            event.stopPropagination()
            this.isDragging = false
            const file = event.dataTransfer.files[0]
            this.loadImage(file)
        },
        loadImage(file) {
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    this.profileImage = e.target.result
                }
                reader.readAsDataURL(file)
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Por favor, selecciona un archivo de imagen válido",
                    icon: "error",
                    confirmButtonText: "OK"
                })
            }
        }
    },
}
</script>

<template>
    <title>Editar perfil</title>

    <button type="submit" id="regresar" @click="regresar">Ir a inicio</button>

    <center>
        <div class="header">
            <h1 class="title" v-bind="(row, index) in ProfileData" :key="index">Actualizar información del administrador</h1>
            <h2>Foto de perfil</h2>

            <div class="user">
                <div
                    class="profile"
                    @dragover="onDragOver"
                    @dragleave="onDragLeave"
                    @drop.prevent="onDrop"
                    :class="{ 'drag-active': isDragging }"
                >
                    <img 
                        :src="profileImage || defaultImage"
                        alt="Foto de perfil"
                        class="preview"
                    />
                    <span v-if="!profileImage" class="drag-text">
                        Arrastra una imagen
                    </span>
                </div>

                <input
                    type="file"
                    accept="image/*"
                    @change="handleFileChange"
                    class="file-input"
                />
            </div>
        </div>

        <br/>

        <div class="content">

            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Número</th>
                    <th>Editar</th>
                </tr>
                <tr v-for="(row, index) in ProfileData" :key="index">
                    <td>{{ row.id }}</td>
                    <td>{{ row.nombre }}</td>
                    <td>{{ row.email }}</td>
                    <td>{{ row.numero }}</td>
                    <td>
                        <button type="submit" id="edit" @click.prevent="abrirModalEditar(row.id)">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </button>&nbsp&nbsp
                    </td>
                </tr>
            </table>

            <div class="logout" @click="inicio">
                <h1 class="cerrar">Cerrar sesión</h1>
                <font-awesome-icon :icon="['fas', 'power-off']" class="off" />
            </div>
        </div>

        <div class="modal" v-bind="ventana" v-if="ventana">
            <div class="modal-content">
                <h1 class="title">Actualizar información</h1><br/><br/>

                <form>
                    <label for="">Id: </label>
                    <input type="text" v-model="editarInfo.id" placeholder="Id"><br/><br/>

                    <label for="">Nombre: </label>
                    <input type="text" v-model="editarInfo.nombre" placeholder="Nombre"><br/><br/>

                    <label for="">Email: </label>
                    <input type="text" v-model="editarInfo.email" placeholder="Email"><br/><br/>

                    <label for="">Password: </label>
                    <input type="password" v-model="editarInfo.password" placeholder="Password"><br/><br/>

                    <label for="">N° de recuperación: </label>
                    <input type="text" v-model="editarInfo.numero" placeholder="N° de recuperación"><br/><br/>

                    <button type="submit" @click.prevent="actualizarInfo()">Actualizar</button><br/><br/>
                    <button type="submit" @click.prevent="ventana=false">Cerrar</button>
                </form>
            </div>
        </div>
    </center>

</template>

<style scoped>
.content {
    background-color: #bbb8b2;
    width: 900px;
    height: 300px;
    top: 150px;
    position: relative;
}

.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: border-color 0.3s;
    position: relative;
}

.profile.drag-active {
    border-color: #007bff;
    background-color: #e6f7ff;
}

.preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.drag-text {
    position: absolute;
    color: #666;
    font-size: 20px;
}

.file-input {
    margin-top: 10px;
    margin-left: 130px;
    height: 50px;
    width: 550px;
}

.title {
    font-size: 30px;
    margin-top: 30px;
    color: black;
}

h2 {
    padding-top: 15px;
}

#regresar {
    margin-left: 20px;
    margin-top: 15px;
    font-size: 16px;
    background-color: #083D77;
    color: white;
    border: none;
    width: 80px;
    height: 35px;
    border-radius: 15px;
    cursor: pointer;
}

#codeqr {
    position: relative;
    width: 250px;
    height: 250px;
}

a {
    text-decoration: none;
    color: black;
    padding-bottom: 100px;
}

form {
    padding-bottom: 30px;
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
    margin: 10px;
}

button {
    background-color: #083D77;
    color: white;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 30px;
    font-size: 17px;
    cursor: pointer;
}

#regresar:hover {
    background-color: #001a35;
}

button:hover {
    background-color: #001a35;
}

.off {
    color: black;
    position: relative;
    font-size: 40px;
    margin-right: 195px;
    margin-top: 32px;
}

.cerrar {
    color: black;
    position: absolute;
    font-size: 30px;
    padding-left: 80px;
    padding-top: 31px;
    height: 100px;
}

.logout {
    background-color: #FFFFFF;
    height: 100px;
    width: 280px;
    margin-top: 40px;
    margin-right: 25px;
    border-radius: 20px;
}

.logout:hover {
    background-color: grey;
    cursor: pointer;
    border-radius: 20px;
}

table {
    background-color: #CDCDCD;
    top: 20px;
    position: relative;
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

#edit {
    width: 35px;
    height: 30px;
    background-color: #ffb30e;
    color: black;
    border-radius: 10px;
}

#edit:hover {
    background-color: #c28400;
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
    top: 25px;
    width: 550px;
    height: 650px;
}

.header {
    height: 200px;
    width: 800px;
}

.fileInput {
    background-color: #083D77;
    width: 150px;
    height: 30px;
    cursor: pointer;
    color: white;
}
</style>