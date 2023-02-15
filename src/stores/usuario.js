import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../routes/router";

// export nombrado
export const usarUsuarioStore = defineStore("usarStore", {
  // state: () => {
  //     return {
  //         // retornar un objeto
  //     }
  // }

  state: () => ({
    // de igual forma retoruna un objeto, ahorrando alguna lineas de codigo
    usuarioData: null,
    loadingUsuario: false,
    cargarSesion: false,
  }),

  // getters: {
  //     // el state es como el computed
  // },

  // los actions modifican el valor del state, pero no funciona con los computeds
  actions: {
    async registrarUsuario(email, password) {
      this.loadingUsuario = true;
      try {
        // para crear un usuario
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.usuarioData = {
          email: user.email,
          uid: user.uid,
        };
        router.push("/");
        console.log(this.usuarioData);
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUsuario = false;
      }
    },

    async loginUsuario(email, password) {
      this.loadingUsuario = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.usuarioData = {
          email: user.email,
          uid: user.uid,
        };
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUsuario = false;
      }
    },
    async cerrarSesionUsuario() {
      try {
        await signOut(auth);
        this.usuarioData = null;
        router.push("/login");
      } catch (error) {}
    },
    usuarioActual() {
      // resolve = completado
      // reject = incompleto
      return new Promise((resolve, reject) => {
        // hacer onAuthStateChanged para esperar que verefique si el usuario esta autenticado si existe o no
        // todo esto es un observador
        const unsuscribe = onAuthStateChanged(auth,(user) => {
            if (user) {
              this.usuarioData = {
                email: user.email,
                uid: user.uid,
              };
            } else {
              this.usuarioData = null;
          }
          // retorna al usuario
            resolve(user);
        }, (e) => reject(e));
        // termina con el observador
        unsuscribe();
      });
    },
  },
});
