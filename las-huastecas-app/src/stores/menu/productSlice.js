import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  //
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = [...action.payload.data];
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const selectAllProducts = (state) => state.products; // return what's CURRENTLY STORE in redux state of products

// export actions
export const { getProducts } = productsSlice.actions;

// update products state, but reducers are not async, so add as an extra reducer
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/products-by-categories"
    );
    const data = await response.json();
    return data;
  }
);

export default productsSlice.reducer;

/////////////////////////////////////////////////
