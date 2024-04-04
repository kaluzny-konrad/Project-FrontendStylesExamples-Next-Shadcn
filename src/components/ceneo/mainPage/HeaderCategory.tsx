import { PrinterIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  category: string;
};

export default function HeaderCategory({ category }: Props) {
  return (
    <Link
      href={"/ceneo/category"}
      className="flex flex-col items-center gap-2 mx-2 text-gray-900 lg:mx-0 lg:flex-row"
    >
      <div className="p-3 rounded-full lg:p-0 bg-ceneo-primary lg:rounded-none lg:bg-transparent">
        <PrinterIcon className="w-8 h-8 text-white lg:w-5 lg:h-5 lg:text-gray-700" />
      </div>
      <p className="text-xs lg:text-sm">{category}</p>
    </Link>
  );
}
