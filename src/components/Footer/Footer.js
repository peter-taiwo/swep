import React from "react";

import { FooterDescription } from "./FooterDescription";
import { FooterNav } from "./FooterNav";

export const Footer = () => {
  return (
    <footer>
      <FooterDescription />

      <article class="footer-nav">
        <FooterNav
          header={"Company"}
          one={["./about", "About"]}
          two={["./testimonials", "Testimonials"]}
          three={["./find-doctor", "Find a doctor"]}
          four={["./apps", "Apps"]}
        />
        <FooterNav
          header={"Region"}
          one={["./school1", "school1"]}
          two={["./school2", "school2"]}
          three={["./school3", "school3"]}
          four={["./school4", "school4"]}
        />
        <FooterNav
          header={"Help"}
          one={["./help", "Help center"]}
          two={["./support", "Contact support"]}
          three={["./instructions", "Instructions"]}
          four={["./how-it-works", "How it works"]}
        />
      </article>

      <article className="footer-end">
        ©Trafalgar PTY LTD 2020. All rights reserved
      </article>
    </footer>
  );
};
