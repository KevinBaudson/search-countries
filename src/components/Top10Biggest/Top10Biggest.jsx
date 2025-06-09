import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../services/api.js";
import "./Top10Biggest.css";

const Top10Biggest = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then(data => {
        const sorted = data
          .filter(country => country.area)
          .sort((a, b) => b.area - a.area)
          .slice(0, 10);
        setCountries(sorted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="biggest-countries-section">
      <h2>Top 10 Biggest Countries (by area)</h2>
      <div className="card-container">
        {countries.map((country, index) => (
          <div className="country-card" key={country.cca3}>
            <div className="card-rank">#{index + 1}</div>
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="card-flag"
            />
            <h3 className="card-name">{country.name.common}</h3>
            <p className="card-area">{country.area.toLocaleString()} km²</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Top10Biggest;
