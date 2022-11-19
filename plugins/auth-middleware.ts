import {getAuth} from "firebase/auth";

export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'))
        if(!isLogged) {
            return navigateTo('/login')
        }
    })

})