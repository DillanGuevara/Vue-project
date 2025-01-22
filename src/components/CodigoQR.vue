<script>
import html2pdf from "html2pdf.js"

export default {
    el: '#app',
    data() {
        return {
            id: "",
            name: "",
            qrCodeDataUrl: ""
        }
    },
    mounted() {
        const { id, name } = this.$route.query
        this.id = id
        this.name = name

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Id${id},Name${name}`;

        fetch(qrCodeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al obtener el código QR: ${response.statusText}`);
                }
                return response.blob();
            })
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.qrCodeDataUrl = reader.result;
                    console.log("Código QR en base64:", this.qrCodeDataUrl);
                }
                reader.readAsDataURL(blob);
            })
            .catch(error => {
                console.error("Error al cargar el código QR como base64:", error)
            });
    },
    methods: {
        regresar() {
            this.$router.push('/personas')
        },
        PDF() {
            const element = document.getElementById('element-to-pdf');
            const qrImage = element.querySelector('img');

            if (qrImage.complete) {
                this.generatePDF(element)
            } else {
                qrImage.onload = () => {
                    this.generatePDF(element)
                }
                qrImage.onerror = () => {
                    console.error("Error al cargar la imagen del código QR")
                }
            }
        },
        generatePDF(element) {
            const opt = {
                margin:       0.5,
                filename:     'ticket.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 3 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        }
    }
}
</script>

<template>
    <title>Código QR</title>

    <div id="app">
        <button id="regresar" @click.prevent="regresar('/personas')">Regresar</button>

        <center>
            <div class="content" id="element-to-pdf">

                <h1>Código QR generado con éxito</h1><br/>
                <h2>Nombre: {{ name }}</h2><br/>
                <h2>Documento: {{ id }}</h2><br/>
                <h2>Fecha de salida: 10/01/2025</h2><br/>
                <h2>Hora de salida: 2:00 pm</h2><br/>
                <h2>Vehículo: 4242</h2><br/>

                <div v-if="qrCodeDataUrl">
                    <img :src="qrCodeDataUrl" alt="Código QR" class="returnqr">
                </div>
            </div>

            <button type="submit" id="PDF" @click="PDF()">Exportar a PDF</button>
        </center>
    </div>
</template>

<style scoped>
.content {
    background-color: #898989;
    color: black;
    padding: 50px;
    height: 800px;
    width: 800px;
}

h1 {
    font-size: 40px;
}

h2 {
    padding-top: 15px;
    font-size: 22px;
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

#PDF {
    margin-top: 25px;
    font-size: 16px;
    background-color: #083D77;
    color: white;
    border: none;
    width: 130px;
    height: 35px;
    border-radius: 15px;
    cursor: pointer;
}

#regresar:hover {
    background-color: #001a35;
}

#PDF:hover {
    background-color: #001a35;
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

.returnqr {
    width: 250px;
    height: 250px;
}
</style>