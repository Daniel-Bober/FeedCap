import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

export const createUser = async (email, password)=> {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    console.log('user created')
    return credentials
}

export const logInUser = async (email, password)=> {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    console.log('user log in')
    return credentials
}

export const logOutUser = async ()=> {
    const auth = getAuth();
    await auth.signOut();
    console.log('user log out')
}

export const initUser = async ()=> {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    // @ts-ignore
    firebaseUser.value = auth.currentUser

    onAuthStateChanged(auth, (user) => {
        if (user) {

        } else {

        }
        // @ts-ignore
        firebaseUser.value = user;
        console.log( firebaseUser.value)
    });
}










