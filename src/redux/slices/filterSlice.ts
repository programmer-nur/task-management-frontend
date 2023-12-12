import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  status: null | boolean;
  searchTerm: string;
}

const initialState: IProduct = {
  status: null,
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterData: (state, action: PayloadAction<boolean | null>) => {
      state.status = action.payload;
    },
    searched: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { filterData, searched } = filterSlice.actions;

export default filterSlice.reducer;
