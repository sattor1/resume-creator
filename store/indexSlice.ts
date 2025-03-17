import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainFields: null,
  experienceFields: null,
  educationFields: null,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setMainState(state, action) {
      state.mainFields = action.payload;
    },
    setExperienceFields(state, action) {
      state.experienceFields = action.payload;
    },
    setEducationFields(state, action) {
      state.educationFields = action.payload;
    },
  },
});

export const { setMainState, setExperienceFields, setEducationFields } =
  indexSlice.actions;
export default indexSlice.reducer;
