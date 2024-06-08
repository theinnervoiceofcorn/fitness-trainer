import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { Button } from "@/shared/ui";
import { IProgramsFilter } from "../model";

export const ProgramsFilterFeatures: React.FC<IProgramsFilter> = (props) => {
  const { type } = props;

  const dispatch = useDispatch();
  const { selectedCategories, showAllCategories } = useSelector(
    (state: RootState) => state.filter
  );

  const renderProgramsFilter = () => {
    switch (type) {
      case "allCategories":
        return (
          <Button
            buttonText="все программы"
            className={showAllCategories ? "active" : ""}
            onClick={() => dispatch(toggleAllCategories())}
          />
        );
        break;

      default:
        break;
    }
  };

  return;
};
