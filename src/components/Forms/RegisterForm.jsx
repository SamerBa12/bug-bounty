import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser, IconPhone, IconMail, IconPassword, IconCodeCircle, } from '@tabler/icons-react';
import '../../assets/css/register/register.css'
import InputMantine from '../Input/InputMantine';
import { BsPerson } from 'react-icons/bs';
import AgreePrivacy from '../AgreePrivacy/AgreePrivacy';
import mail from '../../assets/image/header/icon/mail.svg'
import person from '../../assets/image/header/icon/name.svg'
import phone from '../../assets/image/header/icon/phone.svg'
import { Buttonn } from '../Button/Button';


export const RegisterForm = ({ name, code, password, email }) => {


    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center ">
                <form className='form w-100 gap-3'>
                    <div className="inputsForm d-flex  gap-2">
                        <div className="inputFormRight d-flex flex-column w-50 gap-3 p-4">
                            <InputMantine
                                size={'lg'}
                                icon={<img src={mail} alt='mail' />}
                                placeholder='ادخل البريد الالكتروني *'
                            />
                            <InputMantine
                                size={'lg'}
                                icon={<img src={phone} alt='phone' />}
                                placeholder='ادخل البريد الالكتروني *'
                            />
                        </div>
                        <div className="inputFormLeft d-flex flex-column w-50 gap-3 p-4">
                            <InputMantine
                                size={'lg'}
                                icon={<img src={person} alt='person' />}
                                placeholder='ادخل اسمك الكامل *'
                            />

                            <InputMantine
                                size={'lg'}

                                icon={<img src={mail} alt='mail' />}
                                placeholder='ادخل البريد الالكتروني *'
                            />

                        </div>
                    </div>

                    <div className="Agree-Privacy d-flex">
                        <Checkbox
                            defaultChecked
                            labelPosition="right"
                            color="red"
                        />
                        <AgreePrivacy />
                    </div>
                    <div className="buttonBottom d-flex justify-content-center align-items-center gap-4 ">
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
        </>
    );
};
