import { createSelector } from 'reselect';

const shopDirectory = state => state.shop;

export const selectCollections = createSelector(
    [shopDirectory],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => 
        collections[collectionUrlParam]
)