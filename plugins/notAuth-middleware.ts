export default defineNuxtPlugin(() => {
    addRouteMiddleware('notAuth', () => {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'));
        const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));

        if (isLogged) {
            if(selectedProfile) {
                return navigateTo('/messages')
            }
        }
    })
})