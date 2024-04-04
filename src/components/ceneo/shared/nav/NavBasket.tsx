import NavBasketLogin from "./NavBasketLogin";
import NavLogo from "./NavLogo";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full py-3 bg-white lg:py-4">
      <div className="flex items-center justify-between h-full mx-auto max-w-[1300px] min-h-10 lg:min-h-12">
        <NavLogo />

        <NavBasketLogin />
      </div>
    </nav>
  );
}
