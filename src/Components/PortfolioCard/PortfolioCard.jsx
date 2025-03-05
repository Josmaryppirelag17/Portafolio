import "./PortfolioCard.css";
import github from "../../assets/github-black.svg";
import share from "../../assets/share-nodes-solid.svg";

const PortfolioCard = ({ title, image, description, tags, demo, code }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-info">
        <p className="text-title">{title}</p>
        <p className="text-body">{description}</p>
        <p className="text__body-tags">{tags}</p>
      </div>
      <div className="card-footer">
        <button className="card-button">
          <img className="card__button-img" src={share} alt="" />
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Visitar
          </a>
        </button>
        <button className="card-button">
          <img className="card__button-img" src={github} alt={title} />
          <a href={code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
