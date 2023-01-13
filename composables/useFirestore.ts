import {collection, getDocs, query, doc, setDoc, getDoc, deleteDoc} from "firebase/firestore";

import {getCurrentUser} from "@/composables/useFirebaseAuth";
import ShortUniqueId from "short-unique-id";
import {useMainStore} from "@/stores/mainStore";

import firestoreProfileColNames from "~/enums/firestoreProfileColNames";

export const initUser = async (email, username) => {
    const {$firestore} = useNuxtApp();
    const createUID = new ShortUniqueId({length: 8});
    const uid = createUID();

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

    await setDoc(doc($firestore, email, profileName, firestoreProfileColNames.Messages, dateNow), {
        customerEmail: customerEmail,
        customerName: customerName,
        message: message,
        date: date
    });
};

export const getCustomersMessages = async (docName) => {
    const {$firestore} = useNuxtApp();
    const mainStore = useMainStore();
    const user:any = await getCurrentUser();


    const q =  query(collection($firestore, user.email, mainStore.selectedProfile, docName));
    const querySnapshot = await getDocs(q);
    const messagesData = [[], []]

    querySnapshot.forEach((doc) => {
        messagesData[0].push(doc.data());
        messagesData[1].push(doc.id);
    });

    return messagesData
};


export const moveMessageToNewCol = async (colName, message) => {
    const {$firestore} = useNuxtApp();
    const mainStore = useMainStore();
    const user:any = await getCurrentUser();

    const dateNow = Date.now().toString()

    const data = {
        customerEmail: message.customerEmail,
        customerName: message.customerName,
        message: message.message,
        date: message.date
    }


    switch (colName) {
        case firestoreProfileColNames.LikedMessages:
            await setDoc(doc($firestore, user.email, mainStore.selectedProfile, colName, dateNow), data);
            break;

        case firestoreProfileColNames.Gifts:
            await setDoc(doc($firestore, user.email, mainStore.selectedProfile, colName, dateNow), {
                ...data,
                giftCode: message.giftCode,
                gift: message.gift,
                securityCode: message.securityCode,
                isGiftActive: message.isGiftActive
            });
            break;
    }
}


export const deleteDocFromCollection = async(collectionName, docID) => {
    const {$firestore} = useNuxtApp();
    const mainStore = useMainStore();
    const user:any = await getCurrentUser();

    await deleteDoc(doc($firestore, user.email, mainStore.selectedProfile, collectionName, docID));
}
