import React from 'react'
import img from '../../img/header-img.svg'

export const HeaderBody = () => {
  return (
    <div className="header-body">
      <div className="header-body1">
        <h1>Virtual healthcare for you</h1>
        <p>
          Tanwine provides progressive, and affordable healthcare, accessible on
          mobile and online for everyone
        </p>
        <div>
          <button className="header-body-btn1">Emergency</button>
          <button className="header-body-btn2">Book an appointment</button>
        </div>
      </div>

      <img src={img} alt="" />
    </div>
  );
};
