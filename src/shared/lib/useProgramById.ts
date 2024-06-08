import { useEffect, useState } from "react";
import {
  PROGRAMS_TYPE_A,
  PROGRAMS_TYPE_B,
  PROGRAMS_TYPE_C,
} from "@/shared/constants/programsCardsData";

interface Program {
  id: number;
  className: string;
  cardName: string;
  cardDescription: string;
  programPrice: string;
}

const allPrograms = [
  ...PROGRAMS_TYPE_A,
  ...PROGRAMS_TYPE_B,
  ...PROGRAMS_TYPE_C,
];

export const useProgramById = (id: number): Program | undefined => {
  const [program, setProgram] = useState<Program | undefined>(undefined);

  useEffect(() => {
    const foundProgram = allPrograms.find((program) => program.id === id);
    setProgram(foundProgram);
  }, [id]);

  return program;
};
