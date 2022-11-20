import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {useUserGlobalState} from "~/stores/user";
import {useGlobalLoginError} from "~/stores/loginError";

export const createUser = async (email, password)=> {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigateTo('/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


export const logInUser = async (email, password) => {
    const auth = getAuth();
    const globalState = useUserGlobalState();
    const globalLoginError = useGlobalLoginError();

    await signInWithEmailAndPassword(auth, email, password)
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
    const auth = getAuth();
    await auth.signOut();
    const store = useUserGlobalState();

    store.setStatusToLoggedOut();
    navigateTo('/');
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    // @ts-ignore
    firebaseUser.value = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        // @ts-ignore
        firebaseUser.value = user;
    });
}










