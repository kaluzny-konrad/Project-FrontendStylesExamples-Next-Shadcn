import { FooterNav } from "@/components/types/footerNav";
import React from "react";
import FooterNewsletterForm from "./FooterNewsletterForm";
import Link from "next/link";

type Props = {};

export default function FooterTop({}: Props) {
  const footerNavs: FooterNav[] = [
    {
      title: "O Ceneo",
      sites: [
        { title: "O nas", url: "#" },
        { title: "Kontakt", url: "#" },
        { title: "Mapa strony", url: "#" },
        { title: "Polityka prywatności", url: "#" },
        { title: "Kariera w Ceneo.pl", url: "#" },
      ],
    },
    {
      title: "Współpraca z Ceneo",
      sites: [
        { title: "Dla sklepów", url: "#" },
        { title: "Dla producentów", url: "#" },
        { title: "Pressroom", url: "#" },
        { title: "Reklama - oferty sklepów", url: "#" },
        { title: "Program Partnerski", url: "#" },
      ],
    },
    {
      title: "Dla kupujących",
      sites: [
        { title: "Jak to działa", url: "#" },
        { title: "Bezpieczne zakupy", url: "#" },
        { title: "Polityka zwrotów", url: "#" },
        { title: "Centrum pomocy", url: "#" },
        { title: "Zgłoś uwagi", url: "#" },
      ],
    },
    {
      title: "Popularne kategorie",
      sites: [
        { title: "Sukienki", url: "#" },
        { title: "Opony", url: "#" },
        { title: "Laptopy", url: "#" },
        { title: "Smartfony", url: "#" },
        { title: "Buty damskie", url: "#" },
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
              <Link
                key={index}
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-sm"
              ></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
