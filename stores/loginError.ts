import {defineStore} from "pinia";

export const useGlobalLoginError = defineStore('globalError', {
    state: () => {
        return {
            error: null,

        };
    },
    getters: {},
    actions: {

        setError(newError) {
            this.error = newError;
        },

        resetError() {
            this.error = null;
        }

    },
});