import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {useUserGlobalState} from "~/stores/user";

export const createUser = async (email, password)=> {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials
}

export const logInUser = async (email, password) => {
    const auth = getAuth();
    const store = useUserGlobalState()

    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigateTo('/profiles')
            store.setStatusToLogged()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return credentials
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










