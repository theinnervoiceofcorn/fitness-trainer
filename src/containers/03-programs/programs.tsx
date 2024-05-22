import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProgramCard, ProgramsFilter } from "../../components";
import { PROGRAMS_TYPE_A, PROGRAMS_TYPE_B, PROGRAMS_TYPE_C } from "./data";
import "./programs.scss";

export const Programs: React.FC = () => {
  const { selectedCategories, showAllCategories } = useSelector(
    (state: RootState) => state.filter
  );

  const programCards = [
    ...PROGRAMS_TYPE_A,
    ...PROGRAMS_TYPE_B,
    ...PROGRAMS_TYPE_C,
  ];

  return (
    <section className="programs">
      <ProgramsFilter />
      <div className="cards-container">
        {programCards
          .filter(
            (card) =>
              showAllCategories || selectedCategories.includes(card.className)
          )
          .map((card, index) => (
            <ProgramCard
              key={index}
              className={card.className}
              cardName={card.cardName}
              cardDescription={card.cardDescription}
              programPrice={card.programPrice}
            />
          ))}
      </div>
    </section>
  );
};
