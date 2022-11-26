import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {useUserGlobalState} from "~/stores/user";
import {useGlobalLoginError} from "~/stores/loginError";
import {useMainStore} from "~/stores/mainStore";

export const signUpUser = async (email, password, username)=> {
    const { $auth } = useNuxtApp();
    await createUserWithEmailAndPassword($auth, email, password)
        .then( async () => {
            await initUser(email, username);  //init user to firestore
            navigateTo('/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const logInUser = async (email, password) => {
    const { $auth } = useNuxtApp();
    const globalState = useUserGlobalState();
    const globalLoginError = useGlobalLoginError();

    await signInWithEmailAndPassword($auth, email, password)
        .then(() => {
            navigateTo('/profiles');
            globalState.setStatusToLogged();

            if(globalLoginError) {
                globalLoginError.resetError()
            }
        })
        .catch((error) => {
            const errorCode = error.code;

            if(errorCode) {
                globalLoginError.setError(errorCode)

            }
        });
}

export const logOutUser = async () => {
    const { $auth } = useNuxtApp();
    await $auth.signOut();
    const globalState = useUserGlobalState();
    const mainStore = useMainStore()

    globalState.setStatusToLoggedOut();
    mainStore.resetProfile();
    navigateTo('/');
}


export const getCurrentUser = () => {
    const { $auth } = useNuxtApp();
    return new Promise((res, reject) => {
        $auth.onAuthStateChanged((user) => {
            if(user) {
                return res(user)
            }
        })
    })
};








