import { Input } from '@mantine/core'
import React from 'react'

const InputMantine = ({
    icon,
    placeholder,
    size
}) => {
    return (
        <div dir="rtl">
            <Input size={size} placeholder={placeholder} rightSection={icon} />
        </div>
    )
}

export default InputMantine
