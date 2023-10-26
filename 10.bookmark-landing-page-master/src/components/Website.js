import React from 'react';
import dots from '../images/bg-dots.svg';

function Website( props ){
    return (
    <>
        <div className={`website-size mx-auto pt-12 pb-6 rounded-2xl shadow-xl text-center lg:${props.marginTop}`}>
            <img className='mx-auto mb-8' src={props.image} alt=""/>
            <h1 className='mb-1 text-xl'>Add to Chrome</h1>
            <p className='lg:text-base'>Minimum version {props.version}</p>
            <img src={dots} className='mt-8 mb-6' alt="" />
            <button className='px-9 py-2.5 bg-blue-600 border-2 border-blue-600 rounded-md text-white shadow-lg 
                               hover:bg-white hover:text-blue-600 active:translate-y-0.5'>
                Add & Install Extension
            </button>
        </div>
    </>
    )
}

export default Website;