import React, { useState } from 'react';
import styles from './PhoneCard.scss'
import Button from './../UI/Button';

function PhoneCard(props){

    const [phoneColor,setPhoneColor ] = useState("white");
    const [phoneStorage,setPhoneStorage ] = useState("64");

    return(
        <div className='phoneCard'>
            <div className='favoriteAndCompare'>
                <div className='compare'>
                    <img className='compareImg' src="/icons/compare.svg"></img>
                    <img className='compareImgHover' src="/icons/compareFill.svg"></img>
                </div>
                <div className='favorite'>
                    <img className='favoriteImg' src="/icons/favorite.svg"></img>
                    <img className='favoriteImgHover' src="/icons/favoriteFill.svg"></img>
                </div>
            </div>
            <div className='phoneImage'>
                {phoneColor=="white"?<img src="/icons/phones/whitePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="orange"?<img src="/icons/phones/orangePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="blue"?<img src="/icons/phones/bluePhone.svg"></img>:<div style={{display:"none"}}></div>}
                {phoneColor=="black"?<img src="/icons/phones/blackPhone.svg"></img>:<div style={{display:"none"}}></div>}
            </div>
            <div className='colors'>
                <button onClick={()=>{setPhoneColor("white")}} className={(phoneColor=="white")?'btnColorActive btnColorWhite':'btnColor btnColorWhite'}></button>
                <button onClick={()=>{setPhoneColor("orange")}} className={(phoneColor=="orange")?'btnColorActive btnColorOrange':'btnColor btnColorOrange'}></button>
                <button onClick={()=>{setPhoneColor("blue")}} className={(phoneColor=="blue")?'btnColorActive btnColorBlue':'btnColor btnColorBlue'}></button>
                <button onClick={()=>{setPhoneColor("black")}} className={(phoneColor=="black")?'btnColorActive btnColorBlack':'btnColor btnColorBlack'}></button>
            </div>
            <div className='storage'>
                <button onClick={()=>{setPhoneStorage("64")}} className={(phoneStorage=="64")?'btnStorageActive':'btnStorage'}>64 Гб</button>
                <button onClick={()=>{setPhoneStorage("128")}} className={(phoneStorage=="128")?'btnStorageActive':'btnStorage'}>128 Гб</button>
            </div>
            <div className='phoneName'>
                <p>Смартфоны Samsung <br/>Galaxy A53 - 128Гб, <br/> белый</p>
            </div>
            <div className='grade'>
                <img className='star' src="/icons/star.svg"></img>
                <img className='star' src="/icons/star.svg"></img>
                <img className='star' src="/icons/star.svg"></img>
                <img className='star' src="/icons/halfStar.svg"></img>
                <img className='star' src="/icons/noStar.svg"></img>
                <p>(119)</p>
            </div>
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