import { Checkbox } from "@mantine/core";
import "../../assets/css/register/register.css";
import InputMantine from "../Input/InputMantine";
import AgreePrivacy from "../AgreePrivacy/AgreePrivacy";
import mail from "../../assets/image/header/icon/mail.svg";
import person from "../../assets/image/header/icon/name.svg";
import phone from "../../assets/image/header/icon/phone.svg";
import pass from "../../assets/image/header/icon/pass.svg";
import { Buttonn } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { apiRegisterResearcher } from "../../apis/researcher/Researcher";
import { useDispatch } from "react-redux";
import { setUuid } from "../../redux/researcherReducer";
export const RegisterForm = () => {
  const [researcher, setResearcher] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResearcher((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const register = async () => {
      try {
        const response = await apiRegisterResearcher(researcher);
        const fetchedUuid = response.data.data.researcher.uuid;
        dispatch(setUuid(fetchedUuid));
        setError(response);
        navigate("/register-code");
      } catch (error) {
        console.log(error);
      }
    };
    register();
  };

  return (
    <div className="register-form-container">
      <form className="form w-100 gap-3">
        <div className="inputsForm d-flex flex-wrap gap-2">
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4 ">
            <InputMantine
              size={"lg"}
              icon={<img src={mail} alt="mail" />}
              placeholder="ادخل البريد الالكتروني *"
              name="email"
              value={researcher.email}
              handleChange={handleChange}
            />
            <InputMantine
              size={"lg"}
              icon={<img src={phone} alt="phone" />}
              placeholder="ادخل رقم الهاتف *"
              name="phone"
              value={researcher.phone}
              handleChange={handleChange}
            />
          </div>
          <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
            <InputMantine
              size={"lg"}
              icon={<img src={person} alt="person" />}
              placeholder="ادخل اسمك الكامل *"
              name="name"
              value={researcher.name}
              handleChange={handleChange}
            />
            <InputMantine
              size={"lg"}
              icon={<img src={pass} alt="mail" />}
              placeholder="ادخل كلمة المرور *"
              name="password"
              value={researcher.password}
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
            onClick={handleSubmit}
            variant="filled"
            color="red"
            title="انشاء حساب "
            size="md"
            className="m-3"
          />
          <Buttonn
            title="تسجيل الدخول "
            color="red"
            variant="outline"
            size="md"
          />
        </div>
      </form>
    </div>
  );
};
