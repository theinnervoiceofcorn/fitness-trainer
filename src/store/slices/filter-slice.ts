import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategories: string[];
  showAllCategories: boolean;
}

const initialState: FilterState = {
  selectedCategories: ["A", "B", "C"],
  showAllCategories: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.showAllCategories = false;
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category !== action.payload
        );
      } else {
        state.selectedCategories.push(action.payload);
        if (
          state.selectedCategories.length === 3 &&
          state.selectedCategories.includes("A") &&
          state.selectedCategories.includes("B") &&
          state.selectedCategories.includes("C")
        ) {
          state.showAllCategories = true;
        }
      }
    },
    toggleAllCategories: (state) => {
      state.showAllCategories = !state.showAllCategories;
      if (state.showAllCategories) {
        state.selectedCategories = ["A", "B", "C"];
      } else {
        state.selectedCategories = [];
      }
    },
  },
});

export const { toggleCategory, toggleAllCategories } = filterSlice.actions;
export default filterSlice.reducer;
