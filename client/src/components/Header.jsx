import React from 'react';
//import header from '../images/Header2.jpg';


function Header() {

    let head = 'Header2';

    return  (
    <div className="header-bg">
        <img src={require(`../images/${head}.jpg`)} alt="limes"/>
    </div>);
}

export default Header;