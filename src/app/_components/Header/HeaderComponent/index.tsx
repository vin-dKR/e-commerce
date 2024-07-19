'use client'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import classes from './index.module.scss'

import { Header } from '../../../../payload/payload-types';
import { Gutter } from '../../Gutter';

import { HeaderNav } from '../Nav';
import MObileNav from '../MobileNav';
import { noHeaderFooterUrls } from '../../../constants';

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    // noHead...join()  --ye sab tam jham sirf navbar hatane k liye jab bhi noHederFoter ka str aaye
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
      .filter(Boolean)
      .join(' ')}>
      <Gutter className={classes.wrap} >
        <Link href='/'>
          <Image src="/google-logo-transparent.png" alt="logo" width={170} height={50} />
        </Link>

        <HeaderNav header={header} />
        <MObileNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
