import { Input } from '@mantine/core'
import React from 'react'

const InputMantine = ({
    icon,
    placeholder
}) => {
    return (
        <div>
            <Input placeholder={placeholder} rightSection={icon} />
        </div>
    )
}

export default InputMantine
