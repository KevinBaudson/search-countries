import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../services/api";

import SearchInput from "../../components/SearchInput/SearchInput.jsx";
import CountryList from "../../components/CountryList/CountryList.jsx";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount >= filteredCountries.length) {
      setVisibleCount(10);
    } else {
      setVisibleCount((prev) => prev + 10);
    }
  };

  return (
    <section className="countries-page">
      <h2>🌍 Countries List</h2>

      <SearchInput
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(10);
        }}
      />

      {loading
        ? <p>Carregando lista...</p>
        : <CountryList countries={visibleCountries} />
      }

      {!loading && filteredCountries.length > 10 && (
        <div className="button-wrapper">
          <button onClick={handleShowMore} className="show-more-button">
            {visibleCount >= filteredCountries.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Countries;
