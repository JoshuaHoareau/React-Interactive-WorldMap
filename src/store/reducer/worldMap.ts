import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAppAsyncThunk } from '../utils/redux';
import { ICountryInfos } from '../../@types/country';

interface WorldMapState {
  previouslySelectedCountry: string
  selectedCountryCode: string
  countryInfos: ICountryInfos[] | null
  loading: boolean
  error: string
}

const initialState: WorldMapState = {
  previouslySelectedCountry: '',
  selectedCountryCode: '',
  countryInfos: null,
  loading: false,
  error: '',
};

export const setCountryCode = createAction<string>('worldMap/SET_COUNTRY_CODE');
export const setNewCountry = createAppAsyncThunk('worldMap/SET_NEW_COUNTRY', async (cca2Code: string) => {
  const { data: country } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${cca2Code}`,
  );
  return country as ICountryInfos[];
});

export const worldMapReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNewCountry.pending, (state) => {
      state.error = '';
      state.loading = true;
    })
    .addCase(setNewCountry.fulfilled, (state, action) => {
      state.loading = false;
      state.countryInfos = action.payload;
    })
    .addCase(setNewCountry.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to load data. Please, try again.';
    })
    .addCase(setCountryCode, (state, action) => {
      state.previouslySelectedCountry = state.selectedCountryCode;
      state.selectedCountryCode = action.payload;
    });
});
