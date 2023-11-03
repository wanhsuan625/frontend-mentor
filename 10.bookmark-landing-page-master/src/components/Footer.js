import React , { useState } from 'react';
import logoFooter from '../images/logo-bookmark-footer.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';

function Footer(){
    return (
    <>
        <footer className='bg-black_set'>
            <div className='max-w-6xl  px-28 pt-10 pb-11 lg:px-5 mx-auto
                           md:py-8 md:px-10 md:flex'>
                <a href='/frontend-mentor/10.bookmark-landing-page-master/public/index.html'>
                    <div className='w-full'>
                        <img src={logoFooter} alt='Bookmark' className='cursor-pointer mx-auto'/>
                    </div>
                </a>

                <ul className='text-white text-center font-normal text-sm tracking-widest py-10
                                md:flex md:gap-11 md:py-0 md:items-center md:ml-16'>
                    <li className='cursor-pointer hover:text-red_set mb-8 md:mb-0 active:translate-y-0.5'>FEATURES</li>
                    <li className='cursor-pointer hover:text-red_set mb-8 md:mb-0 active:translate-y-0.5'>PRICING</li>
                    <li className='cursor-pointer hover:text-red_set active:translate-y-0.5'>CONTACT</li>
                </ul>

                <ul className='flex justify-center items-center gap-10 md:justify-end md:absolute md:right-10 xl:right-5'>
                    <Facebook className='cursor-pointer hover:fill-red_set  active:translate-y-0.5'/>
                    <Twitter className='cursor-pointer hover:fill-red_set  active:translate-y-0.5'/>
                </ul>
            </div>
        </footer>
    </>
    )
}

export default Footer;