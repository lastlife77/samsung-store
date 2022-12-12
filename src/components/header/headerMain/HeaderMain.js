import React, { useState } from 'react';
import styles from './HeaderMain.scss'

function HeaderMain(){
    
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className="headerMain">
            <div className='largeView'>
                <div className='leftItems'>
                    <div className='logo'>
                        <img src="/icons/logo.svg"></img>
                    </div>
                    <div className='leftItem'>
                        <p>Смартфоны</p>
                    </div>
                    <div className='leftItem'>
                        <p>Планшеты</p>
                    </div>
                    <div className='leftItem'>
                        <p>Носимые устройства</p>
                    </div>
                    <div className='leftItem'>
                        <p>ТВ и аудио</p>
                    </div>
                    <div className='leftItem'>
                        <p>Бытовая техника</p>
                    </div>
                    <div className='leftItem'>
                        <p>Для ПК</p>
                    </div>
                    <div className='leftItem'>
                        <p>Аксессуары</p>
                    </div>
                </div>
                <div className='rightItems'>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/search.svg"></img>
                        <img className='rightItemImgHover' src="/icons/searchHover.svg"></img>
                    </div>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/compare.svg"></img>
                        <img className='rightItemImgHover' src="/icons/compareHover.svg"></img>
                    </div>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/cart.svg"></img>
                        <img className='rightItemImgHover' src="/icons/cartHover.svg"></img>
                    </div>
                </div>
            </div>
            <div className='smallView'>
                <div  className='menu'>
                    <img onClick={()=>setShowMenu(true)} src='/icons/menu.svg'></img>
                    {showMenu?
                        <div className='menuItems'>
                            <div onClick={()=>setShowMenu(false)} className='close'>
                                <img src="/icons/close.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Смартфоны</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Планшеты</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Носимые устройства</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>ТВ и аудио</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Бытовая техника</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Для ПК</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                            <div className='menuItem'>
                                <p>Аксессуары</p>
                                <img src="/icons/arrow_forward.svg"></img>
                            </div>
                        </div>:
                        <div></div>
                    }

                    
                </div>
                <div className='logo'>
                    <img src="/icons/logo.svg"></img>
                </div>
                <div className='rightItems'>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/search.svg"></img>
                        <img className='rightItemImgHover' src="/icons/searchHover.svg"></img>
                    </div>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/compare.svg"></img>
                        <img className='rightItemImgHover' src="/icons/compareHover.svg"></img>
                    </div>
                    <div className='rightItem'>
                        <img className='rightItemImg' src="/icons/cart.svg"></img>
                        <img className='rightItemImgHover' src="/icons/cartHover.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;