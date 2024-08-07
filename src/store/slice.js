import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  locations: [],
  formData: {
    location: "",
    total_sqft: "",
    bath: "",
    bkh: "",
  },
  estimatedPrice: null,
  showAlert: false,
  status: "idle",
  error: null,
};

export const fetchLocations = createAsyncThunk(
  "homePrice/fetchLocations",
  async () => {
    const response = await axios.get(
      "http://127.0.0.1:5000/get_location_names"
    );
    return response.data.locations || [];
  }
);

export const predictHomePrice = createAsyncThunk(
  "homePrice/predictHomePrice",
  async (data) => {
    const response = await axios.post(
      "http://127.0.0.1:5000/predict_home_price",
      data
    );
    return response.data.estimated_price;
  }
);

const homePriceSlice = createSlice({
  name: "homePrice",
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setShowAlert(state, action) {
      state.showAlert = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(predictHomePrice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(predictHomePrice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.estimatedPrice = action.payload;
        state.showAlert = true;
      })
      .addCase(predictHomePrice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setFormData,setShowAlert} = homePriceSlice.actions;

export default homePriceSlice.reducer;
