import React from 'react'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <div className={classes.footer}>
      <FooterComponent footer={footer} />
    </div>
  )
}