import ThemeToggle from "./theme.util";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
}
