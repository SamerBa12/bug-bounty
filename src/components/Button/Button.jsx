import {  rem, Button } from '@mantine/core';
export const Buttonn = ({title}) =>{
    return(
        <Button
        variant="filled"
        color="#990000"
        radius="md"
        style={{
            padding: '0.4rem 0.4rem',
            fontSize: rem(4),
            marginRight: 4,
            backgroundColor: '#990000',
            color: 'white',
            borderRadius: 3,
            border:0
        }}
    >
        {title}
    </Button>
    )
}