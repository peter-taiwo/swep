import React from "react";

import one from '../../img/one.svg'
import two from '../../img/two.svg'
import three from '../../img/three.svg'
import four from '../../img/four.svg'

import { Article1ServiceDetails } from "./Article1ServiceDetails";
import { Article1Options } from "./Article1Options";
import { LearnMore } from "../Global Components/LearnMore";

export const Article1 = () => {
  return (
    <article className="article1">
      <Article1ServiceDetails />

      <section className="article1-services">
        <Article1Options
        img={one}
        head={"Book appointment"}
        body={"Choose your doctor from our specialist in the hospital"}
        />
        <Article1Options
        img={two}
        head={"Upload Test Results"}
          body={
            "Get your medicines with our mobile application with a simple delivery system"
          }
          />
        <Article1Options
            img={three}
            head={"Get a Card"}
          body={
            "Free consultation with our trusted doctors and get the best recommendations"
          }
          />
        <Article1Options
          img={four}
          head={"Emergency care"}
          body={
            "You can get 24/7 urgent care for yourself or your children and your lovely family"
          }
        />
      </section>

      <LearnMore />
    </article>
  );
};
