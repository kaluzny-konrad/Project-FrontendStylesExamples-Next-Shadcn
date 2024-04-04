import Link from "next/link";
import NavBasketLogin from "./NavBasketLogin";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full py-3 bg-white lg:py-4">
      <div className="flex items-center justify-between h-full mx-auto max-w-[1300px]">
        <Link
          href={"/ceneo"}
          className="flex ml-5 text-2xl font-bold transition-all select-none text-ceneo-primary hover:text-ceneo-secondary"
        >
          CENEO
        </Link>


        <NavBasketLogin />
      </div>
    </nav>
  );
}
