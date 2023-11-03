import React from 'react';
import hero from '../images/illustration-hero.svg';

function Showcase(){
    return (
        <>
            <section className='flex flex-col-reverse px-8 py-20 lg:px-5 max-w-6xl mx-auto
                                md:grid md:grid-cols-2 md:gap-16 md:place-items-center'>
            
                <article className='text-center md:text-left'>
                    <h1 className='text-3xl mb-4 mt-12 md:text-4xl'>A Simple Bookmark Manager</h1>
                    <p className='mb-8'>
                      A clean and simple interface to organize your favourite websites.
                      Open a new browser tab and see your sites load instantly. 
                      Try it for free.
                    </p>

                    <ul className='flex items-center justify-center gap-3 flex-wrap  text-sm font-medium md:justify-start'>
                        <li>
                            <button className='bg-blue_set border-2 border-blue_set rounded-md py-2.5 px-2.5 text-white shadow-lg 
                                              hover:bg-white hover:text-blue_set active:translate-y-0.5'>
                                Get it on Chrome
                            </button>
                        </li>
                        <li>
                            <button className='bg-slate-100 border-2 border-slate-100 rounded-md py-2.5 px-2.5 text-slate-800 shadow-lg
                                                hover:bg-white hover:text-slate-800 hover:border-slate-800 active:translate-y-0.5'>
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