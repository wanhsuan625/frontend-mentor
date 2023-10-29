import React from 'react';
import dots from '../images/bg-dots.svg';

function Website( {image , webName , version} ){
    return (
    <>
        <div className='website-size mx-auto pt-12 pb-6 rounded-2xl shadow-xl text-center lg:even:mt-10 lg:last:mt-20'>
            <img className='mx-auto mb-8' src={image} alt=""/>
            <h1 className='mb-1 text-xl'>Add to {webName}</h1>
            <p className='lg:text-base'>Minimum version {version}</p>
            <img src={dots} className='mt-8 mb-6' alt="" />
            <button className='px-9 py-2.5 bg-blue_set border-2 border-blue_set rounded-md text-white shadow-lg 
                               hover:bg-white hover:text-blue_set active:translate-y-0.5'>
                Add & Install Extension
            </button>
        </div>
    </>
    )
}

export default Website;