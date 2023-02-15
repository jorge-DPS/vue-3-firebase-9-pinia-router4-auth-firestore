<script setup>
import { ref } from 'vue';
import { usarUsuarioStore } from "../stores/usuario";
// import { useRouter } from "vue-router";

const usuarioStore = usarUsuarioStore()
// const router = useRouter()

const email = ref('jorge@mail.com')
const password = ref('1234567')

const manejadorDeEnvio = async () => {
    if (!email.value || password.value.length < 6) {
        return alert('llena los campos')
    }

    await usuarioStore.loginUsuario(email.value, password.value)
    // router.push('/')
}

</script>


<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="manejadorDeEnvio">
            <input type="email"  placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese password" v-model.trim="password">
            <button type="submit" :disabled="usuarioStore.loadingUsuario">Acceso</button>
        </form>

    </div>
</template>


