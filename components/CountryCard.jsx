export default function CountryCard({ country }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
      <img src={country.flag} alt={`${country.name} flag`} className="w-full h-32 object-cover" />
      <h2 className="mt-2 text-xl font-semibold">{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
