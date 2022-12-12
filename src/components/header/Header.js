import React from 'react';
import HeaderMain from './headerMain/HeaderMain';
import HeaderTop from './headerTop/HeaderTop';

function Header(props){
    return(
        <div className="Header">
            <HeaderTop></HeaderTop>
            <HeaderMain></HeaderMain>
        </div>
    );
}

export default Header;