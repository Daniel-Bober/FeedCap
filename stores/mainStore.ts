import {defineStore} from "pinia";

export const useMainStore = defineStore('mainStore', {
    state: () => {
        return {
            selectedProfile: JSON.parse(localStorage.getItem('selectedProfile')),

        };
    },
    getters: {},
    actions: {

        setProfile(profileName) {
            this.selectedProfile = profileName;
            localStorage.setItem('selectedProfile', JSON.stringify(profileName))
        },

        resetProfile() {
            this.selectedProfile = null;
            localStorage.setItem('selectedProfile', JSON.stringify(null))
        }

    },
});