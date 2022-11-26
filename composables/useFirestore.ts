import {collection, getDocs, query, doc, setDoc, updateDoc, where, getDoc} from "firebase/firestore";

import {getCurrentUser} from "~/composables/useFirebaseAuth";
import ShortUniqueId from "short-unique-id";

export const initUser = async (email, username) => {
    const {$firestore} = useNuxtApp();
    const createUID = new ShortUniqueId({length: 8})
    const uid = createUID()

    await setDoc(doc($firestore, email, 'userInfo'), {
        name: username,
        id: uid
    });

    await setDoc(doc($firestore, 'idToUser', uid), {
        user: email
    });
};

export const createProfile = async (profileName) => {
    const {$firestore} = useNuxtApp();
    const { $auth } = useNuxtApp();
    await setDoc(doc($firestore, $auth.currentUser.email, profileName), {});
};

export const sendMessage = async (email, profileName, customerEmail, customerName, message, date, dateNow) => {
    const {$firestore} = useNuxtApp();

    await setDoc(doc($firestore, email, profileName, 'messages', dateNow), {
        customerEmail: customerEmail,
        customerName: customerName,
        message: message,
        date: date
    });
};


export const findServiceEmail = async (id) => {
    const {$firestore} = useNuxtApp();

    const docRef = doc($firestore, "idToUser", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data().user;
};


export const getProfiles = async  () => {
    const {$firestore} = useNuxtApp()
    const user:any = await getCurrentUser();
    const q = query(collection($firestore, user.email));
    const querySnapshot = await getDocs(q);
    const profiles = [];

    querySnapshot.forEach((doc) => {
        profiles.push(doc.id);
    })

    const userInfoIndex = profiles.indexOf('userInfo')
    profiles.splice(userInfoIndex, 1)
    return profiles
}






//tests
export const createUserCollection = async (email) => {
    const {$firestore} = useNuxtApp()

    const docRef = doc($firestore, email,  'pizza', 'messages', 'tomek@gamil.com', 'customerMessage');

    await setDoc(docRef, {
        name: 'tomek',
        message:'hi you cos tam jakaś wiadomość',
        date: '29.11.2022'
    });

    // await setDoc(doc($firestore, email, 'profiles'), {});

    // try {
    //     // const docRef = await addDoc(collection($firestore, email), {});
    //
    //
    //
    //     // console.log("Document written with ID: ", docRef.id);
    // }

}

export const addProfile = async (profileName) => {
    const {$firestore} = useNuxtApp()
    const { $auth } = useNuxtApp()

}

export const updateDocument = async () => {
    const {$firestore} = useNuxtApp()
    const { $auth } = useNuxtApp()

    const docRef = doc($firestore, $auth.currentUser.email, 'profiles');

    await updateDoc(docRef, {
        message: 1,
    })
}