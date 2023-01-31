import { createSlice } from "@reduxjs/toolkit";
import { ratesFetch } from "../../services/dataServices";

const initialState = {
  loading: null,
  currencyData: null,
  errorMessage: null,
  currencyData:[],
  toRate: 'UAH',
  fromRate: 'USD',
  toValue: '',
  fromValue: '',
  currentRate: ''
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setToRate: (state, action)=>{
      state.toRate = action.payload
       
      state.toValue = (state.fromValue*state.currentRate).toFixed(4)
      
    },
    setFromRate: (state, action)=>{
      state.fromRate = action.payload
       
    },
    setToValue: (state, action)=>{
      state.toValue = action.payload
      state.fromValue = (action.payload/state.currentRate).toFixed(4)
    },
    setFromValue: (state, action)=>{
      state.fromValue = action.payload
      state.toValue = (action.payload*state.currentRate).toFixed(4)
    },
    setCurrentRate: (state, action)=>{
      state.currentRate = action.payload
    },
    handleExchange: (state, action)=>{
      let simple = state.toRate
      state.toRate = state.fromRate
      state.fromRate = simple
       
 
    },
  },
  extraReducers(builder) {
    builder
      .addCase(ratesFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(ratesFetch.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "Something went wrong";
      })
      .addCase(ratesFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.currencyData = [
          ...action.payload,
          {
            r030: 980,
            txt: 'Українська гривня',
            rate: 1,
            cc: 'UAH',
            exchangedate: new Date().toLocaleDateString(),
          },
        ]
        state.errorMessage = null;
      });
  },
});

export const {setToRate, setFromRate, setToValue, setFromValue, handleExchange, setCurrentRate } = currencySlice.actions;

export default currencySlice.reducer;