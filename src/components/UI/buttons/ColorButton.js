import React, { useState } from 'react';
import styles from './ColorButton.scss'

function ColorButton(props){


    return(
        <div className='btnColor' onClick={props.onClick}>
            {props.isActive?
                <button className='active' style={{backgroundColor: `${props.color}`}}></button>:
                <button className='default' style={{backgroundColor: `${props.color}`}}></button>
            }
        </div>
    );
}

export default ColorButton;