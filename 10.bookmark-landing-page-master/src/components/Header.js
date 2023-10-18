import React from 'react';
import logo from '../images/logo-bookmark.svg';
import logoDark from '../images/logo-bookmark-dark.svg';
import menu from '../images/icon-hamburger.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';

function Header() {
    return(
      <>
          <header className='flex items-center justify-between p-8'>
            <a href='#' className='hover:cursor-pointer'>                
                <div>
                    <img src={logo} alt='Bookmark'/>
                </div>
            </a>

            <nav>
                <ul className='hidden'>
                    <li>
                        <button>FEATURES</button>
                    </li>
                    <li>
                        <button>PRICING</button>
                    </li>
                    <li>
                        <button>CONTACT</button>
                    </li>
                    <li>
                        <button>LOGIN</button>
                    </li>
                </ul>

                {/* social media */}
                <ul>
                    <li>
                        <img src={facebook} alt=''/>
                    </li>
                    <li>
                        <img src={twitter} alt=''/>
                    </li>
                </ul>
            </nav>

            <div className='hover:cursor-pointer'>
                <img src={menu} alt='' />
            </div>
          </header>
      </>
  );
}

export default Header;