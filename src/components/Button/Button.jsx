import {  Button } from '@mantine/core';
import '../../assets/css/root/root.css'

export const Buttonn = ({ title,className}) => {
    return (
        <Button variant="filled" radius="md" className={className}  >
            {title}
        </Button>
    )
}