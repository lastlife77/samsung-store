import React, { useState } from 'react';
import styles from './StorageButton.scss'

function StorageButton(props){
    //props.storageSize
    //props.isActive
    //props.onClick

    return(
        <div className='storage' onClick={props.onClick}>
            {props.isActive?
                <button className='active'>{`${props.storageSize} Гб`}</button>:
                <button className='default'>{`${props.storageSize} Гб`}</button>
            }
        </div>
    );
}
export default StorageButton;