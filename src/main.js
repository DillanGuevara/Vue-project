import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faPlus,
    faPen,
    faTrash,
    faUser,
    faPowerOff,
    faQrcode,
    faBars,
    faPalette,
    faGear,
    faBell,
    faCookie,
    faInfo,
    faTicket,
    faUsers,
    faBus,
    faUserTie,
    faCircleQuestion,
    faBuilding,
    faFilePdf,
    faCircleXmark,
    faDatabase,
    faCircleInfo,
    faMagnifyingGlassPlus,
    faMagnifyingGlassMinus,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faPlus)
library.add(faPen)
library.add(faTrash)
library.add(faUser)
library.add(faPowerOff)
library.add(faQrcode)
library.add(faBars)
library.add(faPalette)
library.add(faGear)
library.add(faBell)
library.add(faCookie)
library.add(faInfo)
library.add(faTicket)
library.add(faUsers)
library.add(faBus)
library.add(faUserTie)
library.add(faCircleQuestion)
library.add(faBuilding)
library.add(faFilePdf)
library.add(faCircleXmark)
library.add(faDatabase)
library.add(faCircleInfo)
library.add(faFacebook)
library.add(faWhatsapp)
library.add(faGithub)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faMagnifyingGlassPlus)
library.add(faMagnifyingGlassMinus)

const app = createApp(App)

.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')