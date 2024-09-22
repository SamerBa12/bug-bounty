import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser, IconPhone, IconMail, IconPassword, IconCodeCircle, } from '@tabler/icons-react';
import '../../assets/css/register/register.css'
import InputMantine from '../Input/InputMantine';
import { BsPerson } from 'react-icons/bs';

export const RegisterForm = ({ name, phone, code, password, email }) => {


    return (
        <form className='form'>
            <InputMantine
                icon={<BsPerson size={16} />}
                placeholder=''
            />


        </form>
    );
};
