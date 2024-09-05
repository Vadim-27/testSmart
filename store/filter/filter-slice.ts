import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type FiltersState = {
    name: string;
    username: string;
    email: string;
    phone: string;
};

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
