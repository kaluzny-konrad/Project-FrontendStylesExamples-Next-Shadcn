import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBasketLogin({}: Props) {
  return (
    <div className="mx-4">
      <Link
        href="/ceneo/login"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Zaloguj się
      </Link>
    </div>
  );
}
