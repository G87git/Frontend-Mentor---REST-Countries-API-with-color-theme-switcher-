"use client";

import { useState } from "react";
import CountryCard from "@/components/CountryCard";

export default function PaginatedCountries({ countries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastCountry >= countries.length}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </>
  );
}
