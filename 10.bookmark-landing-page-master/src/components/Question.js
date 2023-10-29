import React , { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import arrowActive from '../images/icon-arrow-red.svg';

function Question( { question , answer , showAnswer = false , onClick } ){
    
    return(
    <>
        <article className='text-left mx-auto question-size border-b first:border-t'>
            <button
                className={`w-full px-1 flex justify-between items-center cursor-pointer question--hover ${showAnswer ? 'active' : ''}`}
                onClick={onClick}
            >
                <h2 className='font-normal headline pt-5 pb-3 lg:text-xl'> {question} </h2>
                { showAnswer ? <img src={arrowActive} className='py-2 transform rotate-180 transition-transform duration-500'/> : <img src={arrow} className='py-2 transition-transform duration-500'/> }
            </button>
            <p className={`text-slate-500 leading-loose ${ showAnswer ? 'h-auto py-7'  : 'h-0 py-0' } transition-height duration-300 lg:text-base lg:leading-loose`}> { showAnswer && answer }</p>
        </article>
    </>
    )
};

export default Question;