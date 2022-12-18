import React, { useState } from 'react';
import styles from './Button.scss'

function Button(props){
    
    const [buttonIsClicked,setButtonIsClicked ] = useState(false);

    return(
        <div className='button'>
            {buttonIsClicked?
                <button className='btnClicked' onClick={()=>{setButtonIsClicked(!buttonIsClicked)}}>{props.clickedButtonText}</button>:
                <button className='btnDefault' onClick={()=>{setButtonIsClicked(!buttonIsClicked)}}>{props.defaultButtonText}</button>
            }
        </div>
    );
}
export default Button;