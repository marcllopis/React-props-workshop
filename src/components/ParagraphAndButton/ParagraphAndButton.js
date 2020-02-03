import React from 'react';
import Paragraph from './Paragraph/Paragraph';
import Button from './Button/Button';
import './ParagraphAndButton.css'


const ParagraphAndButton = ({content}) => (
    <div className="right-content">
        <Paragraph paragraphText={content.paragraphText} />
        <Button buttonContent={content.button} />
    </div>
);

export default ParagraphAndButton;
