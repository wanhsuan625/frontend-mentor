import React from 'react';
import hero from '../images/illustration-hero.svg';

function Showcase(){
    return (
        <>
            <section className='flex flex-col-reverse px-8 py-20
             lg:grid lg:grid-cols-2 lg:gap-16 lg:place-items-center max-w-7xl mx-auto'>
            
                <article className='text-center lg:text-left'>
                    <h1 className='text-4xl mb-4 mt-12'>A Simple Bookmark Manager</h1>
                    <p className='text-base mb-8'>
                      A clean and simple interface to organize your favourite websites.
                      Open a new browser tab and see your sites load instantly. 
                      Try it for free.
                    </p>

                    <ul className='flex items-center justify-center gap-3 flex-wrap  text-sm font-medium lg:justify-start'>
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
                    <img src={hero} alt='' className='w-full'/>
                    <div className='background'></div>
                </article>
            </section>
        </>
    )
}

export default Showcase;