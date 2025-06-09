const BASE_URL = "https://restcountries.com/v3.1";

const FIELDS = "name,cca3,flags,population,region,capital";

export async function getAllCountries() {
  const response = await fetch(`${BASE_URL}/all?fields=${FIELDS}`);
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}

export async function getCountryByName(name) {

  const response = await fetch(`${BASE_URL}/name/${name}?fields=${FIELDS}`);
  if (!response.ok) throw new Error("Country not found");
  return response.json();
}

export async function getCountriesByRegion(region) {
  const response = await fetch(`${BASE_URL}/region/${region}?fields=${FIELDS}`);
  if (!response.ok) throw new Error("Failed to fetch countries by region");
  return response.json();
}
