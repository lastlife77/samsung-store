import React, { useState } from 'react';
import styles from './FavoriteIcon.scss'

function FavoriteIcon(props){

    return(
        <div className='favorite'>
            <img className='favoriteImg' src="./icons/favorite.svg"></img>
            <img className='favoriteImgHover' src="./icons/favoriteFill.svg"></img>
        </div>
    );
}

export default FavoriteIcon;