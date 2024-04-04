import { CarIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function FreeShipping({}: Props) {
  return (
    <div className='flex items-center text-emerald-500'>
        <CarIcon size={24} />
        <p className='ml-2 text-xs font-bold uppercase'>Darmowa wysyłka</p>
    </div>
  )
}