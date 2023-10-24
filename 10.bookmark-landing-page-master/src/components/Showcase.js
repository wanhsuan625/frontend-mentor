import React from 'react';
import hero from '../images/illustration-hero.svg';

function Showcase(){
    return (
        <>
            <section className='flex flex-col-reverse px-8 py-20
             md:grid md:grid-cols-2 md:gap-16 md:place-items-center max-w-7xl mx-auto'>
            
                <article className='text-center md:text-left'>
                    <h1 className='text-3xl mb-4 mt-12 md:text-4xl'>A Simple Bookmark Manager</h1>
                    <p className='text-base mb-8'>
                      A clean and simple interface to organize your favourite websites.
                      Open a new browser tab and see your sites load instantly. 
                      Try it for free.
                    </p>

                    <ul className='flex items-center justify-center gap-3 flex-wrap  text-sm font-medium md:justify-start'>
                        <li>
                            <button className='btn-blue rounded-md py-3 px-3 text-white shadow-lg hover:opacity-75'>
                                Get it on Chrome
                            </button>
                        </li>
                        <li>
                            <button className='bg-slate-100 rounded-md py-3 px-3 text-slate-800 shadow-lg hover:opacity-75'>
                                Get it on Firefox
                            </button>
                        </li>
                    </ul>
                </article>
                
                <article>
                    <img src={hero} alt='' className='w-full object-fill'/>
                    <div className='background'></div>
                </article>
            </section>
        </>
    )
}

export default Showcase;