import { ProgramCard } from "../../components";
import { PROGRAMS_TYPE_A, PROGRAMS_TYPE_B, PROGRAMS_TYPE_C } from "./data";
import "./programs.scss";
import "../../components/03-program-card/program-card.scss";

const data = { PROGRAMS_TYPE_A, PROGRAMS_TYPE_B, PROGRAMS_TYPE_C };

export const Programs = () => {
  return (
    <section className="programs">
      {data &&
        data.PROGRAMS_TYPE_A.map((program) => (
          <ProgramCard
            // imageSource={program.imageSource}
            // imageAltText={program.imageAltText}
            className={program.className}
            cardName={program.cardName}
            cardDescription={program.cardDescription}
            programPrice={program.programPrice}
          />
        ))}
      {data &&
        data.PROGRAMS_TYPE_B.map((program) => (
          <ProgramCard
            // imageSource={program.imageSource}
            // imageAltText={program.imageAltText}
            className={program.className}
            cardName={program.cardName}
            cardDescription={program.cardDescription}
            programPrice={program.programPrice}
          />
        ))}
      {data &&
        data.PROGRAMS_TYPE_C.map((program) => (
          <ProgramCard
            // imageSource={program.imageSource}
            // imageAltText={program.imageAltText}
            className={program.className}
            cardName={program.cardName}
            cardDescription={program.cardDescription}
            programPrice={program.programPrice}
          />
        ))}
    </section>
  );
};
