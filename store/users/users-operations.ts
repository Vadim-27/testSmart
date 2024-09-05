import { createAsyncThunk } from "@reduxjs/toolkit";

import {getAllUsers} from '../../services/UsersApi';

export const fetchAllUsers = createAsyncThunk(
  "users/fetch-all",
  async (_, thunkAPI) => {
    try {
      const data = await getAllUsers();
  
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
