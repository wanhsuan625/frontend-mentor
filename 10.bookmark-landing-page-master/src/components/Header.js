import React , { useState } from 'react';
import logo from '../images/logo-bookmark.svg';
import logoDark from '../images/logo-bookmark-dark.svg';
import menu from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';

function Header() {
    const  [ isUnfold , setIsUnfold ] = useState(false);
    let handleMenuClick = () => { 
        setIsUnfold(!isUnfold)
    };
    
    return(
      <>
          <header className={`flex justify-between p-8 pb-0 ${ isUnfold ? 'header__unfold' : null } mx-auto lg:px-10 xl:px-40`}>
            <a href='#' className='hover:cursor-pointer'>         
                <div>
                    <img src={ isUnfold ? logoDark : logo } alt='' />
                </div>
            </a>

            <nav className={ isUnfold ? 'nav__unfold' : 'hidden' }>
                <ul>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set'>FEATURES</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set'>PRICING</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set'>CONTACT</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__button active:translate-y-0.5
                                         hover:border-red_set hover:text-red_set hover:bg-white'
                        >LOGIN
                        </button>
                    </li>

                    {/* social media */}
                    <li className='flex justify-center gap-10 md:hidden'>
                        <Facebook className='hover:fill-red_set cursor-pointer active:translate-y-0.5'/>
                        <Twitter className='hover:fill-red_set cursor-pointer active:translate-y-0.5'/>
                    </li>
                </ul>

            </nav>

            <div className='hover:cursor-pointer md:hidden' onClick={handleMenuClick}>
                <img src={ isUnfold ? close : menu } className='menu' alt='' />
            </div>
          </header>
      </>
  );
}

export default Header;