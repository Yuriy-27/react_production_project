import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readOnly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
