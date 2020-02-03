import React from 'react';
import './Button.css';


const Button = ({buttonContent}) => (
    <div className="button-container">
        <button onClick={buttonContent.buttonFunction}>
            {buttonContent.buttonText}
        </button>
    </div>
)

export default Button;
