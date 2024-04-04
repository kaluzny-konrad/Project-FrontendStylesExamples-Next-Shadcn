import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavUserButtons({}: Props) {
  return (
    <div className="flex items-center mx-auto space-x-8 text-gray-700 lg:mx-8">
      <Link href={"/ceneo/basket"}>
        <ShoppingCartIcon className="hover:text-gray-600" />
      </Link>
      <Link href={"/wishlist"} className="hidden lg:block">
        <HeartIcon className="hover:text-gray-600" />
      </Link>
      <Link href={"/ceneo/login"} className="hidden lg:block">
        <UserIcon className="hover:text-gray-600" />
      </Link>
    </div>
  );
}
