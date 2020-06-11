import React from 'react';
import StyledButton from './buttonStyles';

const Button = ({...props}) => {
    const {children, className="", variant="outlined", color}=props;
    return(
        <StyledButton
            {...props}
            className={`${className} ${variant} ${color}`}>
            {children}
        </StyledButton>
    )
}

export default Button;