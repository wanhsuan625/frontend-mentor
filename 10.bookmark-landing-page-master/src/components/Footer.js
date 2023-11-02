import React , { useState } from 'react';
import logoFooter from '../images/logo-bookmark-footer.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';

function Footer(){
    const [ isHover , setIsHover ] = useState(false);
    return (
    <>
        <footer className='max-w-7xl mx-auto bg-black_set px-28 pt-10 pb-11
                           md:py-8 md:px-10 md:flex lg:px-40'>
            <a href='#'>
                <div className='w-full'>
                    <img src={logoFooter} alt='Bookmark' className='cursor-pointer mx-auto'/>
                </div>
            </a>

            <ul className='text-white text-center font-normal text-sm tracking-widest py-10
                             md:flex md:gap-11 md:py-0 md:items-center md:ml-16'>
                <li className='cursor-pointer hover:text-red_set mb-8 md:mb-0'>FEATURES</li>
                <li className='cursor-pointer hover:text-red_set mb-8 md:mb-0'>PRICING</li>
                <li className='cursor-pointer hover:text-red_set'>CONTACT</li>
            </ul>

            <ul className='flex justify-center items-center gap-10 md:justify-end md:absolute md:right-10 lg:right-40'>
                <Facebook className='hover:fill-red_set cursor-pointer'/>
                <Twitter className='hover:fill-red_set cursor-pointer'/>
            </ul>
        </footer>
    </>
    )
}

export default Footer;