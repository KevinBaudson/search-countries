import { useState } from "react";
import { Link } from "react-router-dom";
import "../CardContinent/CardContinent.css";

const CardContinent = ({ image, name, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <Link to="#" className="card-link">
      <div className="card-continent">
        <div className="image-card-continent">
          <img src={image} alt={name} />
        </div>
        <div className="description">
          <p className={expanded ? "expanded" : ""}>{description}</p>
          <button className="read-more-btn" onClick={toggleReadMore}>
            {expanded ? "Read less" : "Read more"}
          </button>
          <h3>
            <span>{name}</span>!
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CardContinent;
