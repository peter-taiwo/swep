import React from 'react'

import img from '../../img/review-img.svg'

export const Article3Body = () => {
  return (
    <section className="article3-main-body">
      <div className="student">
        <img src={img} alt="" />

        <div className="student-details">
          <p className="student-name">Samuel Olufemi</p>
          <p className="student-dept">CSC student</p>
        </div>
      </div>

      <p className="article3-main-review">
        “Your dedicated patient engagement app and web portal allow me to access
        information instantaneously (no tedious form, long calls, or
        administrative hassle) and securely”
      </p>
    </section>
  );
}
