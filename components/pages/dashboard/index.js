"use client";
import Header from "@/components/Header";
import PaginatedCountries from "@/components/PaginatedCountries";
import countriesData from "@/public/data/data.json";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="p-4">
        <PaginatedCountries countries={countriesData} />
      </main>
    </div>
  );
}