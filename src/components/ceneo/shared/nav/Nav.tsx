import Link from "next/link";
import NavSearch from "./NavSearch";
import NavUserButtons from "./NavUserButtons";
import { MenuIcon } from "lucide-react";
import NavLogo from "./NavLogo";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full py-3 bg-white lg:py-4">
      <div className="flex items-center justify-between h-full mx-auto max-w-[1300px] min-h-10 lg:min-h-12">
        <NavLogo />

        <NavSearch />

        <NavUserButtons />
      </div>
    </nav>
  );
}
