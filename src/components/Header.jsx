import React from "react";
import { Button } from "@mantine/core";
import vectorImage from '../assets/image/Vector.png'

const header = () => {
  return (
    <div className="header">
      <div className="header-btn">
        <div className="login-btn">
          <Button variant="outline" color="#b21222">
            دخول
          </Button>
          <Button variant="filled" color="#b21222">
            سجل مجانا
          </Button>
        </div>
        <div className="logo">
        <img src={vectorImage} alt="logo" className="img-logo" /> 
            </div>
      </div>
    </div>
  );
};

export default header;
