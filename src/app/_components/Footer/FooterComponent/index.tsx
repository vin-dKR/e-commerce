'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import classes from './index.module.scss'

import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer } from '../../../../payload/payload-types'
import Link from 'next/link'

const FooterComponent = ({ footer }: { footer: Footer }) => {
    const usepathname = usePathname()

    return (
        <footer className={noHeaderFooterUrls.includes(usepathname) ?
            classes.hide : ""}>
            <Gutter>
                <ul className={classes.inclusion} >
                    {inclusions.map((inclusion, index) => (
                        <li key={inclusion.title} >
                            <Image src={inclusion.icon} alt='not-lod' width={36} height={36} style={{ filter: 'invert(100%)' }} className={classes.icon} />
                            <h5 className={classes.title}>{inclusion.title}</h5>
                            <p className={classes.description} >{inclusion.description}</p>
                        </li>
                    ))}
                </ul>
            </Gutter>

            
        </footer>
    )
}

export default FooterComponent
