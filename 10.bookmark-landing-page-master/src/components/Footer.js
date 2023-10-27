import React from 'react';

function Footer(){
    return (
        <>
            <footer className='w-max-7xl h-90 bg-blue-600 text-center px-8 py-6'>
                <article className='pt-4 w-110 mx-auto'>
                    <p className='text-xs leading-10 letter-5 text-white'>35,000+ already joined</p>
                    <h1 className='text-xl text-white'>Stay up-to-date with what we’re doing</h1>

                    <div>
                        <input type="text" />
                        <button className='w-full text-sm py-3 border-2 border-red-500 font-medium rounded-md
                                         text-white bg-red-500 hover:text-red-500 hover:bg-white'>
                            Contact Us
                        </button>
                    </div>
                </article>
            </footer>
        </>
    )
}

export default Footer;