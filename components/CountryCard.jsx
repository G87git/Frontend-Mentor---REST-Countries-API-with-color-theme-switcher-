import Image from 'next/image';

export default function CountryCard({ country }) {
    return (
        <div className="bg-gray-800 dark:bg-gray-800 p-4 rounded shadow-md border">
            <div className="relative w-full h-32">
                <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={100}
                    height={100}
                    className="rounded-t"
                />
            </div>
            <h2 className="mt-2 text-xl font-semibold">{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
        </div>
    );
}
