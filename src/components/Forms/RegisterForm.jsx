import { Checkbox } from '@mantine/core';
import '../../assets/css/register/register.css';
import InputMantine from '../Input/InputMantine';
import AgreePrivacy from '../AgreePrivacy/AgreePrivacy';
import mail from '../../assets/image/header/icon/mail.svg';
import person from '../../assets/image/header/icon/name.svg';
import phone from '../../assets/image/header/icon/phone.svg';
import pass from '../../assets/image/header/icon/pass.svg';
import { Buttonn } from '../Button/Button';

export const RegisterForm = ({ name, code, password, email }) => {
    return (
        <div className="register-form-container">
            <form className='form w-100 gap-3'>
                <div className="inputsForm d-flex flex-wrap gap-2">
                    <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4 ">
                        <InputMantine
                            size={'lg'}
                            icon={<img src={mail} alt='mail' />}
                            placeholder='ادخل البريد الالكتروني *'
                        />
                        <InputMantine
                            size={'lg'}
                            icon={<img src={phone} alt='phone' />}
                            placeholder='ادخل رقم الهاتف *'
                        />
                    </div>
                    <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
                        <InputMantine
                            size={'lg'}
                            icon={<img src={person} alt='person' />}
                            placeholder='ادخل اسمك الكامل *'
                        />
                        <InputMantine
                            size={'lg'}
                            icon={<img src={pass} alt='mail' />}
                            placeholder='ادخل كلمة المرور *'
                        />
                    </div>
                </div>

                <div className="Agree-Privacy d-flex mx-4 my-0">
                    <Checkbox
                        defaultChecked
                        labelPosition="right"
                        color="red"
                    />
                    <AgreePrivacy />
                </div>
                <div className="buttonBottom d-flex justify-content-center align-items-center gap-4 my-0">
                    <Buttonn
                        variant='filled'
                        color='red'
                        title='انشاء حساب '
                        size='md'
                        className="m-3"
                    />
                    <Buttonn
                        title='تسجيل الدخول '
                        color='red'
                        variant='outline'
                        size='md'
                    />
                </div>
            </form>
        </div>
    );
};
