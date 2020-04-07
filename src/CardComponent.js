import React from 'react';
import './index.css';

const CardComponent = ({text, handleClick}) => {
    return (
        <div className='card-component' onClick={handleClick}>
            <div className='memoryImg'>{text}</div>
        </div>)
};

export default CardComponent;