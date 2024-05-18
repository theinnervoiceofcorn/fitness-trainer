import { ProgramCard } from "../../components";
import React, { useState } from "react";
import { PROGRAMS_TYPE_A, PROGRAMS_TYPE_B, PROGRAMS_TYPE_C } from "./data";
import "./program-card-container.scss";

// Define types
type ProgramCardData = {
  className: string;
  cardName: string;
  cardDescription: string;
  programPrice: string;
};

// Container Component
const ProgramCardContainer: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "A",
    "B",
    "C",
  ]);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(true);

  // Combine all program cards data
  const programCards: ProgramCardData[] = [
    ...PROGRAMS_TYPE_A,
    ...PROGRAMS_TYPE_B,
    ...PROGRAMS_TYPE_C,
  ];

  // Handler to toggle category selection
  const toggleCategory = (category: string) => {
    setShowAllCategories(false);

    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((e) => e !== category));
    } else {
      const newSelectedCategories = [...selectedCategories, category];
      setSelectedCategories(newSelectedCategories);

      if (
        newSelectedCategories.length === 3 &&
        newSelectedCategories.includes("A") &&
        newSelectedCategories.includes("B") &&
        newSelectedCategories.includes("C")
      ) {
        setShowAllCategories(true);
      }
    }
  };

  // Handler to toggle displaying cards of all categories
  const toggleAllCategories = () => {
    setShowAllCategories(!showAllCategories);
    if (showAllCategories) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(["A", "B", "C"]);
    }
  };

  return (
    <section className="programs">
      {/* Category selection buttons */}
      <div className="programs-filter">
        <button
          className={
            showAllCategories ? "active allCategories" : "allCategories"
          }
          onClick={toggleAllCategories}
        >
          все программы
        </button>
        <button
          className={
            showAllCategories || selectedCategories.includes("A")
              ? "active"
              : ""
          }
          onClick={() => toggleCategory("A")}
        >
          категория A
        </button>
        <button
          className={
            showAllCategories || selectedCategories.includes("B")
              ? "active"
              : ""
          }
          onClick={() => toggleCategory("B")}
        >
          категория B
        </button>
        <button
          className={
            showAllCategories || selectedCategories.includes("C")
              ? "active"
              : ""
          }
          onClick={() => toggleCategory("C")}
        >
          категория C
        </button>
      </div>

      {/* Display filtered program cards */}
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

export default ProgramCardContainer;
