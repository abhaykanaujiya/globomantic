import React from 'react';
import logo from '../images/Globo_logo.png';
export default function Header() {
  return (
    <div>
      <header className='row'>
        <div className='col-md-5'>
          <img src={logo} className='logo' alt='logo' />
        </div>
        <div className='col-md-7 mt-5 subtitle'>
          Providing house all over the world
        </div>
      </header>
    </div>
  );
}
