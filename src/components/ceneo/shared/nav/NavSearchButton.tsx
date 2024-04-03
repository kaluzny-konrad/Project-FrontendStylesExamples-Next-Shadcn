import { SearchIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavSearchButton({}: Props) {
  return (
    <Link
      href={"/search"}
      className="flex gap-2 px-8 py-3 text-white transition-all cursor-pointer select-none bg-ceneo-primary hover:bg-ceneo-secondary"
    >
      <SearchIcon size={20} />
      <p className="text-sm uppercase">Szukaj</p>
    </Link>
  );
}
