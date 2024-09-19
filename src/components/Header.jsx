import React from "react";
import vectorImage from '../assets/image/Vector.png'
import '../assets/css/header/headre.css'
import ButtonMantine from "./button/ButtonMantine";

const header = () => {

  return (
    <div className="header container-fluid ">
      <div className="header-btn">
        <div className="login-btn">
          <ButtonMantine
            type='outline'
            color='var(--main-color)'
            title='دخول'
            width='61px'
            height='50px'

          />
          <ButtonMantine
            type='filled'
            color='var(--main-color)'
            title='سجّل مجاناً'
            width='99px'
            height='50px'
          />

        </div>
      </div>
      <div className="logo">
        <img src={vectorImage} alt="logo" className="img-logo" />
      </div>
    </div>
  );
};

export default header;
