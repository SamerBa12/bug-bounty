import { Image, rem, Button, Group, Container, Paper } from '@mantine/core';
import logo from '../assets/image/Vector.png'
import { Buttonn } from './Button/Button';

export const Header = () => {
    return (
        // <div className="header">

        //     <div className="header-btn">
        //         <div className="login-btn">

        //             دخول
        //         </div>
        //         <div className="register-btn">
        //             سجل مجاناً
        //         </div>
        //     </div>

        // </div>

        <Container>
            <Paper
                shadow="xs"
                p="xl"
                style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: rem(8),
                    boxShadow: 4
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >

                    <Group>
                        <Buttonn title="سجل مجانا" />
                        <Buttonn title="دخول" />
                     
                    </Group>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            src={logo}
                            alt="Logo"
                            width={rem(60)}
                            height={rem(60)}
                        />
                    </div>
                </div>
            </Paper>
        </Container>

    )
}


