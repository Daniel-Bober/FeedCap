export default defineNuxtPlugin(() => {
    addRouteMiddleware('notAuth', () => {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'))
        if (isLogged) {
            return navigateTo('/messages')
        }
    })

})