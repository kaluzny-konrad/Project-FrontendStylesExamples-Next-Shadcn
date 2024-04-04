import FreeShipping from "@/components/ceneo/shared/FreeShipping";
import Price from "@/components/ceneo/shared/Price";
import ProductAvailible from "@/components/ceneo/shared/ProductAvailible";
import WrapperMaxWidth from "@/components/ceneo/shared/WrapperMaxWidth";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <WrapperMaxWidth>
      <div className="flex flex-col lg:mt-5 lg:flex-row lg:gap-5">
        {/* ProductHeader */}
        <div className="flex flex-col py-5 bg-white lg:flex-row lg:w-full">
          <div className="lg:mx-10">
            <Image
              src="/ceneo/products/robot.webp"
              alt="product"
              width={300}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="lg:mr-5">
            <p className="py-2 font-bold text-center text-gray-900 lg:text-left">
              MIO MIVUE J30
            </p>
            <p className="pb-3 text-sm text-center text-gray-700 lg:text-left">
              Rejestrator jazdy Mio, rozdzielczość QHD, posiada wyświetlacz:
              Nie, obsługuje karty pamięci: Tak
            </p>
            <div className="absolute bg-white rounded-md lg:relative left-2 top-20 lg:left-0 lg:top-0">
              <div className="flex text-sm text-gray-700">
                <StarIcon
                  className="w-5 h-5 mr-1 text-orange-400"
                  fill="orange"
                />
                <p className="font-bold">4,8</p>
                <p>/5 (9)</p>
              </div>
            </div>
          </div>
        </div>

        {/* FastBuySection */}
        <div className="grid w-full grid-cols-2 gap-2 pb-5 align-middle bg-white lg:grid-cols-1 lg:flex-col lg:w-96">
          <div className="mx-auto lg:mt-5">
            <Price value={1999} penny={99} from={false} big={true} />
          </div>

          <div className="flex flex-col gap-2 mx-5 mb-5">
            <button className="w-full px-4 py-2 text-white transition-all cursor-pointer select-none bg-ceneo-primary hover:bg-ceneo-secondary">
              <p className="text-sm uppercase">KUP TERAZ</p>
            </button>
          </div>

          <div className="mx-auto">
            <FreeShipping />
          </div>
          <div className="mx-auto">
            <FreeShipping />
          </div>
        </div>
      </div>

      {/* ProductTabsButtons */}

      {/* ProductDescription */}

      {/* ProductReviews */}

      {/* ProductQuestions */}
      <div className="mb-5"></div>
    </WrapperMaxWidth>
  );
}
