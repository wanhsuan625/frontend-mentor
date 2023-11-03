import React from 'react';
import Website from './Website';
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';

function Download(){
    return (
        <>
            <section className='mb-36 px-8 text-center lg:mt-32 lg:px-5 max-w-6xl mx-auto'>
                <article className='mb-10'>
                    <h2 className='text-2xl leading-loose py-0.5'>Download the extension</h2>
                    <p className='mx-auto md:w-2/3 lg:1/2'>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                        got a favourite you’d like us to prioritize.
                    </p>
                </article>

                <article className='grid grid-cols-1 gap-10 justify-start sm:grid-cols-2 lg:grid-cols-3'>
                    <Website image={chrome} webName='chrome' version='62' />
                    <Website image={firefox} webName='firefox' version='55' />
                    <Website image={opera} webName='opera' version='46' />
                </article>


            </section>
        </>
    )
};

export default Download;