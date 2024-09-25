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

export const RegisterCompany = ({
  name,
  domaincompany,
  numberemploye,
  password,
  typecompany,
  email,
}) => {
  return (
    <div className="register-company-container">
      <form className="form w-100 gap-3">
        <div className="inputsForm d-flex flex-wrap gap-2">
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
            <InputMantine
              size={"lg"}
              dir="rtl"

              icon={<img src={domain} alt="domain" />}
              placeholder="أدخل دومين الشركة *"
            />
            <Box dir="rtl" > 
            <Select
              size={"lg"}
              placeholder="أختر نوع الشركة *"
              data={[
                { value: "شركة خاصة", label: "شركة خاصة" },
                { value: "شركة حكومية", label: "شركة حكومية" },
              ]}
              />
              </Box>

            <InputMantine
              size={"lg"}
              icon={<img src={mail} alt="mail" />}
              placeholder="أدخل البريد الإلكتروني *"
            />
          </div>
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
            <InputMantine
              size={"lg"}
              icon={<img src={person} alt="person" />}
              placeholder="أدخل اسم الشركة *"
            />
            <InputMantine
              size={"lg"}
              icon={<img src={employes} alt="employes" />}
              placeholder="أدخل عدد موظفين الشركة *"
            />
            <InputMantine
              size={"lg"}
              icon={<img src={pass} alt="pass" />}
              placeholder="أدخل كلمة المرور *"
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
