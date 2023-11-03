import React , { useEffect, useState } from 'react';
import logo from '../images/logo-bookmark.svg';
import logoDark from '../images/logo-bookmark-dark.svg';
import menu from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';

function Header() {
    const  [ isUnfold , setIsUnfold ] = useState(false);
    let handleMenuClick = () => {
        setIsUnfold(!isUnfold);
    };

    useEffect( () => {
        window.addEventListener( "resize" , ()=> {
            if( window.innerWidth > 767 ) setIsUnfold(false);
        })
    })
    
    return(
      <>
          <header className={`flex justify-between items-center p-8 pb-0 ${ isUnfold ? 'header__unfold' : null } lg:px-10 xl:px-40`}>
            <a href='#' className='hover:cursor-pointer'>         
                <div>
                    <img src={ isUnfold ? logoDark : logo } alt='' />
                </div>
            </a>

            <nav className={ `${isUnfold ? 'nav__unfold' : 'hidden'} md:w-10/12 md:block`}>
                <ul className='md:flex md:justify-end md:gap-12 md:items-center'>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set md:active:translate-y-0.5'>FEATURES</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set md:active:translate-y-0.5'>PRICING</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__link hover:text-red_set md:active:translate-y-0.5'>CONTACT</button>
                    </li>
                    <li>
                        <button className='tracking-widest nav__button md:shadow-lg active:translate-y-0.5
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