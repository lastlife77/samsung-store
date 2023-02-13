import React, { useState } from 'react';
import styles from './Phone.scss'
import PhoneCard from './../phoneCard/PhoneCard';
import Button from './../UI/buttons/Button';

function Phone(props){

    const [phoneColor,setPhoneColor ] = useState("white");
    const [phoneStorage,setPhoneStorage ] = useState("64");

    return(
        <div className='container'>
            <div className='phone'>
                <div className='rightPanel'>
                    <div className='phoneImage'>
                        {phoneColor=="white"?<img src="./icons/phones/whitePhoneBig.svg"></img>:<div style={{display:"none"}}></div>}
                        {phoneColor=="orange"?<img src="./icons/phones/orangePhoneBig.svg"></img>:<div style={{display:"none"}}></div>}
                        {phoneColor=="blue"?<img src="./icons/phones/bluePhoneBig.svg"></img>:<div style={{display:"none"}}></div>}
                        {phoneColor=="black"?<img src="./icons/phones/blackPhoneBig.svg"></img>:<div style={{display:"none"}}></div>}
                    </div>
                </div>
                <div className='leftPanel'>
                    <div className='phoneTitle'>
                        <p className='phoneName'>Смартфоны Samsung Galaxy A53</p>
                        <p className='underName'>128 Гб, белый</p>
                    </div>
                    <div className='info'>

                    </div>
                    <div className='price'>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Phone;