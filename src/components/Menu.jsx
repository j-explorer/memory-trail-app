import './menu.css';
import React from 'react';

const Menu = () =>{

  return(
    <nav id='menu'>
     <button className='menu-button' id='first-menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button'></button>
     <button className='menu-button' id='last-menu-button'></button>
    </nav>
  );

};

export default Menu;