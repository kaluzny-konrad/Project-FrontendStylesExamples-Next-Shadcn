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
    <div className="w-full bg-white lg:w-80">
      <p className="px-5 pt-5 mb-2 text-sm font-semibold text-gray-900">Kategorie</p>
      <div className="flex flex-row px-2 overflow-x-auto lg:px-5 lg:flex-col ">
        {categories.map((category) => (
          <div key={category} className="py-2">
            <HeaderCategory category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
