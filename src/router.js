import { createRouter, createWebHistory } from "vue-router";

import Principal from './components/Principal.vue'
import Login from './components/Login.vue'
import RecuperarContrasena from './components/RecuperarContrasena.vue'
import InicioUsuarios from './components/InicioUsuarios.vue'
import CrearEmpresa from './components/CrearEmpresa.vue'
import Vehiculos from './components/Vehiculos.vue'
import Personas from './components/Personas.vue'
import CodigoQR from './components/CodigoQR.vue'
import Perfil from './components/Perfil.vue'
import Register from './components/Register.vue'
import Mapa from './components/Mapa.vue'
import Politicas from './components/Politicas.vue'
import PQRS from './components/PQRS.vue'
import Empresas from './components/Empresas.vue'
import Datos from './components/Datos.vue'
import Cookies from './components/Cookies.vue'
import Contact from './components/Contact.vue'

const routes = [
    {
        name: 'Principal',
        path: '/',
        component: Principal
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    },
    {
        name: 'RecuperarContrasena',
        path: '/recuperarContrasena',
        component: RecuperarContrasena
    },
    {
        name: 'InicioUsuarios',
        path: '/inicioUsuarios',
        component: InicioUsuarios
    },
    {
        name: 'CrearEmpresa',
        path: '/crearempresa',
        component: CrearEmpresa
    },
    {
        name: 'Vehiculos',
        path: '/vehiculos',
        component: Vehiculos
    },
    {
        name: 'Personas',
        path: '/personas',
        component: Personas
    },
    {
        name: 'CodigoQR',
        path: '/codigoqr',
        component: CodigoQR
    },
    {
        name: 'Perfil',
        path: '/perfil',
        component: Perfil
    },
    {
        name: 'Mapa',
        path: '/mapa',
        component: Mapa
    },
    {
        name: 'Politicas',
        path: '/pol',
        component: Politicas
    },
    {
        name: 'PQRS',
        path: '/pqrs',
        component: PQRS
    },
    {
        name: 'Empresas',
        path: '/empresas',
        component: Empresas
    },
    {
        name: 'Datos',
        path: '/datos',
        component: Datos
    },
    {
        name: 'Cookies',
        path: '/cookies',
        component: Cookies
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router