import Link from 'next/link'
import React from 'react'

type Props = {}

export default function FooterNewsletterForm({}: Props) {
  return (
    <div className="flex">
      <input
        type="email"
        placeholder="Podaj swój adres email"
        className="w-48 px-4 text-xs font-light border border-gray-300 active:outline-none focus:outline-none"
      />
      <Link
        href={"/search"}
        className="flex gap-2 px-4 py-3 text-white transition-all cursor-pointer select-none bg-ceneo-primary hover:bg-ceneo-secondary"
      >
        <p className="text-sm uppercase">ZAPISZ</p>
      </Link>
    </div>
  )
}