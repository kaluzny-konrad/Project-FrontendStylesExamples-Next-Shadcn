import { cn, getPriceWithSpaces } from "@/lib/utils";
import React from "react";

type Props = {
  value: number;
  penny: number;
  from: boolean;
  big?: boolean;
};

export default function Price({ value, penny, from, big }: Props) {
  return (
    <div className="flex items-baseline text-xs text-gray-800 whitespace-pre-wrap">
      {from && <p>od </p>}
      <p className={cn(`font-bold text-ceneo-primary`, 
        big ? `text-2xl` : `text-lg`
      )}>
        {getPriceWithSpaces(value)}
      </p>
      <p className={cn("text-ceneo-primary",
        big ? `text-lg` : ``
      )}>,{penny}</p>
      <p> zł</p>
    </div>
  );
}
