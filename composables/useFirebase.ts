import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {useUserGlobalState} from "~/stores/user";

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
    const store = useUserGlobalState();

    await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigateTo('/profiles');
            store.setStatusToLogged();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
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










