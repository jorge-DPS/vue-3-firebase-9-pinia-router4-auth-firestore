<template>
  <div>
    <h1>APP</h1>

    <nav v-if="!usuarioStore.cargarSesion">
      <router-link to="/" v-if="usuarioStore.usuarioData">Inicio</router-link>
      <router-link to="login" v-if="!usuarioStore.usuarioData">Login</router-link> |
      <router-link to="registro" v-if="!usuarioStore.usuarioData">Registro</router-link> |
      <button @click="usuarioStore.cerrarSesionUsuario" v-if="usuarioStore.usuarioData">Logout</button>
    </nav>

    <div v-else>
      Cargando usuario...
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { usarUsuarioStore } from "./stores/usuario";
const usuarioStore = usarUsuarioStore()

</script>