const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}

export async function getCountryByName(name) {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  if (!response.ok) throw new Error("Country not found");
  return response.json();
}

export async function getCountriesByRegion(region) {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  if (!response.ok) throw new Error("Failed to fetch countries by region");
  return response.json();
}
