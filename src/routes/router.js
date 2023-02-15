import { createRouter, createWebHistory } from "vue-router";
import { usarUsuarioStore } from "../stores/usuario";

// imprtar cada uno de los componentes
import Inicio from "../views/Inicio.vue";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";

const requiereAuth = async (to, from, next) => {
	const usuarioStore = usarUsuarioStore()
	usuarioStore.cargarSesion = true
	const usuario = await usuarioStore.usuarioActual()

	if (usuario) {
		next()
	} else {
		next('/login')
	}
	usuarioStore.cargarSesion = false
}

const routes = [
  {
    path: "/",
    component: Inicio,
    beforeEnter: requiereAuth,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/registro",
    component: Registro,
  },
];

const router = createRouter({
  // routes es una variables reservada que si o si se usa para las rutas
  routes,
  history: createWebHistory(),
});

export default router;
