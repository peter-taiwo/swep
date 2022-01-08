import React from "react";

import img from "../../img/body-img-1.svg";
import { LearnMore } from "../Global Components/LearnMore";

export const Article2First = () => {
  return (
    <section class="article2-1">
      <img src={img} alt="" />

      <div class="article2-text1">
        <h3>Leading healthcare providers</h3>
        <div></div>
        <p>
          Tanwine provides progressive, and affordable healthcare, accessible on
          mobile and online for every student.. To us, it’s not just work. We
          take pride in the solutions we deliver
        </p>

        <LearnMore />
      </div>
    </section>
  );
};
