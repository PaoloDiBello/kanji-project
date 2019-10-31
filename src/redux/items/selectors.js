import { createSelector } from 'reselect'

const selectItemsState = state => state.Items;

export const selectItems = createSelector(
    [selectItemsState],
    (Items) => Items.items
);


Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
    return Array.from(Array(Math.ceil(this.length/n)), (_,i)=>this.slice(i*n,i*n+n));
}});


export const selectItemsChunk = createSelector(
    [selectItems],
    (items) => items.chunk(6) 
);

export const selectLoadingItems = createSelector(
    [selectItemsState],
    (Items) => Items.loadingItems
);

