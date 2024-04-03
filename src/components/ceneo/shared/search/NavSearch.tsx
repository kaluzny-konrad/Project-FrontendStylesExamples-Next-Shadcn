import NavSearchButton from "./NavSearchButton";

type Props = {};

export default function NavSearch({}: Props) {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Znajdź produkt lub sklep"
        className="px-4 text-sm font-light border border-gray-300 w-96"
      />
      <NavSearchButton />
    </div>
  );
}
