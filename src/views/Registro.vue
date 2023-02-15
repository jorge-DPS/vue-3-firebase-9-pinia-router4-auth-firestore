
<template>
    <div>
        <h1>Registro</h1>
        <form @submit.prevent="manejadorDeEnvio">
            <input type="email" placeholder="ingrese el email" v-model.trim="email">
            <input type="password" placeholder="ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="usuarioStore.loadingUsuario">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { usarUsuarioStore } from "../stores/usuario";
// import { useRouter } from "vue-router";

const usuarioStore = usarUsuarioStore();
// const router = useRouter()

const email = ref('jorge@mail.com')
const password = ref('1234567')

const manejadorDeEnvio = async () => {

    if (!email.value || password.value.length < 6) {
        return alert('llena los campos')
    }
    // console.log(email.value);
    // console.log(password.value);
    console.log('procesando formulario');
    await usuarioStore.registrarUsuario(email.value, password.value)
    // router.push('/')
}

</script>
