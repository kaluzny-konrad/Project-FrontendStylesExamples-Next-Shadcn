import { getPriceWithSpaces } from "@/lib/utils";
import React from "react";

type Props = {
  value: number;
  penny: number;
};

export default function Price({ value, penny }: Props) {
  return (
    <div className="flex items-baseline text-xs text-gray-800 whitespace-pre-wrap">
      <p>od </p>
      <p className="text-lg font-bold text-ceneo-primary">
        {getPriceWithSpaces(value)}
      </p>
      <p className="text-ceneo-primary">,{penny}</p>
      <p> zł</p>
    </div>
  );
}
