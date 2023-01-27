import React, { useState } from 'react';
import styles from './PhoneStars.scss'

function PhoneStars(props){
    //props.numberOfStars
    //props.numberOfRatings

    const star = <img className='star' src="./icons/star.svg"></img>;
    const halfStar = <img className='star' src="./icons/halfStar.svg"></img>;
    const noStar = <img className='star' src="./icons/noStar.svg"></img>;

    let grade= [];

    let stars  = Math.floor(props.numberOfStars);
    for(let i = 0; i < stars; i++){
        grade.push(star);
    }
    
    let halfStars = 0;
    if(props.numberOfStars%1>0.1){
        halfStars = 1;
        grade.push(halfStar);
    }
    
    let noStars = 5 - stars - halfStars;
    for(let i = 0; i < noStars; i++){
        grade.push(noStar);
    }
    
    return(
        <div className='stars'>
            {grade}
            <p>{`(${props.numberOfRatings})`}</p>
        </div>  
    );
}
export default PhoneStars;