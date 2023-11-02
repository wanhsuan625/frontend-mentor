import React , { useState } from 'react';
import pass from '../images/icon-pass.png';
import error from '../images/icon-error.svg';

function CTA(){
    // email validation
    const [ email , setEmail ] = useState('');
    const [ checked , setChecked ] = useState(false);
    const [ valid , setValid ] = useState(true);
    const [ focusVisibleEnabled , setFocusVisibleEnabled ] = useState(true);

    let emailValue = ( e ) => {    
        let value = e.target.value;
        setEmail( value );
        setFocusVisibleEnabled(true);
        setValid(true);
        setChecked(false);
    }

    // return the result of email validation
    let handleEmail = () => {
        let emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
        let checkEmailValid = emailRegex.test( email );
        setValid( checkEmailValid );
        setChecked(true);
        setFocusVisibleEnabled(false);
    }
    
    let handleKeyPress = ( e ) => {
        if( e.key === 'Enter' ) handleEmail();
    }

    return (
        <>
            <section className='h-90 bg-blue_set px-8 py-6'>
                <article className='pt-4 w-110 mx-auto text-center'>
                    <p className='text-xs leading-10 letter-5 text-white'>35,000+ already joined</p>
                    <h1 className='text-xl text-white md:text-4xl lg:mt-6'>Stay up-to-date with what we’re doing</h1>

                    <div className='mt-8 lg:flex lg:items-start lg:gap-4'>
                        <div className={`rounded-md mb-4 text-left border-x-2 border-transparent ${ checked ? valid ? 'bg-green_set border-2 border-green_set' : 'bg-red_set border-2 border-red_set' : null}`}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email address'
                                onChange={emailValue}
                                onKeyDown={handleKeyPress}
                                className={`w-full rounded-md py-3 pl-5 focus-visible:outline-none lg:w-74
                                          ${ focusVisibleEnabled ? 'focus-visible:outline-red_set focus-visible:outline-offset-0 focus-visible:outline-dashed' : null }`}
                            />
                            { checked ? 
                                valid ?
                                    <img src={pass} alt="" className='absolute top-3.5 right-4 w-5 h-5' /> :
                                    <img src={error} alt="" className='absolute top-3.5 right-4' />
                                : null }
                            { checked ?
                                valid ?
                                    <span className='text-white text-xs pl-2.5'><i>Okay, verification passed!</i></span> :
                                    <span className='text-white text-xs pl-2.5'><i>Whoops, make sure it’s an email</i></span>
                                : null }
                        </div>
                        <button
                            onClick={handleEmail}
                            className='btn__red btn__red--hover w-full text-sm py-3 font-medium rounded-md active:translate-y-0.5 lg:max-w-31'
                        >
                            Contact Us
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default CTA;