import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers } from './users-operations';

interface UsersState {
    items: any[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    items: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (store) => {
                store.loading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.items = payload;
            })
            .addCase(fetchAllUsers.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = typeof payload === 'string' ? payload : 'Unknown error';
            });
    },
});

export default usersSlice.reducer;
