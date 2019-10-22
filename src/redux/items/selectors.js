import { createSelector } from 'reselect'

const selectItemsState = state => state.Items;

export const selectItems = createSelector(
    [selectItemsState],
    (Items) => Items.items
);

export const selectLoadingItems = createSelector(
    [selectItemsState],
    (Items) => Items.loadingItems
);

