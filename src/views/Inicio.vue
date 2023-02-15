<template>
    <div>
        <h1>Inicio</h1>
        <p>{{ usuarioStore.usuarioData?.email }}</p>
    </div>
</template>

<script setup>
import { usarUsuarioStore } from "../stores/usuario";

const usuarioStore = usarUsuarioStore()



</script>

