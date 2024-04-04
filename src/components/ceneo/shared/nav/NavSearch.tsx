import { SearchIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavSearch({}: Props) {
  return (
    <div className="flex mx-auto bg-gray-200 rounded-md lg:bg-white">
      <input
        type="text"
        placeholder="Znajdź produkt"
        className="w-40 px-4 text-sm font-light bg-gray-200 border-0 lg:border lg:border-gray-200 lg:bg-white lg:rounded-none rounded-l-md lg:w-96 active:outline-none focus:outline-none"
      />
      <Link
        href={"/search"}
        className="flex gap-2 px-2 py-2 text-gray-700 transition-all bg-gray-200 border-0 cursor-pointer select-none lg:text-white lg:px-8 lg:py-3 rounded-r-md lg:rounded-none lg:bg-ceneo-primary lg:hover:bg-ceneo-secondary"
      >
        <SearchIcon size={20} />
        <p className="hidden text-sm uppercase lg:block">Szukaj</p>
      </Link>
    </div>
  );
}
