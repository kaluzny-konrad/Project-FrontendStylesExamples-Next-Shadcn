import { FooterNav } from "@/components/types/footerNav";
import React from "react";
import FooterNewsletterForm from "./FooterNewsletterForm";

type Props = {};

export default function FooterTop({}: Props) {
  const footerNavs: FooterNav[] = [
    {
      title: "O Ceneo",
      sites: [
        { title: "O nas", url: "/Dyski_NAS" },
        { title: "Kontakt", url: "/sklepy/kontakt-sklep.pl-s25652" },
        { title: "Mapa strony", url: "/51553844" },
        { title: "Polityka prywatności", url: "/polityka-prywatnosci" },
        { title: "Kariera w Ceneo.pl", url: "/" },
      ],
    },
    {
      title: "Współpraca z Ceneo",
      sites: [
        { title: "Dla sklepów", url: "/" },
        { title: "Dla producentów", url: "/" },
        { title: "Pressroom", url: "/pressroom/" },
        { title: "Reklama - oferty sklepów", url: "/reklama-w-ceneo" },
        { title: "Program Partnerski", url: "/" },
      ],
    },
    {
      title: "Dla kupujących",
      sites: [
        { title: "Jak to działa", url: "/jak-dziala-kup-na-ceneo" },
        { title: "Bezpieczne zakupy", url: "/jak-dbamy-o-bezpieczenstwo" },
        { title: "Polityka zwrotów", url: "/oferty/zwrot-towaru" },
        { title: "Centrum pomocy", url: "/oferty/witaminy-centrum" },
        { title: "Zgłoś uwagi", url: "/s?i=merchant-items&me=A2518BF04FLKRR" },
      ],
    },
    {
      title: "Popularne kategorie",
      sites: [
        { title: "Sukienki", url: "/Sukienki" },
        { title: "Opony", url: "/Opony" },
        { title: "Laptopy", url: "/oferty/dobry-laptop" },
        { title: "Smartfony", url: "/Smartfony" },
        { title: "Buty damskie", url: "/oferty/buty-damskie" },
      ],
    },
  ];

  return (
    <div className="bg-white ">
      <div className="grid lg:grid-cols-5 grid-cols-2 justify-between pt-10 pb-5 mx-auto max-w-[1300px] px-5">
        {footerNavs.map((footerNav, index) => (
          <div key={index} className="flex flex-col">
            <p className="mb-2 text-lg font-bold text-gray-800">
              {footerNav.title}
            </p>
            {footerNav.sites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                className="mb-2 text-xs text-gray-500 hover:text-gray-800"
              >
                {site.title}
              </a>
            ))}
          </div>
        ))}
        <div className="flex flex-row lg:flex-col">
          {/* NewsletterForm */}
          <div className="flex-col hidden lg:flex">
            <div className="flex flex-col">
              <p className="mb-2 text-lg font-bold text-gray-800">Newsletter</p>
              <FooterNewsletterForm />
            </div>
          </div>
          {/* Social Icons in gray boxes (6 icons) */}
          <div className="flex gap-3 mx-5 my-5 lg:mx-auto">
            {[...Array(6)].map((_, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-sm"
              ></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
