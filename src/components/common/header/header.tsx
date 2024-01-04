import React from 'react'
import HeadOfferMenu from '../headerElements/headOfferMenu'
import HeaderMiddleMenu from '../headerElements/headerMiddle'
import { HeaderBottom } from '../headerElements/headerBottom'

type Props = {}

function Header({}: Props) {
  return (
    <>
        <HeadOfferMenu/>
        <HeaderMiddleMenu/>
        <HeaderBottom/>
    </>
  )
}

export default Header