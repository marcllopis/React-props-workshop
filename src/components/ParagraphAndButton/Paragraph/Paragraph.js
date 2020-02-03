import React from 'react';
import './Paragraph.css';


const Paragraph = props => (
    <div className="paragraph">
        {props.paragraphText.map(paragraph => <p>{paragraph}</p>)}
    </div>
)

export default Paragraph;
