import React, {FC} from 'react'
import { Button, ButtonProps } from 'react-bootstrap'
import PawImage from './../assets/images/pawprint.png'

interface PawButtonProps extends ButtonProps {}

export const PawButton:FC<PawButtonProps> = (props) => {
    return (
        <Button {...props} className="fluff-bounce">
            <img src = {PawImage} alt="*" style = {{width:'50px', height:'50px'}}/>
            {props.children}
        </Button>
    )
}