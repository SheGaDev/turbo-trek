import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdvertsAPI } from "utils/services/adverts-api";

const fetchAdvertsThunk = createAsyncThunk(
  "adverts/fetch",
  async (state, api) => {
    try {
      const response = await AdvertsAPI.fetchAdverts();
      return response.data;
    } catch (error) {
      api.rejectWithValue(error.message);
    }
  }
);

export { fetchAdvertsThunk };
