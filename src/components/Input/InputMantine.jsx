import { Input } from '@mantine/core'
import React from 'react'

const InputMantine = ({
    icon,
    placeholder,
    size , 
    dir , 
    value , 
    name , 
    handleChange
}) => {
    return (
        <div dir="rtl">
            <Input size={size} placeholder={placeholder} rightSection={icon} dir={dir} name={name} value={value} onChange={handleChange}/>
        </div>
    )
}

export default InputMantine
