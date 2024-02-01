import { createSlice } from "@reduxjs/toolkit";
import { advertsState } from "../state/adverts-state";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: advertsState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(isPending, () => {});
  },
});

export const advertsReducer = advertsSlice.reducer;
