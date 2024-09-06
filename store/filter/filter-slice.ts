import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
    [key: string]: string | undefined;
}

const initialState: FiltersState = {
    name: '',
    username: '',
    email: '',
    phone: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,

    reducers: {
        setFilter(state, action: PayloadAction<Partial<FiltersState>>) {
            console.log('payload', action.payload);
            return {
                ...state,
                ...action.payload,
            };
        },
       
        clearFilters(state) {
            return initialState;
        },
    },
});

export const { setFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
