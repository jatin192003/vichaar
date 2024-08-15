import React from 'react';
import logo from '../img/Vichaar.png'

const Logo = ({width = '100px'}) => {
    return (
        <div>
            <img src={logo} alt="Vichaar" width="100px"/>
        </div>
    );
}

export default Logo;
