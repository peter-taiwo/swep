import React from 'react'

import img from "../../img/body-img-2.svg";
import download from "../../img/download.svg";

export const Article2Second = () => {
  return (
    <section className="article2-2">
      <div className="article2-text2">
        <h3>Download our mobile apps</h3>
        <div></div>
        <p>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedious form, long calls, or
          administrative hassle) and securely
        </p>

        <button className="download">
          Download
          <img src={download} alt="" />
        </button>
      </div>

      <img src={img} alt="" />
    </section>
  );
}
