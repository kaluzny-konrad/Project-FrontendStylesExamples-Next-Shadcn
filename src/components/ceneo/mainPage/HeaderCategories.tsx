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
    <div className="p-5 bg-white w-80">
      <p className="mb-2 text-sm font-semibold text-gray-900">Kategorie</p>
      {categories.map((category) => (
        <div key={category} className="py-2">
          <HeaderCategory category={category} />
        </div>
      ))}
    </div>
  );
}
