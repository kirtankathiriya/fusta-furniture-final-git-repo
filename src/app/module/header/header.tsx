import HeadOfferMenu from '@/app/component/Header/headOfferMenu'
import { HeaderBottom } from '@/app/component/Header/headerBottom'
import HeaderMiddleMenu from '@/app/component/Header/headerMiddle'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <>
        <HeadOfferMenu />
        <HeaderMiddleMenu />
        <HeaderBottom />
    </>
  )
}

export default Header