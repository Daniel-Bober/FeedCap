import {defineStore} from "pinia";

export const useUserGlobalState = defineStore('userState', {
    state: () => {
        return {
            isLogged: JSON.parse(localStorage.getItem('isLogged')),
        };
    },
    getters: {},
    actions: {

        setStatusToLogged() {
            this.isLogged = true;
            localStorage.setItem('isLogged', JSON.stringify(true))
        },

        setStatusToLoggedOut() {
            this.isLogged = false;
            localStorage.setItem('isLogged', JSON.stringify(false))
        }
    },
});