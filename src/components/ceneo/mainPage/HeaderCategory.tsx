import { PrinterIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  category: string;
};

export default function HeaderCategory({ category }: Props) {
  return (
    <Link
      href={"/ceneo/category"}
      className="flex items-center gap-2 text-gray-900"
    >
      <PrinterIcon className="text-gray-700" size={20} />
      <p className="text-sm">{category}</p>
    </Link>
  );
}
