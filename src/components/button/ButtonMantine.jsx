import { Button } from '@mantine/core'
import React from 'react'

const ButtonMantine = ({ type, color, title, width, height }) => {
    return (
        <div>
            <Button
                variant={type}
                color={color}
                style={{
                    height: height,
                    width: width,
                    borderRadius: '8px'
                }}
            >
                {title}
            </Button>
        </div>
    )
}

export default ButtonMantine
