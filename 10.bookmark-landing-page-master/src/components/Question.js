import React , { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import arrowActive from '../images/icon-arrow-red.svg';

function Question( { question , answer } ){
    const [showAnswer , setShowAnswer] = useState(false);
    
    return(
    <>
        <article className='text-left mx-auto question-size border-b first:border-t'>
            <button 
                className='w-full px-1 flex justify-between items-center cursor-pointer question--hover'
                onClick={()=> (setShowAnswer(!showAnswer))}
            >
                <h2 className='font-normal headline pt-5 pb-3 lg:text-xl'> {question} </h2>
                { showAnswer ? <img src={arrowActive} className='py-2 transform rotate-180'/> : <img src={arrow} className='py-2'/>}
            </button>
            {showAnswer && <p className='text-slate-500 py-7 leading-loose lg:text-base lg:leading-loose show'> {answer} </p>}
        </article>
    </>
    )
};

export default Question;

// red-400