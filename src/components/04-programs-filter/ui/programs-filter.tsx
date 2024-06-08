import React from "react";
import { IProgramsFilter } from "../model";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/app/store";
// import { toggleCategory, toggleAllCategories } from "../model";
import "./programs-filter.scss";

export const ProgramsFilter: React.FC<IProgramsFilter> = (props) => {
  const { allCategoriesButton, categoryButtons } = props;
  // const dispatch = useDispatch();
  // const { selectedCategories, showAllCategories } = useSelector(
  //   (state: RootState) => state.filter
  // );

  return (
    <div className="programs-filter">
      <div className="toggleAllCategories">
        {allCategoriesButton}
        {/* <button
          className={showAllCategories ? "active" : ""}
          onClick={() => dispatch(toggleAllCategories())}
        >
          все программы
        </button> */}
      </div>
      <div className="categoryButtons">
        {categoryButtons}
        {/* <button
          className={
            showAllCategories || selectedCategories.includes("A")
              ? "active"
              : ""
          }
          onClick={() => dispatch(toggleCategory("A"))}
        >
          категория A
        </button>
        <button
          className={
            showAllCategories || selectedCategories.includes("B")
              ? "active"
              : ""
          }
          onClick={() => dispatch(toggleCategory("B"))}
        >
          категория B
        </button>
        <button
          className={
            showAllCategories || selectedCategories.includes("C")
              ? "active"
              : ""
          }
          onClick={() => dispatch(toggleCategory("C"))}
        >
          категория C
        </button> */}
      </div>
    </div>
  );
};
