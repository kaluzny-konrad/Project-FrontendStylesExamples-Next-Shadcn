import SectionTitle from "@/components/ceneo/shared/SectionTitle";
import WrapperMaxWidth from "@/components/ceneo/shared/WrapperMaxWidth";
import Recommendations from "@/components/ceneo/shared/placements/Recommendations";
import { ShoppingBasketIcon } from "lucide-react";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <WrapperMaxWidth>
      <div className="flex flex-col pb-5 lg:mt-5">
        <div className="px-10 py-24 min-h-80">
            <ShoppingBasketIcon className="w-20 h-20 mx-auto text-ceneo-primary" />
            <h1 className="text-xl font-bold text-center text-slate-900">
              Twój koszyk jest pusty
            </h1>
            <p className="mt-2 text-center text-slate-500">
              Dodaj produkty do koszyka, aby móc je zakupić.
            </p>
        </div>
        <SectionTitle title="Polecane produkty" />
        <Recommendations count={6} />
      </div>
    </WrapperMaxWidth>
  );
}
