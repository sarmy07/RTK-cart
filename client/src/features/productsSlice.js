import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const res = await axios.get("http://localhost:4000/products");
    return res?.data;
  }
);

const productsSlice = createSlice({
  name: "products ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productsSlice.reducer;
export const { fetchProducts } = productsSlice.actions;
