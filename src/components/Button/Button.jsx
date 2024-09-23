import { Button } from '@mantine/core';
import '../../assets/css/root/root.css'

export const Buttonn = ({ variant, title, className, color, size }) => {
    return (
        <Button variant={variant} radius="md" color={color} className={className} size={size}  >
            {title}
        </Button>
    )
}