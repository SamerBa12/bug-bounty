import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser, IconPhone, IconMail, IconPassword, IconCodeCircle, } from '@tabler/icons-react';
import '../../assets/css/register/register.css'

export const RegisterForm = ({ name, phone, code, password, email }) => {

    const form = useForm({
        initialValues: {
            name: "",
            phone: "",
            code: "",
            password: "",
            email: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))} className='form'>

            <Box className='box-form'>
                <TextInput
                    className='registerform'
                    placeholder="ادخل اسمك الكامل"
                    rightSection={<IconUser style={{ marginRight: 10 }} />}
                />
                <TextInput
                    className='registerform'
                    placeholder="ادخل رقم الهاتف"
                    rightSection={<IconPhone style={{ marginRight: 10 }} />}
                />
                <TextInput
                    className='registerform'
                    placeholder="ادخل كود التسجيل"
                    rightSection={<IconCodeCircle style={{ marginRight: 10 }} />}
                />
                <TextInput
                    className='registerform'
                    placeholder="ادخل البريد الإلكتروني"
                    rightSection={<IconMail style={{ marginRight: 10 }} />}
                />
                <TextInput
                    className='registerform'
                    placeholder="ادخل كلمة المرور"
                    rightSection={<IconPassword style={{ marginRight: 10 }} />}
                />

            </Box>
            <Checkbox
                mt="md"
                label="اوافق على شروط الخصوصية"
                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
};
