import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess } from './shop.actions'

import ShopActionTypes from './shop.types'

import { fetchCollectionsAsync, fetchCollectionsStart } from './shop.sagas'

describe('fetch collections start saga', () => {
    it('should trigger on FETCH_COLLECTIONS_START', () => {
        const generator = fetchCollectionsStart()
        expect(generator.next().value).toEqual(
            takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
        )
    })
})

describe('fetch collections async saga', () => {
    const generator = fetchCollectionsAsync()

    it('should call firestore collection', () => {
        try {
            const getCollection = jest.spyOn(firestore, 'collection')
            generator.next()
            expect(getCollection).toHaveBeenCalled()
        } catch (error) {
            console.log(error)
        }
       
    })

    it('should call convertCollectionsSnapshot saga', () => {
        const mockSnapshot = {}
        expect(generator.next(mockSnapshot).value).toEqual(
            call(convertCollectionsSnapshotToMap, mockSnapshot)
        )
    })

    it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
        const mockCollectionsMap = {
            turntables: { id: 1 }
        }
        expect(generator.next(mockCollectionsMap).value).toEqual(
            put(fetchCollectionsSuccess(mockCollectionsMap))
        )
    })

    it('should fire fetchCollectionsFailure if get collection fails at any point', () => {
        const newGenerator = fetchCollectionsAsync()
        const error = {
            '@@redux-saga/IO': true,
            combinator: false,
            payload: {
                action: {
                    payload: "Cannot read property 'get' of undefined",
                    type: 'FETCH_COLLECTIONS_FAILURE'
                },
                channel: undefined
            },
            type: 'PUT'
        }
        expect(newGenerator.next().value).toMatchObject(error)
    })
})
