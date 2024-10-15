import React from 'react'
import PersonalInfoRe from '../PersonaInfo/PersonalInfoRe'
import mail from "../../assets/image/header/icon/mail.svg";
import person from "../../assets/image/header/icon/name.svg";
import phone from "../../assets/image/header/icon/phone.svg";
import image from "../../assets/image/rahaf.jpg";

export const Profile = () => {
    const form1Fields = [
        { name: "email", icon: <img src={mail} alt="mail" />, className: "w-100  px-3  py-2" },
        { name: "name", icon: <img src={person} alt="person" />, className: "w-100 w-md-50 px-3  py-2" },
        { name: "phone", icon: <img src={phone} alt="phone" />, className: "w-100 w-md-50 px-3 py-1 " },
    
      ];
      const Buttons = [
        {
            color: "red",
            title: "حفظ التغييرات",
            className: "m-2",
            
          },]
  return (
    <div>
      <PersonalInfoRe 
      image={image}
      fields={form1Fields}
button={Buttons}
      />
    </div>
  )
}

