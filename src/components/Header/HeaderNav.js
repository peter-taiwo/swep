import React from 'react'

import { HeaderLinks } from './HeaderLinks'
import { Logo } from '../Global Components/Logo'

export const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <Logo />
      <HeaderLinks />
    </nav>
  )
}
