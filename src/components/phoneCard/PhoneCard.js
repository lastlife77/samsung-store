import React, { useState } from 'react';
import styles from './PhoneCard.scss'
import Button from '../UI/buttons/Button';
import CompareIcon from '../UI/icons/CompareIcon';
import FavoriteIcon from '../UI/icons/FavoriteIcon';
import ColorButton from '../UI/buttons/ColorButton';
import PhoneStars from '../UI/PhoneStars';
import StorageButton from '../UI/buttons/StorageButton';

function PhoneCard(props){

    const [phoneColor,setPhoneColor ] = useState("white");
    const [phoneStorage,setPhoneStorage ] = useState("64");

    return(
        <div className='phoneCard'>
            <div className='favoriteAndCompare'>
                <CompareIcon></CompareIcon>
                <FavoriteIcon></FavoriteIcon>
            </div>
            <div className='phoneImage'>
                {phoneColor=="white"?<img src="./icons/phones/whitePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="orange"?<img src="./icons/phones/orangePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="blue"?<img src="./icons/phones/bluePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="black"?<img src="./icons/phones/blackPhone.svg"></img>:<div style={{display:"none"}}></div>}
            </div>
            <div className='colors'>
                <ColorButton onClick={()=>{setPhoneColor("white")}} isActive={(phoneColor=="white")?true:false} color="#FFFFFF"></ColorButton>
                <ColorButton onClick={()=>{setPhoneColor("orange")}} isActive={(phoneColor=="orange")?true:false} color="#F7D5B8"></ColorButton>
                <ColorButton onClick={()=>{setPhoneColor("blue")}} isActive={(phoneColor=="blue")?true:false} color="#D7E9F8"></ColorButton>
                <ColorButton onClick={()=>{setPhoneColor("black")}} isActive={(phoneColor=="black")?true:false} color="#2A2A2A"></ColorButton>
            </div>
            <div className='storage'>
                <StorageButton onClick={()=>{setPhoneStorage("64")}} storageSize={64} isActive={(phoneStorage=="64")?true:false}></StorageButton>
                <StorageButton  onClick={()=>{setPhoneStorage("128")}} storageSize={128} isActive={(phoneStorage=="128")?true:false}></StorageButton>
            </div>
           
            <div className='phoneName'>
                <p>Смартфоны Samsung <br/>Galaxy A53 - 128Гб, <br/> белый</p>
            </div>
            <PhoneStars numberOfStars={1.09} numberOfRatings={119}></PhoneStars>
            <div className='price'>
                <p className='oldPrice'>{(phoneStorage=="64")?'25 990':'37 990'} ₽</p>
                <p className='newPrice'>{(phoneStorage=="64")?'24 990':'34 990'} ₽</p>
                <p className='availability'>Есть в наличии</p>
            </div>
            <div className='buy'>
                <Button className="btnBuy" defaultButtonText="КУПИТЬ" clickedButtonText="В КОРЗИНУ"></Button>
            </div>
            
        </div>
    );
}
export default PhoneCard;