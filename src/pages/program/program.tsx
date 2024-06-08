import React from "react";
import { useParams } from "react-router-dom";
import { useProgramById } from "@/shared/lib";
import "./program.scss";

export const ProgramPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const programId = Number(id);
  const program = useProgramById(programId);

  if (!program) return <div>Program not found</div>;

  return (
    <div className="program-detail">
      <h2>{program.cardName}</h2>
      <p>{program.cardDescription}</p>
      <p>Price: {program.programPrice} uzs</p>
    </div>
  );
};
