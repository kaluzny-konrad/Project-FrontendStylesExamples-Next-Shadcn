import HeaderCategory from "./HeaderCategory";

type Props = {};

export default function HeaderCategories({}: Props) {
  const categories = [
    "Elektronika",
    "Moda",
    "Dom i ogród",
    "Zdrowie",
    "Uroda",
    "Sport",
    "Kultura",
    "Dziecko",
    "Książki",
    "Motoryzacja",
    "Kolekcje",
    "Firma",
    "Inne",
  ];

  return (
    <div className="w-full p-5 bg-white lg:w-80 overflow-x-clip">
      <p className="mb-2 text-sm font-semibold text-gray-900">Kategorie</p>
      <div className="flex flex-row lg:flex-col">
        {categories.map((category) => (
          <div key={category} className="py-2">
            <HeaderCategory category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
