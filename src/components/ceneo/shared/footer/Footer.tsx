import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='h-60'>
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}