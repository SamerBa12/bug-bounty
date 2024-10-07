import { Box, Checkbox, Select } from "@mantine/core";
import InputMantine from "../Input/InputMantine";
import AgreePrivacy from "../AgreePrivacy/AgreePrivacy";
import { Buttonn } from "../Button/Button";
import mail from "../../assets/image/header/icon/mail.svg";
import domain from "../../assets/image/header/icon/domain.svg";
import employes from "../../assets/image/header/icon/employes.svg";
import pass from "../../assets/image/header/icon/pass.svg";
import person from "../../assets/image/header/icon/name.svg";
import "../../assets/css/register/register.css";
import { useState } from "react";
import { apiRegisterCompany } from "../../apis/company/Compani";
import { useNavigate } from "react-router-dom";

export const RegisterCompany = () => {

  const [ company , setCompany ] = useState({
    name: '',
    employess_count: '',
    type : '',
    password : '',
    email: '',
    domain: '',
})
const [ err , setErr ] = useState('')

const handleChange = (e) => { 
    const  { name , value } = e.target 
    setCompany((pre)=>({ 
        ...pre , [name]: value
    }))
} 

 const navigate = useNavigate()
const handleSubmit = () => { 
  const register = async () =>{ 
    try{ 
       const response = await apiRegisterCompany(company)
        setErr(response)
      
        navigate('/login')
      } catch(err){ 
        console.log(err)
      }
    }
    register()
}
  return (
    <div className="register-company-container">
      <form className="form w-100 gap-3" >
        <div className="inputsForm d-flex flex-wrap gap-2">
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
            <InputMantine
              size={"lg"}
              dir="rtl"
              name='domain'
              value={company.domain}
              handleChange={handleChange}
              icon={<img src={domain} alt="domain" />}
              placeholder="أدخل دومين الشركة *"
            />
            <Box dir="rtl" > 
            <Select
              onChange={ (value)=> setCompany((pre)=>({ 
                ...pre , type: value
              })) }
              
              size={"lg"}
              placeholder="أختر نوع الشركة *"
              data={[
                { value: "خاصة", label: "شركة خاصة" },
                { value: "مشتركة", label: "شركة مشتركة" },
                { value: "حكومية", label: "شركة حكومية" },
              ]}
              name="type"
              value={company.type}
              />
              </Box>

            <InputMantine
              size={"lg"}
              icon={<img src={mail} alt="mail" />}
              placeholder="أدخل البريد الإلكتروني *"
              name='email' 
              value={company.email}
              handleChange={handleChange}
            />
          </div>
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
            <InputMantine
              size={"lg"}
              icon={<img src={person} alt="person" />}
              placeholder="أدخل اسم الشركة *"
              name='name' 
              value={company.name}
              handleChange={handleChange}
            />
            <InputMantine
              size={"lg"}
              icon={<img src={employes} alt="employes" />}
              placeholder="أدخل عدد موظفين الشركة *" 
              name='employess_count'
              value={company.employess_count}
              handleChange={handleChange}
            />
            <InputMantine
              size={"lg"}
              icon={<img src={pass} alt="pass" />}
              placeholder="أدخل كلمة المرور *"
              name='password'
              value={company.password}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="Agree-Privacy d-flex mx-4 my-0">
          <Checkbox defaultChecked labelPosition="right" color="red" />
          <AgreePrivacy />
        </div>
        <div className="buttonBottom d-flex justify-content-center align-items-center gap-4 my-0">
          <Buttonn
            title="تسجيل الدخول "
            color="red"
            variant="outline"
            size="md"
          />
          <Buttonn
            onClick={handleSubmit}
            variant="filled"
            color="red"
            title="انشاء حساب "
            size="md"
            className="m-3"
          />
        </div>
      </form>
    </div>
  );
};
