import React from 'react';
import styles from './HeaderTop.scss'


function HeaderTop(){
    return(
        <div className="headerTop">
            <div className="leftItems">
                <div className="location">
                    <img src='./icons/location.svg'></img>
                    <p>Набережные Челны</p>
                </div>
                <div className="leftItem">
                    <p>Акции</p>
                </div>
                <div className="leftItem">
                    <p>Бизнес</p>
                </div>
                <div className="leftItem">
                    <p>Доставка</p>
                </div>
                <div className="leftItem">
                    <p>Оплата</p>
                </div>
                <div className="leftItem">
                    <p>Магазины</p>
                </div>
            </div>
            <div className='rightItems'>
                <div className='about'>
                    <p className="workingHours">Ежедневно с 9:00 до 22:00</p>
                    <p className='phone'>8 800 755-7525</p>
                </div>
                <div className='account'>
                    <img src='./icons/person.svg'></img>
                    <p>Войти</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;