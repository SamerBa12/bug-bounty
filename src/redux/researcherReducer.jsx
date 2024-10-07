import { createSlice } from "@reduxjs/toolkit";
export const researcherSlice = createSlice({
  name: "researcher",
  initialState: {
    uuid: null,
  },
  reducers: {
    setUuid: (state, action) => {
      state.uuid = action.payload;
      
    },
  },
});
export const { setUuid } = researcherSlice.actions;
export default researcherSlice.reducer;
