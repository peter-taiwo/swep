import React from 'react'

import img from'../../img/body-nav.svg'
import imgPrevious from'../../img/body-nav-previous.svg'
import imgNext from'../../img/body-nav-next.svg'

export const Article3Nav = () => {
  return (
    <section className="article3-nav">
      <img src={imgPrevious} alt="" />
      <div>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <img src={imgNext} alt="" />
    </section>
  );
}
