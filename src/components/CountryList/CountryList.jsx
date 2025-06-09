import { Link } from "react-router-dom";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  return (
    <ul className="countries-list-li">
      {countries.map((country) => (
        <li key={country.cca3} className="country-item">
          <Link to={`/countries/${country.cca3}`}>
            <img src={country.flags.png} alt={country.name.common} />
            <div className="country-info">
              <span className="country-name">{country.name.common}</span>
              <span className="country-region">{country.region}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
