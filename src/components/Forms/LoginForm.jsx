import InputMantine from "../../components/Input/InputMantine";
import mail from "../../assets/image/header/icon/mail.svg";
import pass from "../../assets/image/header/icon/pass.svg";
import { Buttonn } from "../Button/Button";
import { ResetPassword } from "../ResetPassword/ResetPassword";

export const LoginForm = ({ email, Password }) => {
  return (
    <div>
      <div >
        <form className="form w-100 gap-3"> 
            <div className="container-sm">
          <div className=" d-flex  flex-wrap gap-2">
            <div className=" d-flex flex-column w-75 mx-auto w-md-50 gap-3  p-4">
              <InputMantine
                size={"lg"}
                icon={<img src={mail} alt="mail" />}
                placeholder="أدخل البريد الإلكتروني *"
              />
              <InputMantine
                size={"lg"}
                icon={<img src={pass} alt="pass" />}
                placeholder="أدخل كلمة المرور *"
              />
            </div>
          </div>
          <div className="mx-5">
            <ResetPassword />
          </div>
          </div>

          <div className="buttonBottom d-flex justify-content-center align-items-center gap-4 my-0">
            <Buttonn
              variant="outline"
              color="red"
              title="انشاء حساب "
              size="md"
              className="m-3"
            />
            <Buttonn
              variant="filled"
              title="تسجيل الدخول "
              color="red"
              size="md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
