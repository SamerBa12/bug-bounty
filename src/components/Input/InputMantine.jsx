import { Input } from '@mantine/core'
import React from 'react'

const InputMantine = ({
    icon,
    placeholder,
    size , 
    dir
}) => {
    return (
        <div dir="rtl">
            <Input size={size} placeholder={placeholder} rightSection={icon} dir={dir} />
        </div>
    )
}

export default InputMantine
