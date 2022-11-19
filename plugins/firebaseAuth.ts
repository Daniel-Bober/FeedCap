import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export default defineNuxtPlugin(async nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.apiBase,
    };

    const app = await initializeApp(firebaseConfig);


    initUser();


    const auth = getAuth();

    nuxtApp.provide('auth', auth)
})