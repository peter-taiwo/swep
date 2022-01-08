import React from "react";

export const HeaderPagesNav = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};
