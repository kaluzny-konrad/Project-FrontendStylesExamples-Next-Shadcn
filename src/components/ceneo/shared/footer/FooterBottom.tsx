import Link from "next/link";
import React from "react";

type Props = {};

export default function FooterBottom({}: Props) {
  return (
    <div className="flex py-5 bg-gray-500 min-h-20">
      <div className="flex items-center mx-auto max-w-[1300px]">
        <Link
          href={"#"}
          className="hidden my-auto text-xl font-bold text-white transition-all select-none hover:text-gray-100 lg:block"
        >
          CENEO
        </Link>
        <div className="mx-auto text-center text-white lg:mx-40">
          <p className="mb-2 text-xs font-light">
            © 2005-2024 Ceneo.pl sp. z o.o. Korzystanie z serwisu oznacza
            akceptację regulaminu.
          </p>
          <p className="text-xs font-extralight">
            Ta strona jest chroniona przez reCAPTCHA i obowiązują ją Warunki
            korzystania z usługi oraz Polityka prywatności Google.
          </p>
        </div>
      </div>
    </div>
  );
}
