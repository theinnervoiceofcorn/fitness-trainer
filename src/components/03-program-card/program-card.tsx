import { useNavigate } from "react-router-dom";
import "./program-card.scss";

interface IProgramCard {
  id: number;
  className: string;
  backgroundImage: string;
  cardName: string;
  cardDescription: string;
  programPrice: string;
}

export const ProgramCard = ({
  id,
  className,
  backgroundImage,
  cardName,
  cardDescription,
  programPrice,
}: IProgramCard) => {
  const navigateTo = useNavigate();

  return (
    <article className={`card ${className}`}>
      <div
        className="card-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="program-info">
        <h3 className="card-name">{cardName}</h3>
        <div className="card-description">{cardDescription}</div>
        <div className="buttonsWrapper">
          <button className="button-primary">{programPrice} uzs</button>
          <button
            className="button-secondary"
            onClick={() => navigateTo(`/program/${id}`)}
          >
            подробнее
          </button>
        </div>
      </div>
    </article>
  );
};
