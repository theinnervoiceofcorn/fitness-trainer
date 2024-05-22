import "./program-card.scss";

interface IProgramCard {
  className: string;
  cardName: string;
  cardDescription: string;
  programPrice: string;
}

export const ProgramCard = ({
  className,
  cardName,
  cardDescription,
  programPrice,
}: IProgramCard) => {
  return (
    <article className={`card ${className}`}>
      <div className="card-bg"></div>
      <div className="program-info">
        <h3 className="card-name">{cardName}</h3>
        <div className="card-description">{cardDescription}</div>
        <div className="buttonsWrapper">
          <button className="button-primary">{programPrice} uzs</button>
          <button className="button-secondary">подробнее</button>
        </div>
      </div>
    </article>
  );
};
