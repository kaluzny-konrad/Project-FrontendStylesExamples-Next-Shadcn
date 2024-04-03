import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavUserButtons({}: Props) {
  return (
    <div className="flex items-center space-x-8 text-gray-700">
      <Link href={"/basket"}>
        <ShoppingCartIcon />
      </Link>
      <Link href={"/basket"}>
        <HeartIcon />
      </Link>
      <Link href={"/basket"}>
        <UserIcon />
      </Link>
    </div>
  );
}
