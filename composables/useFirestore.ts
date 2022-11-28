import {collection, getDocs, query, doc, setDoc, updateDoc, where, getDoc, deleteDoc} from "firebase/firestore";

import {getCurrentUser} from "~/composables/useFirebaseAuth";
import ShortUniqueId from "short-unique-id";
import {useMainStore} from "~/stores/mainStore";

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

export const sendMessage = async (email, profileName, customerEmail, customerName, message, date, dateNow) => {
    const {$firestore} = useNuxtApp();

    await setDoc(doc($firestore, email, profileName, 'messages', dateNow), {
        customerEmail: customerEmail,
        customerName: customerName,
        message: message,
        date: date
    });
};

export const getCustomersMessages = async (messageType) => {
    const {$firestore} = useNuxtApp();
    const mainStore = useMainStore();
    const user:any = await getCurrentUser();
    let docName = null;

    switch (messageType) {
        case 1:
            docName = 'messages'
            break;

        case 2:
            docName = 'likedMessages'
            break;
    }


    const q = query(collection($firestore, user.email, mainStore.selectedProfile, docName));
    const querySnapshot = await getDocs(q);
    const messagesData = [[], []]


    querySnapshot.forEach((doc) => {
        messagesData[0].push(doc.data());
        messagesData[1].push(doc.id);
    });


    return messagesData
};


export const moveMessageToLiked = async (message, messageID) => {
    const {$firestore} = useNuxtApp();
    const mainStore = useMainStore();
    const user:any = await getCurrentUser();

    await deleteDoc(doc($firestore, user.email, mainStore.selectedProfile, 'messages', messageID));

    const dateNow = Date.now().toString()
    await setDoc(doc($firestore, user.email, mainStore.selectedProfile, 'likedMessages', dateNow), {
        customerEmail: message.customerEmail,
        customerName: message.customerName,
        message: message.message,
        date: message.date
    });

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