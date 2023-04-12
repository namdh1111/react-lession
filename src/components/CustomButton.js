import React from 'react';
const CustomButton = (props) => {
    const {color, className, ...other} = props;
    const buttonClass = `btn btn-${color} ${className}`;
    return (
        <button type='button' {...other} className={buttonClass}>
            {props.children}
        </button>
    )
}

export default CustomButton;