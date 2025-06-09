import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../services/api.js";
import "./Top10Populous.css";

const Top10Populous = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then(data => {
        const sorted = data
          .filter(country => country.population)
          .sort((a, b) => b.population - a.population)
          .slice(0, 10);
        setCountries(sorted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="populous-countries-section">
      <h2>Top 10 Most Populous Countries</h2>
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
            <p className="card-area">{country.population.toLocaleString()} people</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Top10Populous;
