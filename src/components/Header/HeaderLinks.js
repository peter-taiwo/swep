import React from 'react'

import { HeaderPagesNav } from './HeaderPagesNav';

import { HeaderButton } from './HeaderButton';

export const HeaderLinks = () => {
  return (
    <div className="nav-links">
      <ul>
      <HeaderPagesNav link={"./home"} text={"Home"} />
      <HeaderPagesNav link={"./contact"} text={"Contact us"} />
      <HeaderPagesNav link={"./app"} text={"App"} />
      <HeaderPagesNav link={"./about-us"} text={"About us"} />
      </ul>
      
      <HeaderButton />
    </div>
  );
}
