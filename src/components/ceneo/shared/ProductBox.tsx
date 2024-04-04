import Image from "next/image";
import Price from "./Price";
import Link from "next/link";

type Props = {};

export default function ProductBox({}: Props) {
  return (
    <Link href="/product/1">
      <div className="flex flex-col gap-2 p-2 space-y-4 min-w-36">
        <Image
          src="/ceneo/products/robot.webp"
          alt="product"
          width={200}
          height={200}
          className="p-4"
        />
        <div className="mx-auto text-center">
          <div className="text-xs text-gray-800">Dreame Roboticmower A1</div>
          <div className="flex">
            <div className="flex items-baseline mx-auto text-xs text-gray-800 whitespace-pre-wrap">
              <Price value={1999} penny={99} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
