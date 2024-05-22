import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  toggleCategory,
  toggleAllCategories,
} from "../../store/slices/filter-slice";
import "./programs-filter.scss";

export const ProgramsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCategories, showAllCategories } = useSelector(
    (state: RootState) => state.filter
  );

  return (
    <div className="programs-filter">
      <button
        className={showAllCategories ? "active allCategories" : "allCategories"}
        onClick={() => dispatch(toggleAllCategories())}
      >
        все программы
      </button>
      <button
        className={
          showAllCategories || selectedCategories.includes("A") ? "active" : ""
        }
        onClick={() => dispatch(toggleCategory("A"))}
      >
        категория A
      </button>
      <button
        className={
          showAllCategories || selectedCategories.includes("B") ? "active" : ""
        }
        onClick={() => dispatch(toggleCategory("B"))}
      >
        категория B
      </button>
      <button
        className={
          showAllCategories || selectedCategories.includes("C") ? "active" : ""
        }
        onClick={() => dispatch(toggleCategory("C"))}
      >
        категория C
      </button>
    </div>
  );
};
