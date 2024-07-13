import fsPromises from 'fs/promises';
import path from 'path';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const countries = JSON.parse(jsonData);

  return {
    props: {
      countries,
    },
  };
}

export default function Home({ countries }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </main>
    </div>
  );
}
