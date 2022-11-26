import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.public.apiBase,
        projectId: "feedcap",
    };

    const app = initializeApp(firebaseConfig);

    const firestore = getFirestore(app);
    const auth = getAuth();

    nuxtApp.provide('firestore', firestore);
    nuxtApp.provide('auth', auth);

});