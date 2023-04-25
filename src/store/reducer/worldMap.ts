import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAppAsyncThunk } from '../utils/redux';
import { CountryInfos } from '../../@types/country';

interface WorldMapState {
  previouslySelectedCountry: string
  selectedCountryCode: string
  countryInfos: CountryInfos | null
  zoom: number
  loading: boolean
  error: string
}

const initialState: WorldMapState = {
  previouslySelectedCountry: '',
  selectedCountryCode: '',
  countryInfos: null,
  zoom: 1,
  loading: false,
  error: '',
};

export const setCountryCode = createAction<string>('worldMap/SET_COUNTRY_CODE');
export const setNewCountry = createAppAsyncThunk('worldMap/SET_NEW_COUNTRY', async (cca2Code: string) => {
  const { data: country } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${cca2Code}`,
  );
  // console.log(country[0]);
  return country[0] as CountryInfos;
});

export const worldMapReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNewCountry.pending, (state) => {
      state.loading = true;
    })
    .addCase(setNewCountry.fulfilled, (state, action) => {
      state.loading = false;
      state.countryInfos = action.payload;
      // console.log(state.countryInfos);
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
