import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import * as admin from 'firebase-admin'

const config = {
    apiKey: 'AIzaSyBJbKVWjAHHlMbSzX3Ivj_9V1oy31FEY1U',
    authDomain: 'e-commerce-store-db-a3b29.firebaseapp.com',
    databaseURL: 'https://e-commerce-store-db-a3b29.firebaseio.com',
    projectId: 'e-commerce-store-db-a3b29',
    storageBucket: 'e-commerce-store-db-a3b29.appspot.com',
    messagingSenderId: '661424246453',
    appId: '1:661424246453:web:f0d32016ec8e9e3b9ff8fc',
    measurementId: 'G-FCV5K7Z0H5'
}

const serviceAccount = require('../../e-commerce-store-db-a3b29-firebase-adminsdk-q1or8-1f5886aed9.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://e-commerce-store-db-a3b29.firebaseio.com'
})

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
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

firebase.initializeApp(config)
firebase.firestore.setLogLevel('debug')
export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
