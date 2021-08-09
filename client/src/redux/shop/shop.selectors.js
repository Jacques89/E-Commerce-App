import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => state.shop

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)

// Turn object into a array
export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const selectCollection = memoize((collectionURLParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionURLParam] : null
    )
)

export const selectCollectionItem = (collectionURLParam, itemUrlParam) =>
    createSelector([selectCollection(collectionURLParam)], (collection) =>
        collection ? collection.items.filter((item) => item.id === parseInt(itemUrlParam))[0] : null
    )

export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching)

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!!shop.collections)
