import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCountries } from "../../services/api";

import '../CountryDetails/CountryDetails.css'
const CountryDetails = () => {
  const { code } = useParams(); 
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getAllCountries().then((data) => {
      const found = data.find(c => c.cca3 === code);
      setCountry(found);
      console.log(found)
    });
  }, [code]);

  if (!country) return <p>Carregando detalhes do país...</p>;

  return (
    <div className="container-details">
          <h1>{country.name.common}</h1>
      <div className="country-data">
          <img src={country.flags.png} alt={country.name.common} />
          <p>Região: {country.region}</p>
          <p>População: {country.population.toLocaleString()}</p>
          <p>Capital: {country.capital?.[0]}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
