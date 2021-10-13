import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// v9 compat packages are API compatible with v8 code

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    // userRef is the document reference
    const userRef = await firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    // this code simply creates the snapshot/data
    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const getUserCartRef = async (userId) => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId)
    const snapShot = await cartsRef.get()

    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc()
        await cartDocRef.set({ userId, cartItems: [] })
        return cartDocRef
    } else {
        return snapShot.docs[0].ref
    }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const auth = getAuth()
export const firestore = firebase.firestore()

export const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
