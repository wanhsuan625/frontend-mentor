import React , { useState } from 'react';
import Question from './Question';

const data = [
    {
        id: 1,
        question: 'What is Bookmark?',
        answer: 'Bookmark is a digital or physical marker used to save and easily access a specific location or webpage.',
    },
    {
        id: 2,
        question: 'How can I request a new browser?',
        answer: "You can request a new browser by downloading one from a trusted source or by\
                 installing an alternative browser through your device's app store or official website.",
    },
    {
        id: 3,
        question: 'Is there a mobile app?',
        answer: 'Yes, there is a mobile app available for download. You can find it on the app store or the official website.',
    },
    {
        id: 4,
        question: 'What about other Chromium browsers?',
        answer: 'Other Chromium-based browsers offer similar features and performance to Google Chrome \
                 due to their shared underlying technology. Some popular options include Microsoft Edge, \
                 Firefox, and Opera. You can choose one that best suits your preferences and needs.',
    },
]

function FQA (){
    const [items] = useState(data);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);
    const handleQuestionClick = (id) => { ( id === currentQuestionId ) ? setCurrentQuestionId(null) : setCurrentQuestionId(id); }
    
    return (
        <>
            <section className='text-center mx-8 mb-32 lg:mb-36 lg:px-10 xl:px-40'>
                <article>
                    <h1 className='text-2xl py-0.5 md:leading-loose'>Frequently Asked Questions</h1>
                    <p className='mx-auto md:w-2/3 lg:1/2 mt-4 mb-11 md:mb-14'>
                        Here are some of our FAQs. If you have any other questions you’d like 
                        answered please feel free to email us.
                    </p>
                </article>

                <article>
                    <div>
                        {items.map( (item) => (
                            <Question
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                                showAnswer={item.id === currentQuestionId}
                                onClick={() => handleQuestionClick(item.id) }
                            />
                        ))}
                    </div>

                    <button
                        className='mt-12 py-2 px-5 bg-blue_set border-2 border-blue_set rounded-md
                        text-white shadow-lg hover:bg-white hover:text-blue_set active:translate-y-0.5 md:mt-14'>
                        More Info
                    </button>
                </article>
            </section>
        </>
    )
}

export default FQA;