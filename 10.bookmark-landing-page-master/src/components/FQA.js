import React , { useState } from 'react';
import Question from './Question';

const data = [
    {
        id: 1,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \
                 justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
        id: 2,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. \
                 Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, \
                 ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. \
                 Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        id: 3,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum \
                 urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed \
                 sollicitudin ex et ultricies bibendum.',
    },
    {
        id: 4,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam \
                 vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]

function FQA (){
    const [items] = useState(data);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);
    const handleQuestionClick = (id) => { ( id === currentQuestionId ) ? setCurrentQuestionId(null) : setCurrentQuestionId(id); }
    
    return (
        <>
            <section className='w-max-7xl text-center mx-8 mb-32 lg:mb-36'>
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
                        className='mt-12 py-2 px-5 bg-blue-600 border-2 border-blue-600 rounded-md
                        text-white shadow-lg hover:bg-white hover:text-blue-600 active:translate-y-0.5 md:mt-14'>
                        More Info
                    </button>
                </article>
            </section>
        </>
    )
}

export default FQA;