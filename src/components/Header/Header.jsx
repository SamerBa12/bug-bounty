import { Image, Group, Paper, Box } from '@mantine/core';
import logo from '../../assets/image/header/Vector.png';
import { Buttonn } from '../Button/Button';
import '../../assets/css/header/headre.css';

export const Header = () => {
    return (
        <Paper className='custom-box'>
            <Box className="flex-between-center container">
                <Group>
                    <Buttonn title="دخول" className="btn-white" />
                    <Buttonn title="سجل مجانا" className="btn-danger" />
                </Group>
                <Box className="flex-align-center">
                    <Image src={logo} alt="Logo" className='custom-size' />
                </Box>
            </Box>
        </Paper>
    );
};
