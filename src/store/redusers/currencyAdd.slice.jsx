import { createSlice } from "@reduxjs/toolkit";
import { dataFetch, ratesFetch } from "../../services/dataServices";

const initialState = {
  loading: null,
  ccurrencyAddData: null,
  errorMessage: null,
  currencyAddData:[],
 
};

const currencyAddSlice = createSlice({
  name: "currencyAdd",
  initialState,
  reducers: {
 
  },
  extraReducers(builder) {
    builder
      .addCase(dataFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(dataFetch.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "Something went wrong";
      })
      .addCase(dataFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.currencyAddData = action.payload
        state.errorMessage = null;
      });
  },
});


export default currencyAddSlice.reducer;