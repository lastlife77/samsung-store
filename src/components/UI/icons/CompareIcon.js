import React, { useState } from 'react';
import styles from './CompareIcon.scss'

function CompareIcon(props){

    return(
        <div className='compare'>
            <img className='compareImg' src="./icons/compare.svg"></img>
            <img className='compareImgHover' src="./icons/compareFill.svg"></img>
        </div>
    );
}

export default CompareIcon;