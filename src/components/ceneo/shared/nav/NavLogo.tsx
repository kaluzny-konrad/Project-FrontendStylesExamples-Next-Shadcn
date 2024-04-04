import Link from "next/link";
import { MenuIcon } from "lucide-react";

type Props = {};

export default function NavLogo({}: Props) {
  return (
    <div className="flex items-center">
      <MenuIcon className="block mx-3 lg:hidden" />

      <Link
        href={"/ceneo"}
        className="flex text-2xl font-bold transition-all select-none lg:ml-5 text-ceneo-primary hover:text-ceneo-secondary"
      >
        CENEO
      </Link>
    </div>
  );
}
