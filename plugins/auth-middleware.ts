export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'))
        if (!isLogged) {
            return navigateTo('/login')
        }
    })

})