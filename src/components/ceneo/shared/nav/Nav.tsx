import Link from "next/link";
import NavSearch from "./NavSearch";
import NavUserButtons from "./NavUserButtons";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className="w-full h-20 bg-white">
      <div className="flex items-center justify-between h-full mx-24">
        <Link href={"/"}>
          <p className="text-2xl font-bold transition-all select-none text-ceneo-primary hover:text-ceneo-secondary">
            CENEO
          </p>
        </Link>

        <NavSearch />

        <NavUserButtons />
      </div>
    </div>
  );
}
