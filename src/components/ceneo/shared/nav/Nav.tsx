import Link from "next/link";
import NavSearch from "./NavSearch";
import NavUserButtons from "./NavUserButtons";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full py-3 bg-white lg:py-4">
      <div className="flex items-center justify-between h-full mx-auto max-w-[1300px]">
        <Link
          href={"/"}
          className="flex mx-auto ml-4 text-2xl font-bold transition-all select-none text-ceneo-primary hover:text-ceneo-secondary"
        >
          CENEO
        </Link>

        <NavSearch />

        <NavUserButtons />
      </div>
    </nav>
  );
}
