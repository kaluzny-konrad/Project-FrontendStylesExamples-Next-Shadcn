import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavUserButtons({}: Props) {
  return (
    <div className="flex items-center space-x-8 text-gray-700">
      <Link href={"/basket"}>
        <ShoppingCartIcon className="hover:text-gray-600" />
      </Link>
      <Link href={"/basket"}>
        <HeartIcon className="hover:text-gray-600" />
      </Link>
      <Link href={"/basket"}>
        <UserIcon className="hover:text-gray-600" />
      </Link>
    </div>
  );
}
