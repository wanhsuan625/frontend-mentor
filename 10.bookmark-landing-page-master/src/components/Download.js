import React from 'react';
import Website from './Website';
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';

function Download(){
    return (
        <>
            <section className='max-w-7xl mx-auto mb-36 px-8 text-center lg: mt-32'>
                <article className='mb-10'>
                    <h2 className='text-2xl leading-loose py-0.5'>Download the extension</h2>
                    <p className='mx-auto md:w-2/3 lg:1/2'>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                        got a favourite you’d like us to prioritize.
                    </p>
                </article>

                <article className='flex gap-10 flex-wrap'>
                    <Website image={chrome} version='62' marginTop='mt-0'/>
                    <Website image={firefox} version='55' marginTop='mt-10'/>
                    <Website image={opera} version='46' marginTop='mt-20'/>
                </article>


            </section>
        </>
    )
};

export default Download;