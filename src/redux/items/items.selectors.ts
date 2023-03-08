import { createSelector } from "reselect";
import type { RootState } from "../../app/store";

export const selectItemsState = (state: RootState) => state.items;

export const selectItems = createSelector(
    [selectItemsState], 
    (items) => items.data
)